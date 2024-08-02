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
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|string|max:255',
        ]);

        $imagePath = $request->file('image')->store('images_gallery', 'public');

        $image = new ImagesGallery();
        $image->title = $request->input('title');
        $image->filename = $request->file('image')->getClientOriginalName();
        $image->path = $imagePath;
        $image->save();

        return redirect()->route('images.index')->with('success', 'Image uploaded successfully.');
    }

    public function edit($id)
    {
        $image = ImagesGallery::findOrFail($id);
        return inertia('admin/images_gallery/edit', ['imagesGallery' => $image]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|string|max:255',
        ]);

        $image = ImagesGallery::findOrFail($id);
        $image->title = $request->input('title');

        if ($request->hasFile('image')) {
            // Delete old image
            Storage::disk('public')->delete($image->path);

            // Store new image
            $imagePath = $request->file('image')->store('images', 'public');
            $image->filename = $request->file('image')->getClientOriginalName();
            $image->path = $imagePath;
        }

        $image->save();

        return redirect()->route('images.index')->with('success', 'Image updated successfully.');
    }

    public function destroy($id)
    {
        $image = ImagesGallery::findOrFail($id);

        // Delete the image file from storage
        Storage::disk('public')->delete($image->path);

        // Delete the image record from database
        $image->delete();

        return redirect()->route('images.index')->with('success', 'Image deleted successfully.');
    }
}
