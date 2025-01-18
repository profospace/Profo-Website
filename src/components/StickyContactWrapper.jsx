import React, { useState, useEffect, useRef } from 'react';
import BuildingViewer from './BuildingViewer';
import buildingConfig from '../files/building-config-6.json';

const StickyContactWrapper = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);
    const viewerRef = useRef(null);
    const contactCardRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: Array.from({ length: 41 }, (_, i) => i * 0.025) // Create thresholds from 0 to 1
        };

        const handleIntersection = (entries) => {
            const [entry] = entries;

            // Calculate visibility based on intersection ratio
            if (entry.intersectionRatio > 0.2) {
                // Start fading out when BuildingViewer becomes visible
                const newOpacity = Math.max(0, 1 - (entry.intersectionRatio - 0.2) * 1.25);
                setOpacity(newOpacity);
                setIsVisible(newOpacity > 0);
            } else {
                setOpacity(1);
                setIsVisible(true);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (viewerRef.current) {
            observer.observe(viewerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative">
            {/* BuildingViewer Reference */}
            <div ref={viewerRef} className="w-full">
                <BuildingViewer config={buildingConfig} />
            </div>

            {/* Sticky Contact Card */}
            <div
                ref={contactCardRef}
                className="transition-opacity duration-300"
                style={{
                    opacity: opacity,
                    visibility: isVisible ? 'visible' : 'hidden',
                    position: 'sticky',
                    top: '24px'
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default StickyContactWrapper;