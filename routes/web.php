<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Subscription routes
Route::controller(\App\Http\Controllers\SubscriptionController::class)->group(function () {
    Route::get('/subscription', 'index')->name('subscription.index');
    Route::post('/subscription', 'store')->name('subscription.store')->middleware('auth');
    Route::get('/subscription/success', 'show')->name('subscription.success')->middleware('auth');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
