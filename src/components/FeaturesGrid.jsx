import React from 'react';

const FeaturesGrid = () => {
    return (
        <div className="container mx-auto px-2">
            <h1 className="text-3xl md:text-4xl font-serif text-center mb-8 text-gray-900">
                What Makes Us Different?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {/* Ultra Furnished Homes */}
                <div className="bg-[#6B46C1] rounded-lg cursor-pointer p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <svg width="100%" height="100%">
                            <pattern id="wave-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 20 Q10 17, 20 20 T40 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
                        </svg>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl text-center font-bold relative z-10">
                        Ultra<br />Furnished<br />Homes
                    </h2>
                </div>

                {/* Easy Move outs */}
                <div className="bg-[#0D9488] rounded-lg cursor-pointer p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <svg width="100%" height="100%">
                            <pattern id="zigzag-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 20 L20 0 L40 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#zigzag-pattern)" />
                        </svg>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl text-center font-bold relative z-10">
                        Easy<br />Move outs
                    </h2>
                </div>

                {/* Fully Loaded Kitchen */}
                <div className="bg-[#8B5E34] rounded-lg cursor-pointer p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <svg width="100%" height="100%">
                            <pattern id="circle-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#circle-pattern)" />
                        </svg>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl text-center font-bold relative z-10">
                        Fully<br />Loaded Kitchen
                    </h2>
                </div>

                {/* No Brokerage */}
                <div className="bg-[#65733E] rounded-lg cursor-pointer p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <svg width="100%" height="100%">
                            <pattern id="wave-pattern-2" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 20 Q10 17, 20 20 T40 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#wave-pattern-2)" />
                        </svg>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl text-center font-bold relative z-10">
                        No<br />Brokerage
                    </h2>
                </div>

                {/* Flexible Agreements */}
                <div className="bg-[#64748B] md:col-span-2 lg:col-span-1 rounded-lg cursor-pointer p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <svg width="100%" height="100%">
                            <pattern id="diagonal-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M-10 30 L30 -10 M0 40 L40 0 M10 50 L50 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
                        </svg>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl text-center font-bold relative z-10">
                        Flexible<br />Agreements
                    </h2>
                </div>

                {/* Minimal Deposits */}
                <div className="bg-[#DC4E4E] rounded-lg cursor-pointer p-8 flex items-center justify-center min-h-[160px] relative overflow-hidden">
                    <div className="absolute inset-0">
                        <svg width="100%" height="100%">
                            <pattern id="cross-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M10 0 L30 40 M30 0 L10 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#cross-pattern)" />
                        </svg>
                    </div>
                    <h2 className="text-white text-xl md:text-2xl text-center font-bold relative z-10">
                        Minimal<br />Deposits
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default FeaturesGrid;