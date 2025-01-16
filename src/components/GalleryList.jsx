import React from 'react';

const GalleryList = ({ images }) => {
    // Group images into columns for masonry layout
    const columns = [[], [], []];

    images?.forEach((imageUrl, index) => {
        columns[index % 3].push(imageUrl);
    });

    return (
        <div className="w-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col gap-4">
                        {column.map((imageUrl, imageIndex) => (
                            <div
                                key={imageIndex}
                                className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    src={imageUrl}
                                    alt={`Gallery image ${columnIndex * column.length + imageIndex + 1}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryList;