<?php

use App\Enum\RolesEnum;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth','verified','role_or_higher:'.RolesEnum::Buymer->value]) 
    ->group(function () {
    Route::get('buycle/home', function () {
        return Inertia::render('admin/buycle/index');
    })->name('buycle.home');

});