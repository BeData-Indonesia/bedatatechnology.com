<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\CategoryArticle;
use App\Models\ImagesGallery;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        return Inertia::render('admin/articles', ['articles' => $articles]);
    }

    public function create()
    {
        $categories = CategoryArticle::all();
        $imagesGallery = ImagesGallery::all();

        return Inertia::render('admin/articles/create', [
            'categories' => $categories,
            'imagesGallery' => $imagesGallery,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:64',
            'excerpt' => 'required|string|max:64',
            'description' => 'required|string|max:64',
            'image_url' => 'nullable|string|max:64',
            'small_image_url' => 'nullable|string|max:64',
            'content' => 'required|string',
            'categories' => 'required|array',
            'categories.*' => 'exists:category_articles,id',
        ]);

        $article = Article::create($validatedData);

        $article->categories()->attach($request->input('categories'));

        return redirect('/admin/articles/')->with('success', 'Article created successfully.');
    }

    public function show(Article $article)
    {
        $article->load('categories');

        return Inertia::render('admin/articles/show', [
            'article' => $article,
        ]);
    }

    public function edit(Article $article)
    {
        $categories = CategoryArticle::all();

        return Inertia::render('admin/articles/edit', [
            'article' => $article,
            'categories' => $categories,
        ]);
    }


    // public function update(Request $request, Article $article)
    // {
    //     $validatedData = $request->validate([
    //         'title' => 'required|string|max:64',
    //         'excerpt' => 'required|string|max:64',
    //         'description' => 'required|string|max:64',
    //         'image_url' => 'nullable|string|max:64',
    //         'small_image_url' => 'nullable|string|max:64',
    //         'content' => 'required|string',
    //     ]);

    //     $article->update($validatedData);

    //     return redirect()->route('articles.index')->with('success', 'Article updated successfully.');
    // }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:64',
            'excerpt' => 'required|string|max:64',
            'description' => 'required|string|max:64',
            'image_url' => 'nullable|string|max:64',
            'small_image_url' => 'nullable|string|max:64',
            'categories' => 'array',
            'categories.*' => 'exists:category_articles,id',
        ]);

        $article = Article::findOrFail($id);
        $article->update($request->only(['title', 'excerpt', 'description', 'image_url', 'small_image_url', 'content']));

        // Sync categories
        $article->categories()->sync($request->input('categories', []));

        return redirect()->route('articles.index')->with('success', 'Article updated successfully.');
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return redirect()->route('articles.index')->with('success', 'Article deleted successfully.');
    }
}
