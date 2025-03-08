// import React, { useState, useEffect } from 'react';
// import { motion, useScroll } from 'framer-motion';
// import { Home, Search, Heart, User, Menu, X, Phone, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { scrollY } = useScroll();
//   const navigate = useNavigate()

//   useEffect(() => {
//     return scrollY.onChange(() => {
//       setIsScrolled(scrollY.get() > 10);
//     });
//   }, [scrollY]);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-4'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <motion.div 
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex-shrink-0 flex items-center"
//             >
//               {/* <Home className={`h-8 w-8 ${isScrolled ? 'text-emerald-600' : 'text-white'}`} /> */}
//               <div className="h-10 w-10 rounded-md flex items-center justify-center text-xs text-gray-500"><img src='/assets/logo.png' className='w-full h-full' alt="Logo" /></div>

//               <span className={` text-3xl font-medium ${isScrolled ? 'text-gray-900' : 'text-white'}`}>PROFO</span>
//             </motion.div>
//           </div>
          
//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-1">
//             <div className="relative group">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${
//                   isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                 } transition-colors`}
//               >
//                 Properties <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//               <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">All Properties</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Houses</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Apartments</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Villas</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Commercial</a>
//               </div>
//             </div>
            
//             <div className="relative group">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${
//                   isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                 } transition-colors`}
//               >
//                 Locations <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//               <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">New York</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Los Angeles</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Miami</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Chicago</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">View All</a>
//               </div>
//             </div>
            
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#" 
//               className={`px-3 py-2 text-sm font-medium ${
//                 isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//               } transition-colors`}
//             >
//               Agents
//             </motion.a>
            
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#" 
//               className={`px-3 py-2 text-sm font-medium ${
//                 isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//               } transition-colors`}
//             >
//               About
//             </motion.a>
            
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="#" 
//               className={`px-3 py-2 text-sm font-medium ${
//                 isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//               } transition-colors`}
//             >
//               Contact
//             </motion.a>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-4">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               href="tel:+1234567890"
//               className={`flex items-center text-sm font-medium ${
//                 isScrolled ? 'text-gray-700' : 'text-white'
//               }`}
//             >
//               <Phone className="h-4 w-4 mr-1" />
//               (123) 456-7890
//             </motion.a>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-2 rounded-full ${
//                 isScrolled ? 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//               }`}
//             >
//               <Search className="h-5 w-5" />
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-2 rounded-full ${
//                 isScrolled ? 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//               }`}
//               onClick={()=>navigate('/wishlist')}
//             >
//               <Heart className="h-5 w-5" />
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]"
//               onClick={() => navigate('/signup')}
//             >
//               <User className="h-4 w-4 mr-2" />
//               Sign In
//             </motion.button>
//           </div>
          
//           {/* Mobile menu button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`inline-flex items-center justify-center p-2 rounded-md ${
//                 isScrolled ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//               } focus:outline-none`}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile menu */}
//       <motion.div 
//         initial={false}
//         animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="md:hidden overflow-hidden bg-white shadow-lg"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Home</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Properties</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Locations</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Agents</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">About</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Contact</a>
//           <div className="flex items-center space-x-4 px-3 py-2">
//             <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
//               <Search className="h-5 w-5" />
//             </button>
//             <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
//               <Heart className="h-5 w-5" />
//             </button>
//           </div>
//           <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]">
//             <User className="h-4 w-4 mr-2" />
//             Sign In
//           </button>
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { motion, useScroll } from 'framer-motion';
// import { Home, Search, Heart, User, Menu, X, Phone, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { applyFilter } from '../../redux/features/Map/mapSlice';
// import { useDispatch } from 'react-redux';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const { scrollY } = useScroll();
  
//   const [searchModalOpen, setSearchModalOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch()

//   // Filters state, similar to SearchBar component
//   const [filters, setFilters] = useState({
//     vanilla: 'property',
//     purpose: 'Buy',
//     propertyType: [],
//     price: {
//       min: null,
//       max: null
//     },
//     city: '',
//     locality: ''
//   });

//   useEffect(() => {
//     return scrollY.onChange(() => {
//       setIsScrolled(scrollY.get() > 10);
//     });
//   }, [scrollY]);

//   const handleDropdownToggle = (dropdown: string) => {
//     if (activeDropdown === dropdown) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(dropdown);
//     }
//   };

//   // Handle search button click - directly dispatching like in SearchBar
//   const handleSearch = () => {
//     // Create a simple filter object with just the location data
//     const searchFilters = {
//       vanilla: 'property'  // Default to property search
//     };

//     // Add location data if provided
//     if (filters.city) {
//       searchFilters.city = filters.city;
//     }

//     if (filters.locality) {
//       searchFilters.locality = filters.locality;
//     }

//     // Add purpose (Buy/Rent) if set
//     if (filters.purpose) {
//       searchFilters.purpose = filters.purpose;
//     }

//     console.log("Search filters from navbar:", searchFilters);

//     // Dispatch using the imported applyFilter function
//     dispatch(applyFilter(searchFilters));

//     // Navigate to results page
//     navigate("/main");

//     // Close search modal
//     setSearchModalOpen(false);
//   };


//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-4'
//       }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex-shrink-0 flex items-center"
//             >
//               <div className="h-10 w-10 rounded-md flex items-center justify-center text-xs text-gray-500">
//                 <img src='/assets/logo.png' className='w-full h-full' alt="Logo" />
//               </div>
//               <span className={`text-3xl font-medium ${isScrolled ? 'text-gray-900' : 'text-white'}`}>PROFO</span>
//             </motion.div>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-1">
//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'buy' ? 'text-emerald-600' : ''}`}
//                 onClick={() => handleDropdownToggle('buy')}
//               >
//                 Buy <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'rent' ? 'text-emerald-600' : ''}`}
//                 onClick={() => handleDropdownToggle('rent')}
//               >
//                 Rent <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'sell' ? 'text-emerald-600' : ''}`}
//                 onClick={() => handleDropdownToggle('sell')}
//               >
//                 Sell <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'home-loans' ? 'text-emerald-600' : ''}`}
//                 onClick={() => handleDropdownToggle('home-loans')}
//               >
//                 Home Loans <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'home-interiors' ? 'text-emerald-600' : ''}`}
//                 onClick={() => handleDropdownToggle('home-interiors')}
//               >
//                 Home Interiors <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'mb-advice' ? 'text-emerald-600' : ''}`}
//                 onClick={() => handleDropdownToggle('mb-advice')}
//               >
//                 MB Advice <span className="ml-1 text-xs bg-yellow-500 text-black px-1 rounded">NEW</span> <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'help' ? 'text-emerald-600' : ''}`}
//                 onClick={() => handleDropdownToggle('help')}
//               >
//                 Help <ChevronDown className="ml-1 h-4 w-4" />
//               </motion.button>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-2 rounded-full ${isScrolled ? 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//                 }`}
//             >
//               <Search className="h-5 w-5" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-2 rounded-full ${isScrolled ? 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//                 }`}
//               onClick={() => navigate('/wishlist')}
//             >
//               <Heart className="h-5 w-5" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]"
//               onClick={() => navigate('/signup')}
//             >
//               <User className="h-4 w-4 mr-2" />
//               Sign In
//             </motion.button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//                 } focus:outline-none`}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mega Menu Dropdown */}
//       {activeDropdown && (
//         <div className="absolute left-0 w-full bg-white shadow-lg mt-1 z-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//             <div className="grid grid-cols-5 gap-8">
//               <div>
//                 <h3 className="text-base font-medium text-gray-900 mb-4">Popular Choices</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Ready to Move</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Owner Properties</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Budget Homes</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Premium Homes</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">New Projects <span className="text-xs text-red-500 ml-1">magicHomes</span></a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium text-gray-900 mb-4">Property Types</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Flats in New-Delhi</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">House for sale in New-Delhi</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Villa in New-Delhi</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Plot in New-Delhi</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Office Space in New-Delhi</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Commercial Space in New-Delhi</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium text-gray-900 mb-4">Budget</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Under ₹ 50 Lac</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">₹ 50 Lac - ₹ 1 Cr</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">₹ 1 Cr - ₹ 1.5 Cr</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Above ₹ 1.5 Cr</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium text-gray-900 mb-4">Explore</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Localities in New-Delhi</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Projects in New-Delhi</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Investment Hotspot</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Find an Agent</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Home Interiors in New-Delhi</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-base font-medium text-gray-900 mb-4">Buying Tools</h3>
//                 <ul className="space-y-3">
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">PropWorth</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Rates & Trends</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Buy vs Rent</a></li>
//                   <li><a href="#" className="text-gray-600 hover:text-emerald-600">Tips and Guides</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Mobile menu */}
//       <motion.div
//         initial={false}
//         animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="md:hidden overflow-hidden bg-white shadow-lg"
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Buy</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Rent</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Sell</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Home Loans</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Home Interiors</a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">MB Advice <span className="ml-1 text-xs bg-yellow-500 text-black px-1 rounded">NEW</span></a>
//           <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Help</a>
//           <div className="flex items-center space-x-4 px-3 py-2">
//             <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
//               <Search className="h-5 w-5" />
//             </button>
//             <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
//               <Heart className="h-5 w-5" />
//             </button>
//           </div>
//           <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]">
//             <User className="h-4 w-4 mr-2" />
//             Sign In
//           </button>
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Heart, User, Menu, X, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { applyFilter } from '../../redux/features/Map/mapSlice';
// import { motion, AnimatePresence, useScroll } from "framer-motion";
// import { title } from 'process';

// // Active Tab Indicator Component
// const ActiveIndicator = ({ isActive }) => {
//   return (
//     <AnimatePresence>
//       {isActive && (
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 h-0.5 bg-[crimson] rounded-full"
//           initial={{ width: 0, opacity: 0, left: "50%", right: "50%" }}
//           animate={{ width: "100%", opacity: 1, left: 0, right: 0 }}
//           exit={{ width: 0, opacity: 0, left: "50%", right: "50%" }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         />
//       )}
//     </AnimatePresence>
//   );
// };

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const { scrollY } = useScroll();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     return scrollY.onChange(() => {
//       setIsScrolled(scrollY.get() > 10);
//       setActiveDropdown(null)
//     });
//   }, [scrollY]);

//   // Handle dropdown toggle
//   const handleDropdownToggle = (dropdown: string) => {
//     if (activeDropdown === dropdown) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(dropdown);
//     }
//   };

//   // Handle menu item click from dropdown
//   const handleMenuItemClick = (filterParams: any) => {
//     console.log(filterParams)
//     // Dispatch the filter action with the provided parameters
//     dispatch(applyFilter(filterParams));

//     // Close dropdown
//     setActiveDropdown(null);

//     // Navigate to main results page
//     navigate("/main");
//   };

//   // Menu data structure for Buy dropdown
//   const buyMenuItems = {
//     popularChoices: [
//       {
//         title: "Ready to Move",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Ready to Move'] }
//       },
//       {
//         title: "Owner Properties",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Owner'] }
//       },
//       {
//         title: "Budget Homes",
//         params: { vanilla: 'property', purpose: 'Buy', price: { max: 5000000 } }
//       },
//       {
//         title: "Premium Homes",
//         params: { vanilla: 'property', purpose: 'Buy', price: { min: 10000000 } }
//       },
//       {
//         title: "New Projects",
//         params: { vanilla: 'project', projectStatus: 'New' },
//         badge: "magicHomes"
//       }
//     ],
//     propertyTypes: [
//       {
//         title: "Flats in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Flat'], city: 'New-Delhi' }
//       },
//       {
//         title: "House for sale in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['House'], city: 'New-Delhi' }
//       },
//       {
//         title: "Villa in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Villa'], city: 'New-Delhi' }
//       },
//       {
//         title: "Plot in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Plot'], city: 'New-Delhi' }
//       },
//       {
//         title: "Office Space in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Office Space'], city: 'New-Delhi' }
//       },
//       {
//         title: "Commercial Space in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Commercial Space'], city: 'New-Delhi' }
//       }
//     ],
//     budget: [
//       {
//         title: "Under ₹ 50 Lac",
//         params: { vanilla: 'property', purpose: 'Buy', price: { max: 5000000 } }
//       },
//       {
//         title: "₹ 50 Lac - ₹ 1 Cr",
//         params: { vanilla: 'property', purpose: 'Buy', price: { min: 5000000, max: 10000000 } }
//       },
//       {
//         title: "₹ 1 Cr - ₹ 1.5 Cr",
//         params: { vanilla: 'property', purpose: 'Buy', price: { min: 10000000, max: 15000000 } }
//       },
//       {
//         title: "Above ₹ 1.5 Cr",
//         params: { vanilla: 'property', purpose: 'Buy', price: { min: 15000000 } }
//       }
//     ],
//     explore: [
//       {
//         title: "Localities in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', city: 'New-Delhi' }
//       },
//       {
//         title: "Projects in New-Delhi",
//         params: { vanilla: 'project', city: 'New-Delhi' }
//       },
//       {
//         title: "Investment Hotspot",
//         params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Investment'] }
//       },
//       {
//         title: "Find an Agent",
//         navigate: '/agents'
//       },
//       {
//         title: "Home Interiors in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Buy', city: 'New-Delhi', category: 'HomeInteriors' }
//       }
//     ],
//     buyingTools: [
//       {
//         title: "PropWorth",
//         navigate: '/tools/propworth'
//       },
//       {
//         title: "Rates & Trends",
//         navigate: '/tools/rates'
//       },
//       {
//         title: "Buy vs Rent",
//         navigate: '/tools/buyvrent'
//       },
//       {
//         title: "Tips and Guides",
//         navigate: '/guides'
//       }
//     ]
//   };

//   // Menu data structure for Rent dropdown (similar structure as Buy but with purpose: 'Rent')
//   const rentMenuItems = {
//     popularChoices: [
//       {
//         title: "Ready to Move",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Ready to Move'] }
//       },
//       {
//         title: "Owner Properties",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Owner'] }
//       },
//       {
//         title: "Budget Homes",
//         params: { vanilla: 'property', purpose: 'Rent', price: { max: 5000000 } }
//       },
//       {
//         title: "Premium Homes",
//         params: { vanilla: 'property', purpose: 'Rent', price: { min: 10000000 } }
//       },
//       {
//         title: "New Projects",
//         params: { vanilla: 'project', projectStatus: 'New' },
//         badge: "magicHomes"
//       }
//     ],
//     propertyTypes: [
//       {
//         title: "Flats in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Flat'], city: 'New-Delhi' }
//       },
//       {
//         title: "House for sale in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['House'], city: 'New-Delhi' }
//       },
//       {
//         title: "Villa in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Villa'], city: 'New-Delhi' }
//       },
//       {
//         title: "Plot in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Plot'], city: 'New-Delhi' }
//       },
//       {
//         title: "Office Space in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Office Space'], city: 'New-Delhi' }
//       },
//       {
//         title: "Commercial Space in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Commercial Space'], city: 'New-Delhi' }
//       }
//     ],
//     budget: [
//       {
//         title: "Under ₹ 50 Lac",
//         params: { vanilla: 'property', purpose: 'Rent', price: { max: 5000000 } }
//       },
//       {
//         title: "₹ 50 Lac - ₹ 1 Cr",
//         params: { vanilla: 'property', purpose: 'Rent', price: { min: 5000000, max: 10000000 } }
//       },
//       {
//         title: "₹ 1 Cr - ₹ 1.5 Cr",
//         params: { vanilla: 'property', purpose: 'Rent', price: { min: 10000000, max: 15000000 } }
//       },
//       {
//         title: "Above ₹ 1.5 Cr",
//         params: { vanilla: 'property', purpose: 'Rent', price: { min: 15000000 } }
//       }
//     ],
//     explore: [
//       {
//         title: "Localities in New-Delhi",
//         params: { vanilla: 'property', purpose: 'Rent', city: 'New-Delhi' }
//       },
//       {
//         title: "Projects in New-Delhi",
//         params: { vanilla: 'project', city: 'New-Delhi' }
//       },
//     ],
//     buyingTools: [
//       {
//         title: "PropWorth",
//         navigate: '/tools/propworth'
//       },
//       {
//         title: "Rates & Trends",
//         navigate: '/tools/rates'
//       },
      
//     ]
//     // Other categories would follow the same pattern
//   };

//   const profoAdviceItems = {
//     services:[
//       {
//         title: "Property Valuation",
//         navigate: '/profo-advice' 
//       }
//     ],
//     tools : [
//       {
//         title: "Area Convertor",
//         navigate: '/profo-advice' 
//       },
//       {
//         title: "Rates & Trends",
//         navigate: '/profo-advice' 
//       },

//     ]
//   }

  

//   // Render menu items for a specific category
//   const renderMenuItems = (items: any[]) => {
//     return items.map((item, index) => (
//       <li key={index}>
//         <a
//           href="#"
//           className="text-gray-600 hover:text-emerald-600"
//           onClick={(e) => {
//             e.preventDefault();
//             if (item.navigate) {
//               navigate(item.navigate);
//             } else if (item.params) {
//               handleMenuItemClick(item.params);
//             }
//           }}
//         >
//           <span className='hover:text-[crimson] text-md'>{item.title}</span>
//           {item.badge && <span className="text-xs text-red-500 ml-1">{item.badge}</span>}
//         </a>
//       </li>
//     ));
//   };



 

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || activeDropdown ? 'bg-white shadow-md py-4' : 'bg-gradient-to-b from-black/50 to-transparent py-4'
//       }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex-shrink-0 flex items-center"
//               onClick={() => navigate('/')}
//             >
//               <div className="h-10 w-10 rounded-md flex items-center justify-center text-xs text-gray-500">
//                 <img src='/assets/logo.png' className='w-full h-full' alt="Logo" />
//               </div>
//               <span className={`text-3xl font-medium ${isScrolled || activeDropdown ? 'text-gray-900' : 'text-white'}`}>PROFO</span>
//             </motion.div>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-1">
//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
//                     ? 'text-gray-700 hover:text-emerald-600'
//                     : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'buy' ? 'text-emerald-600 font-semibold' : ''}`}
//                 onClick={() => handleDropdownToggle('buy')}
//               >
//                 Buy
//                 <motion.span
//                   animate={{ rotate: activeDropdown === 'buy' ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-1"
//                 >
//                   <ChevronDown className="h-4 w-4" />
//                 </motion.span>
//                 <ActiveIndicator isActive={activeDropdown === 'buy'} />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
//                     ? 'text-gray-700 hover:text-emerald-600'
//                     : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'rent' ? 'text-emerald-600 font-semibold' : ''}`}
//                 onClick={() => handleDropdownToggle('rent')}
//               >
//                 Rent
//                 <motion.span
//                   animate={{ rotate: activeDropdown === 'rent' ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-1"
//                 >
//                   <ChevronDown className="h-4 w-4" />
//                 </motion.span>
//                 <ActiveIndicator isActive={activeDropdown === 'rent'} />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
//                     ? 'text-gray-700 hover:text-emerald-600'
//                     : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'profo-advice' ? 'text-emerald-600 font-semibold' : ''}`}
//                 onClick={() => handleDropdownToggle('profo-advice')}
//               >
//                 Profo Advice <span className="ml-1 text-xs bg-yellow-500 text-black px-1 rounded">NEW</span>
//                 <motion.span
//                   animate={{ rotate: activeDropdown === 'profo-advice' ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-1"
//                 >
//                   <ChevronDown className="h-4 w-4" />
//                 </motion.span>
//                 <ActiveIndicator isActive={activeDropdown === 'profo-advice'} />
//               </motion.button>
//             </div>

//             <div className="relative">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
//                     ? 'text-gray-700 hover:text-emerald-600'
//                     : 'text-white hover:text-emerald-300'
//                   } transition-colors ${activeDropdown === 'help' ? 'text-emerald-600 font-semibold' : ''}`}
//                 onClick={() => navigate('/contact-us')}
//               >
//                 Help
//                 <motion.span
//                   animate={{ rotate: activeDropdown === 'help' ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="ml-1"
//                 >
//                   <ChevronDown className="h-4 w-4" />
//                 </motion.span>
//                 <ActiveIndicator isActive={activeDropdown === 'help'} />
//               </motion.button>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-2 rounded-full ${isScrolled || activeDropdown ? 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//                 }`}
//               onClick={() => navigate('/wishlist')}
//             >
//               <Heart className="h-5 w-5" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[crimson] hover:bg-[#000]"
//               onClick={() => navigate('/post-property-for-free')}
//             >
//               <User className="h-4 w-4 mr-2" />
//               Post Property
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]"
//               onClick={() => navigate('/signup')}
//             >
//               <User className="h-4 w-4 mr-2" />
//               Sign In
//             </motion.button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled || activeDropdown ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
//                 } focus:outline-none`}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mega Menu Dropdowns with AnimatePresence for smooth transitions */}
//       <AnimatePresence>
//         {activeDropdown === 'buy' && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className="absolute left-0 w-full bg-white shadow-lg mt-1 z-50"
//           >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//               <div className="grid grid-cols-5 gap-8">
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Popular Choices</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(buyMenuItems.popularChoices)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Property Types</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(buyMenuItems.propertyTypes)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Budget</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(buyMenuItems.budget)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Explore</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(buyMenuItems.explore)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Buying Tools</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(buyMenuItems.buyingTools)}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Rent Mega Menu with AnimatePresence */}
//         {activeDropdown === 'rent' && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className="absolute left-0 w-full bg-white shadow-lg mt-1 z-50"
//           >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//               <div className="grid grid-cols-5 gap-8">
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Popular Choices</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(rentMenuItems.popularChoices)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Property Types</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(rentMenuItems.propertyTypes)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Budget</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(rentMenuItems.budget)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Explore</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(rentMenuItems.explore)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Buying Tools</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(rentMenuItems.buyingTools)}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}


//         {/* Profo Advice - new */}
//         {activeDropdown === 'profo-advice' && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className="absolute left-0 w-full bg-white shadow-lg mt-1 z-50"
//           >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//               <div className="grid grid-cols-5 gap-8">
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Services</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(profoAdviceItems.services)}
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-base font-medium text-gray-900 mb-4">Tools</h3>
//                   <ul className="space-y-3">
//                     {renderMenuItems(profoAdviceItems.tools)}
//                   </ul>
//                 </div>
               
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile menu with improved animations */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="md:hidden overflow-hidden bg-white shadow-lg"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a
//                 href="#"
//                 className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'buy' ? 'text-emerald-600 bg-gray-50' : 'text-gray-900 hover:bg-gray-100'}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleDropdownToggle('buy');
//                 }}
//               >
//                 Buy
//                 {activeDropdown === 'buy' && (
//                   <motion.div
//                     layoutId="mobileActiveTab"
//                     className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//               </a>
//               <a
//                 href="#"
//                 className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'rent' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleDropdownToggle('rent');
//                 }}
//               >
//                 Rent
//                 {activeDropdown === 'rent' && (
//                   <motion.div
//                     layoutId="mobileActiveTab"
//                     className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//               </a>

//               <a
//                 href="#"
//                 className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'mb-advice' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleDropdownToggle('mb-advice');
//                 }}
//               >
//                 Profo Advice <span className="ml-1 text-xs bg-yellow-500 text-black px-1 rounded">NEW</span>
//                 {activeDropdown === 'mb-advice' && (
//                   <motion.div
//                     layoutId="mobileActiveTab"
//                     className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//               </a>

//               <a
//                 href="#"
//                 className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'help' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleDropdownToggle('help');
//                 }}
//               >
//                 Help
//                 {activeDropdown === 'help' && (
//                   <motion.div
//                     layoutId="mobileActiveTab"
//                     className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//               </a>

//               <div className="flex items-center space-x-4 px-3 py-2">
//                 <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
//                   <Heart className="h-5 w-5" />
//                 </button>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]"
//                 onClick={() => navigate('/signup')}
//               >
//                 <User className="h-4 w-4 mr-2" />
//                 Sign In
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Heart, User, Menu, X, ChevronDown, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { applyFilter } from '../../redux/features/Map/mapSlice';
import { motion, AnimatePresence, useScroll } from "framer-motion";

// Active Tab Indicator Component
const ActiveIndicator = ({ isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[crimson] rounded-full"
          initial={{ width: 0, opacity: 0, left: "50%", right: "50%" }}
          animate={{ width: "100%", opacity: 1, left: 0, right: 0 }}
          exit={{ width: 0, opacity: 0, left: "50%", right: "50%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
};

// City Name Loading Animation Component
const CityNameLoading = ({ loading, currentCity, isScrolled, activeDropdown }) => {
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setAnimProgress(prev => {
          const next = prev + 2;
          if (next >= 100) {
            clearInterval(timer);
            return 100;
          }
          return next;
        });
      }, 50);
    } else {
      setAnimProgress(0);
    }

    return () => clearInterval(timer);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="relative h-6 w-24">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded opacity-75"></div>

          {/* Progress bar */}
          <div
            className="absolute h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded"
            style={{ width: `${animProgress}%`, transition: 'width 0.3s ease-out' }}
          ></div>

          {/* Loading text with shimmer effect */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className={`${isScrolled || activeDropdown ? 'text-white' : 'text-white'} font-medium relative text-sm`}>
              loading
              <span className="inline-flex ml-1">
                <span className="animate-bounce delay-100 inline-block">.</span>
                <span className="animate-bounce delay-200 inline-block">.</span>
                <span className="animate-bounce delay-300 inline-block">.</span>
              </span>

              {/* Shimmer effect */}
              <div
                className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                style={{
                  animation: 'shimmer 1.5s infinite',
                  transform: 'translateX(-100%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden px-2 rounded-md text-sm">
          <span className={`font-medium ${isScrolled || activeDropdown ? 'text-gray-700' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'}`}>
            {currentCity}
          </span>

          {/* Subtle animated glow effect */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-30 blur-sm"
            style={{
              animation: 'pulse 2s infinite'
            }}
          ></div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </>
  );
};

const Navbar: React.FC = ({ currentCity, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("cur", currentCity)

  

  useEffect(() => {
    return scrollY.onChange(() => {
      setIsScrolled(scrollY.get() > 10);
      setActiveDropdown(null)
    });
  }, [scrollY]);

  // Handle dropdown toggle
  const handleDropdownToggle = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Handle menu item click from dropdown
  const handleMenuItemClick = (filterParams: any) => {
    console.log(filterParams)
    // Dispatch the filter action with the provided parameters
    dispatch(applyFilter(filterParams));

    // Close dropdown
    setActiveDropdown(false);

    // Navigate to main results page
    navigate("/main");
  };

  // Menu data structure for Buy dropdown
  const buyMenuItems = {
    popularChoices: [
      {
        title: "Ready to Move",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Ready to Move'] }
      },
      {
        title: "Owner Properties",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Owner'] }
      },
      {
        title: "Budget Homes",
        params: { vanilla: 'property', purpose: 'Buy', price: { max: 5000000 } }
      },
      {
        title: "Premium Homes",
        params: { vanilla: 'property', purpose: 'Buy', price: { min: 10000000 } }
      },
      {
        title: "New Projects",
        params: { vanilla: 'project', projectStatus: 'New' },
        badge: "magicHomes"
      }
    ],
    propertyTypes: [
      {
        title: "Flats in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Flat'], city: 'New-Delhi' }
      },
      {
        title: "House for sale in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['House'], city: 'New-Delhi' }
      },
      {
        title: "Villa in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Villa'], city: 'New-Delhi' }
      },
      {
        title: "Plot in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Plot'], city: 'New-Delhi' }
      },
      {
        title: "Office Space in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Office Space'], city: 'New-Delhi' }
      },
      {
        title: "Commercial Space in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Commercial Space'], city: 'New-Delhi' }
      }
    ],
    budget: [
      {
        title: "Under ₹ 50 Lac",
        params: { vanilla: 'property', purpose: 'Buy', price: { max: 5000000 } }
      },
      {
        title: "₹ 50 Lac - ₹ 1 Cr",
        params: { vanilla: 'property', purpose: 'Buy', price: { min: 5000000, max: 10000000 } }
      },
      {
        title: "₹ 1 Cr - ₹ 1.5 Cr",
        params: { vanilla: 'property', purpose: 'Buy', price: { min: 10000000, max: 15000000 } }
      },
      {
        title: "Above ₹ 1.5 Cr",
        params: { vanilla: 'property', purpose: 'Buy', price: { min: 15000000 } }
      }
    ],
    explore: [
      {
        title: "Localities in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', city: 'New-Delhi' }
      },
      {
        title: "Projects in New-Delhi",
        params: { vanilla: 'project', city: 'New-Delhi' }
      },
      {
        title: "Investment Hotspot",
        params: { vanilla: 'property', purpose: 'Buy', propertyType: ['Investment'] }
      },
      {
        title: "Find an Agent",
        navigate: '/agents'
      },
      {
        title: "Home Interiors in New-Delhi",
        params: { vanilla: 'property', purpose: 'Buy', city: 'New-Delhi', category: 'HomeInteriors' }
      }
    ],
    buyingTools: [
      {
        title: "PropWorth",
        navigate: '/tools/propworth'
      },
      {
        title: "Rates & Trends",
        navigate: '/tools/rates'
      },
      {
        title: "Buy vs Rent",
        navigate: '/tools/buyvrent'
      },
      {
        title: "Tips and Guides",
        navigate: '/guides'
      }
    ]
  };

  // Menu data structure for Rent dropdown (similar structure as Buy but with purpose: 'Rent')
  const rentMenuItems = {
    popularChoices: [
      {
        title: "Ready to Move",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Ready to Move'] }
      },
      {
        title: "Owner Properties",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Owner'] }
      },
      {
        title: "Budget Homes",
        params: { vanilla: 'property', purpose: 'Rent', price: { max: 5000000 } }
      },
      {
        title: "Premium Homes",
        params: { vanilla: 'property', purpose: 'Rent', price: { min: 10000000 } }
      },
      {
        title: "New Projects",
        params: { vanilla: 'project', projectStatus: 'New' },
        badge: "magicHomes"
      }
    ],
    propertyTypes: [
      {
        title: "Flats in New-Delhi",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Flat'], city: 'New-Delhi' }
      },
      {
        title: "House for sale in New-Delhi",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['House'], city: 'New-Delhi' }
      },
      {
        title: "Villa in New-Delhi",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Villa'], city: 'New-Delhi' }
      },
      {
        title: "Plot in New-Delhi",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Plot'], city: 'New-Delhi' }
      },
      {
        title: "Office Space in New-Delhi",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Office Space'], city: 'New-Delhi' }
      },
      {
        title: "Commercial Space in New-Delhi",
        params: { vanilla: 'property', purpose: 'Rent', propertyType: ['Commercial Space'], city: 'New-Delhi' }
      }
    ],
    budget: [
      {
        title: "Under ₹ 50 Lac",
        params: { vanilla: 'property', purpose: 'Rent', price: { max: 5000000 } }
      },
      {
        title: "₹ 50 Lac - ₹ 1 Cr",
        params: { vanilla: 'property', purpose: 'Rent', price: { min: 5000000, max: 10000000 } }
      },
      {
        title: "₹ 1 Cr - ₹ 1.5 Cr",
        params: { vanilla: 'property', purpose: 'Rent', price: { min: 10000000, max: 15000000 } }
      },
      {
        title: "Above ₹ 1.5 Cr",
        params: { vanilla: 'property', purpose: 'Rent', price: { min: 15000000 } }
      }
    ],
    explore: [
      {
        title: "Localities in New-Delhi",
        params: { vanilla: 'property', purpose: 'Rent', city: 'New-Delhi' }
      },
      {
        title: "Projects in New-Delhi",
        params: { vanilla: 'project', city: 'New-Delhi' }
      },
    ],
    buyingTools: [
      {
        title: "PropWorth",
        navigate: '/tools/propworth'
      },
      {
        title: "Rates & Trends",
        navigate: '/tools/rates'
      },
    ]
  };


  const profoAdviceItems = {
    services: [
      {
        title: "Property Valuation",
        navigate: '/profo-advice'
      }
    ],
    tools: [
      {
        title: "Area Convertor",
        navigate: '/profo-advice'
      },
      {
        title: "Rates & Trends",
        navigate: '/profo-advice'
      },
    ]
  };

  // Render menu items for a specific category
  const renderMenuItems = (items: any[]) => {
    return items.map((item, index) => (
      <li key={index}>
        <a
          href="#"
          className="text-gray-600 hover:text-emerald-600"
          onClick={(e) => {
            e.preventDefault();
            if (item.navigate) {
              navigate(item.navigate);
            } else if (item.params) {
              handleMenuItemClick(item.params);
            }
          }}
        >
          <span className='hover:text-[crimson] text-md'>{item.title}</span>
          {item.badge && <span className="text-xs text-red-500 ml-1">{item.badge}</span>}
        </a>
      </li>
    ));
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || activeDropdown ? 'bg-white shadow-md py-4' : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
              onClick={() => navigate('/')}
            >
              <div className="h-10 w-10 rounded-md flex items-center justify-center text-xs text-gray-500">
                <img src='/assets/logo.png' className='w-full h-full' alt="Logo" />
              </div>
              <div className='flex items-baseline gap-2'>
                <div className={`text-3xl font-semibold tracking-tighter ${isScrolled || activeDropdown ? 'text-gray-900' : 'text-white'}`}>PROFO</div>
                <CityNameLoading
                  loading={loading}
                  currentCity={currentCity}
                  isScrolled={isScrolled}
                  activeDropdown={activeDropdown}
                />
              </div>
            </motion.div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
                  ? 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300'
                  } transition-colors ${activeDropdown === 'buy' ? 'text-emerald-600 font-semibold' : ''}`}
                onClick={() => handleDropdownToggle('buy')}
              >
                Buy
                <motion.span
                  animate={{ rotate: activeDropdown === 'buy' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                <ActiveIndicator isActive={activeDropdown === 'buy'} />
              </motion.button>
            </div>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
                  ? 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300'
                  } transition-colors ${activeDropdown === 'rent' ? 'text-emerald-600 font-semibold' : ''}`}
                onClick={() => handleDropdownToggle('rent')}
              >
                Rent
                <motion.span
                  animate={{ rotate: activeDropdown === 'rent' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                <ActiveIndicator isActive={activeDropdown === 'rent'} />
              </motion.button>
            </div>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
                  ? 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300'
                  } transition-colors ${activeDropdown === 'profo-advice' ? 'text-emerald-600 font-semibold' : ''}`}
                onClick={() => handleDropdownToggle('profo-advice')}
              >
                Profo Advice <span className="ml-1 text-xs bg-yellow-500 text-black px-1 rounded">NEW</span>
                <motion.span
                  animate={{ rotate: activeDropdown === 'profo-advice' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                <ActiveIndicator isActive={activeDropdown === 'profo-advice'} />
              </motion.button>
            </div>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`flex items-center px-3 py-2 text-sm font-medium relative ${isScrolled || activeDropdown
                  ? 'text-gray-700 hover:text-emerald-600'
                  : 'text-white hover:text-emerald-300'
                  } transition-colors ${activeDropdown === 'help' ? 'text-emerald-600 font-semibold' : ''}`}
                onClick={() => navigate('/contact-us')}
              >
                Help
                <motion.span
                  animate={{ rotate: activeDropdown === 'help' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-1"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                <ActiveIndicator isActive={activeDropdown === 'help'} />
              </motion.button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${isScrolled || activeDropdown ? 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
                }`}
              onClick={() => navigate('/main')}
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${isScrolled || activeDropdown ? 'text-gray-500 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
                }`}
              onClick={() => navigate('/wishlist')}
            >
              <Heart className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[crimson] hover:bg-[#000]"
              onClick={() => navigate('/post-property-for-free')}
            >
              <User className="h-4 w-4 mr-2" />
              Post Property
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]"
              onClick={() => navigate('/signup')}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled || activeDropdown ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-100' : 'text-white hover:text-emerald-300 hover:bg-white/10'
                } focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdowns with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {activeDropdown === 'buy' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 w-full bg-white shadow-lg mt-1 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-5 gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Popular Choices</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(buyMenuItems.popularChoices)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Property Types</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(buyMenuItems.propertyTypes)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Budget</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(buyMenuItems.budget)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Explore</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(buyMenuItems.explore)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Buying Tools</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(buyMenuItems.buyingTools)}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Rent Mega Menu with AnimatePresence */}
        {activeDropdown === 'rent' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 w-full bg-white shadow-lg mt-1 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-5 gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Popular Choices</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(rentMenuItems.popularChoices)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Property Types</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(rentMenuItems.propertyTypes)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Budget</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(rentMenuItems.budget)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Explore</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(rentMenuItems.explore)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Buying Tools</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(rentMenuItems.buyingTools)}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}


        {/* Profo Advice - new */}
        {activeDropdown === 'profo-advice' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 w-full bg-white shadow-lg mt-1 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-5 gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Services</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(profoAdviceItems.services)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">Tools</h3>
                  <ul className="space-y-3">
                    {renderMenuItems(profoAdviceItems.tools)}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu with improved animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'buy' ? 'text-emerald-600 bg-gray-50' : 'text-gray-900 hover:bg-gray-100'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('buy');
                }}
              >
                Buy
                {activeDropdown === 'buy' && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'rent' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('rent');
                }}
              >
                Rent
                {activeDropdown === 'rent' && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>

              {/* New Property Tab for Mobile */}
              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'property' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('property');
                }}
              >
                Property
                {activeDropdown === 'property' && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>

              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'profo-advice' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('profo-advice');
                }}
              >
                Profo Advice <span className="ml-1 text-xs bg-yellow-500 text-black px-1 rounded">NEW</span>
                {activeDropdown === 'profo-advice' && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>

              <a
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium relative ${activeDropdown === 'help' ? 'text-emerald-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleDropdownToggle('help');
                }}
              >
                Help
                {activeDropdown === 'help' && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute left-0 w-1 h-full bg-emerald-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>

              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]"
                onClick={() => navigate('/signup')}
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;