<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        return Inertia::render('admin/articles', ['articles' => $articles]);
    }

    public function create()
    {
        return Inertia::render('admin/articles/create');
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
        ]);

        Article::create($validatedData);

        return redirect('/admin/articles/')->with('success', 'Article created successfully.');
    }

    public function show(Article $article)
    {
        return Inertia::render('admin/articles/show', ['article' => $article->toArray()]);
    }

    public function edit(Article $article)
    {
        return Inertia::render('admin/articles/edit', ['article' => $article]);
    }

    public function update(Request $request, Article $article)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:64',
            'excerpt' => 'required|string|max:64',
            'description' => 'required|string|max:64',
            'image_url' => 'nullable|string|max:64',
            'small_image_url' => 'nullable|string|max:64',
            'content' => 'required|string',
        ]);

        $article->update($validatedData);

        return redirect()->route('articles.index')->with('success', 'Article updated successfully.');
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return redirect()->route('articles.index')->with('success', 'Article deleted successfully.');
    }
}
