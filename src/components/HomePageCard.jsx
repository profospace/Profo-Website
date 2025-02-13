// import React from 'react';
// import { Heart } from 'lucide-react';
// import { base_url } from '../utils/base_url';
// import { useNavigate } from 'react-router-dom';

// const HomePageCard = ({ info, image, price, label, type, navigation }) => {
//     const navigate = useNavigate()
//     // console.log(info)
//     return (

//         <div className="relative overflow-hidden bg-white transition-shadow" onClick={() => navigate(navigation)}>
//             <div className="relative h-48 w-full">
//                 <img
//                     src={image}
//                     alt={info?.name}
//                     className="w-full h-full object-cover rounded-xl"
//                 />
//                 {type && (
//                     <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
//                         {type}
//                     </div>
//                 )}
//                 <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-white">
//                     <Heart className="w-5 h-5 text-gray-600" />
//                 </button>
//             </div>

//             <div className="mt-2">
//                 <div className="text-xl font-semibold">
//                     {price}$
//                 </div>

//                 <h3 className="text-sm font-medium">{label}</h3>


//             </div>

//         </div>
//     );
// }

// export default HomePageCard


/* working */
import React from 'react';
import { Heart, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../utils/base_url';


const HomePageCard = ({ info, image, price, label, type, navigation, contactList, bedrooms, address, amenities , gallery }) => {
    console.log(gallery)
    const navigate = useNavigate()
    const handleContactClick = (e) => {
        e.stopPropagation();
        if (contactList?.[0]) {
            window.location.href = `tel:${contactList[0]}`;
        }
    };

    return (
        <div
            className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => navigation && navigate(navigation)}
        >
            {/* Image Container */}
            <div className="relative h-72 md:h-96 w-full overflow-hidden">
                <img
                    src={image}
                    alt={info?.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
                    {type}
                </div>

                {/* Heart Button */}
                {/* <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
                > */}
                <button
                    className="absolute top-4 right-4 backdrop-blur-sm shadow-sm group/heart transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                    <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
                </button>

                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300  bg-black/20 backdrop-blur-sm">
                    <div className="space-y-2">
                        {/* Price and Label Container */}
                        <div className="text-white">
                            <div className="flex items-center justify-between">
                                <h3 className="text-md font-semibold line-clamp-1">{label}</h3>
                                <span className="text-md font-semibold">{bedrooms} BHK</span>
                            </div>
                            <div className='text-xs text-gray-500'>{address}</div>
                           <div className='flex justify-between items-center'>
                                <div className='text-md text-white'>{price} INR</div>
                                <div className='flex gap-2 items-center'>
                                    <h1 className=' text-xs'>Amenities</h1>
                                    <div className='rounded-full bg-black text-[10px] px-2 py-[1px]'>{amenities}+</div>
                                </div>
                           </div>
                        </div>

                        {/* Contact Button */}
                        <button
                            onClick={handleContactClick}
                            className="w-full mt-4 bg-white/90 backdrop-blur-sm text-gray-800 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white"
                        >
                            <Phone className="w-4 h-4" />
                            Contact Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageCard;


// import { useNavigate } from 'react-router-dom';
// import { Heart, Phone } from 'lucide-react';

// const HomePageCard = ({ info, image, price, label, type, navigation, contactList, bedrooms, address, amenities, gallery }) => {
//     const navigate = useNavigate();
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [prevMouseX, setPrevMouseX] = useState(null);

//     // Get first 3 images from gallery or use default image
//     const displayImages = gallery?.slice(0, 3) || [image];
//     const remainingImages = Math.max(0, (gallery?.length || 0) - 3);

//     const handleMouseMove = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const currentX = e.clientX - rect.left;

//         if (prevMouseX !== null) {
//             const movement = currentX - prevMouseX;

//             // Increased sensitivity by reducing the movement threshold
//             if (movement > 5 && currentImageIndex < displayImages.length - 1) {
//                 setCurrentImageIndex(prev => prev + 1);
//             } else if (movement < -5 && currentImageIndex > 0) {
//                 setCurrentImageIndex(prev => prev - 1);
//             }
//         }

//         setPrevMouseX(currentX);
//     };

//     const handleContactClick = (e) => {
//         e.stopPropagation();
//         if (contactList?.[0]) {
//             window.location.href = `tel:${contactList[0]}`;
//         }
//     };

//     return (
//         <div
//             className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
//             onClick={() => navigation && navigate(navigation)}
//             onMouseEnter={() => setPrevMouseX(null)}
//             onMouseLeave={() => {
//                 setPrevMouseX(null);
//                 setCurrentImageIndex(0);
//             }}
//             onMouseMove={handleMouseMove}
//         >
//             {/* Image Container */}
//             <div className="relative h-72 md:h-96 w-full overflow-hidden">
//                 {/* Images */}
//                 <div className="relative w-full h-full">
//                     {displayImages.map((img, index) => (
//                         <img
//                             key={index}
//                             src={img}
//                             alt={`${info?.name} ${index + 1}`}
//                             className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
//                                 }`}
//                         />
//                     ))}

//                     {/* Image Navigation Hint */}
//                     <div className="absolute inset-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                         <div className="w-1/2 bg-gradient-to-r from-black/20 to-transparent" />
//                         <div className="w-1/2 bg-gradient-to-l from-black/20 to-transparent" />
//                     </div>
//                 </div>

//                 {/* Last Image Overlay */}
//                 {currentImageIndex === 2 && remainingImages > 0 && (
//                     <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//                         <p className="text-white text-xl font-semibold">
//                             +{remainingImages} more images
//                         </p>
//                     </div>
//                 )}

//                 {/* Carousel Indicators */}
//                 <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
//                     {displayImages.map((_, index) => (
//                         <div
//                             key={index}
//                             className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index
//                                     ? 'bg-white scale-125'
//                                     : 'bg-white/50'
//                                 }`}
//                         />
//                     ))}
//                     {remainingImages > 0 && (
//                         <div className="text-white text-xs bg-black/50 rounded-full px-2 py-1">
//                             +{remainingImages}
//                         </div>
//                     )}
//                 </div>

//                 {/* Type Badge */}
//                 <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-xl px-4 py-[2px] rounded-full text-sm font-medium shadow-sm">
//                     {type}
//                 </div>

//                 {/* Heart Button */}
//                 <button className="absolute top-4 right-4 backdrop-blur-sm shadow-sm group/heart transition-transform duration-300 hover:scale-110 active:scale-95">
//                     <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
//                 </button>

//                 {/* Content Container */}
//                 <div className="absolute bottom-0 left-0 right-0 px-4 py-2 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 bg-black/20 backdrop-blur-sm">
//                     <div className="space-y-2">
//                         {/* Price and Label Container */}
//                         <div className="text-white">
//                             <div className="flex items-center justify-between">
//                                 <h3 className="text-md font-semibold line-clamp-1">{label}</h3>
//                                 <span className="text-md font-semibold">{bedrooms} BHK</span>
//                             </div>
//                             <div className="text-xs text-gray-500">{address}</div>
//                             <div className="flex justify-between items-center">
//                                 <div className="text-md text-white">{price} INR</div>
//                                 <div className="flex gap-2 items-center">
//                                     <h1 className="text-xs">Amenities</h1>
//                                     <div className="rounded-full bg-black text-[10px] px-2 py-[1px]">
//                                         {amenities}+
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Contact Button */}
//                         <button
//                             onClick={handleContactClick}
//                             className="w-full mt-4 bg-white/90 backdrop-blur-sm text-gray-800 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white"
//                         >
//                             <Phone className="w-4 h-4" />
//                             Contact Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePageCard;