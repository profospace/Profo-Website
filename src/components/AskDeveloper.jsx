import React from 'react';

const AskDeveloper = () => {
    const questions = [
        "When does the house give up?",
        "Any promotions and discounts?",
        "Can I have a down payment?",
        "What are the finishes?"
    ];

    return (
        <div className="max-w-4xl w-full mx-auto p-6">
            {/* Custom Card Component */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        {/* Left Section */}
                        <div className="space-y-4 flex-1">
                            <h1 className="text-3xl font-bold text-gray-900">Ask the developer</h1>
                            <p className="text-gray-600 text-lg">
                                We have gathered for you a useful pool of questions that you need to ask
                            </p>
                            {/* Custom Button */}
                            <button
                                className="w-full md:w-auto bg-gray-900 px-8 py-6 rounded-md text-lg text-white font-medium
                          hover:bg-gray-800 active:bg-gray-700 
                          transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                Call the developer
                            </button>
                        </div>

                        {/* Right Section - Questions */}
                        <div className="flex-1 w-full md:w-auto">
                            <div className="space-y-3">
                                {questions.map((question, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md 
                             transition-shadow duration-200 cursor-pointer
                             border border-gray-100"
                                    >
                                        <p className="text-gray-800">{question}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskDeveloper;