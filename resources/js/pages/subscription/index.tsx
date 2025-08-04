import React from 'react';
import { Head, router, usePage, Link } from '@inertiajs/react';

interface User {
    name: string;
    email: string;
    is_premium: boolean;
    subscription_status: string;
    premium_expires_at?: string;
}

interface Flash {
    success?: string;
    error?: string;
    info?: string;
}

interface Props {
    user: User | null;
    hasPremium: boolean;
    premiumPrice: number;
    flash?: Flash;
    [key: string]: unknown;
}

export default function SubscriptionIndex({ user, hasPremium, premiumPrice }: Props) {
    const { flash } = usePage<Props>().props;

    const handleSubscribe = () => {
        if (!user) {
            router.visit(route('login'));
            return;
        }

        router.post(route('subscription.store'), {}, {
            preserveState: true,
            preserveScroll: true
        });
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <>
            <Head title="Subscription Plans" />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Navigation */}
                <header className="bg-white dark:bg-gray-800 shadow-sm">
                    <div className="max-w-6xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Link href={route('home')} className="flex items-center space-x-2">
                                <span className="text-2xl">🌱</span>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">iGrow</span>
                            </Link>
                            <div className="flex items-center space-x-4">
                                {user ? (
                                    <>
                                        <Link
                                            href={route('dashboard')}
                                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </Link>
                                        <span className="text-gray-600 dark:text-gray-300">
                                            {user.name}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </header>
                
                <div className="max-w-6xl mx-auto p-6">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                            🌱 Choose Your Growth Plan
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Unlock premium features and accelerate your agricultural business growth
                        </p>
                    </div>

                    {/* Flash Messages */}
                    {flash?.success && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                            {flash.success}
                        </div>
                    )}
                    {flash?.error && (
                        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                            {flash.error}
                        </div>
                    )}
                    {flash?.info && (
                        <div className="mb-6 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
                            {flash.info}
                        </div>
                    )}

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Free Plan */}
                        <div className="border border-gray-200 rounded-lg p-8 bg-white dark:bg-gray-800 dark:border-gray-700">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    🌾 Basic
                                </h3>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    Free
                                </div>
                                <ul className="text-left space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Basic crop management
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Weather updates
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Community access
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Basic tutorials
                                    </li>
                                </ul>
                                <button 
                                    disabled
                                    className="w-full py-3 px-4 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
                                >
                                    Current Plan
                                </button>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className={`border-2 rounded-lg p-8 relative ${
                            hasPremium 
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                                : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        }`}>
                            {!hasPremium && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            {hasPremium && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Active
                                    </span>
                                </div>
                            )}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    🚀 Premium
                                </h3>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {formatPrice(premiumPrice)}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 mb-6">per year</div>
                                <ul className="text-left space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Everything in Basic
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Advanced analytics & insights
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        AI-powered crop recommendations
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Expert consultation sessions
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Priority customer support
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Advanced market insights
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        Pest & disease alerts
                                    </li>
                                </ul>
                                {hasPremium ? (
                                    <button 
                                        disabled
                                        className="w-full py-3 px-4 bg-green-500 text-white rounded-lg cursor-not-allowed opacity-75"
                                    >
                                        ✓ Active Subscription
                                    </button>
                                ) : (
                                    <button 
                                        onClick={handleSubscribe}
                                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        {user ? 'Subscribe Now' : 'Login to Subscribe'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Why Choose iGrow Premium?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="p-6">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Advanced Analytics</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Get detailed insights into your crop performance and optimize your farming strategies
                                </p>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">AI Recommendations</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Leverage artificial intelligence to make informed decisions about planting and harvesting
                                </p>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl mb-4">👨‍🌾</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Expert Support</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Connect with agricultural experts and get personalized advice for your farm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}