<?php

namespace App\Http\Controllers\Shop\Cart;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Cart\CartResource;
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
        $cartData = $apiServer->send('shop','get_cart');
        // dd( new CartResource($cartData['data']));
        $products = $apiServer->send('shop','get_product_meta');
        return Inertia::render('shop/cart/index',[
            'cartData' =>  new CartResource($cartData['data']),
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
        $itemData = $request->all();
        $cartData = $apiServer->send('shop','upsert_cart_item',['product_id'=>$itemData['product_id'],'quantity'=>$itemData['quantity']]);
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
    public function destroy(Request $request)
    {
        // dd($request);
    }
    public function bulkDestroy(Request $request,ApiServer $apiService)
    {
        $ids = $request->input('ids');
        if (!is_array($ids) || count($ids) === 0) {
            return response()->json([
                'message' => '삭제할 상품이 없습니다.',
            ], 422);
        }
        $apiService->send('shop','remove_cart_item',["product_id" => $ids]);
        return redirect()->back();
    }
}
