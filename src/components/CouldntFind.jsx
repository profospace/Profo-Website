// import React from 'react';

// const CouldntFind = () => {
//     return (
//         <div className="min-h-[300px] w-full bg-[#B4B1E6] relative overflow-hidden p-8 rounded-3xl">
//             {/* Chevron Pattern Background */}
//             <div
//                 className="absolute inset-0 opacity-20"
//                 style={{
//                     backgroundImage: `repeating-linear-gradient(
//             45deg,
//             #6366F1,
//             #6366F1 2px,
//             transparent 2px,
//             transparent 12px
//           )`,
//                     transform: 'skewY(-45deg)',
//                     backgroundSize: '24px 24px'
//                 }}
//             />

//             {/* Content Container */}
//             <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center space-y-6">
//                 <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-serif leading-tight text-gray-900">
//                     Couldn't Find What You Were Looking For?
//                 </h1>

//                 <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-xl">
//                     Get in touch with us, and we'll accomodate your requirements to the fullest
//                 </p>

//                 <button className="mt-6 px-8 py-3 bg-black text-white rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
//                     Contact Us
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CouldntFind;

import React from 'react';

const CouldntFind = () => {
    return (
        <div className="min-h-[300px] w-full bg-[#ffacab] relative overflow-hidden mt-4 px-8 py-0 rounded-xl">
            {/* Chevron Pattern Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(135deg, 
            transparent 25%, 
            #CB0A01 25%, 
            #CB0A01 50%, 
            transparent 50%, 
            transparent 75%, 
            #CB0A01 75%
          )`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl mx-auto text-center space-y-8 py-12">
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-['Fraunces'] leading-[1.1] text-gray-900 px-4">
                    Couldn't Find What You Were Looking For?
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-xl px-4">
                    Get in touch with us, and we'll accomodate your requirements to the fullest
                </p>

                <button className="mt-8 px-10 py-3 bg-black text-white rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black shadow-md">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default CouldntFind;

// Optional: Add this CSS to your global styles for the exact font if needed
// @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600&display=swap');