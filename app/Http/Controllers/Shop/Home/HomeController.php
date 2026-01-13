<?php

namespace App\Http\Controllers\Shop\Home;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Product\ProductMetaResource;
use App\Http\Resources\Shop\Product\ProductResource;
use App\Http\Resources\Shop\Product\ProductSliderResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ApiServer $apiServer,Request $request)
    {
        $tab = $request->query('tab');

        $category = $request->query('category');

        $bestCategoryQuery = $request->query('bestCategory','뷰티');

        $products = $apiServer->send('shop','get_product_meta');

        $filter_products = $apiServer->send('shop','list_products',[
            'tags'=>[$tab],
            'category'=>[$category]
        ]);
        

        $sliders = $apiServer->send('content','list_main_slide_banners',['limit'=>10]);
        $bestData = $apiServer->send('shop','list_products',['tags'=>['베스트'],]);
        $newData = $apiServer->send('shop','list_products',['tags'=>['신상품'],]);
        $pickData = $apiServer->send('shop','list_products',['tags'=>['가치 소비 PICK'],]);
        $bestCategoryData = $apiServer->send('shop','list_products',[
            'tags'=>['베스트'],
            'category'=>$bestCategoryQuery
        ]);
        // dd($bestCategoryData);
        return Inertia::render('shop/home/index',[
        'metaData' => new ProductMetaResource($products['data']),
        'filterData' => $filter_products['data'],
        'sliderData' => ProductSliderResource::collection($sliders['data']['items']),
        'bestData' => ProductResource::collection($bestData['data']['items']),
        'newData' => ProductResource::collection($newData['data']['items']),
        'pickData' => ProductResource::collection($pickData['data']['items']),
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
