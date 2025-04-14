<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
  public function index(Request $request)
  {
    return Inertia::render('Books/Index', [
      'books' => Book::where('created_by', $request->user()->id)->latest()->get(),
    ]);
  }

  public function create()
  {
    // Pass all categories to the view
    $categories = Category::orderBy('name')->get();
    return Inertia::render('Books/Create', [
      'categories' => $categories,
    ]);
  }

  public function store(StoreBookRequest $request)
  {
    // Create the book using validated data and assign created_by from the current user.
    $book = Book::create([
      ...$request->validated(),
      'created_by' => $request->user()->id,
    ]);

    // If categories were selected, sync them into the pivot table.
    if ($request->has('categories')) {
      $book->categories()->sync($request->input('categories'));
    }

    return redirect()->route('books.index')->with('success', 'Book created!');
  }

  public function edit(Book $book)
  {
    return Inertia::render('Books/Edit', [
      'book' => $book,
    ]);
  }

  public function update(Request $request, Book $book)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'description' => 'nullable|string',
      'quantity' => [
        'required',
        'regex:/^(0|[1-9][0-9]*)$/',
      ],
    ]);

    $book->update($validated);

    return redirect()->route('books.index')->with('success', 'Book updated.');
  }

  public function destroy(Book $book)
  {
    $book->delete();

    return redirect()->route('books.index')->with('success', 'Book deleted.');
  }
}
