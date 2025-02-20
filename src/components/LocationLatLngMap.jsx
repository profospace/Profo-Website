// import React from 'react'
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function LocationLatLngMap({ latitude ,longitude}) {
//     const mapContainerStyle = {
//         width: '100%',
//         height: '480px',
//         borderRadius: '12px'
//     };

//     const mapOptions = {
//         disableDefaultUI: true,
//         zoomControl: true,
//         scrollwheel: false,
//         styles: [
//             {
//                 featureType: 'poi',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'transit',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'road',
//                 elementType: 'labels.text',
//                 stylers: [{ visibility: 'on' }]
//             },
//             {
//                 featureType: 'landscape',
//                 elementType: 'all',
//                 stylers: [{ color: '#f5f5f5' }]
//             },
//             {
//                 featureType: 'water',
//                 elementType: 'all',
//                 stylers: [{ color: '#e9e9e9' }]
//             }
//         ]
//     };

//     const customMarker = {
//         url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png", // Use default Google Maps marker or any accessible image URL
//         scaledSize: { width: 40, height: 40 }, // Adjust size for visibility
//     };

//     // Map configuration
//     // const mapCenter = {
//     //     lat: parseFloat(propertyDetail?.latitude) || 0,
//     //     lng: parseFloat(propertyDetail?.longitude) || 0
//     // };
//     const mapCenter = {
//         lat: parseFloat(latitude) || 0,
//         lng: parseFloat(longitude) || 0
//     };


//   return (
//       <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Where you'll be</h3>
//           <div className="relative rounded-lg overflow-hidden">
//               <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
//                   <GoogleMap
//                       mapContainerStyle={mapContainerStyle}
//                       center={mapCenter}
//                       zoom={15}
//                       options={mapOptions}
//                   >
//                       {mapCenter.lat !== 0 && mapCenter.lng !== 0 ? (
//                           <Marker
//                               position={mapCenter}
//                               icon={customMarker} // Use the updated marker icon
//                           />
//                       ) : (
//                           <p className="text-red-500">
//                               Unable to display marker: Invalid coordinates
//                           </p>
//                       )}
//                   </GoogleMap>
//               </LoadScript>
//           </div>
//       </div>
//   )
// }

// export default LocationLatLngMap

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import HeadingCommon from './HeadingCommon';

// function LocationLatLngMap({ latitude, longitude }) {
//     const [map, setMap] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     const mapContainerStyle = {
//         width: '100%',
//         height: '480px',
//         borderRadius: '12px'
//     };

//     const mapOptions = {
//         disableDefaultUI: true,
//         zoomControl: true,
//         scrollwheel: false,
//         styles: [
//             {
//                 featureType: 'poi',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'transit',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'road',
//                 elementType: 'labels.text',
//                 stylers: [{ visibility: 'on' }]
//             },
//             {
//                 featureType: 'landscape',
//                 elementType: 'all',
//                 stylers: [{ color: '#f5f5f5' }]
//             },
//             {
//                 featureType: 'water',
//                 elementType: 'all',
//                 stylers: [{ color: '#e9e9e9' }]
//             }
//         ]
//     };

//     const customMarker = {
//         url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
//         scaledSize: { width: 40, height: 40 },
//     };

//     const mapCenter = {
//         lat: parseFloat(latitude) || 0,
//         lng: parseFloat(longitude) || 0
//     };

//     // Handle map load
//     const onLoad = (map) => {
//         setMap(map);
//         setIsLoading(false);
//     };

//     // Handle map unmount
//     const onUnmount = () => {
//         setMap(null);
//     };

//     // Update map center when coordinates change
//     useEffect(() => {
//         if (map && mapCenter.lat !== 0 && mapCenter.lng !== 0) {
//             map.panTo(mapCenter);
//         }
//     }, [latitude, longitude, map]);

//     return (
//         <div className="container bg-white">
//             {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">Where you'll be</h3> */}
//             <HeadingCommon title={"Where you'll be"} dual />

//             <div className="relative rounded-lg overflow-hidden">
//                 {isLoading && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//                     </div>
//                 )}
//                 <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
//                     <GoogleMap
//                         mapContainerStyle={mapContainerStyle}
//                         center={mapCenter}
//                         zoom={15}
//                         options={mapOptions}
//                         onLoad={onLoad}
//                         onUnmount={onUnmount}
//                     >
//                         {mapCenter.lat !== 0 && mapCenter.lng !== 0 && (
//                             <Marker
//                                 position={mapCenter}
//                                 icon={customMarker}
//                             />
//                         )}
//                     </GoogleMap>
//                 </LoadScript>
//             </div>
//         </div>
//     );
// }

// export default LocationLatLngMap;


// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import HeadingCommon from './HeadingCommon';

// function LocationLatLngMap({ latitude, longitude }) {
//     const [map, setMap] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [markerIcon, setMarkerIcon] = useState(null);

//     const mapContainerStyle = {
//         width: '100%',
//         height: '480px',
//         borderRadius: '12px'
//     };

//     const mapOptions = {
//         disableDefaultUI: true,
//         zoomControl: true,
//         scrollwheel: false,
//         styles: [
//             {
//                 featureType: 'poi',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'transit',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'road',
//                 elementType: 'labels.text',
//                 stylers: [{ visibility: 'on' }]
//             },
//             {
//                 featureType: 'landscape',
//                 elementType: 'all',
//                 stylers: [{ color: '#f5f5f5' }]
//             },
//             {
//                 featureType: 'water',
//                 elementType: 'all',
//                 stylers: [{ color: '#e9e9e9' }]
//             }
//         ]
//     };

//     const mapCenter = {
//         lat: parseFloat(latitude) || 0,
//         lng: parseFloat(longitude) || 0
//     };

//     // Handle map load
//     const onLoad = (map) => {
//         setMap(map);
//         setIsLoading(false);

//         // Create marker icon once Google Maps is loaded
//         if (window.google && !markerIcon) {
//             setMarkerIcon({
//                 url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
//                 scaledSize: new window.google.maps.Size(40, 40)
//             });
//         }
//     };

//     // Handle map unmount
//     const onUnmount = () => {
//         setMap(null);
//         setMarkerIcon(null);
//     };

//     // Update map center when coordinates change
//     useEffect(() => {
//         if (map && mapCenter.lat !== 0 && mapCenter.lng !== 0) {
//             map.panTo(mapCenter);
//         }
//     }, [latitude, longitude, map]);

//     return (
//         <div className="container bg-white">
//             <HeadingCommon title={"Where you'll be"} dual />

//             <div className="relative rounded-lg overflow-hidden">
//                 {isLoading && (
//                     <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//                     </div>
//                 )}
//                 <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
//                     <GoogleMap
//                         mapContainerStyle={mapContainerStyle}
//                         center={mapCenter}
//                         zoom={15}
//                         options={mapOptions}
//                         onLoad={onLoad}
//                         onUnmount={onUnmount}
//                     >
//                         {mapCenter.lat !== 0 && mapCenter.lng !== 0 && markerIcon && (
//                             <Marker
//                                 position={mapCenter}
//                                 icon={markerIcon}
//                             />
//                         )}
//                     </GoogleMap>
//                 </LoadScript>
//             </div>
//         </div>
//     );
// }

// export default LocationLatLngMap;


// import React, { useEffect, useState } from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import HeadingCommon from './HeadingCommon';

// function LocationLatLngMap({ latitude, longitude }) {
//     const [map, setMap] = useState(null);
//     const [markerIcon, setMarkerIcon] = useState(null);

//     const { isLoaded, loadError } = useLoadScript({
//         googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
//     });

//     const mapContainerStyle = {
//         width: '100%',
//         height: '480px',
//         borderRadius: '12px'
//     };

//     const mapOptions = {
//         disableDefaultUI: true,
//         zoomControl: true,
//         scrollwheel: false,
//         styles: [
//             {
//                 featureType: 'poi',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'transit',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             },
//             {
//                 featureType: 'road',
//                 elementType: 'labels.text',
//                 stylers: [{ visibility: 'on' }]
//             },
//             {
//                 featureType: 'landscape',
//                 elementType: 'all',
//                 stylers: [{ color: '#f5f5f5' }]
//             },
//             {
//                 featureType: 'water',
//                 elementType: 'all',
//                 stylers: [{ color: '#e9e9e9' }]
//             }
//         ]
//     };

//     const mapCenter = {
//         lat: parseFloat(latitude) || 0,
//         lng: parseFloat(longitude) || 0
//     };

//     // Handle map load
//     const onLoad = (map) => {
//         setMap(map);

//         // Create marker icon once Google Maps is loaded
//         if (window.google && !markerIcon) {
//             setMarkerIcon({
//                 url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
//                 scaledSize: new window.google.maps.Size(40, 40)
//             });
//         }
//     };

//     // Handle map unmount
//     const onUnmount = () => {
//         setMap(null);
//         setMarkerIcon(null);
//     };

//     // Update map center when coordinates change
//     useEffect(() => {
//         if (map && mapCenter.lat !== 0 && mapCenter.lng !== 0) {
//             map.panTo(mapCenter);
//         }
//     }, [latitude, longitude, map]);

//     if (loadError) {
//         return (
//             <div className="container bg-white p-4">
//                 <HeadingCommon title={"Where you'll be"} dual />
//                 <div className="rounded-lg bg-red-50 p-4 text-red-800">
//                     Error loading map. Please try again later.
//                 </div>
//             </div>
//         );
//     }

//     if (!isLoaded) {
//         return (
//             <div className="container bg-white p-4">
//                 <HeadingCommon title={"Where you'll be"} dual />
//                 <div className="relative rounded-lg overflow-hidden bg-gray-100" style={mapContainerStyle}>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="container bg-white">
//             <HeadingCommon title={"Where you'll be"} dual />

//             <div className="relative rounded-lg overflow-hidden">
//                 <GoogleMap
//                     mapContainerStyle={mapContainerStyle}
//                     center={mapCenter}
//                     zoom={15}
//                     options={mapOptions}
//                     onLoad={onLoad}
//                     onUnmount={onUnmount}
//                 >
//                     {mapCenter.lat !== 0 && mapCenter.lng !== 0 && markerIcon && (
//                         <Marker
//                             position={mapCenter}
//                             icon={markerIcon}
//                         />
//                     )}
//                 </GoogleMap>
//             </div>
//         </div>
//     );
// }

// export default LocationLatLngMap;

import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import HeadingCommon from './HeadingCommon';

const libraries = ['places'];

function LocationLatLngMap({ latitude, longitude }) {
    const [map, setMap] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries,
    });

    const mapContainerStyle = {
        width: '100%',
        height: '480px',
        borderRadius: '12px'
    };

    const mapOptions = {
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text',
                stylers: [{ visibility: 'on' }]
            },
            {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{ color: '#f5f5f5' }]
            },
            {
                featureType: 'water',
                elementType: 'all',
                stylers: [{ color: '#e9e9e9' }]
            }
        ]
    };

    const center = {
        lat: parseFloat(latitude) || 0,
        lng: parseFloat(longitude) || 0
    };

    // Memoize the onLoad callback
    const onLoad = useCallback((map) => {
        setMap(map);
    }, []);

    // Memoize the onUnmount callback
    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    // Update map center when coordinates change
    useEffect(() => {
        if (map && center.lat !== 0 && center.lng !== 0) {
            map.panTo(center);
        }
    }, [latitude, longitude, map, center]);

    if (loadError) {
        return (
            <div className="  ">
                <HeadingCommon title={"Where you'll be"} dual />
                <div className="rounded-sm bg-red-50 p-4 text-red-800">
                    Error loading map. Please try again later.
                </div>
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="  ">
                <HeadingCommon title={"Where you'll be"} textColor='black' />
                <div className="relative rounded-lg overflow-hidden bg-gray-100" style={mapContainerStyle}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className=" ">
            <HeadingCommon title={"Where you'll be"} textColor='black' />
            <div className="relative rounded-sm overflow-hidden">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={mapOptions}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {center.lat !== 0 && center.lng !== 0 && (
                        <Marker
                            position={center}
                        // Using default marker instead of custom icon
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
}

export default LocationLatLngMap;