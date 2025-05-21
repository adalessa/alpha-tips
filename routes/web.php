<?php

use App\Http\Controllers\TipController;
use App\Http\Controllers\TipDetailController;
use App\Http\Controllers\UserLikeTipController;
use App\Http\Controllers\UserSaveTipController;
use App\Http\Middleware\IncrementTipViews;
use App\Models\Tip;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('page', [
        'featured' => Tip::where('featured', true)->take(5)->get(),
        'recent' => Tip::latest()->get(),
        // TODO: replace with ones with more likes
        'popular' => Tip::query()->take(5)->get(),
    ]);
})->name('home');

Route::get('/tips', function () {
    return Inertia::render('tips', [
        'tips' => Tip::latest()->paginate(9),
    ]);
});

Route::get('/tip/{tip}', [TipDetailController::class, 'show'])
    ->middleware(IncrementTipViews::class)
    ->name('tip');

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
