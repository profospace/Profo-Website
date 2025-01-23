// import React, { useState } from 'react';
// import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// const ImagePreview = ({ images }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const openGallery = () => {
//         setIsOpen(true);
//     };

//     const closeGallery = () => {
//         setIsOpen(false);
//     };

//     const navigateImage = (direction) => {
//         const newIndex = (currentIndex + direction + images.length) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     if (!images || images.length === 0) return null;

//     return (
//         <>
//             <button
//                 onClick={openGallery}
//                 className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
//             >
//                 <Camera className="w-5 h-5" />
//                 <span>{images.length} photos</span>
//             </button>

//             {isOpen && (
//                 <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
//                     <button
//                         onClick={closeGallery}
//                         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <X size={32} />
//                     </button>

//                     <button
//                         onClick={() => navigateImage(-1)}
//                         className="absolute left-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <ChevronLeft size={48} />
//                     </button>

//                     <button
//                         onClick={() => navigateImage(1)}
//                         className="absolute right-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <ChevronRight size={48} />
//                     </button>

//                     <img
//                         src={images[currentIndex]}
//                         alt={`Gallery image ${currentIndex + 1}`}
//                         className="max-w-[95%] max-h-[95%] object-contain"
//                     />

//                     <div className="absolute bottom-4 text-white">
//                         {currentIndex + 1} / {images.length}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default ImagePreview;

// import React, { useState, forwardRef, useImperativeHandle } from 'react';
// import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// const ImagePreview = forwardRef(({ images }, ref) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useImperativeHandle(ref, () => ({
//         openGallery: () => {
//             setIsOpen(true);
//         }
//     }));

//     const closeGallery = () => {
//         setIsOpen(false);
//     };

//     const navigateImage = (direction) => {
//         const newIndex = (currentIndex + direction + images.length) % images.length;
//         setCurrentIndex(newIndex);
//     };

//     if (!images || images.length === 0) return null;

//     return (
//         <>
//             {isOpen && (
//                 <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
//                     <button
//                         onClick={closeGallery}
//                         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <X size={32} />
//                     </button>

//                     <button
//                         onClick={() => navigateImage(-1)}
//                         className="absolute left-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <ChevronLeft size={48} />
//                     </button>

//                     <button
//                         onClick={() => navigateImage(1)}
//                         className="absolute right-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <ChevronRight size={48} />
//                     </button>

//                     <img
//                         src={images[currentIndex]}
//                         alt={`Gallery image ${currentIndex + 1}`}
//                         className="max-w-[95%] max-h-[95%] object-contain"
//                     />

//                     <div className="absolute bottom-4 text-white">
//                         {currentIndex + 1} / {images.length}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// });

// export default ImagePreview;


import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImagePreview = forwardRef(({ images }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useImperativeHandle(ref, () => ({
        openGallery: () => {
            setIsOpen(true);
        }
    }));

    const closeGallery = () => {
        setIsOpen(false);
    };

    const navigateImage = (direction) => {
        const newIndex = (currentIndex + direction + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;

            switch (e.key) {
                case 'ArrowRight':
                    navigateImage(1);
                    break;
                case 'ArrowLeft':
                    navigateImage(-1);
                    break;
                case 'ArrowUp':
                    navigateImage(1);
                    break;
                case 'ArrowDown':
                    navigateImage(-1);
                    break;
                case 'Escape':
                    closeGallery();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, currentIndex, images]);

    if (!images || images.length === 0) return null;

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
                    onClick={closeGallery}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeGallery();
                        }}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage(-1);
                        }}
                        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-60"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage(1);
                        }}
                        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-60"
                    >
                        <ChevronRight size={48} />
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="max-w-[95%] max-h-[95%] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div className="absolute bottom-4 text-white">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
});

export default ImagePreview;