import React, { useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const PropertyValuationFAQ = () => {
    // State to keep track of active tab
    const [activeTab, setActiveTab] = useState("What's the role of Property Valuers?");
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    React.useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const tabItems = [
        "What's the role of Property Valuers?",
        "How does a Property Valuer help?",
        "When should you avail Property Valuation?",
        "What is the process of Property Valuation",
        "What is a Property Valuation report and how is it important?"
    ];

    // Tab content
    const tabContent = {
        "What's the role of Property Valuers?": {
            title: "What's the role of Property Valuers?",
            description: "Property Valuers are experts who carry out a detailed inspection of a property and then present a report with an estimation of the property's value. The services of a property valuer can be availed for residential, industrial, or commercial properties. The professional valuer possesses a vast knowledge of the relative forces that affect the value of a property. The role of a property valuer generally includes:",
            points: [
                {
                    title: "Property Evaluation",
                    description: "A property valuer is responsible for measuring and recording a property onsite. This includes determining the property's accurate measurements and then clicking relevant images that are date stamped. The valuer evaluates the property as a whole and makes notes on the same."
                },
                {
                    title: "Property Inspection",
                    description: "The valuer conducts a thorough inspection of the property to check for any potential issues or features that might affect its value."
                }
            ],
            image: "/api/placeholder/500/400"
        },
        // Content for other tabs would be similar
        "How does a Property Valuer help?": {
            title: "How does a Property Valuer help?",
            description: "A Property Valuer provides professional assistance in determining the accurate market value of your property based on multiple factors including location, property condition, market trends, and comparable properties in the area.",
            points: [],
            image: "/api/placeholder/500/400"
        },
        "When should you avail Property Valuation?": {
            title: "When should you avail Property Valuation?",
            description: "You should consider property valuation when buying or selling property, applying for loans, for insurance purposes, during property settlements, or when planning renovations to understand potential value increases.",
            points: [],
            image: "/api/placeholder/500/400"
        },
        "What is the process of Property Valuation": {
            title: "What is the process of Property Valuation",
            description: "The property valuation process typically involves scheduling an inspection, the valuer visiting and assessing the property, researching comparable properties, analyzing market trends, and finally preparing a comprehensive valuation report.",
            points: [],
            image: "/api/placeholder/500/400"
        },
        "What is a Property Valuation report and how is it important?": {
            title: "What is a Property Valuation report and how is it important?",
            description: "A Property Valuation report is an official document that provides an unbiased assessment of a property's market value. It's important for securing loans, setting appropriate selling prices, insurance purposes, and for making informed property investment decisions.",
            points: [],
            image: "/api/placeholder/500/400"
        }
    };

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const tabContentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="w-full bg-white py-12 px-4 md:px-8 lg:px-12" ref={containerRef}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-10"
                    variants={titleVariants}
                    initial="hidden"
                    animate={controls}
                >
                    All you need to know about Property Valuation
                </motion.h2>

                <motion.div
                    className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-sm"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {/* Tab section */}
                    <div className="w-full md:w-1/3 bg-gray-50">
                        {tabItems.map((tab, index) => (
                            <motion.div
                                key={index}
                                className={`border-b cursor-pointer px-6 py-4 transition-colors hover:bg-gray-100 ${activeTab === tab ? 'border-l-4 border-l-red-500 bg-white' : ''
                                    }`}
                                onClick={() => setActiveTab(tab)}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { delay: index * 0.1, duration: 0.5 }
                                    }
                                }}
                            >
                                <p className={`${activeTab === tab ? 'text-red-500 font-medium' : 'text-gray-700'}`}>
                                    {tab}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Content section */}
                    <motion.div
                        className="w-full md:w-2/3 p-6 md:p-8"
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            {tabContent[activeTab].title}
                        </h3>

                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="lg:w-3/5">
                                <p className="text-gray-600 mb-6">
                                    {tabContent[activeTab].description}
                                </p>

                                {tabContent[activeTab].points.map((point, index) => (
                                    <div key={index} className="mb-6">
                                        <div className="flex items-start gap-3 mb-2">
                                            <div className="mt-1 flex-shrink-0">
                                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800 text-lg">
                                                    {point.title}
                                                </h4>
                                                <p className="text-gray-600 mt-1">
                                                    {point.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="lg:w-2/5">
                                <motion.div
                                    className="rounded-lg overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={tabContent[activeTab].image}
                                        alt={tabContent[activeTab].title}
                                        className="w-full h-auto object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default PropertyValuationFAQ;