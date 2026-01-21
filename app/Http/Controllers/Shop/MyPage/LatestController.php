<?php

namespace App\Http\Controllers\Shop\MyPage;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Mypage\LatestResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LatestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ApiServer $apiService)
    {
        $latestData = $apiService->send('shop','list_recent_products');
        // dd($latestData);
        return Inertia::render('shop/mypage/latest/index',[
            'latestData' => LatestResource::collection($latestData['data']['items'])
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
