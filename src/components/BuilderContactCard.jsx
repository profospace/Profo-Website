// import React from 'react';
// import { Heart } from 'lucide-react';

// const BuilderContactCard = ({ propertyDetail }) => {
//     // Format price to include spaces between thousands
//     const formatPrice = (price) => {
//         return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     };

//     return (
//         <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl border-1 py-6 px-10">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-2 md:space-y-0">
//                 <div>
//                     <h1 className="text-lg font-semibold">{propertyDetail?.builder?.company}</h1>
//                     <p className="text-gray-500">{propertyDetail?.builder?.name}</p>
//                 </div>
//                 <img
//                     src={propertyDetail?.builder?.logo}
//                     alt={propertyDetail?.builder?.company}
//                     className="h-10"
//                 />
//             </div>

//             {/* Contact Section */}
//             <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
//                 <div className="flex items-center space-x-2">
//                     <p className="text-2xl font-bold">{propertyDetail?.builder?.contacts?.[0]}</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                     <img
//                         src="/api/placeholder/100/100"
//                         alt="QR Code"
//                         className="w-16 h-16"
//                     />
//                     <p className="text-gray-600 text-sm">
//                         Point your phone camera<br />
//                         at the code to quickly dial<br />
//                         the number
//                     </p>
//                 </div>
//                 <p className="text-gray-600">Open until 22:30</p>
//             </div>

//             {/* Property Card */}
//             <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6">

//                 {/* Middle - Floor Plan */}
//                 <div className="w-full md:w-1/4">
//                     <img
//                         src={propertyDetail?.floor_plan_image || "/api/placeholder/200/400"}
//                         alt="Floor Plan"
//                         className="w-full h-[400px] object-contain"
//                     />
//                 </div>

//                 {/* Right side - Property Details */}
//                 <div className="w-full md:w-5/12 relative">
//                     <div className="flex justify-between items-start">
//                         <h2 className="text-3xl font-bold mb-4">
//                             {formatPrice(propertyDetail?.price)} ₹
//                         </h2>
//                         <Heart className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
//                     </div>

//                     <div className="space-y-2">
//                         <p className="text-lg">
//                             {propertyDetail?.area} per {propertyDetail.areaUnit}, {propertyDetail?.type_name},
//                             {propertyDetail?.status === "listed" ? "new building" : propertyDetail?.status}
//                         </p>
//                         <p className="text-blue-600 font-semibold">
//                             {propertyDetail?.post_title}
//                         </p>
//                         <p className="text-gray-700">{propertyDetail?.address}</p>
//                         <div className="flex items-center space-x-2">
//                             <div className="w-6 h-6 bg-red-500 rounded-full" />
//                             <p className="text-gray-600">{propertyDetail?.locality} {propertyDetail?.possession === "Immediate" ? "1 min walk" : propertyDetail?.possession}</p>
//                         </div>
//                     </div>

//                     <div className="mt-4 py-2 px-4 bg-yellow-100 rounded-lg inline-block">
//                         <p className="text-gray-700">Never transfer prepayment</p>
//                     </div>

                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BuilderContactCard;


import React from 'react';
import { Heart } from 'lucide-react';
import { QRCode } from 'antd';

const BuilderContactCard = ({ propertyDetail }) => {
    // Format price to include spaces between thousands
    const formatPrice = (price) => {
        return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // Function to handle email click
    const handleEmailClick = (email) => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Open the default email app on mobile
            window.location.href = `mailto:${email}`;
        } else {
            // Open Gmail's compose window in a new tab on desktop
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
            window.open(gmailUrl, '_blank');
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl border-1 py-8 px-10 my-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                <div>
                    <h1 className="text-2xl font-semibold">{propertyDetail?.builder?.company}</h1>
                    <p className="text-gray-500">{propertyDetail?.builder?.name}</p>
                </div>
                <img
                    src='https://wityysaver.s3.amazonaws.com/1725269127606-1631341931041.jpeg'
                    alt={propertyDetail?.builder?.company}
                    className="h-20"
                />
            </div>

            {/* Contact Section */}
            {/* <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 bg-gray-50 py-4 px-4 rounded-md ">
                <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold">{propertyDetail?.builder?.contacts?.[0]}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <QRCode
                        value={`tel:${propertyDetail?.builder?.contacts?.[0]}`}
                        size={92}
                    />
                    <p className="text-gray-600 text-sm">
                        Point your phone camera<br />
                        at the code to quickly dial<br />
                        the number
                    </p>
                </div>
            </div> */}
            <div className="flex flex-col justify-between md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 bg-gray-50 py-2 px-4 rounded-md">
                {/* <div className="flex flex-col items-start space-x-2">
                    <p className="text-2xl font-bold">{propertyDetail?.builder?.contacts?.[0]}</p>
                    <p className="text-xs ">{propertyDetail?.builder?.contacts?.[1]}</p>
                    <p className="text-xs ">{propertyDetail?.builder?.contacts?.[2]}</p>
                </div> */}
                <div className="flex flex-col items-start space-x-2">
                    <p className="text-2xl font-bold">{propertyDetail?.builder?.contacts?.[0]}</p>
                    {propertyDetail?.builder?.contacts?.slice(1).map((contact, index) => (
                        <button
                            key={index}
                            onClick={() => handleEmailClick(contact)}
                            className="text-xs text-blue-500 hover:underline focus:outline-none"
                        >
                            {contact}
                        </button>
                    ))}
                </div>

                <div className="flex items-center">
                    <QRCode
                        value={`tel:${propertyDetail?.builder?.contacts?.[0]}`}
                        size={92}
                        style={{ border: 'none' }} // Remove the border
                    />
                    <p className="text-gray-600 text-sm leading-tight">
                        Point your phone camera<br />
                        at the code to quickly dial<br />
                        the number
                    </p>
                </div>
            </div>


            {/* Property Card */}
            <div className="flex flex-col justify-between items-center md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-6">

                {/* Middle - Floor Plan */}
                <div className="w-full md:w-1/2">
                    <img
                        src={propertyDetail?.floor_plan_image || "/api/placeholder/200/400"}
                        alt="Floor Plan"
                        className="w-full max-h-56 object-contain"
                    />
                </div>

                {/* Right side - Property Details */}
                <div className="w-full md:w-5/12 relative">
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold mb-4">
                            {formatPrice(propertyDetail?.price)} ₹
                        </h2>
                        <Heart className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                    </div>

                    <div className="space-y-2">
                        <p className="text-lg">
                            {propertyDetail?.area} per {propertyDetail?.areaUnit}, {propertyDetail?.type_name},
                            {propertyDetail?.status === "listed" ? "new building" : propertyDetail?.status}
                        </p>
                        <p className="text-blue-600 font-semibold">
                            {propertyDetail?.post_title}
                        </p>
                        <p className="text-gray-700">{propertyDetail?.address}</p>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-red-500 rounded-full" />
                            <p className="text-gray-600">{propertyDetail?.locality} {propertyDetail?.possession === "Immediate" ? "1 min walk" : propertyDetail?.possession}</p>
                        </div>
                    </div>

                    <div className="mt-4 py-2 px-4 bg-yellow-100 rounded-lg inline-block">
                        <p className="text-gray-700">Never transfer prepayment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuilderContactCard;
