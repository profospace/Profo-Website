import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const PropertyValuerSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="w-full bg-white py-12 px-4 md:px-6 lg:px-6" ref={containerRef}>
            <div className=" mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8"
                    initial="hidden"
                    animate={controls}
                    variants={titleVariants}
                >
                    What does a Property Valuer do
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border border-gray-200 shadow-sm rounded-lg p-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {/* Card 1: Valuation for Buyers */}
                    <motion.div
                        className=" overflow-hidden "
                        variants={cardVariants}
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src="/assets/profoAdvice/val-for-seller-img.png"
                                alt="Property buyer with house model"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="py-4">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Valuation for Buyers</h3>
                            <p className="text-gray-700 text-sm">
                                Finalized a property? Let an Expert Valuer make sure it's worth the price you pay & help you save money.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Valuation for Sellers */}
                    <motion.div
                        className=" overflow-hidden "
                        variants={cardVariants}
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src="/assets/profoAdvice/strategic-adv-img.png"
                                alt="Property models on coin stacks"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="py-4">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Valuation for Sellers</h3>
                            <p className="text-gray-700 text-sm">
                                Want to sell your property quickly? Make sure it's priced accurately. With professional valuers, you can easily determine its real value.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Strategic Advisory */}
                    <motion.div
                        className=" overflow-hidden "
                        variants={cardVariants}
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src="/assets/profoAdvice/val-for-buyer-img.png"
                                alt="Business person holding house model"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="py-4">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Strategic Advisory</h3>
                            <p className="text-gray-700 text-sm">
                                Get help with a range of property matters like legal obligations, competitive market value analysis, acquisition, etc.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default PropertyValuerSection;