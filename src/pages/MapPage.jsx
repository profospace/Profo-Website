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
//     LocateFixed,
//     Building2,
//     Layers
// } from 'lucide-react';
// import PropertyPanel from '../components/PropertyPanel';
// import SearchSection from '../components/SearchSection';
// import ActiveFiltersDisplay from '../components/ActiveFiltersDisplay';

// const MapPage = ({
//     onViewChange,
//     center,
//     setCenter,
//     properties = [],
//     projects = [],
//     buildings = [],
//     isLoading,
//     setIsFilterVisible,
//     handleViewChange, view  ,setFilterType , setSortBy 
// }) => {
//     const mapRef = useRef(null);
//     const mapInstanceRef = useRef(null);
//     const markersRef = useRef([]);
//     const circleRef = useRef(null);
//     const userMarkerRef = useRef(null); // Reference for user location marker


//     const [searchQuery, setSearchQuery] = useState('');
//     const [isSearching, setIsSearching] = useState(false);
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [selectedItemType, setSelectedItemType] = useState(null);
//     const [radius, setRadius] = useState(1);
//     const [currentLocation, setCurrentLocation] = useState(null); // State to track current location


//     const [zoomIn, setZoomIn] = useState(0)
//     const [zoomOut, setZoomout] = useState(0)
//     const [isSatellite, setIsSatellite] = useState(false);


//     /* by default filter hide */
//     useEffect(
//         () => {
//             setIsFilterVisible(false)
//         }, []
//     )

//     // useEffect(() => {
//     //     if (!mapRef.current || mapInstanceRef.current) return;
//     //     const mapOptions = {
//     //         center: center,
//     //         zoom: 14,
//     //         styles: [
//     //             {
//     //                 featureType: 'all',
//     //                 elementType: 'geometry',
//     //                 stylers: [{ saturation: -80 }]
//     //             },
//     //             {
//     //                 featureType: 'poi.park',
//     //                 elementType: 'geometry.fill',
//     //                 stylers: [
//     //                     { color: '#8aba6b' },
//     //                     { saturation: 40 },
//     //                     { lightness: 20 }
//     //                 ]
//     //             },
//     //             {
//     //                 featureType: 'water',
//     //                 elementType: 'geometry.fill',
//     //                 stylers: [{ color: '#a5d6f7' }]
//     //             },
//     //             {
//     //                 featureType: 'road',
//     //                 elementType: 'geometry.fill',
//     //                 stylers: [{ color: '#ffffff' }]
//     //             }
//     //         ],
//     //         disableDefaultUI: true,
//     //         zoomControl: false,
//     //         streetViewControl: false,
//     //         mapTypeControl: false
//     //     };
//     //     mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);


//     // }, [center]);

//     useEffect(() => {
//         if (!mapRef.current || mapInstanceRef.current) return;
//         const mapOptions = {
//             center: center,
//             zoom: 12,
//             mapTypeId: isSatellite ? 'satellite' : 'roadmap',
//             styles: isSatellite ? [] : [
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
//     }, [center, isSatellite]);

//     // Add a new useEffect to handle map type changes
//     useEffect(() => {
//         if (!mapInstanceRef.current) return;
//         mapInstanceRef.current.setMapTypeId(isSatellite ? 'satellite' : 'roadmap');
//         // Only apply custom styles when not in satellite mode
//         if (!isSatellite) {
//             mapInstanceRef.current.setOptions({
//                 styles: [
//                     {
//                         featureType: 'all',
//                         elementType: 'geometry',
//                         stylers: [{ saturation: -80 }]
//                     },
//                     {
//                         featureType: 'poi.park',
//                         elementType: 'geometry.fill',
//                         stylers: [
//                             { color: '#8aba6b' },
//                             { saturation: 40 },
//                             { lightness: 20 }
//                         ]
//                     },
//                     {
//                         featureType: 'water',
//                         elementType: 'geometry.fill',
//                         stylers: [{ color: '#a5d6f7' }]
//                     },
//                     {
//                         featureType: 'road',
//                         elementType: 'geometry.fill',
//                         stylers: [{ color: '#ffffff' }]
//                     }
//                 ]
//             });
//         } else {
//             mapInstanceRef.current.setOptions({ styles: [] });
//         }
//     }, [isSatellite]);


//     useEffect(() => {
//         if (!mapInstanceRef.current) return;

//         // Clear existing markers
//         markersRef.current.forEach(marker => marker.setMap(null));
//         markersRef.current = [];

//         // Combine all items
//         const allItems = [
//             ...properties.map(p => ({ ...p, type: 'property' })),
//             ...projects.map(p => ({ ...p, type: 'project' })),
//             ...buildings.map(b => ({ ...b, type: 'building' }))
//         ];

//         // Helper function to calculate distance between two points
//         const calculateDistance = (lat1, lon1, lat2, lon2) => {
//             const R = 6371; // Radius of the earth in km
//             const dLat = (lat2 - lat1) * Math.PI / 180;
//             const dLon = (lon2 - lon1) * Math.PI / 180;
//             const a =
//                 Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//                 Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//                 Math.sin(dLon / 2) * Math.sin(dLon / 2);
//             const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//             return R * c;
//         };

//         // Clustering function
//         const createClusters = (items, maxDistance) => {
//             const clusters = [];
//             const usedItems = new Set();

//             items.forEach((item, index) => {
//                 if (usedItems.has(item)) return;

//                 const cluster = [item];
//                 usedItems.add(item);

//                 // Find nearby items
//                 items?.forEach((otherItem, otherIndex) => {
//                     if (index === otherIndex || usedItems.has(otherItem)) return;

//                     const distance = calculateDistance(
//                         item?.location?.coordinates?.[1],
//                         item?.location?.coordinates?.[0],
//                         otherItem?.location?.coordinates?.[1],
//                         otherItem?.location?.coordinates?.[0]
//                     );

//                     if (distance <= maxDistance) {
//                         cluster.push(otherItem);
//                         usedItems.add(otherItem);
//                     }
//                 });

//                 clusters.push(cluster);
//             });

//             return clusters;
//         };

//         const currentZoom = mapInstanceRef.current.getZoom();

//         // Determine clustering parameters based on zoom level
//         const clusterDistance = currentZoom < 12 ? 2 : (currentZoom < 14 ? 1 : 0.5);

//         // Create clusters
//         const clusters = createClusters(allItems, clusterDistance);

//         const createMarker = (item, isMedian = false, isClusterMedian = false) => {
//             if (item?.name === 'Anurag Blown up the DB Update 2') {
//                 console.log("item", item)

//             }
//             // Get coordinates based on item type
//             let position;
//             if (item.type === 'project') {
//                 // For projects, use latitude and longitude directly
//                 position = {
//                     // lat: item.latitude,
//                     // lng: item.longitude
//                     lat: item?.location?.coordinates?.coordinates?.[1],
//                     lng: item?.location?.coordinates?.coordinates?.[0]
//                 };

//             } else {
//                 // For properties and buildings, use the existing location.coordinates structure
//                 position = {
//                     lat: item?.location?.coordinates?.[1],
//                     lng: item?.location?.coordinates?.[0]
//                 };
//             }

//             const formatPrice = (price) => {
//                 if (price >= 10000000) {
//                     return (price / 10000000).toFixed(2).replace(/\.?0+$/, '') + ' Crore';
//                 } else if (price >= 100000) {
//                     return (price / 100000).toFixed(2).replace(/\.?0+$/, '') + ' Lakhs';
//                 } else {
//                     return price.toLocaleString('en-IN');
//                 }
//             };


//             const getMarkerColor = (itemType) => {
//                 switch (itemType) {
//                     case 'property':
//                         return '#007BFB'; // Blue for properties
//                     case 'project':
//                         // return '#10B981'; // Green for projects
//                         return '#47C876'; // Green for projects
//                     case 'building':
//                         return '#fed42b'; // Amber for buildings
//                     default:
//                         return '#3B82F6';
//                 }
//             };

//             const getTextColor = (itemType) => {
//                 switch (itemType) {
//                     case 'property':
//                         return '#fff'; // White text for properties
//                     case 'project':
//                         return '#fff'; // Black text for projects
//                     case 'building':
//                         return '#000'; // Black text for buildings
//                     default:
//                         return '#fff';
//                 }
//             };

//             const createMarkerIcon = (price) => {
//                 const markerColor = getMarkerColor(item.type);
//                 const textColor = getTextColor(item.type);

//                 if (isMedian || isClusterMedian || currentZoom >= 8) {
//                     const formattedPrice = formatPrice(price);
//                     const markerSvg = `
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="-35 -7 220 110">
//                 <defs>
//                     <style type="text/css">
//                         @font-face {
//                             font-family: 'Helvetica';
//                             src: url('/assets/fonts/Helvetica.ttf') format('opentype');
//                             font-weight: normal;
//                             font-style: normal;
//                         }
//                     </style>
//                 </defs>
//                 <path d="
//                     M40,0
//                     h100
//                     a28,28 0 0 1 28,21
//                     v7
//                     a28,28 0 0 1 -28,21
//                     h-35
//                     c-8,0 -12,4 -15,14
//                     c-3,-10 -7,-14 -15,-14
//                     h-35
//                     a28,28 0 0 1 -28,-21
//                     v-7
//                     a28,28 0 0 1 28,-21
//                     z"
//                     fill="${isMedian ? '#FF6B6B' : (isClusterMedian ? '#4CAF50' : markerColor)}" 
//                     stroke="#FFFFFF" 
//                     stroke-width="1"/>
//                 <text x="90" 
//                     y="25" 
//                     font-family="Helvetica" 
//                     font-size="24" 
//                     font-weight="normal"
//                     fill="${textColor}"  
//                     text-anchor="middle" 
//                     dominant-baseline="middle"><SiPolymerproject />${formattedPrice}</text>
//             </svg>`;
//                     return {
//                         url: 'data:image/svg+xml;base64,' + btoa(markerSvg),
//                         scaledSize: new google.maps.Size(110, 55),
//                         anchor: new google.maps.Point(55, 55)
//                     };
//                 } else {
//                     const dotSvg = `
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
//                 <circle cx="8" cy="8" r="6" fill="${markerColor}" stroke="#FFFFFF" stroke-width="2"/>
//             </svg>
//         `;
//                     return {
//                         url: 'data:image/svg+xml;base64,' + btoa(dotSvg),
//                         scaledSize: new google.maps.Size(16, 16),
//                         anchor: new google.maps.Point(8, 8)
//                     };
//                 }
//             };
//             const price = item.price || 4160000;
//             const markerIcon = createMarkerIcon(price);

//             const marker = new google.maps.Marker({
//                 position,
//                 map: mapInstanceRef.current,
//                 icon: markerIcon
//             });

//             marker.addListener('click', () => {
//                 setSelectedItem(item);
//                 setSelectedItemType(item.type);
//             });

//             return marker;
//         };

//         clusters.forEach(cluster => {
//             if (cluster.length === 0) return;

//             // Sort cluster by price to find median
//             const sortedCluster = cluster.sort((a, b) => (a.price || 4160000) - (b.price || 4160000));
//             const medianIndex = Math.floor(sortedCluster.length / 2);
//             const medianItem = sortedCluster[medianIndex];

//             // If cluster is dense (more than 3 items) and zoom is low, show only median marker
//             if (cluster.length > 3 && currentZoom < 14) {
//                 const medianMarker = createMarker(medianItem, false, true);
//                 markersRef.current.push(medianMarker);
//             } else {
//                 // Show all markers
//                 cluster.forEach(item => {
//                     const marker = createMarker(item);
//                     markersRef.current.push(marker);
//                 });
//             }
//         });

//         // Zoom changed listener
//         const zoomChangedListener = mapInstanceRef.current.addListener('zoom_changed', () => {
//             // Trigger re-render of markers
//             markersRef.current.forEach(marker => marker.setMap(null));
//             markersRef.current = [];

//             // Re-run the entire marker creation logic
//             // This will automatically adjust based on new zoom level
//             clusters.forEach(cluster => {
//                 const sortedCluster = cluster.sort((a, b) => (a.price || 4160000) - (b.price || 4160000));
//                 const medianIndex = Math.floor(sortedCluster.length / 2);
//                 const medianItem = sortedCluster[medianIndex];

//                 if (cluster.length > 3 && mapInstanceRef.current.getZoom() < 14) {
//                     const medianMarker = createMarker(medianItem, false, true);
//                     markersRef.current.push(medianMarker);
//                 } else {
//                     cluster.forEach(item => {
//                         const marker = createMarker(item);
//                         markersRef.current.push(marker);
//                     });
//                 }
//             });
//         });

//         // Cleanup
//         return () => {
//             google.maps.event.removeListener(zoomChangedListener);
//         };
//     }, [properties, projects, buildings]);


//     // // Initialize map with user's location
//     // useEffect(() => {
//     //     if (!mapRef.current || mapInstanceRef.current) return;

//     //     // Get user's current location
//     //     navigator.geolocation.getCurrentPosition(
//     //         (position) => {
//     //             const userLocation = {
//     //                 lat: position.coords.latitude,
//     //                 lng: position.coords.longitude
//     //             };
//     //             setCurrentLocation(userLocation);
//     //             setCenter(userLocation); // Set initial center to user's location
//     //         },
//     //         (error) => {
//     //             console.error('Geolocation error:', error);
//     //             // Fallback to default center if geolocation fails
//     //             setCurrentLocation(center);
//     //         }
//     //     );

//     //     // Initialize map with current center
//     //     const mapOptions = {
//     //         center: center,
//     //         zoom: 12,
//     //         mapTypeId: isSatellite ? 'satellite' : 'roadmap',
//     //         styles: isSatellite ? [] : [
//     //             // ... (existing styles remain the same)
//     //         ],
//     //         disableDefaultUI: true,
//     //         zoomControl: false,
//     //         streetViewControl: false,
//     //         mapTypeControl: false
//     //     };
//     //     mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);
//     // }, [center, isSatellite]);

//     useEffect(() => {
//         if (!mapRef.current || mapInstanceRef.current) return;
//         const mapOptions = {
//             center: center,
//             zoom: 12,
//             mapTypeId: isSatellite ? 'satellite' : 'roadmap',
//             styles: isSatellite ? [] : [
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
//     }, [center, isSatellite]);


//     // Update user location marker and radius circle
//     useEffect(() => {
//         if (!mapInstanceRef.current || !currentLocation) return;

//         // Clear existing user marker and circle
//         if (userMarkerRef.current) {
//             userMarkerRef.current.setMap(null);
//         }
//         if (circleRef.current) {
//             circleRef.current.setMap(null);
//         }

//         // Create user location marker with custom icon
//         const userMarkerIcon = {
//             path: google.maps.SymbolPath.CIRCLE,
//             fillColor: '#4285F4',
//             fillOpacity: 1,
//             strokeColor: '#FFFFFF',
//             strokeWeight: 2,
//             scale: 8
//         };

//         userMarkerRef.current = new google.maps.Marker({
//             position: currentLocation,
//             map: mapInstanceRef.current,
//             icon: userMarkerIcon,
//             zIndex: 999 // Ensure user marker stays on top
//         });

//         // Create 1km radius circle
//         circleRef.current = new google.maps.Circle({
//             map: mapInstanceRef.current,
//             center: currentLocation,
//             radius: 1000, // 1km in meters
//             fillColor: '#4285F4',
//             fillOpacity: 0.1,
//             strokeColor: '#4285F4',
//             strokeOpacity: 0.8,
//             strokeWeight: 2
//         });

//     }, [currentLocation, mapInstanceRef.current]);

//     // const handleSearch = async () => {
//     //     if (!searchQuery.trim() || !mapInstanceRef.current) return;

//     //     setIsSearching(true);
//     //     const geocoder = new google.maps.Geocoder();

//     //     try {
//     //         const { results } = await new Promise((resolve, reject) => {
//     //             geocoder.geocode(
//     //                 {
//     //                     address: searchQuery,
//     //                     region: 'IN' // Set region to India
//     //                 },
//     //                 (results, status) => {
//     //                     if (status === 'OK' && results && results.length > 0) {
//     //                         resolve({ results });
//     //                     } else {
//     //                         reject(new Error(`Geocoding failed: ${status}`));
//     //                     }
//     //                 }
//     //             );
//     //         });


//     //         if (results && results.length > 0) {
//     //             const location = results[0].geometry.location;
//     //             const newCenter = {
//     //                 lat: location.lat(),
//     //                 lng: location.lng()
//     //             };

//     //             // Update center state
//     //             setCenter(newCenter);

//     //             // Update map view
//     //             if (mapInstanceRef.current) {
//     //                 // Smooth pan to new location
//     //                 mapInstanceRef.current.panTo(newCenter);

//     //                 // Zoom in to show the area better
//     //                 mapInstanceRef.current.setZoom(15);

//     //                 // Update the search circle
//     //                 if (circleRef.current) {
//     //                     circleRef.current.setCenter(newCenter);
//     //                 }
//     //             }
//     //         } else {
//     //             console.warn('No results found for the search query');
//     //             // Optionally show a user-friendly message
//     //             alert('No location found. Please try a different search term.');
//     //         }
//     //     } catch (error) {
//     //         console.error('Search error:', error);
//     //         // Optionally show a user-friendly error message
//     //         alert('Unable to find the location. Please try again.');
//     //     } finally {
//     //         setIsSearching(false);
//     //     }
//     // };

//     // Modified search handler to update current location
//     const handleSearch = async () => {
//         if (!searchQuery.trim() || !mapInstanceRef.current) return;

//         setIsSearching(true);
//         const geocoder = new google.maps.Geocoder();

//         try {
//             const { results } = await new Promise((resolve, reject) => {
//                 geocoder.geocode(
//                     {
//                         address: searchQuery,
//                         region: 'IN'
//                     },
//                     (results, status) => {
//                         if (status === 'OK' && results && results.length > 0) {
//                             resolve({ results });
//                         } else {
//                             reject(new Error(`Geocoding failed: ${status}`));
//                         }
//                     }
//                 );
//             });

//             if (results && results.length > 0) {
//                 const location = results[0].geometry.location;
//                 const newLocation = {
//                     lat: location.lat(),
//                     lng: location.lng()
//                 };

//                 setCurrentLocation(newLocation); // Update current location
//                 setCenter(newLocation);

//                 if (mapInstanceRef.current) {
//                     mapInstanceRef.current.panTo(newLocation);
//                     mapInstanceRef.current.setZoom(14);
//                 }
//             } else {
//                 alert('No location found. Please try a different search term.');
//             }
//         } catch (error) {
//             console.error('Search error:', error);
//             alert('Unable to find the location. Please try again.');
//         } finally {
//             setIsSearching(false);
//         }
//     };


//     // const handleLocateMe = () => {
//     //     if (navigator.geolocation) {
//     //         navigator.geolocation.getCurrentPosition(
//     //             (position) => {
//     //                 const location = {
//     //                     lat: position.coords.latitude,
//     //                     lng: position.coords.longitude
//     //                 };
//     //                 setCenter(location);
//     //                 mapInstanceRef.current?.panTo(location);
//     //                 mapInstanceRef.current?.setZoom(15);
//     //             }
//     //         );
//     //     }
//     // };

//     // Modified locate me handler
//     const handleLocateMe = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const location = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };
//                     setCurrentLocation(location); // Update current location
//                     setCenter(location);
//                     mapInstanceRef.current?.panTo(location);
//                     mapInstanceRef.current?.setZoom(14);
//                 }
//             );
//         }
//     };

//     const handleZoomIn = () => {
//         const currentZoom = mapInstanceRef.current?.getZoom() || 14;
//         mapInstanceRef.current?.setZoom(currentZoom + 1);
//         console.log("currentZoomIN", currentZoom)
//         setZoomIn(currentZoom)
//     };

//     const handleZoomOut = () => {
//         const currentZoom = mapInstanceRef.current?.getZoom() || 14;
//         mapInstanceRef.current?.setZoom(currentZoom - 1);
//         console.log("currentZoomOUT", currentZoom)
//         setZoomout(currentZoom)
//     };


//     return (


//         <div className="w-full relative">
//             {/* Header */}
//             <div className="absolute top-0 left-0 right-0 z-10 bg-transparent px-4 flex justify-between items-center py-2">
//                 {/* <h1 className="text-xl font-semibold bg-white px-4 py-1 rounded-sm shadow-md -z-20">Map View</h1> */}

//                 <div className="flex items-center gap-4 ">
//                     <div className='flex flex-col px-6'>
//                         <div className='flex items-center justify-between gap-12'>
//                             {/* Search Bar */}
//                             <div className="relative">
//                                 <div className="flex items-center bg-white rounded-full  shadow-lg">
//                                     <input
//                                         type="text"
//                                         placeholder="Search location..."
//                                         value={searchQuery}
//                                         onChange={(e) => setSearchQuery(e.target.value)}
//                                         onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//                                         className="w-64  px-4 py-2 bg-transparent focus:outline-none"
//                                     />
//                                     {searchQuery && (
//                                         <button
//                                             onClick={() => setSearchQuery('')}
//                                             className=" hover:text-gray-700"
//                                         >
//                                             <X size={16} />
//                                         </button>
//                                     )}
//                                     <button
//                                         onClick={handleSearch}
//                                         disabled={isSearching}
//                                         className="p-2 hover:text-blue-600"
//                                     >
//                                         <Search size={20} />
//                                     </button>
//                                 </div>
//                             </div>

//                             <div>
//                                 <SearchSection handleViewChange={handleViewChange} view={view} setSearchQuery={setSearchQuery} setFilterType={setFilterType} setSortBy={setSortBy} />
//                             </div>
//                         </div>

//                         <div><ActiveFiltersDisplay /></div>
//                     </div>

//                     {/* Locate Me Button , Zoom in , Zoom out Button */}
//                     <div className="flex flex-col absolute top-24 right-4 bg-white rounded-lg shadow-lg">
//                         <button
//                             onClick={handleZoomIn}
//                             className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
//                         >
//                             <Plus size={20} />
//                         </button>
//                         <button
//                             onClick={handleZoomOut}
//                             className="p-2 hover:bg-gray-100 rounded-b-lg border-b"
//                         >
//                             <Minus size={20} />
//                         </button>
//                         <button
//                             onClick={handleLocateMe}
//                             className="p-2 hover:bg-gray-100 rounded-lg"
//                             title="Find my location"
//                         >
//                             <LocateFixed size={20} />
//                         </button>

//                         <button
//                             onClick={() => setIsSatellite(!isSatellite)}
//                             className={`p-2 hover:bg-gray-100 rounded-b-lg ${isSatellite ? 'bg-blue-50' : ''}`}
//                             title={isSatellite ? 'Switch to street view' : 'Switch to satellite view'}
//                         >
//                             <Layers size={20} className={isSatellite ? 'text-blue-600' : ''} />
//                         </button>
//                     </div>
//                     {/* <button
//                         onClick={() => onViewChange('list')}
//                         className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2"
//                     >
//                         <List size={20} />
//                         <span>List View</span>
//                     </button> */}
//                 </div>
//             </div>

//             <div className="relative h-full">
//                 {/* Rest of the component remains the same */}
//                 <div className="relative h-[calc(100vh-64px)]">
//                     {/* Loading Overlay */}
//                     {isLoading && (
//                         <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
//                             <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
//                                 <Loader className="animate-spin" size={24} />
//                                 <span className="font-medium">Loading map data...</span>
//                             </div>
//                         </div>
//                     )}
//                     {/* Map Container */}
//                     <div ref={mapRef} className="w-full h-full " />
//                     {/* Remaining components stay the same */}
//                     {/* Map Controls */}

//                     {/* Radius Controls -- Commented temparary*/}
//                     {/* <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg">
//              <button
//                  onClick={() => setRadius(Math.max(1, radius - 1))}
//                  className="p-2 hover:bg-gray-100 border-b"
//                  disabled={radius <= 1}
//              >
//                  <Minus size={20} />
//              </button>
//              <div className="p-2 text-center font-medium">
//                  {radius} km
//              </div>
//              <button
//                  onClick={() => setRadius(radius + 1)}
//                  className="p-2 hover:bg-gray-100"
//              >
//                  <Plus size={20} />
//              </button>
//          </div> */}
//                     {/* Property Details Panel */}
//                     {selectedItem && (
//                         <PropertyPanel
//                             data={selectedItem}
//                             type={selectedItemType}
//                             onClose={() => {
//                                 setSelectedItem(null);
//                                 setSelectedItemType(null);
//                             }}
//                         />
//                     )}

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
import SearchSection from '../components/SearchSection';
import ActiveFiltersDisplay from '../components/ActiveFiltersDisplay';

const MapPage = ({
    onViewChange,
    center,
    setCenter,
    properties = [],
    projects = [],
    buildings = [],
    isLoading,
    setIsFilterVisible,
    handleViewChange, view, setFilterType, setSortBy
}) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef([]);
    const circleRef = useRef(null);
    const userMarkerRef = useRef(null); // Reference for user location marker


    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemType, setSelectedItemType] = useState(null);
    const [radius, setRadius] = useState(1);
    const [currentLocation, setCurrentLocation] = useState(null); // State to track current location


    const [zoomIn, setZoomIn] = useState(0)
    const [zoomOut, setZoomout] = useState(0)
    const [isSatellite, setIsSatellite] = useState(false);


    /* by default filter hide */
    useEffect(
        () => {
            setIsFilterVisible(false)
        }, []
    )

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
            if (item?.name === 'Anurag Blown up the DB Update 2') {
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

                if (isMedian || isClusterMedian || currentZoom >= 8) {
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


    // Update user location marker and radius circle
    useEffect(() => {
        if (!mapInstanceRef.current || !currentLocation) return;

        // Clear existing user marker and circle
        if (userMarkerRef.current) {
            userMarkerRef.current.setMap(null);
        }
        if (circleRef.current) {
            circleRef.current.setMap(null);
        }

        // Create user location marker with custom icon
        const userMarkerIcon = {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#4285F4',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
            scale: 8
        };

        userMarkerRef.current = new google.maps.Marker({
            position: currentLocation,
            map: mapInstanceRef.current,
            icon: userMarkerIcon,
            zIndex: 999 // Ensure user marker stays on top
        });

        // Create 1km radius circle
        circleRef.current = new google.maps.Circle({
            map: mapInstanceRef.current,
            center: currentLocation,
            radius: 1000, // 1km in meters
            fillColor: '#4285F4',
            fillOpacity: 0.1,
            strokeColor: '#4285F4',
            strokeOpacity: 0.8,
            strokeWeight: 2
        });

    }, [currentLocation, mapInstanceRef.current]);

    // Modified search handler to update current location
    const handleSearch = async () => {
        if (!searchQuery.trim() || !mapInstanceRef.current) return;

        setIsSearching(true);
        const geocoder = new google.maps.Geocoder();

        try {
            const { results } = await new Promise((resolve, reject) => {
                geocoder.geocode(
                    {
                        address: searchQuery,
                        region: 'IN'
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
                const newLocation = {
                    lat: location.lat(),
                    lng: location.lng()
                };

                setCurrentLocation(newLocation); // Update current location
                setCenter(newLocation);

                if (mapInstanceRef.current) {
                    mapInstanceRef.current.panTo(newLocation);
                    mapInstanceRef.current.setZoom(14);
                }
            } else {
                alert('No location found. Please try a different search term.');
            }
        } catch (error) {
            console.error('Search error:', error);
            alert('Unable to find the location. Please try again.');
        } finally {
            setIsSearching(false);
        }
    };

    // Modified locate me handler
    const handleLocateMe = () => {
        setIsSearching(true); // Show loader while getting location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setCurrentLocation(location); // Update current location
                    setCenter(location);
                    mapInstanceRef.current?.panTo(location);
                    mapInstanceRef.current?.setZoom(14);
                    setIsSearching(false); // Hide loader after location is set
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    alert("Unable to get your location. Please check your browser permissions.");
                    setIsSearching(false); // Hide loader on error
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
            setIsSearching(false); // Hide loader if not supported
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
                <div className="flex items-center gap-4 ">
                    <div className='flex flex-col px-6'>
                        <div className='flex items-center justify-between gap-12'>
                            {/* Search Bar with Loader */}
                            <div className="relative">
                                <div className="flex items-center bg-white rounded-full shadow-lg">
                                    <input
                                        type="text"
                                        placeholder="Search location..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                        className="w-64 px-4 py-2 bg-transparent focus:outline-none"
                                    />
                                    {searchQuery && !isSearching && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="hover:text-gray-700 mr-1"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                    <button
                                        onClick={handleSearch}
                                        disabled={isSearching}
                                        className="p-2 hover:text-blue-600"
                                    >
                                        {isSearching ? (
                                            <Loader size={20} className="animate-spin text-blue-600" />
                                        ) : (
                                            <Search size={20} />
                                        )}
                                    </button>
                                </div>
                                {/* Floating search loader - appears below the search box */}
                                {isSearching && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white p-2 rounded-md shadow-md flex items-center justify-center">
                                        <Loader size={16} className="animate-spin mr-2 text-blue-600" />
                                        <span className="text-sm text-gray-700">Finding location...</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <SearchSection handleViewChange={handleViewChange} view={view} setSearchQuery={setSearchQuery} setFilterType={setFilterType} setSortBy={setSortBy} />
                            </div>
                        </div>

                        <div><ActiveFiltersDisplay /></div>
                    </div>

                    {/* Locate Me Button, Zoom in, Zoom out Button */}
                    <div className="flex flex-col absolute top-24 right-4 bg-white rounded-lg shadow-lg">
                        <button
                            onClick={handleZoomIn}
                            className="p-2 hover:bg-gray-100 rounded-t-lg border-b"
                            disabled={isSearching}
                        >
                            <Plus size={20} />
                        </button>
                        <button
                            onClick={handleZoomOut}
                            className="p-2 hover:bg-gray-100 rounded-b-lg border-b"
                            disabled={isSearching}
                        >
                            <Minus size={20} />
                        </button>
                        <button
                            onClick={handleLocateMe}
                            className="p-2 hover:bg-gray-100 rounded-lg border-b"
                            title="Find my location"
                            disabled={isSearching}
                        >
                            {isSearching ? (
                                <Loader size={20} className="animate-spin text-blue-600" />
                            ) : (
                                <LocateFixed size={20} />
                            )}
                        </button>

                        <button
                            onClick={() => setIsSatellite(!isSatellite)}
                            className={`p-2 hover:bg-gray-100 rounded-b-lg ${isSatellite ? 'bg-blue-50' : ''}`}
                            title={isSatellite ? 'Switch to street view' : 'Switch to satellite view'}
                            disabled={isSearching}
                        >
                            <Layers size={20} className={isSatellite ? 'text-blue-600' : ''} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative h-full">
                <div className="relative h-[calc(100vh-64px)]">
                    {/* Main Loading Overlay */}
                    {isLoading && (
                        <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
                            <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
                                <Loader className="animate-spin" size={24} />
                                <span className="font-medium">Loading map data...</span>
                            </div>
                        </div>
                    )}

                    {/* Search Loading Overlay - appears over the map but under controls */}
                    {isSearching && !isLoading && (
                        <div className="absolute inset-0 bg-white/30 flex items-center justify-center z-30">
                            <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
                                <Loader className="animate-spin" size={32} />
                                <span className="font-medium">Locating address...</span>
                            </div>
                        </div>
                    )}

                    {/* Map Container */}
                    <div ref={mapRef} className="w-full h-full" />

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