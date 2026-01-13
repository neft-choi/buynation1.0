<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Http;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleShopAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, ...$roles)
{
    $token = $request->cookie('access_token');
    abort_if(!$token, 401);

    try {
        $payload = JWT::decode(
            $token,
            new Key(config('jwt.public_key'), 'RS256')
        );
    } catch (\Exception $e) {
        abort(401);
    }

    // developer는 무조건 통과
    if (($payload->role ?? null) === 'developer') {
        return $next($request);
    }

    // 역할 제한 없는 라우트
    if (empty($roles)) {
        return $next($request);
    }

    if (in_array($payload->role, $roles, true)) {
        return $next($request);
    }

    abort(403);
}
}
