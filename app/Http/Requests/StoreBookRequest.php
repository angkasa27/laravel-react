<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{

  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  public function rules(): array
  {
    return [
      'name' => 'required|string|min:3|max:255',
      'description' => 'nullable|string',
      'quantity' => [
        'required',
        'regex:/^(0|[1-9][0-9]*)$/',
      ],
      'categories'   => 'nullable|array',
      'categories.*' => 'exists:categories,id',
    ];
  }

  public function messages(): array
  {
    return [
      'name.required' => 'Please enter a name for the book.',
      'name.min' => 'The name must be at least :min characters.',
      'quantity.required' => 'Quantity is required.',
      'quantity.regex' => 'Quantity must be a whole number without leading zeros.',
    ];
  }
}
