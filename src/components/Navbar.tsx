// import React, { useEffect, useState, useRef } from 'react';
// import { Menu, Heart, X } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { applyFilter, getAllBuildings, getAllProjects, getAllProperties, getFilterProperties, getMapFeed } from '../redux/features/Map/mapSlice';
// import axios from 'axios';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const dispatch = useDispatch()
//     const isHomePage = location.pathname === '/';
//     const [selectedId, setSelectedId] = useState(null);
//     // console.log(selectedId)


//     const [isSticky, setIsSticky] = useState(false);
//     const topNavRef = useRef(null);


//     const [purposeFilters, setPurposeFilters] = useState({
//         buy: false,
//         rent: false
//     });



//     const mainLinks = [
//         {

//             id: 1,
//             text: 'Apartments',
//             href: 'apartment',
//         },
//         {
//             id: 2,
//             text: 'Rent',
//             href: 'Rent',

//         },
//         {
//             id: 3,
//             text: 'Buy',
//             href: 'Buy',

//         },
//         {
//             id: 4,
//             text: 'Office',
//             href: 'Office',

//         },
//         {
//             id: 5,
//             text: 'Flats',
//             href: 'flats',
//         },
//         {
//             id: 6,
//             text: 'Warehouses',
//             href: 'warehouses',

//         },
//         {
//             id: 7,
//             text: 'Lands',
//             href: 'lands',

//         },
//         {
//             id: 8,
//             text: 'Kheti Jameen',
//             href: 'khetijameen',

//         },
//         {
//             id: 9,
//             text: 'Services',
//             href: 'services',

//         },
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





//     return (
//         <div
//             ref={topNavRef}
//             className={`max-w-7xl mx-auto px-4 ${isSticky ? 'fixed top-0 left-0 right-0 bg-white transition-all duration-300 ease-in-out ' : ''}`}
//         >

//             <div className="flex items-center justify-between h-16">
//                 {/* Logo and Region Selector */}
//                 <div className="flex items-center space-x-4">
//                     <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
//                         <img src='/assets/logo.png' className='w-10 h-10' alt="Logo" />
//                         <span className="font-semibold hidden sm:inline text-2xl">PROFO</span>
//                     </div>
//                 </div>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex items-center space-x-8">
//                     <button className="p-2">
//                         <Heart className="w-5 h-5" />
//                     </button>
//                     <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm flex items-center gap-2" onClick={() => navigate('/post-property-for-free')}>
//                         Post property <span className='text-[10px] px-2 rounded-sm font-semibold bg-green-800 text-white'>FREE</span>
//                     </button>
//                     <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm">
//                         About the house
//                     </button>
//                     <button className="text-sm" onClick={() => navigate('/signup')}>
//                         Register
//                     </button>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="lg:hidden p-2"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//             </div>

//             {/* Main Navigation with Dropdowns - Hidden on Homepage */}
//             {!isHomePage && (
//                 <nav className="hidden lg:block py-2">
//                     <ul className="flex space-x-8">
//                         {mainLinks.map((link, index) => (
//                             <li key={index} className="relative group">
//                                 <p
//                                     onClick={() => handleFilter(link.href, link?.id)}
//                                     className={`text-sm ${link?.id == selectedId ? 'text-red-500 border-b-2 border-red-500' : 'text-black'} hover:text-red-500 pb-1 cursor-pointer`}
//                                 >
//                                     {link.text}
//                                 </p>
//                                 {link.deepLinks?.length > 0 && (
//                                     <div className="absolute left-0 top-full mt-1 w-[900px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                                         <div className="flex p-6">
//                                             <div className="flex-1 grid grid-cols-3 gap-8">
//                                                 {link.deepLinks[0].column1 && (
//                                                     <div className="space-y-4">
//                                                         {link.deepLinks[0].column1.map((item, idx) => (
//                                                             <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
//                                                                 {item.text}
//                                                             </a>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                                 {link.deepLinks[0].column2 && (
//                                                     <div className="space-y-4">
//                                                         {link.deepLinks[0].column2.map((item, idx) => (
//                                                             <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
//                                                                 {item.text}
//                                                             </a>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                                 {link.deepLinks[0].column3 && (
//                                                     <div className="space-y-4">
//                                                         {link.deepLinks[0].column3.map((item, idx) => (
//                                                             <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
//                                                                 {item.text}
//                                                             </a>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                             </div>
//                                             {link.deepLinks[0].promo && (
//                                                 <div className={`w-72 ${link.deepLinks[0].promo.bgColor} rounded-lg p-6 ml-6`}>
//                                                     <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
//                                                         {link.deepLinks[0].promo.title}
//                                                     </h3>
//                                                     <p className="text-sm text-gray-600 mb-4">
//                                                         {link.deepLinks[0].promo.description}
//                                                     </p>
//                                                     <button className="text-sm font-medium hover:underline">
//                                                         {link.deepLinks[0].promo.cta}
//                                                     </button>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                         <li>
//                             <span className='text-blue-600 font-bold text-md cursor-pointer' onClick={() => handleFilter('project')}>New Projects</span>
//                         </li>
//                     </ul>
//                 </nav>
//             )}

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20 overflow-y-auto">
//                     <div className="px-4 py-2">
//                         {!isHomePage && (
//                             <ul className="space-y-4">
//                                 {mainLinks.map((link, index) => (
//                                     <li key={index} className="relative group">
//                                         <p
//                                             onClick={() => handleFilter(link.href, link?.id)}
//                                             className={`text-sm cursor-pointer ${link?.id === selectedId ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'} hover:text-red-500 pb-1`}
//                                         >
//                                             {link.text}
//                                         </p>
//                                         {link.deepLinks?.[0].column1 && (
//                                             <ul className="ml-4 space-y-2">
//                                                 {[
//                                                     ...(link.deepLinks[0].column1 || []),
//                                                     ...(link.deepLinks[0].column2 || []),
//                                                     ...(link.deepLinks[0].column3 || [])
//                                                 ].map((item, idx) => (
//                                                     <li key={idx}>
//                                                         <a href={item.href} className="text-sm text-gray-600">
//                                                             {item.text}
//                                                         </a>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </li>
//                                 ))}
//                                 <li>
//                                     <span className='text-blue-600 font-bold text-lg'>New Projects</span>
//                                 </li>
//                             </ul>
//                         )}

//                         <div className="mt-8 space-y-4">
//                             <button className="w-full px-4 py-2 bg-gray-100 rounded-lg">
//                                 Place an ad
//                             </button>
//                             <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg">
//                                 About the house
//                             </button>
//                             <button className="w-full px-4 py-2 text-center" onClick={() => navigate('/signup')}>
//                                 Register
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>



//     );
// };

// export default Header;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Heart, User, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation()
    // console.log(pathname)

    if(pathname !== '/'){
        return (
            <nav className="sticky top-0 w-full z-30 bg-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex-shrink-0 flex items-center"
                                onClick={()=>navigate('/')}
                            >
                                <div className="h-12 w-12 rounded-md flex items-center justify-center text-xs text-gray-500">
                                    <img src='/assets/logo.png' className='w-full h-full' alt="Logo" />
                                </div>
                                <span className="text-3xl font-medium text-gray-900">PROFO</span>
                            </motion.div>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            <div className="relative group">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                                >
                                    Properties <ChevronDown className="ml-1 h-4 w-4" />
                                </motion.button>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">All Properties</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Houses</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Apartments</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Villas</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Commercial</a>
                                </div>
                            </div>

                            <div className="relative group">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                                >
                                    Locations <ChevronDown className="ml-1 h-4 w-4" />
                                </motion.button>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">New York</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Los Angeles</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Miami</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">Chicago</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">View All</a>
                                </div>
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                            >
                                Agents
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                            >
                                About
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                            >
                                Contact
                            </motion.a>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="tel:+1234567890"
                                className="flex items-center text-sm font-medium text-gray-700"
                            >
                                <Phone className="h-4 w-4 mr-1" />
                                (123) 456-7890
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100"
                            >
                                <Search className="h-5 w-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100"
                                onClick={() => navigate('/wishlist')}
                            >
                                <Heart className="h-5 w-5" />
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
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div
                    initial={false}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden bg-white shadow-lg"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">Home</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Properties</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Locations</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Agents</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">About</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Contact</a>
                        <div className="flex items-center space-x-4 px-3 py-2">
                            <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
                                <Search className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-full text-gray-500 hover:text-emerald-600 hover:bg-gray-100">
                                <Heart className="h-5 w-5" />
                            </button>
                        </div>
                        <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#059669] hover:bg-[#047857]">
                            <User className="h-4 w-4 mr-2" />
                            Sign In
                        </button>
                    </div>
                </motion.div>
            </nav>
        );
    }
};

export default Navbar;