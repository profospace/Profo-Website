// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   Search,
//   MapPin,
//   Home as HomeIcon,
//   DollarSign,
//   Calendar,
//   Users,
//   ArrowUpRight
// } from 'lucide-react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { applyFilter } from '../../redux/features/Map/mapSlice';

// // Google Places API script loader
// // const loadGooglePlacesScript = (callback) => {
// //   // Check if script is already loaded
// //   if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {
// //     callback();
// //     return;
// //   }

// //   // Create script element
// //   const script = document.createElement('script');
// //   script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_API_KEY}&libraries=places`;
// //   script.async = true;
// //   script.defer = true;
// //   script.onload = callback;
// //   document.head.appendChild(script);
// // };



// const SearchBarDemo = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('buy');
//   const [searchInput, setSearchInput] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [placesServiceLoaded, setPlacesServiceLoaded] = useState(false);
//   const [propertyType, setPropertyType] = useState('Any Type');
//   const [priceRange, setPriceRange] = useState('Any Price');
//   const dispatch = useDispatch()

//   // Custom hook for typing animation
//   const useTypingPlaceholder = () => {
//     const phrases = ["Search Location", "Search City", "Search Address"];
//     const [currentPlaceholder, setCurrentPlaceholder] = useState("");
//     const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//     const [isTyping, setIsTyping] = useState(true);

//     useEffect(() => {
//       let timer;

//       if (isTyping) {
//         const currentPhrase = phrases[currentPhraseIndex];
//         if (currentPlaceholder.length < currentPhrase.length) {
//           timer = setTimeout(() => {
//             setCurrentPlaceholder(currentPhrase.substring(0, currentPlaceholder.length + 1));
//           }, 100); // Typing speed
//         } else {
//           // Pause at the end of typing before starting to delete
//           timer = setTimeout(() => {
//             setIsTyping(false);
//           }, 1500); // Pause time
//         }
//       } else {
//         if (currentPlaceholder.length > 0) {
//           timer = setTimeout(() => {
//             setCurrentPlaceholder(currentPlaceholder.substring(0, currentPlaceholder.length - 1));
//           }, 50); // Deleting speed (faster than typing)
//         } else {
//           // Move to next phrase
//           setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
//           setIsTyping(true);
//         }
//       }

//       return () => clearTimeout(timer);
//     }, [currentPlaceholder, currentPhraseIndex, isTyping]);

//     return currentPlaceholder;
//   };

//   const placeholder = useTypingPlaceholder();


//   // Enhanced filter state
//   const [filters, setFilters] = useState({
//     vanilla: 'property', // Default to property search
//     purpose: 'buy',      // Default to buy
//     propertyType: [],    // Empty array for property types
//     price: {
//       min: null,
//       max: null
//     },
//     city: '',
//     locality: ''
//   });

//   const autocompleteService = useRef(null);
//   const searchInputRef = useRef(null);

//   // Load Google Places API
//   // useEffect(() => {
//   //   loadGooglePlacesScript(() => {
//   //     if (window.google && window.google.maps && window.google.maps.places) {
//   //       autocompleteService.current = new window.google.maps.places.AutocompleteService();
//   //       setPlacesServiceLoaded(true);
//   //     }
//   //   });
//   // }, []);

//   // Fetch suggestions when input changes
//   useEffect(() => {
//     if (!placesServiceLoaded || !autocompleteService.current || searchInput.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const fetchSuggestions = async () => {
//       try {
//         const response = await autocompleteService.current.getPlacePredictions({
//           input: searchInput,
//           types: ['(cities)', '(locality)'],
//           componentRestrictions: { country: 'in' },
//         });

//         if (response && response.predictions) {
//           setSuggestions(response.predictions);
//           setShowSuggestions(response.predictions.length > 0);
//         }
//       } catch (error) {
//         console.error('Error fetching place suggestions:', error);

//         // Fallback to address search if cities search fails
//         try {
//           const addressResponse = await autocompleteService.current.getPlacePredictions({
//             input: searchInput,
//             types: ['address'],
//             componentRestrictions: { country: 'in' },
//           });

//           if (addressResponse && addressResponse.predictions) {
//             setSuggestions(addressResponse.predictions);
//             setShowSuggestions(addressResponse.predictions.length > 0);
//           }
//         } catch (fallbackError) {
//           console.error('Fallback error fetching place suggestions:', fallbackError);
//         }
//       }
//     };

//     const timer = setTimeout(fetchSuggestions, 300); // Debounce API calls

//     return () => clearTimeout(timer);
//   }, [searchInput, placesServiceLoaded]);

//   // Handle outside clicks to close suggestions
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
//         setShowSuggestions(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Update filter when tab changes
//   useEffect(() => {
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       purpose: activeTab === 'buy' ? 'Buy' : 'Rent'
//     }));
//   }, [activeTab]);

//   // Handle suggestion selection
//   const handleSuggestionClick = (suggestion) => {
//     const mainText = suggestion.structured_formatting.main_text;
//     const secondaryText = suggestion.structured_formatting.secondary_text;

//     // Determine if this is a city or locality based on types
//     const isCity = suggestion.types.includes('locality') ||
//       suggestion.types.includes('administrative_area_level_1') ||
//       suggestion.types.includes('administrative_area_level_2');

//     setSearchInput(mainText);
//     setSelectedLocation(mainText);

//     // Update the filters object with location information
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       ...(isCity ? { city: mainText } : { locality: mainText })
//     }));

//     setShowSuggestions(false);
//   };

//   // Handle property type selection
//   const handlePropertyTypeChange = (e) => {
//     const selectedType = e.target.value;
//     setPropertyType(selectedType);

//     // Update filters object
//     if (selectedType === 'Any Type') {
//       // Clear property type filter if "Any Type" is selected
//       setFilters(prevFilters => {
//         const updatedFilters = { ...prevFilters };
//         delete updatedFilters.propertyType;
//         return updatedFilters;
//       });
//     } else {
//       setFilters(prevFilters => ({
//         ...prevFilters,
//         propertyType: [selectedType]
//       }));
//     }
//   };

//   // Handle price range selection
//   const handlePriceRangeChange = (e) => {
//     const selectedRange = e.target.value;
//     setPriceRange(selectedRange);

//     // Update price filter based on selection
//     let priceMin = null;
//     let priceMax = null;

//     switch (selectedRange) {
//       case 'Any Price':
//         // Clear price filter
//         break;
//       case '₹5L - ₹50L':
//         priceMin = 500000;
//         priceMax = 5000000;
//         break;
//       case '₹50L - ₹1Cr':
//         priceMin = 5000000;
//         priceMax = 10000000;
//         break;
//       case '₹1Cr - ₹2Cr':
//         priceMin = 10000000;
//         priceMax = 20000000;
//         break;
//       case '₹2Cr+':
//         priceMin = 20000000;
//         break;
//       default:
//         break;
//     }

//     setFilters(prevFilters => ({
//       ...prevFilters,
//       price: {
//         min: priceMin,
//         max: priceMax
//       }
//     }));
//   };


//   // Handle search button click
//   const handleSearch = async () => {
//     try {
//       // Create a new object with only the non-empty/non-default values
//       const cleanedFilters = {};

//       // Only add vanilla if it's not the default 'property'
//       if (filters.vanilla !== 'property') {
//         cleanedFilters.vanilla = filters.vanilla;
//       }

//       // Only add purpose if it's been set
//       if (filters.purpose) {
//         cleanedFilters.purpose = filters.purpose;
//       }

//       // Only add propertyType if it's not empty
//       if (filters.propertyType && filters.propertyType.length > 0) {
//         cleanedFilters.propertyType = filters.propertyType;
//       }

//       // Only add price if min or max has a value
//       if (filters.price && (filters.price.min || filters.price.max)) {
//         cleanedFilters.price = {};
//         if (filters.price.min) cleanedFilters.price.min = filters.price.min;
//         if (filters.price.max) cleanedFilters.price.max = filters.price.max;
//       }

//       // Only add city if it's not empty
//       if (filters.city) {
//         cleanedFilters.city = filters.city;
//       }

//       // Only add locality if it's not empty
//       if (filters.locality) {
//         cleanedFilters.locality = filters.locality;
//       }

//       console.log("Cleaned filters:", cleanedFilters);
//       dispatch(applyFilter(cleanedFilters));
//       // dispatch(applyFilter({ vanilla : "property" , ...cleanedFilters}));
//       navigate("/main");
//     } catch (error) {
//       console.error('Search error:', error);
//       // Handle error (could add toast notification here)
//     }
//   };

//   // Determine if a suggestion is a city or locality based on its types
//   const getSuggestionType = (types) => {
//     if (types.includes('locality') ||
//       types.includes('administrative_area_level_1') ||
//       types.includes('administrative_area_level_2')) {
//       return 'City';
//     } else if (types.includes('sublocality') ||
//       types.includes('neighborhood') ||
//       types.includes('route')) {
//       return 'Locality';
//     }
//     return '';
//   };

//   return (
//     <section className="absolute left-[8%] z-20 bg-white shadow-lg rounded-lg mx-4 sm:mx-8 lg:mx-auto max-w-6xl -mt-20">
//       <div className="px-6 py-2">
//         {/* Tabs */}
//         <div className="flex border-b border-gray-200 mb-6">
//           <button
//             onClick={() => setActiveTab('buy')}
//             className={`px-6 py-3 text-sm font-medium ${activeTab === 'buy'
//               ? 'text-[#059669] border-b-2 border-[#059669]'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Buy
//           </button>
//           <button
//             onClick={() => setActiveTab('rent')}
//             className={`px-6 py-3 text-sm font-medium ${activeTab === 'rent'
//               ? 'text-[#059669] border-b-2 border-[#059669]'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Rent
//           </button>
//         </div>

//         {/* Search form */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//           <div className="md:col-span-2 relative">
//             {/* <label className="block text-sm font-medium text-gray-700 mb-1">Location</label> */}
//             <div className="relative">
//               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               {/* <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onFocus={() => setShowSuggestions(suggestions.length > 0)}
//                 placeholder="Location, City, neighborhood, or address"
//                 className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500"
//               /> */}
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onFocus={() => setShowSuggestions(suggestions.length > 0)}
//                 placeholder={placeholder}
//                 className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500"
//               />
//             </div>

//             {/* Suggestions dropdown */}
//             {showSuggestions && (
//               <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-80 overflow-auto">
//                 {searchInput && (
//                   <div className="px-4 py-2 border-b border-gray-100 text-red-500 font-medium text-sm">
//                     {searchInput}
//                   </div>
//                 )}

//                 {suggestions.map((suggestion) => {
//                   const suggestionType = getSuggestionType(suggestion.types);

//                   return (
//                     <div
//                       key={suggestion.place_id}
//                       className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-start justify-between border-b border-gray-100 last:border-b-0"
//                       onMouseDown={(e) => e.stopPropagation()} // Prevent onBlur from firing before click
//                     >
//                       <div className="flex items-start" onClick={() => handleSuggestionClick(suggestion)}>
//                         <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
//                         <div>
//                           <div className="text-sm font-medium text-gray-800">
//                             {suggestion.structured_formatting.main_text}
//                           </div>
//                           {suggestion.structured_formatting.secondary_text && (
//                             <div className="text-xs text-gray-500 mt-0.5">
//                               {suggestion.structured_formatting.secondary_text}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="text-xs text-gray-400 ml-2">
//                         {suggestionType && <span>{suggestionType}</span>}
//                         {!suggestionType && <ArrowUpRight className="h-4 w-4" />}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>

//           <div>
//             {/* <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label> */}
//             <div className="relative">
//               <HomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <select
//                 className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-none"
//                 value={propertyType}
//                 onChange={handlePropertyTypeChange}
//               >
//                 <option>Property Type</option>
//                 <option>House</option>
//                 <option>Apartment</option>
//                 <option>Condo</option>
//                 <option>Villa</option>
//                 <option>Office</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             {/* <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label> */}
//             <div className="relative">
//               <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <select
//                 className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
//                 value={priceRange}
//                 onChange={handlePriceRangeChange}
//               >
//                 <option>Price Range</option>
//                 <option>₹5L - ₹50L</option>
//                 <option>₹50L - ₹1Cr</option>
//                 <option>₹1Cr - ₹2Cr</option>
//                 <option>₹2Cr+</option>
//               </select>
//             </div>
//           </div>

//           <div className='mb-4'>
//             {/* <label className="block text-sm font-medium text-gray-700 mb-1">Search</label> */}
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-[#059669] hover:bg-[#047857] text-white py-3 px-4 rounded-lg flex items-center justify-center"
//               onClick={handleSearch}
//             >
//               <Search className="h-5 w-5 mr-2" />
//               Search
//             </motion.button>
//           </div>
//         </div>


//       </div>
//     </section>
//   );
// };

// export default SearchBarDemo;

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Search,
//   MapPin,
//   Home as HomeIcon,
//   DollarSign,
//   Calendar,
//   Users,
//   ArrowUpRight
// } from 'lucide-react';
// import { useDispatch } from 'react-redux';
// import { applyFilter } from '../../redux/features/Map/mapSlice';

// const SearchBarDemo = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('buy');
//   const [searchInput, setSearchInput] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [placesServiceLoaded, setPlacesServiceLoaded] = useState(false);
//   const [propertyType, setPropertyType] = useState('Any Type');
//   const [priceRange, setPriceRange] = useState('Any Price');
//   const dispatch = useDispatch();
  
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const searchButtonRef = useRef(null);
//   const searchInputRef = useRef(null);
//   const autocompleteService = useRef(null);

//   const useTypingPlaceholder = () => {
//     const phrases = ["Search Location", "Search City", "Search Address"];
//     const [currentPlaceholder, setCurrentPlaceholder] = useState("");
//     const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//     const [isTyping, setIsTyping] = useState(true);

//     useEffect(() => {
//       let timer;

//       if (isTyping) {
//         const currentPhrase = phrases[currentPhraseIndex];
//         if (currentPlaceholder.length < currentPhrase.length) {
//           timer = setTimeout(() => {
//             setCurrentPlaceholder(currentPhrase.substring(0, currentPlaceholder.length + 1));
//           }, 100);
//         } else {
//           timer = setTimeout(() => {
//             setIsTyping(false);
//           }, 1500);
//         }
//       } else {
//         if (currentPlaceholder.length > 0) {
//           timer = setTimeout(() => {
//             setCurrentPlaceholder(currentPlaceholder.substring(0, currentPlaceholder.length - 1));
//           }, 50);
//         } else {
//           setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
//           setIsTyping(true);
//         }
//       }

//       return () => clearTimeout(timer);
//     }, [currentPlaceholder, currentPhraseIndex, isTyping]);

//     return currentPlaceholder;
//   };

//   const placeholder = useTypingPlaceholder();

//   const [filters, setFilters] = useState({
//     vanilla: 'property',
//     purpose: 'buy',
//     propertyType: [],
//     price: {
//       min: null,
//       max: null
//     },
//     city: '',
//     locality: ''
//   });

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
//         setShowSuggestions(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       purpose: activeTab === 'buy' ? 'Buy' : 'Rent'
//     }));
//   }, [activeTab]);

//   useEffect(() => {
//     if (!placesServiceLoaded || !autocompleteService.current || searchInput.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const fetchSuggestions = async () => {
//       try {
//         const response = await autocompleteService.current.getPlacePredictions({
//           input: searchInput,
//           types: ['(cities)', '(locality)'],
//           componentRestrictions: { country: 'in' },
//         });

//         if (response && response.predictions) {
//           setSuggestions(response.predictions);
//           setShowSuggestions(response.predictions.length > 0);
//         }
//       } catch (error) {
//         console.error('Error fetching place suggestions:', error);

//         try {
//           const addressResponse = await autocompleteService.current.getPlacePredictions({
//             input: searchInput,
//             types: ['address'],
//             componentRestrictions: { country: 'in' },
//           });

//           if (addressResponse && addressResponse.predictions) {
//             setSuggestions(addressResponse.predictions);
//             setShowSuggestions(addressResponse.predictions.length > 0);
//           }
//         } catch (fallbackError) {
//           console.error('Fallback error fetching place suggestions:', fallbackError);
//         }
//       }
//     };

//     const timer = setTimeout(fetchSuggestions, 300);

//     return () => clearTimeout(timer);
//   }, [searchInput, placesServiceLoaded]);

//   const handleSuggestionClick = (suggestion) => {
//     const mainText = suggestion.structured_formatting.main_text;
//     const secondaryText = suggestion.structured_formatting.secondary_text;

//     const isCity = suggestion.types.includes('locality') ||
//       suggestion.types.includes('administrative_area_level_1') ||
//       suggestion.types.includes('administrative_area_level_2');

//     setSearchInput(mainText);
//     setSelectedLocation(mainText);

//     setFilters(prevFilters => ({
//       ...prevFilters,
//       ...(isCity ? { city: mainText } : { locality: mainText })
//     }));

//     setShowSuggestions(false);
//   };

//   const handlePropertyTypeChange = (e) => {
//     const selectedType = e.target.value;
//     setPropertyType(selectedType);

//     if (selectedType === 'Any Type') {
//       setFilters(prevFilters => {
//         const updatedFilters = { ...prevFilters };
//         delete updatedFilters.propertyType;
//         return updatedFilters;
//       });
//     } else {
//       setFilters(prevFilters => ({
//         ...prevFilters,
//         propertyType: [selectedType]
//       }));
//     }
//   };

//   const handlePriceRangeChange = (e) => {
//     const selectedRange = e.target.value;
//     setPriceRange(selectedRange);

//     let priceMin = null;
//     let priceMax = null;

//     switch (selectedRange) {
//       case 'Any Price':
//         break;
//       case '₹5L - ₹50L':
//         priceMin = 500000;
//         priceMax = 5000000;
//         break;
//       case '₹50L - ₹1Cr':
//         priceMin = 5000000;
//         priceMax = 10000000;
//         break;
//       case '₹1Cr - ₹2Cr':
//         priceMin = 10000000;
//         priceMax = 20000000;
//         break;
//       case '₹2Cr+':
//         priceMin = 20000000;
//         break;
//       default:
//         break;
//     }

//     setFilters(prevFilters => ({
//       ...prevFilters,
//       price: {
//         min: priceMin,
//         max: priceMax
//       }
//     }));
//   };

//   const handleSearch = async () => {
//     try {
//       const cleanedFilters = {};

//       if (filters.vanilla !== 'property') {
//         cleanedFilters.vanilla = filters.vanilla;
//       }

//       if (filters.purpose) {
//         cleanedFilters.purpose = filters.purpose;
//       }

//       if (filters.propertyType && filters.propertyType.length > 0) {
//         cleanedFilters.propertyType = filters.propertyType;
//       }

//       if (filters.price && (filters.price.min || filters.price.max)) {
//         cleanedFilters.price = {};
//         if (filters.price.min) cleanedFilters.price.min = filters.price.min;
//         if (filters.price.max) cleanedFilters.price.max = filters.price.max;
//       }

//       if (filters.city) {
//         cleanedFilters.city = filters.city;
//       }

//       if (filters.locality) {
//         cleanedFilters.locality = filters.locality;
//       }

//       console.log("Cleaned filters:", cleanedFilters);
//       dispatch(applyFilter(cleanedFilters));
      
//       setIsTransitioning(true);
      
//       setTimeout(() => {
//         navigate("/main");
//       }, 200);
      
//     } catch (error) {
//       console.error('Search error:', error);
//     }
//   };

//   const getSuggestionType = (types) => {
//     if (types.includes('locality') ||
//       types.includes('administrative_area_level_1') ||
//       types.includes('administrative_area_level_2')) {
//       return 'City';
//     } else if (types.includes('sublocality') ||
//       types.includes('neighborhood') ||
//       types.includes('route')) {
//       return 'Locality';
//     }
//     return '';
//   };

//   return (
//     <section className="absolute left-[8%] z-20 bg-white shadow-lg rounded-lg mx-4 sm:mx-8 lg:mx-auto max-w-6xl -mt-20">
//       <div className="px-6 py-2">
//         <div className="flex border-b border-gray-200 mb-6">
//           <button
//             onClick={() => setActiveTab('buy')}
//             className={`px-6 py-3 text-sm font-medium ${activeTab === 'buy'
//               ? 'text-[#059669] border-b-2 border-[#059669]'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Buy
//           </button>
//           <button
//             onClick={() => setActiveTab('rent')}
//             className={`px-6 py-3 text-sm font-medium ${activeTab === 'rent'
//               ? 'text-[#059669] border-b-2 border-[#059669]'
//               : 'text-gray-500 hover:text-gray-700'
//               }`}
//           >
//             Rent
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//           <div className="md:col-span-2 relative">
//             <div className="relative">
//               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onFocus={() => setShowSuggestions(suggestions.length > 0)}
//                 placeholder={placeholder}
//                 className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500"
//               />
//             </div>

//             {showSuggestions && (
//               <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-80 overflow-auto">
//                 {searchInput && (
//                   <div className="px-4 py-2 border-b border-gray-100 text-red-500 font-medium text-sm">
//                     {searchInput}
//                   </div>
//                 )}

//                 {suggestions.map((suggestion) => {
//                   const suggestionType = getSuggestionType(suggestion.types);

//                   return (
//                     <div
//                       key={suggestion.place_id}
//                       className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-start justify-between border-b border-gray-100 last:border-b-0"
//                       onMouseDown={(e) => e.stopPropagation()}
//                     >
//                       <div className="flex items-start" onClick={() => handleSuggestionClick(suggestion)}>
//                         <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
//                         <div>
//                           <div className="text-sm font-medium text-gray-800">
//                             {suggestion.structured_formatting.main_text}
//                           </div>
//                           {suggestion.structured_formatting.secondary_text && (
//                             <div className="text-xs text-gray-500 mt-0.5">
//                               {suggestion.structured_formatting.secondary_text}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="text-xs text-gray-400 ml-2">
//                         {suggestionType && <span>{suggestionType}</span>}
//                         {!suggestionType && <ArrowUpRight className="h-4 w-4" />}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>

//           <div>
//             <div className="relative">
//               <HomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <select
//                 className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-none"
//                 value={propertyType}
//                 onChange={handlePropertyTypeChange}
//               >
//                 <option>Property Type</option>
//                 <option>House</option>
//                 <option>Apartment</option>
//                 <option>Condo</option>
//                 <option>Villa</option>
//                 <option>Office</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <div className="relative">
//               <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <select
//                 className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
//                 value={priceRange}
//                 onChange={handlePriceRangeChange}
//               >
//                 <option>Price Range</option>
//                 <option>₹5L - ₹50L</option>
//                 <option>₹50L - ₹1Cr</option>
//                 <option>₹1Cr - ₹2Cr</option>
//                 <option>₹2Cr+</option>
//               </select>
//             </div>
//           </div>

//           <div className='mb-4'>
//             <motion.button
//               ref={searchButtonRef}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full bg-[#059669] hover:bg-[#047857] text-white py-3 px-4 rounded-lg flex items-center justify-center"
//               onClick={handleSearch}
//             >
//               <Search className="h-5 w-5 mr-2" />
//               Search
//             </motion.button>
//           </div>
//         </div>
//       </div>
      
//       <AnimatePresence>
//         {isTransitioning && (
//           <motion.div
//             className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
//             style={{ 
//               overflow: 'hidden'
//             }}
//           >
//             <motion.div
//               className="absolute rounded-full bg-[#059669]"
//               initial={{ 
//                 width: 0, 
//                 height: 0,
//                 top: searchButtonRef.current ? 
//                   searchButtonRef.current.getBoundingClientRect().top + searchButtonRef.current.getBoundingClientRect().height / 2 : '50%',
//                 left: searchButtonRef.current ? 
//                   searchButtonRef.current.getBoundingClientRect().left + searchButtonRef.current.getBoundingClientRect().width / 2 : '50%',
//                 x: "-50%",
//                 y: "-50%",
//                 borderRadius: "100%" 
//               }}
//               animate={{ 
//                 width: window.innerWidth * 2.5, 
//                 height: window.innerWidth * 2.5, 
//                 borderRadius: "100%" 
//               }}
//               transition={{ duration: 0.8, ease: [0.25, 1, 0.2, 1] }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default SearchBarDemo;


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MapPin,
  Home as HomeIcon,
  DollarSign,
  Calendar,
  Users,
  ArrowUpRight
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { applyFilter } from '../../redux/features/Map/mapSlice';

const SearchBarDemo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');
  const [searchInput, setSearchInput] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [placesServiceLoaded, setPlacesServiceLoaded] = useState(false);
  const [propertyType, setPropertyType] = useState('Any Type');
  const [priceRange, setPriceRange] = useState('Any Price');
  const dispatch = useDispatch();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const searchButtonRef = useRef(null);
  const searchInputRef = useRef(null);
  const autocompleteService = useRef(null);

  const useTypingPlaceholder = () => {
    const phrases = ["Search Location", "Search City", "Search Address"];
    const [currentPlaceholder, setCurrentPlaceholder] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
      let timer;

      if (isTyping) {
        const currentPhrase = phrases[currentPhraseIndex];
        if (currentPlaceholder.length < currentPhrase.length) {
          timer = setTimeout(() => {
            setCurrentPlaceholder(currentPhrase.substring(0, currentPlaceholder.length + 1));
          }, 100);
        } else {
          timer = setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }
      } else {
        if (currentPlaceholder.length > 0) {
          timer = setTimeout(() => {
            setCurrentPlaceholder(currentPlaceholder.substring(0, currentPlaceholder.length - 1));
          }, 50);
        } else {
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setIsTyping(true);
        }
      }

      return () => clearTimeout(timer);
    }, [currentPlaceholder, currentPhraseIndex, isTyping]);

    return currentPlaceholder;
  };

  const placeholder = useTypingPlaceholder();

  const [filters, setFilters] = useState({
    vanilla: 'property',
    purpose: 'buy',
    propertyType: [],
    price: {
      min: null,
      max: null
    },
    city: '',
    locality: ''
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      purpose: activeTab === 'buy' ? 'Buy' : 'Rent'
    }));
  }, [activeTab]);

  useEffect(() => {
    if (!placesServiceLoaded || !autocompleteService.current || searchInput.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await autocompleteService.current.getPlacePredictions({
          input: searchInput,
          types: ['(cities)', '(locality)'],
          componentRestrictions: { country: 'in' },
        });

        if (response && response.predictions) {
          setSuggestions(response.predictions);
          setShowSuggestions(response.predictions.length > 0);
        }
      } catch (error) {
        console.error('Error fetching place suggestions:', error);

        try {
          const addressResponse = await autocompleteService.current.getPlacePredictions({
            input: searchInput,
            types: ['address'],
            componentRestrictions: { country: 'in' },
          });

          if (addressResponse && addressResponse.predictions) {
            setSuggestions(addressResponse.predictions);
            setShowSuggestions(addressResponse.predictions.length > 0);
          }
        } catch (fallbackError) {
          console.error('Fallback error fetching place suggestions:', fallbackError);
        }
      }
    };

    const timer = setTimeout(fetchSuggestions, 300);

    return () => clearTimeout(timer);
  }, [searchInput, placesServiceLoaded]);

  const handleSuggestionClick = (suggestion) => {
    const mainText = suggestion.structured_formatting.main_text;
    const secondaryText = suggestion.structured_formatting.secondary_text;

    const isCity = suggestion.types.includes('locality') ||
      suggestion.types.includes('administrative_area_level_1') ||
      suggestion.types.includes('administrative_area_level_2');

    setSearchInput(mainText);
    setSelectedLocation(mainText);

    setFilters(prevFilters => ({
      ...prevFilters,
      ...(isCity ? { city: mainText } : { locality: mainText })
    }));

    setShowSuggestions(false);
  };

  const handlePropertyTypeChange = (e) => {
    const selectedType = e.target.value;
    setPropertyType(selectedType);

    if (selectedType === 'Any Type') {
      setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters.propertyType;
        return updatedFilters;
      });
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        propertyType: [selectedType]
      }));
    }
  };

  const handlePriceRangeChange = (e) => {
    const selectedRange = e.target.value;
    setPriceRange(selectedRange);

    let priceMin = null;
    let priceMax = null;

    switch (selectedRange) {
      case 'Any Price':
        break;
      case '₹5L - ₹50L':
        priceMin = 500000;
        priceMax = 5000000;
        break;
      case '₹50L - ₹1Cr':
        priceMin = 5000000;
        priceMax = 10000000;
        break;
      case '₹1Cr - ₹2Cr':
        priceMin = 10000000;
        priceMax = 20000000;
        break;
      case '₹2Cr+':
        priceMin = 20000000;
        break;
      default:
        break;
    }

    setFilters(prevFilters => ({
      ...prevFilters,
      price: {
        min: priceMin,
        max: priceMax
      }
    }));
  };

  const handleSearch = async () => {
    try {
      const cleanedFilters = {};

      if (filters.vanilla !== 'property') {
        cleanedFilters.vanilla = filters.vanilla;
      }

      if (filters.purpose) {
        cleanedFilters.purpose = filters.purpose;
      }

      if (filters.propertyType && filters.propertyType.length > 0) {
        cleanedFilters.propertyType = filters.propertyType;
      }

      if (filters.price && (filters.price.min || filters.price.max)) {
        cleanedFilters.price = {};
        if (filters.price.min) cleanedFilters.price.min = filters.price.min;
        if (filters.price.max) cleanedFilters.price.max = filters.price.max;
      }

      if (filters.city) {
        cleanedFilters.city = filters.city;
      }

      if (filters.locality) {
        cleanedFilters.locality = filters.locality;
      }

      console.log("Cleaned filters:", cleanedFilters);
      dispatch(applyFilter(cleanedFilters));

      setIsTransitioning(true);

      setTimeout(() => {
        navigate("/main");
      }, 200);

    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const getSuggestionType = (types) => {
    if (types.includes('locality') ||
      types.includes('administrative_area_level_1') ||
      types.includes('administrative_area_level_2')) {
      return 'City';
    } else if (types.includes('sublocality') ||
      types.includes('neighborhood') ||
      types.includes('route')) {
      return 'Locality';
    }
    return '';
  };

  return (
    <section className="absolute left-0 right-0 mx-auto z-20 bg-white shadow-lg rounded-lg max-w-6xl -mt-20">
      <div className="px-6 py-2">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('buy')}
            className={`px-6 py-3 text-sm font-medium ${activeTab === 'buy'
              ? 'text-[#059669] border-b-2 border-[#059669]'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveTab('rent')}
            className={`px-6 py-3 text-sm font-medium ${activeTab === 'rent'
              ? 'text-[#059669] border-b-2 border-[#059669]'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Rent
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2 relative">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={() => setShowSuggestions(suggestions.length > 0)}
                placeholder={placeholder}
                className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {showSuggestions && (
              <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-80 overflow-auto">
                {searchInput && (
                  <div className="px-4 py-2 border-b border-gray-100 text-red-500 font-medium text-sm">
                    {searchInput}
                  </div>
                )}

                {suggestions.map((suggestion) => {
                  const suggestionType = getSuggestionType(suggestion.types);

                  return (
                    <div
                      key={suggestion.place_id}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-start justify-between border-b border-gray-100 last:border-b-0"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-start" onClick={() => handleSuggestionClick(suggestion)}>
                        <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-gray-800">
                            {suggestion.structured_formatting.main_text}
                          </div>
                          {suggestion.structured_formatting.secondary_text && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              {suggestion.structured_formatting.secondary_text}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 ml-2">
                        {suggestionType && <span>{suggestionType}</span>}
                        {!suggestionType && <ArrowUpRight className="h-4 w-4" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <div className="relative">
              <HomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-none"
                value={propertyType}
                onChange={handlePropertyTypeChange}
              >
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
                <option>Villa</option>
                <option>Office</option>
              </select>
            </div>
          </div>

          <div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                className="pl-10 w-full rounded-lg border border-gray-300 py-3 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
                value={priceRange}
                onChange={handlePriceRangeChange}
              >
                <option>Price Range</option>
                <option>₹5L - ₹50L</option>
                <option>₹50L - ₹1Cr</option>
                <option>₹1Cr - ₹2Cr</option>
                <option>₹2Cr+</option>
              </select>
            </div>
          </div>

          <div className='mb-4'>
            <motion.button
              ref={searchButtonRef}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#059669] hover:bg-[#047857] text-white py-3 px-4 rounded-lg flex items-center justify-center"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
            style={{
              overflow: 'hidden'
            }}
          >
            <motion.div
              className="absolute rounded-full bg-[#059669]"
              initial={{
                width: 0,
                height: 0,
                top: searchButtonRef.current ?
                  searchButtonRef.current.getBoundingClientRect().top + searchButtonRef.current.getBoundingClientRect().height / 2 : '50%',
                left: searchButtonRef.current ?
                  searchButtonRef.current.getBoundingClientRect().left + searchButtonRef.current.getBoundingClientRect().width / 2 : '50%',
                x: "-50%",
                y: "-50%",
                borderRadius: "100%"
              }}
              animate={{
                width: window.innerWidth * 2.5,
                height: window.innerWidth * 2.5,
                borderRadius: "100%"
              }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.2, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SearchBarDemo;