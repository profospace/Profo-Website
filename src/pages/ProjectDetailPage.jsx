import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProject } from '../redux/features/Projects/projectsSlice'
import { useParams } from 'react-router-dom'
import GalleryGrid from '../components/CategoryPreview'
import BuildingViewer from '../components/BuildingViewer'
import buildingConfig from '../files/building-config-6.json';
import BuildingManager from '../components/BuildingManager'
import { Heart } from 'lucide-react';
import ProjectSpecificationCard from '../components/ProjectSpecificationCard'
import LocationLatLngMap from '../components/LocationLatLngMap'
import AmenitiesDisplay from '../components/AmenitiesDisplay'
import PropertyCard from '../components/PropertyCard'
import AskDeveloper from '../components/AskDeveloper'
import HeaderSection from '../components/HeaderSection'
import BuildingContactCard from '../components/BuildingContactCard'
import ProjectFloorPlan from '../components/ProjectFloorPlan'
import { TrendingUp, CircleDollarSign } from 'lucide-react';
import ProjectHighlights from '../components/ProjectHighlights'
import ProjectNearbyLocations from '../components/ProjectNearbyLocations'
import DownloadBrochures from '../components/DownloadBrochures'
import PropertyDetailBuildingInfo from '../components/PropertyDetailProjectInfo'
import { motion, AnimatePresence } from 'framer-motion';
import BuildingSelector from '../components/BuildingSelector'
import ProjectContactCard from '../components/ProjectContactCard'
import HeadingCommon from '../components/HeadingCommon'

// function ProjectDetailPage() {
//   const { projectDetail } = useSelector(state => state.projects)
//   const [activeSection, setActiveSection] = useState(null);
//   const dispatch = useDispatch()
//   const { post_id } = useParams();
//   const [isBuildingViewerInView, setIsBuildingViewerInView] = useState(false);


//   // console.log(post_id)

//   console.log(projectDetail)
//   useEffect(() => {
//     dispatch(getSingleProject(post_id));
//   }, [post_id, dispatch]);

//   function formatPrice(value) {
//     if (typeof value !== "number" || value < 0) return value; // Ensure it's a positive number

//     if (value >= 10000000) {
//       // 1 crore or more
//       return `₹${(value / 10000000).toFixed(1)} Cr`;
//     } else if (value >= 100000) {
//       // 1 lakh or more
//       return `₹${(value / 100000).toFixed(1)} Lakh`;
//     } else if (value >= 1000) {
//       // 1 thousand or more
//       return `₹${(value / 1000).toFixed(1)}K`;
//     }
//     return `₹${value}`; // Less than 1000, show full amount
//   }
//   useEffect(() => {
//     const options = {
//       threshold: [0.8, 0.5] // Detect when section enters and when it's about to leave
//     };

//     const callback = (entries) => {
//       entries.forEach(entry => {
//         if (entry.target === sectionRefs['ProjectOverview'].current) {
//           // If more than 10% of the section is visible, consider it in view
//           if (entry.intersectionRatio > 0.8 && entry.intersectionRatio < 0.9) {
//             setIsBuildingViewerInView(true);
//           } else {
//             setIsBuildingViewerInView(false);
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     if (sectionRefs['ProjectOverview'].current) {
//       observer.observe(sectionRefs['ProjectOverview'].current);
//     }

//     return () => {
//       if (sectionRefs['ProjectOverview'].current) {
//         observer.unobserve(sectionRefs['ProjectOverview'].current);
//       }
//     };
//   }, []);

//   //1.a Create refs for each section
//   const sectionRefs = {
//     'Description': useRef(null),
//     'FloorPlans': useRef(null),
//     'ProjectOverview': useRef(null),
//     'Map': useRef(null),
//     'Specifications': useRef(null),
//     'Amenities': useRef(null),
//     'highlights': useRef(null),
//     'NearBy': useRef(null),
//     'Gallery': useRef(null),
//     'ConnectedProperties': useRef(null),
//     'AskTheDeveloper': useRef(null),

//   };

//   // 1.b
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const offset = 200; // Adjust based on your header height

//       // Find the section currently in view
//       const currentSection = Object.entries(sectionRefs).find(([_, ref]) => {
//         if (!ref.current) return false;
//         const { top, bottom } = ref.current.getBoundingClientRect();
//         return top <= offset && bottom > offset;
//       });

//       if (currentSection) {
//         setActiveSection(currentSection[0]);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);



//   return (
//     <div className="min-h-screen ">
//       {/* Header Section */}
//       <div className="relative">
//         <HeaderSection details={projectDetail} sectionRefs={sectionRefs} activeSection={activeSection} />
//       </div>

//       {/* Main content area with grid layout */}
//       <div className="mx-auto px-4">
//         <div className="grid grid-cols-12 gap-2">
//           {/* Left content area */}
//           <motion.div
//             className={`${isBuildingViewerInView ? 'col-span-12' : 'col-span-12 lg:col-span-8'}`}
//             layout
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             {/* Project Info Section */}
//             <div className="max-w-4xl mx-auto p-4 py-12" ref={sectionRefs['Description']}>
//               {/* Header Section */}
//               <div className="mb-6">
//                 {/* New Launch Badge */}
//                 <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
//                   <div className="bg-yellow-500 rounded-full p-1">
//                     <div className="w-4 h-4" />
//                   </div>
//                   <span className="font-semibold">NEW LAUNCH</span>
//                   <span>Project</span>
//                   {/* <button className="ml-4 text-sm underline">Learn more</button> */}
//                 </div>
//                 <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
//                 <p className="text-gray-500">{projectDetail?.location?.address}</p>
//               </div>



//               {/* Status Tags */}
//               <div className="flex flex-wrap gap-2 mb-8">
//                 <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
//                   <svg
//                     className="w-4 h-4 mr-1"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                   </svg>
//                   RERA {projectDetail?.reraNumber}
//                 </div>
//                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
//                   No Brokerage
//                 </div>
//                 <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
//                   6 Top Facilities
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="bg-black text-white rounded-xl p-4 mb-2 mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="flex items-center gap-2">
//                     <TrendingUp size={20} className="text-yellow-500" />
//                     <span>High price appreciation</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Heart size={20} className="text-yellow-500" />
//                     <span>Units of choice</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CircleDollarSign size={20} className="text-yellow-500" />
//                     <span>Easy Payment plans</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Construction Status Section */}
//               {/* <div className="bg-blue-50 p-6 rounded-lg">
//                 <h2 className="text-gray-700 uppercase text-sm font-medium mb-4">
//                   CONSTRUCTION STATUS
//                 </h2>
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-2xl font-bold text-gray-900">{projectDetail?.status}</h3>
//                   <svg
//                     className="w-6 h-6 text-blue-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//                   </svg>
//                 </div>
//               </div> */}
//             </div>

//             {/* Floor Plans */}
//             {/* <div className="mb-8" ref={sectionRefs['FloorPlans']}> */}
//             <motion.div className="mb-8" ref={sectionRefs['FloorPlans']}>
//               <h1 className="text-3xl font-semibold px-4">Floor Plans</h1>
//               {projectDetail?.floorPlans?.length > 0 && (
//                 <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
//               )}
//             </motion.div>

//               {/* project overview */}
//             <motion.div
//               className="w-full"
//               ref={sectionRefs['ProjectOverview']}
//               layout
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <BuildingViewer config={buildingConfig} />
//             </motion.div>

//             {/* Location Map */}
//             <div className="mb-8" ref={sectionRefs['Map']}>
//               <LocationLatLngMap
//                 latitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
//                 longitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
//               />
//             </div>



//             {/* Specifications */}
//             <div className="mb-8" ref={sectionRefs['Specifications']}>
//               <ProjectSpecificationCard specifications={projectDetail?.specification} />
//             </div>

//             {/* Amenities */}
//             <div className="mb-2" ref={sectionRefs['Amenities']}>
//               <AmenitiesDisplay amenities={projectDetail?.amenities} />
//             </div>

//             {/* highlights */}
//             <div className="mb-2" ref={sectionRefs['highlights']}>
//               <ProjectHighlights highlights={projectDetail?.highlights} />
//             </div>

//             {/* nearbyLocations */}
//             <div className="mb-2" ref={sectionRefs['NearBy']}>
//               <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations} />
//             </div>

//             {/* Gallery */}
//             <div className="mb-2" ref={sectionRefs['Gallery']}>
//               <GalleryGrid gallery={projectDetail?.gallery} />
//             </div>

//             {/* Connected Properties */}
//             <div className="" ref={sectionRefs['ConnectedProperties']}>
//               <h1 className="text-xl font-semibold mb-4">Connected Properties</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                 {projectDetail?.connectedProperties?.length > 0 &&
//                   projectDetail?.connectedProperties?.map((property, index) => (
//                     <PropertyCard key={index} property={property} />
//                   ))
//                 }
//               </div>
//             </div>

//             {/* Ask Developer Section */}
//             <div className="mb-8" ref={sectionRefs['AskTheDeveloper']}>
//               <AskDeveloper />
//             </div>

//             {/* Building Manager and Viewer */}
//           </motion.div>

//           {/* Right sidebar with fixed contact card */}
//           {/* <div className="col-span-4">
//             <div className="sticky top-32">
//               <BuildingContactCard info={projectDetail?.builder} />
//               <DownloadBrochures />
//             </div>

//           </div> */}
//           <AnimatePresence>
//             {!isBuildingViewerInView && (
//               <motion.div
//                 className="hidden lg:block col-span-4"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//               >
//                 <div className="sticky top-32">
//                   <BuildingContactCard info={projectDetail?.builder} />
//                   <DownloadBrochures />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* <div className="mb-8">
//               <BuildingManager />
//             </div>
//             <div className="mb-8">
//               <BuildingViewer config={buildingConfig} />
//             </div> */}
//       </div>
//     </div>
//   )
// }

// export default ProjectDetailPage

// function ProjectDetailPage() {
//   const { projectDetail } = useSelector(state => state.projects);
//   const [activeSection, setActiveSection] = useState(null);
//   const [isBuildingViewerInView, setIsBuildingViewerInView] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const scrollTimeoutRef = useRef(null);
//   const lastScrollY = useRef(window.scrollY);
//   const dispatch = useDispatch();
//   const { post_id } = useParams();

//   console.log(projectDetail)

//   const sectionRefs = {
//     'Description': useRef(null),
//     'FloorPlans': useRef(null),
//     'ProjectOverview': useRef(null),
//     'Map': useRef(null),
//     'Specifications': useRef(null),
//     'Amenities': useRef(null),
//     'highlights': useRef(null),
//     'NearBy': useRef(null),
//     'Gallery': useRef(null),
//     'ConnectedProperties': useRef(null),
//     'AskTheDeveloper': useRef(null),
//   };

//   // Fetch project data
//   useEffect(() => {
//     dispatch(getSingleProject(post_id));
//   }, [post_id, dispatch]);

//   // Scroll and intersection detection
//   useEffect(() => {
//     let isThrottled = false;
//     const throttleTime = 50; // ms

//     const handleScroll = () => {
//       if (isThrottled) return;
//       isThrottled = true;

//       // Clear existing timeout
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }

//       setIsScrolling(true);

//       // Check if user has scrolled by a significant amount
//       const currentScrollY = window.scrollY;
//       const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

//       if (scrollDelta > 50) { // Minimum scroll threshold
//         const projectOverviewEl = sectionRefs['ProjectOverview'].current;
//         if (projectOverviewEl) {
//           const rect = projectOverviewEl.getBoundingClientRect();
//           const viewportHeight = window.innerHeight;
//           const threshold = viewportHeight * 0.4; // 40% threshold

//           setIsBuildingViewerInView(
//             rect.top < threshold &&
//             rect.bottom > threshold
//           );
//         }
//         lastScrollY.current = currentScrollY;
//       }

//       // Reset scroll state after delay
//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsScrolling(false);
//       }, 150); // Adjust this value to change how quickly after stopping scroll the animation can occur

//       // Reset throttle
//       setTimeout(() => {
//         isThrottled = false;
//       }, throttleTime);
//     };

//     // Track active section
//     const handleActiveSection = () => {
//       // if (!isScrolling) return;

//       const scrollPosition = window.scrollY + 200;
//       let activeFound = false;

//       for (const [section, ref] of Object.entries(sectionRefs)) {
//         if (!ref.current) continue;

//         const element = ref.current;
//         const { top, bottom } = element.getBoundingClientRect();
//         const elementTop = top + window.scrollY;
//         const elementBottom = bottom + window.scrollY;

//         if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
//           console.log("S", section)
//           setActiveSection(section);
//           activeFound = true;
//           break;
//         }
//       }

//       if (!activeFound) {
//         setActiveSection(null);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     window.addEventListener('scroll', handleActiveSection, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('scroll', handleActiveSection);
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <div className="relative">
//         <HeaderSection
//           details={projectDetail}
//           sectionRefs={sectionRefs}
//           activeSection={activeSection}
//         />
//       </div>

//       <div className="mx-auto px-4">
//         <div className="grid grid-cols-12 gap-2">
//           {/* Main Content */}
//           <motion.div
//             className={`${isBuildingViewerInView ? 'col-span-12' : 'col-span-12 lg:col-span-8'}`}
//             layout
//             transition={{
//               duration: isScrolling ? 0.3 : 0,
//               ease: "easeInOut"
//             }}
//           >
//             {/* Project Info Section */}
//             <div className="max-w-4xl mx-auto p-4 py-12" ref={sectionRefs['Description']}>
//               {/* Header Section */}
//               <div className="mb-6">
//                 {/* New Launch Badge */}
//                 <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
//                   <div className="bg-yellow-500 rounded-full p-1">
//                     <div className="w-4 h-4" />
//                   </div>
//                   <span className="font-semibold">NEW LAUNCH</span>
//                   <span>Project</span>
//                   {/* <button className="ml-4 text-sm underline">Learn more</button> */}
//                 </div>
//                 <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
//                 <p className="text-gray-500">{projectDetail?.location?.address}</p>
//               </div>



//               {/* Status Tags */}
//               <div className="flex flex-wrap gap-2 mb-8">
//                 <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
//                   <svg
//                     className="w-4 h-4 mr-1"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                   </svg>
//                   RERA {projectDetail?.reraNumber}
//                 </div>
//                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
//                   No Brokerage
//                 </div>
//                 <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
//                   6 Top Facilities
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="bg-black text-white rounded-xl p-4 mb-2 mt-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="flex items-center gap-2">
//                     <TrendingUp size={20} className="text-yellow-500" />
//                     <span>High price appreciation</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Heart size={20} className="text-yellow-500" />
//                     <span>Units of choice</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CircleDollarSign size={20} className="text-yellow-500" />
//                     <span>Easy Payment plans</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Construction Status Section */}
//               {/* <div className="bg-blue-50 p-6 rounded-lg">
//                              <h2 className="text-gray-700 uppercase text-sm font-medium mb-4">
//                                CONSTRUCTION STATUS
//                              </h2>
//                              <div className="flex justify-between items-center">
//                                <h3 className="text-2xl font-bold text-gray-900">{projectDetail?.status}</h3>
//                                <svg
//                                  className="w-6 h-6 text-blue-500"
//                                  fill="none"
//                                  stroke="currentColor"
//                                  viewBox="0 0 24 24"
//                                >
//                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
//                                </svg>
//                              </div>
//                            </div> */}
//             </div>

//             {/* Floor Plans */}
//             {/* <div className="mb-8" ref={sectionRefs['FloorPlans']}> */}
//             {projectDetail?.floorPlans?.length > 0 && <motion.div className="" ref={sectionRefs['FloorPlans']}>
//               <h1 className="text-3xl font-semibold px-4">Floor Plans</h1>
//               {projectDetail?.floorPlans?.length > 0 && (
//                 <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
//               )}
//             </motion.div>}


//             {/* project overview */}
//             <motion.div
//               className="w-full"
//               ref={sectionRefs['ProjectOverview']}
//               layout
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <BuildingViewer id={projectDetail?.projectId} viewer="Project" />
//             </motion.div>

//             {/* Location Map */}
//             {
//               projectDetail?.location?.coordinates?.coordinates?.lenght > 0 && <div className="mb-8 mt-20" ref={sectionRefs['Map']}>
//                 <LocationLatLngMap
//                   latitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
//                   longitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
//                 />
//               </div>
//             }





//             {/* Specifications */}
//             {projectDetail?.specification?.length !== 0 && <div className="mb-8" ref={sectionRefs['Specifications']}>
//               <ProjectSpecificationCard specifications={projectDetail?.specification} />
//             </div>
//             }

//             {/* Amenities */}
//             {projectDetail?.amenities?.length !== 0 && <div className="mb-2" ref={sectionRefs['Amenities']}>
//               <AmenitiesDisplay amenities={projectDetail?.amenities} />
//             </div>
//             }

//             {/* highlights */}
//             {projectDetail?.highlights?.length !== 0 && <div className="mb-2" ref={sectionRefs['highlights']}>
//               <ProjectHighlights highlights={projectDetail?.highlights} />
//             </div>
//             }

//             {/* nearbyLocations */}
//             {projectDetail?.nearbyLocations?.length > 0 && <div className="mb-2" ref={sectionRefs['NearBy']}>
//               <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations} />
//             </div>
//             }

//             {/* Gallery */}
//             {
//               projectDetail?.gallery?.length > 0 && <div className="my-8" ref={sectionRefs['Gallery']}>
//                 <GalleryGrid gallery={projectDetail?.gallery} />
//               </div>
//             }

//             {/* Connected Properties */}
//             {projectDetail?.connectedProperties?.length > 0 && <div className="" ref={sectionRefs['ConnectedProperties']}>
//               <h1 className="text-xl font-semibold mb-4">Connected Properties</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                 {projectDetail?.connectedProperties?.length > 0 &&
//                   projectDetail?.connectedProperties?.map((property, index) => (
//                     <PropertyCard key={index} property={property} />
//                   ))
//                 }
//               </div>
//             </div>}

//             {/* Ask Developer Section */}
//             {
//               projectDetail?.contacts?.[0] && <div className="mb-8" ref={sectionRefs['AskTheDeveloper']} contact={projectDetail?.contacts?.[0]}>
//                 <AskDeveloper />
//               </div>
//             }

//             {/* Building Manager and Viewer */}
//             {/* Your existing content sections remain the same */}
//           </motion.div>

//           {/* Sidebar */}
//           <AnimatePresence mode="wait">
//             {!isBuildingViewerInView && (
//               <motion.div
//                 className="hidden lg:block col-span-4"
//                 initial={isScrolling ? { opacity: 0, x: 20 } : false}
//                 animate={isScrolling ? { opacity: 1, x: 0 } : false}
//                 exit={isScrolling ? { opacity: 0, x: 20 } : false}
//                 transition={{
//                   duration: isScrolling ? 0.3 : 0,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <div className="sticky top-32">
//                   <BuildingContactCard info={projectDetail?.builder} />
//                   <DownloadBrochures />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//       {/* <div className="mb-8">
//         <BuildingManager />
//       </div>
//       <div className="mb-8">
//         <BuildingViewer config={buildingConfig} />
//       </div> */}

//     </div>
//   );
// }

// export default ProjectDetailPage;

// function ProjectDetailPage() {
//   const { projectDetail } = useSelector(state => state.projects);
//   const [activeSection, setActiveSection] = useState(null);
//   const [isBuildingViewerInView, setIsBuildingViewerInView] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const scrollTimeoutRef = useRef(null);
//   const lastScrollY = useRef(window.scrollY);
//   const dispatch = useDispatch();
//   const { post_id } = useParams();

//   console.log("projectDetail", projectDetail)

//   // Create an object to store only valid section refs
//   const [validSectionRefs, setValidSectionRefs] = useState({});

//   // Create initial section refs
//   const sectionRefs = {
//     'Description': useRef(null),
//     'FloorPlans': useRef(null),
//     'ProjectOverview': useRef(null),
//     'Map': useRef(null),
//     'Specifications': useRef(null),
//     'Amenities': useRef(null),
//     'highlights': useRef(null),
//     'NearBy': useRef(null),
//     'Gallery': useRef(null),
//     'ConnectedProperties': useRef(null),
//     'AskTheDeveloper': useRef(null),
//   };

//   // Fetch project data
//   useEffect(() => {
//     dispatch(getSingleProject(post_id));
//   }, [post_id, dispatch]);

//   // Update valid section refs when project data changes
//   useEffect(() => {
//     if (projectDetail) {
//       const newValidSectionRefs = {
//         'Description': sectionRefs['Description'], // Description is always shown
//         'ProjectOverview': sectionRefs['ProjectOverview'], // Building Viewer is always shown
//       };

//       // Add conditional sections based on data availability
//       if (projectDetail?.floorPlans?.length > 0) {
//         newValidSectionRefs['FloorPlans'] = sectionRefs['FloorPlans'];
//       }

//       if (projectDetail?.location?.coordinates?.coordinates?.length > 0) {
//         newValidSectionRefs['Map'] = sectionRefs['Map'];
//       }

//       if (projectDetail?.specification?.length > 0) {
//         newValidSectionRefs['Specifications'] = sectionRefs['Specifications'];
//       }

//       if (projectDetail?.amenities?.length > 0) {
//         newValidSectionRefs['Amenities'] = sectionRefs['Amenities'];
//       }

//       if (projectDetail?.highlights?.length > 0) {
//         newValidSectionRefs['highlights'] = sectionRefs['highlights'];
//       }

//       if (projectDetail?.nearbyLocations?.length > 0) {
//         newValidSectionRefs['NearBy'] = sectionRefs['NearBy'];
//       }

//       if (projectDetail?.gallery?.length > 0) {
//         newValidSectionRefs['Gallery'] = sectionRefs['Gallery'];
//       }

//       if (projectDetail?.connectedProperties?.length > 0) {
//         newValidSectionRefs['ConnectedProperties'] = sectionRefs['ConnectedProperties'];
//       }

//       if (projectDetail?.contacts?.[0]) {
//         newValidSectionRefs['AskTheDeveloper'] = sectionRefs['AskTheDeveloper'];
//       }

//       setValidSectionRefs(newValidSectionRefs);
//     }
//   }, [projectDetail]);

//   // Scroll and intersection detection
//   useEffect(() => {
//     let isThrottled = false;
//     const throttleTime = 50; // ms

//     const handleScroll = () => {
//       if (isThrottled) return;
//       isThrottled = true;

//       // Clear existing timeout
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }

//       setIsScrolling(true);

//       // Check if user has scrolled by a significant amount
//       const currentScrollY = window.scrollY;
//       const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

//       if (scrollDelta > 50) { // Minimum scroll threshold
//         const projectOverviewEl = validSectionRefs['ProjectOverview']?.current;
//         if (projectOverviewEl) {
//           const rect = projectOverviewEl.getBoundingClientRect();
//           const viewportHeight = window.innerHeight;
//           const threshold = viewportHeight * 0.4; // 40% threshold

//           setIsBuildingViewerInView(
//             rect.top < threshold &&
//             rect.bottom > threshold
//           );
//         }
//         lastScrollY.current = currentScrollY;
//       }

//       // Reset scroll state after delay
//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsScrolling(false);
//       }, 150); // Adjust this value to change how quickly after stopping scroll the animation can occur

//       // Reset throttle
//       setTimeout(() => {
//         isThrottled = false;
//       }, throttleTime);
//     };

//     // Track active section
//     const handleActiveSection = () => {
//       const scrollPosition = window.scrollY + 200;
//       let activeFound = false;

//       for (const [section, ref] of Object.entries(validSectionRefs)) {
//         if (!ref?.current) continue;

//         const element = ref.current;
//         const { top, bottom } = element.getBoundingClientRect();
//         const elementTop = top + window.scrollY;
//         const elementBottom = bottom + window.scrollY;

//         if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
//           setActiveSection(section);
//           activeFound = true;
//           break;
//         }
//       }

//       if (!activeFound) {
//         setActiveSection(null);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     window.addEventListener('scroll', handleActiveSection, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('scroll', handleActiveSection);
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current);
//       }
//     };
//   }, [validSectionRefs]);

//   return (
//     <div className="min-h-screen">
//       <div className="relative">
//         <HeaderSection
//           details={projectDetail}
//           sectionRefs={validSectionRefs}
//           activeSection={activeSection}
//         />
//       </div>

//       <div className="mx-auto px-4">
//         <div className="grid grid-cols-12 gap-2">
//           {/* Main Content */}
//           <motion.div
//             className={`${isBuildingViewerInView ? 'col-span-12' : 'col-span-12 lg:col-span-8'}`}
//             layout
//             transition={{
//               duration: isScrolling ? 0.3 : 0,
//               ease: "easeInOut"
//             }}
//           >
//             {/* Project Info Section */}

//             <div className="max-w-4xl mx-auto p-4 py-12" ref={sectionRefs['Description']}>
//               {/* Header Section */}
//               <div className="mb-6">
//                 {/* New Launch Badge - Only show if availabilityStatus is COMING_SOON */}
//                 {projectDetail?.availabilityStatus === "COMING_SOON" && (
//                   <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
//                     <div className="bg-yellow-500 rounded-full p-1">
//                       <div className="w-4 h-4" />
//                     </div>
//                     <span className="font-semibold">NEW LAUNCH</span>
//                     <span>Project</span>
//                   </div>
//                 )}
//                 <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
//                 {projectDetail?.location?.address && (
//                   <p className="text-gray-500">{projectDetail.location.address}</p>
//                 )}
//               </div>

//               {/* Status Tags */}
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {projectDetail?.reraNumber && projectDetail.reraNumber !== "undefined" && (
//                   <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
//                     <svg
//                       className="w-4 h-4 mr-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                       <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                     </svg>
//                     RERA {projectDetail.reraNumber}
//                   </div>
//                 )}
//                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
//                   No Brokerage
//                 </div>
//                 {(projectDetail?.overview?.totalTowers || projectDetail?.overview?.totalUnits) && (
//                   <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
//                     {projectDetail?.overview?.totalTowers && `${projectDetail.overview.totalTowers} Towers`}
//                     {projectDetail?.overview?.totalTowers && projectDetail?.overview?.totalUnits && ' | '}
//                     {projectDetail?.overview?.totalUnits && `${projectDetail.overview.totalUnits} Units`}
//                   </div>
//                 )}
//               </div>

//               {/* Project Overview */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                 {projectDetail?.overview?.priceRange?.pricePerSqFt && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Price</p>
//                     <p className="font-semibold">₹{projectDetail.overview.priceRange.pricePerSqFt}/sq.ft.</p>
//                   </div>
//                 )}
//                 {projectDetail?.overview?.launchDate && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Launch Date</p>
//                     <p className="font-semibold">
//                       {new Date(projectDetail.overview.launchDate).toLocaleDateString('en-US', {
//                         month: 'long',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 )}
//                 {projectDetail?.overview?.possessionDate && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Possession</p>
//                     <p className="font-semibold">
//                       {new Date(projectDetail.overview.possessionDate).toLocaleDateString('en-US', {
//                         month: 'long',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 )}
//                 {projectDetail?.status && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Status</p>
//                     <p className="font-semibold">
//                       {projectDetail.status.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Property Types - Only show if floorPlans exist */}
//               {projectDetail?.floorPlans && projectDetail.floorPlans.length > 0 && (
//                 <div className="mb-8">
//                   <h2 className="text-xl font-semibold mb-4">Available Configurations</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {projectDetail.floorPlans.map((plan, index) => (
//                       plan.isActive && (
//                         <div key={index} className="border border-gray-200 rounded-md p-4">
//                           <h3 className="font-semibold mb-1">{plan.name}</h3>
//                           {plan.superArea && <p className="text-gray-500 mb-2">{plan.superArea} sq.ft.</p>}
//                           {plan.price && (
//                             <p className="font-bold">
//                               ₹{(plan.price >= 10000000)
//                                 ? `${(plan.price / 10000000).toFixed(2)} Cr`
//                                 : `${Math.round(plan.price / 100000)} Lacs`}
//                             </p>
//                           )}
//                         </div>
//                       )
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Features */}
//               <div className="bg-black text-white rounded-xl p-4 mb-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="flex items-center gap-2">
//                     <TrendingUp size={20} className="text-yellow-500" />
//                     <span>High price appreciation</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Heart size={20} className="text-yellow-500" />
//                     <span>Units of choice</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CircleDollarSign size={20} className="text-yellow-500" />
//                     <span>Easy Payment plans</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floor Plans - conditionally render */}
//             {projectDetail?.floorPlans?.length > 0 && (
//               <motion.div className="" ref={sectionRefs['FloorPlans']}>
//                 <h1 className="text-3xl font-semibold px-4">Floor Plans</h1>
//                 <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
//               </motion.div>
//             )}

//             {/* Project overview - always render */}
//             <motion.div
//               className="w-full"
//               ref={sectionRefs['ProjectOverview']}
//               layout
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <BuildingViewer id={projectDetail?.projectId} viewer="Project" />
//             </motion.div>

//             {/* Location Map - conditionally render */}
//               <div className="mb-8 mt-20" ref={sectionRefs['Map']}>
//                 <LocationLatLngMap
//                   latitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
//                   longitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
//                 />
//               </div>

//             {/* Specifications - conditionally render */}
//             {projectDetail?.specification?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['Specifications']}>
//                 <ProjectSpecificationCard specifications={projectDetail?.specification} />
//               </div>
//             )}

//             {/* Amenities - conditionally render */}
//             {projectDetail?.amenities?.length > 0 && (
//               <div className="mb-2" ref={sectionRefs['Amenities']}>
//                 <AmenitiesDisplay amenities={projectDetail?.amenities} />
//               </div>
//             )}

//             {/* highlights - conditionally render */}
//             {projectDetail?.highlights?.length > 0 && (
//               <div className="mb-2" ref={sectionRefs['highlights']}>
//                 <ProjectHighlights highlights={projectDetail?.highlights} />
//               </div>
//             )}

//             {/* nearbyLocations - conditionally render */}
//             {projectDetail?.nearbyLocations?.length > 0 && (
//               <div className="mb-2" ref={sectionRefs['NearBy']}>
//                 <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations} />
//               </div>
//             )}

//             {/* Gallery - conditionally render */}
//             {projectDetail?.gallery?.length > 0 && (
//               <div className="my-8" ref={sectionRefs['Gallery']}>
//                 <GalleryGrid gallery={projectDetail?.gallery} />
//               </div>
//             )}



//             {/* Ask Developer Section - conditionally render */}
//             {projectDetail?.contacts?.[0] && (
//               <div className="mb-8"
//                 ref={sectionRefs['AskTheDeveloper']}
//                 contact={projectDetail?.contacts?.[0]}>
//                 <AskDeveloper />
//               </div>
//             )}
//           </motion.div>

//           {/* Sidebar */}
//           <AnimatePresence mode="wait">
//             {!isBuildingViewerInView && (
//               <motion.div
//                 className="hidden lg:block col-span-4"
//                 initial={isScrolling ? { opacity: 0, x: 20 } : false}
//                 animate={isScrolling ? { opacity: 1, x: 0 } : false}
//                 exit={isScrolling ? { opacity: 0, x: 20 } : false}
//                 transition={{
//                   duration: isScrolling ? 0.3 : 0,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <div className="sticky top-32">
//                   <ProjectContactCard info={projectDetail?.builder} connectedProperties={projectDetail?.connectedProperties} />
//                   <DownloadBrochures />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Connected Properties - conditionally render */}
//         {projectDetail?.connectedProperties?.length > 0 && (
//           <div className="" ref={sectionRefs['ConnectedProperties']}>
//             <HeadingCommon title='Properties Under The Project' />
//             <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
//               {projectDetail?.connectedProperties?.map((property, index) => (
//                 <PropertyCard key={index} property={property} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailPage;

// function ProjectDetailPage() {
//   const { projectDetail } = useSelector(state => state.projects);
//   const [activeSection, setActiveSection] = useState(null);
//   const dispatch = useDispatch();
//   const { post_id } = useParams();
//   const [configAvailable , setConfigAvailable] = useState(false)
//   console.log("projectDetail", projectDetail)

//   // Create an object to store only valid section refs
//   const [validSectionRefs, setValidSectionRefs] = useState({});

//   // Create initial section refs
//   const sectionRefs = {
//     'Description': useRef(null),
//     'FloorPlans': useRef(null),
//     'ProjectOverview': useRef(null),
//     'Map': useRef(null),
//     'Specifications': useRef(null),
//     'Amenities': useRef(null),
//     'highlights': useRef(null),
//     'NearBy': useRef(null),
//     'Gallery': useRef(null),
//     'ConnectedProperties': useRef(null),
//     'AskTheDeveloper': useRef(null),
//   };

//   // Fetch project data
//   useEffect(() => {
//     dispatch(getSingleProject(post_id));
//   }, [post_id, dispatch]);

//   // Update valid section refs when project data changes
//   useEffect(() => {
//     if (projectDetail) {
//       const newValidSectionRefs = {
//         'Description': sectionRefs['Description'], // Description is always shown
//       };

//       // Check if Building Viewer section should be included
//       if (projectDetail?.projectId) {
//         newValidSectionRefs['ProjectOverview'] = sectionRefs['ProjectOverview'];
//       }

//       // Add conditional sections based on data availability
//       if (projectDetail?.floorPlans?.length > 0) {
//         newValidSectionRefs['FloorPlans'] = sectionRefs['FloorPlans'];
//       }

//       if (projectDetail?.location?.coordinates?.coordinates?.length > 0) {
//         newValidSectionRefs['Map'] = sectionRefs['Map'];
//       }

//       if (projectDetail?.specification?.length > 0) {
//         newValidSectionRefs['Specifications'] = sectionRefs['Specifications'];
//       }

//       if (projectDetail?.amenities?.length > 0) {
//         newValidSectionRefs['Amenities'] = sectionRefs['Amenities'];
//       }

//       if (projectDetail?.highlights?.length > 0) {
//         newValidSectionRefs['highlights'] = sectionRefs['highlights'];
//       }

//       if (projectDetail?.nearbyLocations?.length > 0) {
//         newValidSectionRefs['NearBy'] = sectionRefs['NearBy'];
//       }

//       if (projectDetail?.gallery?.length > 0) {
//         newValidSectionRefs['Gallery'] = sectionRefs['Gallery'];
//       }

//       if (projectDetail?.connectedProperties?.length > 0) {
//         newValidSectionRefs['ConnectedProperties'] = sectionRefs['ConnectedProperties'];
//       }

//       if (projectDetail?.contacts?.[0]) {
//         newValidSectionRefs['AskTheDeveloper'] = sectionRefs['AskTheDeveloper'];
//       }

//       setValidSectionRefs(newValidSectionRefs);
//     }
//   }, [projectDetail]);

//   // Track active section
//   useEffect(() => {
//     const handleActiveSection = () => {
//       const scrollPosition = window.scrollY + 200;
//       let activeFound = false;

//       for (const [section, ref] of Object.entries(validSectionRefs)) {
//         if (!ref?.current) continue;

//         const element = ref.current;
//         const { top, bottom } = element.getBoundingClientRect();
//         const elementTop = top + window.scrollY;
//         const elementBottom = bottom + window.scrollY;

//         if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
//           setActiveSection(section);
//           activeFound = true;
//           break;
//         }
//       }

//       if (!activeFound) {
//         setActiveSection(null);
//       }
//     };

//     window.addEventListener('scroll', handleActiveSection, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', handleActiveSection);
//     };
//   }, [validSectionRefs]);

//   // Check if Building Viewer component should be shown
//   const hasBuildingViewer = Boolean(projectDetail?.projectId);

//   return (
//     <div className="min-h-screen">
//       <div className="relative">
//         <HeaderSection
//           details={projectDetail}
//           sectionRefs={validSectionRefs}
//           activeSection={activeSection}
//         />
//       </div>

//       <div className="mx-auto px-4">
//         {/* Project Info Section and Contact Card */}
//         <div className="grid grid-cols-12 gap-2">
//           {/* Main Content */}
//           <div className="col-span-12 lg:col-span-8">
//             <div className="max-w-4xl mx-auto p-4 py-12" ref={sectionRefs['Description']}>
//               {/* Header Section */}
//               <div className="mb-6">
//                 {/* New Launch Badge - Only show if availabilityStatus is COMING_SOON */}
//                 {projectDetail?.availabilityStatus === "COMING_SOON" && (
//                   <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
//                     <div className="bg-yellow-500 rounded-full p-1">
//                       <div className="w-4 h-4" />
//                     </div>
//                     <span className="font-semibold">NEW LAUNCH</span>
//                     <span>Project</span>
//                   </div>
//                 )}
//                 <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
//                 {projectDetail?.location?.address && (
//                   <p className="text-gray-500">{projectDetail.location.address}</p>
//                 )}
//               </div>

//               {/* Status Tags */}
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {projectDetail?.reraNumber && projectDetail.reraNumber !== "undefined" && (
//                   <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
//                     <svg
//                       className="w-4 h-4 mr-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                       <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                     </svg>
//                     RERA {projectDetail.reraNumber}
//                   </div>
//                 )}
//                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
//                   No Brokerage
//                 </div>
//                 {(projectDetail?.overview?.totalTowers || projectDetail?.overview?.totalUnits) && (
//                   <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
//                     {projectDetail?.overview?.totalTowers && `${projectDetail.overview.totalTowers} Towers`}
//                     {projectDetail?.overview?.totalTowers && projectDetail?.overview?.totalUnits && ' | '}
//                     {projectDetail?.overview?.totalUnits && `${projectDetail.overview.totalUnits} Units`}
//                   </div>
//                 )}
//               </div>

//               {/* Project Overview */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                 {projectDetail?.overview?.priceRange?.pricePerSqFt && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Price</p>
//                     <p className="font-semibold">₹{projectDetail.overview.priceRange.pricePerSqFt}/sq.ft.</p>
//                   </div>
//                 )}
//                 {projectDetail?.overview?.launchDate && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Launch Date</p>
//                     <p className="font-semibold">
//                       {new Date(projectDetail.overview.launchDate).toLocaleDateString('en-US', {
//                         month: 'long',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 )}
//                 {projectDetail?.overview?.possessionDate && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Possession</p>
//                     <p className="font-semibold">
//                       {new Date(projectDetail.overview.possessionDate).toLocaleDateString('en-US', {
//                         month: 'long',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 )}
//                 {projectDetail?.status && (
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="text-gray-500 text-sm">Status</p>
//                     <p className="font-semibold">
//                       {projectDetail.status.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Property Types - Only show if floorPlans exist */}
//               {projectDetail?.floorPlans && projectDetail.floorPlans.length > 0 && (
//                 <div className="mb-8">
//                   <h2 className="text-xl font-semibold mb-4">Available Configurations</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {projectDetail.floorPlans.map((plan, index) => (
//                       plan.isActive && (
//                         <div key={index} className="border border-gray-200 rounded-md p-4">
//                           <h3 className="font-semibold mb-1">{plan.name}</h3>
//                           {plan.superArea && <p className="text-gray-500 mb-2">{plan.superArea} sq.ft.</p>}
//                           {plan.price && (
//                             <p className="font-bold">
//                               ₹{(plan.price >= 10000000)
//                                 ? `${(plan.price / 10000000).toFixed(2)} Cr`
//                                 : `${Math.round(plan.price / 100000)} Lacs`}
//                             </p>
//                           )}
//                         </div>
//                       )
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Features */}
//               <div className="bg-black text-white rounded-xl p-4 mb-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="flex items-center gap-2">
//                     <TrendingUp size={20} className="text-yellow-500" />
//                     <span>High price appreciation</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Heart size={20} className="text-yellow-500" />
//                     <span>Units of choice</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CircleDollarSign size={20} className="text-yellow-500" />
//                     <span>Easy Payment plans</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar - Contact Card (always sticky) */}
//           <div className="hidden lg:block col-span-4">
//             <div className="sticky top-32">
//               <ProjectContactCard info={projectDetail?.builder} />
//               <DownloadBrochures />
//             </div>
//           </div>
//         </div>

//         {/* Building Viewer - Full Width if available */}
//         {hasBuildingViewer && (
//           <div className="w-full my-8" ref={sectionRefs['ProjectOverview']}>
//             <BuildingViewer id={projectDetail?.projectId} viewer="Project" configAvailable={configAvailable} setConfigAvailable={setConfigAvailable} />
//           </div>
//         )}

//         {/* Rest of the Content in two-column layout */}
//         <div className="grid grid-cols-12 gap-2">
//           {/* Main Content */}
//           <div className="col-span-12 lg:col-span-8">
//             {/* Floor Plans - conditionally render */}
//             {projectDetail?.floorPlans?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['FloorPlans']}>
//                 <h1 className="text-3xl font-semibold px-4">Floor Plans</h1>
//                 <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
//               </div>
//             )}

//             {/* Location Map - conditionally render */}
//             {projectDetail?.location?.coordinates?.coordinates?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['Map']}>
//                 <LocationLatLngMap
//                   latitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
//                   longitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
//                 />
//               </div>
//             )}

//             {/* Specifications - conditionally render */}
//             {projectDetail?.specification?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['Specifications']}>
//                 <ProjectSpecificationCard specifications={projectDetail?.specification} />
//               </div>
//             )}

//             {/* Amenities - conditionally render */}
//             {projectDetail?.amenities?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['Amenities']}>
//                 <AmenitiesDisplay amenities={projectDetail?.amenities} />
//               </div>
//             )}

//             {/* highlights - conditionally render */}
//             {projectDetail?.highlights?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['highlights']}>
//                 <ProjectHighlights highlights={projectDetail?.highlights} />
//               </div>
//             )}

//             {/* nearbyLocations - conditionally render */}
//             {projectDetail?.nearbyLocations?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['NearBy']}>
//                 <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations} />
//               </div>
//             )}

//             {/* Gallery - conditionally render */}
//             {projectDetail?.gallery?.length > 0 && (
//               <div className="mb-8" ref={sectionRefs['Gallery']}>
//                 <GalleryGrid gallery={projectDetail?.gallery} />
//               </div>
//             )}

//             {/* Ask Developer Section - conditionally render */}
//             {projectDetail?.contacts?.[0] && (
//               <div className="mb-8"
//                 ref={sectionRefs['AskTheDeveloper']}
//                 contact={projectDetail?.contacts?.[0]}>
//                 <AskDeveloper />
//               </div>
//             )}
//           </div>

//           {/* Sidebar - Contact Card (sticky on right) */}
//           <div className="hidden lg:block col-span-4">
//             <div className="sticky top-32">
//               <ProjectContactCard info={projectDetail?.builder} />
//               <DownloadBrochures />
//             </div>
//           </div>
//         </div>

//         {/* Connected Properties - Full Width at Bottom */}
//         {projectDetail?.connectedProperties?.length > 0 && (
//           <div className="w-full mt-12" ref={sectionRefs['ConnectedProperties']}>
//             <HeadingCommon title='Properties Under The Project' />
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
//               {projectDetail?.connectedProperties?.map((property, index) => (
//                 <PropertyCard key={index} property={property} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProjectDetailPage;



function ProjectDetailPage() {
  const { projectDetail } = useSelector(state => state.projects);
  const [activeSection, setActiveSection] = useState(null);
  const [isBuildingViewerInView, setIsBuildingViewerInView] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const dispatch = useDispatch();
  const { post_id } = useParams();
  console.log("projectDetail", projectDetail)
  const [config, setConfig] = useState(null);
  console.log("config", config)

  // Create an object to store only valid section refs
  const [validSectionRefs, setValidSectionRefs] = useState({});

  // // Create initial section refs
  // const sectionRefs = {
  //   'Description': useRef(null),
  //   'FloorPlans': useRef(null),
  //   'ProjectOverview': useRef(null),
  //   'Map': useRef(null),
  //   'Specifications': useRef(null),
  //   'Amenities': useRef(null),
  //   'highlights': useRef(null),
  //   'NearBy': useRef(null),
  //   'Gallery': useRef(null),
  //   'ConnectedProperties': useRef(null),
  //   'AskTheDeveloper': useRef(null),
  // };

  // Create refs for all possible sections
  const sectionRefs = {
    'Description': useRef(null),
    '3D Viewer': useRef(null),
    'FloorPlans': useRef(null),
    'Map': useRef(null),
    'Specifications': useRef(null),
    'Amenities': useRef(null),
    'Highlights': useRef(null),
    'NearBy': useRef(null),
    'Gallery': useRef(null),
    'LCDParameters': useRef(null),
    'PropertyListing': useRef(null),
    'AskTheDeveloper': useRef(null),
    'ConnectedProperties': useRef(null),
  };

  // Function to check if a section has data
  const hasSectionData = (sectionKey) => {
    switch (sectionKey) {
      case 'Description':
        return Boolean(projectDetail);
      case '3D Viewer':
        return Boolean(projectDetail?.projectId && config);
      case 'FloorPlans':
        return Boolean(projectDetail?.floorPlans?.length > 0);
      case 'Map':
        return Boolean(projectDetail?.location?.coordinates?.coordinates?.length === 2);
      case 'Specifications':
        return Boolean(projectDetail?.specification?.length > 0);
      case 'Amenities':
        return Boolean(projectDetail?.amenities?.length > 0);
      case 'Highlights':
        return Boolean(projectDetail?.highlights?.length > 0);
      case 'NearBy':
        return Boolean(projectDetail?.nearbyLocations?.length > 0);
      case 'Gallery':
        return Boolean(projectDetail?.gallery?.length > 0);
      case 'LCDParameters':
        return Boolean(projectDetail?.luda || projectDetail?.parkingArea || projectDetail?.frontRoad);
      case 'PropertyListing':
        return Boolean(projectDetail?.totalProperties);
      case 'AskTheDeveloper':
        return Boolean(projectDetail?.contacts?.[0]);
      case 'ConnectedProperties':
        return Boolean(projectDetail?.connectedProperties?.length > 0);
      default:
        return false;
    }
  };

  // Filter available tabs based on data
  const availableTabs = Object.keys(sectionRefs).filter(tab => hasSectionData(tab));

  // Fetch project data
  useEffect(() => {
    dispatch(getSingleProject(post_id));
  }, [post_id, dispatch]);

  // Update validSectionRefs when project data changes
  useEffect(() => {
    if (projectDetail) {
      // Create an object containing only the refs for sections with data
      const newValidSectionRefs = {};

      availableTabs.forEach(tab => {
        newValidSectionRefs[tab] = sectionRefs[tab];
      });

      setValidSectionRefs(newValidSectionRefs);
    }
  }, [projectDetail]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 200;

      const currentSection = Object.entries(sectionRefs).find(([_, ref]) => {
        if (!ref.current) return false;
        const { top, bottom } = ref.current.getBoundingClientRect();
        return top <= offset && bottom > offset;
      });

      if (currentSection) {
        setActiveSection(currentSection[0]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll and intersection detection
  // useEffect(() => {
  //   let isThrottled = false;
  //   const throttleTime = 50; // ms

  //   const handleScroll = () => {
  //     if (isThrottled) return;
  //     isThrottled = true;

  //     // Clear existing timeout
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }

  //     setIsScrolling(true);

  //     // Check if user has scrolled by a significant amount
  //     const currentScrollY = window.scrollY;
  //     const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

  //     if (scrollDelta > 50) { // Minimum scroll threshold
  //       const projectOverviewEl = validSectionRefs['ProjectOverview']?.current;
  //       if (projectOverviewEl) {
  //         const rect = projectOverviewEl.getBoundingClientRect();
  //         const viewportHeight = window.innerHeight;
  //         const threshold = viewportHeight * 0.4; // 40% threshold

  //         setIsBuildingViewerInView(
  //           rect.top < threshold &&
  //           rect.bottom > threshold
  //         );
  //       }
  //       lastScrollY.current = currentScrollY;
  //     }

  //     // Reset scroll state after delay
  //     scrollTimeoutRef.current = setTimeout(() => {
  //       setIsScrolling(false);
  //     }, 150); // Adjust this value to change how quickly after stopping scroll the animation can occur

  //     // Reset throttle
  //     setTimeout(() => {
  //       isThrottled = false;
  //     }, throttleTime);
  //   };

  //   // Track active section
  //   const handleActiveSection = () => {
  //     const scrollPosition = window.scrollY + 200;
  //     let activeFound = false;

  //     for (const [section, ref] of Object.entries(validSectionRefs)) {
  //       if (!ref?.current) continue;

  //       const element = ref.current;
  //       const { top, bottom } = element.getBoundingClientRect();
  //       const elementTop = top + window.scrollY;
  //       const elementBottom = bottom + window.scrollY;

  //       if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
  //         setActiveSection(section);
  //         activeFound = true;
  //         break;
  //       }
  //     }

  //     if (!activeFound) {
  //       setActiveSection(null);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   window.addEventListener('scroll', handleActiveSection, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     window.removeEventListener('scroll', handleActiveSection);
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //   };
  // }, [validSectionRefs]);


  // Handle building viewer visibility during scroll
  useEffect(() => {
    let isThrottled = false;
    const throttleTime = 50;

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      setIsScrolling(true);

      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

      if (scrollDelta > 50) {
        const viewportHeight = window.innerHeight;
        const threshold = viewportHeight * 0.4;

        setIsBuildingViewerInView(
          document.documentElement.scrollTop < threshold
        );

        lastScrollY.current = currentScrollY;
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      setTimeout(() => {
        isThrottled = false;
      }, throttleTime);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(`https://propertify.onrender.com/api/export-config/${projectDetail?.projectId}`);
        console.log("response", response?.status)
        // alert("Data")
        console.log("BuildingViewer", response)
        // if (response?.status != 404) {
        const data = await response.json();
        console.log(data?.status)
        console.log("data", data)
        setConfig(data?.data);
        // }
        // if (!response.ok) {
        //     throw new Error(`Error: ${response.status} - ${response.statusText}`);
        // }
      } catch (error) {
        setConfigAvailable(false)
        console.log("Error fetching configuration:", error);
      }
    };
    fetchConfig();
  }, [projectDetail?.projectId]);


  return (
    <div>
      {/* Common Div at the Top */}
      <div>
        <div className="relative">
          <HeaderSection
            details={projectDetail}
            sectionRefs={sectionRefs}
            activeSection={activeSection}
            availableTabs={availableTabs}
          />
        </div>
      </div>

      {config ? (
        <>
          <div className='grid grid-cols-12 gap-2'>
            {/* first left div */}
            <div className='col-span-8 projectContainer'>
              <div className="max-w-4xl mx-auto" ref={sectionRefs['Description']}>
                {/* Header Section */}
                <div className="mb-6">
                  {/* New Launch Badge - Only show if availabilityStatus is COMING_SOON */}
                  {projectDetail?.availabilityStatus === "COMING_SOON" && (
                    <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
                      <div className="bg-yellow-500 rounded-full p-1">
                        <div className="w-4 h-4" />
                      </div>
                      <span className="font-semibold">NEW LAUNCH</span>
                      <span>Project</span>
                    </div>
                  )}
                  <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
                  {projectDetail?.location?.address && (
                    <p className="text-gray-500">{projectDetail.location.address}</p>
                  )}
                </div>

                {/* Status Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projectDetail?.reraNumber && projectDetail.reraNumber !== "undefined" && (
                    <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      RERA {projectDetail.reraNumber}
                    </div>
                  )}
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
                    No Brokerage
                  </div>
                  {(projectDetail?.overview?.totalTowers || projectDetail?.overview?.totalUnits) && (
                    <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                      {projectDetail?.overview?.totalTowers && `${projectDetail.overview.totalTowers} Towers`}
                      {projectDetail?.overview?.totalTowers && projectDetail?.overview?.totalUnits && ' | '}
                      {projectDetail?.overview?.totalUnits && `${projectDetail.overview.totalUnits} Units`}
                    </div>
                  )}
                </div>

                {/* Project Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {projectDetail?.overview?.priceRange?.pricePerSqFt && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-500 text-sm">Price</p>
                      <p className="font-semibold">₹{projectDetail.overview.priceRange.pricePerSqFt}/sq.ft.</p>
                    </div>
                  )}
                  {projectDetail?.overview?.launchDate && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-500 text-sm">Launch Date</p>
                      <p className="font-semibold">
                        {new Date(projectDetail.overview.launchDate).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                  {projectDetail?.overview?.possessionDate && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-500 text-sm">Possession</p>
                      <p className="font-semibold">
                        {new Date(projectDetail.overview.possessionDate).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                  {projectDetail?.status && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-500 text-sm">Status</p>
                      <p className="font-semibold">
                        {projectDetail.status.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                      </p>
                    </div>
                  )}
                </div>

                {/* Property Types - Only show if floorPlans exist */}
                {projectDetail?.floorPlans && projectDetail.floorPlans.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Available Configurations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {projectDetail.floorPlans.map((plan, index) => (
                        plan.isActive && (
                          <div key={index} className="border border-gray-200 rounded-md p-4">
                            <h3 className="font-semibold mb-1">{plan.name}</h3>
                            {plan.superArea && <p className="text-gray-500 mb-2">{plan.superArea} sq.ft.</p>}
                            {plan.price && (
                              <p className="font-bold">
                                ₹{(plan.price >= 10000000)
                                  ? `${(plan.price / 10000000).toFixed(2)} Cr`
                                  : `${Math.round(plan.price / 100000)} Lacs`}
                              </p>
                            )}
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="bg-black text-white rounded-xl p-4 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={20} className="text-yellow-500" />
                      <span>High price appreciation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart size={20} className="text-yellow-500" />
                      <span>Units of choice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CircleDollarSign size={20} className="text-yellow-500" />
                      <span>Easy Payment plans</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            {/* first right div */}
            <div className='col-span-4 p-5'>
              <div className="sticky top-32">
                <ProjectContactCard info={projectDetail?.builder} connectedProperties={projectDetail?.connectedProperties} />
                {/* <DownloadBrochures /> */}
              </div>
            </div>
          </div>
          {/* Building Viewer */}
          <div ref={sectionRefs['3D Viewer']}>
            <BuildingViewer id={projectDetail?.projectId} config={config} viewer="Project" />
          </div>
          <div className='grid grid-cols-12'>
            {/* second left div */}
            <div className='col-span-8 projectContainer flex flex-col gap-12'>
              {/* Floor Plans - conditionally render */}
              {projectDetail?.floorPlans?.length > 0 && (
                <motion.div className="" ref={sectionRefs['FloorPlans']}>
                  <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
                </motion.div>
              )}

              {/* Location Map - conditionally render */}
              <div className="" ref={sectionRefs['Map']}>
                <LocationLatLngMap
                  latitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
                  longitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
                />
              </div>

              {/* Specifications - conditionally render */}
              {projectDetail?.specification?.length > 0 && (
                <div className="" ref={sectionRefs['Specifications']}>
                  <ProjectSpecificationCard specifications={projectDetail?.specification} />
                </div>
              )}

              {/* Amenities - conditionally render */}
              {projectDetail?.amenities?.length > 0 && (
                <div className="" ref={sectionRefs['Amenities']}>
                  <AmenitiesDisplay amenities={projectDetail?.amenities} />
                </div>
              )}

              {/* highlights - conditionally render */}
              {projectDetail?.highlights?.length > 0 && (
                <div className="" ref={sectionRefs['Highlights']}>
                  <ProjectHighlights highlights={projectDetail?.highlights} />
                </div>
              )}

              {/* nearbyLocations - conditionally render */}
              {projectDetail?.nearbyLocations?.length > 0 && (
                <div className="" ref={sectionRefs['NearBy']}>
                  <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations} />
                </div>
              )}

              {/* Gallery */}
              <div className="" ref={sectionRefs['Gallery']}>
                <GalleryGrid gallery={projectDetail?.gallery} />
              </div>
            </div>
            {/* second right div */}
            <div className='col-span-4 p-5'>
              <div className="sticky top-32">
                <ProjectContactCard info={projectDetail?.builder} connectedProperties={projectDetail?.connectedProperties} />
                {/* <DownloadBrochures /> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='grid grid-cols-12'>
          {/* buildingConfig not available */}
          {/* first left div */}
          <div className='col-span-8 projectContainer flex flex-col gap-10'>
            <div className="max-w-4xl" ref={sectionRefs['Description']}>
              {/* Header Section */}
              <div className="mb-6">
                {/* New Launch Badge - Only show if availabilityStatus is COMING_SOON */}
                {projectDetail?.availabilityStatus === "COMING_SOON" && (
                  <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
                    <div className="bg-yellow-500 rounded-full p-1">
                      <div className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">NEW LAUNCH</span>
                    <span>Project</span>
                  </div>
                )}
                <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
                {projectDetail?.location?.address && (
                  <p className="text-gray-500">{projectDetail.location.address}</p>
                )}
              </div>

              {/* Status Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projectDetail?.reraNumber && projectDetail.reraNumber !== "undefined" && (
                  <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    RERA {projectDetail.reraNumber}
                  </div>
                )}
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
                  No Brokerage
                </div>
                {(projectDetail?.overview?.totalTowers || projectDetail?.overview?.totalUnits) && (
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                    {projectDetail?.overview?.totalTowers && `${projectDetail.overview.totalTowers} Towers`}
                    {projectDetail?.overview?.totalTowers && projectDetail?.overview?.totalUnits && ' | '}
                    {projectDetail?.overview?.totalUnits && `${projectDetail.overview.totalUnits} Units`}
                  </div>
                )}
              </div>

              {/* Project Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {projectDetail?.overview?.priceRange?.pricePerSqFt && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-semibold">₹{projectDetail.overview.priceRange.pricePerSqFt}/sq.ft.</p>
                  </div>
                )}
                {projectDetail?.overview?.launchDate && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Launch Date</p>
                    <p className="font-semibold">
                      {new Date(projectDetail.overview.launchDate).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                {projectDetail?.overview?.possessionDate && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Possession</p>
                    <p className="font-semibold">
                      {new Date(projectDetail.overview.possessionDate).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                {projectDetail?.status && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Status</p>
                    <p className="font-semibold">
                      {projectDetail.status.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                    </p>
                  </div>
                )}
              </div>

              {/* Property Types - Only show if floorPlans exist */}
              {projectDetail?.floorPlans && projectDetail.floorPlans.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Available Configurations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projectDetail.floorPlans.map((plan, index) => (
                      plan.isActive && (
                        <div key={index} className="border border-gray-200 rounded-md p-4">
                          <h3 className="font-semibold mb-1">{plan.name}</h3>
                          {plan.superArea && <p className="text-gray-500 mb-2">{plan.superArea} sq.ft.</p>}
                          {plan.price && (
                            <p className="font-bold">
                              ₹{(plan.price >= 10000000)
                                ? `${(plan.price / 10000000).toFixed(2)} Cr`
                                : `${Math.round(plan.price / 100000)} Lacs`}
                            </p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="bg-black text-white rounded-xl p-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-yellow-500" />
                    <span>High price appreciation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="text-yellow-500" />
                    <span>Units of choice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDollarSign size={20} className="text-yellow-500" />
                    <span>Easy Payment plans</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Floor Plans - conditionally render */}
            {projectDetail?.floorPlans?.length > 0 && (
              <motion.div className="" ref={sectionRefs['FloorPlans']}>
                <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
              </motion.div>
            )}

            {/* Location Map - conditionally render */}
            <div className="" ref={sectionRefs['Map']}>
              <LocationLatLngMap
                latitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
                longitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
              />
            </div>

            {/* Specifications - conditionally render */}
            {projectDetail?.specification?.length > 0 && (
              <div className="" ref={sectionRefs['Specifications']}>
                <ProjectSpecificationCard specifications={projectDetail?.specification} />
              </div>
            )}

            {/* Amenities - conditionally render */}
            {projectDetail?.amenities?.length > 0 && (
              <div className="" ref={sectionRefs['Amenities']}>
                <AmenitiesDisplay amenities={projectDetail?.amenities} />
              </div>
            )}

            {/* highlights - conditionally render */}
            {projectDetail?.highlights?.length > 0 && (
              <div className="" ref={sectionRefs['Highlights']}>
                <ProjectHighlights highlights={projectDetail?.highlights} />
              </div>
            )}

            {/* nearbyLocations - conditionally render */}
            {projectDetail?.nearbyLocations?.length > 0 && (
              <div className="" ref={sectionRefs['NearBy']}>
                <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations} />
              </div>
            )}
          </div>
          {/* first right div */}
          <div className='col-span-4 p-5'>
            <div className="sticky top-32">
              <ProjectContactCard info={projectDetail?.builder} connectedProperties={projectDetail?.connectedProperties} />
              {/* <DownloadBrochures /> */}
            </div>
          </div>
        </div>
      )}


      {/* Common Bottom div  */}
      {projectDetail?.connectedProperties?.length > 0 && (
        <div className="projectContainer" ref={sectionRefs['ConnectedProperties']}>
          <HeadingCommon title='Properties Under The Project' />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectDetail?.connectedProperties?.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetailPage;
