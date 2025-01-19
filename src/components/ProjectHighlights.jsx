import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProjectHighlights = ({ highlights }) => {
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 3;

    const displayedHighlights = showAll
        ? highlights
        : highlights?.slice(0, initialDisplayCount);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Project Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedHighlights?.map((highlight, index) => (
                    <div
                        key={index}
                        className="cursor-pointer group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                    >
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                            {/* Placeholder for icon - in production, you'd import actual icons */}
                            <div className="w-6 h-6 text-blue-600">
                                {/* Icon would go here */}
                                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            {highlight.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            {highlight.description}
                        </p>
                    </div>
                ))}
            </div>

            {highlights?.length > initialDisplayCount && (
                <div className="flex mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Show More <ChevronDown className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectHighlights;