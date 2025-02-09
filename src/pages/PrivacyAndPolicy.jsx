import React from 'react';
import { Shield, Globe, Bell, Lock, Users, Mail } from 'lucide-react';

const PrivacyAndPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
                    <p className="mt-4 text-gray-600">Last updated: February 08, 2025</p>
                </div>

                {/* Quick Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <Shield className="w-6 h-6 text-blue-600 mb-4" />
                        <h3 className="font-semibold mb-2">Data Protection</h3>
                        <p className="text-sm text-gray-600">We implement strict security measures to protect your information</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <Globe className="w-6 h-6 text-blue-600 mb-4" />
                        <h3 className="font-semibold mb-2">Global Standards</h3>
                        <p className="text-sm text-gray-600">Compliant with international data protection regulations</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <Bell className="w-6 h-6 text-blue-600 mb-4" />
                        <h3 className="font-semibold mb-2">Your Control</h3>
                        <p className="text-sm text-gray-600">Manage your preferences and data sharing options</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-xl shadow-sm">
                    <div className="p-8 space-y-8">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Information about Profo</h2>
                            <p className="text-gray-700 leading-relaxed">
                                In this privacy notice, references to "Profo", "we" or "us" or "our" are to Profo Real Estate Services Limited (a company incorporated under the laws of Delaware) and its parent company and its subsidiaries (the "Profo Group"). Profo is committed to protecting your information. This privacy notice provides details about the information we collect about you, how we use it and how we protect it.
                            </p>
                        </section>

                        {/* Scope */}
                        <section className="border-t pt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Scope of our Privacy Notice</h2>
                            <p className="text-gray-700 leading-relaxed">
                                This notice applies to anyone who interacts with us in relation to our real estate services and products ("you", "your"), via any channel (e.g. website, mobile app, email, phone, property viewings, or booking property services via a third party agency). We may provide additional privacy notices for specific interactions.
                            </p>
                        </section>

                        {/* Information Collection */}
                        <section className="border-t pt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Lock className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-2">Standard Personal Information</h3>
                                        <p className="text-gray-700">Contact details, identification information, property preferences, and transaction history.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-2">Property-Related Information</h3>
                                        <p className="text-gray-700">Property interests, viewing history, purchase/rental requirements, and financial qualification information.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Marketing Preferences */}
                        <section className="border-t pt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Marketing and Preferences</h2>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-4">
                                    We use your personal information to send you marketing by post, telephone, social media platforms, email, SMS, and application notifications about real estate opportunities and services that may interest you.
                                </p>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <p className="text-sm text-gray-600">
                                        To unsubscribe, email us at privacy@profo.com
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Data Protection */}
                        <section className="border-t pt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                            <div className="grid gap-4">
                                {[
                                    'Access your personal information',
                                    'Correct or update your details',
                                    'Request deletion of your information',
                                    'Object to processing of your information',
                                    'Export your data'
                                ].map((right, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                        <span className="text-gray-700">{right}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="border-t pt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-4">
                                    If you have any questions about this Privacy Policy, please contact our Privacy Team:
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-700">Email: privacy@profo.com</p>
                                    <p className="text-gray-700">Address: Profo Real Estate Services Limited</p>
                                    <p className="text-gray-700">Tech Hub, Level 5, Silicon Valley, CA-94025</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyAndPolicy;