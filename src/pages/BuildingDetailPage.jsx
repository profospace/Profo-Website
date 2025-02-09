import React, { useState, useEffect, useRef } from 'react'
import EMICalculator from '../components/EMIcalculator';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleBuilding } from '../redux/features/Buildings/buildingsSlice';
import PropertyCard from '../components/PropertyCard';
import PropertyListing from '../components/PropertyListingAccordion';
import BuildingContactCard from '../components/BuildingContactCard';
import BuildingLCDParameters from '../components/BuildingLCDParameters';
import GalleryList from '../components/GalleryList';
import AskDeveloper from '../components/AskDeveloper';
import LocationLatLngMap from '../components/LocationLatLngMap';
import HeaderSection from '../components/HeaderSection';
import HeadingCommon from '../components/HeadingCommon';
import BuildingViewer from '../components/BuildingViewer';

function BuildingDetailPage() {
    const [isTabsSticky, setIsTabsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const { buildingId } = useParams();
    const dispatch = useDispatch();
    const { buildingDetail } = useSelector(state => state.buildings)

    console.log(buildingDetail)

    // Calculate min and max prices from connected properties
    const prices = buildingDetail?.connectedProperties?.map(property => property.price) || [];
    const minPrice = Math.min(...prices.filter(price => price > 0));
    const maxPrice = Math.max(...prices);

    // Format price in Indian currency format (lakhs and crores)
    const formatIndianPrice = (price) => {
        if (!price) return "0";

        // Convert to string and handle decimals
        const priceStr = Math.floor(price).toString();

        // Handle numbers less than 1000
        if (priceStr.length <= 3) return priceStr;

        // Handle numbers >= 1000
        const lastThree = priceStr.substring(priceStr.length - 3);
        const otherNumbers = priceStr.substring(0, priceStr.length - 3);
        const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;

        // Add ₹ symbol and determine if in lakhs or crores
        if (price >= 10000000) { // ≥ 1 crore
            const crores = (price / 10000000).toFixed(2);
            return `₹${crores} Cr`;
        } else if (price >= 100000) { // ≥ 1 lakh
            const lakhs = (price / 100000).toFixed(2);
            return `₹${lakhs} L`;
        } else {
            return `₹${formatted}`;
        }
    };

    // Calculate price per square foot
    const calculatePricePerSqFt = () => {
        const pricesPerSqFt = buildingDetail?.connectedProperties?.map(property => {
            if (property.price && property.area) {
                return Math.round(property.price / property.area);
            }
            return 0;
        }).filter(price => price > 0) || [];

        return {
            min: Math.min(...pricesPerSqFt),
            max: Math.max(...pricesPerSqFt)
        };
    };

    // Format price per square foot
    const formatPricePerSqFt = (price) => {
        if (!price) return "0";
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const pricePerSqFt = calculatePricePerSqFt();


    //1.a Create refs for each section
    const sectionRefs = {
        'Description': useRef(null),
        'LeaveARequest': useRef(null),
        'PropertyListing': useRef(null),
        'Map': useRef(null),
        'EmiCalculator': useRef(null),
        'Gallery': useRef(null),
        'AskTheDeveloper': useRef(null),
        'ConnectedProperties': useRef(null)
    };

    // 1.b
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const offset = 200; // Adjust based on your header height

            // Find the section currently in view
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

    useEffect(() => {
        dispatch(getSingleBuilding(buildingId));
    }, [buildingId, dispatch]);
    useEffect(() => {
        dispatch(getSingleBuilding(buildingId));
    }, [buildingId, dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = 600;
            const scrollPosition = window.scrollY;
            setIsTabsSticky(scrollPosition >= headerHeight - 64);
            setHasBackground(scrollPosition > 50); // Add background after 50px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (


        <div className="min-h-screen">
            {/* Main Layout Container */}
            <div className="relative">
                {/* Header Section */}
                <HeaderSection details={buildingDetail} sectionRefs={sectionRefs} activeSection={activeSection} />

                {/* Add spacer div to prevent content jump */}
                {isTabsSticky && <div className="h-[64px]" />}

                

                {/* Content Grid Layout */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                        {/* Main Content Area */}
                        <main className="lg:col-span-8">
                            <div className="">
                                <div ref={sectionRefs['Description']}>
                                    <BuildingLCDParameters />
                                </div>

                                <BuildingViewer id={buildingDetail?.buildingId} viewer="Building" />

                                {/* Request Section */}
                                <div ref={sectionRefs['LeaveARequest']} className='container'>
                                    <div className="bg-gray-100 rounded-3xl overflow-hidden">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-6">
                                                <div className="flex items-center space-x-2">
                                                    <div className="bg-black rounded-full p-2">
                                                        <span className="text-white text-xl">Я</span>
                                                    </div>
                                                    <span className="font-medium text-lg">Недвижимость</span>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-2xl font-bold inline-block">
                                                            NEW BUILDINGS
                                                        </span>
                                                    </div>
                                                    <h2 className="text-4xl font-bold leading-tight text-gray-800">
                                                        TO SUIT YOUR BUDGET
                                                    </h2>
                                                    <p className="text-gray-600 text-lg">
                                                        You provide your wishes, we provide suitable options
                                                    </p>
                                                    <button className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 hover:text-white transition-colors">
                                                        Leave a request
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:w-1/2">
                                                <div className="h-full relative">
                                                    <img
                                                        src="https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/2ecf084f93f58492379e90f0f65258f1.png"
                                                        alt="Cozy living room"
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-brown-300/20 to-transparent" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Accordian Section  */}
                                <div ref={sectionRefs['PropertyListing']}>
                                    <PropertyListing />
                                </div>

                                <div ref={sectionRefs['Map']}>
                                    {/* Location - Map */}
                                    <LocationLatLngMap latitude={buildingDetail?.location?.coordinates?.[1]} longitude={buildingDetail?.location?.coordinates?.[0]} />
                                </div>

                                <div className="container" ref={sectionRefs['EmiCalculator']}>
                                    <EMICalculator />
                                </div>

                                <div ref={sectionRefs['Gallery']}>
                                    <GalleryList images={buildingDetail?.galleryList} />
                                </div>

                                <div ref={sectionRefs['AskTheDeveloper']}>
                                    <AskDeveloper />
                                </div>


                            </div>

                        </main>

                        {/* Sidebar with Contact Card */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-28">
                                <BuildingContactCard info={buildingDetail} />
                            </div>
                        </aside>
                    </div>
                    {/* Display Connected Properties */}
                    <div className="container" ref={sectionRefs['ConnectedProperties']}>
                        {/* <h1 className="text-xl font-semibold mb-4">Connected Properties</h1> */}
                        <HeadingCommon title='Connected Properties' dual="true" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {buildingDetail?.connectedProperties?.length > 0 &&
                                buildingDetail?.connectedProperties?.map((property, index) => (
                                    <PropertyCard key={index} property={property} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingDetailPage