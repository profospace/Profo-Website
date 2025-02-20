// import React from 'react';
// import HeadingCommon from './HeadingCommon';

// const GalleryList = ({ images }) => {
//     // Group images into columns for masonry layout
//     const columns = [[], [], []];

//     images?.forEach((imageUrl, index) => {
//         columns[index % 3].push(imageUrl);
//     });

//     return (
//         <div className="w-full container">
//         <HeadingCommon title='Gallery' textColor='black'  />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {columns.map((column, columnIndex) => (
//                     <div key={columnIndex} className="flex flex-col gap-4">
//                         {column.map((imageUrl, imageIndex) => (
//                             <div
//                                 key={imageIndex}
//                                 className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
//                             >
//                                 <img
//                                     src={imageUrl}
//                                     alt={`Gallery image ${columnIndex * column.length + imageIndex + 1}`}
//                                     className="w-full h-52 object-cover"
//                                     loading="lazy"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default GalleryList;

import React, { useState } from 'react';
import { FiImage } from 'react-icons/fi'; // Importing Image Icon
import HeadingCommon from './HeadingCommon';

const GalleryList = ({ images }) => {
    // Group images into columns for masonry layout
    const columns = [[], [], []];

    images?.forEach((imageUrl, index) => {
        columns[index % 3].push(imageUrl);
    });

    return (
        <div className="w-full container">
            <HeadingCommon title="Gallery" textColor="black" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col gap-4">
                        {column.map((imageUrl, imageIndex) => (
                            <ImageCard
                                key={imageIndex}
                                imageUrl={imageUrl}
                                altText={`Gallery image ${columnIndex * column.length + imageIndex + 1}`}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ImageCard = ({ imageUrl, altText }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            {!imageError ? (
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                    onError={() => setImageError(true)}
                />
            ) : (
                <div className="w-full h-52 flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 text-sm font-semibold rounded-lg shadow-md">
                    <FiImage className="text-5xl text-gray-500 mb-2" /> {/* React Icon for Modern Look */}
                    <span className="text-gray-600">Preview Not Available</span>
                </div>
            )}
        </div>
    );
};

export default GalleryList;
