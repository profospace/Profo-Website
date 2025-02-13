import React from 'react';

const DynamicBubble = ({ price, color = '#4CAF50' }) => {
    // Create a temporary span to measure text width
    const measure = document.createElement('span');
    measure.style.fontSize = '22px';
    measure.style.fontFamily = 'Poppins, Arial';
    measure.style.fontWeight = '600';
    measure.style.visibility = 'hidden';
    measure.style.position = 'absolute';
    measure.textContent = price;
    document.body.appendChild(measure);

    // Get text width and add padding
    const textWidth = measure.offsetWidth;
    document.body.removeChild(measure);

    const horizontalPadding = 20; // Padding on each side
    const bubbleWidth = textWidth + (horizontalPadding * 2);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`-25 -5 ${bubbleWidth + 50} 80`}
        >
            <path
                d={`
                    M30,0 
                    h${bubbleWidth - 30}
                    a28,28 0 0 1 20,20 
                    v10 
                    a28,28 0 0 1 -20,20 
                    h-${(bubbleWidth - 30) / 2 - 5}
                    q-5,0 -10,15 
                    q-5,-15 -10,-15 
                    h-${(bubbleWidth - 30) / 2 - 5}
                    a28,28 0 0 1 -20,-20 
                    v-10 
                    a28,28 0 0 1 20,-20 
                    z
                `}
                fill={color}
                stroke="#FFFFFF"
                strokeWidth="2"
            />
            <text
                x={bubbleWidth / 2}
                y="25"
                fontFamily="Poppins, Arial"
                fontSize="22"
                fontWeight="600"
                fill="#FFFFFF"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                from {price}
            </text>
        </svg>
    );
};

export default DynamicBubble;