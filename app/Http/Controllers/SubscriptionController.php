<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    /**
     * Display subscription plans.
     */
    public function index()
    {
        $user = auth()->user();
        
        return Inertia::render('subscription/index', [
            'user' => $user,
            'hasPremium' => $user ? $user->hasPremiumAccess() : false,
            'premiumPrice' => 500000, // Rp. 500,000
        ]);
    }

    /**
     * Process subscription purchase.
     */
    public function store(Request $request)
    {
        $user = auth()->user();
        
        if (!$user) {
            return redirect()->route('login')
                ->with('error', 'Please login to subscribe.');
        }

        if ($user->hasPremiumAccess()) {
            return redirect()->route('subscription.index')
                ->with('info', 'You already have an active premium subscription.');
        }

        // Simplified payment process - in real app, integrate with payment gateway
        $user->subscribeToPremium();

        return redirect()->route('subscription.index')
            ->with('success', 'Successfully subscribed to Premium! Welcome to iGrow Premium.');
    }

    /**
     * Show subscription success page.
     */
    public function show()
    {
        $user = auth()->user();
        
        if (!$user || !$user->hasPremiumAccess()) {
            return redirect()->route('subscription.index');
        }

        return Inertia::render('subscription/success', [
            'user' => $user,
        ]);
    }
}