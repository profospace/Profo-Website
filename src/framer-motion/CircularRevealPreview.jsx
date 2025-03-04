import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const CircularRevealPreview = () => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showMainPage, setShowMainPage] = useState(false);

    const handleSearch = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setShowMainPage(true);
        }, 400);
    };

    const resetDemo = () => {
        setIsTransitioning(false);
        setShowMainPage(false);
    };

    return (
        <div className="relative w-full h-96 bg-gray-100 overflow-hidden rounded-lg">
            <AnimatePresence>
                {!showMainPage ? (
                    <motion.div
                        key="search-page"
                        className="absolute w-full h-full"
                        exit={{ opacity: 0 }}
                    >
                        <div className="bg-gray-200 w-full h-40"></div>
                        <div className="absolute left-[8%] z-20 bg-white shadow-lg rounded-lg mx-auto max-w-3xl -mt-20 p-4 w-5/6">
                            <div className="flex border-b border-gray-200 mb-4">
                                <button className="px-6 py-2 text-sm font-medium text-emerald-600 border-b-2 border-emerald-600">Buy</button>
                                <button className="px-6 py-2 text-sm font-medium text-gray-500">Rent</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="md:col-span-1">
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search Location"
                                            className="pl-10 w-full rounded-lg border border-gray-300 py-3"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <select className="pl-10 w-full rounded-lg border border-gray-300 py-3 appearance-none">
                                            <option>Property Type</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                        <select className="pl-10 w-full rounded-lg border border-gray-300 py-3 appearance-none">
                                            <option>Price Range</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg flex items-center justify-center"
                                        onClick={handleSearch}
                                    >
                                        <Search className="h-5 w-5 mr-2" />
                                        Search
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="main-page"
                        className="absolute w-full h-full bg-white p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <div className="flex space-x-4 mb-4">
                            <button className="px-4 py-2 bg-emerald-600 text-white rounded-md">List View</button>
                            <button className="px-4 py-2 bg-gray-200 rounded-md">Map View</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-gray-100 p-4 rounded-lg shadow">
                                    <div className="bg-gray-200 h-32 rounded-md mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={resetDemo}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            Reset Demo
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Circular Reveal Animation */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        style={{
                            zIndex: 30,
                            overflow: 'hidden'
                        }}
                    >
                        <motion.div
                            className="absolute rounded-full bg-emerald-600"
                            initial={{
                                width: 0,
                                height: 0,
                                x: "70%",  // Position near the search button
                                y: "50%",
                                borderRadius: "100%"
                            }}
                            animate={{
                                width: window.innerWidth * 2.5,
                                height: window.innerWidth * 2.5,
                                x: "-50%",  // Center horizontally
                                y: "-50%",  // Center vertically
                                borderRadius: "100%"
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CircularRevealPreview;