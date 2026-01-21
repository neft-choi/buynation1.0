<?php

namespace App\Http\Controllers\Shop\MyPage;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Mypage\CouponResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index(ApiServer $apiService)
    {
        // $couponData =  $apiService->send('shop','list_coupons');
        // dd($couponData);
        $couponData = [
            'data'=>[
                'items' => [
                    [
                    "coupon_id"=> 1,
                        "code"=> "WELCOME10",
                        "title"=> "신규회원 10% 할인",
                        "discount_type"=> "PERCENT",
                        "discount_value"=> 10,
                        "min_order_amount"=> 0,
                        "expires_at"=> "2026-01-18T00:00:00.000000",
                        "used_at"=> null
                    ]
                ]
            ]
        ];
        // dd( $couponData);
        return Inertia::render('shop/mypage/coupon/index',[
                // 'keyword' => $keyword,
                // 'sort' => $sort,
                'couponData' => CouponResource::collection($couponData['data']['items']),
            ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
