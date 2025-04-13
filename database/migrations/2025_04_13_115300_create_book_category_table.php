<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  public function up(): void
  {
    Schema::create('book_category', function (Blueprint $table) {
      // If your books use uuid, ensure the columns match that data type.
      $table->uuid('book_id');
      $table->uuid('category_id'); // If categories use normal auto-increment IDs
      $table->timestamps();

      // Foreign keys (adjust if you're using UUID for book_id)
      $table->foreign('book_id')->references('id')->on('books')->onDelete('cascade');
      $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');

      // Optionally, add a unique constraint to prevent duplicate entries
      $table->unique(['book_id', 'category_id']);
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('book_category');
  }
};
