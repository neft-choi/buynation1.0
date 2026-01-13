<?php

use App\Enum\RolesEnum;
use App\Http\Controllers\Shop\Home\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('shop')       
    ->name('shop.')   
    ->group(function () {

    require __DIR__.'/shop/home.php';
    require __DIR__.'/shop/best.php';
    require __DIR__.'/shop/category.php';
    require __DIR__.'/shop/search.php';
    require __DIR__.'/shop/product.php';
    Route::middleware([
        'auth',
        'role_or_higher:' . RolesEnum::Buymer->value
    ])->group(function () {
        require __DIR__.'/shop/mypage.php';
        require __DIR__.'/shop/cart.php';

        require __DIR__.'/shop/order.php';
    });



});