<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tip extends Model
{
    /** @use HasFactory<\Database\Factories\TipFactory> */
    use HasFactory;

    public function casts(): array
    {
        return [
            'benefits' => 'array',
        ];
    }
}
