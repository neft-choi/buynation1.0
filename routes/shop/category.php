<?php

use App\Http\Controllers\Shop\Category\CategoryController;
use Illuminate\Support\Facades\Route;
   
      Route::get('category/{category_slug}/{subcategory_slug?}/{child_slug?}', [CategoryController::class, 'index'])
    ->name('category.index');
 