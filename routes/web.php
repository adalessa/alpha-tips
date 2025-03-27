<?php

use App\Models\Tip;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('landing', [
        'featured' => Tip::where('featured', true)->take(5)->get(),
        'recent' => Tip::latest()->take(5)->get(),
        'popular' => Tip::query()->take(5)->get(),
    ]);
})->name('home');

Route::get('/tip/{tip}', function (Tip $tip) {
    return Inertia::render('tip', [
        'tip' => $tip,
        'related' => Tip::where('id', '!=', $tip->id)->take(5)->get(),
    ]);
})->name('tip');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
