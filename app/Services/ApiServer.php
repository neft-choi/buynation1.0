<?php

namespace App\Services;

use App\Contracts\ApiServerInterface;
use Auth;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use Illuminate\Auth\AuthenticationException;

class ApiServer implements ApiServerInterface
{
    protected string $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('services.external_api.base_url');
    }

    public function send(
        string $role,
        string $action,
        array $payload = [],
        bool $withAuth = true
        // 기본적으로 로그인 로그아웃 빼곤 다 토큰 보낼거임
    ):array {

        try {
            $request = Http::baseUrl($this->baseUrl)->acceptJson();

            if ($withAuth && session()->has('api_access_token')) {
                $request->withToken(session('api_access_token'));
            }

            $response = $request->post('/api', [
            'role' => $role,
            'action' => $action,
            'payload' => $payload,
            ]);
        } catch (ConnectionException $e) {
            // 🔥 여기서는 절대 처리하지 말고 그대로 던진다
            throw $e;
        }
        $json = $response->json();

        // 🔥 인증 만료 / 실패 공통 처리
        if ($json['success'] == false) {
            $this->forceLogout();
            throw new AuthenticationException(
                $json['message'] ?? '인증이 만료되었습니다.'
            );
        }
        // dd($json);
        return $json;
    }
     protected function forceLogout(): void
    {
        // 외부 API 토큰 제거
        session()->forget('api_access_token');

        // 라라벨 로그인도 같이 쓰는 경우
        Auth::logout();

        // 세션 완전 초기화
        session()->invalidate();
        session()->regenerateToken();
    }


}
