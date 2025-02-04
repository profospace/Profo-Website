// import React from 'react';

// const DownloadBrochures = ({ title }) => {
//     return (
//         <div className="flex items-center justify-between bg-[#FAFAFA] px-2 py-2 rounded-lg mx-4">
//             <div className="flex items-center gap-4">
//                 <div className="bg-white p-3 rounded-lg shadow-sm">
//                     <div className="w-8 h-8 relative">
//                         <div className="absolute inset-0 bg-orange-500 rounded-sm -rotate-6"></div>
//                         <div className="absolute inset-0 bg-white rounded-sm rotate-3"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <span className="text-orange-500 text-lg">₹</span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <h2 className="text-navy-800 text-xs font-medium">
//                     {title || "Download Brochures"}
//                 </h2> */}
//             </div>

//             <button className="bg-black hover:bg-black-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2">
//                 <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                     />
//                 </svg>
//                 Download Brochures
//             </button>
//         </div>
//     );
// };

// export default DownloadBrochures;

import React from 'react'

function DownloadBrochures() {
  return (
      <div className="w-full min-w-96 px-2 py-2 rounded-lg mx-4">
      <button className="bg-black hover:bg-black-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2">
          <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
          </svg>
          Download Brochures
      </button>
      </div>
  )
}

export default DownloadBrochures