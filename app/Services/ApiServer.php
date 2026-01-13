<?php

namespace App\Services;

use App\Contracts\ApiServerInterface;
use Illuminate\Support\Facades\Http;

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
        $request = Http::baseUrl($this->baseUrl)->acceptJson();

        if ($withAuth && session()->has('api_access_token')) {
            $request->withToken(session('api_access_token'));
        }

        return $request->post('/api', [
            'role' => $role,
            'action' => $action,
            'payload' => $payload,
        ])->json();
    }
}
