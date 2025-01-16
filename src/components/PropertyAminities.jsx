import React from 'react';

const PropertyAminities = ({ amenities = [] }) => {
    // Custom icons using SVG for better pixel-perfect match
    const icons = {
        series: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" />
                <line x1="7" y1="8" x2="17" y2="8" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="7" y1="16" x2="17" y2="16" />
            </svg>
        ),
        house: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        building: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="2" width="16" height="20" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="16" y2="14" />
                <line x1="8" y1="18" x2="16" y2="18" />
            </svg>
        ),
        floors: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21V3M21 21V3M7 21V3M17 21V3M11 21V3M15 21V3" />
            </svg>
        ),
        apartments: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 8h6M9 12h6M9 16h6" />
            </svg>
        ),
        entrances: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M3 3h18M3 9h18M3 15h18" />
            </svg>
        )
    };

    const features = [
        { icon: 'series', label: 'Series 1605-AM', value: '' },
        { icon: 'house', label: 'House 1982', value: '' },
        { icon: 'building', label: 'Panel building', value: '' },
        { icon: 'floors', label: '12 floors', value: '' },
        { icon: 'apartments', label: '192 apartments', value: '' },
        { icon: 'entrances', label: '4 entrances', value: '' },
        { icon: 'floors', label: '2.5 m ceilings', value: '' },
        { icon: 'building', label: 'Elevator', value: '' },
        { icon: 'building', label: 'Garbage chute', value: '' },
        { icon: 'building', label: 'Closed area', value: '' },
        { icon: 'building', label: 'Central heating', value: '' },
        { icon: 'building', label: 'Open parking', value: '' }
    ];

    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Amenities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center text-gray-600">
                            {icons[feature.icon]}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-900 text-base font-medium">
                                {feature.label}
                            </span>
                            {feature.value && (
                                <span className="text-gray-500 text-sm">
                                    {feature.value}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyAminities;