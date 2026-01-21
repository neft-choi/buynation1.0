<?php 
    use App\Http\Controllers\Shop\MyPage\IndexController;
    use App\Http\Controllers\Shop\MyPage\LikeController;
    use Carbon\Carbon;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    Route::prefix('mypage')
    ->name('mypage.') 
    ->group(function () {
        Route::get('/', [IndexController::class,'index'])->name('index');

        Route::get('welcome', function () {
            return Inertia::render('shop/mypage/welcome/index');
        })->name('welcome.index');

        //최근본상품
        Route::get('latest', function () {
            return Inertia::render('shop/mypage/latest/index');
        })->name('latest.index');

        //주문내역
        Route::get('order', function () {
            return Inertia::render('shop/mypage/order/index');
        })->name('order.index');

        //좋아요
        Route::get('like', [LikeController::class , 'index'])->name('like.index');
        Route::post('like', [LikeController::class , 'store'])->name('like.store');
        //쿠폰
        Route::get('coupon', function () {
            return Inertia::render('shop/mypage/coupon/index');
        })->name('coupon.index');

        //faq
        Route::get('faq', function () {
            return Inertia::render('shop/mypage/faq/index');
        })->name('faq.index');
    });