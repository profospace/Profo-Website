// import React, { useState, useEffect } from 'react';
// import MapPage from './MapPage';
// import { getMapFeed } from '../redux/features/Map/mapSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import ListingPage from '../components/ListingPage';

// const MainPropertyPage = () => {
//     const dispatch = useDispatch();
//     const { properties, projects, isLoading } = useSelector(state => state.map);
//     const [view, setView] = useState('map'); // 'list' or 'map'
//     const [center, setCenter] = useState(null);
//     const [radius, setRadius] = useState(1);
//     // Get initial location
//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const currentLocation = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCenter(currentLocation);
//                 },
//                 (error) => {
//                     console.error("Error getting location:", error);
//                     // Default location
//                     setCenter({
//                         lat: 26.4735846,
//                         lng: 80.2855738
//                     });
//                 }
//             );
//         }
//     }, []);
//     // Fetch data when location or radius changes
//     useEffect(() => {
//         if (center) {
//             const coordinates = {
//                 latitude: center.lat,
//                 longitude: center.lng,
//                 radius: radius * 1000 // Convert to meters
//             };
//             dispatch(getMapFeed(coordinates));
//         }
//     }, [dispatch, radius, center]);
//     const handleViewChange = (newView) => {
//         setView(newView);
//     };
//     return (
//         <div className="min-h-screen bg-white">
//             {view === 'list' ? (
//                 <ListingPage
//                     properties={properties?.items || []}
//                     projects={projects?.items || []}
//                     isLoading={isLoading}
//                     onViewChange={handleViewChange}
//                 />
//             ) : (
//                 <MapPage
//                     onViewChange={handleViewChange}
//                     center={center}
//                     radius={radius}
//                     setRadius={setRadius}
//                     properties={properties?.items || []}
//                     projects={projects?.items || []}
//                     isLoading={isLoading}
//                 />
//             )}
//         </div>
//     );
// };
// export default MainPropertyPage;

import React, { useState, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import MapPage from './MapPage';
import { getMapFeed } from '../redux/features/Map/mapSlice';
import { useDispatch, useSelector } from 'react-redux';
import ListingPage from '../components/ListingPage';

const MainPropertyPage = () => {
    const dispatch = useDispatch();
    const { properties, projects, isLoading } = useSelector(state => state.map);
    const [view, setView] = useState('map'); // list / map view
    const [center, setCenter] = useState(null);
    const [radius, setRadius] = useState(1);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    console.log(projects)
    // Get initial location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setCenter(currentLocation);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setCenter({
                        lat: 26.4735846,
                        lng: 80.2855738
                    });
                }
            );
        }
    }, []);

    // Fetch data when location or radius changes
    useEffect(() => {
        if (center) {
            const coordinates = {
                latitude: center.lat,
                longitude: center.lng,
                radius: radius * 1000
            };
            dispatch(getMapFeed(coordinates));
        }
    }, [dispatch, radius, center]);

    const handleViewChange = (newView) => {
        setView(newView);
    };

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            onLoad={() => setIsScriptLoaded(true)}
        >
            <div className="min-h-screen bg-gray-100">
                {view === 'list' ? (
                    <ListingPage
                        properties={properties?.items || []}
                        projects={projects?.items || []}
                        isLoading={isLoading}
                        onViewChange={handleViewChange}
                    />
                ) : (
                    isScriptLoaded && (
                        <MapPage
                            onViewChange={handleViewChange}
                            center={center}
                            radius={radius}
                            setRadius={setRadius}
                            properties={properties?.items || []}
                            projects={projects?.items || []}
                            isLoading={isLoading}
                        />
                    )
                )}
            </div>
        </LoadScript>
    );
};

export default MainPropertyPage;