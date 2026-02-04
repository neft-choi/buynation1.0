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

    //상품관리
    Route::prefix('products')        
    ->name('products.')
    ->group(function(){
        Route::get('product_1', function () {
            return Inertia::render('seller/products/product_1/index');
        })->name('product_1.index');

        Route::get('product_2', function () {
            return Inertia::render('seller/products/product_2/index');
        })->name('product_2.index');
    });

    Route::prefix('orders')        
    ->name('orders.')
    ->group(function(){
        Route::get('order_1', function () {
            return Inertia::render('seller/orders/order_1/index');
        })->name('order_1.index');

        Route::get('order_2', function () {
            return Inertia::render('seller/orders/order_2/index');
        })->name('order_2.index');

        Route::get('order_3', function () {
            return Inertia::render('seller/orders/order_3/index');
        })->name('order_3.index');

        Route::get('order_4', function () {
            return Inertia::render('seller/orders/order_4/index');
        })->name('order_4.index');

        Route::get('order_5', function () {
            return Inertia::render('seller/orders/order_5/index');
        })->name('order_5.index');

        Route::get('order_6', function () {
            return Inertia::render('seller/orders/order_6/index');
        })->name('order_6.index');
    });

    Route::prefix('payments')        
    ->name('payments.')
    ->group(function(){
        Route::get('/', function () {
            return Inertia::render('seller/payments/index');
        })->name('index');
    });

     Route::prefix('customers')        
    ->name('customers.')
    ->group(function(){

        Route::get('customer_1', function () {
            return Inertia::render('seller/customers/customer_1/index');
        })->name('customer_1.index');

            Route::get('customer_2', function () {
            return Inertia::render('seller/customers/customer_2/index');
        })->name('customer_2.index');

        Route::get('customer_3', function () {
            return Inertia::render('seller/customers/customer_3/index');
        })->name('customer_3.index');
    });

});