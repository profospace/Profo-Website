// import React from 'react';

// const GalleryGrid = ({ gallery }) => {
//   // Function to organize images into categories
//   const organizeGallery = (items) => {
//     const categories = {};

//     items.forEach(item => {
//       categories[item.category || 'Inneryard'] = {
//         images: item.images || [],
//         count: item.images?.length || 0
//       };
//     });

//     return categories;
//   };

//   const categories = organizeGallery(gallery || []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
//       {Object.entries(categories).map(([category, data], index) => (
//         <div 
//           key={index}
//           className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//         >
//           <div className="relative aspect-[16/9]">
//             {data.images[0] && (
//               <div className="absolute inset-0">
//                 <img
//                   src={data.images[0]}
//                   alt={category}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}

//             {/* Overlay with gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </div>

//           {/* Title and photo count */}
//           <div className="p-4 border-t border-gray-100">
//             <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
//             <p className="text-sm text-gray-500">
//               {data.count} {data.count === 1 ? 'photo' : 'photos'}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GalleryGrid;

// import React from 'react';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const GalleryGrid = ({ gallery }) => {
//     const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
//     const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

//     const categories = [
//         {
//             id: 'inneryard',
//             title: 'Inneryard',
//             subtitle: 'eleven from 10',
//             thumbnail: '/api/placeholder/800/600',
//             images: [
//                 {
//                     url: '/api/placeholder/1200/800',
//                     alt: 'Modern residential building inneryard with wooden deck'
//                 },
//                 // Add more images here
//             ]
//         }
//         // Add more categories here
//     ];

//     const handlePrevious = () => {
//         setCurrentImageIndex((prev) =>
//             prev === 0 ? categories[0].images.length - 1 : prev - 1
//         );
//     };

//     const handleNext = () => {
//         setCurrentImageIndex((prev) =>
//             prev === categories[0].images.length - 1 ? 0 : prev + 1
//         );
//     };

//     const handleKeyDown = (event) => {
//         if (!isGalleryOpen) return;

//         switch (event.key) {
//             case 'ArrowLeft':
//                 handlePrevious();
//                 break;
//             case 'ArrowRight':
//                 handleNext();
//                 break;
//             case 'Escape':
//                 setIsGalleryOpen(false);
//                 break;
//             default:
//                 break;
//         }
//     };

//     React.useEffect(() => {
//         document.addEventListener('keydown', handleKeyDown);
//         return () => document.removeEventListener('keydown', handleKeyDown);
//     }, [isGalleryOpen]);

//     return (
//         <>
//             {/* Categories Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//                 {categories.map((category) => (
//                     <div
//                         key={category.id}
//                         onClick={() => setIsGalleryOpen(true)}
//                         className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//                     >
//                         <div className="relative aspect-[4/3]">
//                             <img
//                                 src={category.thumbnail}
//                                 alt={category.title}
//                                 className="w-full h-full object-cover"
//                             />
//                             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
//                         </div>
//                         <div className="p-4 bg-white">
//                             <h3 className="text-lg font-semibold">{category.title}</h3>
//                             <p className="text-sm text-gray-500">{category.subtitle}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Full Screen Gallery Modal */}
//             {isGalleryOpen && (
//                 <div className="fixed inset-0 bg-black z-50 overflow-hidden">
//                     <div className="absolute top-4 right-4 z-10">
//                         <button
//                             onClick={() => setIsGalleryOpen(false)}
//                             className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                         >
//                             <X className="w-6 h-6" />
//                         </button>
//                     </div>

//                     <div className="relative h-full flex items-center justify-center">
//                         {/* Main Image */}
//                         <div className="relative w-full h-full">
//                             <img
//                                 src={categories[0].images[currentImageIndex].url}
//                                 alt={categories[0].images[currentImageIndex].alt}
//                                 className="w-full h-full object-contain"
//                             />
//                         </div>

//                         {/* Navigation Buttons */}
//                         <button
//                             onClick={handlePrevious}
//                             className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                         >
//                             <ChevronLeft className="w-6 h-6" />
//                         </button>

//                         <button
//                             onClick={handleNext}
//                             className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
//                         >
//                             <ChevronRight className="w-6 h-6" />
//                         </button>

//                         {/* Image Counter */}
//                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
//                             {currentImageIndex + 1} / {categories[0].images.length}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default GalleryGrid;


import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryGrid = ({ gallery = [] }) => {
    const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const handlePrevious = () => {
        if (!selectedCategory) return;

        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedCategory.images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        if (!selectedCategory) return;

        setCurrentImageIndex((prev) =>
            prev === selectedCategory.images.length - 1 ? 0 : prev + 1
        );
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCurrentImageIndex(0);
        setIsGalleryOpen(true);
    };

    const handleKeyDown = (event) => {
        if (!isGalleryOpen) return;

        switch (event.key) {
            case 'ArrowLeft':
                handlePrevious();
                break;
            case 'ArrowRight':
                handleNext();
                break;
            case 'Escape':
                handleCloseGallery();
                break;
            default:
                break;
        }
    };

    const handleCloseGallery = () => {
        setIsGalleryOpen(false);
        setSelectedCategory(null);
        setCurrentImageIndex(0);
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isGalleryOpen]);

    return (
        <>
            {/* Categories Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-4 ">
                {gallery.map((category) => (
                    <div
                        key={category._id}
                        onClick={() => handleCategoryClick(category)}
                        className="group cursor-pointer overflow-hidden transition-all duration-300 shadow-md rounded-xl "
                    >
                        <div className="relative ">
                            <img
                                src={category.images[0]}
                                alt={`${category.category} thumbnail`}
                                className="w-full min-w-[40vw] max-h-64 object-cover rounded-lg "
                            />
                            <p className="absolute bottom-2 right-10 text-md text-gray-800 bg-white px-2 rounded-md">{category.images.length}+ photos</p>

                            <div className="absolute inset-0 transition-colors duration-300" />
                        </div>
                        <div className="py-2 px-2 bg-white">
                            <h3 className="text-lg ">{category.category}</h3>
                        </div>
                    </div>
                ))}

            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-4">
                {gallery.map((category) => (
                    <div
                        key={category._id}
                        onClick={() => handleCategoryClick(category)}
                        className="group cursor-pointer overflow-hidden transition-all duration-300 "
                    >
                        <div className="relative">
                            <img
                                // src={category.images[0]}
                                src={'/assets/testing.avif'}
                                alt={`${category.category} thumbnail`}
                                className="w-full min-w-[40vw] max-h-64 object-cover rounded-lg"  // Added rounded-lg here
                            />
                            {/* Black overlay that appears on hover */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg" /> {/* Added rounded-lg to overlay */}

                            <p className="absolute bottom-2 right-4 text-md text-gray-800 bg-white px-2 rounded-sm">
                                {category?.images?.length}+ photos
                            </p>
                            <h3 className="absolute bottom-2 left-4 text-md  bg-white px-2 rounded-sm">{category.category}</h3>
                        </div>
                        {/* <div className="py-1 px-0 bg-white">
                            <h3 className="text-lg">{category.category}</h3>
                        </div> */}
                    </div>
                ))}
            </div>

            

            {/* Full Screen Gallery Modal */}
            {isGalleryOpen && selectedCategory && (
                <div className="fixed inset-0 bg-black z-50 overflow-hidden ">
                    <div className="absolute top-4 right-4 z-10">
                        <button
                            onClick={handleCloseGallery}
                            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="relative h-full flex items-center justify-center">
                        {/* Main Image */}
                        <div className="relative w-full h-full">
                            <img
                                src={selectedCategory.images[currentImageIndex]}
                                alt={`${selectedCategory.category} image ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        {selectedCategory.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                            {currentImageIndex + 1} / {selectedCategory.images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryGrid;