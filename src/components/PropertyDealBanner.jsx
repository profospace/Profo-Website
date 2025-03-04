import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PropertyDealBanner = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="w-full bg-sky-50 px-4 sm:px-6 py-8 rounded-lg "
        >
            <div className="max-w-6xl mx-auto px-20 flex flex-col sm:flex-row items-center justify-between bg-[#DFF6F9] rounded-lg border-[#65edff] border-[1px]">
                <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-0">
                    <img
                        src="/assets/profoAdvice/hireValuer-banner-image.svg"
                        alt="Property Icon"
                        className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
                    />
                    <motion.div variants={itemVariants} className="ml-4 sm:ml-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                            Save extra on your <span className="text-red-600">Property Deal</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mt-1">
                            Let experts evaluate the property before you buy or sell
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                    >
                        Hire a Valuer
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PropertyDealBanner;