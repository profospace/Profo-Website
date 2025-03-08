import React, { useState, useEffect, useRef } from 'react';

const EnhancedStickyAds = ({ ads }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0);
    const containerRef = useRef(null);
    const adsRef = useRef([]);

    // Initialize refs array for each ad
    useEffect(() => {
        adsRef.current = adsRef.current.slice(0, ads.length);
    }, [ads.length]);

    // Calculate heights and set up scroll listener
    useEffect(() => {
        const calculateHeights = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const parentHeight = container.parentElement.offsetHeight;
                setContainerHeight(parentHeight);
                setViewportHeight(window.innerHeight);
            }
        };

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Calculate initial heights
        calculateHeights();

        // Add event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', calculateHeights);

        // Clean up event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calculateHeights);
        };
    }, []);

    // Calculate which ad should be sticky based on scroll position
    const getActiveAdIndex = () => {
        if (containerHeight === 0) return 0;

        // Calculate section height for each ad
        const sectionHeight = containerHeight / ads.length;

        // Get the current section based on scroll position relative to the container
        const containerTop = containerRef.current?.offsetTop || 0;
        const relativeScroll = scrollPosition - containerTop;

        // Ensure we're within the container
        if (relativeScroll < 0) return 0;
        if (relativeScroll > containerHeight) return ads.length - 1;

        // Calculate which section we're in
        return Math.min(Math.floor(relativeScroll / sectionHeight), ads.length - 1);
    };

    const activeAdIndex = getActiveAdIndex();

    return (
        <div ref={containerRef} className="w-full h-full relative">
            {ads.map((ad, index) => {
                // Determine if this ad should be sticky
                const isActive = index === activeAdIndex;

                // Calculate top position for the ad when it's not active
                let topPosition = '0';
                if (index < activeAdIndex) {
                    // Position above the viewport
                    topPosition = '0';
                } else if (index > activeAdIndex) {
                    // Position below the viewport
                    topPosition = containerHeight ? `${containerHeight - (ads.length - index) * 250}px` : 'auto';
                }

                return (
                    <div
                        key={index}
                        ref={el => adsRef.current[index] = el}
                        className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-4 ${isActive ? 'sticky top-20 z-10' : 'absolute w-full'
                            }`}
                        style={{
                            top: !isActive ? topPosition : undefined
                        }}
                    >
                        <img
                            src={ad.src}
                            alt={ad.alt}
                            className="w-full h-auto"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default EnhancedStickyAds