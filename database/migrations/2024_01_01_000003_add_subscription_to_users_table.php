<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_premium')->default(false)->comment('Whether user has premium subscription');
            $table->timestamp('premium_expires_at')->nullable()->comment('Premium subscription expiry date');
            $table->string('subscription_status')->default('inactive')->comment('Subscription status: inactive, active, expired');
            $table->timestamp('subscribed_at')->nullable()->comment('When the user subscribed to premium');
            
            // Add indexes for performance
            $table->index('is_premium');
            $table->index('subscription_status');
            $table->index('premium_expires_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['is_premium']);
            $table->dropIndex(['subscription_status']);
            $table->dropIndex(['premium_expires_at']);
            $table->dropColumn(['is_premium', 'premium_expires_at', 'subscription_status', 'subscribed_at']);
        });
    }
};