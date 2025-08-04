import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="iGrow - Smart Agricultural Platform">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                {/* Navigation */}
                <header className="w-full px-6 py-4">
                    <nav className="flex items-center justify-between max-w-6xl mx-auto">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🌱</span>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">iGrow</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <>
                                    <Link
                                        href={route('subscription.index')}
                                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    >
                                        Subscription
                                    </Link>
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="px-6 py-16">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            🌾 Smart Farming for
                            <span className="text-green-600"> Sustainable Growth</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            Transform your agricultural practice with AI-powered insights, expert guidance, 
                            and data-driven decisions. Join thousands of farmers growing smarter with iGrow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            {auth.user ? (
                                <>
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                                    >
                                        Go to Dashboard
                                    </Link>
                                    <Link
                                        href={route('subscription.index')}
                                        className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                                    >
                                        Upgrade to Premium
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route('register')}
                                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                                    >
                                        Start Free Trial
                                    </Link>
                                    <Link
                                        href={route('subscription.index')}
                                        className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                                    >
                                        View Premium Plans
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Feature preview cards */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Smart Analytics</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Track crop performance with real-time data visualization and predictive insights
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">AI Recommendations</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Get personalized farming advice powered by machine learning algorithms
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <div className="text-4xl mb-4">🌡️</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Weather Intelligence</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Plan ahead with hyper-local weather forecasts and climate insights
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium Features Section */}
                <section className="px-6 py-16 bg-white dark:bg-gray-800">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                🚀 Unlock Premium Features
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                Supercharge your farming with advanced tools and expert support
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="text-2xl">🎯</div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2 dark:text-white">Precision Agriculture</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Optimize your farming with GPS-guided precision agriculture techniques
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="text-2xl">👨‍🌾</div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2 dark:text-white">Expert Consultations</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Connect with agricultural experts for personalized guidance
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="text-2xl">💰</div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2 dark:text-white">Market Insights</h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Get real-time market prices and demand forecasts
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-lg p-8 text-white text-center">
                                <h3 className="text-2xl font-bold mb-4">Premium Subscription</h3>
                                <div className="text-4xl font-bold mb-2">Rp 500,000</div>
                                <div className="text-lg mb-6">per year</div>
                                <Link
                                    href={route('subscription.index')}
                                    className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium inline-block transition-colors"
                                >
                                    {auth.user ? 'Subscribe Now' : 'View Plans'}
                                </Link>
                                <p className="text-sm mt-4 opacity-90">
                                    30-day money-back guarantee
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories Section */}
                <section className="px-6 py-16">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
                            🌟 Success Stories
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <div className="text-3xl mb-4">📈</div>
                                <h4 className="font-semibold text-lg mb-2 dark:text-white">+40% Yield Increase</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    "iGrow's AI recommendations helped me optimize my rice planting schedule"
                                </p>
                                <div className="mt-4 text-sm text-green-600 font-medium">- Budi S., Rice Farmer</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <div className="text-3xl mb-4">💧</div>
                                <h4 className="font-semibold text-lg mb-2 dark:text-white">30% Water Savings</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    "Smart irrigation insights reduced my water usage significantly"
                                </p>
                                <div className="mt-4 text-sm text-green-600 font-medium">- Sari W., Vegetable Farmer</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <div className="text-3xl mb-4">🏆</div>
                                <h4 className="font-semibold text-lg mb-2 dark:text-white">Best Harvest Ever</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    "Expert consultations helped me tackle pest problems effectively"
                                </p>
                                <div className="mt-4 text-sm text-green-600 font-medium">- Ahmad R., Corn Farmer</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="px-6 py-16 bg-green-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Transform Your Farming? 🚜
                        </h2>
                        <p className="text-xl mb-8">
                            Join over 10,000 farmers who are already growing smarter with iGrow
                        </p>
                        {auth.user ? (
                            <Link
                                href={route('subscription.index')}
                                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg inline-block transition-colors"
                            >
                                Upgrade to Premium Today
                            </Link>
                        ) : (
                            <Link
                                href={route('register')}
                                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg inline-block transition-colors"
                            >
                                Start Your Free Trial
                            </Link>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="px-6 py-8 bg-gray-900 text-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <span className="text-2xl">🌱</span>
                            <span className="text-xl font-bold">iGrow</span>
                        </div>
                        <p className="text-gray-400">
                            Empowering farmers with smart technology for sustainable agriculture
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}