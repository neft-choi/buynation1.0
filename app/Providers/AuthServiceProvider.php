<?php

namespace App\Providers;
// use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // $this->registerPolicies(); // 이제 존재하므로 오류 없음
        // Gate::before(function ($user, $ability) {
        //     dd($user->getRoleNames());
        //     if ($user->hasRole('admin') || $user->hasRole('developer')) {
        //         return true; // 모든 권한 허용
        //     }
        // });
    }
}
