<?php

namespace App\Http\Controllers\Shop\Search;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Product\ProductResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
     public function __construct(
        private ApiServer $apiServer,
        private Request $request
    ) {}
     public function index()
    {
        // 여기서 필요한 데이터를 가져올 수 있습니다
        // 예: $category = Category::where('slug', $category_slug)->firstOrFail();
        $keyword = $this->request->query('keyword'); // 기본 sort
        $sort = $this->request->query('sort', 'latest'); // 기본 sort
        $benefits = $this->request->query('benefits');
        $shippingTypes = $this->request->query('shipping_types');
        $minPrice = $this->request->query('min_price');
        $maxPrice = $this->request->query('max_price');
        // $subcategory = $subcategory_slug ?? null;
        $filters = array_filter([
            'benefits' => $benefits,
            'shipping_types' => $shippingTypes,
            'min_price' => $minPrice,
            'max_price' => $maxPrice
        ]);

        $hasFilter = !empty($filters);
        if ($hasFilter) {
            $params = array_merge(['sort'=>$sort],['keyword'=>$keyword],$filters);


            $params = array_filter($params);

            $searchData = $this->apiServer->send(
                'shop',
                'search_products',
                 $params
            );

        } else {
           $params = array_merge(['sort'=>$sort],['keyword'=>$keyword],$filters);


            $params = array_filter($params);

            $searchData = $this->apiServer->send(
                'shop',
                'search_products',
                 $params
            );
            // dd($searchData);

        }
    

        return Inertia::render('shop/search/index', [
            'searchData' => ProductResource::collection($searchData['data']['items']),
            'keyword' => $keyword,
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
