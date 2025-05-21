<?php

namespace App\Http\Controllers;

use App\Models\Tip;
use App\Models\User;
use Illuminate\Container\Attributes\CurrentUser;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class TipController extends Controller
{
    public function index(#[CurrentUser] User $user): Response
    {
        return Inertia::render('tip/index', [
            'tips' => $user->tips()->latest()->paginate(10),
        ]);
    }

    public function create(): Response
    {
        Gate::authorize('create', Tip::class);

        return Inertia::render('tip/create');
    }

    public function store(Request $request, #[CurrentUser] User $user): RedirectResponse
    {
        Gate::authorize('create', Tip::class);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'code' => 'nullable|string',
            'language' => 'required|string|max:100',
            'benefits' => 'nullable|string',
            'notes' => 'nullable|string',
            'explanation' => 'nullable|string',
        ]);

        $validated['benefits'] = array_map('trim', explode(',', $validated['benefits']));

        $user->tips()->create($validated);

        return redirect()
            ->route('tip.index')
            ->with('success', 'Tip created successfully.');
    }

    public function show(Tip $tip): Response
    {
        return Inertia::render('tip/show', [
            'tip' => $tip,
        ]);
    }

    public function edit(Tip $tip): Response
    {
        Gate::authorize('update', $tip);

        return Inertia::render('tip/edit', [
            'tip' => $tip,
        ]);
    }

    public function update(Request $request, Tip $tip): RedirectResponse
    {
        Gate::authorize('update', $tip);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'code' => 'nullable|string',
            'language' => 'required|string|max:100',
            'benefits' => 'nullable|string',
            'notes' => 'nullable|string',
            'explanation' => 'nullable|string',
        ]);

        if (isset($validated['benefits'])) {
            $validated['benefits'] = array_map('trim', explode(',', $validated['benefits']));
        }

        $tip->update($validated);

        return redirect()
            ->route('tip.show', $tip)
            ->with('success', 'Tip updated successfully.');
    }

    public function destroy(Tip $tip): RedirectResponse
    {
        Gate::authorize('delete', $tip);

        $tip->delete();

        return redirect()
            ->route('tip.index')
            ->with('success', 'Tip deleted successfully.');
    }
}
