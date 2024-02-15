<?php

use App\Http\Controllers\ContactUsController;
use App\Models\ContactUs;
use Illuminate\Foundation\Application;
use Illuminate\Http\Client\Request;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home',['route'=>'home','apiUrl'=>env('REACT_APP_API_HYGRAPH')]);
})->name('home');

Route::prefix('/services')->group(function () {
    Route::get('/website', function () {
        return Inertia::render('services/website', ['route' => 'services', 'apiUrl' => env('REACT_APP_API_HYGRAPH')]);
    })->name('services.website');

    Route::get('/software', function () {
        return Inertia::render('services/software', ['route' => 'services', 'apiUrl' => env('REACT_APP_API_HYGRAPH')]);
    })->name('services.software');

    Route::get('/marketing', function (HttpRequest $request) {
        return Inertia::render('services/marketing', [
            'route' => 'services',
            'apiUrl' => env('REACT_APP_API_HYGRAPH'),
            'fullUrl' => $request->fullUrl(),
        ]);
    })->name('services.marketing');

    Route::get('/', function () {
        return Inertia::render('services', ['route' => 'services', 'apiUrl' => env('REACT_APP_API_HYGRAPH')]);
    })->name('services');
});

Route::prefix('/admin')->group(function (){
        Route::get('/',[ContactUsController::class,"show"]);
        Route::get('/articles',function(){
            return Inertia::render('admin/articles');
        });
});

Route::get('/about-us', function () {
    return Inertia::render('about',['route'=>'about-us','apiUrl'=>env('REACT_APP_API_HYGRAPH')]);
})->name('about-us');

Route::get('/blog', function () {
    return Inertia::render('blog',['route'=>'blog','apiUrl'=>env('REACT_APP_API_HYGRAPH')]);
})->name('blog');

Route::get('/contact-us', function () {
    return Inertia::render('contact',['route'=>'contact-us','apiUrl'=>env('REACT_APP_API_HYGRAPH')]);
})->name("contact-us");

Route::post('/contact-us',[ContactUsController::class,"create"])->name('contact-us.post');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('contactusdata',[ContactUsController::class,"index"])->name('contactusdata');

require __DIR__.'/auth.php';
