import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const HowItWorksSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const titleVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const stepVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "100%",
            opacity: 0.5,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    const videoVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="w-full bg-white py-12 px-4 md:px-8 lg:px-12" ref={containerRef}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12"
                    variants={titleVariants}
                    initial="hidden"
                    animate={controls}
                >
                    How it works
                </motion.h2>

                <div className="bg-gray-50 rounded-xl p-6 md:p-10 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
                        {/* Step 1 */}
                        <motion.div
                            className="text-center max-w-xs"
                            custom={0}
                            variants={stepVariants}
                            initial="hidden"
                            animate={controls}
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src="/api/placeholder/100/100"
                                    alt="Choose a service"
                                    className="h-20 w-auto"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-green-600 mb-1">Step 1</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose a Service</h3>
                                <p className="text-gray-600 text-sm">
                                    Choose the one that best suits your requirements
                                </p>
                            </div>
                        </motion.div>

                        {/* Dotted line 1 */}
                        <div className="hidden lg:block w-24 relative">
                            <motion.div
                                className="border-t border-gray-300 border-dashed absolute top-1/2 w-full"
                                variants={lineVariants}
                                initial="hidden"
                                animate={controls}
                            ></motion.div>
                        </div>

                        {/* Step 2 */}
                        <motion.div
                            className="text-center max-w-xs"
                            custom={1}
                            variants={stepVariants}
                            initial="hidden"
                            animate={controls}
                        >
                            {/* /assets/profoAdvice/prop-valuation-sprite.svg */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src="/api/placeholder/100/100"
                                    alt="Share details"
                                    className="h-20 w-auto"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-green-600 mb-1">Step 2</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Share details of property</h3>
                                <p className="text-gray-600 text-sm">
                                    Experts will assess its value based on location, condition & other factors.
                                </p>
                            </div>
                        </motion.div>

                        {/* Dotted line 2 */}
                        <div className="hidden lg:block w-24 relative">
                            <motion.div
                                className="border-t border-gray-300 border-dashed absolute top-1/2 w-full"
                                variants={lineVariants}
                                initial="hidden"
                                animate={controls}
                            ></motion.div>
                        </div>

                        {/* Step 3 */}
                        <motion.div
                            className="text-center max-w-xs"
                            custom={2}
                            variants={stepVariants}
                            initial="hidden"
                            animate={controls}
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src="/api/placeholder/100/100"
                                    alt="Get valuation report"
                                    className="h-20 w-auto"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-green-600 mb-1">Step 3</p>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Get valuation report</h3>
                                <p className="text-gray-600 text-sm">
                                    Get the final valuation report from the team of valuers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Video Thumbnail */}
                        <motion.div
                            className="lg:ml-6 mt-8 lg:mt-0 w-full lg:w-auto flex justify-center"
                            variants={videoVariants}
                            initial="hidden"
                            animate={controls}
                        >
                            <div className="relative rounded-lg overflow-hidden w-full max-w-sm lg:w-64 lg:h-48 bg-gray-800">
                                <img
                                    src="/api/placeholder/320/240"
                                    alt="How is property valuation done?"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                                        <div className="ml-1 w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-gray-800"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;