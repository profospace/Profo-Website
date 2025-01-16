import React, { useState } from "react";
import { motion } from "framer-motion";

function LocationAccessPopup() {
    const [showPopup, setShowPopup] = useState(true);

    const handleAccept = () => {
        // Trigger the browser's location request
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("User's location:", position);
            },
            (error) => {
                console.error("Error fetching location:", error);
            }
        );
        setShowPopup(false);
    };

    // const handleReject = () => {
    //     setShowPopup(false);
    //     console.log("Location access denied by user.");
    // };

    return (
        <>
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
                        <h2 className="text-xl font-bold text-center mb-4">
                            Location Access Required
                        </h2>
                        <p className="text-gray-700 text-center mb-6">
                            To use this feature, we need access to your location. Your
                            location data will not be shared.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleAccept}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                            >
                                Accept
                            </button>
                            {/* <button
                                onClick={handleReject}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                            >
                                Reject
                            </button> */}
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}

export default LocationAccessPopup;
