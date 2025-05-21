<?php

namespace App\Http\Controllers;

use App\Models\Tip;
use App\TipService;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class TipDetailController extends Controller
{
    public function show(Tip $tip, TipService $service): Response
    {
        return Inertia::render('tip', [
            'tip' => $tip,
            'liked' => $service->isLiked($tip),
            'saved' => $service->isSaved($tip),
            'related' => Tip::query()->where('id', '!=', $tip->id)->take(5)->get(),
            'can' => [
                'update' => Gate::allows('update', $tip),
            ],
        ]);
    }
}
