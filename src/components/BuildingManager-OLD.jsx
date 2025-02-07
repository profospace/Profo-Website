// import React, { useState, useRef, useEffect } from 'react';
// import { Upload, Trash2, Download, Building, Home, X } from 'lucide-react';
// import { project_upload_url } from '../utils/base_url';
// const BuildingManager = () => {
//     const [images, setImages] = useState([]);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [buildings, setBuildings] = useState({});
//     const [selectedBuilding, setSelectedBuilding] = useState(null);
//     const [buildingData, setBuildingData] = useState(null);
//     const [exportStatus, setExportStatus] = useState(null);
//     const [showInstructions, setShowInstructions] = useState(true);
//     const imageRef = useRef(null);
//     const popupRef = useRef(null);
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setSelectedBuilding(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);
//     const handleDataImport = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 try {
//                     const data = JSON.parse(e.target.result);
//                     if (!data.name || !data.totalFloors) {
//                         throw new Error('Invalid building data format');
//                     }
//                     setBuildingData(data);
//                     setExportStatus({ type: 'success', message: 'Building data imported successfully' });
//                 } catch (error) {
//                     setExportStatus({ type: 'error', message: 'Failed to import building data' });
//                     console.error('Error parsing JSON:', error);
//                 }
//             };
//             reader.readAsText(file);
//         }
//     };
    
//     const handleImageUpload = async (event) => {
//         const files = Array.from(event.target.files);
//         const validFiles = files.filter(file => file.type.startsWith('image/'));

//         for (const file of validFiles) {
//             // Create form data
//             const formData = new FormData();
//             formData.append('image', file);

//             try {
//                 // Upload to your server
//                 const response = await fetch(`${project_upload_url}/profo/image/upload`, {
//                     method: 'POST',
//                     body: formData
//                 });
//                 console.log(response)
//                 const { imageUrl } = await response.json();

//                 // Add to images state with the URL
//                 const newImage = {
//                     id: Date.now() + Math.random(),
//                     src: imageUrl,  // Use the URL from your server
//                     name: file.name,
//                     uploadedAt: new Date().toISOString()
//                 };
//                 setImages(prev => [...prev, newImage]);
//                 setBuildings(prev => ({ ...prev, [newImage.id]: [] }));
//             } catch (error) {
//                 console.error('Upload failed:', error);
//                 setExportStatus({ type: 'error', message: 'Image upload failed' });
//             }
//         }
//     };

//     const handleImageClick = (event) => {
//         if (!selectedImage) return;

//         const rect = imageRef.current.getBoundingClientRect();
//         const x = ((event.clientX - rect.left) / rect.width) * 100;
//         const y = ((event.clientY - rect.top) / rect.height) * 100;

//         const newBuilding = {
//             id: Date.now(),
//             position: { top: `${y}%`, left: `${x}%` },
//             name: buildingData?.name || 'New Building',
//             totalFloors: buildingData?.totalFloors || 10,
//             flatsDetails: buildingData?.flatsDetails || [],
//             description: buildingData?.description || '',
//             amenities: buildingData?.amenities || [],
//             contactNumber: buildingData?.contactNumber || '',
//             developmentStatus: buildingData?.developmentStatus || 'planning',
//             createdAt: new Date().toISOString()
//         };
//         setBuildings(prev => ({
//             ...prev,
//             [selectedImage.id]: [...(prev[selectedImage.id] || []), newBuilding]
//         }));
//         setSelectedBuilding(null);
//     };
//     const handleExport = async () => {
//         if (!selectedImage || !buildings[selectedImage.id]) {
//             setExportStatus({ type: 'error', message: 'No data to export' });
//             return;
//         }
//         // Here you would typically upload the image to your server/storage
//         // and get back a URL. For this example, we'll use the existing src
//         const imageSrc = selectedImage.src;
//         // In practice, you would do something like:
//         /*
//         const formData = new FormData();
//         formData.append('image', selectedImage.file);
//         const response = await fetch('/api/upload', {
//           method: 'POST',
//           body: formData
//         });
//         const { imageUrl } = await response.json();
//         */
//         // Transform the buildings data to match viewer expectations
//         const transformedBuildings = buildings[selectedImage.id].map(building => {
//             // Extract x and y positions from left/top percentages
//             const x = parseFloat(building.position.left.replace('%', ''));
//             const y = parseFloat(building.position.top.replace('%', ''));

//             return {
//                 id: building.id,
//                 name: building.name,
//                 position: { x, y },
//                 description: building.description || '',
//                 totalFloors: building.totalFloors || 0,
//                 flatsDetails: building.flatsDetails || [],
//                 amenities: building.amenities || [],
//                 contactNumber: building.contactNumber || '',
//                 developmentStatus: building.developmentStatus || 'planning'
//             };
//         });
//         const config = {
//             version: '1.0',
//             exportedAt: new Date().toISOString(),
//             image: {
//                 src: imageSrc
//             },
//             buildings: transformedBuildings,
//             metadata: {
//                 buildingCount: transformedBuildings.length,
//                 lastModified: new Date().toISOString()
//             }
//         };
//         try {
//             const jsonString = JSON.stringify(config, null, 2);
//             const blob = new Blob([jsonString], { type: 'application/json' });
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = `building-config-${Date.now()}.json`;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url);
//             setExportStatus({ type: 'success', message: 'Configuration exported successfully' });
//         } catch (error) {
//             setExportStatus({ type: 'error', message: 'Failed to export configuration' });
//             console.error('Export failed:', error);
//         }
//     };
//     const handleClosePopup = (e) => {
//         e.stopPropagation();
//         setSelectedBuilding(null);
//     };
//     return (
//         <div className="p-4 flex flex-col gap-4">
//             {exportStatus && (
//                 <div className={`p-4 mb-4 rounded-lg ${exportStatus.type === 'error' ? 'bg-red-50' : 'bg-green-50'}`}>
//                     <p className={`${exportStatus.type === 'error' ? 'text-red-800' : 'text-green-800'}`}>
//                         {exportStatus.message}
//                     </p>
//                 </div>
//             )}
//             <div className="flex gap-4">
//                 <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
//                     <label className="cursor-pointer flex flex-col items-center gap-2">
//                         <Upload className="w-8 h-8 text-gray-500" />
//                         <span className="text-sm text-gray-600">Upload Images</span>
//                         <input
//                             type="file"
//                             multiple
//                             accept="image/*"
//                             className="hidden"
//                             onChange={handleImageUpload}
//                         />
//                     </label>
//                 </div>
//                 <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
//                     <label className="cursor-pointer flex flex-col items-center gap-2">
//                         <Upload className="w-8 h-8 text-gray-500" />
//                         <span className="text-sm text-gray-600">Import Data (JSON)</span>
//                         <input
//                             type="file"
//                             accept="application/json"
//                             className="hidden"
//                             onChange={handleDataImport}
//                         />
//                     </label>
//                 </div>
//             </div>
//             <div className="flex flex-wrap gap-4">
//                 {images.map(image => (
//                     <div
//                         key={image.id}
//                         className={`relative border rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200
//               ${selectedImage?.id === image.id ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'}`}
//                         onClick={() => {
//                             setSelectedImage(image);
//                             setSelectedBuilding(null);
//                         }}
//                     >
//                         <img
//                             src={image.src}
//                             alt={image.name}
//                             className="w-32 h-32 object-cover"
//                         />
//                         <button
//                             className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity"
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 setImages(prev => prev.filter(img => img.id !== image.id));
//                                 setBuildings(prev => {
//                                     const newBuildings = { ...prev };
//                                     delete newBuildings[image.id];
//                                     return newBuildings;
//                                 });
//                                 if (selectedImage?.id === image.id) {
//                                     setSelectedImage(null);
//                                     setSelectedBuilding(null);
//                                 }
//                             }}
//                         >
//                             <Trash2 className="w-4 h-4" />
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             {selectedImage && (
//                 <div className="relative border rounded-lg overflow-hidden min-h-[400px] bg-gray-50">
//                     <img
//                         ref={imageRef}
//                         src={selectedImage.src}
//                         alt={selectedImage.name}
//                         className="w-full h-full object-contain"
//                         onClick={handleImageClick}
//                     />

//                     {buildings[selectedImage.id]?.map((building) => (
//                         <button
//                             key={building.id}
//                             className={`absolute w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300
//                 ${selectedBuilding?.id === building.id
//                                     ? 'bg-blue-500 ring-4 ring-blue-200 scale-110'
//                                     : 'bg-black/40 hover:bg-blue-500 hover:ring-4 hover:ring-blue-200 hover:scale-110'}
//                 text-white text-sm backdrop-blur-sm`}
//                             style={{
//                                 top: building.position.top,
//                                 left: building.position.left,
//                                 transform: 'translate(-50%, -50%)',
//                                 cursor: 'pointer',
//                                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                             }}
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 setSelectedBuilding(selectedBuilding?.id === building.id ? null : building);
//                             }}
//                         >
//                             {building.id}
//                         </button>
//                     ))}
//                     {selectedBuilding && (
//                         <div
//                             ref={popupRef}
//                             className="absolute top-4 right-4 w-80 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg"
//                         >
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start mb-4">
//                                     <h3 className="text-lg font-semibold text-blue-900">
//                                         {selectedBuilding.name}
//                                     </h3>
//                                     <button
//                                         onClick={handleClosePopup}
//                                         className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//                                     >
//                                         <X className="w-4 h-4 text-gray-500" />
//                                     </button>
//                                 </div>
//                                 <div className="flex gap-2 mb-4">
//                                     {selectedBuilding.developmentStatus && (
//                                         <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
//                                             {selectedBuilding.developmentStatus}
//                                         </span>
//                                     )}
//                                     {selectedBuilding.totalFloors && (
//                                         <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
//                                             {selectedBuilding.totalFloors} Floors
//                                         </span>
//                                     )}
//                                 </div>
//                                 {selectedBuilding.flatsDetails && selectedBuilding.flatsDetails.length > 0 && (
//                                     <div className="mt-4">
//                                         <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
//                                             <Building className="w-4 h-4" />
//                                             Floor Information
//                                         </h4>
//                                         <div className="max-h-48 overflow-y-auto pr-2">
//                                             {selectedBuilding.flatsDetails.map((floor) => (
//                                                 <div
//                                                     key={floor._id || floor.floorNumber}
//                                                     className="flex gap-2 items-center mb-2 p-2 bg-gray-50 rounded hover:bg-gray-100"
//                                                 >
//                                                     <div className="flex-1">
//                                                         <div className="text-sm font-medium">Floor {floor.floorNumber}</div>
//                                                         <div className="text-xs text-gray-600 flex items-center gap-2">
//                                                             <span>
//                                                                 <Home className="w-3 h-3 inline mr-1" />
//                                                                 Total: {floor.flatsOnFloor}
//                                                             </span>
//                                                             <span>|</span>
//                                                             <span className="text-green-600">
//                                                                 Available: {floor.availableFlats}
//                                                             </span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                     <button
//                         onClick={handleExport}
//                         className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
//                     >
//                         <Download className="w-4 h-4" />
//                         Export Configuration
//                     </button>
//                     {showInstructions && (
//                         <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-lg">
//                             <p className="text-sm text-gray-600">Click anywhere on the image to add building markers</p>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };
// export default BuildingManager;



// import React, { useState, useRef, useEffect } from 'react';
// import { Upload, Trash2, Download, Building, Home, X, Crop, Move } from 'lucide-react';
// import { project_upload_url } from '../utils/base_url';

// const BuildingManager = () => {
//     const [images, setImages] = useState([]);
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [buildings, setBuildings] = useState({});
//     const [selectedBuilding, setSelectedBuilding] = useState(null);
//     const [buildingData, setBuildingData] = useState(null);
//     const [exportStatus, setExportStatus] = useState(null);
//     const [showInstructions, setShowInstructions] = useState(true);
//     const [isDrawing, setIsDrawing] = useState(false);
//     const [selectionMode, setSelectionMode] = useState(false);
//     const [currentArea, setCurrentArea] = useState(null);

//     const imageRef = useRef(null);
//     const canvasRef = useRef(null);
//     const popupRef = useRef(null);
//     const startPosRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 setSelectedBuilding(null);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     useEffect(() => {
//         if (selectedImage && canvasRef.current) {
//             const canvas = canvasRef.current;
//             const ctx = canvas.getContext('2d');
//             const img = new Image();
//             img.src = selectedImage.src;
//             img.onload = () => {
//                 canvas.width = imageRef.current.width;
//                 canvas.height = imageRef.current.height;
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 drawExistingAreas();
//             };
//         }
//     }, [selectedImage, buildings]);

//     const drawExistingAreas = () => {
//         if (!canvasRef.current || !selectedImage) return;
//         const ctx = canvasRef.current.getContext('2d');
//         ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

//         const currentBuildings = buildings[selectedImage.id] || [];
//         currentBuildings.forEach(building => {
//             if (building.area) {
//                 ctx.strokeStyle = selectedBuilding?.id === building.id ? '#3B82F6' : 'rgba(0, 0, 0, 0.5)';
//                 ctx.lineWidth = 2;
//                 ctx.strokeRect(
//                     building.area.x * canvasRef.current.width,
//                     building.area.y * canvasRef.current.height,
//                     building.area.width * canvasRef.current.width,
//                     building.area.height * canvasRef.current.height
//                 );
//             }
//         });
//     };

//     const handleMouseDown = (e) => {
//         if (!selectionMode || !selectedImage) return;

//         const rect = canvasRef.current.getBoundingClientRect();
//         const x = (e.clientX - rect.left) / rect.width;
//         const y = (e.clientY - rect.top) / rect.height;

//         startPosRef.current = { x, y };
//         setIsDrawing(true);
//     };

//     const handleMouseMove = (e) => {
//         if (!isDrawing || !startPosRef.current || !canvasRef.current) return;

//         const rect = canvasRef.current.getBoundingClientRect();
//         const currentX = (e.clientX - rect.left) / rect.width;
//         const currentY = (e.clientY - rect.top) / rect.height;

//         const width = currentX - startPosRef.current.x;
//         const height = currentY - startPosRef.current.y;

//         setCurrentArea({
//             x: startPosRef.current.x,
//             y: startPosRef.current.y,
//             width,
//             height
//         });

//         const ctx = canvasRef.current.getContext('2d');
//         ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//         drawExistingAreas();

//         ctx.strokeStyle = '#3B82F6';
//         ctx.lineWidth = 2;
//         ctx.strokeRect(
//             startPosRef.current.x * canvasRef.current.width,
//             startPosRef.current.y * canvasRef.current.height,
//             width * canvasRef.current.width,
//             height * canvasRef.current.height
//         );
//     };

//     const handleMouseUp = () => {
//         if (!isDrawing || !currentArea || !selectedImage) return;

//         const newBuilding = {
//             id: Date.now(),
//             position: {
//                 top: `${(currentArea.y + currentArea.height / 2) * 100}%`,
//                 left: `${(currentArea.x + currentArea.width / 2) * 100}%`
//             },
//             area: currentArea,
//             name: buildingData?.name || 'New Building',
//             totalFloors: buildingData?.totalFloors || 10,
//             flatsDetails: buildingData?.flatsDetails || [],
//             description: buildingData?.description || '',
//             amenities: buildingData?.amenities || [],
//             contactNumber: buildingData?.contactNumber || '',
//             developmentStatus: buildingData?.developmentStatus || 'planning',
//             createdAt: new Date().toISOString()
//         };

//         setBuildings(prev => ({
//             ...prev,
//             [selectedImage.id]: [...(prev[selectedImage.id] || []), newBuilding]
//         }));

//         setIsDrawing(false);
//         setCurrentArea(null);
//         startPosRef.current = null;
//     };

//     const handleDataImport = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 try {
//                     const data = JSON.parse(e.target.result);
//                     if (!data.name || !data.totalFloors) {
//                         throw new Error('Invalid building data format');
//                     }
//                     setBuildingData(data);
//                     setExportStatus({ type: 'success', message: 'Building data imported successfully' });
//                 } catch (error) {
//                     setExportStatus({ type: 'error', message: 'Failed to import building data' });
//                     console.error('Error parsing JSON:', error);
//                 }
//             };
//             reader.readAsText(file);
//         }
//     };

//     const handleImageUpload = async (event) => {
//         const files = Array.from(event.target.files);
//         const validFiles = files.filter(file => file.type.startsWith('image/'));

//         for (const file of validFiles) {
//             const formData = new FormData();
//             formData.append('image', file);

//             try {
//                 const response = await fetch(`${project_upload_url}/profo/image/upload`, {
//                     method: 'POST',
//                     body: formData
//                 });
//                 const { imageUrl } = await response.json();

//                 const newImage = {
//                     id: Date.now() + Math.random(),
//                     src: imageUrl,
//                     name: file.name,
//                     uploadedAt: new Date().toISOString()
//                 };
//                 setImages(prev => [...prev, newImage]);
//                 setBuildings(prev => ({ ...prev, [newImage.id]: [] }));
//             } catch (error) {
//                 console.error('Upload failed:', error);
//                 setExportStatus({ type: 'error', message: 'Image upload failed' });
//             }
//         }
//     };

//     const handleExport = async () => {
//         if (!selectedImage || !buildings[selectedImage.id]) {
//             setExportStatus({ type: 'error', message: 'No data to export' });
//             return;
//         }

//         const imageSrc = selectedImage.src;
//         const transformedBuildings = buildings[selectedImage.id].map(building => ({
//             id: building.id,
//             name: building.name,
//             position: {
//                 x: parseFloat(building.position.left.replace('%', '')) / 100,
//                 y: parseFloat(building.position.top.replace('%', '')) / 100
//             },
//             area: building.area,
//             description: building.description || '',
//             totalFloors: building.totalFloors || 0,
//             flatsDetails: building.flatsDetails || [],
//             amenities: building.amenities || [],
//             contactNumber: building.contactNumber || '',
//             developmentStatus: building.developmentStatus || 'planning'
//         }));

//         const config = {
//             version: '1.0',
//             exportedAt: new Date().toISOString(),
//             image: {
//                 src: imageSrc
//             },
//             buildings: transformedBuildings,
//             metadata: {
//                 buildingCount: transformedBuildings.length,
//                 lastModified: new Date().toISOString()
//             }
//         };

//         try {
//             const jsonString = JSON.stringify(config, null, 2);
//             const blob = new Blob([jsonString], { type: 'application/json' });
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = `building-config-${Date.now()}.json`;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             URL.revokeObjectURL(url);
//             setExportStatus({ type: 'success', message: 'Configuration exported successfully' });
//         } catch (error) {
//             setExportStatus({ type: 'error', message: 'Failed to export configuration' });
//             console.error('Export failed:', error);
//         }
//     };

//     const handleClosePopup = (e) => {
//         e.stopPropagation();
//         setSelectedBuilding(null);
//     };

//     return (
//         <div className="p-4 flex flex-col gap-4">
//             {exportStatus && (
//                 <div className={`p-4 mb-4 rounded-lg ${exportStatus.type === 'error' ? 'bg-red-50' : 'bg-green-50'}`}>
//                     <p className={`${exportStatus.type === 'error' ? 'text-red-800' : 'text-green-800'}`}>
//                         {exportStatus.message}
//                     </p>
//                 </div>
//             )}

//             <div className="flex gap-4">
//                 <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
//                     <label className="cursor-pointer flex flex-col items-center gap-2">
//                         <Upload className="w-8 h-8 text-gray-500" />
//                         <span className="text-sm text-gray-600">Upload Images</span>
//                         <input
//                             type="file"
//                             multiple
//                             accept="image/*"
//                             className="hidden"
//                             onChange={handleImageUpload}
//                         />
//                     </label>
//                 </div>
//                 <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
//                     <label className="cursor-pointer flex flex-col items-center gap-2">
//                         <Upload className="w-8 h-8 text-gray-500" />
//                         <span className="text-sm text-gray-600">Import Data (JSON)</span>
//                         <input
//                             type="file"
//                             accept="application/json"
//                             className="hidden"
//                             onChange={handleDataImport}
//                         />
//                     </label>
//                 </div>
//             </div>

//             <div className="flex flex-wrap gap-4">
//                 {images.map(image => (
//                     <div
//                         key={image.id}
//                         className={`relative border rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200
//                             ${selectedImage?.id === image.id ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'}`}
//                         onClick={() => {
//                             setSelectedImage(image);
//                             setSelectedBuilding(null);
//                         }}
//                     >
//                         <img
//                             src={image.src}
//                             alt={image.name}
//                             className="w-32 h-32 object-cover"
//                         />
//                         <button
//                             className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity"
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 setImages(prev => prev.filter(img => img.id !== image.id));
//                                 setBuildings(prev => {
//                                     const newBuildings = { ...prev };
//                                     delete newBuildings[image.id];
//                                     return newBuildings;
//                                 });
//                                 if (selectedImage?.id === image.id) {
//                                     setSelectedImage(null);
//                                     setSelectedBuilding(null);
//                                 }
//                             }}
//                         >
//                             <Trash2 className="w-4 h-4" />
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {selectedImage && (
//                 <div className="relative border rounded-lg overflow-hidden min-h-[400px] bg-gray-50">
//                     <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-2 flex gap-2">
//                         <button
//                             className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${selectionMode ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
//                                 }`}
//                             onClick={() => setSelectionMode(!selectionMode)}
//                         >
//                             <Crop className="w-4 h-4" />
//                             <span className="text-sm">Area Select</span>
//                         </button>
//                         <button
//                             className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${!selectionMode ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
//                                 }`}
//                             onClick={() => setSelectionMode(false)}
//                         >
//                             <Move className="w-4 h-4" />
//                             <span className="text-sm">Move</span>
//                         </button>
//                     </div>

//                     <img
//                         ref={imageRef}
//                         src={selectedImage.src}
//                         alt={selectedImage.name}
//                         className="w-full h-full object-contain"
//                     />

//                     <canvas
//                         ref={canvasRef}
//                         className="absolute top-0 left-0 w-full h-full"
//                         onMouseDown={handleMouseDown}
//                         onMouseMove={handleMouseMove}
//                         onMouseUp={handleMouseUp}
//                         onMouseLeave={handleMouseUp}
//                     />

//                     {buildings[selectedImage.id]?.map((building) => (
//                         <button
//                             key={building.id}
//                             className={`absolute w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300
//                                 ${selectedBuilding?.id === building.id
//                                     ? 'bg-blue-500 ring-4 ring-blue-200 scale-110'
//                                     : 'bg-black/40 hover:bg-blue-500 hover:ring-4 hover:ring-blue-200 hover:scale-110'
//                                 }
//                                 text-white text-sm backdrop-blur-sm`}
//                             style={{
//                                 top: building.position.top,
//                                 left: building.position.left,
//                                 transform: 'translate(-50%, -50%)',
//                                 cursor: 'pointer',
//                                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                             }}
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 setSelectedBuilding(selectedBuilding?.id === building.id ? null : building);
//                             }}
//                         >
//                             {building.id}
//                         </button>
//                     ))}

//                     {selectedBuilding && (
//                         <div
//                             ref={popupRef}
//                             className="absolute top-4 right-4 w-80 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg"
//                         >
//                             <div className="p-4">
//                                 <div className="flex justify-between items-start mb-4">
//                                     <h3 className="text-lg font-semibold text-blue-900">
//                                         {selectedBuilding.name}
//                                     </h3>
//                                     <button
//                                         onClick={handleClosePopup}
//                                         className="p-1 hover:bg-gray-100 rounded-full transition-colors"
//                                     >
//                                         <X className="w-4 h-4 text-gray-500" />
//                                     </button>
//                                 </div>

//                                 <div className="flex gap-2 mb-4">
//                                     {selectedBuilding.developmentStatus && (
//                                         <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
//                                             {selectedBuilding.developmentStatus}
//                                         </span>
//                                     )}
//                                     {selectedBuilding.totalFloors && (
//                                         <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
//                                             {selectedBuilding.totalFloors} Floors
//                                         </span>
//                                     )}
//                                 </div>

//                                 {selectedBuilding.flatsDetails && selectedBuilding.flatsDetails.length > 0 && (
//                                     <div className="mt-4">
//                                         <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
//                                             <Building className="w-4 h-4" />
//                                             Floor Information
//                                         </h4>
//                                         <div className="max-h-48 overflow-y-auto pr-2">
//                                             {selectedBuilding.flatsDetails.map((floor) => (
//                                                 <div
//                                                     key={floor._id || floor.floorNumber}
//                                                     className="flex gap-2 items-center mb-2 p-2 bg-gray-50 rounded hover:bg-gray-100"
//                                                 >
//                                                     <div className="flex-1">
//                                                         <div className="text-sm font-medium">
//                                                             Floor {floor.floorNumber}
//                                                         </div>
//                                                         <div className="text-xs text-gray-600 flex items-center gap-2">
//                                                             <span>
//                                                                 <Home className="w-3 h-3 inline mr-1" />
//                                                                 Total: {floor.flatsOnFloor}
//                                                             </span>
//                                                             <span>|</span>
//                                                             <span className="text-green-600">
//                                                                 Available: {floor.availableFlats}
//                                                             </span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}

//                     <button
//                         onClick={handleExport}
//                         className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
//                     >
//                         <Download className="w-4 h-4" />
//                         Export Configuration
//                     </button>

//                     {showInstructions && (
//                         <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-lg">
//                             <p className="text-sm text-gray-600">
//                                 {selectionMode
//                                     ? "Click and drag to select building areas"
//                                     : "Click anywhere on the image to add building markers"
//                                 }
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BuildingManager



import React, { useState, useRef, useEffect } from 'react';
import { Upload, Trash2, Download, Building, Home, X, Crop, Move, Lasso } from 'lucide-react';
import { project_upload_url } from '../utils/base_url';

const BuildingManager = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [buildings, setBuildings] = useState({});
    const [selectedBuilding, setSelectedBuilding] = useState(null);
    const [selectionMode, setSelectionMode] = useState('move'); // 'move', 'rect', 'lasso'
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentPath, setCurrentPath] = useState([]);
    const [buildingData, setBuildingData] = useState(null);

    const imageRef = useRef(null);
    const canvasRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
        if (selectedImage && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            canvas.width = imageRef.current.width;
            canvas.height = imageRef.current.height;
            drawExistingAreas();
        }
    }, [selectedImage, buildings]);

    const drawExistingAreas = () => {
        if (!canvasRef.current || !selectedImage) return;
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        const currentBuildings = buildings[selectedImage.id] || [];
        currentBuildings.forEach(building => {
            ctx.strokeStyle = selectedBuilding?.id === building.id ? '#3B82F6' : 'rgba(0, 0, 0, 0.5)';
            ctx.lineWidth = 2;

            if (building.selectionType === 'rect' && building.area) {
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
                ctx.stroke();
            }
        });
    };

    const handleMouseDown = (e) => {
        if (selectionMode === 'move') return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setIsDrawing(true);
        if (selectionMode === 'lasso') {
            setCurrentPath([{ x, y }]);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDrawing || selectionMode === 'move') return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        if (selectionMode === 'lasso') {
            setCurrentPath(prev => [...prev, { x, y }]);

            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            drawExistingAreas();

            ctx.strokeStyle = '#3B82F6';
            ctx.lineWidth = 2;
            ctx.beginPath();
            currentPath.forEach((point, index) => {
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
            ctx.lineTo(x * canvasRef.current.width, y * canvasRef.current.height);
            ctx.stroke();
        }
    };

    const handleMouseUp = () => {
        if (!isDrawing) return;

        const newBuilding = {
            id: Date.now(),
            selectionType: selectionMode,
            position: calculateCentroid(currentPath),
            path: selectionMode === 'lasso' ? currentPath : null,
            name: buildingData?.name || 'New Building',
            totalFloors: buildingData?.totalFloors || 10,
            description: buildingData?.description || '',
            amenities: buildingData?.amenities || [],
            contactNumber: buildingData?.contactNumber || '',
            developmentStatus: buildingData?.developmentStatus || 'planning'
        };

        setBuildings(prev => ({
            ...prev,
            [selectedImage.id]: [...(prev[selectedImage.id] || []), newBuilding]
        }));

        setIsDrawing(false);
        setCurrentPath([]);
    };

    const calculateCentroid = (points) => {
        if (!points || points.length === 0) return { top: '50%', left: '50%' };

        const sum = points.reduce((acc, point) => ({
            x: acc.x + point.x,
            y: acc.y + point.y
        }), { x: 0, y: 0 });

        return {
            top: `${(sum.y / points.length) * 100}%`,
            left: `${(sum.x / points.length) * 100}%`
        };
    };

    const handleExport = async () => {
        if (!selectedImage || !buildings[selectedImage.id]) {
            setExportStatus({ type: 'error', message: 'No data to export' });
            return;
        }

        const imageSrc = selectedImage.src;
        const transformedBuildings = buildings[selectedImage.id].map(building => ({
            id: building.id,
            name: building.name,
            position: {
                x: parseFloat(building.position.left.replace('%', '')) / 100,
                y: parseFloat(building.position.top.replace('%', '')) / 100
            },
            selectionType: building.selectionType,
            area: building.area,
            path: building.path,
            description: building.description || '',
            totalFloors: building.totalFloors || 0,
            flatsDetails: building.flatsDetails || [],
            amenities: building.amenities || [],
            contactNumber: building.contactNumber || '',
            developmentStatus: building.developmentStatus || 'planning'
        }));

        const config = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            image: {
                src: imageSrc
            },
            buildings: transformedBuildings,
            metadata: {
                buildingCount: transformedBuildings.length,
                lastModified: new Date().toISOString()
            }
        };

        try {
            const jsonString = JSON.stringify(config, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `building-config-${Date.now()}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            setExportStatus({ type: 'success', message: 'Configuration exported successfully' });
        } catch (error) {
            setExportStatus({ type: 'error', message: 'Failed to export configuration' });
            console.error('Export failed:', error);
        }
    };

    const handleDataImport = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (!data.name || !data.totalFloors) {
                        throw new Error('Invalid building data format');
                    }
                    setBuildingData(data);
                    setExportStatus({ type: 'success', message: 'Building data imported successfully' });
                } catch (error) {
                    setExportStatus({ type: 'error', message: 'Failed to import building data' });
                    console.error('Error parsing JSON:', error);
                }
            };
            reader.readAsText(file);
        }
    };

    // const handleImageUpload = async (event) => {
    //     const files = Array.from(event.target.files);
    //     const validFiles = files.filter(file => file.type.startsWith('image/'));

    //     for (const file of validFiles) {
    //         const formData = new FormData();
    //         formData.append('image', file);

    //         try {
    //             const response = await fetch(`${project_upload_url}/profo/image/upload`, {
    //                 method: 'POST',
    //                 body: formData
    //             });
    //             console.log("BuildingManager")
    //             console.log("response", response)
    //             const { imageUrl } = await response.json();
    //             console.log("response", response)

    //             const newImage = {
    //                 id: Date.now() + Math.random(),
    //                 src: imageUrl,
    //                 name: file.name,
    //                 uploadedAt: new Date().toISOString()
    //             };
    //             setImages(prev => [...prev, newImage]);
    //             setBuildings(prev => ({ ...prev, [newImage.id]: [] }));
    //         } catch (error) {
    //             console.error('Upload failed:', error);
    //             setExportStatus({ type: 'error', message: 'Image upload failed' });
    //         }
    //     }
    // };

    const handleImageUpload = async (event) => {
        const files = Array.from(event.target.files);
        const validFiles = files.filter(file => file.type.startsWith('image/'));

        for (const file of validFiles) {
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch(`${project_upload_url}/profo/image/upload`, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();
                // Access imageUrl from the nested data object
                const imageUrl = result.data.imageUrl;

                const newImage = {
                    id: Date.now() + Math.random(),
                    src: imageUrl,
                    name: file.name,
                    uploadedAt: new Date().toISOString()
                };

                setImages(prev => [...prev, newImage]);
                setBuildings(prev => ({ ...prev, [newImage.id]: [] }));
            } catch (error) {
                console.error('Upload failed:', error);
                setExportStatus({ type: 'error', message: 'Image upload failed' });
            }
        }
    };
    return (
    <div>
            <div className="p-4 flex flex-col gap-4">
                {/* Upload Buttons Section */}
                <div className="flex gap-4 mb-4">
                    <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
                        <label className="cursor-pointer flex flex-col items-center gap-2">
                            <Upload className="w-8 h-8 text-gray-500" />
                            <span className="text-sm text-gray-600">Upload Images</span>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </label>
                    </div>
                    <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50">
                        <label className="cursor-pointer flex flex-col items-center gap-2">
                            <Upload className="w-8 h-8 text-gray-500" />
                            <span className="text-sm text-gray-600">Import Data (JSON)</span>
                            <input
                                type="file"
                                accept="application/json"
                                className="hidden"
                                onChange={handleDataImport}
                            />
                        </label>
                    </div>
                </div>

                {/* Selection Tools */}
                {selectedImage && (
                    <div className="flex gap-2 mb-4">
                        <button
                            className={`p-2 rounded-lg flex items-center gap-2 transition-colors 
                            ${selectionMode === 'rect' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            onClick={() => setSelectionMode('rect')}
                        >
                            <Crop className="w-4 h-4" />
                            <span className="text-sm">Rectangle</span>
                        </button>
                        <button
                            className={`p-2 rounded-lg flex items-center gap-2 transition-colors 
                            ${selectionMode === 'lasso' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            onClick={() => setSelectionMode('lasso')}
                        >
                            <Lasso className="w-4 h-4" />
                            <span className="text-sm">Lasso</span>
                        </button>
                        <button
                            className={`p-2 rounded-lg flex items-center gap-2 transition-colors 
                            ${selectionMode === 'move' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            onClick={() => setSelectionMode('move')}
                        >
                            <Move className="w-4 h-4" />
                            <span className="text-sm">Move</span>
                        </button>
                    </div>
                )}
                <button
                    className={`p-2 rounded-lg flex items-center gap-2 transition-colors 
                        ${selectionMode === 'rect' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => setSelectionMode('rect')}
                >
                    <Crop className="w-4 h-4" />
                    <span className="text-sm">Rectangle</span>
                </button>
                <button
                    className={`p-2 rounded-lg flex items-center gap-2 transition-colors 
                        ${selectionMode === 'lasso' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => setSelectionMode('lasso')}
                >
                    <Lasso className="w-4 h-4" />
                    <span className="text-sm">Lasso</span>
                </button>
                <button
                    className={`p-2 rounded-lg flex items-center gap-2 transition-colors 
                        ${selectionMode === 'move' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => setSelectionMode('move')}
                >
                    <Move className="w-4 h-4" />
                    <span className="text-sm">Move</span>
                </button>
            </div>

            {/* Image Gallery */}
            <div className="flex flex-wrap gap-4">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`relative border rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200
                            ${selectedImage?.id === image.id ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'}`}
                        onClick={() => {
                            setSelectedImage(image);
                            setSelectedBuilding(null);
                        }}
                    >
                        <img
                            src={image.src}
                            alt={image.name}
                            className="w-32 h-32 object-cover"
                        />
                        <button
                            className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                                e.stopPropagation();
                                setImages(prev => prev.filter(img => img.id !== image.id));
                                setBuildings(prev => {
                                    const newBuildings = { ...prev };
                                    delete newBuildings[image.id];
                                    return newBuildings;
                                });
                                if (selectedImage?.id === image.id) {
                                    setSelectedImage(null);
                                    setSelectedBuilding(null);
                                }
                            }}
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Main Image Editor */}
            {
                selectedImage && (
                    <div className="relative border rounded-lg overflow-hidden min-h-[400px] bg-gray-50">
                        <img
                            ref={imageRef}
                            src={selectedImage.src}
                            alt={selectedImage.name}
                            className="w-full h-full object-contain"
                        />

                        <canvas
                            ref={canvasRef}
                            className="absolute top-0 left-0 w-full h-full"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        />

                        {/* Building Markers */}
                        {buildings[selectedImage.id]?.map((building) => (
                            <button
                                key={building.id}
                                className={`absolute w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300
                                ${selectedBuilding?.id === building.id
                                        ? 'bg-blue-500 ring-4 ring-blue-200 scale-110'
                                        : 'bg-black/40 hover:bg-blue-500 hover:ring-4 hover:ring-blue-200 hover:scale-110'
                                    }
                                text-white text-sm backdrop-blur-sm`}
                                style={{
                                    top: building.position.top,
                                    left: building.position.left,
                                    transform: 'translate(-50%, -50%)',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedBuilding(selectedBuilding?.id === building.id ? null : building);
                                }}
                            >
                                {building.name.charAt(0)}
                            </button>
                        ))}

                        {/* Building Information Popup */}
                        {selectedBuilding && (
                            <div
                                ref={popupRef}
                                className="absolute top-4 right-4 w-80 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg"
                            >
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-semibold text-blue-900">
                                            {selectedBuilding.name}
                                        </h3>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedBuilding(null);
                                            }}
                                            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <X className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </div>

                                    <div className="flex gap-2 mb-4">
                                        {selectedBuilding.developmentStatus && (
                                            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                                {selectedBuilding.developmentStatus}
                                            </span>
                                        )}
                                        {selectedBuilding.totalFloors && (
                                            <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
                                                {selectedBuilding.totalFloors} Floors
                                            </span>
                                        )}
                                    </div>

                                    {/* Floor Information */}
                                    {selectedBuilding.flatsDetails && selectedBuilding.flatsDetails.length > 0 && (
                                        <div className="mt-4">
                                            <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                                                <Building className="w-4 h-4" />
                                                Floor Information
                                            </h4>
                                            <div className="max-h-48 overflow-y-auto pr-2">
                                                {selectedBuilding.flatsDetails.map((floor) => (
                                                    <div
                                                        key={floor._id || floor.floorNumber}
                                                        className="flex gap-2 items-center mb-2 p-2 bg-gray-50 rounded hover:bg-gray-100"
                                                    >
                                                        <div className="flex-1">
                                                            <div className="text-sm font-medium">
                                                                Floor {floor.floorNumber}
                                                            </div>
                                                            <div className="text-xs text-gray-600 flex items-center gap-2">
                                                                <span>
                                                                    <Home className="w-3 h-3 inline mr-1" />
                                                                    Total: {floor.flatsOnFloor}
                                                                </span>
                                                                <span>|</span>
                                                                <span className="text-green-600">
                                                                    Available: {floor.availableFlats}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Contact Information */}
                                    {selectedBuilding.contactNumber && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <a
                                                href={`tel:${selectedBuilding.contactNumber}`}
                                                className="block w-full py-2 px-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors"
                                            >
                                                Contact: {selectedBuilding.contactNumber}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Export Button */}
                        <button
                            onClick={handleExport}
                            className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Export Configuration
                        </button>

                        {/* Instructions */}
                        <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-lg">
                            <p className="text-sm text-gray-600">
                                {selectionMode === 'move'
                                    ? "Click on markers to view building details"
                                    : selectionMode === 'lasso'
                                        ? "Draw around buildings using the lasso tool"
                                        : "Draw rectangles around buildings"}
                            </p>
                        </div>
                    </div>
                )
            }
    </div>
       )
       }

export default BuildingManager;