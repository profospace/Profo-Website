// // import React, { useState, useEffect } from 'react';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';

// // const TagsCarousel = () => {
// //     const [currentSlide, setCurrentSlide] = useState(0);
// //     const [isHovering, setIsHovering] = useState(false);

// //     const features = [
// //         { title: 'Semi Furnished', category: 'furnishing', icon: '🪑' },
// //         { title: 'Pet Friendly', category: 'allowances', icon: '🐾' },
// //         { title: '3 Bedrooms', category: 'rooms', icon: '🛏️' },
// //         { title: '2 Bathrooms', category: 'facilities', icon: '🚿' },
// //         { title: 'Air Conditioned', category: 'amenities', icon: '❄️' },
// //         { title: 'Car Parking', category: 'parking', icon: '🚗' },
// //         { title: 'Semi Furnished', category: 'furnishing', icon: '🪑' },
// //         { title: 'Pet Friendly', category: 'allowances', icon: '🐾' },
// //         { title: '3 Bedrooms', category: 'rooms', icon: '🛏️' },
// //         { title: '2 Bathrooms', category: 'facilities', icon: '🚿' },
// //         { title: 'Air Conditioned', category: 'amenities', icon: '❄️' },
// //         { title: 'Car Parking', category: 'parking', icon: '🚗' },
// //     ];

// //     const slidesToShow = 3;
// //     const totalSlides = Math.ceil(features.length / slidesToShow);

// //     const nextSlide = () => {
// //         setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
// //     };

// //     const prevSlide = () => {
// //         setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
// //     };

// //     const visibleFeatures = () => {
// //         const start = currentSlide * slidesToShow;
// //         return features.slice(start, start + slidesToShow);
// //     };

// //     // Check if there's data for next and previous slides
// //     const hasNextSlide = currentSlide < totalSlides - 1;
// //     const hasPrevSlide = currentSlide > 0;

// //     useEffect(() => {
// //         const interval = setInterval(() => {
// //             nextSlide();
// //         }, 5000);

// //         return () => clearInterval(interval);
// //     }, [currentSlide]);

// //     return (
// //         <div
// //             className="w-full max-w-xl mx-auto"
// //             onMouseEnter={() => setIsHovering(true)}
// //             onMouseLeave={() => setIsHovering(false)}
// //         >
// //             <div className="relative overflow-hidden">
// //                 <div
// //                     className="flex transition-transform duration-500 ease-in-out"
// //                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// //                 >
// //                     <div className="w-full flex justify-between items-center min-w-full px-8">
// //                         {visibleFeatures().map((feature, index) => (
// //                             <div key={index} className="flex flex-col items-center w-1/3 relative">
// //                                 <div className="text-xs font-medium text-teal-700">{feature.title}</div>
// //                                 <div className="text-xs font-semibold text-gray-500">{feature.category}</div>

// //                                 {index < visibleFeatures().length - 1 && (
// //                                     <div className="absolute right-0 top-1/2 h-12 w-px bg-gray-200 transform -translate-y-1/2"></div>
// //                                 )}
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 {isHovering && hasPrevSlide && (
// //                     <button
// //                         onClick={prevSlide}
// //                         className="absolute left-5 top-1/2 transform -translate-y-1/2 -ml-4 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm"
// //                         aria-label="Previous slide"
// //                     >
// //                         <ChevronLeft size={20} />
// //                     </button>
// //                 )}

// //                 {isHovering && hasNextSlide && (
// //                     <button
// //                         onClick={nextSlide}
// //                         className="absolute right-5 top-1/2 transform -translate-y-1/2 -mr-4 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm"
// //                         aria-label="Next slide"
// //                     >
// //                         <ChevronRight size={20} />
// //                     </button>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default TagsCarousel;

// // import React, { useState, useEffect } from 'react';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';

// // const TagsCarousel = ({property}) => {
// //     const [currentSlide, setCurrentSlide] = useState(0);
// //     const [isHovering, setIsHovering] = useState(false);

// //     const features = [
// //         { title: property?.construction_status, category: 'construction status', },
// //         { title: property?.furnishing, category: 'furnishing', },
// //         { title: property?.possession, category: 'possession', },
// //         { title: property?.pricePerSqFt, category: 'pricePerSqFt', },
// //         { title: property?.verified === true ? '✅' : '❌', category: 'verified', },
// //         { title: property?.purpose, category: 'purpose', },
// //         { title: property?.ownerName, category: 'ownerName', },
// //         { title: property?.priceOnRequest, category: 'priceOnRequest', },
// //         { title: property?.region, category: 'region', },
// //         { title: property?.bedrooms, category: 'bedrooms', },
// //         { title: property?.floor, category: 'floors', },
// //     ];

// //     const slidesToShow = 3;
// //     const totalSlides = Math.ceil(features.length / slidesToShow);

// //     const nextSlide = () => {
// //         setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 3));
// //     };

// //     const prevSlide = () => {
// //         setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 3));
// //     };

// //     // Check if there are slides available in each direction
// //     const hasNextSlide = features.length > slidesToShow && currentSlide < totalSlides - 1;
// //     const hasPrevSlide = features.length > slidesToShow && currentSlide > 0;

// //     useEffect(() => {
// //         const interval = setInterval(() => {
// //             nextSlide();
// //         }, 5000);

// //         return () => clearInterval(interval);
// //     }, [currentSlide]);

// //     // Get the visible features for the current slide
// //     const currentFeatures = features.slice(
// //         currentSlide * slidesToShow,
// //         Math.min((currentSlide * slidesToShow) + slidesToShow, features.length)
// //     );

// //     return (
// //         <div
// //             className="w-full max-w-xl mx-auto relative"
// //             onMouseEnter={() => setIsHovering(true)}
// //             onMouseLeave={() => setIsHovering(false)}
// //         >
// //             <div className="overflow-hidden">
// //                 <div
// //                     className="flex transition-transform duration-500 ease-in-out"
// //                     style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
// //                 >
// //                     {Array.from({ length: totalSlides }).map((_, slideIndex) => {
// //                         const slideFeatures = features.slice(
// //                             slideIndex * slidesToShow,
// //                             Math.min((slideIndex * slidesToShow) + slidesToShow, features.length)
// //                         );

// //                         return (
// //                             <div key={slideIndex} className="flex justify-between items-center min-w-full">
// //                                 {slideFeatures.map((feature, index) => (
// //                                     <div key={index} className="flex flex-col items-center w-1/3 relative">
// //                                         {/* <div className="text-2xl mb-2">{feature.icon}</div> */}
// //                                         <div className="text-xs font-medium text-teal-700">{feature.title}</div>
// //                                         <div className="text-xs font-semibold text-gray-500">{feature.category}</div>

// //                                         {index < slideFeatures.length - 1 && (
// //                                             <div className="absolute right-0 top-1/2 h-12 w-px bg-gray-200 transform -translate-y-1/2"></div>
// //                                         )}
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         );
// //                     })}
// //                 </div>
// //             </div>

// //             {isHovering && hasPrevSlide && (
// //                 <button
// //                     onClick={prevSlide}
// //                     className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
// //                     aria-label="Previous slide"
// //                 >
// //                     <ChevronLeft size={20} />
// //                 </button>
// //             )}

// //             {isHovering && hasNextSlide && (
// //                 <button
// //                     onClick={nextSlide}
// //                     className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
// //                     aria-label="Next slide"
// //                 >
// //                     <ChevronRight size={20} />
// //                 </button>
// //             )}

// //             {/* Pagination indicators */}
// //             {/* <div className="flex justify-center mt-4">
// //                 {Array.from({ length: totalSlides }).map((_, index) => (
// //                     <button
// //                         key={index}
// //                         onClick={() => setCurrentSlide(index)}
// //                         className={`h-2 w-2 rounded-full mx-1 ${currentSlide === index ? 'bg-teal-600' : 'bg-gray-300'
// //                             }`}
// //                         aria-label={`Go to slide ${index + 1}`}
// //                     />
// //                 ))}
// //             </div> */}
// //         </div>
// //     );
// // };

// // export default TagsCarousel;

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const TagsCarousel = ({ property }) => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isHovering, setIsHovering] = useState(false);

//     // Filter out features that have no data or don't meet criteria
//     const features = [
//         property?.construction_status && { title: property.construction_status, category: 'construction status' },
//         property?.furnishing && { title: property.furnishing, category: 'furnishing' },
//         property?.possession && { title: property.possession, category: 'possession' },
//         property?.pricePerSqFt && { title: property.pricePerSqFt, category: 'pricePerSqFt' },
//         // Only show verified if it's true
//         property?.verified === true && { title: '✅', category: 'verified' },
//         property?.purpose && { title: property.purpose, category: 'purpose' },
//         property?.ownerName && { title: property.ownerName, category: 'owner Name' },
//         !property?.price && { title: property.priceOnRequest, category: 'priceOnRequest' },
//         property?.region && { title: property.region, category: 'region' },
//         property?.bedrooms && { title: property.bedrooms, category: 'bedrooms' },
//         property?.floor && { title: property.floor, category: 'floors' },
//     ].filter(Boolean); // Remove all falsy values (undefined, null, false)

//     const slidesToShow = 3;
//     const totalSlides = Math.ceil(features.length / slidesToShow);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//     };

//     // Check if there are slides available in each direction
//     const hasNextSlide = features.length > slidesToShow && currentSlide < totalSlides - 1;
//     const hasPrevSlide = features.length > slidesToShow && currentSlide > 0;

//     useEffect(() => {
//         // Only set up auto-rotation if there are multiple slides
//         if (totalSlides > 1) {
//             const interval = setInterval(() => {
//                 nextSlide();
//             }, 5000);

//             return () => clearInterval(interval);
//         }
//     }, [currentSlide, totalSlides]);

//     // Get the visible features for the current slide
//     const currentFeatures = features.slice(
//         currentSlide * slidesToShow,
//         Math.min((currentSlide * slidesToShow) + slidesToShow, features.length)
//     );

//     // If no features have data, don't render the component
//     if (features.length === 0) {
//         return null;
//     }

//     return (
//         <div
//             className="w-full max-w-xl mx-auto relative"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//         >
//             <div className="overflow-hidden">
//                 <div
//                     className="flex transition-transform duration-500 ease-in-out"
//                     style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
//                 >
//                     {Array.from({ length: totalSlides }).map((_, slideIndex) => {
//                         const slideFeatures = features.slice(
//                             slideIndex * slidesToShow,
//                             Math.min((slideIndex * slidesToShow) + slidesToShow, features.length)
//                         );

//                         return (
//                             <div key={slideIndex} className="flex justify-between items-center min-w-full">
//                                 {slideFeatures.map((feature, index) => (
//                                     <div key={index} className="flex flex-col items-center w-1/3 relative">
//                                         <div className="text-xs font-medium text-teal-700  capitalize">{feature.title}</div>
//                                         <div className="text-xs font-semibold text-gray-500 capitalize">{feature.category}</div>

//                                         {index < slideFeatures.length - 1 && (
//                                             <div className="absolute right-0 top-1/2 h-12 w-px bg-gray-200 transform -translate-y-1/2"></div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {isHovering && hasPrevSlide && (
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
//                     aria-label="Previous slide"
//                 >
//                     <ChevronLeft size={20} />
//                 </button>
//             )}

//             {isHovering && hasNextSlide && (
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
//                     aria-label="Next slide"
//                 >
//                     <ChevronRight size={20} />
//                 </button>
//             )}
//         </div>
//     );
// };

// export default TagsCarousel;


// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const TagsCarousel = ({ property }) => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isHovering, setIsHovering] = useState(false);

//     // Filter out features that have no data or don't meet criteria
//     const features = [
//         property?.construction_status && { title: property.construction_status, category: 'construction status' },
//         property?.furnishing && { title: property.furnishing, category: 'furnishing' },
//         property?.possession && { title: property.possession, category: 'possession' },
//         property?.pricePerSqFt && { title: property.pricePerSqFt, category: 'pricePerSqFt' },
//         // Only show verified if it's true
//         property?.verified === true && { title: 'yes', category: 'verified' },
//         property?.purpose && { title: property.purpose, category: 'purpose' },
//         property?.ownerName && { title: property.ownerName, category: 'owner Name' },
//         property?.priceOnRequest && { title: property.priceOnRequest, category: 'priceOnRequest' },
//         property?.region && { title: property.region, category: 'region' },
//         property?.bedrooms && { title: property.bedrooms, category: 'bedrooms' },
//         property?.floor && { title: property.floor, category: 'floors' },
//     ].filter(Boolean); // Remove all falsy values (undefined, null, false)

//     const slidesToShow = 3;
//     const totalSlides = Math.ceil(features.length / slidesToShow);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//     };

//     // Check if there are slides available in each direction
//     const hasNextSlide = features.length > slidesToShow && currentSlide < totalSlides - 1;
//     const hasPrevSlide = features.length > slidesToShow && currentSlide > 0;

//     // Auto-swipe functionality removed as requested

//     // Get the visible features for the current slide
//     const currentFeatures = features.slice(
//         currentSlide * slidesToShow,
//         Math.min((currentSlide * slidesToShow) + slidesToShow, features.length)
//     );

//     // If no features have data, don't render the component
//     if (features.length === 0) {
//         return null;
//     }

//     return (
//         <div
//             className="w-full max-w-xl mx-auto relative"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//         >
//             <div className="overflow-hidden">
//                 <div
//                     className="flex transition-transform duration-500 ease-in-out"
//                     style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
//                 >
//                     {Array.from({ length: totalSlides }).map((_, slideIndex) => {
//                         const slideFeatures = features.slice(
//                             slideIndex * slidesToShow,
//                             Math.min((slideIndex * slidesToShow) + slidesToShow, features.length)
//                         );

//                         return (
//                             <div key={slideIndex} className="flex justify-between items-center min-w-full">
//                                 {slideFeatures.map((feature, index) => (
//                                     <div key={index} className="flex flex-col w-1/3 relative">
//                                         <div className="text-sm font-medium text-teal-700 capitalize">{feature.title}</div>
//                                         <div className="text-sm font-semibold text-gray-500 capitalize">{feature.category}</div>

//                                         {index < slideFeatures.length - 1 && (
//                                             <div className="absolute right-0 top-1/2 h-12 w-px bg-gray-200 transform -translate-y-1/2"></div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {isHovering && hasPrevSlide && (
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
//                     aria-label="Previous slide"
//                 >
//                     <ChevronLeft size={20} />
//                 </button>
//             )}

//             {isHovering && hasNextSlide && (
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
//                     aria-label="Next slide"
//                 >
//                     <ChevronRight size={20} />
//                 </button>
//             )}
//         </div>
//     );
// };

// export default TagsCarousel;


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TagsCarousel = ({ property }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Filter out features that have no data or don't meet criteria
    const features = [
        property?.construction_status && { title: property.construction_status, category: 'construction status' },
        property?.furnishing && { title: property.furnishing, category: 'furnishing' },
        property?.possession && { title: property.possession, category: 'possession' },
        property?.pricePerSqFt && { title: property.pricePerSqFt, category: 'pricePerSqFt' },
        // Only show verified if it's true
        property?.verified === true && { title: 'yes', category: 'verified' },
        property?.purpose && { title: property.purpose, category: 'purpose' },
        property?.ownerName && { title: property.ownerName, category: 'owner Name' },
        property?.priceOnRequest && { title: property.priceOnRequest, category: 'priceOnRequest' },
        property?.region && { title: property.region, category: 'region' },
        property?.bedrooms && { title: property.bedrooms, category: 'bedrooms' },
        property?.floor && { title: property.floor, category: 'floors' },
    ].filter(Boolean); // Remove all falsy values (undefined, null, false)

    const slidesToShow = 3;
    const totalSlides = Math.ceil(features.length / slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    // Check if there are slides available in each direction
    const hasNextSlide = features.length > slidesToShow && currentSlide < totalSlides - 1;
    const hasPrevSlide = features.length > slidesToShow && currentSlide > 0;

    // Get the visible features for the current slide
    const currentFeatures = features.slice(
        currentSlide * slidesToShow,
        Math.min((currentSlide * slidesToShow) + slidesToShow, features.length)
    );

    // If no features have data, don't render the component
    if (features.length === 0) {
        return null;
    }

    return (
        <div
            className="w-full max-w-xl mx-auto relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                        const slideFeatures = features.slice(
                            slideIndex * slidesToShow,
                            Math.min((slideIndex * slidesToShow) + slidesToShow, features.length)
                        );

                        return (
                            <div key={slideIndex} className="flex justify-between items-center min-w-full">
                                {slideFeatures.map((feature, index) => (
                                    <div key={index} className="flex flex-col w-1/3 relative">
                                        <div className="text-sm font-semibold text-teal-700 capitalize">{feature.title}</div>
                                        <div className="text-sm font-semibold text-gray-500 capitalize">{feature.category}</div>

                                        {index < slideFeatures.length - 1 && (
                                            <div className="absolute right-0 top-1/2 h-12 w-px bg-gray-200 transform -translate-y-1/2 mx-4"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            {isHovering && hasPrevSlide && (
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {isHovering && hasNextSlide && (
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-teal-600 transition-colors bg-white bg-opacity-70 rounded-full p-1 shadow-sm z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} />
                </button>
            )}
        </div>
    );
};

export default TagsCarousel;