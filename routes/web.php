<?php

use App\Http\Controllers\TipController;
use App\Http\Controllers\UserLikeTipController;
use App\Http\Controllers\UserSaveTipController;
use App\Models\Tip;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

Route::get('/', function () {
    return Inertia::render('landing', [
        'featured' => Tip::where('featured', true)->take(5)->get(),
        'recent' => Tip::latest()->take(5)->get(),
        'popular' => Tip::query()->take(5)->get(),
    ]);
})->name('home');

Route::get('/tip/{tip}', function (Tip $tip): Response {
    return Inertia::render('tip', [
        'tip' => $tip,
        'liked' => auth()->id() ? $tip->likedByUsers()->where('user_id', auth()->id())->exists() : false,
        'saved' => auth()->id() ? $tip->savedByUsers()->where('user_id', auth()->id())->exists() : false,
        'related' => Tip::where('id', '!=', $tip->id)->take(5)->get(),
        'can' => [
            'update' => Auth()->user()->can('update', $tip),
        ],
    ]);
})->name('tip');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::post('tip/{tip}/like', [UserLikeTipController::class, 'store'])
        ->name('tip.like');
    Route::delete('tip/{tip}/like', [UserLikeTipController::class, 'destroy'])
        ->name('tip.unlike');

    Route::post('tip/{tip}/save', [UserSaveTipController::class, 'store'])
        ->name('tip.save');
    Route::delete('tip/{tip}/save', [UserSaveTipController::class, 'destroy'])
        ->name('tip.unsaved');

    Route::resource('dashboard/tip', TipController::class)
        ->parameters(['tip' => 'tip']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
