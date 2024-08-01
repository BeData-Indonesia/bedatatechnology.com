<?php

namespace App\Http\Controllers;

use App\Models\ImagesGallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImagesGalleryController extends Controller
{
    public function index()
    {
        $imagesGallery = ImagesGallery::all();
        return Inertia::render('admin/images_gallery/index', ['imagesGallery' => $imagesGallery]);
    }

    public function fetchImagesForArticleCreation()
    {
        $imagesGallery = ImagesGallery::all();
        $imagesGallery = $imagesGallery->map(function ($image) {
            $image->path = asset('storage/' . $image->path);
            return $image;
        });

        return Inertia::render('admin/articles/create', [
            'imagesGallery' => $imagesGallery,
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/images_gallery/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        $path = $request->file('image')->store('images_gallery', 'public');

        ImagesGallery::create([
            'filename' => $request->file('image')->getClientOriginalName(),
            'path' => $path,
        ]);

        return redirect()->route('images.index')->with('message', 'Image uploaded successfully');
    }

    public function edit(ImagesGallery $imagesGallery)
    {
        return Inertia::render('admin/images_gallery/edit', ['imagesGallery' => $imagesGallery]);
    }

    public function update(Request $request, ImagesGallery $imagesGallery)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
        ]);

        // Delete old image
        if ($imagesGallery->path) {
            Storage::disk('public')->delete($imagesGallery->path);
        }

        $path = $request->file('image')->store('images_gallery', 'public');

        $imagesGallery->update([
            'filename' => $request->file('image')->getClientOriginalName(),
            'path' => $path,
        ]);

        return redirect()->route('images.index')->with('message', 'Image updated successfully');
    }
    public function destroy(ImagesGallery $imagesGallery)
    {
        if ($imagesGallery->path) {
            Storage::disk('public')->delete($imagesGallery->path);
        }

        $imagesGallery->delete();
        return redirect()->route('images.index')->with('message', 'Image deleted successfully');
    }
}
