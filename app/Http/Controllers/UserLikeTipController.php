<?php

namespace App\Http\Controllers;

use App\Models\Tip;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserLikeTipController extends Controller
{
    public function store(Tip $tip, Request $request): JsonResponse
    {
        $request->user()->likedTips()->attach($tip->id);

        return response()->json([
            'message' => 'Tip liked successfully',
        ]);
    }

    public function destroy(Tip $tip, Request $request): JsonResponse
    {
        $request->user()->likedTips()->detach($tip->id);

        return response()->json([
            'message' => 'Tip unliked successfully',
        ]);
    }
}
