<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Inertia\Inertia;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);
        $middleware->alias([
            'role' => \Spatie\Permission\Middleware\RoleMiddleware::class,
            'permission' => \Spatie\Permission\Middleware\PermissionMiddleware::class,
            'role_or_permission' => \Spatie\Permission\Middleware\RoleOrPermissionMiddleware::class,
            'role_or_higher' => \App\Http\Middleware\HandleRoleOrHigher::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
          // 🔥 외부 API 서버 다운
        $exceptions->render(function (ConnectionException $e, $request) {

           return Inertia::render('errors/index', [
                'message' => '외부 서비스 장애로 잠시 이용이 어렵습니다.',
            ])->toResponse($request)->setStatusCode(503);
        });

        // 🔥 인증 만료
        $exceptions->render(function (AuthenticationException $e, $request) {

            if ($request->expectsJson()) {
                return response()->json([
                    'message' => $e->getMessage(),
                ], 401);
            }

            return redirect()->guest(route('login'));
        });
    })->create();
