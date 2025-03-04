import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProfoAdviceFAQAccordion = ({ faqRef }) => {
    const [openItem, setOpenItem] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    const faqItems = [
        {
            id: 1,
            question: "How to calculate the value of a property?",
            answer: "To calculate the value of a property, experts consider factors such as location, size, condition, comparable sales, market trends, and amenities. Professional valuers use methods like the sales comparison approach, income approach, and cost approach to determine an accurate valuation."
        },
        {
            id: 2,
            question: "What is the fair market value of a property?",
            answer: "Fair market value is the price a property would sell for on the open market between a willing buyer and seller, both having reasonable knowledge of relevant facts and neither being under pressure to act. It's determined through comparable sales analysis, market conditions, and property-specific features."
        },
        {
            id: 3,
            question: "Are home valuations free?",
            answer: "Some real estate agencies offer free preliminary valuations as a service to attract potential sellers. However, professional and legally recognized valuations from certified valuers typically involve a fee. The cost varies based on property complexity, location, and the level of detail required in the report."
        },
        {
            id: 4,
            question: "What are the different types of property valuation methods?",
            answer: "The main property valuation methods include: the Comparative Market Analysis (comparing similar properties), the Income Approach (based on potential rental income), the Cost Approach (land value plus building costs minus depreciation), and the Residual Valuation Method (often used for development properties)."
        }
    ];

    const toggleAccordion = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
       <div ref={faqRef}>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="w-full max-w-6xl mx-auto px-4 py-8"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(item.id)}
                                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                            >
                                <h3 className={`font-medium text-lg ${item.id === 1 ? 'text-red-600' : 'text-gray-800'}`}>
                                    {item.question}
                                </h3>
                                <motion.span
                                    animate={{ rotate: openItem === item.id ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-gray-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </motion.span>
                            </button>

                            {openItem === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-6"
                                >
                                    <p className="text-gray-600">{item.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
       </div>
    );
};

export default ProfoAdviceFAQAccordion;