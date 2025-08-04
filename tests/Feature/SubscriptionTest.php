<?php

use App\Models\User;

test('guest can view subscription plans', function () {
    $response = $this->get(route('subscription.index'));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('subscription/index')
        ->has('premiumPrice')
        ->where('hasPremium', false)
    );
});

test('authenticated user can view subscription plans', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('subscription.index'));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('subscription/index')
        ->has('user')
        ->where('hasPremium', false)
    );
});

test('user can subscribe to premium', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('subscription.store'));

    $response->assertRedirect(route('subscription.index'));
    $response->assertSessionHas('success');

    $user->refresh();
    expect($user->is_premium)->toBeTrue();
    expect($user->subscription_status)->toBe('active');
    expect($user->subscribed_at)->not->toBeNull();
    expect($user->premium_expires_at)->not->toBeNull();
});

test('premium user cannot subscribe again', function () {
    $user = User::factory()->premium()->create();

    $response = $this->actingAs($user)->post(route('subscription.store'));

    $response->assertRedirect(route('subscription.index'));
    $response->assertSessionHas('info');
});

test('guest cannot subscribe', function () {
    $response = $this->post(route('subscription.store'));

    $response->assertRedirect(route('login'));
});

test('premium user has access', function () {
    $user = User::factory()->premium()->create();

    expect($user->hasPremiumAccess())->toBeTrue();
});

test('basic user does not have premium access', function () {
    $user = User::factory()->create();

    expect($user->hasPremiumAccess())->toBeFalse();
});

test('expired premium user does not have access', function () {
    $user = User::factory()->create([
        'is_premium' => true,
        'subscription_status' => 'active',
        'premium_expires_at' => now()->subDay(),
    ]);

    expect($user->hasPremiumAccess())->toBeFalse();
});

test('premium user can view success page', function () {
    $user = User::factory()->premium()->create();

    $response = $this->actingAs($user)->get(route('subscription.success'));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('subscription/success')
        ->has('user')
    );
});

test('basic user cannot view success page', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('subscription.success'));

    $response->assertRedirect(route('subscription.index'));
});