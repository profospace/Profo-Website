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
    Building2,
    Layers
} from 'lucide-react';
import PropertyPanel from '../components/PropertyPanel';

const MapPage = ({
    onViewChange,
    center,
    setCenter,
    properties = [],
    projects = [],
    buildings = [],
    isLoading,
    setIsFilterVisible
}) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef([]);
    const circleRef = useRef(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemType, setSelectedItemType] = useState(null);
    const [radius, setRadius] = useState(1);

    const [zoomIn, setZoomIn] = useState(0)
    const [zoomOut, setZoomout] = useState(0)
    const [isSatellite, setIsSatellite] = useState(false);
    

    /* by default filter hide */
    useEffect(
        () => {
            setIsFilterVisible(false)
        }, []
    )

    // useEffect(() => {
    //     if (!mapRef.current || mapInstanceRef.current) return;
    //     const mapOptions = {
    //         center: center,
    //         zoom: 14,
    //         styles: [
    //             {
    //                 featureType: 'all',
    //                 elementType: 'geometry',
    //                 stylers: [{ saturation: -80 }]
    //             },
    //             {
    //                 featureType: 'poi.park',
    //                 elementType: 'geometry.fill',
    //                 stylers: [
    //                     { color: '#8aba6b' },
    //                     { saturation: 40 },
    //                     { lightness: 20 }
    //                 ]
    //             },
    //             {
    //                 featureType: 'water',
    //                 elementType: 'geometry.fill',
    //                 stylers: [{ color: '#a5d6f7' }]
    //             },
    //             {
    //                 featureType: 'road',
    //                 elementType: 'geometry.fill',
    //                 stylers: [{ color: '#ffffff' }]
    //             }
    //         ],
    //         disableDefaultUI: true,
    //         zoomControl: false,
    //         streetViewControl: false,
    //         mapTypeControl: false
    //     };
    //     mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);


    // }, [center]);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;
        const mapOptions = {
            center: center,
            zoom: 12,
            mapTypeId: isSatellite ? 'satellite' : 'roadmap',
            styles: isSatellite ? [] : [
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
    }, [center, isSatellite]);

    // Add a new useEffect to handle map type changes
    useEffect(() => {
        if (!mapInstanceRef.current) return;
        mapInstanceRef.current.setMapTypeId(isSatellite ? 'satellite' : 'roadmap');
        // Only apply custom styles when not in satellite mode
        if (!isSatellite) {
            mapInstanceRef.current.setOptions({
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
                ]
            });
        } else {
            mapInstanceRef.current.setOptions({ styles: [] });
        }
    }, [isSatellite]);


    useEffect(() => {
        if (!mapInstanceRef.current) return;

        // Clear existing markers
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        // Combine all items
        const allItems = [
            ...properties.map(p => ({ ...p, type: 'property' })),
            ...projects.map(p => ({ ...p, type: 'project' })),
            ...buildings.map(b => ({ ...b, type: 'building' }))
        ];

        // Helper function to calculate distance between two points
        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const R = 6371; // Radius of the earth in km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        // Clustering function
        const createClusters = (items, maxDistance) => {
            const clusters = [];
            const usedItems = new Set();

            items.forEach((item, index) => {
                if (usedItems.has(item)) return;

                const cluster = [item];
                usedItems.add(item);

                // Find nearby items
                items?.forEach((otherItem, otherIndex) => {
                    if (index === otherIndex || usedItems.has(otherItem)) return;

                    const distance = calculateDistance(
                        item?.location?.coordinates?.[1],
                        item?.location?.coordinates?.[0],
                        otherItem?.location?.coordinates?.[1],
                        otherItem?.location?.coordinates?.[0]
                    );

                    if (distance <= maxDistance) {
                        cluster.push(otherItem);
                        usedItems.add(otherItem);
                    }
                });

                clusters.push(cluster);
            });

            return clusters;
        };

        const currentZoom = mapInstanceRef.current.getZoom();

        // Determine clustering parameters based on zoom level
        const clusterDistance = currentZoom < 12 ? 2 : (currentZoom < 14 ? 1 : 0.5);

        // Create clusters
        const clusters = createClusters(allItems, clusterDistance);

        const createMarker = (item, isMedian = false, isClusterMedian = false) => {
            if (item?.name === 'Anurag Blown up the DB Update 2'){
                console.log("item", item)

            }
            // Get coordinates based on item type
            let position;
            if (item.type === 'project') {
                // For projects, use latitude and longitude directly
                position = {
                    // lat: item.latitude,
                    // lng: item.longitude
                    lat: item?.location?.coordinates?.coordinates?.[1],
                    lng: item?.location?.coordinates?.coordinates?.[0]
                };

            } else {
                // For properties and buildings, use the existing location.coordinates structure
                position = {
                    lat: item?.location?.coordinates?.[1],
                    lng: item?.location?.coordinates?.[0]
                };
            }

            const formatPrice = (price) => {
                if (price >= 10000000) {
                    return (price / 10000000).toFixed(2).replace(/\.?0+$/, '') + ' Crore';
                } else if (price >= 100000) {
                    return (price / 100000).toFixed(2).replace(/\.?0+$/, '') + ' Lakhs';
                } else {
                    return price.toLocaleString('en-IN');
                }
            };
            

            const getMarkerColor = (itemType) => {
                switch (itemType) {
                    case 'property':
                        return '#007BFB'; // Blue for properties
                    case 'project':
                        // return '#10B981'; // Green for projects
                        return '#47C876'; // Green for projects
                    case 'building':
                        return '#fed42b'; // Amber for buildings
                    default:
                        return '#3B82F6';
                }
            };

            const getTextColor = (itemType) => {
                switch (itemType) {
                    case 'property':
                        return '#fff'; // White text for properties
                    case 'project':
                        return '#fff'; // Black text for projects
                    case 'building':
                        return '#000'; // Black text for buildings
                    default:
                        return '#fff';
                }
            };

            const createMarkerIcon = (price) => {
                const markerColor = getMarkerColor(item.type);
                const textColor = getTextColor(item.type);

                if (isMedian || isClusterMedian || currentZoom >= 14) {
                    const formattedPrice = formatPrice(price);
                    const markerSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-35 -7 220 110">
                <defs>
                    <style type="text/css">
                        @font-face {
                            font-family: 'Helvetica';
                            src: url('/assets/fonts/Helvetica.ttf') format('opentype');
                            font-weight: normal;
                            font-style: normal;
                        }
                    </style>
                </defs>
                <path d="
                    M40,0
                    h100
                    a28,28 0 0 1 28,21
                    v7
                    a28,28 0 0 1 -28,21
                    h-35
                    c-8,0 -12,4 -15,14
                    c-3,-10 -7,-14 -15,-14
                    h-35
                    a28,28 0 0 1 -28,-21
                    v-7
                    a28,28 0 0 1 28,-21
                    z"
                    fill="${isMedian ? '#FF6B6B' : (isClusterMedian ? '#4CAF50' : markerColor)}" 
                    stroke="#FFFFFF" 
                    stroke-width="1"/>
                <text x="90" 
                    y="25" 
                    font-family="Helvetica" 
                    font-size="24" 
                    font-weight="normal"
                    fill="${textColor}"  
                    text-anchor="middle" 
                    dominant-baseline="middle"><SiPolymerproject />${formattedPrice}</text>
            </svg>`;
                    return {
                        url: 'data:image/svg+xml;base64,' + btoa(markerSvg),
                        scaledSize: new google.maps.Size(110, 55),
                        anchor: new google.maps.Point(55, 55)
                    };
                } else {
                    const dotSvg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <circle cx="8" cy="8" r="6" fill="${markerColor}" stroke="#FFFFFF" stroke-width="2"/>
            </svg>
        `;
                    return {
                        url: 'data:image/svg+xml;base64,' + btoa(dotSvg),
                        scaledSize: new google.maps.Size(16, 16),
                        anchor: new google.maps.Point(8, 8)
                    };
                }
            };
            const price = item.price || 4160000;
            const markerIcon = createMarkerIcon(price);

            const marker = new google.maps.Marker({
                position,
                map: mapInstanceRef.current,
                icon: markerIcon
            });

            marker.addListener('click', () => {
                setSelectedItem(item);
                setSelectedItemType(item.type);
            });

            return marker;
        };

        clusters.forEach(cluster => {
            if (cluster.length === 0) return;

            // Sort cluster by price to find median
            const sortedCluster = cluster.sort((a, b) => (a.price || 4160000) - (b.price || 4160000));
            const medianIndex = Math.floor(sortedCluster.length / 2);
            const medianItem = sortedCluster[medianIndex];

            // If cluster is dense (more than 3 items) and zoom is low, show only median marker
            if (cluster.length > 3 && currentZoom < 14) {
                const medianMarker = createMarker(medianItem, false, true);
                markersRef.current.push(medianMarker);
            } else {
                // Show all markers
                cluster.forEach(item => {
                    const marker = createMarker(item);
                    markersRef.current.push(marker);
                });
            }
        });

        // Zoom changed listener
        const zoomChangedListener = mapInstanceRef.current.addListener('zoom_changed', () => {
            // Trigger re-render of markers
            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];

            // Re-run the entire marker creation logic
            // This will automatically adjust based on new zoom level
            clusters.forEach(cluster => {
                const sortedCluster = cluster.sort((a, b) => (a.price || 4160000) - (b.price || 4160000));
                const medianIndex = Math.floor(sortedCluster.length / 2);
                const medianItem = sortedCluster[medianIndex];

                if (cluster.length > 3 && mapInstanceRef.current.getZoom() < 14) {
                    const medianMarker = createMarker(medianItem, false, true);
                    markersRef.current.push(medianMarker);
                } else {
                    cluster.forEach(item => {
                        const marker = createMarker(item);
                        markersRef.current.push(marker);
                    });
                }
            });
        });

        // Cleanup
        return () => {
            google.maps.event.removeListener(zoomChangedListener);
        };
    }, [properties, projects, buildings]);

    const handleSearch = async () => {
        if (!searchQuery.trim() || !mapInstanceRef.current) return;

        setIsSearching(true);
        const geocoder = new google.maps.Geocoder();

        try {
            const { results } = await new Promise((resolve, reject) => {
                geocoder.geocode(
                    {
                        address: searchQuery,
                        region: 'IN' // Set region to India
                    },
                    (results, status) => {
                        if (status === 'OK' && results && results.length > 0) {
                            resolve({ results });
                        } else {
                            reject(new Error(`Geocoding failed: ${status}`));
                        }
                    }
                );
            });


            if (results && results.length > 0) {
                const location = results[0].geometry.location;
                const newCenter = {
                    lat: location.lat(),
                    lng: location.lng()
                };

                // Update center state
                setCenter(newCenter);

                // Update map view
                if (mapInstanceRef.current) {
                    // Smooth pan to new location
                    mapInstanceRef.current.panTo(newCenter);

                    // Zoom in to show the area better
                    mapInstanceRef.current.setZoom(15);

                    // Update the search circle
                    if (circleRef.current) {
                        circleRef.current.setCenter(newCenter);
                    }
                }
            } else {
                console.warn('No results found for the search query');
                // Optionally show a user-friendly message
                alert('No location found. Please try a different search term.');
            }
        } catch (error) {
            console.error('Search error:', error);
            // Optionally show a user-friendly error message
            alert('Unable to find the location. Please try again.');
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
        console.log("currentZoomIN", currentZoom)
        setZoomIn(currentZoom)
    };

    const handleZoomOut = () => {
        const currentZoom = mapInstanceRef.current?.getZoom() || 14;
        mapInstanceRef.current?.setZoom(currentZoom - 1);
        console.log("currentZoomOUT", currentZoom)
        setZoomout(currentZoom)
    };

    return (


        <div className="w-full relative">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-transparent px-4 flex justify-between items-center py-2">
                <h1 className="text-xl font-semibold bg-white px-4 py-1 rounded-sm shadow-md -z-20">Map View</h1>

                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <div className="flex items-center bg-white rounded-lg  shadow-lg">
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

                    {/* Locate Me Button , Zoom in , Zoom out Button */}
                    <div className="flex flex-col absolute top-24 right-4 bg-white rounded-lg shadow-lg">
                        <button
                            onClick={handleZoomIn}
                            className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
                        >
                            <Plus size={20} />
                        </button>
                        <button
                            onClick={handleZoomOut}
                            className="p-2 hover:bg-gray-100 rounded-b-lg border-b"
                        >
                            <Minus size={20} />
                        </button>
                        <button
                            onClick={handleLocateMe}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                            title="Find my location"
                        >
                            <LocateFixed size={20} />
                        </button>

                         <button
                            onClick={() => setIsSatellite(!isSatellite)}
                            className={`p-2 hover:bg-gray-100 rounded-b-lg ${isSatellite ? 'bg-blue-50' : ''}`}
                            title={isSatellite ? 'Switch to street view' : 'Switch to satellite view'}
                        >
                            <Layers size={20} className={isSatellite ? 'text-blue-600' : ''} />
                        </button>
                    </div>
                    {/* <button
                        onClick={() => onViewChange('list')}
                        className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
                    >
                        <List size={20} />
                        <span>List View</span>
                    </button> */}
                </div>
            </div>

            <div className="relative h-full">
                {/* Rest of the component remains the same */}
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
                    <div ref={mapRef} className="w-full h-full " />
                    {/* Remaining components stay the same */}
                    {/* Map Controls */}

                    {/* Radius Controls -- Commented temparary*/}
                    {/* <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg">
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
         </div> */}
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

                </div>
            </div>
        </div>
    );
};

export default MapPage;


