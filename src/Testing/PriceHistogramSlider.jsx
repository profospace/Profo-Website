import React, { useState, useEffect } from 'react';

const PriceHistogramSlider = ({ latitude, longitude, radius, propertyType, onFilterApply }) => {
    const [histogramData, setHistogramData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
    const [totalProperties, setTotalProperties] = useState(0);

    useEffect(() => {
        fetchHistogramData();
    }, [latitude, longitude, radius, propertyType]);

    const fetchHistogramData = async () => {
        try {
            setLoading(true);

            // Build query parameters
            const params = new URLSearchParams();
            if (latitude) params.append('latitude', latitude);
            if (longitude) params.append('longitude', longitude);
            if (radius) params.append('radius', radius);
            if (propertyType) {
                if (Array.isArray(propertyType)) {
                    propertyType.forEach(type => params.append('propertyType', type));
                } else {
                    params.append('propertyType', propertyType);
                }
            }

            const response = await fetch(`/api/property/price-histogram?${params.toString()}`);

            
            if (!response.ok) {
                throw new Error('Failed to fetch histogram data');
            }
            
            const data = await response.json();
            console.log("response", data)

            if (data.histogram && data.histogram.length > 0) {
                setHistogramData(data.histogram);
                setTotalProperties(data.totalCount || 0);

                // Initialize slider with min and max values from the API
                const initialMin = data.minPrice || 0;
                const initialMax = data.maxPrice || 100;

                setMinValue(initialMin);
                setMaxValue(initialMax);
                setPriceRange({ min: initialMin, max: initialMax });
            } else {
                // No data or empty histogram
                setHistogramData([]);
                setTotalProperties(0);
                setMinValue(0);
                setMaxValue(100);
                setPriceRange({ min: 0, max: 100 });
            }

            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);

            // Set some dummy data for visual demonstration in case of error
            const dummyData = generateDummyData();
            setHistogramData(dummyData);
            setTotalProperties(dummyData.reduce((sum, item) => sum + item.count, 0));
        }
    };

    // Generate dummy data for preview or error state
    const generateDummyData = () => {
        return Array.from({ length: 20 }, (_, i) => ({
            minPrice: i * 500000,
            maxPrice: (i + 1) * 500000,
            count: Math.floor(Math.random() * 100)
        }));
    };

    // Find the maximum value in the histogram for scaling
    const maxCount = Math.max(...(histogramData.map(item => item.count) || [0]));

    // Handle min slider change
    const handleMinChange = (e) => {
        const newMin = parseInt(e.target.value, 10);
        if (newMin <= maxValue) {
            setMinValue(newMin);
            setPriceRange(prev => ({ ...prev, min: newMin }));
        }
    };

    // Handle max slider change
    const handleMaxChange = (e) => {
        const newMax = parseInt(e.target.value, 10);
        if (newMax >= minValue) {
            setMaxValue(newMax);
            setPriceRange(prev => ({ ...prev, max: newMax }));
        }
    };

    // Apply the filter with the selected range
    const applyFilter = () => {
        if (onFilterApply) {
            onFilterApply(minValue, maxValue);
        }
    };

    // Format price for display
    const formatPrice = (price) => {
        if (price >= 10000000) {
            return `₹${(price / 10000000).toFixed(1)} Cr`;
        } else if (price >= 100000) {
            return `₹${(price / 100000).toFixed(1)} L`;
        } else if (price >= 1000) {
            return `₹${(price / 1000).toFixed(0)}K`;
        }
        return `₹${price}`;
    };

    // Count properties in the selected range
    const getSelectedPropertiesCount = () => {
        return histogramData
            .filter(item => item.minPrice >= minValue && item.maxPrice <= maxValue)
            .reduce((sum, item) => sum + item.count, 0);
    };

    if (loading) {
        return (
            <div className="w-full p-4 bg-white rounded-lg shadow animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-24 bg-gray-200 rounded w-full"></div>
            </div>
        );
    }

    if (error) {
        console.error("Error loading histogram data:", error);
    }

    const selectedCount = getSelectedPropertiesCount();

    return (
        <div className="w-full bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-800">Price Range</h3>
                <div className="flex items-center space-x-2">
                    <div className="text-sm bg-gray-100 px-3 py-1 rounded-md">
                        {selectedCount} of {totalProperties} properties
                    </div>
                    <button
                        onClick={applyFilter}
                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                        Apply
                    </button>
                </div>
            </div>

            {/* Price inputs */}
            <div className="flex justify-between mb-6">
                <div className="w-2/5">
                    <label className="block text-sm text-gray-600 mb-1">Min Price</label>
                    <input
                        type="text"
                        value={formatPrice(minValue)}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                    />
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="w-2/5">
                    <label className="block text-sm text-gray-600 mb-1">Max Price</label>
                    <input
                        type="text"
                        value={formatPrice(maxValue)}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                    />
                </div>
            </div>

            {histogramData.length > 0 ? (
                <div className="relative pt-5 pb-10">
                    {/* Histogram bars */}
                    <div className="flex items-end h-24 mb-4 relative">
                        {histogramData.map((item, index) => {
                            const isInRange = item.minPrice >= minValue && item.maxPrice <= maxValue;
                            const height = item.count ? (item.count / maxCount) * 100 : 0;

                            return (
                                <div
                                    key={index}
                                    className="w-full h-full flex justify-center items-end"
                                    title={`${item.count} properties between ${formatPrice(item.minPrice)} - ${formatPrice(item.maxPrice)}`}
                                >
                                    <div
                                        className={`w-full mx-px ${isInRange ? 'bg-blue-500' : 'bg-gray-300'
                                            }`}
                                        style={{ height: `${height}%` }}
                                    ></div>
                                </div>
                            );
                        })}

                        {/* Circle markers for slider ends */}
                        <div className="absolute bottom-0 left-0 w-6 h-6 rounded-full bg-white border-2 border-blue-500 -ml-3 z-10"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white border-2 border-blue-500 -mr-3 z-10"></div>
                    </div>

                    {/* Slider track */}
                    <div className="relative w-full h-1 bg-gray-200 rounded-full mb-4">
                        {/* Colored section of the track */}
                        <div
                            className="absolute h-1 bg-blue-500 rounded-full"
                            style={{
                                left: `${((minValue - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`,
                                right: `${100 - ((maxValue - priceRange.min) / (priceRange.max - priceRange.min)) * 100}%`
                            }}
                        ></div>
                    </div>

                    {/* Double range slider */}
                    <div className="relative">
                        <input
                            type="range"
                            min={priceRange.min}
                            max={priceRange.max}
                            value={minValue}
                            onChange={handleMinChange}
                            className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto cursor-pointer"
                            style={{
                                WebkitAppearance: 'none',
                                zIndex: 3
                            }}
                        />
                        <input
                            type="range"
                            min={priceRange.min}
                            max={priceRange.max}
                            value={maxValue}
                            onChange={handleMaxChange}
                            className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto cursor-pointer"
                            style={{
                                WebkitAppearance: 'none',
                                zIndex: 4
                            }}
                        />
                    </div>

                    {/* Price labels */}
                    <div className="flex justify-between mt-6 text-xs text-gray-500">
                        <span>{formatPrice(priceRange.min)}</span>
                        <span>{formatPrice((priceRange.min + priceRange.max) / 2)}</span>
                        <span>{formatPrice(priceRange.max)}</span>
                    </div>
                </div>
            ) : (
                <div className="py-12 text-center text-gray-500">
                    No properties found in this location with the selected filters.
                </div>
            )}
        </div>
    );
};

export default PriceHistogramSlider;