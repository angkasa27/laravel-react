<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Models\Category;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
  /**
   * Display a listing of categories.
   */
  public function index(Request $request)
  {
    // Fetch categories (you could order them as needed)
    $categories = Category::latest()->get();

    return Inertia::render('Categories/Index', [
      'categories' => $categories,
    ]);
  }

  /**
   * Show the form for creating a new category.
   */
  public function create()
  {
    return Inertia::render('Categories/Create');
  }

  /**
   * Store a newly created category in storage.
   */
  public function store(StoreCategoryRequest $request)
  {
    Category::create($request->validated());

    return redirect()->route('categories.index')
      ->with('success', 'Category created successfully.');
  }
}
