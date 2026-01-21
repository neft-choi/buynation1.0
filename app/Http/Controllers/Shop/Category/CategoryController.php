<?php

namespace App\Http\Controllers\Shop\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Product\ProductResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(
        private ApiServer $apiServer,
        private Request $request
    ) {}
     public function index(
        string $category_slug, 
        ?string $subcategory_slug = null, 
        ?string $child_slug = null,
    )
    {
        // 여기서 필요한 데이터를 가져올 수 있습니다
        // 예: $category = Category::where('slug', $category_slug)->firstOrFail();
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

        $params = array_merge(['sort'=>$sort],['keyword'=>$category_slug],$filters);


        $params = array_filter($params);

        $categoryData = $this->apiServer->send(
            'shop',
            'search_category',
                $params
        );
        
        // dd($params);


        return Inertia::render('shop/category/index', [
            'categoryData' => ProductResource::collection($categoryData['data']['items']),
            'category_slug' => $category_slug,
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
