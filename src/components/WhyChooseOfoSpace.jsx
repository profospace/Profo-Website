import React, { useEffect } from 'react';

const WhyChooseOfoSpace = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;

            document.documentElement.style.setProperty('--mouse-x', `${x}%`);
            document.documentElement.style.setProperty('--mouse-y', `${y}%`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative">
            
            <div className="gradient-bg py-6 px-4 md:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-x-20 gap-y-12">
                    {/* Left side - Title */}
                    <div>
                        <h1 className="text-[38px] font-serif text-[#703D2A]">
                            Why Choose PROFO?
                        </h1>
                    </div>

                    {/* Right side - Features */}
                    <div className="space-y-12">
                        {/* 100% Rental Guarantee */}
                        <div className="grid grid-cols-[48px,1fr] gap-6 items-start">
                            <div className="w-12 h-12">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
                                    <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-[28px] text-gray-900 font-normal mb-2">100% Rental Guarantee</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    List your home with Flent – we guarantee you a tenant placement within 20 days. If not, we start paying you the rent from Day 21.
                                </p>
                            </div>
                        </div>

                        {/* Zero Management Fee */}
                        <div className="grid grid-cols-[48px,1fr] gap-6 items-start">
                            <div className="w-12 h-12">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
                                    <path d="M12 12L36 36M36 12L12 36" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-[28px] text-gray-900 font-normal mb-2">Zero Management Fee</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    From tenant placement to ongoing property management, we handle everything—at zero cost.
                                </p>
                            </div>
                        </div>

                        {/* Top 1% Tenant */}
                        <div className="grid grid-cols-[48px,1fr] gap-6 items-start">
                            <div className="w-12 h-12">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M24 8L30 20H18L24 8Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M18 28C18 25.7909 19.7909 24 22 24H26C28.2091 24 30 25.7909 30 28V40H18V28Z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-[28px] text-gray-900 font-normal mb-2">Top 1% Tenant</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Your property is only rented to trustworthy professionals and families who appreciate quality living.
                                </p>
                            </div>
                        </div>

                        {/* Premium Furnishing */}
                        <div className="grid grid-cols-[48px,1fr] gap-6 items-start">
                            <div className="w-12 h-12">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M8 12L24 4L40 12L24 20L8 12Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 24L24 16L40 24L24 32L8 24Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M8 36L24 28L40 36L24 44L8 36Z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-[28px] text-gray-900 font-normal mb-2">Premium Furnishing</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    We upgrade your property into a designer home that commands premium rent—all with 0 investment from your end.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseOfoSpace;