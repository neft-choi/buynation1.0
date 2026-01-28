<?php

use App\Enum\RolesEnum;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\BuycleController;
use App\Http\Controllers\Admin\BuygentController;
use App\Http\Controllers\Admin\UploadController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'role_or_higher:' . RolesEnum::Admin->value])
    ->prefix('admin')       // URL 앞에 /admin 붙이기
    ->name('admin.')         // 라우트 이름 앞에 admin. 붙이기
    ->group(function () {

        // Admin 
        Route::controller(AdminController::class)->group(function () {
            Route::get('/', 'index')->name('index');
        });

        // Upload 
        Route::controller(UploadController::class)->group(function () {
            Route::get('upload', 'index')->name('upload');
            Route::post('upload', 'store')->name('upload.store');
        });

        // Buygent 
        Route::controller(BuygentController::class)->prefix('buygent')->name('buygent.')->group(function () {
            Route::get('/', 'index')->name('index');          // 목록
            Route::get('create', 'create')->name('create');   // 생성 폼
            Route::post('/', 'store')->name('store');         // 생성 저장
            // Route::get('{id}/edit', 'edit')->name('edit');    // 수정 폼
            // Route::put('{id}', 'update')->name('update');     // 수정 저장
            // Route::delete('{id}', 'destroy')->name('destroy');// 삭제
        });

        // Buycle 
        Route::controller(BuycleController::class)->prefix('buycle')->name('buycle.')->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('create', 'create')->name('create');
            Route::post('/', 'store')->name('store');
        });
    });
