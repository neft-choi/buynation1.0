<?php

namespace App\Http\Controllers\Shop\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Product\ProductDetailResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function __construct(
        private ApiServer $apiServer,
        private Request $request
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show($product)
    {
        $productDetailData = $this->apiServer->send(
                'shop',
                'get_product_detail',
                 [
                     "product_id"  => $product
                 ]
        );
        // dd($searchData);
        //
        return Inertia::render('shop/product/show',[
            'productDetailData' => new ProductDetailResource($productDetailData['data']) 
        ]);
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
