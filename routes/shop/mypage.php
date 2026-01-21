<?php 
    use App\Http\Controllers\Shop\MyPage\IndexController;
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
        Route::get('like', function (Request $request) {
            $keyword = $request->query('keyword');
            $sort = $request->query('sort', 'recent'); // 기본값 recent

            // 예시: 실제론 DB 검색
            $products = collect([
                [
                    'title' => '홍삼정 에너지',
                    'image'=>'https://placehold.co/600x400',
                    'price' => 3000, 
                    'review' => 210,
                    'createdAt'=> Carbon::now()->addDays(2)
                ],
                ['title' => '홍삼 스틱 6년근', 'image'=>'https://placehold.co/600x400', 'price' => 19900, 'review' => 210,'createdAt'=> Carbon::now()->addDays(1)],
                ['title' => '홍삼 에센스', 'image'=>'https://placehold.co/600x400', 'price' => 199020, 'review' => 210,'createdAt'=> Carbon::now()],
            ]);

            // 검색 filtering
            if ($keyword) {
                $products = $products->filter(function ($item) use ($keyword) {
                    return str_contains($item['title'], $keyword);
                })->values();
            }

            // sort 처리
            $products = match ($sort) {
                'price_asc' => $products->sortBy('price')->values(),
                'price_desc' => $products->sortByDesc('price')->values(),
                'review_desc' => $products->sortByDesc('review')->values(),
                default => $products->values(),
            };
                    return Inertia::render('shop/mypage/like/index',[
                'keyword' => $keyword,
                'sort' => $sort,
                'products' => $products,
            ]);
        })->name('like.index');

        //쿠폰
        Route::get('coupon', function () {
            return Inertia::render('shop/mypage/coupon/index');
        })->name('coupon.index');

        //faq
        Route::get('faq', function () {
            return Inertia::render('shop/mypage/faq/index');
        })->name('faq.index');
    });