import React from 'react';

function HeadingCommon({
    title = 'Default Title', // Fallback for title
    textColor = 'text-[#0066FF]', // Default text color
    dual = false, // Enable dual gradient
    tri = false, // Enable tri gradient
    dualGradient = ['from-blue-600', 'to-purple-600'], // Default dual gradient
    triGradient = ['from-green-400', 'via-blue-500', 'to-purple-600'], // Default tri gradient
}) {
    // Determine gradient classes based on dual/tri props
    const gradientClasses = dual
        ? `bg-gradient-to-r ${dualGradient.join(' ')}`
        : tri
            ? `bg-gradient-to-r ${triGradient.join(' ')}`
            : '';

    return (
        <h1
            className={`text-3xl font-bold mb-3 ${gradientClasses} ${gradientClasses ? 'bg-clip-text text-transparent' : textColor
                }`}
        >
            {title}
        </h1>
    );
}

export default HeadingCommon;
