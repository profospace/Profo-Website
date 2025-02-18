// import React from 'react';
// import { Heart, Mail } from 'lucide-react';
// import { FaLocationArrow } from 'react-icons/fa6';
// import { useNavigate } from 'react-router-dom';

// const PropertyCard = ({ property }) => {
//     const navigate = useNavigate()
//     // console.log(property)
//     const handleCardClick = () => {
//         navigate(`/api/details/${property?.post_id}`); // Navigate to the route with the post ID
//     };
//     return (
//         <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden" onClick={handleCardClick}>
//             {/* Property Image */}
//             <div className="relative h-[240px] overflow-hidden">
//                 <img
//                     src={property?.galleryList?.[0] || '/assets/testing.avif'}
//                     alt={property?.address || 'Swaroop Nagar, Kanpur, Uttar Pradesh'}
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-3 left-3 grid grid-cols-2 gap-1 place-items-center ">
//                     {property?.tags?.length > 0  && <span className="bg-[#1E61D9] text-white px-4 py-[0.5px] rounded-full text-sm font-medium">
//                         {property?.tags[0] || "Super"}
//                     </span>}
//                     {property?.tags?.length > 0 && <span className="bg-[#1E61D9] text-white px-4 py-[0.5px] rounded-full text-sm font-medium">
//                         {property?.tags[1] || "Great"}
//                     </span>}
//                 </div>
//                 {/* <div className="absolute top-3 left-3 grid grid-cols-2 gap-1 place-items-center">
//                     {property?.tags?.length > 0 && (
//                         <>
//                             <span className="bg-[#1E61D9] text-white px-4 py-[0.5px] rounded-full text-sm font-medium">
//                                 {property.tags[0] || "Super"}
//                             </span>
//                             <span className="bg-[#1E61D9] text-white px-4 py-[0.5px] rounded-full text-sm font-medium">
//                                 {property.tags[1] || "Great"}
//                             </span>
//                         </>
//                     )}
//                 </div> */}

//                 <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
//                     <Heart className="w-5 h-5 text-gray-600" />
//                 </button>
//             </div>

//             {/* Property Details */}
//             <div className="p-4">
//                 <div className="flex items-center gap-2 mb-3">
//                     {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
//                     {/* <span className="text-gray-700">Condo for sale</span> */}
//                     <span className="text-black font-semibold text-xl capitalize ">{property?.post_title}</span>
//                 </div>

//                 <hr></hr>
//                 <div className="my-3  flex items-center gap-5">
//                     <h3 className="text-2xl font-bold text-gray-900">${property?.price}</h3>
//                     {
//                         property?.purpose && <span className="bg-green-800 text-white px-4 py-[0.5px] rounded-full text-sm font-medium">
//                             {/* New - {property.timePosted || '8 hours ago'} */}
//                             {property?.purpose}
//                         </span>
//                     }
//                 </div>
//                 <div className="flex items-center gap-4 my-3">
//                     <div className="flex items-center gap-1">
//                         <span className="font-bold text-gray-900">{property?.bedrooms || '2'}</span>
//                         <span className="text-gray-600">bed</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <span className="font-bold text-gray-900">{property?.bathrooms || '3'}</span>
//                         <span className="text-gray-600">bath</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <span className="font-bold text-gray-900">{property?.floor || '3'}</span>
//                         <span className="text-gray-600">floor</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <span className="font-bold text-gray-900">{property?.area|| '2500'}</span>
//                         <span className="text-gray-600">{property?.areaUnit || 'sqft'}</span>
//                     </div>
//                 </div>

//                 <div className="mb-4">
//                     <p className="text-gray-700">{property?.address || 'Swaroop Nagar, Kanpur, Uttar Pradesh'}</p>
//                 </div>

//                 {/* <div className='grid grid-cols-6 gap-2 items-center'>
//                     <button className="col-span-5 w-full py-2.5 px-4 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
//                         <Mail className="w-4 h-4" />
//                         Email Agent
//                     </button>
//                     <button className="w-full py-1 px-2 border-2 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white flex items-center justify-center gap-2">
//                         <FaLocationArrow size={35} color="black" />
//                     </button>
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// export default PropertyCard

import React from 'react';
import { Heart, Home, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const PropertyCard = ({ property }) => {
    // Formatting price to show in millions
    const formatPrice = (price) => {
        return (price / 1000000).toFixed(1) + ' million ₹';
    };

    // Calculate area ranges similar to the image
    const getAreaRange = (area) => {
        return `from ${area} m²`;
    };

    const navigate = useNavigate()
    // console.log(property)
    const handleCardClick = () => {
        navigate(`/api/details/${property?.post_id}`); // Navigate to the route with the post ID
    };
    // console.log(property)

    return (
        <div className="relative bg-white rounded-xl overflow-hidden w-full max-w-96 mb-4" onClick={handleCardClick}>
            {/* Top Section with Image */}
            <div className="relative h-[240px] overflow-hidden">
                <img
                    src={property?.galleryList?.[0] || '/assets/default.jpg'}
                    alt={property?.post_title}
                    className="w-full h-full object-cover rounded-t-[35px] "
                />

                {/* Top Tags */}
                <div className="absolute bottom-3 left-3 flex gap-2">
                    {property?.construction_status === "ready to move" && (
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
                            Ready to Move
                        </span>
                    )}
                    {property?.type_name && (
                        <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
                            {property.type_name}
                        </span>
                    )}
                </div>

                {/* Heart Button */}
                <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-gray-600" />
                </button>
            </div>

            {/* Content Section */}


            <div className="max-w-xl border border-gray-200">
                {/* Title */}
                <h2 className="capitalize text-xl font-serif text-gray-800 px-2 py-4">
                    {property?.post_title}
                </h2>

                <hr></hr>

                {/* Details Container */}
                <div className="flex items-center justify-between px-2 py-4">
                    <div className="flex flex-col items-start gap-2">
                        {/* Left section with home icon and BHK */}
                        <div className="flex items-center space-x-2">
                            <Home className="h-5 w-5 text-gray-600" />
                            <span className="text-gray-800">{property?.bedrooms || 1} BHK Apartment</span>
                        </div>

                        {/* Middle section with area */}
                        <div className="flex flex-start">
                            <Square className="h-5 w-5 text-gray-600" />
                            <span className="text-gray-800">1600 ft<sup>2</sup></span>
                            {/* Floor info */}
                            <div className="text-gray-800">
                                3rd Floor
                            </div>
                        </div>

                    </div>

                    {/* Right section with price and availability */}
                    <div className="text-right">
                        <div className="text-gray-600 text-sm">Rooms from</div>
                        <div className="text-gray-800 font-medium">₹31000/mo</div>
                        <div className="text-green-600">Available</div>
                    </div>

                </div>
                <div className='w-[100%]'>
                    <Button className='bg-[#FED42B] w-full text-md hover:bg-black hover:text-white ' >Contact Owner</Button>
                </div>
            </div>


        </div>
    );
};

export default PropertyCard;