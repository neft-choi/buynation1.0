<?php

namespace App\Http\Controllers\Shop\Best;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Product\ProductMetaResource;
use App\Http\Resources\Shop\Product\ProductResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ApiServer $apiServer,Request $request)
    {
        $categoryQuery = (string) $request->query('category');
        $sortQuery = (string) $request->query('sort');

        $products = $apiServer->send('shop','get_product_meta');

        $bestCategoryData = $apiServer->send('shop','list_products',[
            'tags'=>['베스트'],
            'category'=>$categoryQuery,
            'sort'=>$sortQuery
        ]);
        return Inertia::render('shop/best/index',[
        'metaData' => new ProductMetaResource($products['data']),
        'bestCategoryData' => ProductResource::collection($bestCategoryData['data']['items'])
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
