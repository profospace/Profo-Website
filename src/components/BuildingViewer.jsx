// import React, { useState, useRef, useEffect } from 'react';
// import { Building, Home } from 'lucide-react';
// const BuildingViewer = ({ config }) => {
//     const [hoveredBuilding, setHoveredBuilding] = useState(null);
//     const popupRef = useRef(null);
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setHoveredBuilding(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);
//     if (!config || !config.image) {
//         return (
//             <div className="p-8 text-center text-gray-500">
//                 No building configuration available
//             </div>
//         );
//     }
//     return (
//         <div className="w-full">
//             {/* Project Overview Section */}
//             <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">Project Overview</h2>
//                 <p className="text-gray-600">
//                     Last updated: {new Date(config.metadata.lastModified).toLocaleDateString()}
//                 </p>
//                 <div className="mt-2 text-sm text-gray-500">
//                     Total Buildings: {config.metadata.buildingCount}
//                 </div>
//             </div>
//             {/* Main Viewer */}
//             <div className="relative border rounded-lg overflow-hidden min-h-[500px] bg-gray-50">
//                 <img
//                     src={config.image.src}
//                     alt="Property Map"
//                     className="w-full h-full object-contain"
//                 />

//                 {/* Building Markers */}
//                 {config.buildings?.map((building) => (
//                     <div
//                         key={building.id}
//                         className={`absolute w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300
//               ${hoveredBuilding?.id === building.id
//                                 ? 'bg-blue-500 ring-4 ring-blue-200 scale-110 z-50'
//                                 : 'bg-black/40 hover:bg-blue-500 hover:ring-4 hover:ring-blue-200 hover:scale-110'}
//               text-white text-sm backdrop-blur-sm cursor-pointer`}
//                         style={{
//                             top: `${building.position.y}%`,
//                             left: `${building.position.x}%`,
//                             transform: 'translate(-50%, -50%)',
//                             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                         }}
//                         onMouseEnter={() => setHoveredBuilding(building)}
//                         onMouseLeave={() => setHoveredBuilding(null)}
//                     >
//                         <span className="relative group">
//                             {building.name.charAt(0)}
//                             <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/75 text-white rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
//                                 {building.name}
//                             </span>
//                         </span>
//                     </div>
//                 ))}
//                 {/* Building Information Popup */}
//                 {hoveredBuilding && (
//                     <div
//                         ref={popupRef}
//                         className="absolute top-4 right-4 w-80 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg"
//                     >
//                         <div className="p-4">
//                             <div className="mb-4">
//                                 <h3 className="text-lg font-semibold text-blue-900 mb-2">
//                                     {hoveredBuilding.name}
//                                 </h3>
//                                 <p className="text-sm text-gray-600">
//                                     {hoveredBuilding.description}
//                                 </p>
//                             </div>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {hoveredBuilding.developmentStatus && (
//                                     <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
//                                         {hoveredBuilding.developmentStatus}
//                                     </span>
//                                 )}
//                                 {hoveredBuilding.totalFloors && (
//                                     <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
//                                         {hoveredBuilding.totalFloors} Floors
//                                     </span>
//                                 )}
//                             </div>
//                             {/* Amenities Section */}
//                             {hoveredBuilding.amenities && hoveredBuilding.amenities.length > 0 && (
//                                 <div className="mb-4">
//                                     <h4 className="font-medium text-sm text-gray-700 mb-2">Amenities</h4>
//                                     <div className="flex flex-wrap gap-2">
//                                         {hoveredBuilding.amenities.map((amenity, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
//                                             >
//                                                 {amenity}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {/* Floor Information */}
//                             {hoveredBuilding.flatsDetails && hoveredBuilding.flatsDetails.length > 0 && (
//                                 <div className="mt-4">
//                                     <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
//                                         <Building className="w-4 h-4" />
//                                         Floor Information
//                                     </h4>
//                                     <div className="max-h-48 overflow-y-auto pr-2">
//                                         {hoveredBuilding.flatsDetails.map((floor) => (
//                                             <div
//                                                 key={floor._id || floor.floorNumber}
//                                                 className="flex gap-2 items-center mb-2 p-2 bg-gray-50 rounded hover:bg-gray-100"
//                                             >
//                                                 <div className="flex-1">
//                                                     <div className="text-sm font-medium">Floor {floor.floorNumber}</div>
//                                                     <div className="text-xs text-gray-600 flex items-center gap-2">
//                                                         <span>
//                                                             <Home className="w-3 h-3 inline mr-1" />
//                                                             Total: {floor.flatsOnFloor}
//                                                         </span>
//                                                         <span>|</span>
//                                                         <span className="text-green-600">
//                                                             Available: {floor.availableFlats}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {/* Contact Information */}
//                             {hoveredBuilding.contactNumber && (
//                                 <div className="mt-4 pt-4 border-t border-gray-100">
//                                     <a
//                                         href={`tel:${hoveredBuilding.contactNumber}`}
//                                         className="block w-full py-2 px-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
//                                     >
//                                         Contact: {hoveredBuilding.contactNumber}
//                                     </a>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default BuildingViewer;

// import React, { useState, useRef, useEffect } from 'react';
// import { Building, Home } from 'lucide-react';
// const BuildingViewer = ({ config }) => {
//     const [hoveredBuilding, setHoveredBuilding] = useState(null);
//     const popupRef = useRef(null);
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setHoveredBuilding(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);
//     if (!config || !config.image) {
//         return (
//             <div className="p-8 text-center text-gray-500">
//                 No building configuration available
//             </div>
//         );
//     }
//     return (
//         <div className="w-full">
//             {/* Project Overview Section */}
//             <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">Project Overview</h2>
//                 <p className="text-gray-600">
//                     Last updated: {new Date(config.metadata.lastModified).toLocaleDateString()}
//                 </p>
//                 <div className="mt-2 text-sm text-gray-500">
//                     Total Buildings: {config.metadata.buildingCount}
//                 </div>
//             </div>
//             {/* Main Viewer */}
//             <div className="relative border rounded-lg overflow-hidden min-h-[500px] bg-gray-50">
//                 <img
//                     src={config.image.src}
//                     alt="Property Map"
//                     className="w-full h-full object-contain"
//                 />

//                 {/* Building Markers */}
//                 {config.buildings?.map((building) => (
//                     <div
//                         key={building.id}
//                         className="absolute group"
//                         style={{
//                             top: `${building.position.y}%`,
//                             left: `${building.position.x}%`,
//                             transform: 'translate(-50%, -50%)',
//                         }}
//                         onMouseEnter={() => setHoveredBuilding(building)}
//                         onMouseLeave={() => setHoveredBuilding(null)}
//                     >
//                         {/* Main Building Marker */}
//                         <div
//                             className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
//                 ${hoveredBuilding?.id === building.id
//                                     ? 'bg-blue-500 ring-4 ring-blue-200 scale-125'
//                                     : 'bg-black/40 group-hover:bg-blue-500 group-hover:ring-4 group-hover:ring-blue-200 group-hover:scale-125'}
//                 text-white text-sm backdrop-blur-sm cursor-pointer`}
//                             style={{
//                                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                             }}
//                         >
//                             {building.name.charAt(0)}
//                         </div>
//                         {/* Building Name Tooltip */}
//                         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
//                           opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
//                             <div className="px-2 py-1 text-xs bg-black/75 text-white rounded whitespace-nowrap">
//                                 {building.name}
//                             </div>
//                         </div>
//                         {/* Building Highlight Circle */}
//                         <div className={`absolute inset-[-8px] rounded-full border-2 transition-all duration-300
//               ${hoveredBuilding?.id === building.id
//                                 ? 'border-blue-400 scale-125 opacity-100'
//                                 : 'border-transparent scale-100 opacity-0 group-hover:border-blue-400 group-hover:scale-125 group-hover:opacity-100'}`}
//                         />
//                     </div>
//                 ))}
//                 {/* Building Information Popup */}
//                 {hoveredBuilding && (
//                     <div
//                         ref={popupRef}
//                         className="absolute top-4 right-4 w-80 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg"
//                     >
//                         <div className="p-4">
//                             <div className="mb-4">
//                                 <h3 className="text-lg font-semibold text-blue-900 mb-2">
//                                     {hoveredBuilding.name}
//                                 </h3>
//                                 <p className="text-sm text-gray-600">
//                                     {hoveredBuilding.description}
//                                 </p>
//                             </div>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {hoveredBuilding.developmentStatus && (
//                                     <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
//                                         {hoveredBuilding.developmentStatus}
//                                     </span>
//                                 )}
//                                 {hoveredBuilding.totalFloors && (
//                                     <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
//                                         {hoveredBuilding.totalFloors} Floors
//                                     </span>
//                                 )}
//                             </div>
//                             {/* Amenities Section */}
//                             {hoveredBuilding.amenities && hoveredBuilding.amenities.length > 0 && (
//                                 <div className="mb-4">
//                                     <h4 className="font-medium text-sm text-gray-700 mb-2">Amenities</h4>
//                                     <div className="flex flex-wrap gap-2">
//                                         {hoveredBuilding.amenities.map((amenity, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
//                                             >
//                                                 {amenity}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {/* Floor Information */}
//                             {hoveredBuilding.flatsDetails && hoveredBuilding.flatsDetails.length > 0 && (
//                                 <div className="mt-4">
//                                     <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
//                                         <Building className="w-4 h-4" />
//                                         Floor Information
//                                     </h4>
//                                     <div className="max-h-48 overflow-y-auto pr-2">
//                                         {hoveredBuilding.flatsDetails.map((floor) => (
//                                             <div
//                                                 key={floor._id || floor.floorNumber}
//                                                 className="flex gap-2 items-center mb-2 p-2 bg-gray-50 rounded hover:bg-gray-100"
//                                             >
//                                                 <div className="flex-1">
//                                                     <div className="text-sm font-medium">Floor {floor.floorNumber}</div>
//                                                     <div className="text-xs text-gray-600 flex items-center gap-2">
//                                                         <span>
//                                                             <Home className="w-3 h-3 inline mr-1" />
//                                                             Total: {floor.flatsOnFloor}
//                                                         </span>
//                                                         <span>|</span>
//                                                         <span className="text-green-600">
//                                                             Available: {floor.availableFlats}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {/* Contact Information */}
//                             {hoveredBuilding.contactNumber && (
//                                 <div className="mt-4 pt-4 border-t border-gray-100">
//                                     <a
//                                         href={`tel:${hoveredBuilding.contactNumber}`}
//                                         className="block w-full py-2 px-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
//                                     >
//                                         Contact: {hoveredBuilding.contactNumber}
//                                     </a>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default BuildingViewer;

// import React, { useState, useRef, useEffect } from 'react';
// import { Building, Home } from 'lucide-react';
// const BuildingViewer = ({ config }) => {
//     const [hoveredBuilding, setHoveredBuilding] = useState(null);
//     const popupRef = useRef(null);
//     const canvasRef = useRef(null);
//     const imageRef = useRef(null);
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setHoveredBuilding(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);
//     useEffect(() => {
//         if (imageRef.current && canvasRef.current) {
//             const canvas = canvasRef.current;
//             canvas.width = imageRef.current.width;
//             canvas.height = imageRef.current.height;
//             drawHighlight();
//         }
//     }, [hoveredBuilding, config]);
//     const drawHighlight = () => {
//         if (!canvasRef.current || !config?.buildings) return;
//         const ctx = canvasRef.current.getContext('2d');
//         ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//         config.buildings.forEach(building => {
//             if (building.id === hoveredBuilding?.id) {
//                 ctx.strokeStyle = '#3B82F6';
//                 ctx.lineWidth = 3;
//                 ctx.setLineDash([5, 5]);
//                 if (building.selectionType === 'rect' && building.area) {
//                     ctx.strokeRect(
//                         building.area.x * canvasRef.current.width,
//                         building.area.y * canvasRef.current.height,
//                         building.area.width * canvasRef.current.width,
//                         building.area.height * canvasRef.current.height
//                     );
//                 } else if (building.selectionType === 'lasso' && building.path) {
//                     ctx.beginPath();
//                     building.path.forEach((point, index) => {
//                         if (index === 0) {
//                             ctx.moveTo(
//                                 point.x * canvasRef.current.width,
//                                 point.y * canvasRef.current.height
//                             );
//                         } else {
//                             ctx.lineTo(
//                                 point.x * canvasRef.current.width,
//                                 point.y * canvasRef.current.height
//                             );
//                         }
//                     });
//                     ctx.closePath();
//                     ctx.stroke();
//                 }
//                 ctx.setLineDash([]);
//             }
//         });
//     };
//     if (!config || !config.image) {
//         return (
//             <div className="p-8 text-center text-gray-500">
//                 No building configuration available
//             </div>
//         );
//     }
//     return (
//         <div className="w-full">
//             <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                     Project Overview
//                 </h2>
//                 <p className="text-gray-600">
//                     Last updated: {new Date(config.metadata.lastModified).toLocaleDateString()}
//                 </p>
//                 <div className="mt-2 text-sm text-gray-500">
//                     Total Buildings: {config.metadata.buildingCount}
//                 </div>
//             </div>
//             <div className="relative border rounded-lg overflow-hidden min-h-[500px] bg-gray-50">
//                 <img
//                     ref={imageRef}
//                     src={config.image.src}
//                     alt="Property Map"
//                     className="w-full h-full object-contain"
//                 />
//                 <canvas
//                     ref={canvasRef}
//                     className="absolute top-0 left-0 w-full h-full pointer-events-none"
//                 />
//                 {config.buildings?.map((building) => (
//                     <div
//                         key={building.id}
//                         className="absolute group"
//                         style={{
//                             top: `${building.position.y * 100}%`,
//                             left: `${building.position.x * 100}%`,
//                             transform: 'translate(-50%, -50%)',
//                         }}
//                         onMouseEnter={() => setHoveredBuilding(building)}
//                         onMouseLeave={() => setHoveredBuilding(null)}
//                     >
//                         <div
//                             className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
//                                 ${hoveredBuilding?.id === building.id
//                                     ? 'bg-blue-500 ring-4 ring-blue-200 scale-125'
//                                     : 'bg-black/40 group-hover:bg-blue-500 group-hover:ring-4 group-hover:ring-blue-200 group-hover:scale-125'}
//                                 text-white text-sm backdrop-blur-sm cursor-pointer`}
//                         >
//                             {building.name.charAt(0)}
//                         </div>
//                         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
//                                     opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
//                             <div className="px-2 py-1 text-xs bg-black/75 text-white rounded whitespace-nowrap">
//                                 {building.name}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 {hoveredBuilding && (
//                     <div
//                         ref={popupRef}
//                         className="absolute top-4 right-4 w-80 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg"
//                     >
//                         <div className="p-4">
//                             <div className="mb-4">
//                                 <h3 className="text-lg font-semibold text-blue-900 mb-2">
//                                     {hoveredBuilding.name}
//                                 </h3>
//                                 <p className="text-sm text-gray-600">
//                                     {hoveredBuilding.description}
//                                 </p>
//                             </div>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {hoveredBuilding.developmentStatus && (
//                                     <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
//                                         {hoveredBuilding.developmentStatus}
//                                     </span>
//                                 )}
//                                 {hoveredBuilding.totalFloors && (
//                                     <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
//                                         {hoveredBuilding.totalFloors} Floors
//                                     </span>
//                                 )}
//                             </div>
//                             {hoveredBuilding.amenities && hoveredBuilding.amenities.length > 0 && (
//                                 <div className="mb-4">
//                                     <h4 className="font-medium text-sm text-gray-700 mb-2">Amenities</h4>
//                                     <div className="flex flex-wrap gap-2">
//                                         {hoveredBuilding.amenities.map((amenity, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
//                                             >
//                                                 {amenity}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {hoveredBuilding.flatsDetails && hoveredBuilding.flatsDetails.length > 0 && (
//                                 <div className="mt-4">
//                                     <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
//                                         <Building className="w-4 h-4" />
//                                         Floor Information
//                                     </h4>
//                                     <div className="max-h-48 overflow-y-auto pr-2">
//                                         {hoveredBuilding.flatsDetails.map((floor) => (
//                                             <div
//                                                 key={floor._id || floor.floorNumber}
//                                                 className="flex gap-2 items-center mb-2 p-2 bg-gray-50 rounded hover:bg-gray-100"
//                                             >
//                                                 <div className="flex-1">
//                                                     <div className="text-sm font-medium">
//                                                         Floor {floor.floorNumber}
//                                                     </div>
//                                                     <div className="text-xs text-gray-600 flex items-center gap-2">
//                                                         <span>
//                                                             <Home className="w-3 h-3 inline mr-1" />
//                                                             Total: {floor.flatsOnFloor}
//                                                         </span>
//                                                         <span>|</span>
//                                                         <span className="text-green-600">
//                                                             Available: {floor.availableFlats}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {hoveredBuilding.contactNumber && (
//                                 <div className="mt-4 pt-4 border-t border-gray-100">
//                                     <a
//                                         href={`tel:${hoveredBuilding.contactNumber}`}
//                                         className="block w-full py-2 px-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
//                                     >
//                                         Contact: {hoveredBuilding.contactNumber}
//                                     </a>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default BuildingViewer;

// import React, { useState, useRef, useEffect } from 'react';
// import { Building, Home } from 'lucide-react';
// const BuildingViewer = ({ config }) => {
//     const [hoveredBuilding, setHoveredBuilding] = useState(null);
//     const popupRef = useRef(null);
//     const canvasRef = useRef(null);
//     const imageRef = useRef(null);
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setHoveredBuilding(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);
//     useEffect(() => {
//         if (imageRef.current && canvasRef.current) {
//             const canvas = canvasRef.current;
//             canvas.width = imageRef.current.width;
//             canvas.height = imageRef.current.height;
//             drawHighlight();
//         }
//     }, [hoveredBuilding, config]);
//     const drawHighlight = () => {
//         if (!canvasRef.current || !config?.buildings) return;
//         const ctx = canvasRef.current.getContext('2d');
//         ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//         config.buildings.forEach(building => {
//             if (building.id === hoveredBuilding?.id) {
//                 // First draw the fill
//                 ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
//                 ctx.strokeStyle = 'rgba(0,0,0,0)';
//                 ctx.lineWidth = 3;
//                 if (building.selectionType === 'rect' && building.area) {
//                     // Fill the rectangle
//                     ctx.fillRect(
//                         building.area.x * canvasRef.current.width,
//                         building.area.y * canvasRef.current.height,
//                         building.area.width * canvasRef.current.width,
//                         building.area.height * canvasRef.current.height
//                     );

//                     // Draw the dashed stroke
//                     // ctx.setLineDash([5, 5]);
//                     ctx.strokeRect(
//                         building.area.x * canvasRef.current.width,
//                         building.area.y * canvasRef.current.height,
//                         building.area.width * canvasRef.current.width,
//                         building.area.height * canvasRef.current.height
//                     );
//                 } else if (building.selectionType === 'lasso' && building.path) {
//                     ctx.beginPath();
//                     building.path.forEach((point, index) => {
//                         if (index === 0) {
//                             ctx.moveTo(
//                                 point.x * canvasRef.current.width,
//                                 point.y * canvasRef.current.height
//                             );
//                         } else {
//                             ctx.lineTo(
//                                 point.x * canvasRef.current.width,
//                                 point.y * canvasRef.current.height
//                             );
//                         }
//                     });
//                     ctx.closePath();

//                     // Fill the path
//                     ctx.fill();

//                     // Draw the dashed stroke
//                     ctx.setLineDash([5, 5]);
//                     ctx.stroke();
//                 }
//                 ctx.setLineDash([]);
//             }
//         });
//     };
//     if (!config || !config.image) {
//         return (
//             <div className="p-8 text-center text-gray-500">
//                 No building configuration available
//             </div>
//         );
//     }
//     return (
//         <div className="w-full">
//             <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                     Project Overview
//                 </h2>
//                 <p className="text-gray-600">
//                     Last updated: {new Date(config.metadata.lastModified).toLocaleDateString()}
//                 </p>
//                 <div className="mt-2 text-sm text-gray-500">
//                     Total Buildings: {config.metadata.buildingCount}
//                 </div>
//             </div>
//             <div className="relative border rounded-lg overflow-hidden">
//                 <img
//                     ref={imageRef}
//                     src={config.image.src}
//                     alt="Property Map"
//                     className="w-full h-full object-contain"
//                 />

//                 <canvas
//                     ref={canvasRef}
//                     className="absolute top-0 left-0 w-full h-full pointer-events-none"
//                 />
//                 {config.buildings?.map((building) => (
//                     <div
//                         key={building.id}
//                         className="absolute group"
//                         style={{
//                             top: `${building.position.y * 100}%`,
//                             left: `${building.position.x * 100}%`,
//                             transform: 'translate(-50%, -50%)',
//                         }}
//                         onMouseEnter={() => setHoveredBuilding(building)}
//                         onMouseLeave={() => setHoveredBuilding(null)}
//                     >
//                         <div
//                             className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
//                                 ${hoveredBuilding?.id === building.id
//                                     ? 'bg-blue-500 ring-4 ring-blue-200 scale-125'
//                                     : 'bg-black/40 group-hover:bg-blue-500 group-hover:ring-4 group-hover:ring-blue-200 group-hover:scale-125'}
//                                 text-white text-sm backdrop-blur-sm cursor-pointer`}
//                         >
//                             {building.name.charAt(0)}
//                         </div>
//                         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
//                                     opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
//                             <div className="px-2 py-1 text-xs bg-black/75 text-white rounded whitespace-nowrap">
//                                 {building.name}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 {hoveredBuilding && (
//                     <div
//                         ref={popupRef}
//                         className="absolute top-4 right-4 w-80 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg"
//                     >
//                         <div className="p-4">
//                             <div className="mb-4">
//                                 <h3 className="text-lg font-semibold text-blue-900 mb-2">
//                                     {hoveredBuilding.name}
//                                 </h3>
//                                 <p className="text-sm text-gray-600">
//                                     {hoveredBuilding.description}
//                                 </p>
//                             </div>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {hoveredBuilding.developmentStatus && (
//                                     <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
//                                         {hoveredBuilding.developmentStatus}
//                                     </span>
//                                 )}
//                                 {hoveredBuilding.totalFloors && (
//                                     <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
//                                         {hoveredBuilding.totalFloors} Floors
//                                     </span>
//                                 )}
//                             </div>
//                             {hoveredBuilding.amenities && hoveredBuilding.amenities.length > 0 && (
//                                 <div className="mb-4">
//                                     <h4 className="font-medium text-sm text-gray-700 mb-2">Amenities</h4>
//                                     <div className="flex flex-wrap gap-2">
//                                         {hoveredBuilding.amenities.map((amenity, index) => (
//                                             <span
//                                                 key={index}
//                                                 className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
//                                             >
//                                                 {amenity}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {hoveredBuilding.flatsDetails && hoveredBuilding.flatsDetails.length > 0 && (
//                                 <div className="mt-4">
//                                     <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
//                                         <Building className="w-4 h-4" />
//                                         Floor Information
//                                     </h4>
//                                     <div className="max-h-48 overflow-y-auto pr-2">
//                                         {hoveredBuilding.flatsDetails.map((floor) => (
//                                             <div
//                                                 key={floor._id || floor.floorNumber}
//                                                 className="flex gap-2 items-center mb-2 p-2 bg-gray-50 rounded hover:bg-gray-100"
//                                             >
//                                                 <div className="flex-1">
//                                                     <div className="text-sm font-medium">
//                                                         Floor {floor.floorNumber}
//                                                     </div>
//                                                     <div className="text-xs text-gray-600 flex items-center gap-2">
//                                                         <span>
//                                                             <Home className="w-3 h-3 inline mr-1" />
//                                                             Total: {floor.flatsOnFloor}
//                                                         </span>
//                                                         <span>|</span>
//                                                         <span className="text-green-600">
//                                                             Available: {floor.availableFlats}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                             {hoveredBuilding.contactNumber && (
//                                 <div className="mt-4 pt-4 border-t border-gray-100">
//                                     <a
//                                         href={`tel:${hoveredBuilding.contactNumber}`}
//                                         className="block w-full py-2 px-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
//                                     >
//                                         Contact: {hoveredBuilding.contactNumber}
//                                     </a>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default BuildingViewer;


// import React, { useState, useRef, useEffect } from 'react';
// import { Building, Home } from 'lucide-react';

// const BuildingViewer = ({ config }) => {
//     const [hoveredBuilding, setHoveredBuilding] = useState(null);
//     const popupRef = useRef(null);
//     const canvasRef = useRef(null);
//     const imageRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setHoveredBuilding(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     useEffect(() => {
//         if (imageRef.current && canvasRef.current) {
//             const canvas = canvasRef.current;
//             canvas.width = imageRef.current.width;
//             canvas.height = imageRef.current.height;
//             drawHighlight();
//         }
//     }, [hoveredBuilding, config]);

//     const drawHighlight = () => {
//         if (!canvasRef.current || !config?.buildings) return;
//         const ctx = canvasRef.current.getContext('2d');
//         ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//         config.buildings.forEach(building => {
//             if (building.id === hoveredBuilding?.id) {
//                 ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
//                 ctx.strokeStyle = 'rgba(0,0,0,0)';
//                 ctx.lineWidth = 3;
//                 if (building.selectionType === 'rect' && building.area) {
//                     ctx.fillRect(
//                         building.area.x * canvasRef.current.width,
//                         building.area.y * canvasRef.current.height,
//                         building.area.width * canvasRef.current.width,
//                         building.area.height * canvasRef.current.height
//                     );
//                     ctx.strokeRect(
//                         building.area.x * canvasRef.current.width,
//                         building.area.y * canvasRef.current.height,
//                         building.area.width * canvasRef.current.width,
//                         building.area.height * canvasRef.current.height
//                     );
//                 } else if (building.selectionType === 'lasso' && building.path) {
//                     ctx.beginPath();
//                     building.path.forEach((point, index) => {
//                         if (index === 0) {
//                             ctx.moveTo(
//                                 point.x * canvasRef.current.width,
//                                 point.y * canvasRef.current.height
//                             );
//                         } else {
//                             ctx.lineTo(
//                                 point.x * canvasRef.current.width,
//                                 point.y * canvasRef.current.height
//                             );
//                         }
//                     });
//                     ctx.closePath();
//                     ctx.fill();
//                     ctx.stroke();
//                 }
//             }
//         });
//     };

//     if (!config || !config.image) {
//         return (
//             <div className="p-8 text-center text-gray-500">
//                 No building configuration available
//             </div>
//         );
//     }

//     return (
//         <div className="w-full">
//             <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                     Project Overview
//                 </h2>
//                 <p className="text-gray-600">
//                     Last updated: {new Date(config.metadata.lastModified).toLocaleDateString()}
//                 </p>
//                 <div className="mt-2 text-sm text-gray-500">
//                     Total Buildings: {config.metadata.buildingCount}
//                 </div>
//             </div>
//             <div className="relative border rounded-lg overflow-hidden">
//                 <img
//                     ref={imageRef}
//                     src={config.image.src}
//                     alt="Property Map"
//                     className="w-full h-full object-contain"
//                 />
//                 <canvas
//                     ref={canvasRef}
//                     className="absolute top-0 left-0 w-full h-full pointer-events-none"
//                 />
//                 {config.buildings?.map((building) => (
//                     <div
//                         key={building.id}
//                         className="absolute"
//                         style={{
//                             top: `${building.position.y * 100}%`,
//                             left: `${building.position.x * 100}%`,
//                         }}
//                     >
//                         <div
//                             className="relative"
//                             onMouseEnter={() => setHoveredBuilding(building)}
//                             onMouseLeave={() => setHoveredBuilding(null)}
//                         >
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
//                                 ${hoveredBuilding?.id === building.id
//                                     ? 'bg-white ring-4 ring-blue-500'
//                                     : 'bg-white ring-2 ring-gray-300 hover:ring-blue-500'}`}
//                             >
//                                 {building.name.charAt(0)}
//                             </div>
//                             {hoveredBuilding?.id === building.id && (
//                                 <div className="absolute z-10 bg-white rounded-lg shadow-lg p-3 w-64 -translate-x-1/2 -translate-y-full -mt-2">
//                                     <div className="text-lg font-bold mb-1">{building.name}</div>
//                                     <div className="text-sm text-gray-600 mb-2">
//                                         {building.developmentStatus && (
//                                             <div>{building.developmentStatus} • {building.totalFloors} floors</div>
//                                         )}
//                                     </div>
//                                     {building.price && (
//                                         <div className="text-sm">
//                                             from {building.price.toLocaleString()} ₽
//                                         </div>
//                                     )}
//                                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//                                         <div className="w-3 h-3 bg-white rotate-45 transform"></div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BuildingViewer;

import React, { useState, useRef, useEffect } from 'react';
import { Building, Home } from 'lucide-react';

const BuildingViewer = ({ config }) => {
    const [hoveredBuilding, setHoveredBuilding] = useState(null);
    const popupRef = useRef(null);
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setHoveredBuilding(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (imageRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.width = imageRef.current.width;
            canvas.height = imageRef.current.height;
            drawHighlight();
        }
    }, [hoveredBuilding, config]);

    const drawHighlight = () => {
        if (!canvasRef.current || !config?.buildings) return;
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        config.buildings.forEach(building => {
            if (building.id === hoveredBuilding?.id) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.strokeStyle = 'rgba(0,0,0,0)';
                ctx.lineWidth = 3;
                if (building.selectionType === 'rect' && building.area) {
                    ctx.fillRect(
                        building.area.x * canvasRef.current.width,
                        building.area.y * canvasRef.current.height,
                        building.area.width * canvasRef.current.width,
                        building.area.height * canvasRef.current.height
                    );
                    ctx.strokeRect(
                        building.area.x * canvasRef.current.width,
                        building.area.y * canvasRef.current.height,
                        building.area.width * canvasRef.current.width,
                        building.area.height * canvasRef.current.height
                    );
                } else if (building.selectionType === 'lasso' && building.path) {
                    ctx.beginPath();
                    building.path.forEach((point, index) => {
                        if (index === 0) {
                            ctx.moveTo(
                                point.x * canvasRef.current.width,
                                point.y * canvasRef.current.height
                            );
                        } else {
                            ctx.lineTo(
                                point.x * canvasRef.current.width,
                                point.y * canvasRef.current.height
                            );
                        }
                    });
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                }
            }
        });
    };

    if (!config || !config.image) {
        return (
            <div className="p-8 text-center text-gray-500">
                No building configuration available
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Project Overview
                </h2>
                <p className="text-gray-600">
                    Last updated: {new Date(config.metadata.lastModified).toLocaleDateString()}
                </p>
                <div className="mt-2 text-sm text-gray-500">
                    Total Buildings: {config.metadata.buildingCount}
                </div>
            </div>
            <div className="relative border rounded-lg overflow-hidden">
                <img
                    ref={imageRef}
                    src={config.image.src}
                    alt="Property Map"
                    className="w-full h-full object-contain"
                />
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />
                {config.buildings?.map((building) => (
                    <div
                        key={building.id}
                        className="absolute"
                        style={{
                            top: `${building.position.y * 100}%`,
                            left: `${building.position.x * 100}%`,
                        }}
                    >
                        <div
                            className="relative"
                            onMouseEnter={() => setHoveredBuilding(building)}
                            onMouseLeave={() => setHoveredBuilding(null)}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                                ${hoveredBuilding?.id === building.id
                                    ? 'bg-white ring-4 ring-blue-500'
                                    : 'bg-white ring-2 ring-gray-300 hover:ring-blue-500'}`}
                            >
                                {building.name.charAt(0)}
                            </div>
                            {hoveredBuilding?.id === building.id && (
                                <div className="absolute z-10 bg-white rounded-lg shadow-lg p-3 w-64 -translate-x-1/2 mt-2">
                                    <div className="absolute top-0 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-3 h-3 bg-white rotate-45 transform"></div>
                                    </div>
                                    <div className="text-lg font-bold mb-1">{building.name}</div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {building.developmentStatus && (
                                            <div>{building.developmentStatus} • {building.totalFloors} floors</div>
                                        )}
                                    </div>
                                    {building.price && (
                                        <div className="text-sm">
                                            from {building.price.toLocaleString()} ₽
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuildingViewer;