// import React, { useEffect, useRef, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import FlexibleLayout from '../components/FlexibleLayout';
// import AppDownloadBanner from '../components/AppDownloadBanner';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { getHomeFeed } from '../redux/features/HomeFeed/homeFeedSlice';
// import ImageCarousel from '../components/ImageCarousel';
// import axios from 'axios';
// import { applyFilter } from '../redux/features/Map/mapSlice';

// function Home() {

//     const { properties, projects, buildings } = useSelector(state => state.homeFeed)


//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const dispatch = useDispatch()
//     const isHomePage = location.pathname === '/';
//     const [selectedId, setSelectedId] = useState(null);
//     // console.log(selectedId)


//     const [isSticky, setIsSticky] = useState(false);
//     const navbarRef = useRef(null);
//     const topNavRef = useRef(null);

//     /* Top SEction */
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const options = ["Plots", "Lands", "Apartment", "Flats", "Warehouses", "Office"];

//     const [city, setCity] = useState('')
//     const [isCityLoading, setIsCityLoading] = useState(true)

//     // New state for Buy/Rent toggle
//     const [selectedPurpose, setSelectedPurpose] = useState(null);
//     // New state for price input
//     const [maxPrice, setMaxPrice] = useState('');
//     // New state for Buy/Rent individual toggles
//     const [purposeFilters, setPurposeFilters] = useState({
//         buy: false,
//         rent: false
//     });


//     // Handle purpose selection (Buy/Rent)
//     const handlePurposeSelect = (purpose) => {
//         setSelectedPurpose(selectedPurpose === purpose ? null : purpose);
//     };


//     const handleShowResults = async () => {
//         // Create new filters object without merging
//         const filters = {
//             vanilla: 'property' // Identifier for property filters
//         };

//         // Add property types if selected
//         if (selectedOptions && selectedOptions.length > 0) {
//             filters.propertyType = selectedOptions;
//         }

//         // Add purpose if selected
//         if (selectedPurpose) {
//             filters.purpose = selectedPurpose.toLowerCase();
//         }

//         // Add price range if specified
//         if (maxPrice) {
//             filters.price = {
//                 min: 0,
//                 max: parseInt(maxPrice)
//             };
//         }

//         console.log("filters", filters)
//         // Dispatch new filters directly
//         dispatch(applyFilter({ ...filters }));
//         navigate('/main');
//     };




//     // Toggle selection of an option
//     const toggleOption = (option) => {
//         setSelectedOptions((prevSelected) =>
//             prevSelected.includes(option)
//                 ? prevSelected.filter((item) => item !== option) // Remove if already selected
//                 : [...prevSelected, option] // Add if not selected
//         );
//     };



//     // Format selected options for display
//     const displayText = selectedOptions.length > 0
//         ? selectedOptions.join(", ") // Show selected items
//         : "Explore Filters"; // Default text


//     const services = [
//         { id: 1, title: 'Find Apartments', count: '782', icon: '/assets/filterLogo/40a31d48d20a489425deac562686f78a.png', "type_name": "apartment" },
//         { id: 2, title: 'Find New buildings', count: '136 695', icon: '/assets/filterLogo/876e3d7f9a4c1f401ac45d8403353caf.png', "type_name": "building" },
//         { id: 3, title: 'Project', count: '16 309', icon: '/assets/filterLogo/955d3d9dc5a62bdb79f4c3b68e847a07.png', "type_name": "project" },
//         { id: 4, title: "Explore Properties Nearby", count: '', icon: '/assets/filterLogo/abe47b78b6874fc862d3cddd7e4e9e73.png', "type_name": "property" },
//         { id: 5, title: 'We will help to pass', count: '', icon: '/assets/filterLogo/c7afa9d684810255c5213a23ceb1b0be.png', "type_name": "post_property" },
//         { id: 6, title: 'EMI Calculator', count: '', icon: '/assets/filterLogo/d845c540d17e664865785818a331b8da.png' },
//         { id: 7, title: 'Services', count: '', icon: '/assets/filterLogo/fd340c7f0e727f43eb3ea897d445873e.png', "type_name": "services" },
//     ];

//     // Handle filter with direct dispatch
//     const handleFilter = (type_name, id) => {
//         setSelectedId(id);

//         if (!navigator.geolocation) {
//             alert("Geolocation is not supported by your browser");
//             return;
//         }

//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;

//                 switch (type_name) {
//                     case 'project':
//                     case 'building':
//                     case 'property':
//                         // dispatch(applyFilter({ vanilla: type_name }));
//                         navigate('/main')
//                         break;
//                     case 'getMapFeed':
//                         dispatch(applyFilter({}));
//                         navigate('/main')
//                         break;
//                     case 'rent':
//                     case 'buy':
//                     case 'Buy':
//                     case 'Rent':
//                         dispatch(applyFilter({
//                             purpose: type_name
//                         }));
//                         // dispatch(applyFilter({
//                         //     vanilla: 'property',
//                         //     purpose: type_name
//                         // }));
//                         break;
//                     case 'services':
//                         navigate('/services');
//                         return;
//                     case 'post_property':
//                         navigate('/post-property-for-free');
//                         return;
//                     case 'apartment':
//                         // For property type filters
//                         dispatch(applyFilter({ propertyType: 'apartment' }));
//                         // dispatch(applyFilter({ vanilla: 'property', propertyType: 'apartment' }));
//                         navigate('/main')
//                         return;
//                     case 'Office':
//                         // For property type filters
//                         dispatch(applyFilter({ propertyType: 'Office' }));
//                         // dispatch(applyFilter({ vanilla: 'property', propertyType: 'Office' }));
//                         return;
//                     case 'lands':
//                         // For property type filters
//                         dispatch(applyFilter());
//                         return;
//                     default:
//                         dispatch(applyFilter({}))
//                         navigate('/main')
//                 }


//             },
//             (error) => {
//                 console.error("Error retrieving location:", error);
//                 alert("Unable to retrieve your location. Please try again.");
//             }
//         );
//     };

//     useEffect(() => {
//         if (!navigator.geolocation) {
//             alert("Geolocation is not supported by your browser");
//             return;
//         }

//         navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 const { latitude, longitude } = position.coords;
//                 setIsCityLoading(true);
//                 // Dispatch map feed action
//                 // dispatch(getMapFeed({ latitude, longitude, radius: 10000 }));

//                 try {
//                     // Use Google Maps Geocoding API to get city and state
//                     const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Assuming the key is stored here
//                     const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

//                     const response = await axios.get(geocodeUrl);
//                     const results = response.data.results;

//                     if (results.length > 0) {
//                         const addressComponents = results[0].address_components;

//                         const city = addressComponents.find((component) =>
//                             component.types.includes('locality')
//                         )?.long_name;

//                         const state = addressComponents.find((component) =>
//                             component.types.includes('administrative_area_level_1')
//                         )?.long_name;

//                         // console.log("City:", city);
//                         // console.log("State:", state);
//                         setCity(city)

//                         // You can dispatch another action or update the state with city and state here
//                     } else {
//                         console.warn("No address components found");
//                     }
//                 } catch (error) {
//                     console.error("Error fetching city and state:", error);
//                 } finally {
//                     setIsCityLoading(false);
//                 }
//             },
//             (error) => {
//                 console.error("Error retrieving location:", error);
//                 alert("Unable to retrieve your location. Please try again.");
//             }
//         );
//     }, [dispatch]);

//     useEffect(() => {
//         if (!navigator.geolocation) {
//             alert("Geolocation is not supported by your browser");
//             return;
//         }

//         navigator.geolocation.getCurrentPosition(
//             async (position) => {
//                 const { latitude, longitude } = position.coords;
//                 // Dispatch map feed action
//                 // dispatch(getHomeFeed({ latitude, longitude, radius: 10000 }));
//                 // dispatch(getHomeFeed());

//             }
//         );
//     }, [dispatch]);







//     return (
//         <div className=' px-8  font-poppins'>

//             {/* carousal */}
//             {/* <div className='w-full h-full px-16 mt-6'>
//                 <img src='https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242' className='w-[100vw] max-h-[50vh]   object-[25% 85%]  rounded-3xl' />
//             </div> */}
//             <ImageCarousel />

//             {/* Search Bar Section */}
//             <div className="w-full max-w-7xl my-2 mx-auto mt-12 ">
//                 <div className="flex justify-center flex-wrap items-center gap-2">
//                     {/* dropdown */}
//                     <div className="relative inline-block w-64">
//                         <button
//                             className="flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300"
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                         >
//                             <span className="truncate w-[85%] overflow-hidden whitespace-nowrap text-ellipsis">
//                                 {displayText}
//                             </span>
//                             <svg
//                                 className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
//                                     }`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M19 9l-7 7-7-7"
//                                 />
//                             </svg>
//                         </button>

//                         {isDropdownOpen && (
//                             <div className="z-50 absolute left-0 mt-2 w-full  border bg-black/10 backdrop-blur-sm border-gray-200 rounded-md shadow-lg">
//                                 {options.map((option) => (
//                                     <div
//                                         key={option}
//                                         className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 ${selectedOptions.includes(option)
//                                             ? "bg-gray-200"
//                                             : ""
//                                             }`}
//                                         onClick={() => toggleOption(option)}
//                                     >
//                                         <input
//                                             type="checkbox"
//                                             checked={selectedOptions.includes(option)}
//                                             readOnly
//                                             className="w-4 h-4"
//                                         />
//                                         <span>{option}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     {/* Buy / Rent Button filters */}
//                     <div className="flex flex-wrap gap-2">
//                         <button
//                             className={`px-4 py-2 rounded-md border border-gray-300 ${selectedPurpose === 'buy' ? 'bg-black text-white' : 'text-gray-700 bg-gray-50'}`}
//                             onClick={() => handlePurposeSelect('buy')}
//                         >
//                             Buy
//                         </button>
//                         <button
//                             className={`px-4 py-2 rounded-md border border-gray-300 ${selectedPurpose === 'rent' ? 'bg-black text-white' : 'text-gray-700 bg-gray-50'}`}
//                             onClick={() => handlePurposeSelect('rent')}
//                         >
//                             Rent
//                         </button>
//                     </div>


//                     {/* Show results button */}
//                     <button onClick={handleShowResults} className="px-6 py-2 bg-[#F5CA20] hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition-colors">
//                         Show Results
//                     </button>
//                     {/* Map toggle */}
//                     <button className="px-4 py-2 text-white bg-[#2E7D32] rounded-md " onClick={() => handleFilter('getMapFeed')} >
//                         On the map
//                     </button>
//                 </div>
//             </div>


//             {/*  direct filters  */}
//             <div className='max-w-7xl mx-auto pt-2 mt-4 z-50'>
//                 {/* Services Section */}
//                 <div className="mb-8">
//                     {/* <div className="flex items-center gap-4 mb-4">
//                             <h2 className="text-xl px-9">Frequently searched</h2> */}
//                     {/* <div className="flex items-center gap-2">
//                           <span>Services</span>
//                           <span className="border border-black rounded px-2 py-1 text-sm">ПОД КЛЮЧ</span>
//                       </div>
//                       <span className="ml-auto">About the house</span>
//                       <span>Partner</span> */}
//                     {/* </div> */}

//                     {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7"> */}
//                     <div className="flex justify-evenly">
//                         {services?.map((service) => (
//                             <div key={service.id}>
//                                 <div

//                                     className="bg-[#F3F3F6] rounded-xl shadow-sm cursor-pointer w-32 h-auto overflow-hidden "
//                                     onClick={() => handleFilter(service?.type_name)}
//                                 >
//                                     <img
//                                         src={service.icon}
//                                         alt={service.title}
//                                         className=" rounded scale-150 hover:scale-150 transition-all ease-in-out duration-150 cover "
//                                     />
//                                 </div>
//                                 <div className="text-xs flex justify-start mt-2 ">
//                                     <p className='font-semibold'>{service.title}</p>
//                                     {/* {service.count && (
//                                       <p className="text-gray-500">.{service.count}</p>
//                                   )} */}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>

//             <FlexibleLayout
//                 type="property"
//                 headingText="New Properties"
//                 details={properties}
//                 salesAdsPosition="right"
//                 type_name="property" // where to navigate
//             />
//             <FlexibleLayout
//                 type="project"
//                 headingText="New Projects"
//                 details={projects}
//                 salesAdsPosition="left"
//                 type_name="project"
//             />
//             <FlexibleLayout
//                 type="building"
//                 headingText="New Buildings"
//                 details={buildings}
//                 salesAdsPosition="right"
//                 type_name="building"
//             />



//             <div className='my-12'>
//                 <AppDownloadBanner />
//             </div>

//         </div>
//     )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../bolt/components/Navbar';
import AdCarousel from '../bolt/components/AdCarousel';
import SearchBar from '../bolt/components/SearchBar';
import FeaturedProperties from '../bolt/components/FeaturedProperties';
import Features from '../bolt/components/Features';
import PopularDestinations from '../bolt/components/PopularDestinations';
import Testimonials from '../bolt/components/Testimonials';
import CallToAction from '../bolt/components/CallToAction';
import Footer from '../bolt/components/Footer';
import SearchBarDemo from '../bolt/components/SearchBarDemo';

function Home() {
    const [currentCity, setCurrentCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    console.log("currentCity", currentCity)

    // Smooth scroll to section when clicking on navigation links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href')?.substring(1);
                const element = document.getElementById(id || '');
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);


    
    // useEffect(() => {
    //     // Function to get the current location and then fetch the city name
    //     setLoading(true);

    //     // Check if geolocation is available in the browser
    //     if (!navigator.geolocation) {
    //         setError('Geolocation is not supported by your browser');
    //         setLoading(false);
    //         return;
    //     }

    //     // Get current position
    //     navigator.geolocation.getCurrentPosition(
    //         async (position) => {
    //             try {
    //                 const { latitude, longitude } = position.coords;

    //                 // Using Google Maps Geocoding API to get the city
    //                 // Note: You would need a valid API key in a real application
    //                 const response = await fetch(
    //                     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    //                 );

    //                 if (!response.ok) {
    //                     throw new Error('Failed to fetch location data');
    //                 }

    //                 const data = await response.json();
    //                 console.log(data)

    //                 if (data.status === 'OK') {
    //                     // Extract city from address components
    //                     let city = '';
    //                     for (let component of data.results[0].address_components) {
    //                         if (component.types.includes('locality')) {
    //                             city = component.long_name;
    //                             break;
    //                         }
    //                     }

    //                     setCurrentCity(city || 'Unknown City');
    //                 } else {
    //                     throw new Error('Geocoding API error: ' + data.status);
    //                 }

    //                 setLoading(false);
    //             } catch (err) {
    //                 setError(err.message);
    //                 setLoading(false);
    //             }
    //         },
    //         (error) => {
    //             switch (error.code) {
    //                 case error.PERMISSION_DENIED:
    //                     setError('User denied the request for geolocation');
    //                     break;
    //                 case error.POSITION_UNAVAILABLE:
    //                     setError('Location information is unavailable');
    //                     break;
    //                 case error.TIMEOUT:
    //                     setError('The request to get user location timed out');
    //                     break;
    //                 default:
    //                     setError('An unknown error occurred');
    //             }
    //             setLoading(false);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    //     );

    //     // No cleanup function needed as we're not subscribing to any eve
    // }, []); // Empty dependency array means this runs once on mount

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                setLoading(true);
                console.log('Requesting location access...');

                // Request permission for geolocation
                if (!navigator.geolocation) {
                    throw new Error('Geolocation is not supported by your browser');
                }

                // Get current position
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    });
                });

                const { latitude, longitude } = position.coords;
                console.log('Location obtained:', { latitude, longitude });

                // Use Google Maps Geocoding API to get address information
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch location data from Google API');
                }

                const data = await response.json();
                console.log('Google Geocoding API response:', data);

                if (data.status !== 'OK') {
                    throw new Error(`Google API error: ${data.status}`);
                }

                // Extract city from the address components
                let city = 'Unknown';

                if (data.results && data.results.length > 0) {
                    const addressComponents = data.results[0].address_components;

                    // Look for locality (city) or administrative_area_level_2 (county/district)
                    for (const component of addressComponents) {
                        if (component.types.includes('locality')) {
                            city = component.long_name;
                            break;
                        } else if (component.types.includes('administrative_area_level_2') && city === 'Unknown') {
                            city = component.long_name;
                        }
                    }

                    console.log('Extracted city:', city);
                }

                setCurrentCity(city);
                setLoading(false);
            } catch (err) {
                console.error('Error getting location:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchLocation();
    }, []);
    
    return (
        <div className="">
            {/* Progress bar */}
            {/* <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 z-50 origin-left"
                style={{ scaleX }}
            /> */}

            <Navbar currentCity={currentCity} loading={loading} />
            <AdCarousel />
            {/* <SearchBar /> */}
            <SearchBarDemo />
            <FeaturedProperties currentCity={currentCity} /> {/* homefeed - properties */}
            <PopularDestinations currentCity={currentCity} /> {/* homefeed - projects */}
            <Features />
            <Testimonials />
            <CallToAction />
            {/* <Footer /> */}

            {/* Scroll to top button */}
            {/* <motion.button
                initial={{ opacity: 0 }}
                animate={{
                    opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
                    y: scrollYProgress.get() > 0.2 ? 0 : 20
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-3 rounded-full bg-emerald-600 text-white shadow-lg z-40"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </motion.button> */}
        </div>
    );
}

export default Home;