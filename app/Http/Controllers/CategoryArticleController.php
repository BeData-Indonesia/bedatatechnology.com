<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\CategoryArticle;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CategoryArticleController extends Controller
{
    public function index()
    {
        $categories = CategoryArticle::all();
        return Inertia::render('admin/articles/category', ['categories' => $categories]);
    }

    public function create()
    {
        $categories = CategoryArticle::all();
        return Inertia::render('admin/articles/create', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:category_articles|max:255',
        ]);

        CategoryArticle::create($request->all());
        return redirect()->route('categories.index')->with('message', 'Category created successfully');
    }

    public function edit(Article $article)
    {
        $categories = CategoryArticle::all();
        return Inertia::render('admin/articles/edit', ['article' => $article, 'categories' => $categories]);
    }

    public function update(Request $request, CategoryArticle $category)
    {
        $request->validate([
            'name' => ['required', 'max:255', Rule::unique('category_articles')->ignore($category->id)],
        ]);

        $category->update($request->all());

        return redirect()->route('categories.index')->with('message', 'Category updated successfully');
    }

    public function destroy(CategoryArticle $category)
    {
        try {
            $category->delete();
            return redirect()->route('categories.index')->with('success', 'Category deleted successfully');
        } catch (\Exception $e) {
            return redirect()->route('categories.index')->with('error', 'Failed to delete category');
        }
    }
}
