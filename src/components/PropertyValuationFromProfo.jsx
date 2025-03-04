import React from 'react';

const PropertyValuationFromProfo = () => {
    return (
        <div className="w-full bg-white py-24 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mb-8">Property Valuation from PROFO</h1>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="w-full lg:w-4/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 relative">
                                        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3" fill="red" stroke="none" />
                                            <path d="M12 7V5" stroke="black" />
                                            <path d="M17 12h2" stroke="black" />
                                            <path d="M12 17v2" stroke="black" />
                                            <path d="M7 12H5" stroke="black" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">100% Unbiased Valuation</h3>
                                    <p className="text-gray-600 font-light text-sm">With Expert Valuers</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 relative">
                                        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M9 12l2 2 4-4" stroke="red" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Protection Against Third Parties</h3>
                                    <p className="text-gray-600 font-light text-sm">With Hidden Interests</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 relative">
                                        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="10" r="7" />
                                            <path d="M12 13v-6" />
                                            <circle cx="12" cy="7" r="1" fill="red" stroke="none" />
                                            <path d="M5 21v-2a7 7 0 0114 0v2" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-gray-800 font-medium">Property Valuation only through</h3>
                                    <p className=" text-gray-800 font-light text-sm">The Best Industry Partners</p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 relative">
                                        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="6" width="20" height="12" rx="2" />
                                            <circle cx="12" cy="12" r="3" fill="red" stroke="none" />
                                            <path d="M17 12h1M6 12h1" stroke="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-gray-800">Get <span className="font-medium">Pre-Approved</span> Home Loan</h3>
                                    <p className="text-gray-800 font-light text-sm">& Cashbacks*</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5 mt-6 lg:mt-0">
                        <div className="relative">
                            <img
                                src="/assets/profoAdvice/benefit-sec-bannerImg.svg"
                                alt="Property valuation illustration"
                                className="w-72 h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyValuationFromProfo;