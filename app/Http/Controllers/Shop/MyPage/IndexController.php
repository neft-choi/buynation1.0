<?php

namespace App\Http\Controllers\Shop\MyPage;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shop\Mypage\MypageResource;
use App\Services\ApiServer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(ApiServer $apiService)
    {
        $mypageData = $apiService->send('shop','my_page_summary');
        // dd(new MypageResource($mypageData['data']));
        return Inertia::render('shop/mypage/index',[
            'mypageData' => new MypageResource($mypageData['data'])
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
