<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class JwtAuthMiddleware
{
    public function handle(Request $request, Closure $next)
    {
       $request->attributes->set(
            'auth_user',
            session('auth_user')
        );

        return $next($request);
    }
}
