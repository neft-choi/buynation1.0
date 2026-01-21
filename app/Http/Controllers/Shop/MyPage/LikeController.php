<?php

namespace App\Http\Controllers\Shop\MyPage;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Mypage\LikeResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ApiServer $apiService)
    {
        $likeData =  $apiService->send('shop','list_liked_products');
        // dd($likeData);
        return Inertia::render('shop/mypage/like/index',[
                // 'keyword' => $keyword,
                // 'sort' => $sort,
                'likeData' => LikeResource::collection($likeData['data']['items']),
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
    
    public function store(ApiServer $apiServer,Request $request)
    {
        //리퀘스트에서 상품 아이디와 수량을 받아서 넘긴다
        $itemData = $request->all();
        // dd($itemData);
        $likeData = $apiServer->send(
            'shop',
            'toggle_like_product',
            [
                'product_id'=>$itemData['product_id']
            ]
        );
        return redirect()->back()->with('success',$likeData['message']);
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
