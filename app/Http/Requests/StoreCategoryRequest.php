<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    // You can add more logic here to restrict which users may create categories.
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   */
  public function rules(): array
  {
    return [
      'name'  => 'required|string|min:3|max:255',
      'color' => 'nullable|string|max:50', // for example: a HEX color code
    ];
  }

  /**
   * Custom messages for validation errors.
   */
  public function messages(): array
  {
    return [
      'name.required' => 'The category name is required.',
      'name.min'      => 'The category name must be at least :min characters long.',
      'color.max'     => 'The color value is too long.',
    ];
  }
}
