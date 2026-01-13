<?php

use App\Enum\RolesEnum;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth','verified','role_or_higher:'.RolesEnum::Guest->value])->group(function (): void {
    Route::get('guest/home', function () {
         return Inertia::render('admin/home/index');
    })->name('guest.home');
});