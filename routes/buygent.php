<?php

use App\Enum\RolesEnum;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth','verified','role_or_higher:'.RolesEnum::Buygent->value])->group(function () {
    Route::get('buygent/home', function () {
         return Inertia::render('admin/home/index');
    })->name('buygent.home');
});