// import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

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

//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (!isOpen) return;

//             switch (e.key) {
//                 case 'ArrowRight':
//                 case 'ArrowUp':
//                     navigateImage(1);
//                     break;
//                 case 'ArrowLeft':
//                 case 'ArrowDown':
//                     navigateImage(-1);
//                     break;
//                 case 'Escape':
//                     closeGallery();
//                     break;
//             }
//         };

//         document.addEventListener('keydown', handleKeyDown);
//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [isOpen, currentIndex, images]);

//     if (!images || images.length === 0) return null;

//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <motion.div
//                     className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.3, ease: 'easeInOut' }}
//                     onClick={closeGallery}
//                 >
//                     {/* Close Button */}
//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             closeGallery();
//                         }}
//                         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <X size={32} />
//                     </button>

//                     {/* Left Navigation */}
//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             navigateImage(-1);
//                         }}
//                         className="absolute left-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <ChevronLeft size={48} />
//                     </button>

//                     {/* Right Navigation */}
//                     <button
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             navigateImage(1);
//                         }}
//                         className="absolute right-4 text-white hover:text-gray-300 transition-colors z-60"
//                     >
//                         <ChevronRight size={48} />
//                     </button>

//                     {/* Image Preview with Animation */}
//                     <motion.img
//                         key={currentIndex}
//                         src={images[currentIndex]}
//                         alt={`Gallery image ${currentIndex + 1}`}
//                         className="max-w-[95%] max-h-[95%] object-contain"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.9 }}
//                         transition={{ duration: 0.3, ease: 'easeInOut' }}
//                         onClick={(e) => e.stopPropagation()}
//                     />

//                     {/* Image Counter */}
//                     <div className="absolute bottom-4 text-white">
//                         {currentIndex + 1} / {images.length}
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// });

// export default ImagePreview;




import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImagePreview = forwardRef(({ images }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useImperativeHandle(ref, () => ({
        openGallery: () => {
            setIsOpen(true);
        }
    }));

    // Add scroll lock effect
    useEffect(() => {
        if (isOpen) {
            // Save current scroll position
            const scrollPosition = window.scrollY;
            // Add styles to prevent scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        } else {
            // Restore scrolling and position
            const scrollPosition = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollPosition || '0') * -1);
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

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
                case 'ArrowUp':
                    navigateImage(1);
                    break;
                case 'ArrowLeft':
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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={closeGallery}
                >
                    {/* Close Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeGallery();
                        }}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60"
                    >
                        <X size={32} />
                    </button>

                    {/* Left Navigation */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage(-1);
                        }}
                        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-60"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Right Navigation */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage(1);
                        }}
                        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-60"
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Image Preview with Animation */}
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="max-w-[95%] max-h-[95%] object-contain"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Image Counter */}
                    <div className="absolute bottom-4 text-white">
                        {currentIndex + 1} / {images.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export default ImagePreview;