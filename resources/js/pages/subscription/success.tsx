import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface User {
    name: string;
    email: string;
    is_premium: boolean;
    subscription_status: string;
    premium_expires_at?: string;
}

interface Props {
    user: User;
    [key: string]: unknown;
}

export default function SubscriptionSuccess({ user }: Props) {
    return (
        <>
            <Head title="Subscription Success" />
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
                                    href={route('dashboard')}
                                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    Dashboard
                                </Link>
                                <span className="text-gray-600 dark:text-gray-300">
                                    {user?.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                
                <div className="max-w-2xl mx-auto p-6 text-center">
                    <div className="mb-8">
                        <div className="text-6xl mb-4">🎉</div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Welcome to iGrow Premium!
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Your subscription has been activated successfully. Get ready to grow like never before!
                        </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                            Subscription Details
                        </h3>
                        <div className="text-green-700 dark:text-green-300">
                            <p><strong>Plan:</strong> Premium Annual</p>
                            <p><strong>Activated:</strong> {new Date().toLocaleDateString('id-ID')}</p>
                            <p><strong>Expires:</strong> {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID')}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <div className="text-3xl mb-2">📊</div>
                            <h4 className="font-semibold mb-2 dark:text-white">Analytics Dashboard</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Access advanced crop performance analytics
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <div className="text-3xl mb-2">🤖</div>
                            <h4 className="font-semibold mb-2 dark:text-white">AI Recommendations</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Get personalized farming insights
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <div className="text-3xl mb-2">👨‍🌾</div>
                            <h4 className="font-semibold mb-2 dark:text-white">Expert Consultation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Connect with agricultural experts
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <div className="text-3xl mb-2">🔔</div>
                            <h4 className="font-semibold mb-2 dark:text-white">Priority Support</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Get priority customer support
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Link
                            href={route('dashboard')}
                            className="inline-block w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                        >
                            Go to Dashboard
                        </Link>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            or{' '}
                            <Link href={route('home')} className="text-blue-600 hover:underline">
                                return to home page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}