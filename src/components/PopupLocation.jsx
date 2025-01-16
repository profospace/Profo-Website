import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopupLocation() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Button to open the popup */}
            <Popup
                trigger={
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 hover:scale-105 transition-all duration-300">
                        Open Popup
                    </button>
                }
                modal
                closeOnDocumentClick
            >
                {/* Content inside the popup */}
                {close => (
                    <div className="relative p-6 bg-white rounded-xl shadow-2xl overflow-hidden">
                        {/* Background image */}
                        <div className="absolute inset-0 bg-[url('/assets/location-access-required.jpg')] bg-cover bg-center opacity-20 blur-lg"></div>

                        {/* Popup content */}
                        <div className="relative z-10">
                            <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-4">
                                Location Access Required
                            </h1>
                            <p className="text-gray-600 text-center mb-6">
                                To continue using this feature, we need access to your location. Please choose an option below.
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-center gap-4">
                                <button
                                    className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
                                    onClick={close}
                                >
                                    Accept
                                </button>
                                <button
                                    className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300"
                                    onClick={close}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default PopupLocation;
