<?php

use App\Enum\RolesEnum;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth','verified','role_or_higher:'.RolesEnum::Seller->value])
    ->prefix('seller')       // URL 앞에 /admin 붙이기
    ->name('seller.')    
    ->group(function () {

    Route::get('/', function () {
        return Inertia::render('seller/index');
    })->name('index');

    Route::get('products/create', function () {
        return Inertia::render('seller/products/create');
        })->name('create');
    
    Route::get('products/show', function () {
        return Inertia::render('seller/products/show');
        })->name('show');

});