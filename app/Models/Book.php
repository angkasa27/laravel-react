<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
  protected $fillable = ['name', 'description', 'quantity', 'created_by'];

  public function creator()
  {
    return $this->belongsTo(User::class, 'created_by');
  }
}
