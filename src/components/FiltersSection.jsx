// // import React,{useState} from 'react'
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import { TbBeach, TbPool, TbBed, TbTree, TbHome } from "react-icons/tb";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import { Button } from "@material-tailwind/react";
// // import { VscSettings } from "react-icons/vsc";
// // import FilterComponent from './FilterComponent';

// // function FiltersSection() {
// //   // popup filter
// //   const [modalOpen, setModalOpen] = useState(false);

// //   const NextArrow = ({ onClick }) => (
// //     <div
// //       className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
// //       onClick={onClick}
// //     >
// //       <IoIosArrowForward size={24} />
// //     </div>
// //   );

// //   const PrevArrow = ({ onClick }) => (
// //     <div
// //       className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
// //       onClick={onClick}
// //     >
// //       <IoIosArrowBack size={24} />
// //     </div>
// //   );

// //   const settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 8,
// //     slidesToScroll: 5,
// //     nextArrow: <NextArrow />,
// //     prevArrow: <PrevArrow />,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 3,
// //           slidesToScroll: 3,
// //         },
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 2,
// //         },
// //       },
// //     ],
// //   };



// //   const filterData = [
// //     { icon: <TbBeach size={30} />, text: "Amazing Views" },
// //     { icon: <TbPool size={30} />, text: "Pools" },
// //     { icon: <TbTree size={30} />, text: "Farms" },
// //     { icon: <TbHome size={30} />, text: "Lakefront" },
// //     { icon: <TbBed size={30} />, text: "Rooms" },
// //     { icon: <TbBeach size={30} />, text: "Amazing Views" },
// //     { icon: <TbPool size={30} />, text: "Pools" },
// //     { icon: <TbTree size={30} />, text: "Farms" },
// //     { icon: <TbHome size={30} />, text: "Lakefront" },
// //     { icon: <TbBed size={30} />, text: "Rooms" },
// //   ];
// //   return (
// //     <div className='filters-section shadow-lg px-8 py-2 grid grid-cols-8 gap-6 items-center'>
// //      <div className='col-span-7'>
// //         <Slider {...settings}>
// //           {filterData.map((item, index) => (
// //             <div key={index} className="grid place-items-center px-2 py-2 mx-2 cursor-pointer">
// //               <div className="rounded-full w-16 h-10 grid place-items-center bg-gray-100">{item.icon}</div>
// //               <div className="text-sm font-medium">{item.text}</div>
// //             </div>
// //           ))}
// //         </Slider>
// //      </div>
// //       <div>
// //         <Button variant="gradient" className="flex items-center gap-3 px-4 py-2 text-xs" onClick={() => setModalOpen(true)}>
// //           <VscSettings size={25}  />
// //           Filters
// //         </Button>
// //       </div>
// //       <div><FilterComponent modalOpen={modalOpen}  setModalOpen={setModalOpen}/></div>
// //       </div>

// //   )
// // }

// // export default FiltersSection




// import React, { useEffect, useState } from 'react';
// import {
//   Mountain,
//   Waves,
//   Building,
//   Trees,
//   Home,
//   Settings,
// } from 'lucide-react';
// import FilterComponent from './FilterComponent';
// import { useSelector } from 'react-redux';
// import { FaHome } from 'react-icons/fa';
// import { FaStore, FaWarehouse, FaBuilding } from 'react-icons/fa';

// // Mapping type_name to their respective icons
// const typeNameIconMap = {
//     "warehouses": <FaWarehouse size={25} />,
//     "shops": <FaStore size={25} />,
//     "apartment": <FaBuilding size={25} />,
//     "commercial": <FaBuilding size={25} />,
//     "house": <FaHome size={25} />,
//     "villa": <FaHome size={25} />,
//     // Add more types and their corresponding icons here
// };


// const FiltersSection = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { properties } = useSelector((state) => state.properties);
  
//   console.log(properties)

//   useEffect(
//     ()=>{
//       const allPropertyType = properties?.map(property => property.type_name).filter(type => type).map(propertyType => propertyType.toLowerCase())
//       const uniquePropertyType  = [...new Set(allPropertyType)]

//       console.log(uniquePropertyType)

//     }
//   )
   
//   const filterData = [
//     { icon: <Mountain className="w-6 h-6" />, text: "Amazing Views" },
//     { icon: <Waves className="w-6 h-6" />, text: "Pools" },
//     { icon: <Trees className="w-6 h-6" />, text: "Farms" },
//     { icon: <Building className="w-6 h-6" />, text: "Lakefront" },
//     { icon: <Home className="w-6 h-6" />, text: "Rooms" },
//     { icon: <Mountain className="w-6 h-6" />, text: "Amazing Views" },
//     { icon: <Waves className="w-6 h-6" />, text: "Pools" },
//     { icon: <Trees className="w-6 h-6" />, text: "Farms" },
//     { icon: <Building className="w-6 h-6" />, text: "Lakefront" },
//     { icon: <Home className="w-6 h-6" />, text: "Rooms" },
//     { icon: <Waves className="w-6 h-6" />, text: "Pools" },
//     { icon: <Trees className="w-6 h-6" />, text: "Farms" },
//     { icon: <Building className="w-6 h-6" />, text: "Lakefront" },
//     { icon: <Home className="w-6 h-6" />, text: "Rooms" },
//   ];

//   return (
//     <div className="w-full bg-white">
//       <div className="max-w-screen-2xl mx-auto">
//         <div className="relative px-4 py-4 md:px-6 lg:px-8">
//           <div className="flex items-center justify-between gap-4">
//             {/* Scrollable Filter Section */}
//             <div className="flex-1 overflow-x-auto hide-scrollbar">
//               <div className="flex space-x-6 md:space-x-8">
//                 {filterData.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center min-w-fit cursor-pointer group"
//                   >
//                     <div className="p-4 rounded-full bg-gray-50 transition-all duration-200 group-hover:bg-gray-100 group-hover:shadow-md">
//                       {item.icon}
//                     </div>
//                     <span className="mt-2 text-xs font-medium text-gray-600 whitespace-nowrap">
//                       {item.text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Button */}
//             <button
//               onClick={() => setModalOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-fit"
//             >
//               <Settings className="w-5 h-5" />
//               <span className="hidden sm:inline">Filter<FilterComponent modalOpen={modalOpen} setModalOpen={setModalOpen} /></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* CSS for hiding scrollbar */}
//       <style jsx>{`
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FiltersSection;


// import React, { useEffect, useState } from 'react';
// import {
//   Building,
//   Home as FallbackIcon,
//   Settings,
// } from 'lucide-react';
// import FilterComponent from './FilterComponent';
// import { useSelector } from 'react-redux';

// const typeNameIconMap = {
//   "warehouses": <Building size={25} />,
//   "shops": <Building size={25} />,
//   "apartment": <Building size={25} />,
//   "commercial": <Building size={25} />,
//   "house": <Building size={25} />,
//   "villa": <Building size={25} />,
// };

// // Fallback icon for unknown property types
// const fallbackIcon = <Building className="w-6 h-6" />;

// const FiltersSection = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [uniqueTypes, setUniqueTypes] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const { properties } = useSelector((state) => state.properties);

//   console.log(uniqueTypes)
//   useEffect(() => {
//     if (properties) {
//       const allPropertyTypes = properties
//         .map(property => property.type_name)
//         .filter(type => type)
//         .map(propertyType => propertyType.toLowerCase());
//       const uniquePropertyTypes = [...new Set(allPropertyTypes)];
//       setUniqueTypes(uniquePropertyTypes);
//     }
//   }, [properties]);

//   const getIconForType = (type) => {
//     return typeNameIconMap[type] || <FallbackIcon size={25} />;
//   };

//   const formatTypeName = (type) => {
//     return type
//       .split('_')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   return (
//     <div className="w-full bg-white">
//       <div className="max-w-screen-2xl mx-auto">
//         <div className="relative px-4 md:px-6 lg:px-8">
//           <div className="flex items-center justify-between gap-4">
//             {/* Scrollable Filter Section */}
//             <div className="flex-1 overflow-x-auto hide-scrollbar">
//               <div className="flex space-x-6 md:space-x-8">
//                 {uniqueTypes.map((typeName, index) => {
//                   const IconComponent = typeNameIconMap[typeName] || fallbackIcon;
//                   const isSelected = selectedTypes.includes(typeName);

//                   return (
//                     <button
//                       key={index}
//                       onClick={() => togglePropertyType(typeName)}
//                       className={`flex flex-col items-center min-w-fit cursor-pointer group transition-all duration-200
//                         ${isSelected ? 'scale-105' : 'scale-100'}`}
//                     >
//                       <div className={`p-4 rounded-full transition-all duration-200
//                         ${isSelected
//                           ? 'bg-blue-100 shadow-md ring-2 ring-blue-500'
//                           : 'bg-gray-50 group-hover:bg-gray-100 group-hover:shadow-md'}`}
//                       >
//                         {IconComponent}
//                       </div>
//                       <span className={`mt-2 text-xs font-medium whitespace-nowrap
//                         ${isSelected ? 'text-blue-600' : 'text-gray-600'}`}
//                       >
//                         {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Filter Button */}
//             <button
//               onClick={() => setModalOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-fit"
//             >
//               <Settings className="w-5 h-5" />
//               <span className="hidden sm:inline">
//                 Filters
//                 <FilterComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* CSS for hiding scrollbar */}
//       <style jsx>{`
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FiltersSection;


// import React, { useState } from 'react';
// import { FaBed, FaBuilding, FaSwimmingPool, FaHome, FaMoneyBillWave } from 'react-icons/fa';
// import FilterComponent from './FilterComponent';

// const FiltersSections = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   const filterCards = [
//     {
//       id: 'beds-section',
//       title: 'Beds & More',
//       description: 'Beds, Floors, Bathrooms',
//       icon: <FaBed size={24} className="text-blue-600" />,
//       scrollTarget: 'Beds, Floors, and Bathrooms'
//     },
//     {
//       id: 'purpose-section',
//       title: 'Purpose',
//       description: 'Buy, Rent, Lease',
//       icon: <FaHome size={24} className="text-green-600" />,
//       scrollTarget: 'Purpose'
//     },
//     {
//       id: 'amenities-section',
//       title: 'Amenities',
//       description: 'Pool, Gym, Security',
//       icon: <FaSwimmingPool size={24} className="text-purple-600" />,
//       scrollTarget: 'Amenities'
//     },
//     {
//       id: 'property-type-section',
//       title: 'Property Type',
//       description: 'House, Apartment, Villa',
//       icon: <FaBuilding size={24} className="text-orange-600" />,
//       scrollTarget: 'Property Type'
//     },
//     {
//       id: 'price-range-section',
//       title: 'Price Range',
//       description: 'Set your budget',
//       icon: <FaMoneyBillWave size={24} className="text-yellow-600" />,
//       scrollTarget: 'Price Range'
//     }
//   ];

//   const scrollToSection = (sectionTitle) => {
//     // Find all h1 elements in the modal
//     const headers = document.querySelectorAll('.ant-modal-body h1');

//     // Find the header that matches our section title
//     const targetHeader = Array.from(headers).find(
//       header => header.textContent === sectionTitle
//     );

//     if (targetHeader) {
//       targetHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const handleCardClick = (scrollTarget) => {
//     setActiveSection(scrollTarget);
//     setModalOpen(true);
//     // Wait for modal to open before scrolling
//     setTimeout(() => {
//       scrollToSection(scrollTarget);
//     }, 100);
//   };

//   return (
//     <div className="flex lg:flex-row gap-6 p-4 min-h-screen bg-gray-50">
//       {/* Left Sidebar */}
//       <div className="lg:w-1/4 lg:sticky lg:top-4 lg:h-fit">
//         <div className="w-full p-4 space-y-4 max-w-md mx-auto">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
//             {filterCards.map((card) => (
//               <div
//                 key={card.id}
//                 onClick={() => handleCardClick(card.scrollTarget)}
//                 className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
//               >
//                 <div className={`bg-white rounded-xl shadow-md hover:shadow-xl p-4 border 
//                   ${activeSection === card.scrollTarget
//                     ? 'border-blue-500 ring-2 ring-blue-200'
//                     : 'border-gray-100'} 
//                   transition-all duration-300`}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className={`p-3 rounded-lg transition-colors duration-300
//                       ${activeSection === card.scrollTarget
//                         ? 'bg-blue-50'
//                         : 'bg-gray-50 group-hover:bg-blue-50'}`}
//                     >
//                       {card.icon}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-lg text-gray-800 mb-1">
//                         {card.title}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {card.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Content Area */}
//       <div className="lg:w-3/4">
//         <FilterComponent
//           modalOpen={modalOpen}
//           setModalOpen={setModalOpen}
//         />
//       </div>
//     </div>
//   );
// };

// export default FiltersSections;

// import React, { useState } from 'react';
// import { FaBed, FaBath, FaBuilding, FaSwimmingPool, FaHome, FaMoneyBillWave, FaLayerGroup } from 'react-icons/fa';
// import { FiSettings } from 'react-icons/fi';
// import FilterComponent from './FilterComponent';

// const FiltersSections = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');
  
//   const filterCards = [
//     {
//       id: 'beds-section',
//       title: 'Beds',
//       description: 'Beds',
//       icon: <FaBed size={24} className="text-blue-600" />,
//       scrollTarget: 'Beds, Floors, and Bathrooms'
//     },
//     {
//       id: 'floors-section',
//       title: 'Floors',
//       description: 'Floors',
//       icon: <FaLayerGroup size={24} className="text-blue-600" />,
//       scrollTarget: 'Beds, Floors, and Bathrooms'
//     },
//     {
//       id: 'baths-section',
//       title: 'Baths',
//       description: 'Baths',
//       icon: <FaBath size={24} className="text-blue-600" />,
//       scrollTarget: 'Beds, Floors, and Bathrooms'
//     },
//     {
//       id: 'purpose-section',
//       title: 'Purpose',
//       description: 'Buy, Rent, Lease',
//       icon: <FaHome size={24} className="text-green-600" />,
//       scrollTarget: 'Purpose'
//     },
//     {
//       id: 'amenities-section',
//       title: 'Amenities',
//       description: 'Pool, Gym, Security',
//       icon: <FaSwimmingPool size={24} className="text-purple-600" />,
//       scrollTarget: 'Amenities'
//     },
//     {
//       id: 'property-type-section',
//       title: 'Property Type',
//       description: 'House, Apartment, Villa',
//       icon: <FaBuilding size={24} className="text-orange-600" />,
//       scrollTarget: 'Property Type'
//     },
//     {
//       id: 'price-range-section',
//       title: 'Price Range',
//       description: 'Set your budget',
//       icon: <FaMoneyBillWave size={24} className="text-yellow-600" />,
//       scrollTarget: 'Price Range'
//     }
//   ];

//   const scrollToSection = (sectionTitle) => {
//     const headers = document.querySelectorAll('.ant-modal-body h1');
//     const targetHeader = Array.from(headers).find(
//       header => header.textContent === sectionTitle
//     );
//     if (targetHeader) {
//       targetHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const handleCardClick = (scrollTarget) => {
//     setActiveSection(scrollTarget);
//     setModalOpen(true);
//     setTimeout(() => {
//       scrollToSection(scrollTarget);
//     }, 100);
//   };

//   return (
//     <div className="p-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with Filter Button */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
//           <button
//             onClick={() => setModalOpen(true)}
//             className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
//           >
//             <FiSettings className="text-gray-600" />
//             <span className="text-gray-700">Filters</span>
//           </button>
//         </div>

//         {/* Main Filter Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {filterCards.map((card) => (
//             <div
//               key={card.id}
//               onClick={() => handleCardClick(card.scrollTarget)}
//               className="cursor-pointer transform transition-all duration-300 hover:scale-105"
//             >
//               <div className={`bg-white rounded-xl p-4
//                 ${activeSection === card.scrollTarget ? 'ring-2 ring-blue-200 shadow-md' : 'shadow-sm'}
//                 hover:shadow-lg transition-all duration-300`}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
//                     {card.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg text-gray-800 mb-1">{card.title}</h3>
//                     <p className="text-sm text-gray-500">{card.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Filter Component Modal */}
//         <FilterComponent 
//           modalOpen={modalOpen}
//           setModalOpen={setModalOpen}
//         />
//       </div>
//     </div>
//   );
// };

// export default FiltersSections;


import React, { useState } from 'react';
import { FaBed, FaBath, FaBuilding, FaSwimmingPool, FaHome, FaMoneyBillWave, FaLayerGroup } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import FilterComponent from './FilterComponent';

const FiltersSections = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const filterCards = [
    {
      id: 'beds-section',
      title: 'Beds',
      icon: <FaBed size={20} className="text-gray-600" />,
      scrollTarget: 'Beds, Floors, and Bathrooms'
    },
    {
      id: 'baths-section',
      title: 'Baths',
      icon: <FaBath size={20} className="text-gray-600" />,
      scrollTarget: 'Beds, Floors, and Bathrooms'
    },
    {
      id: 'floors-section',
      title: 'Floors',
      icon: <FaLayerGroup size={20} className="text-gray-600" />,
      scrollTarget: 'Floor'
    },
    {
      id: 'purpose-section',
      title: 'Purpose',
      icon: <FaHome size={20} className="text-gray-600" />,
      scrollTarget: 'Purpose'
    },
    {
      id: 'amenities-section',
      title: 'Amenities',
      icon: <FaSwimmingPool size={20} className="text-gray-600" />,
      scrollTarget: 'Amenities'
    },
    {
      id: 'property-type-section',
      title: 'Property Type',
      icon: <FaBuilding size={20} className="text-gray-600" />,
      scrollTarget: 'Property Type'
    },
    {
      id: 'price-range-section',
      title: 'Price Range',
      icon: <FaMoneyBillWave size={20} className="text-gray-600" />,
      scrollTarget: 'Price Range'
    }
  ];

  const scrollToSection = (sectionTitle) => {
    const headers = document.querySelectorAll('.ant-modal-body h1');
    const targetHeader = Array.from(headers).find(
      header => header.textContent === sectionTitle
    );
    if (targetHeader) {
      targetHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCardClick = (scrollTarget) => {
    setActiveSection(scrollTarget);
    setModalOpen(true);
    setTimeout(() => {
      scrollToSection(scrollTarget);
    }, 100);
  };

  return (
    <div className="p-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          {/* Filter Cards Container */}
          <div className="flex flex-wrap gap-2 flex-grow">
            {filterCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.scrollTarget)}
                className="cursor-pointer"
              >
                <div className={`flex items-center gap-2 px-6 py-2 bg-white rounded-full border border-gray-200
                  ${activeSection === card.scrollTarget ? 'bg-red-100' : ''}
                  hover:bg-gray-50 transition-all duration-300`}
                >
                  <div className="flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{card.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
          >
            <FiSettings className="text-gray-600" size={20} />
            <span className="text-sm font-medium text-gray-700">Filters</span>
          </button>
        </div>

        {/* Filter Component Modal */}
        <FilterComponent
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};

export default FiltersSections;


{/* <div className={`filter-section py-4 transition-all duration-300 ${activeSection === 'Beds, Floors, and Bathrooms' ? 'bg-blue-50 rounded-lg p-4' : ''
  }`}> */}