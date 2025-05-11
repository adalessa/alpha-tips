<?php

namespace App\Http\Controllers;

use App\Models\Tip;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserSaveTipController extends Controller
{
    public function store(Request $request, Tip $tip): JsonResponse
    {
        $request->user()->savedTips()->attach($tip);

        return response()->json([
            'message' => 'Tip saved successfully',
        ]);
    }

    public function destroy(Request $request, Tip $tip): JsonResponse
    {
        $request->user()->savedTips()->detach($tip);

        return response()->json([
            'message' => 'Tip unsaved successfully',
        ]);
    }
}
