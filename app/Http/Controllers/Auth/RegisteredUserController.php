<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Services\ApiServer;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException;
use Spatie\Permission\Models\Role;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
 public function store(Request $request): RedirectResponse
    {
        // 기본 유효성 검사
        $request->validate([
            'accountType' => 'required|string|in:buymer,buycle,buygent,shop',
            'agreements' => 'required|array',
            'agreements.agree1' => 'required|accepted',
            'agreements.agree2' => 'required|accepted',
            'agreements.agree3' => 'required|accepted',
            'agreements.agree4' => 'required|accepted',
            'username' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|string|lowercase|email|max:255',
        ]);

        /**
         * 1. API 서버로 회원가입 요청
         */
        $apiServer = app(ApiServer::class);
        $response = $apiServer->send(
            role: 'auth',
            action: 'register',
            payload: [
                'account_type' => $request->accountType,
                'username' => $request->username,
                'password' => $request->password,
                'password_confirmation' => $request->password_confirmation,
                'name' => $request->name,
                'phone' => $request->phone,
                'email' => $request->email,
                'agreements' => $request->agreements,
            ],
            withAuth: false
        );

        if (!$response['success']) {
            throw ValidationException::withMessages([
                'email' => $response['message'] ?? '회원가입에 실패했습니다.',
            ]);
        }

        /**
         * 2. 회원가입 성공 후 LoginRequest로 로그인 처리
         * - API 서버에서 토큰 받기
         * - Laravel User 생성 or 매핑
         * - 세션 로그인
         */
        $loginRequest = LoginRequest::create(
            route('login'),
            'POST',
            [
                'email' => $request->email,
                'password' => $request->password,
                'remember' => false, // 회원가입 시에는 remember 체크 안함
            ]
        );

        // LoginRequest의 authenticate 메서드 실행
        $loginRequest->authenticate();

        // 세션 재생성
        $request->session()->regenerate();

        /**
         * 3. Registered 이벤트 발생 (메일 발송 등)
         */
        $user = Auth::user();
        event(new Registered($user));

        return redirect()->route('shop.mypage.welcome.index');
    }
}
