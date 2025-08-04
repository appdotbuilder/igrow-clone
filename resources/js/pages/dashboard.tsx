import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';

interface User {
    name: string;
    email: string;
    is_premium: boolean;
    subscription_status: string;
    premium_expires_at?: string;
}

interface PageProps {
    auth: {
        user: User;
    };
    [key: string]: unknown;
}

export default function Dashboard() {
    const { auth } = usePage<PageProps>().props;
    const user = auth?.user;

    return (
        <>
            <Head title="Dashboard" />
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
                                <Link
                                    href={route('subscription.index')}
                                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    Subscription
                                </Link>
                                <span className="text-gray-600 dark:text-gray-300">
                                    {user?.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                
                <div className="max-w-6xl mx-auto p-6">
                    {/* Welcome Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Welcome back, {user?.name}! 👋
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Here's what's happening with your farm today
                        </p>
                    </div>

                    {/* Subscription Status Card */}
                    <div className="mb-8">
                        {user?.is_premium ? (
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-1">
                                            🚀 Premium Active
                                        </h3>
                                        <p className="text-green-600 dark:text-green-300">
                                            You have access to all premium features
                                        </p>
                                        {user.premium_expires_at && (
                                            <p className="text-sm text-green-500 mt-1">
                                                Expires: {new Date(user.premium_expires_at).toLocaleDateString('id-ID')}
                                            </p>
                                        )}
                                    </div>
                                    <Link
                                        href={route('subscription.index')}
                                        className="text-green-600 hover:text-green-700 font-medium"
                                    >
                                        Manage Subscription →
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1">
                                            🌱 Basic Plan
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-300">
                                            Upgrade to Premium for advanced features
                                        </p>
                                    </div>
                                    <Link
                                        href={route('subscription.index')}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Upgrade Now
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Dashboard Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center">
                                <div className="text-3xl mr-4">🌾</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Crops</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center">
                                <div className="text-3xl mr-4">📊</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg Yield</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">8.2t/ha</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center">
                                <div className="text-3xl mr-4">🌡️</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Temperature</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">28°C</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center">
                                <div className="text-3xl mr-4">💧</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Soil Moisture</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">75%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Basic Features */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl mb-4">🌾</div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">Crop Management</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Track your crops and monitor growth stages
                            </p>
                            <button className="text-green-600 hover:text-green-700 font-medium">
                                View Crops →
                            </button>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl mb-4">🌤️</div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">Weather Forecast</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                7-day weather forecast for your location
                            </p>
                            <button className="text-green-600 hover:text-green-700 font-medium">
                                Check Weather →
                            </button>
                        </div>

                        {/* Premium Features */}
                        <div className={`rounded-lg p-6 shadow-sm border ${
                            user?.is_premium 
                                ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
                                : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 opacity-75'
                        }`}>
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-2">🤖</div>
                                {!user?.is_premium && <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Premium</div>}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">AI Recommendations</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Get personalized farming insights powered by AI
                            </p>
                            {user?.is_premium ? (
                                <button className="text-green-600 hover:text-green-700 font-medium">
                                    View Insights →
                                </button>
                            ) : (
                                <Link 
                                    href={route('subscription.index')}
                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Upgrade to Unlock →
                                </Link>
                            )}
                        </div>

                        <div className={`rounded-lg p-6 shadow-sm border ${
                            user?.is_premium 
                                ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
                                : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 opacity-75'
                        }`}>
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-2">📈</div>
                                {!user?.is_premium && <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Premium</div>}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">Advanced Analytics</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Detailed crop performance analytics and trends
                            </p>
                            {user?.is_premium ? (
                                <button className="text-green-600 hover:text-green-700 font-medium">
                                    View Analytics →
                                </button>
                            ) : (
                                <Link 
                                    href={route('subscription.index')}
                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Upgrade to Unlock →
                                </Link>
                            )}
                        </div>

                        <div className={`rounded-lg p-6 shadow-sm border ${
                            user?.is_premium 
                                ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
                                : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 opacity-75'
                        }`}>
                            <div className="flex items-center mb-4">
                                <div className="text-3xl mr-2">👨‍🌾</div>
                                {!user?.is_premium && <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Premium</div>}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">Expert Consultation</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Schedule sessions with agricultural experts
                            </p>
                            {user?.is_premium ? (
                                <button className="text-green-600 hover:text-green-700 font-medium">
                                    Book Session →
                                </button>
                            ) : (
                                <Link 
                                    href={route('subscription.index')}
                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Upgrade to Unlock →
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">🌱</div>
                                        <div>
                                            <p className="font-medium dark:text-white">Planted tomatoes in Field A</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">💧</div>
                                        <div>
                                            <p className="font-medium dark:text-white">Irrigation completed for corn field</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">5 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">📊</div>
                                        <div>
                                            <p className="font-medium dark:text-white">Weekly yield report generated</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
