<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\JsonResponse;
class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
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

     public function login(Request $request): JsonResponse
    {
        // 1️⃣ 프론트 입력값 검증
        $validated = $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        // 2️⃣ Flask로 그대로 전달
        $response = Http::post(config('services.external_api.base_url').'/api', [
            'role'   => 'auth',
            'action' => 'login',
            'payload'=> [
                "email" => "user12@example.com",
                "password" => "1234",
            ],
        ]);

        if (!$response->successful()) {
            return response()->json([
                'success' => false,
                'message' => '인증 서버 오류',
            ], 500);
        }

        $result = $response->json();

        // 3️⃣ 로그인 실패
        if (!$result['success']) {
            return response()->json([
                'success' => false,
                'message' => $result['message'] ?? '로그인 실패',
            ], 401);
        }

        // 4️⃣ 성공 → 쿠키 저장
        $data = $result['data'];

        return response()->json([
            'success' => true,
            'user' => [
                'id'    => $data['user']['user_id'],
                'email' => $data['user']['email'],
                'name'  => $data['user']['name'],
                'role'  => $data['user']['role'],
            ],
        ])
        ->cookie(
            'access_token',
            $data['access_token'],
            60,     // 60분
            '/',
            null,
            true,   // secure (운영 true)
            true,   // httpOnly
            false,
            'Lax'
        )
        ->cookie(
            'refresh_token',
            $data['refresh_token'],
            60 * 24 * 7,
            '/',
            null,
            true,
            true,
            false,
            'Lax'
        );
    }
}
