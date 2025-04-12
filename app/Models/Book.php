<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Concerns\HasUuids;


class Book extends Model
{
  use HasUuids;

  public $incrementing = false; // 👈 important
  protected $keyType = 'string'; // 👈 because UUIDs are strings

  protected static function booted(): void
  {
    static::creating(function ($book) {
      // Doesn't needed because already using HasUuids trait
      // if (empty($book->id)) {
      //   $book->id = (string) Str::uuid(); // 👈 generate UUID
      // }

      $book->created_by = Auth::id();
      $book->updated_by = Auth::id();
    });

    static::updating(function ($book) {
      $book->updated_by = Auth::id();
    });
  }


  protected $fillable = ['id', 'name', 'description', 'quantity', 'created_by', 'updated_by'];

  public function creator()
  {
    return $this->belongsTo(User::class, 'created_by');
  }

  public function updater()
  {
    return $this->belongsTo(User::class, 'updated_by');
  }
}
