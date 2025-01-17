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

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function LocationLatLngMap({ latitude, longitude }) {
    const [map, setMap] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    const customMarker = {
        url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
        scaledSize: { width: 40, height: 40 },
    };

    const mapCenter = {
        lat: parseFloat(latitude) || 0,
        lng: parseFloat(longitude) || 0
    };

    // Handle map load
    const onLoad = (map) => {
        setMap(map);
        setIsLoading(false);
    };

    // Handle map unmount
    const onUnmount = () => {
        setMap(null);
    };

    // Update map center when coordinates change
    useEffect(() => {
        if (map && mapCenter.lat !== 0 && mapCenter.lng !== 0) {
            map.panTo(mapCenter);
        }
    }, [latitude, longitude, map]);

    return (
        <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Where you'll be</h3>
            <div className="relative rounded-lg overflow-hidden">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                    </div>
                )}
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={mapCenter}
                        zoom={15}
                        options={mapOptions}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        {mapCenter.lat !== 0 && mapCenter.lng !== 0 && (
                            <Marker
                                position={mapCenter}
                                icon={customMarker}
                            />
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default LocationLatLngMap;