<?php

namespace App;

use App\Models\Tip;

class TipService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        private readonly UserService $userService,
    ) {
    }

    public function isLiked(Tip $tip): bool
    {
        $user = $this->userService->getCurrentUser();
        match (true) {
            $user && $tip->likedByUsers()->where('user_id', $user->id)->exists() => true,
            default => false,
        };
    }

    public function isSaved(Tip $tip): bool
    {
        $user = $this->userService->getCurrentUser();
        match (true) {
            $user && $tip->savedByUsers()->where('user_id', $user->id)->exists() => true,
            default => false,
        };
    }
}
