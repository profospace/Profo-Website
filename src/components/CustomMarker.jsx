import React from 'react';

const CustomMarker = () => {
    return (
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
            {/* Single speech bubble marker */}
            <div className="relative">
                <svg
                    width="100"
                    height="32"
                    viewBox="0 0 100 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-md"
                >
                    {/* Updated path with larger tail */}
                    <path
                        d="M0 6C0 2.68629 2.68629 0 6 0H94C97.3137 0 100 2.68629 100 6V16C100 19.3137 97.3137 22 94 22H60C58.4393 22 56.9243 22.4333 55.5992 23.2593L50 28L44.4008 23.2593C43.0757 22.4333 41.5607 22 40 22H6C2.68629 22 0 19.3137 0 16V6Z"
                        fill="#22C55E"
                    />
                </svg>

                {/* Text overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-sm font-medium" style={{ paddingBottom: '8px' }}>
                    от 284.78 млн
                </div>
            </div>

            {/* Show example with different price */}
            <div className="absolute top-4 left-4 space-y-4">
                <div className="relative">
                    <svg
                        width="100"
                        height="32"
                        viewBox="0 0 100 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-md"
                    >
                        <path
                            d="M0 6C0 2.68629 2.68629 0 6 0H94C97.3137 0 100 2.68629 100 6V16C100 19.3137 97.3137 22 94 22H60C58.4393 22 56.9243 22.4333 55.5992 23.2593L50 28L44.4008 23.2593C43.0757 22.4333 41.5607 22 40 22H6C2.68629 22 0 19.3137 0 16V6Z"
                            fill="#22C55E"
                        />
                    </svg>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-sm font-medium" style={{ paddingBottom: '8px' }}>
                        от 106.5 млн
                    </div>
                </div>
            </div>

            {/* Demo details */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-medium mb-2">Updated Features:</h3>
                <ul className="text-sm space-y-1">
                    <li>• Larger tail with wider base (20px width)</li>
                    <li>• More pronounced point (6px depth)</li>
                    <li>• Smoother curve transition</li>
                    <li>• Adjusted overall height to 32px</li>
                </ul>
            </div>
        </div>
    );
};

export default CustomMarker;