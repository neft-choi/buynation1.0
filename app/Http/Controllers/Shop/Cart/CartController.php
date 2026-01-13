<?php

namespace App\Http\Controllers\Shop\Cart;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Product\ProductResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ApiServer $apiServer,Request $request)
    {
        $cartData = $apiServer->send('shop','list_products',['tags'=>['신상품'],]);
        $products = $apiServer->send('shop','get_product_meta');
        return Inertia::render('shop/cart/index',[
            'cartData' =>  ProductResource::collection($cartData['data']['items']),
            // 'metaData' => $products['data']
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
        $cartData = $apiServer->send('shop','upsert_cart_item',['product_id'=>1,'quantity'=>2]);
        return redirect()->back()->with('success',$cartData['message']);
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
