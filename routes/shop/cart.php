<?php 
    use App\Http\Controllers\Shop\Cart\CartController;
    use Illuminate\Support\Facades\Route;
    Route::resource('cart', CartController::class);