<?php

use App\Http\Controllers\Shop\Product\ProductController;
use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;
    // Route::prefix('product')
    // ->name('product.') 
    // ->group(function () {
    //      // 대분류
    //      Route::get('{product}', function ($product) {
    //         return Inertia::render('shop/product/index', [
    //             'product' => $product,
    //         ]);
    //     })->name('show');
        
    // });
    Route::get('product/{product}', [ProductController::class, 'show'])->name('product.show');