<?php

use App\Http\Controllers\Shop\Search\SearchController;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('search', [SearchController::class, 'index'])->name('search.index');

    