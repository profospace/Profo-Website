// import React, { useRef, useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";


// const PropertyCard = ({ title, properties, imgSrc, bgColor }) => (
//     <div className={`${bgColor} rounded-xl overflow-hidden h-full max-w-72`}>
//         <div className="relative w-full h-96">
//             <img
//                 src={imgSrc || "/api/placeholder/400/300"}
//                 alt={title}
//                 className="w-full h-full object-cover"
//             />
//             <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-start px-8 pt-10 text-white">
//                 <h2 className="text-[24px] text-[#42526e] font-semibold">{title}</h2>
//                 <p className="text-md text-gray-600 ">{properties} Properties</p>
//             </div>
//         </div>
//     </div>
// );



// const PropertyTypeInCarousel = () => {
//     const scrollContainerRef = useRef(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     const properties = [
//         {
//             title: "Residential Apartment",
//             properties: "410+",
//             bgColor: "bg-[#F2F4FF]",
//             imgSrc:"/assets/d_hp_property_type_1.webp"
//         },
//         {
//             title: "Independent House/Villa",
//             properties: "350+",
//             bgColor: "bg-[#EEFAF6]",
//             imgSrc:"/assets/d_hp_property_type_2.png"
//         },
//         {
//             title: "Independent/Builder Floor",
//             properties: "100+",
//             bgColor: "bg-[#FFF6ED]",
//             imgSrc:"/assets/d_hp_property_type_3.webp"
//         }
//     ];

//     const checkScrollButtons = () => {
//         const container = scrollContainerRef.current;
//         if (container) {
//             const { scrollLeft, scrollWidth, clientWidth } = container;
//             setCanScrollLeft(scrollLeft > 0);
//             setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
//         }
//     };

//     useEffect(() => {
//         checkScrollButtons();
//         window.addEventListener('resize', checkScrollButtons);
//         return () => window.removeEventListener('resize', checkScrollButtons);
//     }, []);

//     const scroll = (direction) => {
//         const container = scrollContainerRef.current;
//         if (container) {
//             const cardWidth = container.querySelector('div[class*="min-w-"]').offsetWidth;
//             const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

//             container.scrollBy({
//                 left: scrollAmount,
//                 behavior: 'smooth'
//             });

//             setTimeout(checkScrollButtons, 300);
//         }
//     };

//     return (
//         <div className="w-full max-w-[1440px] mx-auto px-6 pt-16 pb-8">
//             <div className="space-y-1">
//                 <h1 className="text-[32px] font-bold text-[#0f1b5c]">
//                     Apartments, Villas and more
//                 </h1>
//                 <p className="text-[#5B6B8E] text-lg mb-8">in Kanpur</p>

//                 <div className="relative -mx-6 px-6">
//                     <div
//                         ref={scrollContainerRef}
//                         className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide py-4"
//                         onScroll={checkScrollButtons}
//                     >
//                         {properties.map((prop, index) => (
//                             <div key={index} className="min-w-[340px] md:min-w-[380px] flex-shrink-0 snap-center">
//                                 <PropertyCard {...prop} />
//                             </div>
//                         ))}
//                     </div>

//                     {canScrollLeft && (
//                         <button
//                             onClick={() => scroll('left')}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white p-3 rounded-full shadow-lg hidden md:flex items-center justify-center hover:bg-gray-50 transition-opacity"
//                         >
//                             <ChevronLeft className="h-5 w-5 text-[#0f1b5c]" />
//                         </button>
//                     )}

//                     {canScrollRight && (
//                         <button
//                             onClick={() => scroll('right')}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white p-3 rounded-full shadow-lg hidden md:flex items-center justify-center hover:bg-gray-50 transition-opacity"
//                         >
//                             <ChevronRight className="h-5 w-5 text-[#0f1b5c]" />
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertyTypeInCarousel;

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const PropertyCard = ({ title, properties, imgSrc, bgColor }) => (
    <div className={`${bgColor} rounded-xl overflow-hidden h-full max-w-72`}>
        <div className="relative w-full h-96">
            <img
                src={imgSrc || "/api/placeholder/400/300"}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-start px-8 pt-10 text-white">
                <h2 className="text-[24px] text-[#42526e] font-semibold">{title}</h2>
                <p className="text-md text-gray-600 ">{properties} Properties</p>
            </div>
        </div>
    </div>
);

const PropertyTypeInCarousel = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const properties = [
        {
            title: "Residential Apartment",
            properties: "410+",
            bgColor: "bg-[#F2F4FF]",
            imgSrc: "/assets/d_hp_property_type_1.webp",
        },
        {
            title: "Independent House/Villa",
            properties: "350+",
            bgColor: "bg-[#EEFAF6]",
            imgSrc: "/assets/d_hp_property_type_2.png",
        },
        {
            title: "Independent/Builder Floor",
            properties: "100+",
            bgColor: "bg-[#FFF6ED]",
            imgSrc: "/assets/d_hp_property_type_3.webp",
        },
        {
            title: "DIndependent House/Villa",
            properties: "350+",
            bgColor: "bg-[#EEFAF6]",
            imgSrc: "/assets/d_hp_property_type_2.png",
        },
        {
            title: "UIndependent/Builder Floor",
            properties: "100+",
            bgColor: "bg-[#FFF6ED]",
            imgSrc: "/assets/d_hp_property_type_3.webp",
        },
    ];

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        window.addEventListener("resize", checkScrollButtons);
        return () => window.removeEventListener("resize", checkScrollButtons);
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const containerWidth = container.clientWidth;
            const cardWidth = containerWidth / 3; // Adjust based on visible cards
            const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

            container.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });

            setTimeout(checkScrollButtons, 300);
        }
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 pt-16 pb-8 ">
            <div className="space-y-1">
                <h1 className="text-[32px] font-bold text-[#0f1b5c]">
                    Apartments, Villas and more
                </h1>
                <p className="text-[#5B6B8E] text-lg mb-8">in Kanpur</p>

                <div className="relative ">
                    <div
                        ref={scrollContainerRef}
                        className="grid grid-flow-col auto-cols-[calc(100%-16px)] md:auto-cols-[calc(50%-16px)] lg:auto-cols-[calc(33%-16px)] overflow-x-hidden snap-x snap-mandatory scrollbar-hide py-4"
                        onScroll={checkScrollButtons}
                    >
                        {properties.map((prop, index) => (
                            <div
                                key={index}
                                className="min-w-0 snap-center"
                            >
                                <PropertyCard {...prop} />
                            </div>
                        ))}
                    </div>

                    {canScrollLeft && (
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white p-3 rounded-full shadow-lg hidden md:flex items-center justify-center hover:bg-gray-50 transition-opacity"
                        >
                            <ChevronLeft className="h-5 w-5 text-[#0f1b5c]" />
                        </button>
                    )}

                    {canScrollRight && (
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white p-3 rounded-full shadow-lg hidden md:flex items-center justify-center hover:bg-gray-50 transition-opacity"
                        >
                            <ChevronRight className="h-5 w-5 text-[#0f1b5c]" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertyTypeInCarousel;

