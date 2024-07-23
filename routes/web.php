<?php

use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\ImagesGalleryController;
use App\Http\Controllers\CategoryArticleController;
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
    return Inertia::render('Home', ['route' => 'home', 'apiUrl' => env('REACT_APP_API_HYGRAPH')]);
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

Route::prefix('/admin')->middleware(['auth', 'verified'])->group(function () {
    Route::prefix('category_article')->group(function () {
        Route::get('/', [CategoryArticleController::class, 'index'])->name('categories.index');
        Route::get('/create', [CategoryArticleController::class, 'create'])->name('categories.create');
        Route::post('/create', [CategoryArticleController::class, 'store'])->name('categories.store');
        Route::get('/edit/{category}', [CategoryArticleController::class, 'edit'])->name('categories.edit');
        Route::put('/edit/{category}', [CategoryArticleController::class, 'update'])->name('categories.update');
        Route::delete('/{category}', [CategoryArticleController::class, 'destroy'])->name('categories.destroy');
    });
    Route::get('/', [ContactUsController::class, "show"]);
    Route::get('/articles', function () {
        return Inertia::render('admin/articles');
    });
    Route::get('/articles/create', function () {
        return Inertia::render('admin/articles/create');
    });

    Route::get('/', [ContactUsController::class, "show"]);
    Route::get('/articles', function () {
        return Inertia::render('admin/articles');
    });
    Route::get('/articles/create', function () {
        return Inertia::render('admin/articles/create');
    });
    Route::prefix('/contact_us')->group(function () {
        Route::get('/', [ContactUsController::class, 'index'])->name('contactUs.index');
        Route::get('/edit/{contactUs}', [ContactUsController::class, 'edit'])->name('contactUs.edit');
        Route::put('/edit/{contactUs}', [ContactUsController::class, 'update'])->name('contactUs.update');
        Route::delete('/{contactUs}', [ContactUsController::class, 'destroy'])->name('contactUs.destroy');
    });
    Route::prefix('/images_gallery')->group(function () {
        Route::get('/', [ImagesGalleryController::class, 'index'])->name('images.index');
        Route::get('/create', [ImagesGalleryController::class, 'create'])->name('images.create');
        Route::post('/create', [ImagesGalleryController::class, 'store'])->name('images.store');
        Route::get('/edit/{imagesGallery}', [ImagesGalleryController::class, 'edit'])->name('images.edit');
        Route::put('/edit/{imagesGallery}', [ImagesGalleryController::class, 'update'])->name('images.update');
        Route::delete('/{imagesGallery}', [ImagesGalleryController::class, 'destroy'])->name('images.destroy');
    });
});

// Testing without middleware auth
// Route::prefix('/admin')->group(function () {
//     Route::get('/', [ContactUsController::class, "show"]);
//     Route::get('/articles', function () {
//         return Inertia::render('admin/articles');
//     });
//     Route::get('/articles/create', function () {
//         return Inertia::render('admin/articles/create');
//     });
//     Route::prefix('category_article')->group(function () {
//         Route::get('/', [CategoryArticleController::class, 'index'])->name('categories.index');
//         Route::get('/create', [CategoryArticleController::class, 'create'])->name('categories.create');
//         Route::post('/create', [CategoryArticleController::class, 'store'])->name('categories.store');
//         Route::get('/edit/{category}', [CategoryArticleController::class, 'edit'])->name('categories.edit');
//         Route::put('/edit/{category}', [CategoryArticleController::class, 'update'])->name('categories.update');
//         Route::delete('/{category}', [CategoryArticleController::class, 'destroy'])->name('categories.destroy');
//     });

//     Route::get('/', [ContactUsController::class, "show"]);
//     Route::get('/articles', function () {
//         return Inertia::render('admin/articles');
//     });
//     Route::get('/articles/create', function () {
//         return Inertia::render('admin/articles/create');
//     });
//     Route::prefix('/contact_us')->group(function () {
//         Route::get('/', [ContactUsController::class, 'index'])->name('contactUs.index');
//         Route::get('/edit/{contactUs}', [ContactUsController::class, 'edit'])->name('contactUs.edit');
//         Route::put('/edit/{contactUs}', [ContactUsController::class, 'update'])->name('contactUs.update');
//         Route::delete('/{contactUs}', [ContactUsController::class, 'destroy'])->name('contactUs.destroy');
//     });
//     Route::prefix('/images_gallery')->group(function () {
//         Route::get('/', [ImagesGalleryController::class, 'index'])->name('images.index');
//         Route::get('/create', [ImagesGalleryController::class, 'create'])->name('images.create');
//         Route::post('/create', [ImagesGalleryController::class, 'store'])->name('images.store');
//         Route::get('/edit/{imagesGallery}', [ImagesGalleryController::class, 'edit'])->name('images.edit');
//         Route::put('/edit/{imagesGallery}', [ImagesGalleryController::class, 'update'])->name('images.update');
//         Route::delete('/{imagesGallery}', [ImagesGalleryController::class, 'destroy'])->name('images.destroy');
//     });
// });

Route::get('/about-us', function () {
    return Inertia::render('about', ['route' => 'about-us', 'apiUrl' => env('REACT_APP_API_HYGRAPH')]);
})->name('about-us');

Route::get('/blog', function () {
    return Inertia::render('blog', ['route' => 'blog', 'apiUrl' => env('REACT_APP_API_HYGRAPH')]);
})->name('blog');

Route::get('/contact-us', function () {
    return Inertia::render('contact', ['route' => 'contact-us', 'apiUrl' => env('REACT_APP_API_HYGRAPH')]);
})->name("contact-us");

Route::post('/contact-us', [ContactUsController::class, "create"])->name('contact-us.post');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('contactusdata', [ContactUsController::class, "index"])->name('contactusdata');

require __DIR__ . '/auth.php';

// use Illuminate\Support\Facades\Redirect;

// Route::get('/phpmyadmin', function () {
//     return Redirect::to('http://localhost/phpmyadmin');
// });
