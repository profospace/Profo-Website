import React, { useState, useEffect } from 'react';

const ImageGradientTransition = ({ imageUrl, height = '100vh', gradientHeight = '15vh' }) => {
    const [dominantColor, setDominantColor] = useState('rgb(255, 255, 255)');

    useEffect(() => {
        const getImageBottomColor = async () => {
            // Create a canvas to analyze the image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Load the image
            const img = new Image();
            img.crossOrigin = "Anonymous";

            img.onload = () => {
                // Set canvas size to match image
                canvas.width = img.width;
                canvas.height = img.height;

                // Draw image on canvas
                ctx.drawImage(img, 0, 0);

                // Sample pixels from the bottom area of the image
                const sampleHeight = Math.floor(img.height * 0.1); // Sample from bottom 10%
                const sampleWidth = img.width;
                const imageData = ctx.getImageData(0, img.height - sampleHeight, sampleWidth, sampleHeight);

                // Calculate average color
                let r = 0, g = 0, b = 0;
                const pixels = imageData.data.length / 4;

                for (let i = 0; i < imageData.data.length; i += 4) {
                    r += imageData.data[i];
                    g += imageData.data[i + 1];
                    b += imageData.data[i + 2];
                }

                r = Math.round(r / pixels);
                g = Math.round(g / pixels);
                b = Math.round(b / pixels);

                setDominantColor(`rgb(${r}, ${g}, ${b})`);
            };

            img.src = imageUrl;
        };

        if (imageUrl) {
            getImageBottomColor();
        }
    }, [imageUrl]);

    return (
        <header
            className="w-full relative"
            style={{
                height,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                    height: gradientHeight,
                    background: `linear-gradient(to top, ${dominantColor} 0%, ${dominantColor}20 50%, transparent 100%)`,
                }}
            />
        </header>
    );
};

export default ImageGradientTransition;