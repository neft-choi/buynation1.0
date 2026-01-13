<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use App\Services\ApiServer;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Spatie\Permission\Models\Role;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();
        //회원가입 테스트
        
        /**
         * 1. API 서버로 로그인 요청
         */
        $apiServer = app(ApiServer::class); // ⭐ 여기서 해결
        $response = $apiServer->send(
            role: 'auth',
            action: 'login',
            payload: [
                    'email'    => $this->email,
                    'password' => $this->password,
                ],
            withAuth:false
        );
        // $response = Http::timeout(5)
        //     ->post(config('services.external_api.base_url').'/api', [
        //         'role'   => 'auth',
        //         'action' => 'login',
        //         'payload' => [
        //             'email'    => $this->email,
        //             'password' => $this->password,
        //         ],
        //     ]);
        if (!$response['success']) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'email' => $response['message'],
                'password' => $response['message'],
            ]);
        }

        $data = $response['data'];

        /**
         * 2. API에서 내려준 user 정보
         */
        $apiUser = $data['user'];
        $apiRole = $apiUser['role'];
        if($apiRole === 'user') {
            $apiRole = 'buymer';
        };
        /**
         * 3. Laravel User 매핑 / 생성
         */
        $user = User::firstOrCreate(
            ['external_id' => $apiUser['user_id']],
            [
                'email' => $apiUser['email'] ?? null,
                'name'  => $apiUser['name']  ?? 'unknown',
            ]
        );

        /**
         * 4. Laravel 세션 로그인
         */
        Role::findOrCreate($apiRole, 'web');
        $user->syncRoles([$apiRole]);
        Auth::login($user, $this->boolean('remember'));

        /**
         * 5. (선택) JWT 저장 위치
         * - access_token: 세션 or httpOnly 쿠키
         * - refresh_token: httpOnly 쿠키 권장
         */
        session([
            'api_access_token'  => $data['access_token'],
        ]);

        RateLimiter::clear($this->throttleKey());
        //이 위로는 JWT 로그인
        // if (! Auth::attempt($this->only('email', 'password'), $this->boolean('remember'))) {
        //     RateLimiter::hit($this->throttleKey());

        //     throw ValidationException::withMessages([
        //         'email' => __('auth.failed'),
        //     ]);
        // }
        // 나중에 삭제해야함
        //
        // $user = User::where('email', $this->email)->first();

        // if ($user && $user->password === $this->password) {
        //     Auth::login($user, $this->boolean('remember'));
        // } else {
        //     throw ValidationException::withMessages([
        //         'email' => '입력하신 정보가 올바르지 않습니다.',
        //         'password' => '입력하신 정보가 올바르지 않습니다.',
        //     ]);
        // }
        
        // RateLimiter::clear($this->throttleKey());
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => __('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->string('email')).'|'.$this->ip());
    }
}
