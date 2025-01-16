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
import React from 'react';
import SearchHeader from '../components/SearchHeader';
import PropertyTypeInCarousal from '../components/PropertyTypeInCarousal';
import SearchBar from '../components/SearchBar';
import FeaturesGrid from '../components/FeaturesGrid';
import WhyChooseOfoSpace from '../components/WhyChooseOfoSpace';
import PropertyCard from '../components/PropertyCard';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import CouldntFind from '../components/CouldntFind';
import AppDownload from '../components/AppDownload';

const Home = () => {
    const navigate = useNavigate();
    const { properties } = useSelector((state) => state.properties);

    return (
        <div className="w-full min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full lg:min-h-screen h-[50vh] bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Background Image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60">
                    <img
                        src="/assets/bg-home.svg"
                        alt="City buildings background"
                        className="w-full h-full object-cover opacity-50 sm:opacity-30 "
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center py-2 px-0 sm:px-6 lg:px-8">
                    <div className="text-center max-w-7xl mx-auto">
                        <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[5.8rem] font-bold leading-[2.9rem] transition-all duration-300 animate-slide-up">
                            Search Property
                        </h1>
                        <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[5.8rem] font-bold leading-[2.9rem]  transition-all duration-300 animate-slide-up-delay">
                            On Map
                        </h1>
                        <div className="relative inline-block">
                            <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[5.8rem] font-bold leading-[2.9rem]  transition-all duration-300 animate-slide-up-delay-2">
                                Directly
                                <img
                                    src="/assets/map.png"
                                    alt="Map Icon"
                                    className="absolute -right-16 sm:-right-20 md:-right-28 lg:-right-32 top-1/2 transform -translate-y-1/2 w-20 sm:w-16 md:w-32 lg:w-40 transition-all duration-300"
                                />
                            </h1>
                        </div>
                        <p className="mt-6 text-sm sm:text-base lg:text-xl font-light max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
                            Fully furnished, designer homes with no brokerage, low deposits, and zero hassle. Just bring
                            your clothes & you're all set.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/all-in-one-page')}
                                className="see-all-button mt-12 text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                See All Properties
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    {/* <div className="mt-4 sm:mt-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-0">
                        <SearchBar />
                    </div> */}
                </div>
            </div>

            {/* Properties Section */}
            {/* <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-6 sm:gap-8 property-grid">
                        {properties?.slice(0, 6).map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-16">
                        <button
                            onClick={() => navigate('/properties')}
                            className="see-all-button text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            See All Properties
                        </button>
                    </div>
                </div>
            </div> */}

            {/* Property Type Section */}
            {/* <section className="py-12 sm:py-16">
                <PropertyTypeInCarousal />
            </section> */}

            {/* Features Section */}
            <section className="py-6 bg-gray-50">
                <FeaturesGrid />
            </section>

            {/* Why Choose Section */}
            <section className="py-6">
                <WhyChooseOfoSpace />
            </section>

            {/* Contact Us If not found found what you lookking for */}
            <section className="container mx-auto px-2 py-4">
                <CouldntFind />
            </section>
            <section className="py-6">
                <AppDownload />
            </section>

        </div>
    );
};

export default Home;