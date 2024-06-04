<?php

namespace App\Http\Controllers;

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
        return Inertia::render('admin/articles/category/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:category_articles|max:255',
        ]);

        CategoryArticle::create($request->all());
        return redirect()->route('categories.index')->with('message', 'Category created successfully');
    }

    public function edit(CategoryArticle $category)
    {
        return Inertia::render('admin/articles/category/edit', ['category' => $category]);
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
