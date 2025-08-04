<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Create a basic user
        User::factory()->create([
            'name' => 'Basic User',
            'email' => 'basic@example.com',
        ]);

        // Create a premium user
        User::factory()->premium()->create([
            'name' => 'Premium User',
            'email' => 'premium@example.com',
        ]);

        // Create additional users for testing
        User::factory(5)->create();
        User::factory(3)->premium()->create();
    }
}