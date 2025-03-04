// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Heart, MapPin, Home, Building, CheckSquare, ArrowRight, Plus } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const PropertyShowcase = ({ properties  , projects , buildings}) => {
//     // const [data, setData] = useState(null);
//     const [activeTab, setActiveTab] = useState('properties');
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [favorites, setFavorites] = useState([]);

//     const naviagte = useNavigate()

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await window.fs.readFile('paste.txt', { encoding: 'utf8' });
//     //             const parsedData = JSON.parse(response);
//     //             setData(parsedData);
//     //         } catch (error) {
//     //             console.error('Error reading file:', error);
//     //         }
//     //     };

//     //     fetchData();
//     // }, []);

//     const toggleFavorite = (id) => {
//         if (favorites.includes(id)) {
//             setFavorites(favorites.filter(item => item !== id));
//         } else {
//             setFavorites([...favorites, id]);
//         }
//     };

//     const nextSlide = (totalSlides) => {
//         setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     };

//     const prevSlide = (totalSlides) => {
//         setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lac`;
//         } else {
//             return `₹${price.toLocaleString()}`;
//         }
//     };

//     // if (!data) return (
//     //     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//     //         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
//     //     </div>
//     // );

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//                 {/* <div className="mb-8">
//                     <h1 className="text-4xl font-bold text-gray-900 mb-2">Real Estate Showcase</h1>
//                     <p className="text-gray-600">Discover your dream property from our exclusive collection</p>
//                 </div> */}

//                 {/* Navigation Tabs */}
//                 <div className="flex mb-8 overflow-x-auto hide-scrollbar">
//                     <button
//                         className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'properties' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                         onClick={() => setActiveTab('properties')}
//                     >
//                         <div className="flex items-center">
//                             <Home className="mr-2 h-4 w-4" />
//                             <span>Properties</span>
//                             <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                 {properties?.length}
//                             </span>
//                         </div>
//                     </button>
//                     <button
//                         className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                         onClick={() => setActiveTab('projects')}
//                     >
//                         <div className="flex items-center">
//                             <Building className="mr-2 h-4 w-4" />
//                             <span>Projects</span>
//                             <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                 {projects?.length}
//                             </span>
//                         </div>
//                     </button>
//                     <button
//                         className={`px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'buildings' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                         onClick={() => setActiveTab('buildings')}
//                     >
//                         <div className="flex items-center">
//                             <CheckSquare className="mr-2 h-4 w-4" />
//                             <span>Buildings</span>
//                             <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                 {buildings?.length}
//                             </span>
//                         </div>
//                     </button>
//                 </div>

//                 {/* Content Area */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Always display exactly 3 cards per tab */}
//                     {activeTab === 'properties' && properties?.map((property, index) => (
//                         <div key={property._id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1" onClick={() => naviagte(`/api/details/${property?.post_id}`)}>
//                             {/* Image Carousel */}
//                             <div className="relative h-64 overflow-hidden">
//                                 {property.galleryList && property.galleryList.length > 0 ? (
//                                     <>
//                                         <div className="h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                             {property.galleryList.map((image, i) => (
//                                                 <img
//                                                     key={i}
//                                                     src={image}
//                                                     alt={property.post_title}
//                                                     className="h-full w-full object-cover flex-shrink-0"
//                                                 />
//                                             ))}
//                                         </div>
//                                         {property.galleryList.length > 1 && (
//                                             <>
//                                                 <button
//                                                     onClick={() => prevSlide(property.galleryList.length)}
//                                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronLeft size={20} />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => nextSlide(property.galleryList.length)}
//                                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronRight size={20} />
//                                                 </button>
//                                             </>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
//                                         <Building size={48} />
//                                     </div>
//                                 )}

//                                 {/* Favorite Button */}
//                                 <button
//                                     onClick={() => toggleFavorite(property._id)}
//                                     className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-all"
//                                 >
//                                     <Heart size={20} fill={favorites.includes(property._id) ? '#ef4444' : 'none'} className={favorites.includes(property._id) ? 'text-red-500' : 'text-gray-600'} />
//                                 </button>

//                                 {/* Type Badge */}
//                                 <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                                     {property.type_name}
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className="p-5">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{property.post_title}</h3>

//                                 <div className="flex items-center text-gray-600 mb-4">
//                                     <MapPin size={16} className="mr-1" />
//                                     <p className="text-sm line-clamp-1">{property.address}</p>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     {property.bedrooms && (
//                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                             {property.bedrooms} BHK
//                                         </div>
//                                     )}
//                                     {property.bathrooms && (
//                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                             {property.bathrooms} Bath
//                                         </div>
//                                     )}
//                                     {property.area && (
//                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                             {property.area} {property.areaUnit}
//                                         </div>
//                                     )}
//                                     {property.furnishing && (
//                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                             {property.furnishing}
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Amenities */}
//                                 {property.amenities && property.amenities.length > 0 && (
//                                     <div className="mb-4">
//                                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {[...new Set(property.amenities)].slice(0, 3).map((amenity, i) => (
//                                                 <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                                     {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                                                 </div>
//                                             ))}
//                                             {property.amenities.length > 3 && (
//                                                 <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                                     +{[...new Set(property.amenities)].length - 3} more
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Price and CTA */}
//                                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                                     <div>
//                                         <p className="text-xs text-gray-500">Price</p>
//                                         <p className="text-xl font-bold text-blue-600">{formatPrice(property.price)}</p>
//                                     </div>
//                                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
//                                         View Details
//                                         <ArrowRight size={16} className="ml-2" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     {activeTab === 'projects' && projects?.map((project) => (
//                         <div key={project._id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1" onClick={() => naviagte(`/api/details/project/${project?.projectId}`)}>
//                             {/* Image Carousel */}
//                             <div className="relative h-64 overflow-hidden" >
//                                 {project.gallery && project.gallery.length > 0 && project.gallery[0].images && project.gallery[0].images.length > 0 ? (
//                                     <>
//                                         <div className="h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                             {project.gallery[0].images.map((image, i) => (
//                                                 <img
//                                                     key={i}
//                                                     src={image}
//                                                     alt={project.name}
//                                                     className="h-full w-full object-cover flex-shrink-0"
//                                                 />
//                                             ))}
//                                         </div>
//                                         {project.gallery[0].images.length > 1 && (
//                                             <>
//                                                 <button
//                                                     onClick={() => prevSlide(project.gallery[0].images.length)}
//                                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronLeft size={20} />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => nextSlide(project.gallery[0].images.length)}
//                                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronRight size={20} />
//                                                 </button>
//                                             </>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
//                                         <Building size={48} />
//                                     </div>
//                                 )}

//                                 {/* Favorite Button */}
//                                 <button
//                                     onClick={() => toggleFavorite(project._id)}
//                                     className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-all"
//                                 >
//                                     <Heart size={20} fill={favorites.includes(project._id) ? '#ef4444' : 'none'} className={favorites.includes(project._id) ? 'text-red-500' : 'text-gray-600'} />
//                                 </button>

//                                 {/* Status Badge */}
//                                 <div className={`absolute bottom-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${project.status === 'COMPLETED' ? 'bg-green-600' :
//                                         project.status === 'UNDER_CONSTRUCTION' ? 'bg-amber-600' : 'bg-blue-600'
//                                     }`}>
//                                     {project.status.replace('_', ' ')}
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className="p-5">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{project.name}</h3>

//                                 <div className="flex items-center text-gray-600 mb-4">
//                                     <MapPin size={16} className="mr-1" />
//                                     <p className="text-sm line-clamp-1">{project.location?.address || 'Location information unavailable'}</p>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {project.type || 'N/A'}
//                                     </div>
//                                     {project.overview?.totalUnits && (
//                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                             {project.overview.totalUnits} Units
//                                         </div>
//                                     )}
//                                     {project.overview?.totalTowers && (
//                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                             {project.overview.totalTowers} Towers
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Floor Plans */}
//                                 {project.floorPlans && project.floorPlans.length > 0 && (
//                                     <div className="mb-4">
//                                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Floor Plans</h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {project.floorPlans.slice(0, 3).map((plan, i) => (
//                                                 <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                                     {plan.name}
//                                                 </div>
//                                             ))}
//                                             {project.floorPlans.length > 3 && (
//                                                 <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                                     +{project.floorPlans.length - 3} more
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Properties and CTA */}
//                                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                                     <div>
//                                         <p className="text-xs text-gray-500">Properties</p>
//                                         <p className="text-xl font-bold text-blue-600">{project.connectedProperties?.length || 0}</p>
//                                     </div>
//                                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
//                                         View Project
//                                         <ArrowRight size={16} className="ml-2" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     {activeTab === 'buildings' && buildings?.map((building) => (
//                         <div key={building._id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1" onClick={() => naviagte(`/api/details/building/${building?.buildingId}`)}>
//                             {/* Image Carousel */}
//                             <div className="relative h-64 overflow-hidden">
//                                 {building.galleryList && building.galleryList.length > 0 ? (
//                                     <>
//                                         <div className="h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                             {building.galleryList.map((image, i) => (
//                                                 <img
//                                                     key={i}
//                                                     src={image}
//                                                     alt={building.name}
//                                                     className="h-full w-full object-cover flex-shrink-0"
//                                                 />
//                                             ))}
//                                         </div>
//                                         {building.galleryList.length > 1 && (
//                                             <>
//                                                 <button
//                                                     onClick={() => prevSlide(building.galleryList.length)}
//                                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronLeft size={20} />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => nextSlide(building.galleryList.length)}
//                                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronRight size={20} />
//                                                 </button>
//                                             </>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
//                                         <Building size={48} />
//                                     </div>
//                                 )}

//                                 {/* Favorite Button */}
//                                 <button
//                                     onClick={() => toggleFavorite(building._id)}
//                                     className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-all"
//                                 >
//                                     <Heart size={20} fill={favorites.includes(building._id) ? '#ef4444' : 'none'} className={favorites.includes(building._id) ? 'text-red-500' : 'text-gray-600'} />
//                                 </button>

//                                 {/* Type Badge */}
//                                 <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                                     {/* {building?.type?.charAt(0)?.toUpperCase() + building?.type.slice(1)} */}
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className="p-5">
//                                 <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{building.name}</h3>

//                                 <div className="flex items-center text-gray-600 mb-4">
//                                     <MapPin size={16} className="mr-1" />
//                                     <p className="text-sm line-clamp-1">
//                                         {building.location?.coordinates ?
//                                             `${building?.location?.coordinates?.[0]}, ${building?.location?.coordinates?.[1]}` :
//                                             'Location coordinates unavailable'}
//                                     </p>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {building.totalFloors} {building.totalFloors > 1 ? 'Floors' : 'Floor'}
//                                     </div>
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {building.totalProperties} Properties
//                                     </div>
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {building.numberOfFlatsAvailable} Available
//                                     </div>
//                                 </div>

//                                 {/* Floor Details */}
//                                 {building.flatsDetails && building.flatsDetails.length > 0 && (
//                                     <div className="mb-4">
//                                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Floor Details</h4>
//                                         <div className="grid grid-cols-1 gap-2">
//                                             {building.flatsDetails.map((floor, i) => (
//                                                 <div key={i} className="bg-blue-50 p-2 rounded-lg text-xs">
//                                                     <div className="flex justify-between">
//                                                         <span className="font-medium text-blue-700">Floor {floor.floorNumber}</span>
//                                                         <span className="font-medium text-blue-700">{floor.availableFlats}/{floor.flatsOnFloor} Available</span>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Links and CTA */}
//                                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                                     <div className="flex gap-2">
//                                         {building.brochureLink && (
//                                             <a href={building.brochureLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                                                 Brochure
//                                             </a>
//                                         )}
//                                         {building.mapLink && (
//                                             <a href={building.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                                                 Map
//                                             </a>
//                                         )}
//                                     </div>
//                                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
//                                         View Building
//                                         <ArrowRight size={16} className="ml-2" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Show More Button */}
//                 <div className="mt-10 text-center">
//                     <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-6 py-3 rounded-lg border border-blue-600 flex items-center mx-auto transition-colors">
//                         <Plus size={18} className="mr-2" />
//                         View All {activeTab === 'properties' ? properties?.length :
//                             activeTab === 'projects' ? projects.length :
//                                 buildings.length} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertyShowcase;




// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Heart, MapPin, Home, Building, CheckSquare, ArrowRight, Plus } from 'lucide-react';

// const PropertyShowcase = ({ properties, projects, buildings }) => {
//     const [activeTab, setActiveTab] = useState('properties');
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [favorites, setFavorites] = useState([]);
//     const [selectedStyle, setSelectedStyle] = useState(1);

//     // Different glassmorphism style variations
//     const styles = {
//         1: {
//             name: "Frosted Glass",
//             card: "bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1",
//             imageContainer: "h-64 relative",
//             detailsContainer: "px-3 py-2",
//             heading: "text-xl font-bold text-gray-800 mb-2",
//             location: "text-gray-700",
//             badge: "bg-blue-600/90 text-white",
//             amenityBadge: "bg-white/60 backdrop-blur-sm text-gray-700 border border-white/40",
//             buttonPrimary: "bg-blue-600/90 hover:bg-blue-700/90 text-white",
//             priceText: "text-blue-700",
//             divider: "border-white/30"
//         },
//         2: {
//             name: "Crystalline",
//             card: "bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1",
//             imageContainer: "h-64 relative",
//             detailsContainer: "px-3 py-2",
//             heading: "text-xl font-bold text-gray-800 mb-2",
//             location: "text-gray-700",
//             badge: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
//             amenityBadge: "bg-white/50 backdrop-blur-sm text-gray-700 border border-white/30",
//             buttonPrimary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white",
//             priceText: "text-indigo-700",
//             divider: "border-white/20"
//         },
//         3: {
//             name: "Premium Glass",
//             card: "bg-gray-900/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1",
//             imageContainer: "h-64 relative",
//             detailsContainer: "px-3 py-2",
//             heading: "text-xl font-bold text-gray-800 mb-2",
//             location: "text-gray-700",
//             badge: "bg-blue-600 text-white",
//             amenityBadge: "bg-gray-200/70 text-gray-700",
//             buttonPrimary: "bg-gray-800 hover:bg-gray-900 text-white",
//             priceText: "text-gray-800",
//             divider: "border-gray-300/30"
//         },
//         4: {
//             name: "Elegant Blur",
//             card: "bg-white/20 backdrop-blur-lg border-t border-l border-white/30 border-b border-r border-white/10 shadow-2xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1",
//             imageContainer: "h-64 relative",
//             detailsContainer: "px-3 py-2",
//             heading: "text-xl font-bold text-gray-800 mb-2",
//             location: "text-gray-700",
//             badge: "bg-white/80 backdrop-blur-md text-blue-700 font-semibold shadow-sm",
//             amenityBadge: "bg-blue-50/50 backdrop-blur-sm text-blue-700 border border-blue-100/50",
//             buttonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
//             priceText: "text-blue-700",
//             divider: "border-blue-50/50"
//         }
//     };

//     const style = styles[selectedStyle];

//     const toggleFavorite = (id) => {
//         if (favorites.includes(id)) {
//             setFavorites(favorites.filter(item => item !== id));
//         } else {
//             setFavorites([...favorites, id]);
//         }
//     };

//     const nextSlide = (totalSlides) => {
//         setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     };

//     const prevSlide = (totalSlides) => {
//         setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lac`;
//         } else {
//             return `₹${price.toLocaleString()}`;
//         }
//     };

//     return (
//         <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//             <div className="max-w-6xl mx-auto">
//                 {/* Style selector */}
//                 <div className="mb-8 flex flex-wrap gap-4 justify-center">
//                     {Object.keys(styles).map(styleId => (
//                         <button
//                             key={styleId}
//                             onClick={() => setSelectedStyle(Number(styleId))}
//                             className={`px-4 py-2 rounded-full transition-all ${Number(styleId) === selectedStyle
//                                     ? 'bg-blue-600 text-white shadow-md'
//                                     : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
//                                 }`}
//                         >
//                             {styles[styleId].name}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Navigation Tabs */}
//                 <div className="flex mb-8 overflow-x-auto hide-scrollbar">
//                     <button
//                         className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'properties' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                         onClick={() => setActiveTab('properties')}
//                     >
//                         <div className="flex items-center">
//                             <Home className="mr-2 h-4 w-4" />
//                             <span>Properties</span>
//                             <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                 {properties?.length}
//                             </span>
//                         </div>
//                     </button>
//                     <button
//                         className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                         onClick={() => setActiveTab('projects')}
//                     >
//                         <div className="flex items-center">
//                             <Building className="mr-2 h-4 w-4" />
//                             <span>Projects</span>
//                             <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                 {projects?.length}
//                             </span>
//                         </div>
//                     </button>
//                     <button
//                         className={`px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'buildings' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                         onClick={() => setActiveTab('buildings')}
//                     >
//                         <div className="flex items-center">
//                             <CheckSquare className="mr-2 h-4 w-4" />
//                             <span>Buildings</span>
//                             <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                 {buildings?.length}
//                             </span>
//                         </div>
//                     </button>
//                 </div>

//                 {/* Content Area */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Properties Tab */}
//                     {activeTab === 'properties' && properties?.map((property, index) => (
//                         <div key={property._id} className={`group ${style.card}`}>
//                             {/* Image Carousel */}
//                             <div className={`${style.imageContainer} overflow-hidden`}>
//                                 {property.galleryList && property.galleryList.length > 0 ? (
//                                     <>
//                                         <div className="h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                             {property.galleryList.map((image, i) => (
//                                                 <img
//                                                     key={i}
//                                                     src={image}
//                                                     alt={property.post_title}
//                                                     className="h-full w-full object-cover flex-shrink-0"
//                                                 />
//                                             ))}
//                                         </div>
//                                         {property.galleryList.length > 1 && (
//                                             <>
//                                                 <button
//                                                     onClick={() => prevSlide(property.galleryList.length)}
//                                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronLeft size={20} />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => nextSlide(property.galleryList.length)}
//                                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronRight size={20} />
//                                                 </button>
//                                             </>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
//                                         <Building size={48} />
//                                     </div>
//                                 )}

//                                 {/* Favorite Button */}
//                                 <button
//                                     onClick={() => toggleFavorite(property._id)}
//                                     className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm rounded-full p-2 transition-all"
//                                 >
//                                     <Heart size={20} fill={favorites.includes(property._id) ? '#ef4444' : 'none'} className={favorites.includes(property._id) ? 'text-red-500' : 'text-gray-600'} />
//                                 </button>

//                                 {/* Type Badge */}
//                                 <div className={`absolute bottom-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}>
//                                     {property.type_name}
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className={style.detailsContainer}>
//                                 <h3 className={`${style.heading} line-clamp-1`}>{property.post_title}</h3>

//                                 <div className="flex items-center mb-1">
//                                     <MapPin size={16} className="mr-1 text-gray-600" />
//                                     <p className={`text-sm ${style.location} line-clamp-1`}>{property.address}</p>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mb-1">
//                                     {property.bedrooms && (
//                                         <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                             {property.bedrooms} BHK
//                                         </div>
//                                     )}
//                                     {property.bathrooms && (
//                                         <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                             {property.bathrooms} Bath
//                                         </div>
//                                     )}
//                                     {property.area && (
//                                         <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                             {property.area} {property.areaUnit}
//                                         </div>
//                                     )}
//                                     {property.furnishing && (
//                                         <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                             {property.furnishing}
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Amenities */}
//                                 {property.amenities && property.amenities.length > 0 && (
//                                     <div className="mb-1">
//                                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {[...new Set(property.amenities)].slice(0, 3).map((amenity, i) => (
//                                                 <div key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                                     {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                                                 </div>
//                                             ))}
//                                             {property.amenities.length > 3 && (
//                                                 <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                                     +{[...new Set(property.amenities)].length - 3} more
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Price and CTA */}
//                                 <div className={`flex items-center justify-between pt-4 border-t ${style.divider}`}>
//                                     <div>
//                                         <p className={`text-xs ${style.location}`}>Price</p>
//                                         <p className={`text-xl font-bold ${style.priceText}`}>{formatPrice(property.price)}</p>
//                                     </div>
//                                     <button className={`px-4 py-2 rounded-lg flex items-center transition-colors ${style.buttonPrimary}`}>
//                                         View Details
//                                         <ArrowRight size={16} className="ml-2" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     {/* Projects Tab */}
//                     {activeTab === 'projects' && projects?.map((project) => (
//                         <div key={project._id} className={`group ${style.card}`}>
//                             {/* Image Carousel */}
//                             <div className={`${style.imageContainer} overflow-hidden`}>
//                                 {project.gallery && project.gallery.length > 0 && project.gallery[0].images && project.gallery[0].images.length > 0 ? (
//                                     <>
//                                         <div className="h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                             {project.gallery[0].images.map((image, i) => (
//                                                 <img
//                                                     key={i}
//                                                     src={image}
//                                                     alt={project.name}
//                                                     className="h-full w-full object-cover flex-shrink-0"
//                                                 />
//                                             ))}
//                                         </div>
//                                         {project.gallery[0].images.length > 1 && (
//                                             <>
//                                                 <button
//                                                     onClick={() => prevSlide(project.gallery[0].images.length)}
//                                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronLeft size={20} />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => nextSlide(project.gallery[0].images.length)}
//                                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronRight size={20} />
//                                                 </button>
//                                             </>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
//                                         <Building size={48} />
//                                     </div>
//                                 )}

//                                 {/* Favorite Button */}
//                                 <button
//                                     onClick={() => toggleFavorite(project._id)}
//                                     className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm rounded-full p-2 transition-all"
//                                 >
//                                     <Heart size={20} fill={favorites.includes(project._id) ? '#ef4444' : 'none'} className={favorites.includes(project._id) ? 'text-red-500' : 'text-gray-600'} />
//                                 </button>

//                                 {/* Status Badge */}
//                                 <div className={`absolute bottom-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}>
//                                     {project.status?.replace('_', ' ') || 'PROJECT'}
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className={style.detailsContainer}>
//                                 <h3 className={`${style.heading} line-clamp-1`}>{project.name}</h3>

//                                 <div className="flex items-center mb-4">
//                                     <MapPin size={16} className="mr-1 text-gray-600" />
//                                     <p className={`text-sm ${style.location} line-clamp-1`}>{project.location?.address || 'Location information unavailable'}</p>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                         {project.type || 'N/A'}
//                                     </div>
//                                     {project.overview?.totalUnits && (
//                                         <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                             {project.overview.totalUnits} Units
//                                         </div>
//                                     )}
//                                     {project.overview?.totalTowers && (
//                                         <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                             {project.overview.totalTowers} Towers
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Floor Plans */}
//                                 {project.floorPlans && project.floorPlans.length > 0 && (
//                                     <div className="mb-4">
//                                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Floor Plans</h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {project.floorPlans.slice(0, 3).map((plan, i) => (
//                                                 <div key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                                     {plan.name}
//                                                 </div>
//                                             ))}
//                                             {project.floorPlans.length > 3 && (
//                                                 <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                                     +{project.floorPlans.length - 3} more
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Properties and CTA */}
//                                 <div className={`flex items-center justify-between pt-4 border-t ${style.divider}`}>
//                                     <div>
//                                         <p className={`text-xs ${style.location}`}>Properties</p>
//                                         <p className={`text-xl font-bold ${style.priceText}`}>{project.connectedProperties?.length || 0}</p>
//                                     </div>
//                                     <button className={`px-4 py-2 rounded-lg flex items-center transition-colors ${style.buttonPrimary}`}>
//                                         View Project
//                                         <ArrowRight size={16} className="ml-2" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     {/* Buildings Tab */}
//                     {activeTab === 'buildings' && buildings?.map((building) => (
//                         <div key={building._id} className={`group ${style.card}`}>
//                             {/* Image Carousel */}
//                             <div className={`${style.imageContainer} overflow-hidden`}>
//                                 {building.galleryList && building.galleryList.length > 0 ? (
//                                     <>
//                                         <div className="h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                             {building.galleryList.map((image, i) => (
//                                                 <img
//                                                     key={i}
//                                                     src={image}
//                                                     alt={building.name}
//                                                     className="h-full w-full object-cover flex-shrink-0"
//                                                 />
//                                             ))}
//                                         </div>
//                                         {building.galleryList.length > 1 && (
//                                             <>
//                                                 <button
//                                                     onClick={() => prevSlide(building.galleryList.length)}
//                                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronLeft size={20} />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => nextSlide(building.galleryList.length)}
//                                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                                 >
//                                                     <ChevronRight size={20} />
//                                                 </button>
//                                             </>
//                                         )}
//                                     </>
//                                 ) : (
//                                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
//                                         <Building size={48} />
//                                     </div>
//                                 )}

//                                 {/* Favorite Button */}
//                                 <button
//                                     onClick={() => toggleFavorite(building._id)}
//                                     className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm rounded-full p-2 transition-all"
//                                 >
//                                     <Heart size={20} fill={favorites.includes(building._id) ? '#ef4444' : 'none'} className={favorites.includes(building._id) ? 'text-red-500' : 'text-gray-600'} />
//                                 </button>

//                                 {/* Type Badge */}
//                                 <div className={`absolute bottom-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${style.badge}`}>
//                                     BUILDING
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className={style.detailsContainer}>
//                                 <h3 className={`${style.heading} line-clamp-1`}>{building.name}</h3>

//                                 <div className="flex items-center mb-4">
//                                     <MapPin size={16} className="mr-1 text-gray-600" />
//                                     <p className={`text-sm ${style.location} line-clamp-1`}>
//                                         {building.location?.coordinates ?
//                                             `${building?.location?.coordinates?.[0]}, ${building?.location?.coordinates?.[1]}` :
//                                             'Location coordinates unavailable'}
//                                     </p>
//                                 </div>

//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                         {building.totalFloors} {building.totalFloors > 1 ? 'Floors' : 'Floor'}
//                                     </div>
//                                     <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                         {building.totalProperties} Properties
//                                     </div>
//                                     <div className={`px-3 py-1 rounded-full text-xs font-medium ${style.amenityBadge}`}>
//                                         {building.numberOfFlatsAvailable} Available
//                                     </div>
//                                 </div>

//                                 {/* Floor Details */}
//                                 {building.flatsDetails && building.flatsDetails.length > 0 && (
//                                     <div className="mb-4">
//                                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Floor Details</h4>
//                                         <div className="grid grid-cols-1 gap-2">
//                                             {building.flatsDetails.slice(0, 2).map((floor, i) => (
//                                                 <div key={i} className={`p-2 rounded-lg text-xs ${style.amenityBadge}`}>
//                                                     <div className="flex justify-between">
//                                                         <span className="font-medium">Floor {floor.floorNumber}</span>
//                                                         <span className="font-medium">{floor.availableFlats}/{floor.flatsOnFloor} Available</span>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Links and CTA */}
//                                 <div className={`flex items-center justify-between pt-4 border-t ${style.divider}`}>
//                                     <div className="flex gap-2">
//                                         {building.brochureLink && (
//                                             <a href={building.brochureLink} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium ${style.priceText}`}>
//                                                 Brochure
//                                             </a>
//                                         )}
//                                         {building.mapLink && (
//                                             <a href={building.mapLink} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium ${style.priceText}`}>
//                                                 Map
//                                             </a>
//                                         )}
//                                     </div>
//                                     <button className={`px-4 py-2 rounded-lg flex items-center transition-colors ${style.buttonPrimary}`}>
//                                         View Building
//                                         <ArrowRight size={16} className="ml-2" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Show More Button */}
//                 <div className="mt-10 text-center">
//                     <button className={`px-6 py-3 rounded-lg flex items-center mx-auto transition-colors ${style.buttonPrimary}`}>
//                         <Plus size={18} className="mr-2" />
//                         View All {activeTab === 'properties' ? properties?.length :
//                             activeTab === 'projects' ? projects?.length :
//                                 buildings?.length} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertyShowcase;


// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Heart, MapPin, Home, Building, CheckSquare, ArrowRight, Plus, LayoutGrid, List, Settings } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const PropertyShowcase = ({ properties, projects, buildings }) => {
//     const [activeTab, setActiveTab] = useState('properties');
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [favorites, setFavorites] = useState([]);
//     const [gridType, setGridType] = useState('grid-3'); // 'grid-3' or 'list'
//     const [visualStyle, setVisualStyle] = useState('standard'); // 'standard' or 'glassmorphism'
//     const navigate = useNavigate()
//     const toggleFavorite = (id) => {
//         if (favorites.includes(id)) {
//             setFavorites(favorites.filter(item => item !== id));
//         } else {
//             setFavorites([...favorites, id]);
//         }
//     };

//     const nextSlide = (totalSlides) => {
//         setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     };

//     const prevSlide = (totalSlides) => {
//         setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };

//     const formatPrice = (price) => {
//         if (price >= 10000000) {
//             return `₹${(price / 10000000).toFixed(2)} Cr`;
//         } else if (price >= 100000) {
//             return `₹${(price / 100000).toFixed(2)} Lac`;
//         } else {
//             return `₹${price.toLocaleString()}`;
//         }
//     };

//     // Get the current data based on active tab
//     const getCurrentData = () => {
//         switch (activeTab) {
//             case 'properties': return properties || [];
//             case 'projects': return projects || [];
//             case 'buildings': return buildings || [];
//             default: return [];
//         }
//     };

//     // Card renderer that adapts to the grid type
//     const renderCard = (item, index) => {
//         const isProperty = activeTab === 'properties';
//         const isProject = activeTab === 'projects';
//         const isBuilding = activeTab === 'buildings';

//         // Determine image gallery source based on item type
//         const getImageGallery = () => {
//             if (isProperty && item.galleryList) return item.galleryList;
//             if (isProject && item.gallery && item.gallery.length > 0 && item.gallery[0].images) return item.gallery[0].images;
//             if (isBuilding && item.galleryList) return item.galleryList;
//             return [];
//         };

//         const images = getImageGallery();
//         const cardTitle = isProperty ? item.post_title : item.name;
//         const location = isProperty ? item.address :
//             isProject ? (item.location?.address || 'Location unavailable') :
//                 (item.location?.coordinates ? `${item.location.coordinates[0]}, ${item.location.coordinates[1]}` : 'Location unavailable');

//         // Apply different classes based on grid type and visual style
//         const cardClasses = `group overflow-hidden transition-all duration-500 transform hover:-translate-y-1 ${visualStyle === 'glassmorphism'
//             ? 'bg-white/30 backdrop-blur-md border border-white/20 shadow-lg'
//             : 'bg-white shadow-md hover:shadow-xl'
//             } ${gridType === 'list' ? 'flex flex-col md:flex-row w-full' : 'rounded-xl'
//             }`;

//         return (
//             <div
//                 key={item._id}
//                 className={`${cardClasses} cursor-pointer`}
//                 onClick={() => navigate(
//                     isProperty ? `/api/details/${item._id}` :
//                         isProject ? `/api/details/project/${item._id}` :
//                             `/api/details/building/${item._id}`
//                 )}
//             >
//                 {/* Image Carousel */}
//                 <div className={`relative overflow-hidden ${gridType === 'list' ? 'md:w-1/3 h-64 md:h-auto' : 'h-64'
//                     }`}>
//                     {images && images.length > 0 ? (
//                         <>
//                             <div className="h-full max-h-72 w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                                 {images.map((image, i) => (
//                                     <img
//                                         key={i}
//                                         src={image}
//                                         alt={cardTitle}
//                                         className="h-full w-full object-cover flex-shrink-0"
//                                     />
//                                 ))}
//                             </div>
//                             {images.length > 1 && (
//                                 <>
//                                     <button
//                                         onClick={() => prevSlide(images.length)}
//                                         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                     >
//                                         <ChevronLeft size={20} />
//                                     </button>
//                                     <button
//                                         onClick={() => nextSlide(images.length)}
//                                         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
//                                     >
//                                         <ChevronRight size={20} />
//                                     </button>
//                                 </>
//                             )}
//                         </>
//                     ) : (
//                         <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
//                             <Building size={48} />
//                         </div>
//                     )}

//                     {/* Favorite Button */}
//                     <button
//                         onClick={() => toggleFavorite(item._id)}
//                         className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-all"
//                     >
//                         <Heart size={20} fill={favorites.includes(item._id) ? '#ef4444' : 'none'} className={favorites.includes(item._id) ? 'text-red-500' : 'text-gray-600'} />
//                     </button>

//                     {/* Type/Status Badge */}
//                     <div className={`absolute bottom-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${isProperty ? 'bg-blue-600' :
//                         isProject && item.status === 'COMPLETED' ? 'bg-green-600' :
//                             isProject && item.status === 'UNDER_CONSTRUCTION' ? 'bg-amber-600' : 'bg-blue-600'
//                         }`}>
//                         {isProperty ? item.type_name :
//                             isProject ? (item.status?.replace('_', ' ') || 'Project') : 'Building'}
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className={`p-5 ${gridType === 'list' ? 'md:w-2/3' : ''}`}>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{cardTitle}</h3>

//                     <div className="flex items-center text-gray-600 mb-4">
//                         <MapPin size={16} className="mr-1" />
//                         <p className="text-sm line-clamp-1">{location}</p>
//                     </div>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                         {isProperty && (
//                             <>
//                                 {item.bedrooms && (
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {item.bedrooms} BHK
//                                     </div>
//                                 )}
//                                 {item.bathrooms && (
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {item.bathrooms} Bath
//                                     </div>
//                                 )}
//                                 {item.area && (
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {item.area} {item.areaUnit}
//                                     </div>
//                                 )}
//                                 {item.furnishing && (
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {item.furnishing}
//                                     </div>
//                                 )}
//                             </>
//                         )}
//                         {isProject && (
//                             <>
//                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                     {item.type || 'N/A'}
//                                 </div>
//                                 {item.overview?.totalUnits && (
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {item.overview.totalUnits} Units
//                                     </div>
//                                 )}
//                                 {item.overview?.totalTowers && (
//                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                         {item.overview.totalTowers} Towers
//                                     </div>
//                                 )}
//                             </>
//                         )}
//                         {isBuilding && (
//                             <>
//                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                     {item.totalFloors} {item.totalFloors > 1 ? 'Floors' : 'Floor'}
//                                 </div>
//                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                     {item.totalProperties} Properties
//                                 </div>
//                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
//                                     {item.numberOfFlatsAvailable} Available
//                                 </div>
//                             </>
//                         )}
//                     </div>

//                     {/* Conditional sections based on item type */}
//                     {isProperty && item.amenities && item.amenities.length > 0 && (
//                         <div className="mb-4">
//                             <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h4>
//                             <div className="flex flex-wrap gap-2">
//                                 {[...new Set(item.amenities)].slice(0, 3).map((amenity, i) => (
//                                     <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                         {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                                     </div>
//                                 ))}
//                                 {item.amenities.length > 3 && (
//                                     <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                         +{[...new Set(item.amenities)].length - 3} more
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}

//                     {isProject && item.floorPlans && item.floorPlans.length > 0 && (
//                         <div className="mb-4">
//                             <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Floor Plans</h4>
//                             <div className="flex flex-wrap gap-2">
//                                 {item.floorPlans.slice(0, 3).map((plan, i) => (
//                                     <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                         {plan.name}
//                                     </div>
//                                 ))}
//                                 {item.floorPlans.length > 3 && (
//                                     <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
//                                         +{item.floorPlans.length - 3} more
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}

//                     {isBuilding && item.flatsDetails && item.flatsDetails.length > 0 && (
//                         <div className="mb-4">
//                             <h4 className="text-sm font-semibold text-gray-700 mb-2">Floor Details</h4>
//                             <div className="grid grid-cols-1 gap-2">
//                                 {item.flatsDetails.slice(0, gridType === 'list' ? 3 : 2).map((floor, i) => (
//                                     <div key={i} className="bg-blue-50 p-2 rounded-lg text-xs">
//                                         <div className="flex justify-between">
//                                             <span className="font-medium text-blue-700">Floor {floor.floorNumber}</span>
//                                             <span className="font-medium text-blue-700">{floor.availableFlats}/{floor.flatsOnFloor} Available</span>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 {item.flatsDetails.length > (gridType === 'list' ? 3 : 2) && (
//                                     <div className="text-xs text-blue-700 font-medium">
//                                         +{item.flatsDetails.length - (gridType === 'list' ? 3 : 2)} more floors
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}

//                     {/* Price, Properties, or Links section */}
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                         <div>
//                             {isProperty && (
//                                 <>
//                                     <p className="text-xs text-gray-500">Price</p>
//                                     <p className="text-xl font-bold text-blue-600">{formatPrice(item.price)}</p>
//                                 </>
//                             )}
//                             {isProject && (
//                                 <>
//                                     <p className="text-xs text-gray-500">Properties</p>
//                                     <p className="text-xl font-bold text-blue-600">{item.connectedProperties?.length || 0}</p>
//                                 </>
//                             )}
//                             {isBuilding && (
//                                 <div className="flex gap-2">
//                                     {item.brochureLink && (
//                                         <a href={item.brochureLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                                             Brochure
//                                         </a>
//                                     )}
//                                     {item.mapLink && (
//                                         <a href={item.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                                             Map
//                                         </a>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
//                             View {isProperty ? 'Details' : isProject ? 'Project' : 'Building'}
//                             <ArrowRight size={16} className="ml-2" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className={`min-h-screen ${visualStyle === 'glassmorphism'
//             ? 'bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30'
//             : 'bg-gradient-to-br from-gray-50 to-gray-100'
//             }`}>
//             <div className="max-w-6xl mx-auto ">
//                 {/* Layout Controls */}
//                 {/* <div className="flex justify-between items-center mb-6">
//                     <h1 className="text-2xl font-bold text-gray-900">Real Estate Showcase</h1>
//                     <div className="flex items-center gap-4">
//                         <div className="bg-white p-1 rounded-lg shadow flex">
//                             <button
//                                 onClick={() => setGridType('grid-3')}
//                                 className={`p-2 rounded ${gridType === 'grid-3' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
//                                 title="Grid View"
//                             >
//                                 <LayoutGrid size={20} />
//                             </button>
//                             <button
//                                 onClick={() => setGridType('list')}
//                                 className={`p-2 rounded ${gridType === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
//                                 title="List View"
//                             >
//                                 <List size={20} />
//                             </button>
//                         </div>
//                         <div className="bg-white p-1 rounded-lg shadow">
//                             <button
//                                 onClick={() => setVisualStyle(visualStyle === 'standard' ? 'glassmorphism' : 'standard')}
//                                 className="p-2 rounded hover:bg-gray-100"
//                                 title="Toggle Visual Style"
//                             >
//                                 <Settings size={20} className="text-gray-500" />
//                             </button>
//                         </div>
//                     </div>
//                 </div> */}

//                 {/* Navigation Tabs */}
//                 <div className="flex justify-between items-center mb-2">
//                     <div className="flex overflow-x-auto hide-scrollbar">
//                         <button
//                             className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'properties' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                             onClick={() => setActiveTab('properties')}
//                         >
//                             <div className="flex items-center">
//                                 <Home className="mr-2 h-4 w-4" />
//                                 <span>Properties</span>
//                                 <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                     {properties?.length}
//                                 </span>
//                             </div>
//                         </button>
//                         <button
//                             className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                             onClick={() => setActiveTab('projects')}
//                         >
//                             <div className="flex items-center">
//                                 <Building className="mr-2 h-4 w-4" />
//                                 <span>Projects</span>
//                                 <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                     {projects?.length}
//                                 </span>
//                             </div>
//                         </button>
//                         <button
//                             className={`px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'buildings' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//                             onClick={() => setActiveTab('buildings')}
//                         >
//                             <div className="flex items-center">
//                                 <CheckSquare className="mr-2 h-4 w-4" />
//                                 <span>Buildings</span>
//                                 <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
//                                     {buildings?.length}
//                                 </span>
//                             </div>
//                         </button>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <div className="bg-white p-1 rounded-lg shadow flex">
//                             <button
//                                 onClick={() => setGridType('grid-3')}
//                                 className={`p-2 rounded ${gridType === 'grid-3' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
//                                 title="Grid View"
//                             >
//                                 <LayoutGrid size={20} />
//                             </button>
//                             <button
//                                 onClick={() => setGridType('list')}
//                                 className={`p-2 rounded ${gridType === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
//                                 title="List View"
//                             >
//                                 <List size={20} />
//                             </button>
//                         </div>
//                         <div className="bg-white p-1 rounded-lg shadow">
//                             <button
//                                 onClick={() => setVisualStyle(visualStyle === 'standard' ? 'glassmorphism' : 'standard')}
//                                 className="p-2 rounded hover:bg-gray-100"
//                                 title="Toggle Visual Style"
//                             >
//                                 <Settings size={20} className="text-gray-500" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Content Area */}
//                 <div className={gridType === 'grid-3' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col space-y-6'}>
//                     {getCurrentData().map((item, index) => renderCard(item, index))}
//                 </div>

//                 {/* Show More Button */}
//                 <div className="mt-10 text-center">
//                     <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-6 py-3 rounded-lg border border-blue-600 flex items-center mx-auto transition-colors">
//                         <Plus size={18} className="mr-2" />
//                         View All {activeTab === 'properties' ? properties?.length :
//                             activeTab === 'projects' ? projects?.length :
//                                 buildings?.length} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertyShowcase;


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, MapPin, Home, Building, CheckSquare, ArrowRight, Plus, LayoutGrid, List, Settings, ChevronDown, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertyShowcase = ({ properties, projects, buildings }) => {
    const [activeTab, setActiveTab] = useState('properties');
    const [slideStates, setSlideStates] = useState({}); // Track slide state for each card individually
    const [favorites, setFavorites] = useState([]);
    const [gridType, setGridType] = useState('grid-3'); // 'grid-3' or 'list'
    const [visualStyle, setVisualStyle] = useState('standard'); // 'standard' or 'glassmorphism'
    const navigate = useNavigate()

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(item => item !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    };

    // Updated slide navigation functions to work with individual card ids
    const nextSlide = (id, totalSlides) => {
        setSlideStates(prev => ({
            ...prev,
            [id]: ((prev[id] || 0) + 1) % totalSlides
        }));
    };

    const prevSlide = (id, totalSlides) => {
        setSlideStates(prev => ({
            ...prev,
            [id]: ((prev[id] || 0) - 1 + totalSlides) % totalSlides
        }));
    };

    const formatPrice = (price) => {
        if (price >= 10000000) {
            return `₹${(price / 10000000).toFixed(2)} Cr`;
        } else if (price >= 100000) {
            return `₹${(price / 100000).toFixed(2)} Lac`;
        } else {
            return `₹${price.toLocaleString()}`;
        }
    };

    // Get the current data based on active tab
    const getCurrentData = () => {
        switch (activeTab) {
            case 'properties': return properties || [];
            case 'projects': return projects || [];
            case 'buildings': return buildings || [];
            default: return [];
        }
    };

    // Card renderer that adapts to the grid type
    // const renderCard = (item, index) => {
    //     const isProperty = activeTab === 'properties';
    //     const isProject = activeTab === 'projects';
    //     const isBuilding = activeTab === 'buildings';

    //     // Determine image gallery source based on item type
    //     const getImageGallery = () => {
    //         if (isProperty && item.galleryList) return item.galleryList;
    //         if (isProject && item.gallery && item.gallery.length > 0 && item.gallery[0].images) return item.gallery[0].images;
    //         if (isBuilding && item.galleryList) return item.galleryList;
    //         return [];
    //     };

    //     const images = getImageGallery();
    //     const cardTitle = isProperty ? item.post_title : item.name;
    //     const location = isProperty ? item.address :
    //         isProject ? (item.location?.address || 'Location unavailable') :
    //             (item.location?.coordinates ? `${item.location.coordinates[0]}, ${item.location.coordinates[1]}` : 'Location unavailable');

    //     // Get current slide for this specific card
    //     const currentSlide = slideStates[item._id] || 0;

    //     // Apply different classes based on grid type and visual style
    //     const cardClasses = `group overflow-hidden transition-all duration-500 transform hover:-translate-y-1 ${visualStyle === 'glassmorphism'
    //         ? 'bg-white/30 backdrop-blur-md border border-white/20 shadow-lg'
    //         : 'bg-white shadow-md hover:shadow-xl'
    //         } ${gridType === 'list' ? 'flex flex-col md:flex-row w-full' : 'rounded-xl'
    //         }`;

    //     return (
    //         <div
    //             key={item._id}
    //             className={`${cardClasses} cursor-pointer`}
    //             onClick={() => navigate(
    //                 isProperty ? `/api/details/${item._id}` :
    //                     isProject ? `/api/details/project/${item._id}` :
    //                         `/api/details/building/${item._id}`
    //             )}
    //         >
    //             {/* Image Carousel */}
    //             <div className={`relative overflow-hidden ${gridType === 'list' ? 'md:w-1/3 h-64 md:h-auto' : 'h-64'
    //                 }`}>
    //                 {images && images.length > 0 ? (
    //                     <>
    //                         <div className="h-full max-h-72 w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
    //                             {images.map((image, i) => (
    //                                 <img
    //                                     key={i}
    //                                     src={image}
    //                                     alt={cardTitle}
    //                                     className="h-full w-full object-cover flex-shrink-0"
    //                                 />
    //                             ))}
    //                         </div>
    //                         {images.length > 1 && (
    //                             <>
    //                                 <button
    //                                     onClick={(e) => {
    //                                         e.stopPropagation(); // Prevent card navigation
    //                                         prevSlide(item._id, images.length);
    //                                     }}
    //                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
    //                                 >
    //                                     <ChevronLeft size={20} />
    //                                 </button>
    //                                 <button
    //                                     onClick={(e) => {
    //                                         e.stopPropagation(); // Prevent card navigation
    //                                         nextSlide(item._id, images.length);
    //                                     }}
    //                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
    //                                 >
    //                                     <ChevronRight size={20} />
    //                                 </button>
    //                             </>
    //                         )}
    //                     </>
    //                 ) : (
    //                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
    //                         <Building size={48} />
    //                     </div>
    //                 )}

    //                 {/* Favorite Button */}
    //                 <button
    //                     onClick={(e) => {
    //                         e.stopPropagation(); // Prevent card navigation
    //                         toggleFavorite(item._id);
    //                     }}
    //                     className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-all"
    //                 >
    //                     <Heart size={20} fill={favorites.includes(item._id) ? '#ef4444' : 'none'} className={favorites.includes(item._id) ? 'text-red-500' : 'text-gray-600'} />
    //                 </button>

    //                 {/* Type/Status Badge */}
    //                 <div className={`absolute bottom-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${isProperty ? 'bg-blue-600' :
    //                     isProject && item.status === 'COMPLETED' ? 'bg-green-600' :
    //                         isProject && item.status === 'UNDER_CONSTRUCTION' ? 'bg-amber-600' : 'bg-blue-600'
    //                     }`}>
    //                     {isProperty ? item.type_name :
    //                         isProject ? (item.status?.replace('_', ' ') || 'Project') : 'Building'}
    //                 </div>
    //             </div>

    //             {/* Content */}
    //             <div className={`p-5 ${gridType === 'list' ? 'md:w-2/3' : ''}`}>
    //                 <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{cardTitle}</h3>

    //                 <div className="flex items-center text-gray-600 mb-4">
    //                     <MapPin size={16} className="mr-1" />
    //                     <p className="text-sm line-clamp-1">{location}</p>
    //                 </div>

    //                 <div className="flex flex-wrap gap-2 mb-4">
    //                     {isProperty && (
    //                         <>
    //                             {item.bedrooms && (
    //                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                     {item.bedrooms} BHK
    //                                 </div>
    //                             )}
    //                             {item.bathrooms && (
    //                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                     {item.bathrooms} Bath
    //                                 </div>
    //                             )}
    //                             {item.area && (
    //                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                     {item.area} {item.areaUnit}
    //                                 </div>
    //                             )}
    //                             {item.furnishing && (
    //                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                     {item.furnishing}
    //                                 </div>
    //                             )}
    //                         </>
    //                     )}
    //                     {isProject && (
    //                         <>
    //                             <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                 {item.type || 'N/A'}
    //                             </div>
    //                             {item.overview?.totalUnits && (
    //                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                     {item.overview.totalUnits} Units
    //                                 </div>
    //                             )}
    //                             {item.overview?.totalTowers && (
    //                                 <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                     {item.overview.totalTowers} Towers
    //                                 </div>
    //                             )}
    //                         </>
    //                     )}
    //                     {isBuilding && (
    //                         <>
    //                             <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                 {item.totalFloors} {item.totalFloors > 1 ? 'Floors' : 'Floor'}
    //                             </div>
    //                             <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                 {item.totalProperties} Properties
    //                             </div>
    //                             <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                 {item.numberOfFlatsAvailable} Available
    //                             </div>
    //                         </>
    //                     )}
    //                 </div>

    //                 {/* Conditional sections based on item type */}
    //                 {isProperty && item.amenities && item.amenities.length > 0 && (
    //                     <div className="mb-4">
    //                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h4>
    //                         <div className="flex flex-wrap gap-2">
    //                             {[...new Set(item.amenities)].slice(0, 3).map((amenity, i) => (
    //                                 <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                     {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
    //                                 </div>
    //                             ))}
    //                             {item.amenities.length > 3 && (
    //                                 <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                     +{[...new Set(item.amenities)].length - 3} more
    //                                 </div>
    //                             )}
    //                         </div>
    //                     </div>
    //                 )}

    //                 {isProject && item.floorPlans && item.floorPlans.length > 0 && (
    //                     <div className="mb-4">
    //                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Floor Plans</h4>
    //                         <div className="flex flex-wrap gap-2">
    //                             {item.floorPlans.slice(0, 3).map((plan, i) => (
    //                                 <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                     {plan.name}
    //                                 </div>
    //                             ))}
    //                             {item.floorPlans.length > 3 && (
    //                                 <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                     +{item.floorPlans.length - 3} more
    //                                 </div>
    //                             )}
    //                         </div>
    //                     </div>
    //                 )}

    //                 {isBuilding && item.flatsDetails && item.flatsDetails.length > 0 && (
    //                     <div className="mb-4">
    //                         <h4 className="text-sm font-semibold text-gray-700 mb-2">Floor Details</h4>
    //                         <div className="grid grid-cols-1 gap-2">
    //                             {item.flatsDetails.slice(0, gridType === 'list' ? 3 : 2).map((floor, i) => (
    //                                 <div key={i} className="bg-blue-50 p-2 rounded-lg text-xs">
    //                                     <div className="flex justify-between">
    //                                         <span className="font-medium text-blue-700">Floor {floor.floorNumber}</span>
    //                                         <span className="font-medium text-blue-700">{floor.availableFlats}/{floor.flatsOnFloor} Available</span>
    //                                     </div>
    //                                 </div>
    //                             ))}
    //                             {item.flatsDetails.length > (gridType === 'list' ? 3 : 2) && (
    //                                 <div className="text-xs text-blue-700 font-medium">
    //                                     +{item.flatsDetails.length - (gridType === 'list' ? 3 : 2)} more floors
    //                                 </div>
    //                             )}
    //                         </div>
    //                     </div>
    //                 )}

    //                 {/* Price, Properties, or Links section */}
    //                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
    //                     <div>
    //                         {isProperty && (
    //                             <>
    //                                 <p className="text-xs text-gray-500">Price</p>
    //                                 <p className="text-xl font-bold text-blue-600">{formatPrice(item.price)}</p>
    //                             </>
    //                         )}
    //                         {isProject && (
    //                             <>
    //                                 <p className="text-xs text-gray-500">Properties</p>
    //                                 <p className="text-xl font-bold text-blue-600">{item.connectedProperties?.length || 0}</p>
    //                             </>
    //                         )}
    //                         {isBuilding && (
    //                             <div className="flex gap-2">
    //                                 {item.brochureLink && (
    //                                     <a href={item.brochureLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
    //                                         Brochure
    //                                     </a>
    //                                 )}
    //                                 {item.mapLink && (
    //                                     <a href={item.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
    //                                         Map
    //                                     </a>
    //                                 )}
    //                             </div>
    //                         )}
    //                     </div>
    //                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
    //                         View {isProperty ? 'Details' : isProject ? 'Project' : 'Building'}
    //                         <ArrowRight size={16} className="ml-2" />
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    // This modification focuses only on the renderCard function's list view styling

    // const renderCard = (item, index) => {
    //     const isProperty = activeTab === 'properties';
    //     const isProject = activeTab === 'projects';
    //     const isBuilding = activeTab === 'buildings';

    //     // Determine image gallery source based on item type
    //     const getImageGallery = () => {
    //         if (isProperty && item.galleryList) return item.galleryList;
    //         if (isProject && item.gallery && item.gallery.length > 0 && item.gallery[0].images) return item.gallery[0].images;
    //         if (isBuilding && item.galleryList) return item.galleryList;
    //         return [];
    //     };

    //     const images = getImageGallery();
    //     const cardTitle = isProperty ? item.post_title : item.name;
    //     const location = isProperty ? item.address :
    //         isProject ? (item.location?.address || 'Location unavailable') :
    //             (item.location?.coordinates ? `${item.location.coordinates[0]}, ${item.location.coordinates[1]}` : 'Location unavailable');

    //     // Get current slide for this specific card
    //     const currentSlide = slideStates[item._id] || 0;

    //     // Apply different classes based on grid type and visual style
    //     const cardClasses = `group overflow-hidden transition-all duration-500 transform hover:-translate-y-1 ${visualStyle === 'glassmorphism'
    //         ? 'bg-white/30 backdrop-blur-md border border-white/20 shadow-lg'
    //         : 'bg-white shadow-md hover:shadow-xl'
    //         } ${gridType === 'list' ? 'flex flex-col md:flex-row w-full' : 'rounded-xl'
    //         }`;

    //     return (
    //         <div
    //             key={item._id}
    //             className={`${cardClasses} cursor-pointer`}
    //             onClick={() => navigate(
    //                 isProperty ? `/api/details/${item._id}` :
    //                     isProject ? `/api/details/project/${item._id}` :
    //                         `/api/details/building/${item._id}`
    //             )}
    //         >
    //             {/* Image Carousel */}
    //             <div className={`relative overflow-hidden ${gridType === 'list' ? 'md:w-1/3 h-64 md:h-auto' : 'h-64'
    //                 }`}>
    //                 {/* Status badges - positioned at the top for list view */}
    //                 {gridType === 'list' && (
    //                     <div className="absolute top-3 left-3 z-10 flex gap-2">
    //                         <div className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
    //                             {isProperty ? 'FEATURED' :
    //                                 isProject ? 'PROJECT' : 'BUILDING'}
    //                         </div>
    //                         <div className="bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
    //                             SEEN
    //                         </div>
    //                     </div>
    //                 )}

    //                 {images && images.length > 0 ? (
    //                     <>
    //                         <div className="h-full max-h-72 w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
    //                             {images.map((image, i) => (
    //                                 <img
    //                                     key={i}
    //                                     src={image}
    //                                     alt={cardTitle}
    //                                     className="h-full w-full object-cover flex-shrink-0"
    //                                 />
    //                             ))}
    //                         </div>
    //                         {images.length > 1 && (
    //                             <>
    //                                 <button
    //                                     onClick={(e) => {
    //                                         e.stopPropagation(); // Prevent card navigation
    //                                         prevSlide(item._id, images.length);
    //                                     }}
    //                                     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
    //                                 >
    //                                     <ChevronLeft size={20} />
    //                                 </button>
    //                                 <button
    //                                     onClick={(e) => {
    //                                         e.stopPropagation(); // Prevent card navigation
    //                                         nextSlide(item._id, images.length);
    //                                     }}
    //                                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
    //                                 >
    //                                     <ChevronRight size={20} />
    //                                 </button>
    //                             </>
    //                         )}
    //                     </>
    //                 ) : (
    //                     <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
    //                         <Building size={48} />
    //                     </div>
    //                 )}

    //                 {/* Favorite Button */}
    //                 <button
    //                     onClick={(e) => {
    //                         e.stopPropagation(); // Prevent card navigation
    //                         toggleFavorite(item._id);
    //                     }}
    //                     className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-all"
    //                 >
    //                     <Heart size={20} fill={favorites.includes(item._id) ? '#ef4444' : 'none'} className={favorites.includes(item._id) ? 'text-red-500' : 'text-gray-600'} />
    //                 </button>

    //                 {/* Type/Status Badge - Only show in grid view */}
    //                 {gridType !== 'list' && (
    //                     <div className={`absolute bottom-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${isProperty ? 'bg-blue-600' :
    //                         isProject && item.status === 'COMPLETED' ? 'bg-green-600' :
    //                             isProject && item.status === 'UNDER_CONSTRUCTION' ? 'bg-amber-600' : 'bg-blue-600'
    //                         }`}>
    //                         {isProperty ? item.type_name :
    //                             isProject ? (item.status?.replace('_', ' ') || 'Project') : 'Building'}
    //                     </div>
    //                 )}
    //             </div>

    //             {/* Content */}
    //             <div className={`p-5 ${gridType === 'list' ? 'md:w-2/3 flex flex-col' : ''}`}>
    //                 {/* Property details section */}
    //                 <div className={`${gridType === 'list' ? 'mb-auto' : ''}`}>
    //                     {/* Location section - styled to match the image */}
    //                     {gridType === 'list' && (
    //                         <div className="mb-2">
    //                             <div className="text-gray-700 uppercase font-bold text-lg mb-1">{item.location?.city || 'PANDUNAGAR'}</div>
    //                             <h3 className="text-xl font-bold text-gray-900 mb-2">{cardTitle || '4 BHK Flat'} in {location || 'Pandu Nagar, Kanpur'}</h3>
    //                         </div>
    //                     )}

    //                     {gridType !== 'list' && (
    //                         <>
    //                             <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{cardTitle}</h3>
    //                             <div className="flex items-center text-gray-600 mb-4">
    //                                 <MapPin size={16} className="mr-1" />
    //                                 <p className="text-sm line-clamp-1">{location}</p>
    //                             </div>
    //                         </>
    //                     )}

    //                     {/* Price section for list view - styled to match image */}
    //                     {isProperty && gridType === 'list' && (
    //                         <div className="flex items-center mb-4">
    //                             <div className="mr-6">
    //                                 <div className="text-3xl font-bold text-gray-900">{formatPrice(item.price) || '₹3.05 Cr'}</div>
    //                                 <div className="text-gray-600 text-sm">{item.price && item.area ? `₹${Math.round(item.price / item.area).toLocaleString()} /sqft` : '₹8,472 /sqft'}</div>
    //                             </div>

    //                             <div className="border-l border-gray-200 pl-6">
    //                                 <div className="flex items-baseline">
    //                                     <span className="text-xl font-bold text-gray-900">{item.area || '3,600'} {item.areaUnit || 'sqft'}</span>
    //                                     <span className="text-gray-500 text-sm ml-2">({Math.round(item.area * 0.093) || '334'} sqm)</span>
    //                                 </div>
    //                                 <div className="text-gray-600 text-sm">Carpet Area</div>
    //                             </div>

    //                             <div className="border-l border-gray-200 pl-6 ml-6">
    //                                 <div className="text-xl font-bold text-gray-900">{item.bedrooms || '4'} BHK</div>
    //                                 <div className="text-gray-600 text-sm">({item.bathrooms || '3'} Baths)</div>
    //                             </div>

    //                             <div className="border-l border-gray-200 pl-6 ml-6">
    //                                 <div className="text-lg font-semibold text-gray-900">{isProperty && item.furnishing ? item.furnishing : 'Under Construction'}</div>
    //                             </div>
    //                         </div>
    //                     )}

    //                     {/* Tags and features section for non-list view */}
    //                     {gridType !== 'list' && (
    //                         <div className="flex flex-wrap gap-2 mb-4">
    //                             {isProperty && (
    //                                 <>
    //                                     {item.bedrooms && (
    //                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                             {item.bedrooms} BHK
    //                                         </div>
    //                                     )}
    //                                     {item.bathrooms && (
    //                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                             {item.bathrooms} Bath
    //                                         </div>
    //                                     )}
    //                                     {item.area && (
    //                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                             {item.area} {item.areaUnit}
    //                                         </div>
    //                                     )}
    //                                     {item.furnishing && (
    //                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                             {item.furnishing}
    //                                         </div>
    //                                     )}
    //                                 </>
    //                             )}
    //                             {/* Project and Building details remain unchanged */}
    //                             {isProject && (
    //                                 <>
    //                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                         {item.type || 'N/A'}
    //                                     </div>
    //                                     {item.overview?.totalUnits && (
    //                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                             {item.overview.totalUnits} Units
    //                                         </div>
    //                                     )}
    //                                     {item.overview?.totalTowers && (
    //                                         <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                             {item.overview.totalTowers} Towers
    //                                         </div>
    //                                     )}
    //                                 </>
    //                             )}
    //                             {isBuilding && (
    //                                 <>
    //                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                         {item.totalFloors} {item.totalFloors > 1 ? 'Floors' : 'Floor'}
    //                                     </div>
    //                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                         {item.totalProperties} Properties
    //                                     </div>
    //                                     <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
    //                                         {item.numberOfFlatsAvailable} Available
    //                                     </div>
    //                                 </>
    //                             )}
    //                         </div>
    //                     )}

    //                     {/* Highlights section for list view */}
    //                     {gridType === 'list' && (
    //                         <div className="mb-2">
    //                             <div className="flex items-center">
    //                                 <div className="text-gray-700 font-semibold mr-2">Highlights : </div>
    //                                 <div className="font-medium">Power Back-up</div>
    //                             </div>
    //                             <div className="text-gray-700 mt-2">
    //                                 {item.description || "Beatiful elevation. Heart of city. Very spacious."}
    //                             </div>
    //                         </div>
    //                     )}

    //                     {/* Conditional sections based on item type - keep existing code */}
    //                     {isProperty && item.amenities && item.amenities.length > 0 && gridType !== 'list' && (
    //                         <div className="mb-4">
    //                             <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h4>
    //                             <div className="flex flex-wrap gap-2">
    //                                 {[...new Set(item.amenities)].slice(0, 3).map((amenity, i) => (
    //                                     <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                         {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
    //                                     </div>
    //                                 ))}
    //                                 {item.amenities.length > 3 && (
    //                                     <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                         +{[...new Set(item.amenities)].length - 3} more
    //                                     </div>
    //                                 )}
    //                             </div>
    //                         </div>
    //                     )}

    //                     {isProject && item.floorPlans && item.floorPlans.length > 0 && gridType !== 'list' && (
    //                         <div className="mb-4">
    //                             <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Floor Plans</h4>
    //                             <div className="flex flex-wrap gap-2">
    //                                 {item.floorPlans.slice(0, 3).map((plan, i) => (
    //                                     <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                         {plan.name}
    //                                     </div>
    //                                 ))}
    //                                 {item.floorPlans.length > 3 && (
    //                                     <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
    //                                         +{item.floorPlans.length - 3} more
    //                                     </div>
    //                                 )}
    //                             </div>
    //                         </div>
    //                     )}

    //                     {isBuilding && item.flatsDetails && item.flatsDetails.length > 0 && gridType !== 'list' && (
    //                         <div className="mb-4">
    //                             <h4 className="text-sm font-semibold text-gray-700 mb-2">Floor Details</h4>
    //                             <div className="grid grid-cols-1 gap-2">
    //                                 {item.flatsDetails.slice(0, gridType === 'list' ? 3 : 2).map((floor, i) => (
    //                                     <div key={i} className="bg-blue-50 p-2 rounded-lg text-xs">
    //                                         <div className="flex justify-between">
    //                                             <span className="font-medium text-blue-700">Floor {floor.floorNumber}</span>
    //                                             <span className="font-medium text-blue-700">{floor.availableFlats}/{floor.flatsOnFloor} Available</span>
    //                                         </div>
    //                                     </div>
    //                                 ))}
    //                                 {item.flatsDetails.length > (gridType === 'list' ? 3 : 2) && (
    //                                     <div className="text-xs text-blue-700 font-medium">
    //                                         +{item.flatsDetails.length - (gridType === 'list' ? 3 : 2)} more floors
    //                                     </div>
    //                                 )}
    //                             </div>
    //                         </div>
    //                     )}
    //                 </div>

    //                 {/* Footer section */}
    //                 <div className={`${gridType === 'list' ? 'mt-4 pt-4 border-t border-gray-100 flex justify-between items-center' : 'flex items-center justify-between pt-4 border-t border-gray-100'}`}>
    //                     {/* Dealer info for list view */}
    //                     {gridType === 'list' && (
    //                         <div className="flex items-center">
    //                             <div className="mr-1 text-gray-600">Dealer · </div>
    //                             <div className="mr-1 text-gray-600">1w ago</div>
    //                             <div className="ml-2 font-medium">PASSION INFRA DEV...</div>
    //                         </div>
    //                     )}

    //                     {/* Show price only in grid view */}
    //                     {gridType !== 'list' && isProperty && (
    //                         <div>
    //                             <p className="text-xs text-gray-500">Price</p>
    //                             <p className="text-xl font-bold text-blue-600">{formatPrice(item.price)}</p>
    //                         </div>
    //                     )}
    //                     {gridType !== 'list' && isProject && (
    //                         <div>
    //                             <p className="text-xs text-gray-500">Properties</p>
    //                             <p className="text-xl font-bold text-blue-600">{item.connectedProperties?.length || 0}</p>
    //                         </div>
    //                     )}
    //                     {gridType !== 'list' && isBuilding && (
    //                         <div className="flex gap-2">
    //                             {item.brochureLink && (
    //                                 <a href={item.brochureLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
    //                                     Brochure
    //                                 </a>
    //                             )}
    //                             {item.mapLink && (
    //                                 <a href={item.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
    //                                     Map
    //                                 </a>
    //                             )}
    //                         </div>
    //                     )}

    //                     {/* Action buttons - made to match the image */}
    //                     <div className="flex items-center gap-2">
    //                         {gridType === 'list' && (
    //                             <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
    //                                 View Number
    //                             </button>
    //                         )}
    //                         <button className={`${gridType === 'list' ? 'bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} px-6 py-2 rounded-lg flex items-center transition-colors`}>
    //                             {gridType === 'list' ? 'Contact' : `View ${isProperty ? 'Details' : isProject ? 'Project' : 'Building'}`}
    //                             {gridType !== 'list' && <ArrowRight size={16} className="ml-2" />}
    //                         </button>
    //                     </div>
    //                 </div>

    //                 {/* View count badge for list view */}
    //                 {gridType === 'list' && (
    //                     <div className="absolute bottom-3 left-3 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 flex items-center">
    //                         <span className="text-yellow-500 mr-1">★</span>
    //                         27 people viewed this property since last week
    //                     </div>
    //                 )}
    //             </div>
    //         </div>
    //     );
    // };

    const renderCard = (item, index) => {
        const isProperty = activeTab === 'properties';
        const isProject = activeTab === 'projects';
        const isBuilding = activeTab === 'buildings';

        // Determine image gallery source based on item type
        const getImageGallery = () => {
            if (isProperty && item.galleryList) return item.galleryList;
            if (isProject && item.gallery && item.gallery.length > 0 && item.gallery[0].images) return item.gallery[0].images;
            if (isBuilding && item.galleryList) return item.galleryList;
            return [];
        };

        const images = getImageGallery();
        const cardTitle = isProperty ? item.post_title : item.name;
        const location = isProperty ? item.address :
            isProject ? (item.location?.address || 'Location unavailable') :
                (item.location?.coordinates ? `${item.location.coordinates[0]}, ${item.location.coordinates[1]}` : 'Location unavailable');

        // Get current slide for this specific card
        const currentSlide = slideStates[item._id] || 0;

        // Apply different classes based on grid type and visual style
        const cardClasses = `group overflow-hidden transition-all duration-500 transform hover:-translate-y-1 ${visualStyle === 'glassmorphism'
            ? 'bg-white/30 backdrop-blur-md border border-white/20 shadow-lg'
            : 'bg-white shadow-md hover:shadow-xl'
            } ${gridType === 'list' ? 'flex flex-col md:flex-row w-full' : 'rounded-xl'
            }`;

        return (
            <div
                key={item._id}
                className={`${cardClasses} cursor-pointer`}
                onClick={() => navigate(
                    isProperty ? `/api/details/${item._id}` :
                        isProject ? `/api/details/project/${item._id}` :
                            `/api/details/building/${item._id}`
                )}
            >
                {/* Image Carousel */}
                <div className={`relative overflow-hidden ${gridType === 'list' ? 'md:w-1/3 h-64 md:h-auto' : 'h-64'
                    }`}>
                    {/* Status badges - positioned at the top for list view */}
                    {gridType === 'list' && (
                        <div className="absolute top-3 left-3 z-10 flex gap-2">
                            <div className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                {isProperty ? 'FEATURED' :
                                    isProject ? 'PROJECT' : 'BUILDING'}
                            </div>
                            <div className="bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                                SEEN
                            </div>
                        </div>
                    )}

                    {/* RESALE badge - Added to match the image */}
                    {isProperty && item.listingType === 'RESALE' && (
                        <div className="absolute top-3 right-3 z-10 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded">
                            RESALE
                        </div>
                    )}

                    {images && images.length > 0 ? (
                        <>
                            <div className="h-full max-h-72 w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {images.map((image, i) => (
                                    <img
                                        key={i}
                                        src={image}
                                        alt={cardTitle}
                                        className="h-full w-full object-cover flex-shrink-0"
                                    />
                                ))}
                            </div>
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card navigation
                                            prevSlide(item._id, images.length);
                                        }}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card navigation
                                            nextSlide(item._id, images.length);
                                        }}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100 transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </>
                    ) : (
                        <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
                            <Building size={48} />
                        </div>
                    )}

                    {/* Favorite Button - Adjusted to show unfilled by default */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card navigation
                            toggleFavorite(item._id);
                        }}
                        className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 transition-all"
                    >
                        <Heart size={20} fill={favorites.includes(item._id) ? '#ef4444' : 'none'} className={favorites.includes(item._id) ? 'text-red-500' : 'text-gray-500'} />
                    </button>

                    {/* Type/Status Badge - Only show in grid view */}
                    {gridType !== 'list' && (
                        <div className={`absolute bottom-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${isProperty ? 'bg-blue-600' :
                            isProject && item.status === 'COMPLETED' ? 'bg-green-600' :
                                isProject && item.status === 'UNDER_CONSTRUCTION' ? 'bg-amber-600' : 'bg-blue-600'
                            }`}>
                            {isProperty ? item.type_name :
                                isProject ? (item.status?.replace('_', ' ') || 'Project') : 'Building'}
                        </div>
                    )}

                    {/* View count badge for list view - Updated with star icon */}
                    {gridType === 'list' && (
                        <div className="absolute bottom-3 left-3 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            27 people viewed this property since last week
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className={`p-5 ${gridType === 'list' ? 'md:w-2/3 flex flex-col' : ''}`}>
                    {/* Property details section */}
                    <div className={`${gridType === 'list' ? 'mb-auto' : ''}`}>
                        {/* Location section - styled to match the image */}
                        {gridType === 'list' && (
                            <div className="mb-2">
                                <div className="text-gray-700 uppercase font-bold text-lg mb-1">{item.location?.city || 'PANDUNAGAR'}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{cardTitle || '4 BHK Flat'} in {location || 'Pandu Nagar, Kanpur'}</h3>
                            </div>
                        )}

                        {gridType !== 'list' && (
                            <>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{cardTitle}</h3>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin size={16} className="mr-1" />
                                    <p className="text-sm line-clamp-1">{location}</p>
                                </div>
                            </>
                        )}

                        {/* Price section for list view - styled to match image exactly */}
                        {isProperty && gridType === 'list' && (
                            <div className="flex items-center mb-4">
                                <div className="mr-6">
                                    <div className="text-3xl font-bold text-gray-900">{formatPrice(item.price) || '₹3.05 Cr'}</div>
                                    <div className="text-gray-600 text-sm">{item.price && item.area ? `₹${Math.round(item.price / item.area).toLocaleString()} /sqft` : '₹8,472 /sqft'}</div>
                                </div>

                                <div className="border-l border-gray-200 pl-6">
                                    <div className="flex items-baseline">
                                        <span className="text-xl font-bold text-gray-900">{item.area || '3,600'} {item.areaUnit || 'sqft'}</span>
                                        <span className="text-gray-500 text-sm ml-2">({Math.round(item.area * 0.093) || '334'} sqm)</span>
                                        {/* Added dropdown chevron icon */}
                                        <ChevronDown size={14} className="ml-1 text-gray-500" />
                                    </div>
                                    <div className="text-gray-600 text-sm">Carpet Area</div>
                                </div>

                                <div className="border-l border-gray-200 pl-6 ml-6">
                                    <div className="text-xl font-bold text-gray-900">{item.bedrooms || '4'} BHK</div>
                                    <div className="text-gray-600 text-sm">({item.bathrooms || '3'} Baths)</div>
                                </div>

                                <div className="border-l border-gray-200 pl-6 ml-6">
                                    <div className="text-lg font-semibold text-gray-900">{item.furnishing || 'Under Construction'}</div>
                                </div>
                            </div>
                        )}

                        {/* Tags and features section for non-list view */}
                        {gridType !== 'list' && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {isProperty && (
                                    <>
                                        {item.bedrooms && (
                                            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                                {item.bedrooms} BHK
                                            </div>
                                        )}
                                        {item.bathrooms && (
                                            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                                {item.bathrooms} Bath
                                            </div>
                                        )}
                                        {item.area && (
                                            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                                {item.area} {item.areaUnit}
                                            </div>
                                        )}
                                        {item.furnishing && (
                                            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                                {item.furnishing}
                                            </div>
                                        )}
                                    </>
                                )}
                                {/* Project and Building details remain unchanged */}
                                {isProject && (
                                    <>
                                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                            {item.type || 'N/A'}
                                        </div>
                                        {item.overview?.totalUnits && (
                                            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                                {item.overview.totalUnits} Units
                                            </div>
                                        )}
                                        {item.overview?.totalTowers && (
                                            <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                                {item.overview.totalTowers} Towers
                                            </div>
                                        )}
                                    </>
                                )}
                                {isBuilding && (
                                    <>
                                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                            {item.totalFloors} {item.totalFloors > 1 ? 'Floors' : 'Floor'}
                                        </div>
                                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                            {item.totalProperties} Properties
                                        </div>
                                        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                            {item.numberOfFlatsAvailable} Available
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/* Highlights section for list view - updated styling for match */}
                        {gridType === 'list' && (
                            <div className="mb-2">
                                <div className="flex items-center">
                                    <div className="text-gray-700 font-semibold mr-2">Highlights : </div>
                                    <div className="font-medium">Power Back-up</div>
                                </div>
                                <div className="text-gray-700 mt-2">
                                    {item.description || "Beatiful elevation. Heart of city. Very spacious."}
                                </div>
                            </div>
                        )}

                        {/* Conditional sections based on item type - keep existing code */}
                        {isProperty && item.amenities && item.amenities.length > 0 && gridType !== 'list' && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[...new Set(item.amenities)].slice(0, 3).map((amenity, i) => (
                                        <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
                                            {amenity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                        </div>
                                    ))}
                                    {item.amenities.length > 3 && (
                                        <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
                                            +{[...new Set(item.amenities)].length - 3} more
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {isProject && item.floorPlans && item.floorPlans.length > 0 && gridType !== 'list' && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Floor Plans</h4>
                                <div className="flex flex-wrap gap-2">
                                    {item.floorPlans.slice(0, 3).map((plan, i) => (
                                        <div key={i} className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
                                            {plan.name}
                                        </div>
                                    ))}
                                    {item.floorPlans.length > 3 && (
                                        <div className="bg-blue-50 px-3 py-1 rounded-full text-xs font-medium text-blue-700">
                                            +{item.floorPlans.length - 3} more
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {isBuilding && item.flatsDetails && item.flatsDetails.length > 0 && gridType !== 'list' && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Floor Details</h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {item.flatsDetails.slice(0, gridType === 'list' ? 3 : 2).map((floor, i) => (
                                        <div key={i} className="bg-blue-50 p-2 rounded-lg text-xs">
                                            <div className="flex justify-between">
                                                <span className="font-medium text-blue-700">Floor {floor.floorNumber}</span>
                                                <span className="font-medium text-blue-700">{floor.availableFlats}/{floor.flatsOnFloor} Available</span>
                                            </div>
                                        </div>
                                    ))}
                                    {item.flatsDetails.length > (gridType === 'list' ? 3 : 2) && (
                                        <div className="text-xs text-blue-700 font-medium">
                                            +{item.flatsDetails.length - (gridType === 'list' ? 3 : 2)} more floors
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer section - updated to match design */}
                    <div className={`${gridType === 'list' ? 'mt-4 pt-4 border-t border-gray-100 flex justify-between items-center' : 'flex items-center justify-between pt-4 border-t border-gray-100'}`}>
                        {/* Dealer info for list view */}
                        {gridType === 'list' && (
                            <div className="flex items-center">
                                <div className="text-gray-600">Dealer · 1w ago</div>
                                <div className="ml-2 font-medium">PASSION INFRA DEV...</div>
                            </div>
                        )}

                        {/* Show price only in grid view */}
                        {gridType !== 'list' && isProperty && (
                            <div>
                                <p className="text-xs text-gray-500">Price</p>
                                <p className="text-xl font-bold text-blue-600">{formatPrice(item.price)}</p>
                            </div>
                        )}
                        {gridType !== 'list' && isProject && (
                            <div>
                                <p className="text-xs text-gray-500">Properties</p>
                                <p className="text-xl font-bold text-blue-600">{item.connectedProperties?.length || 0}</p>
                            </div>
                        )}
                        {gridType !== 'list' && isBuilding && (
                            <div className="flex gap-2">
                                {item.brochureLink && (
                                    <a href={item.brochureLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        Brochure
                                    </a>
                                )}
                                {item.mapLink && (
                                    <a href={item.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        Map
                                    </a>
                                )}
                            </div>
                        )}

                        {/* Action buttons - updated to match the image exactly */}
                        <div className="flex items-center gap-2">
                            {gridType === 'list' && (
                                <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 font-medium">
                                    View Number
                                </button>
                            )}
                            <button className={`${gridType === 'list' ? 'bg-blue-600 text-white font-medium' : 'bg-blue-600 hover:bg-blue-700 text-white'} px-6 py-2 rounded-lg flex items-center transition-colors`}>
                                {gridType === 'list' ? (
                                    <>
                                        <Phone size={16} className="mr-2" />
                                        Contact
                                    </>
                                ) : (
                                    <>
                                        View {isProperty ? 'Details' : isProject ? 'Project' : 'Building'}
                                        <ArrowRight size={16} className="ml-2" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div >
            <div className="max-w-6xl mx-auto ">
                {/* Navigation Tabs */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex overflow-x-auto hide-scrollbar">
                        <button
                            className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'properties' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => setActiveTab('properties')}
                        >
                            <div className="flex items-center">
                                <Home className="mr-2 h-4 w-4" />
                                <span>Properties</span>
                                <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                                    {properties?.length}
                                </span>
                            </div>
                        </button>
                        <button
                            className={`px-6 py-3 rounded-full mr-4 transition-all duration-300 ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            <div className="flex items-center">
                                <Building className="mr-2 h-4 w-4" />
                                <span>Projects</span>
                                <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                                    {projects?.length}
                                </span>
                            </div>
                        </button>
                        <button
                            className={`px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'buildings' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => setActiveTab('buildings')}
                        >
                            <div className="flex items-center">
                                <CheckSquare className="mr-2 h-4 w-4" />
                                <span>Buildings</span>
                                <span className="ml-2 bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                                    {buildings?.length}
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white p-1 rounded-lg shadow flex">
                            <button
                                onClick={() => setGridType('grid-3')}
                                className={`p-2 rounded ${gridType === 'grid-3' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                                title="Grid View"
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button
                                onClick={() => setGridType('list')}
                                className={`p-2 rounded ${gridType === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                                title="List View"
                            >
                                <List size={20} />
                            </button>
                        </div>
                        <div className="bg-white p-1 rounded-lg shadow">
                            <button
                                onClick={() => setVisualStyle(visualStyle === 'standard' ? 'glassmorphism' : 'standard')}
                                className="p-2 rounded hover:bg-gray-100"
                                title="Toggle Visual Style"
                            >
                                <Settings size={20} className="text-gray-500" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className={gridType === 'grid-3' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col space-y-6'}>
                    {getCurrentData().map((item, index) => renderCard(item, index))}
                </div>

                {/* Show More Button */}
                <div className="mt-10 text-center">
                    <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-6 py-3 rounded-lg border border-blue-600 flex items-center mx-auto transition-colors">
                        <Plus size={18} className="mr-2" />
                        View All {activeTab === 'properties' ? properties?.length :
                            activeTab === 'projects' ? projects?.length :
                                buildings?.length} {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyShowcase;


