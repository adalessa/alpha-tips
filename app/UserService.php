<?php

namespace App;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserService
{
    public function getCurrentUser(): ?User
    {
        $user = Auth::user();
        if (! $user) {
            return null;
        }

        assert($user instanceof User);

        return $user;
    }
}
