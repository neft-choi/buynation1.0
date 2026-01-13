<?php

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

Route::fallback(function () {
    return redirect('home'); 
});
Route::get('/', function () {
    return redirect('/shop/home');
})->name('/');
Route::post('test',function(Request $request){
     try{
            // $data = $request->all();
            $client = new Client();
            $response = $client->post('http://3.35.79.133:5000/api', [
                'json' => [
                    'role' => 'auth',
                    'action' => 'login',
                    'payload' => [
                        "email"=> "user@example11.com",
                        "password" => "1234",
                        // "name"=> "홍길동",
                        // "phone"=> "010-0000-0000"
                    ]
                ],
                'timeout' => 6000,
                'connect_timeout' => 1000,
                'headers' => [
                    'Content-Type' => 'application/json',
                    'accept' => 'application/json',
                ],
            ]);
            // $response = Http::post('http://3.35.79.133:5000/api', [
            //     'role' => 'auth',
            //     'action' => 'register',
            //     'payload' => [
            //         "email"=> "user@example.com",
            //         "password" => "1234",
            //         "name"=> "홍길동",
            //         "phone"=> "010-0000-0000"
            //     ]
            // ]);

            $result = json_decode($response->getBody(), true);
            // Log::info($user);
            Log::info($result);
            // Log::info($request->judgment_text);
            
            return response()->json([
                'status' => 'success',
                'data' => $result,
            ]);

        }catch(\GuzzleHttp\Exception\ClientException $e){

            return response()->json([
                'status' => 'fail',
                'message' => '서버에서 에러가 발생했습니다. 다시 시도해주세요'
            ]);
        }
})->name('test');

Route::get('home', function () {
    $user = Auth::user();
      if (!$user) {
        return redirect('/shop/home');
    }

    
    $path = $user->roles()->first()->name;

    if($path === 'developer'){
        $path = 'admin';
    }

    if($path ==='buymer'){
        $path = 'shop';
    }

    return redirect($path.'/home');
})->name('home');

require __DIR__.'/admin.php';
require __DIR__.'/buygent.php';
require __DIR__.'/buycle.php';
require __DIR__.'/buymer.php';
require __DIR__.'/guest.php';
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
