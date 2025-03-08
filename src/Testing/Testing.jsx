// // App.js
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faHeart as faHeartRegular,
//   faSearch,
//   faMapMarkerAlt,
//   faBed,
//   faBath,
//   faRulerCombined,
//   faPlus,
//   faTimes,
//   faFilter,
//   faChevronDown,
//   faThLarge,
//   faList
// } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

// function Testing() {
//   const [advancedFilterOpen, setAdvancedFilterOpen] = useState(false);
//   const [filterOptionsOpen, setFilterOptionsOpen] = useState(true);
//   const [favorites, setFavorites] = useState({});
  
//   const toggleFavorite = (id) => {
//     setFavorites(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };
  
//   const removeFilterTag = (tagIndex) => {
//     // Implementation would remove specific tag
//     console.log("Remove tag at index:", tagIndex);
//   };
  
//   const filterTags = [
//     "Apartment", "Buy", "3 BHK", "Arya Nagar", "₹50L - ₹3Cr"
//   ];
  
//   const properties = [
//     {
//       id: 1,
//       type: "Apartment",
//       price: "65,00,000",
//       title: "Apartment for Sale in Aishwaryam",
//       location: "namak factory chauraha",
//       beds: "1+",
//       baths: "1",
//       area: "800 sq.ft",
//       status: "Semi-Furnished"
//     },
//     {
//       id: 2,
//       type: "House",
//       price: "4 BHK",
//       title: "House For Sale In Arya Nagar",
//       location: "No Address Available",
//       beds: "4",
//       baths: "3"
//     },
//     {
//       id: 3,
//       type: "Commercial",
//       price: "3 BHK",
//       title: "Commercial For Sale In Arya Nagar",
//       location: "No Address Available",
//       beds: "3"
//     },
//     {
//       id: 4,
//       type: "Apartment",
//       price: "2,50,36,759",
//       title: "3 BHK House For Sale In Arya Nagar",
//       location: "Arya Nagar, Kanpur, Uttar Pradesh",
//       beds: "3",
//       baths: "2+",
//       status: "Semi Furnished"
//     }
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen text-gray-800">
//       {/* Header */}
//       <header className="bg-white shadow-md sticky top-0 z-50">
//         <div className="testing mx-auto px-4 flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <img src="/api/placeholder/40/40" alt="PROFO Logo" className="h-9 mr-2" />
//             <span className="text-2xl font-bold">PROFO</span>
//           </div>
//           <div className="flex gap-4">
//             <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md font-medium transition hover:bg-gray-100">
//               <FontAwesomeIcon icon={faHeartOutline} />
//               Favorites
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md font-medium transition hover:bg-red-700">
//               <FontAwesomeIcon icon={faPlus} />
//               Post Property
//             </button>
//             <button className="px-4 py-2 border border-gray-600 rounded-md font-medium transition hover:bg-gray-100">
//               Register
//             </button>
//           </div>
//         </div>
//       </header>
      
//       {/* Navigation */}
//       <nav className="bg-white border-b border-gray-100">
//         <div className="testing mx-auto px-4 overflow-x-auto">
//           <ul className="flex space-x-6 h-12 items-center">
//             <li><a href="#" className="text-red-600 font-medium">Apartments</a></li>
//             <li><a href="#" className="font-medium hover:text-red-600 transition">Rent</a></li>
//             <li><a href="#" className="font-medium hover:text-red-600 transition">Buy</a></li>
//             <li><a href="#" className="font-medium hover:text-red-600 transition">Office</a></li>
//             <li><a href="#" className="font-medium hover:text-red-600 transition">Flats</a></li>
//             <li><a href="#" className="font-medium hover:text-red-600 transition">Warehouses</a></li>
//             <li><a href="#" className="font-medium hover:text-red-600 transition">Lands</a></li>
//             <li><a href="#" className="font-medium hover:text-red-600 transition">Kheti Jameen</a></li>
//           </ul>
//         </div>
//       </nav>
      
//       {/* Search Section */}
//       <section className="bg-white border-b border-gray-100 py-6">
//         <div className="testing mx-auto px-4">
//           <div className="flex flex-wrap items-center gap-3">
//             <div className="relative w-1/3 md:w-1/4">
//               <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
//               <input
//                 type="text"
//                 placeholder="Search properties..."
//                 className="w-full py-3 pl-10 pr-3 border border-gray-100 rounded-md bg-gray-50"
//               />
//             </div>
            
//             <div className="relative">
//               <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
//                 <option>All Types</option>
//                 <option>Apartment</option>
//                 <option>House</option>
//                 <option>Commercial</option>
//               </select>
//               <FontAwesomeIcon 
//                 icon={faChevronDown}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
//               />
//             </div>
            
//             <div className="relative">
//               <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
//                 <option>Sort</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Newest First</option>
//               </select>
//               <FontAwesomeIcon 
//                 icon={faChevronDown}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
//               />
//             </div>
            
//             {/* Advanced Filter Button */}
//             <button 
//               className="flex items-center gap-2 py-3 px-4 bg-gray-50 border border-gray-100 rounded-md font-medium transition hover:bg-gray-100"
//               onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
//             >
//               <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
//               Advanced Filters
//             </button>
            
//             <div className="flex items-center gap-3 text-gray-600 ml-auto">
//               <button className="p-1 text-red-600">
//                 <FontAwesomeIcon icon={faThLarge} />
//               </button>
//               <button className="p-1">
//                 <FontAwesomeIcon icon={faList} />
//               </button>
//             </div>
//           </div>
          
//           {/* Advanced Filter Panel */}
//           {advancedFilterOpen && (
//             <div className="mt-5 bg-white rounded-lg shadow-md overflow-hidden transition-all">
//               <div 
//                 className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer"
//                 onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}
//               >
//                 <h3 className="text-base font-semibold flex items-center gap-2">
//                   <FontAwesomeIcon icon={faFilter} />
//                   Advanced Filters
//                 </h3>
//                 <FontAwesomeIcon 
//                   icon={faChevronDown} 
//                   className={`transition-transform ${filterOptionsOpen ? 'rotate-180' : ''}`}
//                 />
//               </div>
              
//               {filterOptionsOpen && (
//                 <>
//                   <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {/* Property Type Filter */}
//                     <div>
//                       <h4 className="text-sm text-gray-600 mb-3">Property Type</h4>
//                       <div className="space-y-2">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="property_type" value="apartment" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Apartment</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="property_type" value="house" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">House</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="property_type" value="villa" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Villa</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="property_type" value="commercial" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Commercial</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="property_type" value="land" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Land</span>
//                         </label>
//                       </div>
//                     </div>
                    
//                     {/* Transaction Type Filter */}
//                     <div>
//                       <h4 className="text-sm text-gray-600 mb-3">Transaction Type</h4>
//                       <div className="space-y-2">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="radio" name="transaction_type" value="buy" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Buy</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="radio" name="transaction_type" value="rent" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Rent</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="radio" name="transaction_type" value="lease" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Lease</span>
//                         </label>
//                       </div>
                      
//                       <h4 className="text-sm text-gray-600 mb-3 mt-6">Furnishing Status</h4>
//                       <div className="space-y-2">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="furnishing" value="furnished" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Fully Furnished</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="furnishing" value="semi" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Semi Furnished</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="furnishing" value="unfurnished" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">Unfurnished</span>
//                         </label>
//                       </div>
//                     </div>
                    
//                     {/* Bedrooms Filter */}
//                     <div>
//                       <h4 className="text-sm text-gray-600 mb-3">Bedrooms</h4>
//                       <div className="space-y-2">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="bedrooms" value="1" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">1 BHK</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="bedrooms" value="2" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">2 BHK</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="bedrooms" value="3" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">3 BHK</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="bedrooms" value="4" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">4 BHK</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input type="checkbox" name="bedrooms" value="5+" className="accent-red-600 w-4 h-4" />
//                           <span className="text-sm">5+ BHK</span>
//                         </label>
//                       </div>
//                     </div>
                    
//                     {/* Price Range Filter */}
//                     <div>
//                       <h4 className="text-sm text-gray-600 mb-3">Price Range (INR)</h4>
//                       <div className="mt-4">
//                         <input 
//                           type="range" 
//                           id="price-range" 
//                           min="1000000" 
//                           max="50000000" 
//                           step="500000" 
//                           defaultValue="10000000"
//                           className="w-full h-1 bg-gray-100 rounded-full appearance-none cursor-pointer"
//                         />
//                         <div className="flex gap-2 items-center mt-3">
//                           <input 
//                             type="text" 
//                             id="min-price" 
//                             placeholder="Min" 
//                             defaultValue="10 Lakh"
//                             className="w-full px-2 py-2 text-sm border border-gray-100 rounded"
//                           />
//                           <span>to</span>
//                           <input 
//                             type="text" 
//                             id="max-price" 
//                             placeholder="Max" 
//                             defaultValue="5 Crore"
//                             className="w-full px-2 py-2 text-sm border border-gray-100 rounded"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
//                     <button className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
//                       Reset Filters
//                     </button>
//                     <button className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
//                       Apply Filters
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           )}
          
//           {/* Applied Filters Tags */}
//           <div className="flex flex-wrap gap-2 mt-5">
//             {filterTags.map((tag, index) => (
//               <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm">
//                 <span>{tag}</span>
//                 <FontAwesomeIcon 
//                   icon={faTimes} 
//                   className="text-gray-600 cursor-pointer hover:text-red-600" 
//                   onClick={() => removeFilterTag(index)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Property Grid */}
//       <main className="testing mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {properties.map(property => (
//             <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform">
//               <div className="relative h-48">
//                 <img src="/api/placeholder/300/200" alt="Property" className="w-full h-full object-cover" />
//                 <span className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-xs font-medium">
//                   {property.type}
//                 </span>
//                 <button 
//                   className="absolute top-3 right-3 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm border-none"
//                   onClick={() => toggleFavorite(property.id)}
//                 >
//                   <FontAwesomeIcon 
//                     icon={favorites[property.id] ? faHeartRegular : faHeartOutline} 
//                     className={favorites[property.id] ? "text-red-600" : "text-gray-600"}
//                   />
//                 </button>
//               </div>
              
//               <div className="p-4">
//                 <div className="flex items-center text-xl font-bold">
//                   {property.price} <span className="text-sm text-gray-600 ml-1">INR</span>
//                 </div>
                
//                 <h3 className="text-base font-semibold mt-2 mb-3">{property.title}</h3>
                
//                 <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-3">
//                   <FontAwesomeIcon icon={faMapMarkerAlt} />
//                   <span>{property.location}</span>
//                 </div>
                
//                 <div className="flex gap-4 pt-4 border-t border-gray-100 text-sm">
//                   {property.beds && (
//                     <div className="flex items-center gap-1 text-gray-600 font-medium">
//                       <FontAwesomeIcon icon={faBed} />
//                       <span>{property.beds}</span>
//                     </div>
//                   )}
                  
//                   {property.baths && (
//                     <div className="flex items-center gap-1 text-gray-600 font-medium">
//                       <FontAwesomeIcon icon={faBath} />
//                       <span>{property.baths}</span>
//                     </div>
//                   )}
                  
//                   {property.area && (
//                     <div className="flex items-center gap-1 text-gray-600 font-medium">
//                       <FontAwesomeIcon icon={faRulerCombined} />
//                       <span>{property.area}</span>
//                     </div>
//                   )}
                  
//                   {!property.area && !property.baths && (
//                     <div className="flex items-center gap-1 text-gray-600 font-medium">
//                       <FontAwesomeIcon icon={faPlus} />
//                       <span>View More</span>
//                     </div>
//                   )}
//                 </div>
                
//                 {property.status && (
//                   <div className="mt-3 text-sm font-medium">{property.status}</div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Testing;


import React, { useState } from 'react';

const Testing = () => {
  const [advancedFilterOpen, setAdvancedFilterOpen] = useState(true);
  const [filterOptionsOpen, setFilterOptionsOpen] = useState(true);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="testing mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="h-9 w-9 bg-gray-300 rounded-md mr-2 flex items-center justify-center text-xs text-gray-500">Logo</div>
            <span className="text-2xl font-bold">PROFO</span>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md font-medium transition hover:bg-gray-100">
              <i className="text-gray-600">♡</i>
              Favorites
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md font-medium transition hover:bg-red-700">
              <i>+</i>
              Post Property
            </button>
            <button className="px-4 py-2 border border-gray-600 rounded-md font-medium transition hover:bg-gray-100">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      {/* <nav className="bg-white border-b border-gray-100">
        <div className="testing mx-auto px-4 overflow-x-auto">
          <ul className="flex space-x-6 h-12 items-center">
            <li><a href="#" className="text-red-600 font-medium">Apartments</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Rent</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Buy</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Office</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Flats</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Warehouses</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Lands</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Kheti Jameen</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Services</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">New Projects</a></li>
          </ul>
        </div>
      </nav> */}

      {/* Search Section */}
      <section className="bg-white border-b border-gray-100 py-4">
        <div className="testing mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-1/3 md:w-1/4">
              <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">🔍</i>
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full py-3 pl-10 pr-3 border border-gray-100 rounded-md bg-gray-50"
              />
            </div>

            <div className="relative">
              <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
                <option>All Types</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Commercial</option>
              </select>
              <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">▼</i>
            </div>

            <div className="relative">
              <select className="appearance-none py-3 pl-3 pr-10 border border-gray-100 rounded-md bg-gray-50 cursor-pointer">
                <option>Sort</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
              <i className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">▼</i>
            </div>

            {/* Advanced Filter Button */}
            <button
              className="flex items-center gap-2 py-3 px-4 bg-gray-50 border border-gray-100 rounded-md font-medium transition hover:bg-gray-100"
              onClick={() => setAdvancedFilterOpen(!advancedFilterOpen)}
            >
              <i className="text-gray-600">⊞</i>
              Advanced Filters
            </button>

            <div className="flex items-center gap-3 text-gray-600 ml-auto">
              <button className="p-1 text-red-600">
                <i>⊞</i>
              </button>
              <button className="p-1">
                <i>≡</i>
              </button>
            </div>
          </div>

          {/* Advanced Filter Panel */}
          {advancedFilterOpen && (
            <div className="mt-5 bg-white rounded-lg shadow-md overflow-hidden transition-all">
              <div
                className="flex justify-between items-center p-4 border-b border-gray-100 cursor-pointer"
                onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}
              >
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <i>⊞</i>
                  Advanced Filters
                </h3>
                <i className={`transition-transform ${filterOptionsOpen ? 'rotate-180' : ''}`}>▼</i>
              </div>

              {filterOptionsOpen && (
                <>
                  <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Property Type Filter */}
                    <div>
                      <h4 className="text-sm text-gray-600 mb-3">Property Type</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="property_type" value="apartment" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">Apartment</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="property_type" value="house" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">House</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="property_type" value="villa" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">Villa</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="property_type" value="commercial" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">Commercial</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="property_type" value="land" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">Land</span>
                        </label>
                      </div>
                    </div>

                    {/* Transaction Type Filter */}
                    <div>
                      <h4 className="text-sm text-gray-600 mb-3">Transaction Type</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="transaction_type" value="buy" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">Buy</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="transaction_type" value="rent" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">Rent</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="transaction_type" value="lease" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">Lease</span>
                        </label>
                      </div>
                    </div>

                    {/* Bedrooms Filter */}
                    <div>
                      <h4 className="text-sm text-gray-600 mb-3">Bedrooms</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="bedrooms" value="1" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">1 BHK</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="bedrooms" value="2" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">2 BHK</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="bedrooms" value="3" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">3 BHK</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="bedrooms" value="4" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">4 BHK</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="bedrooms" value="5+" className="accent-red-600 w-4 h-4" />
                          <span className="text-sm">5+ BHK</span>
                        </label>
                      </div>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                      <h4 className="text-sm text-gray-600 mb-3">Price Range (INR)</h4>
                      <div className="mt-4">
                        <input
                          type="range"
                          min="1000000"
                          max="50000000"
                          step="500000"
                          defaultValue="10000000"
                          className="w-full h-1 bg-gray-100 rounded-full appearance-none cursor-pointer"
                        />
                        <div className="flex gap-2 items-center mt-3">
                          <input
                            type="text"
                            placeholder="Min"
                            defaultValue="10 Lakh"
                            className="w-full px-2 py-2 text-sm border border-gray-100 rounded"
                          />
                          <span>to</span>
                          <input
                            type="text"
                            placeholder="Max"
                            defaultValue="5 Crore"
                            className="w-full px-2 py-2 text-sm border border-gray-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
                    <button className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
                      Reset Filters
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
                      Apply Filters
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Applied Filters Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {["Apartment", "Buy", "3 BHK", "Arya Nagar", "₹50L - ₹3Cr"].map((tag, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-sm">
                <span>{tag}</span>
                <i className="text-gray-600 cursor-pointer hover:text-red-600">✕</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <main className="testing mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              type: "Apartment",
              price: "65,00,000",
              title: "Apartment for Sale in Aishwaryam",
              location: "namak factory chauraha",
              beds: "1+",
              baths: "1",
              area: "800 sq.ft",
              status: "Semi-Furnished"
            },
            {
              id: 2,
              type: "House",
              price: "4 BHK",
              title: "House For Sale In Arya Nagar",
              location: "No Address Available",
              beds: "4",
              baths: "3"
            },
            {
              id: 3,
              type: "Commercial",
              price: "3 BHK",
              title: "Commercial For Sale In Arya Nagar",
              location: "No Address Available",
              beds: "3"
            },
            {
              id: 4,
              type: "Apartment",
              price: "2,50,36,759",
              title: "3 BHK House For Sale In Arya Nagar",
              location: "Arya Nagar, Kanpur, Uttar Pradesh",
              beds: "3",
              baths: "2+",
              status: "Semi Furnished"
            }
          ].map(property => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform">
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Property Image</span>
                <span className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-xs font-medium">
                  {property.type}
                </span>
                <button className="absolute top-3 right-3 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm border-none">
                  <i className="text-gray-600">♡</i>
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center text-xl font-bold">
                  {property.price} <span className="text-sm text-gray-600 ml-1">INR</span>
                </div>

                <h3 className="text-base font-semibold mt-2 mb-3">{property.title}</h3>

                <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-3">
                  <i>📍</i>
                  <span>{property.location}</span>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100 text-sm">
                  {property.beds && (
                    <div className="flex items-center gap-1 text-gray-600 font-medium">
                      <i>🛏️</i>
                      <span>{property.beds}</span>
                    </div>
                  )}

                  {property.baths && (
                    <div className="flex items-center gap-1 text-gray-600 font-medium">
                      <i>🚿</i>
                      <span>{property.baths}</span>
                    </div>
                  )}

                  {property.area && (
                    <div className="flex items-center gap-1 text-gray-600 font-medium">
                      <i>📏</i>
                      <span>{property.area}</span>
                    </div>
                  )}
                </div>

                {property.status && (
                  <div className="mt-3 text-sm font-medium">{property.status}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Testing;
