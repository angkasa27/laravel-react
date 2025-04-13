<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Category extends Model
{
  use HasUuids;

  protected $fillable = ['name', 'color'];

  public function books()
  {
    return $this->belongsToMany(Book::class, 'book_category', 'category_id', 'book_id');
  }
}
