<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tip extends Model
{
    /** @use HasFactory<\Database\Factories\TipFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'code',
        'language',
        'benefits',
        'notes',
        'explanation',
    ];

    public function casts(): array
    {
        return [
            'benefits' => 'array',
        ];
    }

    public function likedByUsers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_tips_likes')
            ->withTimestamps();
    }

    public function savedByUsers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_tips_saves')
            ->withTimestamps();
    }
}
