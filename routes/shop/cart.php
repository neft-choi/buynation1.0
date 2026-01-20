<?php 
    use App\Http\Controllers\Shop\Cart\CartController;
    use Illuminate\Support\Facades\Route;
    Route::delete('cart/bulk', [CartController::class, 'bulkDestroy'])
    ->name('cart.bulk-destroy');
    Route::resource('cart', CartController::class);
