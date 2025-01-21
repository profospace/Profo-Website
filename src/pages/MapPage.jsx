// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getMapFeed } from '../redux/features/Map/mapSlice';
// // import { MapPin, Building, Home, Plus, Minus } from 'lucide-react';
// // import { PiOfficeChair } from 'react-icons/pi';
// // import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';

// // const MapPage = () => {
// //     const dispatch = useDispatch();
// //     const { properties, projects, buildings } = useSelector(state => state.map);

// //     const [radius, setRadius] = useState(1);
// //     const [map, setMap] = useState(null);
// //     const [center, setCenter] = useState({
// //         lat: 26.4735846,
// //         lng: 80.2855738
// //     });

// //     // Custom map style with emphasis on greenery
// //     const mapStyles = [
// //         {
// //             featureType: 'all',
// //             elementType: 'geometry',
// //             stylers: [{ saturation: -80 }]
// //         },
// //         {
// //             featureType: 'poi.park',
// //             elementType: 'geometry.fill',
// //             stylers: [
// //                 { color: '#8aba6b' },
// //                 { saturation: 40 },
// //                 { lightness: 20 }
// //             ]
// //         },
// //         {
// //             featureType: 'landscape.natural',
// //             elementType: 'geometry.fill',
// //             stylers: [
// //                 { color: '#c8e6c9' },
// //                 { saturation: 20 }
// //             ]
// //         },
// //         {
// //             featureType: 'water',
// //             elementType: 'geometry.fill',
// //             stylers: [{ color: '#a5d6f7' }]
// //         },
// //         {
// //             featureType: 'road',
// //             elementType: 'geometry.fill',
// //             stylers: [{ color: '#ffffff' }]
// //         }
// //     ];

// //     const mapContainerStyle = {
// //         width: '100%',
// //         height: 'calc(100vh - 140px)'
// //     };

// //     const options = {
// //         styles: mapStyles,
// //         disableDefaultUI: true,
// //         zoomControl: false,
// //         scrollwheel: true,
// //         streetViewControl: false,
// //         mapTypeControl: false
// //     };

// //     useEffect(() => {
// //         const coordinates = {
// //             latitude: center.lat,
// //             longitude: center.lng,
// //             radius: radius * 1000 // Convert to kilometers
// //         };
// //         dispatch(getMapFeed(coordinates));
// //     }, [dispatch, radius]);

// //     const handleZoomIn = () => {
// //         if (map) {
// //             map.setZoom(map.getZoom() + 1);
// //         }
// //     };

// //     const handleZoomOut = () => {
// //         if (map) {
// //             map.setZoom(map.getZoom() - 1);
// //         }
// //     };

// //     const handleRadiusChange = (e) => {
// //         const newRadius = parseInt(e.target.value);
// //         setRadius(newRadius);
// //     };

// //     const getMarkerIcon = (type) => {
// //         const iconConfig = {
// //             path: 'M12 0C7 0 3 4 3 9c0 5.2 8 13 8.8 13.7.1.1.2.2.4.2s.3-.1.4-.2C13.4 22 21 14.2 21 9c0-5-4-9-9-9z',
// //             fillColor: type?.toLowerCase() === 'apartment' ? '#3B82F6' :
// //                 type?.toLowerCase() === 'house' ? '#10B981' :
// //                     type?.toLowerCase() === 'office' ? '#8B5CF6' : '#EF4444',
// //             fillOpacity: 1,
// //             strokeWeight: 1,
// //             strokeColor: '#FFFFFF',
// //             scale: 1.5
// //         };
// //         return iconConfig;
// //     };

// //     return (
// //         <div className="w-full h-screen bg-gray-100 p-4">
// //             <div className="bg-white rounded-lg shadow-lg p-4 h-full relative">
// //                 <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
// //                     <GoogleMap
// //                         mapContainerStyle={mapContainerStyle}
// //                         center={center}
// //                         zoom={14}
// //                         options={options}
// //                         onLoad={map => setMap(map)}
// //                     >
// //                         {/* Radius Circle */}
// //                         <Circle
// //                             center={center}
// //                             radius={radius}
// //                             options={{
// //                                 fillColor: '#3B82F6',
// //                                 fillOpacity: 0.1,
// //                                 strokeColor: '#3B82F6',
// //                                 strokeOpacity: 0.8,
// //                                 strokeWeight: 2,
// //                             }}
// //                         />

// //                         {/* Property Markers */}
// //                         {properties?.items?.map((property) => (
// //                             <Marker
// //                                 key={property._id}
// //                                 position={{
// //                                     lat: property.location.coordinates[1],
// //                                     lng: property.location.coordinates[0]
// //                                 }}
// //                                 icon={getMarkerIcon(property.type_name)}
// //                                 title={property.post_title}
// //                             />
// //                         ))}

// //                         {/* Project Markers */}
// //                         {projects?.items?.map((project) => (
// //                             <Marker
// //                                 key={project._id}
// //                                 position={{
// //                                     lat: project.location.coordinates.coordinates[1],
// //                                     lng: project.location.coordinates.coordinates[0]
// //                                 }}
// //                                 icon={getMarkerIcon('project')}
// //                                 title={project.name}
// //                             />
// //                         ))}
// //                     </GoogleMap>
// //                 </LoadScript>

// //                 {/* Zoom Controls */}
// //                 <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg">
// //                     <button
// //                         onClick={handleZoomIn}
// //                         className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
// //                     >
// //                         <Plus size={20} />
// //                     </button>
// //                     <button
// //                         onClick={handleZoomOut}
// //                         className="p-2 hover:bg-gray-100 rounded-b-lg"
// //                     >
// //                         <Minus size={20} />
// //                     </button>
// //                 </div>

// //                 {/* Radius Control */}
// //                 {/* <div className="mt-4 flex items-center gap-4">
// //                     <label className="text-sm font-medium">Radius: {radius}m</label>
// //                     <input
// //                         type="range"
// //                         min="100"
// //                         max="5000"
// //                         step="100"
// //                         value={radius}
// //                         onChange={handleRadiusChange}
// //                         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
// //                     />
// //                 </div> */}

// //                 {/* Zoom and Radius Controls */}
// //                 <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg flex flex-col">
// //                     {/* Radius Decrement Button */}
// //                     <button
// //                         onClick={() => setRadius(prev => Math.max(prev - 1, 1))} // Minimum radius of 1 km
// //                         className="p-2 hover:bg-gray-100 border-b"
// //                     >
// //                         <Minus size={20} />
// //                     </button>

// //                     {/* Radius Display */}
// //                     <div className="p-2 text-center text-sm font-medium bg-gray-100">
// //                         {radius} km
// //                     </div>

// //                     {/* Radius Increment Button */}
// //                     <button
// //                         onClick={() => setRadius(prev => prev + 1)} // Increment by 1 km
// //                         className="p-2 hover:bg-gray-100 rounded-b-lg"
// //                     >
// //                         <Plus size={20} />
// //                     </button>
// //                 </div>


// //                 {/* Legend */}
// //                 <div className="absolute bottom-24 right-12 bg-white p-2 rounded-lg shadow-lg">
// //                     <div className="text-sm font-medium mb-2">Legend</div>
// //                     <div className="flex flex-col gap-2">
// //                         <div className="flex items-center gap-2">
// //                             <Building className="text-blue-500" size={20} />
// //                             <span className="text-sm">Apartment</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Home className="text-green-500" size={20} />
// //                             <span className="text-sm">House</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <PiOfficeChair className="text-purple-500" size={20} />
// //                             <span className="text-sm">Office</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <MapPin className="text-red-500" size={20} />
// //                             <span className="text-sm">Project</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default MapPage;

// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getMapFeed } from '../redux/features/Map/mapSlice';
// // import { MapPin, Building, Home, Plus, Minus, Loader, Crosshair } from 'lucide-react';
// // import { PiOfficeChair } from 'react-icons/pi';
// // import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';

// // const MapPage = () => {
// //     const dispatch = useDispatch();
// //     const { properties, projects, buildings, isLoading } = useSelector(state => state.map);

// //     console.log("properties", properties)
// //     console.log("projects", projects)
// //     const [radius, setRadius] = useState(1);
// //     const [map, setMap] = useState(null);
// //     const [center, setCenter] = useState(null);
// //     const [locationError, setLocationError] = useState(null);
// //     const [isLocating, setIsLocating] = useState(true);

// //     // Get current location on component mount
// //     useEffect(() => {
// //         getCurrentLocation();
// //     }, []);

// //     const getCurrentLocation = () => {
// //         setIsLocating(true);
// //         if (navigator.geolocation) {
// //             navigator.geolocation.getCurrentPosition(
// //                 (position) => {
// //                     const currentLocation = {
// //                         lat: position.coords.latitude,
// //                         lng: position.coords.longitude
// //                     };
// //                     setCenter(currentLocation);
// //                     setLocationError(null);
// //                     setIsLocating(false);
// //                 },
// //                 (error) => {
// //                     console.error("Error getting location:", error);
// //                     setLocationError("Unable to get your location. Using default location.");
// //                     setCenter({
// //                         lat: 26.4735846,
// //                         lng: 80.2855738
// //                     });
// //                     setIsLocating(false);
// //                 },
// //                 {
// //                     enableHighAccuracy: true,
// //                     timeout: 5000,
// //                     maximumAge: 0
// //                 }
// //             );
// //         } else {
// //             setLocationError("Geolocation is not supported by your browser");
// //             setCenter({
// //                 lat: 26.4735846,
// //                 lng: 80.2855738
// //             });
// //             setIsLocating(false);
// //         }
// //     };

// //     // Fetch map data when center or radius changes
// //     useEffect(() => {
// //         if (center) {
// //             const coordinates = {
// //                 latitude: center.lat,
// //                 longitude: center.lng,
// //                 radius: radius * 1000 // Convert to meters
// //             };
// //             dispatch(getMapFeed(coordinates));
// //         }
// //     }, [dispatch, radius, center]);

// //     const mapStyles = [
// //         {
// //             featureType: 'all',
// //             elementType: 'geometry',
// //             stylers: [{ saturation: -80 }]
// //         },
// //         {
// //             featureType: 'poi.park',
// //             elementType: 'geometry.fill',
// //             stylers: [
// //                 { color: '#8aba6b' },
// //                 { saturation: 40 },
// //                 { lightness: 20 }
// //             ]
// //         },
// //         {
// //             featureType: 'landscape.natural',
// //             elementType: 'geometry.fill',
// //             stylers: [
// //                 { color: '#c8e6c9' },
// //                 { saturation: 20 }
// //             ]
// //         },
// //         {
// //             featureType: 'water',
// //             elementType: 'geometry.fill',
// //             stylers: [{ color: '#a5d6f7' }]
// //         },
// //         {
// //             featureType: 'road',
// //             elementType: 'geometry.fill',
// //             stylers: [{ color: '#ffffff' }]
// //         }
// //     ];

// //     const mapContainerStyle = {
// //         width: '100%',
// //         height: 'calc(100vh - 140px)'
// //     };

// //     const options = {
// //         styles: mapStyles,
// //         disableDefaultUI: true,
// //         zoomControl: false,
// //         scrollwheel: true,
// //         streetViewControl: false,
// //         mapTypeControl: false
// //     };

// //     const handleZoomIn = () => {
// //         if (map) {
// //             map.setZoom(map.getZoom() + 1);
// //         }
// //     };

// //     const handleZoomOut = () => {
// //         if (map) {
// //             map.setZoom(map.getZoom() - 1);
// //         }
// //     };

// //     const handleRadiusChange = (increment) => {
// //         setRadius(prev => {
// //             const newRadius = increment ? prev + 1 : Math.max(prev - 1, 1);
// //             return newRadius;
// //         });
// //     };

// //     const getCurrentLocationMarker = () => ({
// //         path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
// //         fillColor: '#3B82F6',
// //         fillOpacity: 1,
// //         strokeColor: '#FFFFFF',
// //         strokeWeight: 2,
// //         scale: 1.5
// //     });

// //     const getMarkerIcon = (type) => ({
// //         path: 'M12 0C7 0 3 4 3 9c0 5.2 8 13 8.8 13.7.1.1.2.2.4.2s.3-.1.4-.2C13.4 22 21 14.2 21 9c0-5-4-9-9-9z',
// //         fillColor: type?.toLowerCase() === 'apartment' ? '#3B82F6' :
// //             type?.toLowerCase() === 'house' ? '#10B981' :
// //                 type?.toLowerCase() === 'office' ? '#8B5CF6' : '#EF4444',
// //         fillOpacity: 1,
// //         strokeWeight: 1,
// //         strokeColor: '#FFFFFF',
// //         scale: 1.5
// //     });

// //     // Handle recenter map to current location
// //     const handleRecenterMap = () => {
// //         getCurrentLocation();
// //     };

// //     if (isLocating) {
// //         return (
// //             <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
// //                 <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
// //                     <Loader className="animate-spin" size={24} />
// //                     <span className="font-medium">Getting your location...</span>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="w-full h-screen bg-gray-100 p-4">
// //             <div className="bg-white rounded-lg shadow-lg p-4 h-full relative">
// //                 {/* Loading Overlay */}
// //                 {isLoading && (
// //                     <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50 rounded-lg">
// //                         <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
// //                             <Loader className="animate-spin" size={24} />
// //                             <span className="font-medium">Loading map data...</span>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Location Error Message */}
// //                 {locationError && (
// //                     <div className="absolute top-4 left-4 z-50 bg-red-50 text-red-600 px-4 py-2 rounded-lg shadow-lg">
// //                         {locationError}
// //                     </div>
// //                 )}

// //                 <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
// //                     <GoogleMap
// //                         mapContainerStyle={mapContainerStyle}
// //                         center={center}
// //                         zoom={14}
// //                         options={options}
// //                         onLoad={map => setMap(map)}
// //                     >
// //                         {/* Current Location Marker */}
// //                         {center && (
// //                             <Marker
// //                                 position={center}
// //                                 icon={getCurrentLocationMarker()}
// //                             />
// //                         )}

// //                         {/* Radius Circle */}
// //                         {center && (
// //                             <Circle
// //                                 center={center}
// //                                 radius={radius * 1000} // Convert to meters
// //                                 options={{
// //                                     fillColor: '#3B82F6',
// //                                     fillOpacity: 0.1,
// //                                     strokeColor: '#3B82F6',
// //                                     strokeOpacity: 0.8,
// //                                     strokeWeight: 2,
// //                                 }}
// //                             />
// //                         )}

// //                         {/* Property Markers */}
// //                         {properties?.items?.map((property) => (
// //                             <Marker
// //                                 key={property._id}
// //                                 position={{
// //                                     lat: property.location.coordinates[1],
// //                                     lng: property.location.coordinates[0]
// //                                 }}
// //                                 icon={getMarkerIcon(property.type_name)}
// //                                 title={property.post_title}
// //                             />
// //                         ))}

// //                         {/* Project Markers */}
// //                         {projects?.items?.map((project) => (
// //                             <Marker
// //                                 key={project._id}
// //                                 position={{
// //                                     lat: project.location.coordinates.coordinates[1],
// //                                     lng: project.location.coordinates.coordinates[0]
// //                                 }}
// //                                 icon={getMarkerIcon('project')}
// //                                 title={project.name}
// //                             />
// //                         ))}
// //                     </GoogleMap>
// //                 </LoadScript>

// //                 {/* Recenter Button */}
// //                 <button
// //                     onClick={handleRecenterMap}
// //                     className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100"
// //                     disabled={isLoading}
// //                 >
// //                     <Crosshair size={20} />
// //                 </button>

// //                 {/* Zoom Controls */}
// //                 <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg">
// //                     <button
// //                         onClick={handleZoomIn}
// //                         className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
// //                         disabled={isLoading}
// //                     >
// //                         <Plus size={20} />
// //                     </button>
// //                     <button
// //                         onClick={handleZoomOut}
// //                         className="p-2 hover:bg-gray-100 rounded-b-lg"
// //                         disabled={isLoading}
// //                     >
// //                         <Minus size={20} />
// //                     </button>
// //                 </div>

// //                 {/* Radius Controls */}
// //                 <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg flex flex-col">
// //                     <button
// //                         onClick={() => handleRadiusChange(false)}
// //                         className="p-2 hover:bg-gray-100 border-b"
// //                         disabled={isLoading || radius <= 1}
// //                     >
// //                         <Minus size={20} />
// //                     </button>

// //                     <div className="p-2 text-center text-sm font-medium bg-gray-100">
// //                         {radius} km
// //                     </div>

// //                     <button
// //                         onClick={() => handleRadiusChange(true)}
// //                         className="p-2 hover:bg-gray-100"
// //                         disabled={isLoading}
// //                     >
// //                         <Plus size={20} />
// //                     </button>
// //                 </div>

// //                 {/* Legend */}
// //                 <div className="absolute bottom-24 right-12 bg-white p-2 rounded-lg shadow-lg">
// //                     <div className="text-sm font-medium mb-2">Legend</div>
// //                     <div className="flex flex-col gap-2">
// //                         <div className="flex items-center gap-2">
// //                             <Building className="text-blue-500" size={20} />
// //                             <span className="text-sm">Apartment</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Home className="text-green-500" size={20} />
// //                             <span className="text-sm">House</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <PiOfficeChair className="text-purple-500" size={20} />
// //                             <span className="text-sm">Office</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <MapPin className="text-red-500" size={20} />
// //                             <span className="text-sm">Project</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="absolute top-12 left-12 bg-white p-2 rounded-lg shadow-lg">
// //                         <button  >Show All </button>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default MapPage;

// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getMapFeed } from '../redux/features/Map/mapSlice';
// // import { MapPin, Building, Home, Plus, Minus, Loader, Crosshair } from 'lucide-react';
// // import { PiOfficeChair } from 'react-icons/pi';
// // import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';
// // import PropertyPanel from '../components/PropertyPanel';

// // const MapPage = () => {
// //     const dispatch = useDispatch();
// //     const { properties, projects, buildings, isLoading } = useSelector(state => state.map);
// //     const [radius, setRadius] = useState(1);
// //     const [map, setMap] = useState(null);
// //     const [center, setCenter] = useState(null);
// //     const [locationError, setLocationError] = useState(null);
// //     const [isLocating, setIsLocating] = useState(true);
// //     const [selectedItem, setSelectedItem] = useState(null);
// //     const [selectedItemType, setSelectedItemType] = useState(null);
// //     useEffect(() => {
// //         getCurrentLocation();
// //     }, []);
// //     // Map configuration
// //     const mapStyles = [
// //         {
// //             featureType: 'all',
// //             elementType: 'geometry',
// //             stylers: [{ saturation: -80 }]
// //         },
// //         {
// //             featureType: 'poi.park',
// //             elementType: 'geometry.fill',
// //             stylers: [
// //                 { color: '#8aba6b' },
// //                 { saturation: 40 },
// //                 { lightness: 20 }
// //             ]
// //         },
// //         {
// //             featureType: 'water',
// //             elementType: 'geometry.fill',
// //             stylers: [{ color: '#a5d6f7' }]
// //         },
// //         {
// //             featureType: 'road',
// //             elementType: 'geometry.fill',
// //             stylers: [{ color: '#ffffff' }]
// //         }
// //     ];
// //     const mapContainerStyle = {
// //         width: '100%',
// //         height: 'calc(100vh - 140px)'
// //     };
// //     const options = {
// //         styles: mapStyles,
// //         disableDefaultUI: true,
// //         zoomControl: false,
// //         scrollwheel: true,
// //         streetViewControl: false,
// //         mapTypeControl: false
// //     };
// //     // Get initial location
// //     const getCurrentLocation = () => {
// //         setIsLocating(true);
// //         if (navigator.geolocation) {
// //             navigator.geolocation.getCurrentPosition(
// //                 (position) => {
// //                     setCenter({
// //                         lat: position.coords.latitude,
// //                         lng: position.coords.longitude
// //                     });
// //                     setIsLocating(false);
// //                 },
// //                 (error) => {
// //                     console.error("Error getting location:", error);
// //                     setCenter({ lat: 26.4735846, lng: 80.2855738 });
// //                     setLocationError("Unable to get your location. Using default location.");
// //                     setIsLocating(false);
// //                 }
// //             );
// //         } else {
// //             setCenter({ lat: 26.4735846, lng: 80.2855738 });
// //             setLocationError("Geolocation is not supported by your browser");
// //             setIsLocating(false);
// //         }
// //     };
// //     // Fetch data when location or radius changes
// //     useEffect(() => {
// //         if (center) {
// //             dispatch(getMapFeed({
// //                 latitude: center.lat,
// //                 longitude: center.lng,
// //                 radius: radius * 1000
// //             }));
// //         }
// //     }, [dispatch, radius, center]);
// //     const getMarkerIcon = (type) => ({
// //         path: 'M12 0C7 0 3 4 3 9c0 5.2 8 13 8.8 13.7.1.1.2.2.4.2s.3-.1.4-.2C13.4 22 21 14.2 21 9c0-5-4-9-9-9z',
// //         fillColor: type?.toLowerCase() === 'apartment' ? '#3B82F6' :
// //             type?.toLowerCase() === 'house' ? '#10B981' :
// //                 type?.toLowerCase() === 'office' ? '#8B5CF6' : '#EF4444',
// //         fillOpacity: 1,
// //         strokeWeight: 1,
// //         strokeColor: '#FFFFFF',
// //         scale: 1.5
// //     });
// //     if (isLocating) {
// //         return (
// //             <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
// //                 <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
// //                     <Loader className="animate-spin" size={24} />
// //                     <span className="font-medium">Getting your location...</span>
// //                 </div>
// //             </div>
// //         );
// //     }
// //     return (
// //         <div className="w-full h-screen">
// //             <div className="bg-white rounded-lg shadow-lg p-4 h-full relative">
// //                 {isLoading && (
// //                     <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50 rounded-lg">
// //                         <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
// //                             <Loader className="animate-spin" size={24} />
// //                             <span className="font-medium">Loading map data...</span>
// //                         </div>
// //                     </div>
// //                 )}
// //                 <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
// //                     <GoogleMap
// //                         mapContainerStyle={mapContainerStyle}
// //                         center={center}
// //                         zoom={14}
// //                         options={options}
// //                         onLoad={map => setMap(map)}
// //                     >
// //                         {/* Current Location Marker */}
// //                         <Marker
// //                             position={center}
// //                             icon={{
// //                                 path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
// //                                 fillColor: '#3B82F6',
// //                                 fillOpacity: 1,
// //                                 strokeColor: '#FFFFFF',
// //                                 strokeWeight: 2,
// //                                 scale: 1.5
// //                             }}
// //                         />
// //                         {/* Search Radius Circle */}
// //                         <Circle
// //                             center={center}
// //                             radius={radius * 1000}
// //                             options={{
// //                                 fillColor: '#3B82F6',
// //                                 fillOpacity: 0.1,
// //                                 strokeColor: '#3B82F6',
// //                                 strokeOpacity: 0.8,
// //                                 strokeWeight: 2,
// //                             }}
// //                         />
// //                         {/* Property Markers */}
// //                         {properties?.items?.map((property) => (
// //                             <Marker
// //                                 key={property._id}
// //                                 position={{
// //                                     lat: property.location.coordinates[1],
// //                                     lng: property.location.coordinates[0]
// //                                 }}
// //                                 icon={getMarkerIcon(property.type_name)}
// //                                 onClick={() => {
// //                                     setSelectedItem(property);
// //                                     setSelectedItemType('property');
// //                                 }}
// //                             />
// //                         ))}
// //                         {/* Project Markers */}
// //                         {projects?.items?.map((project) => (
// //                             <Marker
// //                                 key={project._id}
// //                                 position={{
// //                                     lat: project.location.coordinates.coordinates[1],
// //                                     lng: project.location.coordinates.coordinates[0]
// //                                 }}
// //                                 icon={getMarkerIcon('project')}
// //                                 onClick={() => {
// //                                     setSelectedItem(project);
// //                                     setSelectedItemType('project');
// //                                 }}
// //                             />
// //                         ))}
// //                     </GoogleMap>
// //                 </LoadScript>
// //                 {/* Controls */}
// //                 <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg">
// //                     <button
// //                         onClick={() => map?.setZoom((map.getZoom() || 14) + 1)}
// //                         className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
// //                     >
// //                         <Plus size={20} />
// //                     </button>
// //                     <button
// //                         onClick={() => map?.setZoom((map.getZoom() || 14) - 1)}
// //                         className="p-2 hover:bg-gray-100 rounded-b-lg"
// //                     >
// //                         <Minus size={20} />
// //                     </button>
// //                 </div>
// //                 {/* Radius Controls */}
// //                 <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg">
// //                     <button
// //                         onClick={() => setRadius(r => Math.max(1, r - 1))}
// //                         className="p-2 hover:bg-gray-100 border-b"
// //                         disabled={radius <= 1}
// //                     >
// //                         <Minus size={20} />
// //                     </button>
// //                     <div className="p-2 text-center font-medium">
// //                         {radius} km
// //                     </div>
// //                     <button
// //                         onClick={() => setRadius(r => r + 1)}
// //                         className="p-2 hover:bg-gray-100"
// //                     >
// //                         <Plus size={20} />
// //                     </button>
// //                 </div>
// //                 {/* Property Details Panel */}
// //                 {selectedItem && (
// //                     <PropertyPanel
// //                         data={selectedItem}
// //                         type={selectedItemType}
// //                         onClose={() => {
// //                             setSelectedItem(null);
// //                             setSelectedItemType(null);
// //                         }}
// //                     />
// //                 )}
// //                 {/* Legend */}
// //                 <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
// //                     <div className="text-sm font-medium mb-2">Legend</div>
// //                     <div className="space-y-2">
// //                         <div className="flex items-center gap-2">
// //                             <Building className="text-blue-500" size={20} />
// //                             <span className="text-sm">Apartment</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Home className="text-green-500" size={20} />
// //                             <span className="text-sm">House</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <PiOfficeChair className="text-purple-500" size={20} />
// //                             <span className="text-sm">Office</span>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <MapPin className="text-red-500" size={20} />
// //                             <span className="text-sm">Project</span>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* show all */}
// //                 <div className="absolute top-8 left-8 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
// //                     <button>Show All</button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// // export default MapPage;


// import React, { useState } from 'react';
// import { MapPin, Building, Home, Plus, Minus, Loader, Crosshair, List } from 'lucide-react';
// import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';
// import PropertyPanel from '../components/PropertyPanel';

// const MapPage = ({
//     onViewChange,
//     center,
//     radius,
//     setRadius,
//     properties = [],
//     projects = [],
//     isLoading
// }) => {
//     const [map, setMap] = useState(null);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [selectedItemType, setSelectedItemType] = useState(null);

//     const mapStyles = [
//         {
//             featureType: 'all',
//             elementType: 'geometry',
//             stylers: [{ saturation: -80 }]
//         },
//         {
//             featureType: 'poi.park',
//             elementType: 'geometry.fill',
//             stylers: [
//                 { color: '#8aba6b' },
//                 { saturation: 40 },
//                 { lightness: 20 }
//             ]
//         },
//         {
//             featureType: 'water',
//             elementType: 'geometry.fill',
//             stylers: [{ color: '#a5d6f7' }]
//         },
//         {
//             featureType: 'road',
//             elementType: 'geometry.fill',
//             stylers: [{ color: '#ffffff' }]
//         }
//     ];

//     const mapContainerStyle = {
//         width: '100%',
//         height: 'calc(100vh - 64px)'
//     };

//     const options = {
//         styles: mapStyles,
//         disableDefaultUI: true,
//         zoomControl: false,
//         scrollwheel: true,
//         streetViewControl: false,
//         mapTypeControl: false
//     };

//     const getMarkerIcon = (type) => ({
//         path: 'M12 0C7 0 3 4 3 9c0 5.2 8 13 8.8 13.7.1.1.2.2.4.2s.3-.1.4-.2C13.4 22 21 14.2 21 9c0-5-4-9-9-9z',
//         fillColor: type?.toLowerCase() === 'apartment' ? '#3B82F6' :
//             type?.toLowerCase() === 'house' ? '#10B981' :
//                 type?.toLowerCase() === 'office' ? '#8B5CF6' : '#EF4444',
//         fillOpacity: 1,
//         strokeWeight: 1,
//         strokeColor: '#FFFFFF',
//         scale: 1.5
//     });

//     if (!center) {
//         return (
//             <div className="w-full h-screen bg-white flex items-center justify-center">
//                 <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
//                     <Loader className="animate-spin" size={24} />
//                     <span className="font-medium">Getting location...</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="w-full h-screen bg-white">
//             {/* Header */}
//             <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
//                 <h1 className="text-xl font-semibold">Map View</h1>
//                 <button
//                     onClick={() => onViewChange('list')}
//                     className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
//                 >
//                     <List size={20} />
//                     <span>List View</span>
//                 </button>
//             </div>

//             <div className="relative">
//                 {/* Loading Overlay */}
//                 {isLoading && (
//                     <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
//                         <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
//                             <Loader className="animate-spin" size={24} />
//                             <span className="font-medium">Loading map data...</span>
//                         </div>
//                     </div>
//                 )}

//                 <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
//                     <GoogleMap
//                         mapContainerStyle={mapContainerStyle}
//                         center={center}
//                         zoom={14}
//                         options={options}
//                         onLoad={map => setMap(map)}
//                     >
//                         {/* Current Location Marker */}
//                         <Marker
//                             position={center}
//                             icon={{
//                                 path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
//                                 fillColor: '#3B82F6',
//                                 fillOpacity: 1,
//                                 strokeColor: '#FFFFFF',
//                                 strokeWeight: 2,
//                                 scale: 1.5
//                             }}
//                         />

//                         {/* Search Radius Circle */}
//                         <Circle
//                             center={center}
//                             radius={radius * 1000}
//                             options={{
//                                 fillColor: '#3B82F6',
//                                 fillOpacity: 0.1,
//                                 strokeColor: '#3B82F6',
//                                 strokeOpacity: 0.8,
//                                 strokeWeight: 2,
//                             }}
//                         />

//                         {/* Property Markers */}
//                         {properties.map((property) => (
//                             <Marker
//                                 key={property._id}
//                                 position={{
//                                     lat: property.location.coordinates[1],
//                                     lng: property.location.coordinates[0]
//                                 }}
//                                 icon={getMarkerIcon(property.type_name)}
//                                 onClick={() => {
//                                     setSelectedItem(property);
//                                     setSelectedItemType('property');
//                                 }}
//                             />
//                         ))}

//                         {/* Project Markers */}
//                         {projects.map((project) => (
//                             <Marker
//                                 key={project._id}
//                                 position={{
//                                     lat: project.location.coordinates.coordinates[1],
//                                     lng: project.location.coordinates.coordinates[0]
//                                 }}
//                                 icon={getMarkerIcon('project')}
//                                 onClick={() => {
//                                     setSelectedItem(project);
//                                     setSelectedItemType('project');
//                                 }}
//                             />
//                         ))}
//                     </GoogleMap>
//                 </LoadScript>

//                 {/* Controls */}
//                 <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={() => map?.setZoom((map.getZoom() || 14) + 1)}
//                         className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
//                     >
//                         <Plus size={20} />
//                     </button>
//                     <button
//                         onClick={() => map?.setZoom((map.getZoom() || 14) - 1)}
//                         className="p-2 hover:bg-gray-100 rounded-b-lg"
//                     >
//                         <Minus size={20} />
//                     </button>
//                 </div>

//                 {/* Radius Controls */}
//                 <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={() => setRadius(r => Math.max(1, r - 1))}
//                         className="p-2 hover:bg-gray-100 border-b"
//                         disabled={radius <= 1}
//                     >
//                         <Minus size={20} />
//                     </button>
//                     <div className="p-2 text-center font-medium">
//                         {radius} km
//                     </div>
//                     <button
//                         onClick={() => setRadius(r => r + 1)}
//                         className="p-2 hover:bg-gray-100"
//                     >
//                         <Plus size={20} />
//                     </button>
//                 </div>

//                 {/* Property Details Panel */}
//                 {selectedItem && (
//                     <PropertyPanel
//                         data={selectedItem}
//                         type={selectedItemType}
//                         onClose={() => {
//                             setSelectedItem(null);
//                             setSelectedItemType(null);
//                         }}
//                     />
//                 )}

//                 {/* Legend */}
//                 <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//                     <div className="text-sm font-medium mb-2">Legend</div>
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-2">
//                             <Building className="text-blue-500" size={20} />
//                             <span className="text-sm">Apartment</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Home className="text-green-500" size={20} />
//                             <span className="text-sm">House</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Building className="text-purple-500" size={20} />
//                             <span className="text-sm">Office</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <MapPin className="text-red-500" size={20} />
//                             <span className="text-sm">Project</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MapPage;

// import React, { useState } from 'react';
// import { MapPin, Building, Home, Plus, Minus, Loader, Crosshair, List } from 'lucide-react';
// import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
// import PropertyPanel from '../components/PropertyPanel';
// const MapPage = ({
//     onViewChange,
//     center,
//     radius,
//     setRadius,
//     properties = [],
//     projects = [],
//     isLoading
// }) => {
//     const [map, setMap] = useState(null);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [selectedItemType, setSelectedItemType] = useState(null);
//     const mapStyles = [
//         {
//             featureType: 'all',
//             elementType: 'geometry',
//             stylers: [{ saturation: -80 }]
//         },
//         {
//             featureType: 'poi.park',
//             elementType: 'geometry.fill',
//             stylers: [
//                 { color: '#8aba6b' },
//                 { saturation: 40 },
//                 { lightness: 20 }
//             ]
//         },
//         {
//             featureType: 'water',
//             elementType: 'geometry.fill',
//             stylers: [{ color: '#a5d6f7' }]
//         },
//         {
//             featureType: 'road',
//             elementType: 'geometry.fill',
//             stylers: [{ color: '#ffffff' }]
//         }
//     ];
//     const mapContainerStyle = {
//         width: '100%',
//         height: 'calc(100vh - 64px)'
//     };
//     const options = {
//         styles: mapStyles,
//         disableDefaultUI: true,
//         zoomControl: false,
//         scrollwheel: true,
//         streetViewControl: false,
//         mapTypeControl: false
//     };
//     const getMarkerIcon = (type) => ({
//         path: 'M12 0C7 0 3 4 3 9c0 5.2 8 13 8.8 13.7.1.1.2.2.4.2s.3-.1.4-.2C13.4 22 21 14.2 21 9c0-5-4-9-9-9z',
//         fillColor: type?.toLowerCase() === 'apartment' ? '#3B82F6' :
//             type?.toLowerCase() === 'house' ? '#10B981' :
//                 type?.toLowerCase() === 'office' ? '#8B5CF6' : '#EF4444',
//         fillOpacity: 1,
//         strokeWeight: 1,
//         strokeColor: '#FFFFFF',
//         scale: 1.5
//     });
//     if (!center) {
//         return (
//             <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
//                 <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
//                     <Loader className="animate-spin" size={24} />
//                     <span className="font-medium">Getting location...</span>
//                 </div>
//             </div>
//         );
//     }
//     return (
//         <div className="w-full h-screen bg-gray-100">
//             {/* Header */}
//             <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
//                 <h1 className="text-xl font-semibold">Map View</h1>
//                 <button
//                     onClick={() => onViewChange('list')}
//                     className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
//                 >
//                     <List size={20} />
//                     <span>List View</span>
//                 </button>
//             </div>
//             <div className="relative">
//                 {/* Loading Overlay */}
//                 {isLoading && (
//                     <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
//                         <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
//                             <Loader className="animate-spin" size={24} />
//                             <span className="font-medium">Loading map data...</span>
//                         </div>
//                     </div>
//                 )}
//                 <GoogleMap
//                     mapContainerStyle={mapContainerStyle}
//                     center={center}
//                     zoom={14}
//                     options={options}
//                     onLoad={map => setMap(map)}
//                 >
//                     {/* Current Location Marker */}
//                     <Marker
//                         position={center}
//                         icon={{
//                             path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
//                             fillColor: '#3B82F6',
//                             fillOpacity: 1,
//                             strokeColor: '#FFFFFF',
//                             strokeWeight: 2,
//                             scale: 1.5
//                         }}
//                     />
//                     {/* Search Radius Circle */}
//                     <Circle
//                         center={center}
//                         radius={radius * 1000}
//                         options={{
//                             fillColor: '#3B82F6',
//                             fillOpacity: 0.1,
//                             strokeColor: '#3B82F6',
//                             strokeOpacity: 0.8,
//                             strokeWeight: 2,
//                         }}
//                     />
//                     {/* Property Markers */}
//                     {properties.map((property) => (
//                         <Marker
//                             key={property._id}
//                             position={{
//                                 lat: property.location.coordinates[1],
//                                 lng: property.location.coordinates[0]
//                             }}
//                             icon={getMarkerIcon(property.type_name)}
//                             onClick={() => {
//                                 setSelectedItem(property);
//                                 setSelectedItemType('property');
//                             }}
//                         />
//                     ))}
//                     {/* Project Markers */}
//                     {projects.map((project) => (
//                         <Marker
//                             key={project._id}
//                             position={{
//                                 lat: project.location.coordinates.coordinates[1],
//                                 lng: project.location.coordinates.coordinates[0]
//                             }}
//                             icon={getMarkerIcon('project')}
//                             onClick={() => {
//                                 setSelectedItem(project);
//                                 setSelectedItemType('project');
//                             }}
//                         />
//                     ))}
//                 </GoogleMap>
//                 {/* Controls */}
//                 <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={() => map?.setZoom((map.getZoom() || 14) + 1)}
//                         className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
//                     >
//                         <Plus size={20} />
//                     </button>
//                     <button
//                         onClick={() => map?.setZoom((map.getZoom() || 14) - 1)}
//                         className="p-2 hover:bg-gray-100 rounded-b-lg"
//                     >
//                         <Minus size={20} />
//                     </button>
//                 </div>
//                 {/* Radius Controls */}
//                 <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={() => setRadius(r => Math.max(1, r - 1))}
//                         className="p-2 hover:bg-gray-100 border-b"
//                         disabled={radius <= 1}
//                     >
//                         <Minus size={20} />
//                     </button>
//                     <div className="p-2 text-center font-medium">
//                         {radius} km
//                     </div>
//                     <button
//                         onClick={() => setRadius(r => r + 1)}
//                         className="p-2 hover:bg-gray-100"
//                     >
//                         <Plus size={20} />
//                     </button>
//                 </div>
//                 {/* Property Details Panel */}
//                 {selectedItem && (
//                     <PropertyPanel
//                         data={selectedItem}
//                         type={selectedItemType}
//                         onClose={() => {
//                             setSelectedItem(null);
//                             setSelectedItemType(null);
//                         }}
//                     />
//                 )}
//                 {/* Legend */}
//                 <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//                     <div className="text-sm font-medium mb-2">Legend</div>
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-2">
//                             <Building className="text-blue-500" size={20} />
//                             <span className="text-sm">Apartment</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Home className="text-green-500" size={20} />
//                             <span className="text-sm">House</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Building className="text-purple-500" size={20} />
//                             <span className="text-sm">Office</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <MapPin className="text-red-500" size={20} />
//                             <span className="text-sm">Project</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default MapPage;


// import React, { useEffect, useRef, useState } from 'react';
// import {
//     MapPin,
//     Building,
//     Home,
//     Plus,
//     Minus,
//     Loader,
//     List,
//     Search,
//     X,
//     LocateFixed
// } from 'lucide-react';
// import PropertyPanel from '../components/PropertyPanel';
// const MapPage = ({
//     onViewChange,
//     center,
//     setCenter,
//     radius,
//     setRadius,
//     properties = [],
//     projects = [],
//     buildings = [],
//     isLoading
// }) => {
//     const mapRef = useRef(null);
//     const mapInstanceRef = useRef(null);
//     const markersRef = useRef([]);
//     const circleRef = useRef(null);

//     const [searchQuery, setSearchQuery] = useState('');
//     const [isSearching, setIsSearching] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [selectedItemType, setSelectedItemType] = useState(null);
//     // Initialize map
//     useEffect(() => {
//         if (!mapRef.current || mapInstanceRef.current) return;
//         const mapOptions = {
//             center: center,
//             zoom: 14,
//             styles: [
//                 {
//                     featureType: 'all',
//                     elementType: 'geometry',
//                     stylers: [{ saturation: -80 }]
//                 },
//                 {
//                     featureType: 'poi.park',
//                     elementType: 'geometry.fill',
//                     stylers: [
//                         { color: '#8aba6b' },
//                         { saturation: 40 },
//                         { lightness: 20 }
//                     ]
//                 },
//                 {
//                     featureType: 'water',
//                     elementType: 'geometry.fill',
//                     stylers: [{ color: '#a5d6f7' }]
//                 },
//                 {
//                     featureType: 'road',
//                     elementType: 'geometry.fill',
//                     stylers: [{ color: '#ffffff' }]
//                 }
//             ],
//             disableDefaultUI: true,
//             zoomControl: false,
//             streetViewControl: false,
//             mapTypeControl: false
//         };
//         mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);
//     }, [center]);

//     // Update markers when properties or projects change
//     useEffect(() => {
//         if (!mapInstanceRef.current) return;
//         // Clear existing markers
//         markersRef.current.forEach(marker => marker.setMap(null));
//         markersRef.current = [];
//         const createMarker = (item, type) => {
//             console.log(item)
//             const position = type === 'property'
//                 ? { lat: item?.location?.coordinates?.[1], lng: item?.location?.coordinates?.[0] }
//                 : { lat: item?.location?.coordinates?.coordinates?.[1], lng: item?.location?.coordinates?.coordinates?.[0] };
//             const markerColor = type === 'property'
//                 ? item?.type_name?.toLowerCase() === 'apartment' ? '#3B82F6'
//                     : item?.type_name?.toLowerCase() === 'house' ? '#10B981'
//                         : '#8B5CF6'
//                 : '#EF4444';
//             const marker = new google.maps.Marker({
//                 position,
//                 map: mapInstanceRef.current,
//                 icon: {
//                     path: 'M12 0C7 0 3 4 3 9c0 5.2 8 13 8.8 13.7.1.1.2.2.4.2s.3-.1.4-.2C13.4 22 21 14.2 21 9c0-5-4-9-9-9z',
//                     fillColor: markerColor,
//                     fillOpacity: 1,
//                     strokeWeight: 1,
//                     strokeColor: '#FFFFFF',
//                     scale: 1.5,
//                     anchor: new google.maps.Point(12, 22)
//                 }
//             });
//             marker.addListener('click', () => {
//                 setSelectedItem(item);
//                 setSelectedItemType(type);
//             });
//             return marker;
//         };
//         // Add property markers
//         properties.forEach(property => {
//             const marker = createMarker(property, 'property');
//             markersRef.current.push(marker);
//         });
//         // Add project markers
//         projects.forEach(project => {
//             const marker = createMarker(project, 'project');
//             markersRef.current.push(marker);
//         });
//     }, [properties, projects]);

//     // Update radius circle
//     useEffect(() => {
//         if (!mapInstanceRef.current) return;
//         if (circleRef.current) {
//             circleRef.current.setMap(null);
//         }
//         circleRef.current = new google.maps.Circle({
//             strokeColor: '#3B82F6',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#3B82F6',
//             fillOpacity: 0.1,
//             map: mapInstanceRef.current,
//             center: center,
//             radius: radius * 1000
//         });
//     }, [center, radius]);

//     const handleSearch = async () => {
//         if (!searchQuery.trim() || !mapInstanceRef.current) return;
//         setIsSearching(true);
//         const geocoder = new google.maps.Geocoder();
//         try {
//             const { results } = await new Promise((resolve, reject) => {
//                 geocoder.geocode({
//                     address: searchQuery,
//                     bounds: mapInstanceRef.current.getBounds(),
//                     componentRestrictions: { country: 'IN' }
//                 }, (results, status) => {
//                     if (status === 'OK') {
//                         resolve({ results });
//                     } else {
//                         reject(new Error(`Geocoding failed: ${status}`));
//                     }
//                 });
//             });
//             if (results.length > 0) {
//                 const location = results[0].geometry.location;
//                 const newCenter = { lat: location.lat(), lng: location.lng() };
//                 setCenter(newCenter);
//                 mapInstanceRef.current.panTo(newCenter);
//                 mapInstanceRef.current.setZoom(15);
//             }
//         } catch (error) {
//             console.error('Search error:', error);
//         } finally {
//             setIsSearching(false);
//         }
//     };
//     const handleLocateMe = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const location = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCenter(location);
//                     mapInstanceRef.current?.panTo(location);
//                     mapInstanceRef.current?.setZoom(15);
//                 }
//             );
//         }
//     };
//     const handleZoomIn = () => {
//         const currentZoom = mapInstanceRef.current?.getZoom() || 14;
//         mapInstanceRef.current?.setZoom(currentZoom + 1);
//     };
//     const handleZoomOut = () => {
//         const currentZoom = mapInstanceRef.current?.getZoom() || 14;
//         mapInstanceRef.current?.setZoom(currentZoom - 1);
//     };
//     return (
//         <div className="w-full h-screen bg-gray-100">
//             {/* Header */}
//             <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
//                 <h1 className="text-xl font-semibold">Map View</h1>
//                 <div className="flex items-center gap-4">
//                     {/* Search Bar */}
//                     <div className="relative">
//                         <div className="flex items-center bg-gray-100 rounded-lg">
//                             <input
//                                 type="text"
//                                 placeholder="Search location..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//                                 className="w-64 px-4 py-2 bg-transparent focus:outline-none"
//                             />
//                             {searchQuery && (
//                                 <button
//                                     onClick={() => setSearchQuery('')}
//                                     className="p-2 hover:text-gray-700"
//                                 >
//                                     <X size={16} />
//                                 </button>
//                             )}
//                             <button
//                                 onClick={handleSearch}
//                                 disabled={isSearching}
//                                 className="p-2 hover:text-blue-600"
//                             >
//                                 <Search size={20} />
//                             </button>
//                         </div>
//                     </div>
//                     <button
//                         onClick={handleLocateMe}
//                         className="p-2 hover:bg-gray-100 rounded-lg"
//                         title="Find my location"
//                     >
//                         <LocateFixed size={20} />
//                     </button>
//                     <button
//                         onClick={() => onViewChange('list')}
//                         className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
//                     >
//                         <List size={20} />
//                         <span>List View</span>
//                     </button>
//                 </div>

//             </div>


//             <div className="relative h-[calc(100vh-64px)]">
//                 {/* Loading Overlay */}
//                 {isLoading && (
//                     <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
//                         <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
//                             <Loader className="animate-spin" size={24} />
//                             <span className="font-medium">Loading map data...</span>
//                         </div>
//                     </div>
//                 )}
//                 {/* Map Container */}
//                 <div ref={mapRef} className="w-full h-full" />
//                 {/* Map Controls */}
//                 <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={handleZoomIn}
//                         className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
//                     >
//                         <Plus size={20} />
//                     </button>
//                     <button
//                         onClick={handleZoomOut}
//                         className="p-2 hover:bg-gray-100 rounded-b-lg"
//                     >
//                         <Minus size={20} />
//                     </button>
//                 </div>
//                 {/* Radius Controls */}
//                 <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg">
//                     <button
//                         onClick={() => setRadius(Math.max(1, radius - 1))}
//                         className="p-2 hover:bg-gray-100 border-b"
//                         disabled={radius <= 1}
//                     >
//                         <Minus size={20} />
//                     </button>
//                     <div className="p-2 text-center font-medium">
//                         {radius} km
//                     </div>
//                     <button
//                         onClick={() => setRadius(radius + 1)}
//                         className="p-2 hover:bg-gray-100"
//                     >
//                         <Plus size={20} />
//                     </button>
//                 </div>
//                 {/* Property Details Panel - on right side */}
//                 {selectedItem && (
//                     <PropertyPanel
//                         data={selectedItem}
//                         type={selectedItemType}
//                         onClose={() => {
//                             setSelectedItem(null);
//                             setSelectedItemType(null);
//                         }}
//                     />
//                 )}
//                 {/* Legend */}
//                 <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
//                     <div className="text-sm font-medium mb-2">Legend</div>
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-2">
//                             <Building className="text-blue-500" size={20} />
//                             <span className="text-sm">Apartment</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Home className="text-green-500" size={20} />
//                             <span className="text-sm">House</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Building className="text-purple-500" size={20} />
//                             <span className="text-sm">Office</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <MapPin className="text-red-500" size={20} />
//                             <span className="text-sm">Project</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default MapPage;

import React, { useEffect, useRef, useState } from 'react';
import {
    MapPin,
    Building,
    Home,
    Plus,
    Minus,
    Loader,
    List,
    Search,
    X,
    LocateFixed,
    Building2
} from 'lucide-react';
import PropertyPanel from '../components/PropertyPanel';

const MapPage = ({
    onViewChange,
    center,
    setCenter,
    radius,
    setRadius,
    properties = [],
    projects = [],
    buildings = [],
    isLoading
}) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef([]);
    const circleRef = useRef(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemType, setSelectedItemType] = useState(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;
        const mapOptions = {
            center: center,
            zoom: 14,
            styles: [
                {
                    featureType: 'all',
                    elementType: 'geometry',
                    stylers: [{ saturation: -80 }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry.fill',
                    stylers: [
                        { color: '#8aba6b' },
                        { saturation: 40 },
                        { lightness: 20 }
                    ]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#a5d6f7' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#ffffff' }]
                }
            ],
            disableDefaultUI: true,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false
        };
        mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);
    }, [center]);

    useEffect(() => {
        if (!mapInstanceRef.current) return;
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        const createMarker = (item, type) => {
            let position;
            if (type === 'property') {
                position = {
                    lat: item?.location?.coordinates?.[1],
                    lng: item?.location?.coordinates?.[0]
                };
            } else if (type === 'project') {
                position = {
                    lat: item?.location?.coordinates?.coordinates?.[1],
                    lng: item?.location?.coordinates?.coordinates?.[0]
                };
            } else { // building
                position = {
                    lat: item?.location?.coordinates?.[1],
                    lng: item?.location?.coordinates?.[0]
                };
            }

            const markerColor = type === 'property'
                ? item?.type_name?.toLowerCase() === 'apartment' ? '#3B82F6'
                    : item?.type_name?.toLowerCase() === 'house' ? '#10B981'
                        : '#8B5CF6'
                : type === 'project' ? '#EF4444'
                    : '#FB923C'; // color for buildings

            const marker = new google.maps.Marker({
                position,
                map: mapInstanceRef.current,
                icon: {
                    path: type === 'building'
                        ? 'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'
                        : 'M12 0C7 0 3 4 3 9c0 5.2 8 13 8.8 13.7.1.1.2.2.4.2s.3-.1.4-.2C13.4 22 21 14.2 21 9c0-5-4-9-9-9z',
                    fillColor: markerColor,
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: '#FFFFFF',
                    scale: type === 'building' ? 2 : 1.5,
                    anchor: type === 'building'
                        ? new google.maps.Point(8, 8)
                        : new google.maps.Point(12, 22)
                }
            });

            marker.addListener('click', () => {
                setSelectedItem(item);
                setSelectedItemType(type);
            });
            return marker;
        };

        // Add property markers
        properties.forEach(property => {
            const marker = createMarker(property, 'property');
            markersRef.current.push(marker);
        });

        // Add project markers
        projects.forEach(project => {
            const marker = createMarker(project, 'project');
            markersRef.current.push(marker);
        });

        // Add building markers
        buildings.forEach(building => {
            const marker = createMarker(building, 'building');
            markersRef.current.push(marker);
        });
    }, [properties, projects, buildings]);

    useEffect(() => {
        if (!mapInstanceRef.current) return;
        if (circleRef.current) {
            circleRef.current.setMap(null);
        }
        circleRef.current = new google.maps.Circle({
            strokeColor: '#3B82F6',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#3B82F6',
            fillOpacity: 0.1,
            map: mapInstanceRef.current,
            center: center,
            radius: radius * 1000
        });
    }, [center, radius]);

    const handleSearch = async () => {
        if (!searchQuery.trim() || !mapInstanceRef.current) return;
        setIsSearching(true);
        const geocoder = new google.maps.Geocoder();
        try {
            const { results } = await new Promise((resolve, reject) => {
                geocoder.geocode({
                    address: searchQuery,
                    bounds: mapInstanceRef.current.getBounds(),
                    componentRestrictions: { country: 'IN' }
                }, (results, status) => {
                    if (status === 'OK') {
                        resolve({ results });
                    } else {
                        reject(new Error(`Geocoding failed: ${status}`));
                    }
                });
            });
            if (results.length > 0) {
                const location = results[0].geometry.location;
                const newCenter = { lat: location.lat(), lng: location.lng() };
                setCenter(newCenter);
                mapInstanceRef.current.panTo(newCenter);
                mapInstanceRef.current.setZoom(15);
            }
        } catch (error) {
            console.error('Search error:', error);
        } finally {
            setIsSearching(false);
        }
    };

    const handleLocateMe = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setCenter(location);
                    mapInstanceRef.current?.panTo(location);
                    mapInstanceRef.current?.setZoom(15);
                }
            );
        }
    };

    const handleZoomIn = () => {
        const currentZoom = mapInstanceRef.current?.getZoom() || 14;
        mapInstanceRef.current?.setZoom(currentZoom + 1);
    };

    const handleZoomOut = () => {
        const currentZoom = mapInstanceRef.current?.getZoom() || 14;
        mapInstanceRef.current?.setZoom(currentZoom - 1);
    };

    return (
        <div className="w-full h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Map View</h1>
                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <div className="flex items-center bg-gray-100 rounded-lg">
                            <input
                                type="text"
                                placeholder="Search location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-64 px-4 py-2 bg-transparent focus:outline-none"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="p-2 hover:text-gray-700"
                                >
                                    <X size={16} />
                                </button>
                            )}
                            <button
                                onClick={handleSearch}
                                disabled={isSearching}
                                className="p-2 hover:text-blue-600"
                            >
                                <Search size={20} />
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleLocateMe}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                        title="Find my location"
                    >
                        <LocateFixed size={20} />
                    </button>
                    <button
                        onClick={() => onViewChange('list')}
                        className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
                    >
                        <List size={20} />
                        <span>List View</span>
                    </button>
                </div>
            </div>

            <div className="relative h-[calc(100vh-64px)]">
                {/* Loading Overlay */}
                {isLoading && (
                    <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
                        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
                            <Loader className="animate-spin" size={24} />
                            <span className="font-medium">Loading map data...</span>
                        </div>
                    </div>
                )}
                {/* Map Container */}
                <div ref={mapRef} className="w-full h-full" />
                {/* Map Controls */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg">
                    <button
                        onClick={handleZoomIn}
                        className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
                    >
                        <Plus size={20} />
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="p-2 hover:bg-gray-100 rounded-b-lg"
                    >
                        <Minus size={20} />
                    </button>
                </div>
                {/* Radius Controls */}
                <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg">
                    <button
                        onClick={() => setRadius(Math.max(1, radius - 1))}
                        className="p-2 hover:bg-gray-100 border-b"
                        disabled={radius <= 1}
                    >
                        <Minus size={20} />
                    </button>
                    <div className="p-2 text-center font-medium">
                        {radius} km
                    </div>
                    <button
                        onClick={() => setRadius(radius + 1)}
                        className="p-2 hover:bg-gray-100"
                    >
                        <Plus size={20} />
                    </button>
                </div>
                {/* Property Details Panel */}
                {selectedItem && (
                    <PropertyPanel
                        data={selectedItem}
                        type={selectedItemType}
                        onClose={() => {
                            setSelectedItem(null);
                            setSelectedItemType(null);
                        }}
                    />
                )}
                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-sm font-medium mb-2">Legend</div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Building className="text-blue-500" size={20} />
                            <span className="text-sm">Apartment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Home className="text-green-500" size={20} />
                            <span className="text-sm">House</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Building className="text-purple-500" size={20} />
                            <span className="text-sm">Office</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-red-500" size={20} />
                            <span className="text-sm">Project</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Building2 className="text-orange-500" size={20} />
                            <span className="text-sm">Building</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPage;