// // import React, { useState, useEffect } from 'react';

// // const ImageCarousel = () => {
// //     const [currentIndex, setCurrentIndex] = useState(0);

// //     // Sample images array - you can extend this
// //     const images = [
// //         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
// //         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
// //         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
// //         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
// //         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
// //         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
// //         // Add more images here
// //     ];

// //     // Auto-advance the carousel every 5 seconds
// //     useEffect(() => {
// //         const timer = setInterval(() => {
// //             setCurrentIndex((prevIndex) =>
// //                 prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //             );
// //         }, 5000);

// //         return () => clearInterval(timer);
// //     }, []);

// //     return (
// //         <div className="absolute w-full">
// //             {/* Main carousel container */}
// //             <div className="w-full h-full mt-6 relative">
// //                 <div className="overflow-hidden rounded-3xl">
// //                     {images.map((image, index) => (
// //                         <div
// //                             key={index}
// //                             className={`transition-opacity duration-500 absolute w-full ${index === currentIndex ? 'opacity-100' : 'opacity-0'
// //                                 }`}
// //                         >
// //                             <img
// //                                 src={image}
// //                                 alt={`Slide ${index + 1}`}
// //                                 className="w-[100vw] max-h-[50vh] object-cover rounded-3xl"
// //                             />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Pill indicators */}
// //             <div className="relative bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
// //                 {images.map((_, index) => (
// //                     <button
// //                         key={index}
// //                         onClick={() => setCurrentIndex(index)}
// //                         className={`h-2 transition-all duration-300 rounded-full focus:outline-none
// //               ${index === currentIndex
// //                                 ? 'w-8 bg-black'
// //                                 : 'w-2 bg-black/50 hover:bg-white/75'
// //                             }`}
// //                     />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ImageCarousel;


// import React, { useState, useEffect } from 'react';

// const ImageCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Sample images array - you can extend this
//     const images = [
//         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
//         'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b10886372eeff1e30b738e75/realty_large_1242',
//         'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b1890ac10069fdab0c8d3de1/realty_large_1242',
//         'https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242',
//         'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b10886372eeff1e30b738e75/realty_large_1242',
//         'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b1890ac10069fdab0c8d3de1/realty_large_1242',
//         // Add more images here
//     ];

//     // Auto-advance the carousel every 5 seconds
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex === images.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 5000);

//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="relative w-full mx-12 ">
//             {/* Main carousel container */}
//             <div className=" w-full h-full mt-6 relative">
//                 <div className="overflow-hidden rounded-3xl">
//                     {images.map((image, index) => (
//                         <div
//                             key={index}
//                             className={`transition-opacity duration-500 absolute w-full ${index === currentIndex ? 'opacity-100' : 'opacity-0'
//                                 }`}
//                         >
//                             <img
//                                 src={image}
//                                 alt={`Slide ${index + 1}`}
//                                 className="w-[90vw] max-h-[50vh] object-[25%_75%] rounded-2xl"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Pill indicators */}
//             <div className="absolute top-[21rem] left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`h-2 transition-all duration-300 rounded-full focus:outline-none
//               ${index === currentIndex
//                                 ? 'w-8 bg-black'
//                                 : 'w-2 bg-black/50 hover:bg-white/75'
//                             }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageCarousel;


import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            url: 'https://wityysaver.s3.ap-south-1.amazonaws.com/gallery_images/bb252d04-9c6c-4691-80d7-25a173f10c93_8a9f0d87880b970201880be07b6919a9_84580_163684_large.jpg',
            alt: 'Real Estate 1'
        },
        {
            url: 'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b10886372eeff1e30b738e75/realty_large_1242',
            alt: 'Real Estate 2'
        },
        {
            url: 'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b1890ac10069fdab0c8d3de1/realty_large_1242',
            alt: 'Real Estate 3'
        },
        {
            url: 'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b10886372eeff1e30b738e75/realty_large_1242',
            alt: 'Real Estate 4'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-full px-4 md:px-12 mt-6 ">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[280px] overflow-hidden rounded-2xl">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover object-[25% , 75%]"
                        />
                    </div>
                ))}
            </div>

            {/* Indicator dots */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-black w-4'
                                : 'bg-black/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;