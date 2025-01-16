import React from 'react';

const PromoBanner = () => {
    return (
        <div className="relative w-full h-32 md:h-40 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/testing2.webp"
                    alt="Modern apartment interior"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4">
                {/* Logo Text */}
                <div className="text-white text-3xl md:text-5xl font-bold tracking-wider mb-2 md:mb-0">
                    PROFO
                </div>

                {/* Middle Section */}
                <div className="flex flex-col text-center md:text-left text-white">
                    <div className="text-xl md:text-2xl font-semibold">
                        -28% on apartments with 100% payment
                    </div>
                    <div className="text-sm md:text-base opacity-80">
                        Advertisement. Advertiser OOO Samolet-Real Estate MSK. Project declarations on nash.dom.rf. Off.
                    </div>
                </div>

                {/* CTA Button */}
                <button className="mt-2 md:mt-0 px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition-colors text-sm md:text-base font-medium">
                    Read more
                </button>
            </div>
        </div>
    );
};

export default PromoBanner;