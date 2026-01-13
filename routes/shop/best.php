<?php

use App\Http\Controllers\Shop\Best\BestController;
use Illuminate\Support\Facades\Route;
    Route::get('best', [BestController::class ,'index'])->name('best.index');
