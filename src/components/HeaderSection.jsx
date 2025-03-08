// export const ConsultationModal = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedTime, setSelectedTime] = useState('As soon as possible');
//     const [phoneNumber, setPhoneNumber] = useState('');

//     const generateTimeSlots = () => {
//         const slots = ['As soon as possible'];
//         const intervals = [];

//         // Function to format time in 12-hour AM/PM format
//         const formatTime = (hour, minute) => {
//             const period = hour >= 12 ? 'PM' : 'AM';
//             const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
//             const formattedMinute = String(minute).padStart(2, '0');
//             return `${formattedHour}:${formattedMinute} ${period}`;
//         };

//         // Generate intervals for 24 hours in 30-minute increments
//         for (let hour = 0; hour < 24; hour++) {
//             for (let minute = 0; minute < 60; minute += 30) {
//                 const startTime = formatTime(hour, minute);
//                 const endHour = minute === 30 ? hour + 1 : hour;
//                 const endMinute = minute === 30 ? 0 : 30;
//                 const endTime = formatTime(endHour % 24, endMinute);
//                 intervals.push(`${startTime} – ${endTime}`);
//             }
//         }

//         // Add today's slots
//         const todaySlots = intervals.slice(0, 24); // First 12 hours
//         todaySlots.forEach(slot => slots.push(slot));

//         // Add tomorrow's slots
//         const tomorrowSlots = intervals.slice(0, 24); // First 12 hours
//         tomorrowSlots.forEach(slot => slots.push(`Tomorrow ${slot}`));

//         // Add day after tomorrow slots
//         const dayAfterSlots = intervals.slice(0, 24); // Remaining slots up to 48 hours
//         const dayAfter = new Date();
//         dayAfter.setDate(dayAfter.getDate() + 2);
//         const dayAfterStr = dayAfter.toLocaleDateString('en-US', { weekday: 'long' });
//         dayAfterSlots.forEach(slot => slots.push(`${dayAfterStr} ${slot}`));

//         return slots;
//     };


//     const timeSlots = generateTimeSlots();

//     const toggleModal = () => setIsOpen(!isOpen);
//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//     const selectTime = (time) => {
//         setSelectedTime(time);
//         setIsDropdownOpen(false);
//     };

//     return (
//         <div className="">
//             {/* Trigger Button */}
//             <button
//                 onClick={toggleModal}
//                 className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
//             >
//                 Callback
//             </button>

//             {/* Modal Overlay */}
//             <div
//                 className={`text-black fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
//                     }`}
//                 onClick={toggleModal}
//             >
//                 {/* Modal Content */}
//                 <div
//                     className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 w-full max-w-md transition-all duration-300 ${isOpen
//                         ? 'opacity-100 scale-100 translate-y-[-50%]'
//                         : 'opacity-0 scale-95 translate-y-[-45%]'
//                         }`}
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     {/* Close Button */}
//                     <button
//                         onClick={toggleModal}
//                         className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//                     >
//                         <X size={24} />
//                     </button>

//                     {/* Content */}
//                     <div className="space-y-6">
//                         <div>
//                             <h2 className="text-2xl font-semibold mb-2">
//                                 Consultation from the developer
//                             </h2>
//                             <p className="text-gray-600">
//                                 Company specialist «Group «Aircraft »» will talk about discounts and promotions, apartments in the presence of mortgage programs
//                             </p>
//                         </div>

//                         {/* Form */}
//                         <div className="space-y-4">
//                             {/* Custom Dropdown */}
//                             <div className="relative">
//                                 <label className="block text-sm text-gray-500 mb-1">
//                                     Call time
//                                 </label>
//                                 <button
//                                     type="button"
//                                     onClick={toggleDropdown}
//                                     className="w-full p-4 bg-gray-50 rounded-lg text-left flex items-center justify-between border border-gray-200 focus:outline-none focus:border-yellow-400"
//                                 >
//                                     <span>{selectedTime}</span>
//                                     <ChevronDown
//                                         className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
//                                             }`}
//                                     />
//                                 </button>

//                                 {/* Dropdown Menu */}
//                                 <div
//                                     className={`absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${isDropdownOpen
//                                         ? 'opacity-100 translate-y-0'
//                                         : 'opacity-0 translate-y-2 pointer-events-none'
//                                         }`}
//                                 >
//                                     <div className="max-h-60 overflow-y-auto">
//                                         {timeSlots.map((time) => (
//                                             <button
//                                                 key={time}
//                                                 onClick={() => selectTime(time)}
//                                                 className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between group"
//                                             >
//                                                 <span className="truncate">{time}</span>
//                                                 {selectedTime === time && (
//                                                     <Check className="text-yellow-500 flex-shrink-0 ml-2" size={20} />
//                                                 )}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Phone input */}
//                             <div>
//                                 <input
//                                     type="tel"
//                                     placeholder="Phone number"
//                                     value={phoneNumber}
//                                     onChange={(e) => setPhoneNumber(e.target.value)}
//                                     className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-yellow-400"
//                                 />
//                             </div>

//                             {/* Submit button */}
//                             <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-4 rounded-lg transition-colors">
//                                 Call me
//                             </button>

//                             {/* Consent text */}
//                             <p className="text-sm text-gray-500">
//                                 By sending an application, you give your{' '}
//                                 <a href="#" className="text-blue-600 hover:underline">
//                                     consent
//                                 </a>{' '}
//                                 for the processing of personal data
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// function HeaderSection({ details, sectionRefs, activeSection }) {
//     const [isTabsSticky, setIsTabsSticky] = useState(false);
//     const [hasBackground, setHasBackground] = useState(false);
//     const imagePreviewRef = useRef(null);
//     // Mock data - in real app would come from props
//     const building = {
//         name: "Residential complex \"Eco Bunino\"",
//         rating: 4.7,
//         priceRange: {
//             min: "5 654 985",
//             max: "20 935 632",
//         },
//         pricePerMeter: {
//             min: "160.54",
//             max: "466.49"
//         },
//         location: "Alder",
//         transportTime: "21",
//         totalRatings: 3670,
//         photos: 26
//     };


//     // Calculate min and max prices from connected properties
//     const prices = details?.connectedProperties
//         ?.map(property => property.price)
//         ?.filter(price => price > 0) || [];

//     const minPrice = prices.length ? Math.min(...prices) : null;
//     const maxPrice = prices.length ? Math.max(...prices) : null;

//     // Format price in Indian currency format (lakhs and crores)
//     const formatIndianPrice = (price) => {
//         if (price == null || price <= 0) return null; // Handle invalid or zero prices

//         // Convert to string and handle decimals
//         const priceStr = Math.floor(price).toString();

//         // Handle numbers less than 1000
//         if (priceStr.length <= 3) return `₹${priceStr}`;

//         // Handle numbers >= 1000
//         const lastThree = priceStr.substring(priceStr.length - 3);
//         const otherNumbers = priceStr.substring(0, priceStr.length - 3);
//         const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;

//         // Add ₹ symbol and determine if in lakhs or crores
//         if (price >= 10000000) { // ≥ 1 crore
//             const crores = (price / 10000000).toFixed(2);
//             return `₹${crores} Cr`;
//         } else if (price >= 100000) { // ≥ 1 lakh
//             const lakhs = (price / 100000).toFixed(2);
//             return `₹${lakhs} L`;
//         } else {
//             return `₹${formatted}`;
//         }
//     };

//     // Calculate price per square foot
//     const calculatePricePerSqFt = () => {
//         const pricesPerSqFt = details?.connectedProperties
//             ?.map(property => {
//                 if (property.price > 0 && property.area > 0) {
//                     return Math.round(property.price / property.area);
//                 }
//                 return null;
//             })
//             ?.filter(price => price != null) || [];

//         return pricesPerSqFt.length
//             ? {
//                 min: Math.min(...pricesPerSqFt),
//                 max: Math.max(...pricesPerSqFt),
//             }
//             : { min: null, max: null };
//     };

//     // Format price per square foot
//     const formatPricePerSqFt = (price) => {
//         if (price == null || price <= 0) return null; // Handle invalid or zero prices
//         return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     };

//     const pricePerSqFt = calculatePricePerSqFt();



//     useEffect(() => {
//         const handleScroll = () => {
//             const headerHeight = 600;
//             const scrollPosition = window.scrollY;
//             setIsTabsSticky(scrollPosition >= headerHeight - 64);
//             setHasBackground(scrollPosition > 50); // Add background after 50px scroll
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Dynamically generate navigation tabs from section references
//     const navigationTabs = Object.keys(sectionRefs || {});

//     // Scroll to section handler
//     const scrollToSection = (sectionKey) => {
//         const sectionElement = sectionRefs[sectionKey]?.current;
//         if (sectionElement) {
//             // Scroll with offset to account for sticky header
//             const offset = 120; // Adjust this value based on your header height
//             const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
//             window.scrollTo({
//                 top: elementPosition - offset,
//                 behavior: 'smooth'
//             });
//         }
//     };
//     return (
//         <header className="relative w-full h-[600px] text-white">
//             <div
//                 className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/10' : ''
//                     }`}
//                 // Working , just commented due to bad quality images
//                 // style={{
//                 //     backgroundImage: `url(${details?.galleryList?.[0] ||
//                 //         details?.gallery?.[0]?.images?.[0] ||
//                 //         'https://avatars.mds.yandex.net/get-verba/1672712/2a000001938b26cdc34fcffb74eebe7c291a/optimize'
//                 //         })`, // Add a fallback for when the image is not available
//                 //     backgroundSize: 'cover',
//                 //     backgroundPosition: 'center',
//                 // }}
//                 style={{
//                     backgroundImage: 'url(https://avatars.mds.yandex.net/get-verba/1672712/2a000001938b26cdc34fcffb74eebe7c291a/optimize)',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             > {/* Gradient overlay */}
//                 <div
//                     className={`absolute inset-0 transition-opacity duration-300 ${hasBackground
//                         ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100'
//                         : 'bg-gradient-to-b from-transparent to-black opacity-50'
//                         }`}
//                 />
//             </div>
//             {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" /> */}
//             {/* </div> */}

//             {/* Header Content */}
//             <div className={`relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''
//                 }`}>
//                 <nav className="absolute top-4 left-6 text-sm flex flex-wrap items-center gap-2 opacity-80">
//                     <span>Real estate in Moscow and Moscow region</span>
//                     <span>•</span>
//                     <span>Buy</span>
//                     <span>•</span>
//                     <span>Apartment in a new building</span>
//                     <span>•</span>
//                     <span>{building?.name}</span>
//                 </nav>

//                 {/* Status Tags */}
//                 <div className="flex gap-2 mb-4 flex-wrap">
//                     {details?.developmentStatus && <span className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
//                         {details?.developmentStatus}
//                     </span>}
//                     {/* <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
//                                 comfort
//                             </span> */}
//                 </div>

//                 {/* Building Title */}
//                 <div className="flex items-center gap-2 mb-3 flex-wrap">
//                     <h1 className="capitalize text-6xl  font-bold">{details?.type && `${details?.type}`} {details?.name && `'${details?.name}'`}</h1>
//                     {/* <div className="flex items-center">
//                       <span className="text-yellow-400 text-2xl">⭐</span>
//                       <span className="text-2xl ml-1">{building.rating}</span>
//                   </div> */}
//                 </div>

//                 {/* Price Range */}
//                 <div className="mb-10">
//                     {minPrice != null && maxPrice != null && (
//                         <div className="text-4xl font-bold">
//                             {formatIndianPrice(minPrice)} — {formatIndianPrice(maxPrice)}
//                         </div>
//                     )}
//                     {pricePerSqFt.min != null && pricePerSqFt.max != null && (
//                         <div className="text-sm opacity-80">
//                             ₹{formatPricePerSqFt(pricePerSqFt.min)} - ₹{formatPricePerSqFt(pricePerSqFt.max)} per sq.ft
//                         </div>
//                     )}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4 mb-6 flex-wrap items-center">
//                     {details?.contactNumber && <ContactButton />}

//                     <ConsultationModal />
//                     {/* <button className="px-3 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors">
//                       <Heart className="w-6 h-6" />
//                   </button> */}
//                 </div>

//                 {/* Photo Count */}
//                 {/* <button className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit" onClick={() => imagePreviewRef.current.openGallery()}>
//                     <Camera className="w-5 h-5" />
//                     <span>{details?.galleryList?.length} photos</span>
//                     <ImagePreview ref={imagePreviewRef} images={details?.galleryList} />

//                 </button> */}
//                 <button
//                     className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
//                     onClick={() => imagePreviewRef.current.openGallery()}
//                 >
//                     <Camera className="w-5 h-5" />
//                     <span>
//                         {details?.galleryList?.length || details?.gallery?.[0]?.images?.length || 0} photos
//                     </span>
//                     <ImagePreview
//                         ref={imagePreviewRef}
//                         images={details?.galleryList || details?.gallery?.[0]?.images || []}
//                     />
//                 </button>

//                 {/* Developer Info */}
//                 <div className="flex items-center gap-4 my-8 pb-4 flex-wrap">
//                     <div className="font-bold text-xl">самолет</div>
//                     <div className="text-sm">developer #1</div>
//                     <div className="flex items-center gap-2">
//                         <span className="text-yellow-400">⭐</span>
//                         <span>{building.rating}</span>
//                         <span className="opacity-80">• {building.totalRatings} ratings</span>
//                     </div>
//                 </div>

//                 {/* Navigation Tabs */}
//                 <div
//                     className={`${isTabsSticky
//                         ? 'fixed top-16 left-0 z-50 bg-white shadow-sm'
//                         : 'absolute bottom-0 left-0 backdrop-blur-lg'
//                         } w-full transition-all duration-300`}
//                 >
//                     <div className="max-w-7xl mx-auto text-sm">
//                         <div
//                             className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'
//                                 }`}
//                         >
//                             {navigationTabs.map((tab) => (
//                                 <button
//                                     key={tab}
//                                     onClick={() => scrollToSection(tab)}
//                                     className={`whitespace-nowrap transition-colors relative ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'}
//                                     ${activeSection === tab ? 'text-red-600 font-semibold' : ''}`}
//                                 >
//                                     {tab}
//                                     {activeSection === tab && (
//                                         <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full"></span>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default HeaderSection



// const HeaderSection = ({ details, sectionRefs, activeSection }) => {
//     const [isTabsSticky, setIsTabsSticky] = useState(false);
//     const [isTitleSticky, setIsTitleSticky] = useState(false);
//     const [hasBackground, setHasBackground] = useState(false);
//     const imagePreviewRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             const headerHeight = 600;
//             const scrollPosition = window.scrollY;
//             const titleTriggerPoint = headerHeight - 150; // Trigger point for title
//             const tabsTriggerPoint = headerHeight - 64; // Trigger point for tabs

//             setIsTabsSticky(scrollPosition >= tabsTriggerPoint);
//             setIsTitleSticky(scrollPosition >= titleTriggerPoint);
//             setHasBackground(scrollPosition > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToSection = (sectionKey) => {
//         const sectionElement = sectionRefs[sectionKey]?.current;
//         if (sectionElement) {
//             const offset = 160;
//             const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
//             window.scrollTo({
//                 top: elementPosition - offset,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const navigationTabs = Object.keys(sectionRefs || {});

//     console.log(details)

//     return (
//         <header className="relative w-full h-[570px] text-white">
//             {/* Background Image & Overlay */}
//             {/* <div className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/10' : ''}`}
//                 style={{
//                     backgroundImage: 'url(details?.galleryList?.[0])',
//                     // backgroundImage: 'url(https://avatars.mds.yandex.net/get-verba/1672712/2a000001938b26cdc34fcffb74eebe7c291a/optimize)',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}>
//                 <div className={`absolute inset-0 transition-opacity duration-300 
//                     ${hasBackground ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100' : 'bg-gradient-to-b from-transparent to-black opacity-50'}`} />
//             </div> */}
//             {/* <div
//                 className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/10' : ''}`}
//                 style={{
//                     backgroundImage: details?.galleryList?.[0] ? `url(${details.galleryList[0]})` : 'none',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             > */}
//             <div
//                 className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/10' : ''}`}
//                 style={{
//                     backgroundImage: details?.galleryList?.[0]
//                         ? `url(${details.galleryList[0]})`
//                         : details?.gallery?.[0]?.images?.[0]
//                             ? `url(${details.gallery[0].images[0]})`
//                             : 'none',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >

//                 <div
//                     className={`absolute inset-0 transition-opacity duration-300 
//       ${hasBackground
//                             ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100'
//                             : 'bg-gradient-to-b from-transparent to-black opacity-50'
//                         }`}
//                 />
//             </div>


//             {/* Sticky Title */}
//             {isTitleSticky && (
//                 <div className="fixed top-0 left-0 right-0 z-40 bg-[#007BFB] py-2 text-white">
//                     <div className="max-w-7xl mx-auto px-6 py-3">
//                         <h1 className="text-2xl font-semibold capitalize">
//                             {details?.name && `${details.name}`}
//                         </h1>
//                     </div>
//                 </div>
//             )}

//             {/* Main Content */}
//             <div className={`relative  h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''}`}>
//                 {/* Original Title - fades out when sticky version appears */}
//                 <div className={`flex items-center gap-2 mb-3 flex-wrap transition-opacity duration-300 
//                     ${isTitleSticky ? 'opacity-0' : 'opacity-100'}`}>
//                     <h1 className="capitalize text-6xl font-bold">
//                         {details?.type && `${details.type}`} {details?.name && `'${details.name}'`}
//                     </h1>
//                 </div>

//                 {/* Other content remains the same */}
//                 <div className="flex gap-2 mb-4 flex-wrap">
//                     {details?.developmentStatus && (
//                         <span className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
//                             {details.developmentStatus}
//                         </span>
//                     )}
//                 </div>

//                 <div className="flex gap-4 mb-6 flex-wrap items-center">
//                     <ContactButton />
//                     <Callback />
//                 </div>

//                 <button
//                     className="flex items-center gap-2 px-4 py-2 mb-20 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
//                     onClick={() => imagePreviewRef.current.openGallery()}
//                 >
//                     <Camera className="w-5 h-5" />
//                     <span>
//                         {details?.galleryList?.length || details?.gallery?.[0]?.images?.length || 0} photos
//                     </span>
//                     <ImagePreview
//                         ref={imagePreviewRef}
//                         images={details?.galleryList || details?.gallery?.[0]?.images || []}
//                     />
//                 </button>


//                 {/* Navigation Tabs */}
//                 {/* <div className={`${isTabsSticky ? 'fixed top-14 left-0 z-30 bg-white shadow-sm' : 'absolute bottom-0 left-0 backdrop-blur-lg'} w-full transition-all duration-300`}>
//                     <div className="max-w-7xl mx-auto text-sm">
//                         <div className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'}`}>
//                             {navigationTabs.map((tab) => (
//                                 <button
//                                     key={tab}
//                                     onClick={() => scrollToSection(tab)}
//                                     className={`whitespace-nowrap transition-colors relative 
//                                         ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'}
//                                         ${activeSection === tab ? 'text-red-600 font-semibold' : ''}`}
//                                 >
//                                     {tab}
//                                     {activeSection === tab && (
//                                         <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full" />
//                                     )}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div> */}
//                 {navigationTabs.length > 0 && (
//                     <div
//                         className={`${isTabsSticky
//                             ? 'fixed top-[70px] left-0 z-30 bg-white/40 backdrop-blur-xl shadow-sm'
//                             : 'absolute bottom-0 left-0 bg-transparent bg-black/40 backdrop-blur-xl'} 
//                         w-full transition-all duration-300`}
//                     >
//                         <div className="max-w-7xl mx-auto text-sm">
//                             <div className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'}`}>
//                                 {navigationTabs.map((tab) => (
//                                     <button
//                                         key={tab}
//                                         onClick={() => scrollToSection(tab)}
//                                         className={`whitespace-nowrap transition-colors relative 
//                                         ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'} 
//                                         ${activeSection === tab ? 'text-red-500 font-semibold border-2 rounded-full px-[25px] py-[1px] border-red-500' : ''}`}
//                                     >
//                                         {tab}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </header>
//     );
// };

// export default HeaderSection;


// const HeaderSection = ({ details, sectionRefs, activeSection, availableTabs }) => {
//     const [isTabsSticky, setIsTabsSticky] = useState(false);
//     const [isTitleSticky, setIsTitleSticky] = useState(false);
//     const [hasBackground, setHasBackground] = useState(false);
//     const imagePreviewRef = useRef(null);
//     console.log("details--", details)

//     useEffect(() => {
//         const handleScroll = () => {
//             const headerHeight = 600;
//             const scrollPosition = window.scrollY;
//             const titleTriggerPoint = headerHeight - 150;
//             const tabsTriggerPoint = headerHeight - 64;

//             setIsTabsSticky(scrollPosition >= tabsTriggerPoint);
//             setIsTitleSticky(scrollPosition >= titleTriggerPoint);
//             setHasBackground(scrollPosition > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToSection = (sectionKey) => {
//         const sectionElement = sectionRefs[sectionKey]?.current;
//         if (sectionElement) {
//             const offset = 160;
//             const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
//             window.scrollTo({
//                 top: elementPosition - offset,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     return (
//         <header className="relative w-full h-[568px] text-white">
//             <div
//                 className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/10' : ''}`}
//                 style={{
//                     backgroundImage: details?.galleryList?.[0]
//                         ? `url(${details.galleryList[0]})`
//                         : details?.gallery?.[0]?.images?.[0]
//                             ? `url(${details.gallery[0].images[0]})`
//                             : 'none',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div
//                     className={`absolute inset-0 transition-opacity duration-300 
//                     ${hasBackground ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100' : 'bg-gradient-to-b from-transparent to-black opacity-50'}`}
//                 />
//             </div>

//             {isTitleSticky && (
//                 <div className="fixed top-0 left-0 right-0 z-40 bg-[#007BFB] py-2 text-white">
//                     <div className="max-w-7xl mx-auto px-6 py-3">
//                         <h1 className="text-2xl font-semibold capitalize">
//                             {details?.name}
//                         </h1>
//                     </div>
//                 </div>
//             )}

//             <div className={`relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''}`}>
//                 <div className={`flex items-center gap-2 mb-3 flex-wrap transition-opacity duration-300 
//                     ${isTitleSticky ? 'opacity-0' : 'opacity-100'}`}>
//                     <h1 className="capitalize text-6xl font-bold">
//                         {details?.type && `${details.type}`} {details?.name && `'${details.name}'`}
//                     </h1>
//                 </div>

//                 <div className="flex gap-2 mb-4 flex-wrap">
//                     {details?.developmentStatus && (
//                         <span className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
//                             {details.developmentStatus}
//                         </span>
//                     )}
//                 </div>

//                 <div className="flex gap-4 mb-6 flex-wrap items-center">
//                     <ContactButton />
//                     <Callback builderId={details?.builder?.id}/>
//                 </div>

//                 <div className='min-h-32'>
//                     {details?.galleryList?.length > 0 && (
//                         <button
//                             className="flex items-center gap-2 px-4 py-2 mb-20 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
//                             onClick={() => imagePreviewRef.current.openGallery()}
//                         >
//                             <Camera className="w-5 h-5" />
//                             <div>
//                                 {details?.galleryList?.length || details?.gallery?.[0]?.images?.length || 0} photos
//                             </div>
//                             <ImagePreview
//                                 ref={imagePreviewRef}
//                                 images={details?.galleryList || details?.gallery?.[0]?.images || []}
//                             />
//                         </button>
//                     )}
//                 </div>

//                 {availableTabs.length > 0 && (
//                     <div className={`${isTabsSticky
//                         ? 'fixed top-[70px] left-0 z-30 bg-white/40 backdrop-blur-xl shadow-sm'
//                         : 'absolute bottom-0 left-0 bg-transparent bg-black/40 backdrop-blur-xl'} 
//           w-full transition-all duration-300`}
//                     >
//                         <div className="max-w-7xl mx-auto text-sm">
//                             <div className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'}`}>
//                                 {availableTabs.map((tab) => (
//                                     <button
//                                         key={tab}
//                                         onClick={() => scrollToSection(tab)} // Use the passed scrollToSection function
//                                         className={`whitespace-nowrap transition-colors relative 
//                   ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'} 
//                   ${activeSection === tab ? 'text-red-500 font-semibold border-2 rounded-full px-[25px] py-[1px] border-red-500' : ''}`}
//                                     >
//                                         {tab}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default HeaderSection;

// import { BsHeart, BsHeartFill } from 'react-icons/bs';
// import { useWishlist } from '../hooks/useWishlist';

// import React, { useEffect, useState, useRef } from 'react'
// import { useSelector } from 'react-redux';
// import { QRCode } from 'antd';
// import { Camera } from 'lucide-react';
// import ImagePreview from './ImagesPreview';
// import { Callback } from './Callback';

// export const ContactButton = () => {
//     const [step, setStep] = useState(1);
//     const { buildingDetail } = useSelector(state => state.buildings);
//     const [phoneNumber, setPhoneNumber] = useState(0);

//     useEffect(() => {
//         setPhoneNumber(buildingDetail?.contactNumber);
//     }, [buildingDetail]);

//     const handleClick = () => {
//         if (step === 1) {
//             setStep(2);
//         } else {
//             // For both step 2 and beyond, make the call
//             window.location.href = `tel:${phoneNumber.replace(/[-()\s]/g, '')}`;
//         }
//     };

//     return (
//         <div className="">
//             {step === 1 && (
//                 <button
//                     onClick={handleClick}
//                     className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
//                 >
//                     Developer contacts
//                 </button>
//             )}

//             {step === 2 && (
//                 <button
//                     onClick={handleClick}
//                     // className="flex items-center gap-4 px-6 py-3 bg-black/75 text-white rounded-lg hover:bg-black/80 transition-colors"
//                     className='flex gap-4 items-center px-6 py-3  bg-black/75 text-white font-medium rounded-lg hover:bg-black transition-colors'
//                 >
//                     <QRCode
//                         value={phoneNumber}
//                         size={28}
//                         color="white"
//                         backgroundColor="transparent"
//                         bordered={false}
//                     />
//                     <span className="font-medium">{phoneNumber}</span>
//                 </button>
//             )}
//         </div>
//     );
// };

// const HeaderSection = ({ details, sectionRefs, activeSection, availableTabs }) => {
//     const [isTabsSticky, setIsTabsSticky] = useState(false);
//     const [isTitleSticky, setIsTitleSticky] = useState(false);
//     const [hasBackground, setHasBackground] = useState(false);
//     const imagePreviewRef = useRef(null);

//     // Get wishlist functionality from custom hook
//     const { isInWishlist, handleToggleWishlist } = useWishlist();

//     // Determine entity type and ID based on the details object
//     const getEntityInfo = () => {
//         if (details?.post_id) {
//             return { entityType: 'property', entityId: details.post_id };
//         } else if (details?.projectId) {
//             return { entityType: 'project', entityId: details.projectId };
//         } else if (details?.buildingId) {
//             return { entityType: 'building', entityId: details.buildingId };
//         }
//         return { entityType: 'property', entityId: null }; // Default fallback
//     };

//     const { entityType, entityId } = getEntityInfo();

//     // Check if the entity is in the wishlist
//     const isLiked = entityId ? isInWishlist(entityId, entityType) : false;

//     useEffect(() => {
//         const handleScroll = () => {
//             const headerHeight = 600;
//             const scrollPosition = window.scrollY;
//             const titleTriggerPoint = headerHeight - 150;
//             const tabsTriggerPoint = headerHeight - 64;

//             setIsTabsSticky(scrollPosition >= tabsTriggerPoint);
//             setIsTitleSticky(scrollPosition >= titleTriggerPoint);
//             setHasBackground(scrollPosition > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToSection = (sectionKey) => {
//         const sectionElement = sectionRefs[sectionKey]?.current;
//         if (sectionElement) {
//             const offset = 160;
//             const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
//             window.scrollTo({
//                 top: elementPosition - offset,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     return (
//         <header className="relative w-full h-[568px] text-white">
//             <div
//                 className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/10' : ''}`}
//                 style={{
//                     backgroundImage: details?.galleryList?.[0]
//                         ? `url(${details.galleryList[0]})`
//                         : details?.gallery?.[0]?.images?.[0]
//                             ? `url(${details.gallery[0].images[0]})`
//                             : 'none',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div
//                     className={`absolute inset-0 transition-opacity duration-300 
//                     ${hasBackground ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100' : 'bg-gradient-to-b from-transparent to-black opacity-50'}`}
//                 />
//             </div>

//             {isTitleSticky && (
//                 <div className="fixed top-0 left-0 right-0 z-40 bg-[#007BFB] py-2 text-white">
//                     <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//                         <h1 className="text-2xl font-semibold capitalize">
//                             {details?.name}
//                         </h1>
//                         {/* Add wishlist button in sticky header */}
//                         {entityId && (
//                             <button
//                                 onClick={(e) => handleToggleWishlist(e, { entityId, entityType })}
//                                 className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
//                             >
//                                 {isLiked ? (
//                                     <BsHeartFill className="text-red-500" size={18} />
//                                 ) : (
//                                     <BsHeart size={18} />
//                                 )}
//                                 <span className="text-sm">{isLiked ? 'Saved' : 'Save'}</span>
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             )}

//             <div className={`relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''}`}>
//                 <div className={`flex items-center gap-2 mb-3 flex-wrap transition-opacity duration-300 
//                     ${isTitleSticky ? 'opacity-0' : 'opacity-100'}`}>
//                     <h1 className="capitalize text-6xl font-bold">
//                         {details?.type && `${details.type}`} {details?.name && `'${details.name}'`}
//                     </h1>
//                 </div>

//                 <div className="flex gap-2 mb-4 flex-wrap">
//                     {details?.developmentStatus && (
//                         <span className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
//                             {details.developmentStatus}
//                         </span>
//                     )}
//                 </div>

//                 <div className="flex gap-4 mb-6 flex-wrap items-center">
//                     <ContactButton />
//                     <Callback builderId={details?.builder?.id} />

//                     {/* Add wishlist button */}
//                     {entityId && (
//                         <button
//                             onClick={(e) => handleToggleWishlist(e, { entityId, entityType })}
//                             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isLiked
//                                     ? 'bg-red-500/30 hover:bg-red-500/40 border border-red-500/50'
//                                     : 'bg-black/50 hover:bg-black/60 border border-white/20'
//                                 }`}
//                         >
//                             {isLiked ? (
//                                 <BsHeartFill className="text-red-500" size={20} />
//                             ) : (
//                                 <BsHeart size={20} />
//                             )}
//                             <span>{isLiked ? 'Saved' : 'Save'}</span>
//                         </button>
//                     )}
//                 </div>

//                 <div className='min-h-32'>
//                     {details?.galleryList?.length > 0 && (
//                         <button
//                             className="flex items-center gap-2 px-4 py-2 mb-20 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
//                             onClick={() => imagePreviewRef.current.openGallery()}
//                         >
//                             <Camera className="w-5 h-5" />
//                             <div>
//                                 {details?.galleryList?.length || details?.gallery?.[0]?.images?.length || 0} photos
//                             </div>
//                             <ImagePreview
//                                 ref={imagePreviewRef}
//                                 images={details?.galleryList || details?.gallery?.[0]?.images || []}
//                             />
//                         </button>
//                     )}
//                 </div>

//                 {availableTabs.length > 0 && (
//                     <div className={`${isTabsSticky
//                         ? 'fixed top-[70px] left-0 z-30 bg-white/40 backdrop-blur-xl shadow-sm'
//                         : 'absolute bottom-0 left-0 bg-transparent bg-black/40 backdrop-blur-xl'} 
//                         w-full transition-all duration-300`}
//                     >
//                         <div className="max-w-7xl mx-auto text-sm">
//                             <div className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'}`}>
//                                 {availableTabs.map((tab) => (
//                                     <button
//                                         key={tab}
//                                         onClick={() => scrollToSection(tab)}
//                                         className={`whitespace-nowrap transition-colors relative 
//                                         ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'} 
//                                         ${activeSection === tab ? 'text-red-500 font-semibold border-2 rounded-full px-[25px] py-[1px] border-red-500' : ''}`}
//                                     >
//                                         {tab}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default HeaderSection;

// import React, { useEffect, useState, useRef } from 'react'
// import { useSelector } from 'react-redux';
// import { QRCode } from 'antd';
// import { Camera } from 'lucide-react';
// import { BsHeart, BsHeartFill } from 'react-icons/bs';
// import { useWishlist } from '../hooks/useWishlist';
// import ImagePreview from './ImagesPreview';
// import { Callback } from './Callback';

// export const ContactButton = () => {
//     const [step, setStep] = useState(1);
//     const { buildingDetail } = useSelector(state => state.buildings);
//     const [phoneNumber, setPhoneNumber] = useState(0);

//     useEffect(() => {
//         setPhoneNumber(buildingDetail?.contactNumber);
//     }, [buildingDetail]);

//     const handleClick = () => {
//         if (step === 1) {
//             setStep(2);
//         } else {
//             // For both step 2 and beyond, make the call
//             window.location.href = `tel:${phoneNumber.replace(/[-()\s]/g, '')}`;
//         }
//     };

//     return (
//         <div className="">
//             {step === 1 && (
//                 <button
//                     onClick={handleClick}
//                     className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
//                 >
//                     Developer contacts
//                 </button>
//             )}

//             {step === 2 && (
//                 <button
//                     onClick={handleClick}
//                     className='flex gap-4 items-center px-6 py-3 bg-black/75 text-white font-medium rounded-lg hover:bg-black transition-colors'
//                 >
//                     <QRCode
//                         value={phoneNumber}
//                         size={28}
//                         color="white"
//                         backgroundColor="transparent"
//                         bordered={false}
//                     />
//                     <span className="font-medium">{phoneNumber}</span>
//                 </button>
//             )}
//         </div>
//     );
// };

// const HeaderSection = ({ details, sectionRefs, activeSection, availableTabs }) => {
//     const [isTabsSticky, setIsTabsSticky] = useState(false);
//     const [isTitleSticky, setIsTitleSticky] = useState(false);
//     const [hasBackground, setHasBackground] = useState(false);
//     const imagePreviewRef = useRef(null);

//     // Get wishlist functionality from custom hook
//     const { isInWishlist, handleToggleWishlist } = useWishlist();

//     // Determine entity type and ID based on the details object
//     const getEntityInfo = () => {
//         if (details?.post_id) {
//             return { entityType: 'property', entityId: details.post_id };
//         } else if (details?.projectId) {
//             return { entityType: 'project', entityId: details.projectId };
//         } else if (details?.buildingId) {
//             return { entityType: 'building', entityId: details.buildingId };
//         }
//         return { entityType: 'property', entityId: null }; // Default fallback
//     };

//     const { entityType, entityId } = getEntityInfo();

//     // Check if the entity is in the wishlist
//     const isLiked = entityId ? isInWishlist(entityId, entityType) : false;

//     useEffect(() => {
//         const handleScroll = () => {
//             const headerHeight = 600;
//             const scrollPosition = window.scrollY;
//             const titleTriggerPoint = headerHeight - 150;
//             const tabsTriggerPoint = headerHeight - 64;

//             setIsTabsSticky(scrollPosition >= tabsTriggerPoint);
//             setIsTitleSticky(scrollPosition >= titleTriggerPoint);
//             setHasBackground(scrollPosition > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToSection = (sectionKey) => {
//         const sectionElement = sectionRefs[sectionKey]?.current;
//         if (sectionElement) {
//             const offset = 160;
//             const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
//             window.scrollTo({
//                 top: elementPosition - offset,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     return (
//         <header className="relative w-full h-[568px] text-white">
//             {/* Add wishlist button to the top-right corner with original styling */}
//             {entityId && (
//                 <div className="absolute top-6 right-6 z-10">
//                     <button
//                         onClick={(e) => handleToggleWishlist(e, { entityId, entityType })}
//                         className={` flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isLiked
//                                 ? 'bg-red-500/30 hover:bg-red-500/40 border border-red-500/50'
//                                 : 'bg-black/50 hover:bg-black/60 border border-white/20'
//                             }`}
//                     >
//                         {isLiked ? (
//                             <BsHeartFill className="text-red-500" size={20} />
//                         ) : (
//                             <BsHeart size={20} />
//                         )}
//                         <span>{isLiked ? 'Saved' : 'Save'}</span>
//                     </button>
//                 </div>
//             )}

//             <div
//                 className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/10' : ''}`}
//                 style={{
//                     backgroundImage: details?.galleryList?.[0]
//                         ? `url(${details.galleryList[0]})`
//                         : details?.gallery?.[0]?.images?.[0]
//                             ? `url(${details.gallery[0].images[0]})`
//                             : 'none',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div
//                     className={`absolute inset-0 transition-opacity duration-300 
//                     ${hasBackground ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100' : 'bg-gradient-to-b from-transparent to-black opacity-50'}`}
//                 />
//             </div>

//             {isTitleSticky && (
//                 <div className="fixed top-0 left-0 right-0 z-40 bg-[#007BFB] py-2 text-white">
//                     <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//                         <h1 className="text-2xl font-semibold capitalize">
//                             {details?.name}
//                         </h1>
//                         {/* Keep wishlist button in sticky header */}
//                         {entityId && (
//                             <button
//                                 onClick={(e) => handleToggleWishlist(e, { entityId, entityType })}
//                                 className=" flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
//                             >
//                                 {isLiked ? (
//                                     <BsHeartFill className="text-red-500" size={18} />
//                                 ) : (
//                                     <BsHeart size={18} />
//                                 )}
//                                 <span className="text-sm">{isLiked ? 'Saved' : 'Save'}</span>
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             )}

//             <div className={`relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''}`}>
//                 <div className={`flex items-center gap-2 mb-3 flex-wrap transition-opacity duration-300 
//                     ${isTitleSticky ? 'opacity-0' : 'opacity-100'}`}>
//                     <h1 className="capitalize text-6xl font-bold">
//                         {details?.type && `${details.type}`} {details?.name && `'${details.name}'`}
//                     </h1>
//                 </div>

//                 <div className="flex gap-2 mb-4 flex-wrap">
//                     {details?.developmentStatus && (
//                         <span className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
//                             {details.developmentStatus}
//                         </span>
//                     )}
//                 </div>

//                 <div className="flex gap-4 mb-6 flex-wrap items-center">
//                     <ContactButton />
//                     <Callback builderId={details?.builder?.id} />
//                     {/* Removed the wishlist button from here */}
//                 </div>

//                 <div className='min-h-32'>
//                     {details?.galleryList?.length > 0 && (
//                         <button
//                             className="flex items-center gap-2 px-4 py-2 mb-20 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
//                             onClick={() => imagePreviewRef.current.openGallery()}
//                         >
//                             <Camera className="w-5 h-5" />
//                             <div>
//                                 {details?.galleryList?.length || details?.gallery?.[0]?.images?.length || 0} photos
//                             </div>
//                             <ImagePreview
//                                 ref={imagePreviewRef}
//                                 images={details?.galleryList || details?.gallery?.[0]?.images || []}
//                             />
//                         </button>
//                     )}
//                 </div>

//                 {availableTabs.length > 0 && (
//                     <div className={`${isTabsSticky
//                         ? 'fixed top-[70px] left-0 z-30 bg-white/40 backdrop-blur-xl shadow-sm'
//                         : 'absolute bottom-0 left-0 bg-transparent bg-black/40 backdrop-blur-xl'} 
//                         w-full transition-all duration-300`}
//                     >
//                         <div className="max-w-7xl mx-auto text-sm">
//                             <div className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'}`}>
//                                 {availableTabs.map((tab) => (
//                                     <button
//                                         key={tab}
//                                         onClick={() => scrollToSection(tab)}
//                                         className={`whitespace-nowrap transition-colors relative 
//                                         ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'} 
//                                         ${activeSection === tab ? 'text-red-500 font-semibold border-2 rounded-full px-[25px] py-[1px] border-red-500' : ''}`}
//                                     >
//                                         {tab}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default HeaderSection;


import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { QRCode } from 'antd';
import { Camera } from 'lucide-react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useWishlist } from '../hooks/useWishlist';
import ImagePreview from './ImagesPreview';
import { Callback } from './Callback';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactButton = () => {
    const [step, setStep] = useState(1);
    const { buildingDetail } = useSelector(state => state.buildings);
    const [phoneNumber, setPhoneNumber] = useState(0);

    useEffect(() => {
        setPhoneNumber(buildingDetail?.contactNumber);
    }, [buildingDetail]);

    const handleClick = () => {
        if (step === 1) {
            setStep(2);
        } else {
            // For both step 2 and beyond, make the call
            window.location.href = `tel:${phoneNumber.replace(/[-()\s]/g, '')}`;
        }
    };

    return (
        <div className="">
            <AnimatePresence mode="wait">
                {step === 1 ? (
                    <motion.button
                        key="step1"
                        onClick={handleClick}
                        className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        Developer contacts
                    </motion.button>
                ) : (
                    <motion.button
                        key="step2"
                        onClick={handleClick}
                        className='flex gap-4 items-center px-6 py-3 bg-black/75 text-white font-medium rounded-lg hover:bg-black transition-colors'
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <QRCode
                            value={phoneNumber}
                            size={28}
                            color="white"
                            backgroundColor="transparent"
                            bordered={false}
                        />
                        <span className="font-medium">{phoneNumber}</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

const WishlistButton = ({ isLiked, onClick, className }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${className} ${isLiked
                    ? 'bg-red-500/30 hover:bg-red-500/40 border border-red-500/50'
                    : 'bg-black/50 hover:bg-black/60 border border-white/20'
                }`}
            whileTap={{ scale: 0.95 }}
            layout
        >
            <motion.div
                layout
                initial={false}
            >
                <AnimatePresence mode="wait">
                    {isLiked ? (
                        <motion.div
                            key="filled"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.5, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 15
                            }}
                        >
                            <BsHeartFill className="text-red-500" size={20} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="outline"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.5, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 15
                            }}
                        >
                            <BsHeart size={20} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <motion.span
                layout
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.1 }
                }}
            >
                {isLiked ? 'Saved' : 'Save'}
            </motion.span>
        </motion.button>
    );
};

const FloatingHearts = ({ isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div className="absolute pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            initial={{
                                scale: 0,
                                opacity: 0.8,
                                x: 0,
                                y: 0
                            }}
                            animate={{
                                scale: [0.2, 1, 0.5],
                                opacity: [0.8, 0.8, 0],
                                x: Math.random() * 100 - 50,
                                y: Math.random() * -100 - 20
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                                delay: i * 0.1
                            }}
                        >
                            <BsHeartFill className="text-red-500" size={i % 2 === 0 ? 16 : 12} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const HeaderSection = ({ details, sectionRefs, activeSection, availableTabs }) => {
    const [isTabsSticky, setIsTabsSticky] = useState(false);
    const [isTitleSticky, setIsTitleSticky] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);
    const imagePreviewRef = useRef(null);
    const [showHearts, setShowHearts] = useState(false);

    // Get wishlist functionality from custom hook
    const { isInWishlist, handleToggleWishlist } = useWishlist();

    // Determine entity type and ID based on the details object
    const getEntityInfo = () => {
        if (details?.post_id) {
            return { entityType: 'property', entityId: details.post_id };
        } else if (details?.projectId) {
            return { entityType: 'project', entityId: details.projectId };
        } else if (details?.buildingId) {
            return { entityType: 'building', entityId: details.buildingId };
        }
        return { entityType: 'property', entityId: null }; // Default fallback
    };

    const { entityType, entityId } = getEntityInfo();

    // Check if the entity is in the wishlist
    const isLiked = entityId ? isInWishlist(entityId, entityType) : false;

    // Custom wishlist toggle handler with animation
    const handleWishlistToggle = (e) => {
        if (!isLiked) {
            setShowHearts(true);
            setTimeout(() => setShowHearts(false), 1500);
        }
        handleToggleWishlist(e, { entityId, entityType });
    };

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = 600;
            const scrollPosition = window.scrollY;
            const titleTriggerPoint = headerHeight - 150;
            const tabsTriggerPoint = headerHeight - 64;

            setIsTabsSticky(scrollPosition >= tabsTriggerPoint);
            setIsTitleSticky(scrollPosition >= titleTriggerPoint);
            setHasBackground(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionKey) => {
        const sectionElement = sectionRefs[sectionKey]?.current;
        if (sectionElement) {
            const offset = 160;
            const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.header
            className="relative w-full h-[568px] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Add wishlist button to the top-right corner with animation */}
            {entityId && (
                <div className="absolute top-6 right-6 z-10">
                    <WishlistButton
                        isLiked={isLiked}
                        onClick={handleWishlistToggle}
                        className=""
                    />
                    <FloatingHearts isVisible={showHearts} />
                </div>
            )}

            <motion.div
                className="absolute inset-0"
                animate={{
                    backgroundColor: hasBackground ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)'
                }}
                transition={{ duration: 0.3 }}
                style={{
                    backgroundImage: details?.galleryList?.[0]
                        ? `url(${details.galleryList[0]})`
                        : details?.gallery?.[0]?.images?.[0]
                            ? `url(${details.gallery[0].images[0]})`
                            : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b"
                    animate={{
                        from: hasBackground ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
                        to: hasBackground ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.5)',
                        opacity: hasBackground ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            <AnimatePresence>
                {isTitleSticky && (
                    <motion.div
                        className="fixed top-0 left-0 right-0 z-40 bg-[#007BFB] py-2 text-white"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                            <motion.h1
                                className="text-2xl font-semibold capitalize"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                {details?.name}
                            </motion.h1>

                            {/* Wishlist button in sticky header */}
                            {entityId && (
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <WishlistButton
                                        isLiked={isLiked}
                                        onClick={handleWishlistToggle}
                                        className="px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 text-sm"
                                    />
                                    <FloatingHearts isVisible={showHearts} />
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className={`relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''}`}
            >
                <motion.div
                    className="flex items-center gap-2 mb-3 flex-wrap"
                    animate={{
                        opacity: isTitleSticky ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.h1
                        className="capitalize text-6xl font-bold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {details?.type && `${details.type}`} {details?.name && `'${details.name}'`}
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="flex gap-2 mb-4 flex-wrap"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {details?.developmentStatus && (
                        <motion.span
                            className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm"
                            whileHover={{ scale: 1.05 }}
                        >
                            {details.developmentStatus}
                        </motion.span>
                    )}
                </motion.div>

                <motion.div
                    className="flex gap-4 mb-6 flex-wrap items-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <ContactButton />
                    <Callback builderId={details?.builder?.id} />
                </motion.div>

                <motion.button
                    className="flex items-center gap-2 px-4 py-2 mb-20 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
                    onClick={() => imagePreviewRef.current.openGallery()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Camera className="w-5 h-5" />
                    <div>
                        {details?.galleryList?.length || details?.gallery?.[0]?.images?.length || 0} photos
                    </div>
                </motion.button>
                <ImagePreview
                    ref={imagePreviewRef}
                    images={details?.galleryList || details?.gallery?.[0]?.images || []}
                />

                {availableTabs.length > 0 && (
                    <motion.div
                        className={`${isTabsSticky
                            ? 'fixed top-[70px] left-0 z-30 bg-white/40 backdrop-blur-xl shadow-sm'
                            : 'absolute bottom-0 left-0 bg-transparent bg-black/40 backdrop-blur-xl'} 
                            w-full`}
                        animate={{
                            y: isTabsSticky ? 0 : 0,
                            backgroundColor: isTabsSticky ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="max-w-7xl mx-auto text-sm">
                            <div className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'}`}>
                                {availableTabs.map((tab) => (
                                    <motion.button
                                        key={tab}
                                        onClick={() => scrollToSection(tab)}
                                        className={`whitespace-nowrap transition-colors relative 
                                        ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'} 
                                        ${activeSection === tab ? 'text-red-500 font-semibold border-2 rounded-full px-[25px] py-[1px] border-red-500' : ''}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tab}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </motion.header>
    );
};

export default HeaderSection;