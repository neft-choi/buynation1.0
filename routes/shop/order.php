<?php 
    use Carbon\Carbon;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    Route::get('order',function(){
        return Inertia::render('shop/order/index');
    })->name('order.index');