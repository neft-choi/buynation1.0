<?php

namespace App\Http\Middleware;

use App\Http\Resources\AuthUserResource;
use App\Http\Resources\Shop\Product\ProductMetaResource;
use App\Http\Resources\Shop\Product\ProductResource;
use App\Services\ApiServer;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');
        $user = $request->user();
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $user ? new AuthUserResource($user) : null,
            ],
            'ziggy' => fn (): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'success' => session('success'),
            'access_token' => session('api_access_token'),
            'cart' => [
                'count' => fn () => count($this->getCart()),
                'items' => fn () => $this->getCart()
            ],
            'searchSuggestions' => [
                'data' => fn () => $this->getSearchSuggestions(),
            ],
            'metaData' =>  new ProductMetaResource($this->getMetaData()),
            'recommandProducts' => ProductResource::collection($this->getRecommandProductsData()),
        ];
    }
    protected function getCart(): array
    {
        if (! session()->has('api_access_token')) {
            return [];
        }

        $api = app(ApiServer::class);

        $response = $api->send(
            role: 'shop',
            action: 'get_cart',
            payload: [],
            withAuth: true
        );

        return $response['success']
            ? $response['data']['items'] 
            : [];
    }
    protected function getSearchSuggestions(): array
    {
        // if (! session()->has('api_access_token')) {
        //     return [
        //         'popular_keywords' => [],
        //         'recommended_keywords' => [],
        //         'recommended_images' => [],
        //     ];
        // }

        $api = app(ApiServer::class);

        $response = $api->send(
            role: 'shop',
            action: 'get_search_suggestions',
            payload: [],
            withAuth: true
        );

        return $response['success']
            ? (array)  $response['data']
            : [
                'popular_keywords' => [],
                'recommended_keywords' => [],
                'recommended_images' => [],
            ];
    }
    protected function getMetaData(): array
    {
        // if (! session()->has('api_access_token')) {
        //     return [];
        // }

        $api = app(ApiServer::class);

        $response = $api->send(
            role: 'shop',
            action: 'get_product_meta',
            payload: [],
            withAuth: true
        );

        return $response['success']
            ? (array)  $response['data']
            : [
                
            ];
    }
    protected function getRecommandProductsData(): array
    {
        // if (! session()->has('api_access_token')) {
        //     return [];
        // }

        $api = app(ApiServer::class);
        $response = $api->send(
            role: 'shop',
            action: 'list_products',
            payload: ['tags'=>['가치 소비 PICK']],
            withAuth: true
        );

        return $response['success']
            ? (array)  $response['data']['items']
            : [
            ];
    }
    // protected function addCart()
    // {
    //     if (! session()->has('api_access_token')) {
    //         return 0;
    //     }

    //     $api = app(ApiServer::class);

    //     $response = $api->send(
    //         role: 'shop',
    //         action: 'upsert_cart_item',
    //         payload: [
    //             "product_id" => 1,
    //             "quantity" => 2
    //         ],
    //         withAuth: true
    //     );

    // }
}
