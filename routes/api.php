<?php

use App\Http\Controllers\CategoryArticleController;
use App\Http\Controllers\KategoriController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', [CategoryArticleController::class, 'index']);
Route::post('/categories', [CategoryArticleController::class, 'store']);
Route::put('/categories/{categoryArticle}', [CategoryArticleController::class, 'update']);
Route::delete('/categories/{categoryArticle}', [CategoryArticleController::class, 'destroy']);
