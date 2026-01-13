<?php

namespace App\Http\Middleware;

use App\Services\ApiServer;
use Closure;
use Firebase\JWT\ExpiredException;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Http;


class RequireUserRole
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->cookie('access_token');

        if (!$token) {
            return redirect('/login');
        }

        try {
            $payload = JWT::decode(
                $token,
                new Key(config('jwt.secret'), 'HS256')
            );
        } catch (ExpiredException $e) {
            return redirect('/login')->with('error', '로그인이 만료되었습니다.');
        } catch (\Throwable $e) {
            return redirect('/login');
        }

        if (($payload->role ?? null) !== 'user') {
            abort(403, '접근 권한이 없습니다.');
        }

        // 필요하면 auth_user 주입
        $request->attributes->set('auth_user', [
            'user_id' => $payload->sub,
            'email'   => $payload->email,
            'role'    => $payload->role,
        ]);

        return $next($request);
    }
}
