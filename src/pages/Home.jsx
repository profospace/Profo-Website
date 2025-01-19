// import React from 'react';
// import SearchHeader from '../components/SearchHeader';
// import PropertyTypeInCarousal from '../components/PropertyTypeInCarousal';
// import SearchBar from '../components/SearchBar';
// import FeaturesGrid from '../components/FeaturesGrid';
// import WhyChooseOfoSpace from '../components/WhyChooseOfoSpace';
// import PropertyCard from '../components/PropertyCard';
// import { useSelector } from 'react-redux';
// import { Navigate, useNavigate } from 'react-router-dom';

// function Home() {
//     const navigate = useNavigate()
//     const {properties} = useSelector((state) => state.properties);
//     console.log("obj",properties)

//     return (
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//             {/* Hero Section */}
//             <div className="relative w-full h-screen bg-white overflow-hidden">
//                 {/* Background Image */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-60 animate-fade-in">
//                     <img
//                         src="/assets/bg-home.svg"
//                         alt="City buildings background"
//                         className="w-full h-auto object-contain opacity-20"
//                     />
//                 </div>

//                 {/* Content Overlay */}
//                 <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
//                     <div className="text-center">
//                         <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-bold leading-none animate-slide-up">
//                             Search Property
//                         </h1>
//                         <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-bold leading-none animate-slide-up-delay">
//                             On Map
//                         </h1>
//                         <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-bold leading-none flex justify-center animate-slide-up-delay-2 relative">
//                             Directly
//                             <img
//                                 src="/assets/map.png"
//                                 alt="Map Icon"
//                                 className="absolute right-20 w-20 h-auto lg:w-36"
//                             />
//                         </h1>
//                         <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-light text-center">
//                             Fully furnished, designer homes with no brokerage, low deposits, and zero hassle. Just bring
//                             your clothes & you're all set.
//                         </p>
//                     </div>

//                     {/* Search Bar Button */}
//                     <div className="mt-4 table mx-auto">
//                         <button className="px-8 py-3 text-white rounded-full text-lg font-medium transition-colors duration-300">
//                             <SearchBar />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* displaying Some Properties  */}
//             <div className="relative px-4 md:px-6 py-12">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid property-grid gap-6">
//                         {/* {properties?.map(property => (
//                             <PropertyCard key={property._id} property={property} />
//                         ))} */}
//                         {properties?.slice(0, 6).map((property) => (
//                             <PropertyCard key={property._id} property={property} />
//                         ))}
//                     </div>

//                     {/* See All Properties Button */}
//                     <div className="flex justify-center relative z-10 mt-8">
//                         <button className="see-all-button text-white px-8 py-3 rounded-full font-medium text-lg transition-all hover:scale-105" onClick={()=>navigate('/properties')}>
//                             See All Properties
//                         </button>
//                     </div>
//                 </div>
//             </div>


//             {/* Property Type Section */}
//             <div className="mt-6">
//                 <PropertyTypeInCarousal />
//             </div>

//             {/* What Makes Us Different? */}
//             <div className="mt-6">
//                 <FeaturesGrid />
//             </div>

//             {/* Why Choose PROFO? */}
//             <div className="mt-6">
//                 <WhyChooseOfoSpace />
//             </div>
//         </div>
//     );
// }

// export default Home;
// import React from 'react';
// import SearchHeader from '../components/SearchHeader';
// import PropertyTypeInCarousal from '../components/PropertyTypeInCarousal';
// import SearchBar from '../components/SearchBar';
// import FeaturesGrid from '../components/FeaturesGrid';
// import WhyChooseOfoSpace from '../components/WhyChooseOfoSpace';
// import PropertyCard from '../components/PropertyCard';
// import { useSelector } from 'react-redux';
// import { Navigate, useNavigate } from 'react-router-dom';
// import CouldntFind from '../components/CouldntFind';
// import AppDownload from '../components/AppDownload';

// const Home = () => {
//     const navigate = useNavigate();
//     const { properties } = useSelector((state) => state.properties);

//     return (
//         <div className="w-full min-h-screen">
//             {/* Hero Section */}
//             <div className="relative w-full lg:min-h-screen h-[50vh] bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
//                 {/* Background Image */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-60">
//                     <img
//                         src="/assets/bg-home.svg"
//                         alt="City buildings background"
//                         className="w-full h-full object-cover opacity-50 sm:opacity-30 "
//                     />
//                 </div>

//                 {/* Content Overlay */}
//                 <div className="relative z-10 flex flex-col items-center justify-center py-2 px-0 sm:px-6 lg:px-8">
//                     <div className="text-center max-w-7xl mx-auto">
//                         <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[5.8rem] font-bold leading-[2.9rem] transition-all duration-300 animate-slide-up">
//                             Search Property
//                         </h1>
//                         <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[5.8rem] font-bold leading-[2.9rem]  transition-all duration-300 animate-slide-up-delay">
//                             On Map
//                         </h1>
//                         <div className="relative inline-block">
//                             <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[5.8rem] font-bold leading-[2.9rem]  transition-all duration-300 animate-slide-up-delay-2">
//                                 Directly
//                                 <img
//                                     src="/assets/map.png"
//                                     alt="Map Icon"
//                                     className="absolute -right-16 sm:-right-20 md:-right-28 lg:-right-32 top-1/2 transform -translate-y-1/2 w-20 sm:w-16 md:w-32 lg:w-40 transition-all duration-300"
//                                 />
//                             </h1>
//                         </div>
//                         <p className="mt-6 text-sm sm:text-base lg:text-xl font-light max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
//                             Fully furnished, designer homes with no brokerage, low deposits, and zero hassle. Just bring
//                             your clothes & you're all set.
//                         </p>
//                         <div className="flex justify-center">
//                             <button
//                                 onClick={() => navigate('/all-in-one-page')}
//                                 className="see-all-button mt-12 text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                             >
//                                 See All Properties
//                             </button>
//                         </div>
//                     </div>

//                     {/* Search Bar */}
//                     {/* <div className="mt-4 sm:mt-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-0">
//                         <SearchBar />
//                     </div> */}
//                 </div>
//             </div>

//             {/* Properties Section */}
//             {/* <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid gap-6 sm:gap-8 property-grid">
//                         {properties?.slice(0, 6).map((property) => (
//                             <PropertyCard key={property._id} property={property} />
//                         ))}
//                     </div>

//                     <div className="flex justify-center mt-16">
//                         <button
//                             onClick={() => navigate('/properties')}
//                             className="see-all-button text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                         >
//                             See All Properties
//                         </button>
//                     </div>
//                 </div>
//             </div> */}

//             {/* Property Type Section */}
//             {/* <section className="py-12 sm:py-16">
//                 <PropertyTypeInCarousal />
//             </section> */}

//             {/* Features Section */}
//             <section className="py-6 bg-gray-50">
//                 <FeaturesGrid />
//             </section>

//             {/* Why Choose Section */}
//             <section className="py-6">
//                 <WhyChooseOfoSpace />
//             </section>

//             {/* Contact Us If not found found what you lookking for */}
//             <section className="container mx-auto px-2 py-4">
//                 <CouldntFind />
//             </section>
//             <section className="py-6">
//                 <AppDownload />
//             </section>

//         </div>
//     );
// };

// export default Home;


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomePageCard from '../components/HomePageCard';
import { MdNavigateNext } from 'react-icons/md';
import FlexibleLayout from '../components/FlexibleLayout';
import AppDownloadBanner from '../components/AppDownloadBanner';

function Home() {
    const filters = ['Studio', 'eleven', '2', '3', '4+'];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { buildings } = useSelector(state => state.buildings)

    console.log("buildings", buildings)


    const services = [
        { id: 1, title: 'Find Apartments', count: '782', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/4396ddc22fcd275632c522c910167b73.png' },
        { id: 2, title: 'Find New buildings', count: '136 695', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/1a94f43121fc8899c8a95327c26fc0ac.png' },
        { id: 3, title: 'Project', count: '16 309', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/634a00148bb1c6ed32c05713974b46b6.png' },
        { id: 4, title: "Explore Properties Nearby", count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/7410e105dea0ba239fd7f8974a7c4c95.png' },
        { id: 5, title: 'We will help to pass', count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/1d3ebf3ab1e13ceb46696a83f711461b.png' },
        { id: 6, title: 'EMI Calculator', count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png' },
        { id: 7, title: 'Services', count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/e69cded9c33e3274c1f2576ebf1d06bd.png' },
    ];

    const properties = [
        {
            image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
            name: "Eco Bunino",
            price: 6195246,
            metro: "Alder",
            metroLineColor: "bg-red-500",
            walkTime: 21,
            label: "самолет"
        },
        {
            image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
            name: "JOIS",
            price: 15745064,
            metro: "Khoroshevo",
            metroLineColor: "bg-purple-500",
            walkTime: 8
        },
        {
            image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
            name: "Lucky",
            price: 103162496,
            metro: "Street of 1905",
            metroLineColor: "bg-purple-500",
            walkTime: 7
        },
        {
            image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
            name: "Troparevo Park",
            price: 6040224,
            metro: "Rumyantsevo",
            metroLineColor: "bg-red-500",
            walkTime: 13,
            label: "самолет"
        },
        {
            image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
            name: "Ever",
            price: 17904912,
            metro: "Vorontsovskaya",
            metroLineColor: "bg-yellow-500",
            walkTime: 9
        },
        {
            image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
            name: "Lavrushinsky",
            price: 151450000,
            metro: "Tretyakovskaya",
            metroLineColor: "bg-yellow-500",
            walkTime: 6
        }
    ];
    return (
        <div className='mt-12 px-8'>
            {/* Top Section */}
            <div className="max-w-7xl mx-auto py-4">
                <h1 className="text-4xl font-bold mb-1 text-center">REAL ESTATE IN MOSCOW AND MOSCOW REGION</h1>

                {/* Search Bar Section */}
                <div className="w-full max-w-7xl mx-auto mb-12">
                    <div className="flex flex-wrap items-center gap-2 py-6">
                        {/* New buildings dropdown */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span>New buildings</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Room filters */}
                        <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                Studio
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                1
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                2
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                3
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200 bg-gray-50">
                                4+
                            </button>
                        </div>

                        {/* Price input */}
                        <div className="flex-grow">
                            <input
                                type="text"
                                placeholder="Price up to, ₱"
                                className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Metro filter */}
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                            Metro
                        </button>

                        {/* Map toggle */}
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                            On the map
                        </button>

                        {/* Show results button */}
                        <button className="px-6 py-2 bg-[#F5CA20] hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition-colors">
                            Show 782 new buildings
                        </button>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-xl">Frequently searched</h2>
                        {/* <div className="flex items-center gap-2">
                          <span>Services</span>
                          <span className="border border-black rounded px-2 py-1 text-sm">ПОД КЛЮЧ</span>
                      </div>
                      <span className="ml-auto">About the house</span>
                      <span>Partner</span> */}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                        {services.map((service) => (
                            <div>
                                <div
                                    key={service.id}
                                    className="bg-[#F3F3F6] rounded-xl shadow-sm cursor-pointer w-32 h-auto overflow-hidden "
                                >
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className=" rounded scale-150 hover:scale-150 transition-all ease-in-out duration-150 cover "
                                    />
                                </div>
                                <div className="text-xs flex justify-start mt-2 ">
                                    <p className='font-semibold'>{service.title}</p>
                                    {/* {service.count && (
                                      <p className="text-gray-500">.{service.count}</p>
                                  )} */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* New Buildings */}
            {/* <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center mb-6 gap-2">
                    <h2 className="text-2xl font-bold">New buildings </h2>
                    <div><MdNavigateNext size={32} /></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {properties?.map((property, index) => (
                                <HomePageCard key={index} property={property} />
                            ))}
                        </div>
                    </div>


                    
                    <div className="lg:w-1/4 ">
                        <div className="bg-[#F3F3F6] rounded-lg p-6 sticky top-24">
                            <h3 className="text-2xl font-bold mb-2">START OF SALES</h3>
                            <p className="text-gray-700 text-md">
                                Sales of properties in these buildings have just begun.
                                Apartments at favorable prices and discounts for the first buyers
                            </p>
                            <button className="w-full bg-gray-900 text-white rounded-lg py-3 mt-64 hover:bg-gray-800 transition-colors">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <FlexibleLayout details={properties} />
            <FlexibleLayout details={properties} salesAdsPosition="left" headingText="New Properties" />
            <FlexibleLayout details={properties} />

            <AppDownloadBanner />

        </div>
    )
}

export default Home