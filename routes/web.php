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

Route::get('test',function(Request $request){
     return Inertia::render('test/index');
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
require __DIR__.'/seller.php';
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
