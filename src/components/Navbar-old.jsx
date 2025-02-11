import React, { useEffect, useState, useRef } from 'react';
import { Menu, Heart, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { applyFilter, getAllBuildings, getAllProjects, getAllProperties, getFilterProperties, getMapFeed } from '../redux/features/Map/mapSlice';
import axios from 'axios';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    const isHomePage = location.pathname === '/';
    const [selectedId, setSelectedId] = useState(null);
    // console.log(selectedId)


    const [isSticky, setIsSticky] = useState(false);
    const navbarRef = useRef(null);
    const topNavRef = useRef(null);

    /* Top SEction */
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ["Plots", "Lands", "Apartment", "Flats", "Warehouses", "Office"];

    const [city, setCity] = useState('')
    const [isCityLoading, setIsCityLoading] = useState(true)

    // New state for Buy/Rent toggle
    const [selectedPurpose, setSelectedPurpose] = useState(null);
    // New state for price input
    const [maxPrice, setMaxPrice] = useState('');
    // New state for Buy/Rent individual toggles
    const [purposeFilters, setPurposeFilters] = useState({
        buy: false,
        rent: false
    });


    // Handle purpose selection (Buy/Rent)
    const handlePurposeSelect = (purpose) => {
        setSelectedPurpose(selectedPurpose === purpose ? null : purpose);
    };

    // Handle Show Results
    // const handleShowResults = async () => {
    //     // Prepare filters object
    //     const filters = {
    //         selects: {
    //             type_name: selectedOptions,
    //             purpose: selectedPurpose
    //         },
    //         numeric: {},
    //     };

    //     // Add purpose filters
    //     if (purposeFilters.buy) filters.purpose.purpose.push('Buy');
    //     if (purposeFilters.rent) filters.purpose.purpose.push('Rent');

    //     // Add price filter if specified
    //     if (maxPrice) {
    //         filters.numeric.price = [0, parseInt(maxPrice)];
    //     }


    //     console.log(filters)
    //     dispatch(applyFilter(filters))
    //     navigate('/main')

    // };

    // const handleShowResults = async () => {
    //     // Create a combined filter object that matches our new structure
    //     const filters = {};

    //     // Handle property types (selectedOptions)
    //     if (selectedOptions && selectedOptions.length > 0) {
    //         filters.propertyType = selectedOptions;
    //     }

    //     // Handle purpose (Buy/Rent)
    //     if (selectedPurpose) {
    //         filters.purpose = selectedPurpose.toLowerCase();
    //     }

    //     // Handle price range
    //     if (maxPrice) {
    //         filters.price = {
    //             min: 0,
    //             max: parseInt(maxPrice)
    //         };
    //     }

    //     // Add city if selected
    //     // if (city) {
    //     //     filters.city = city;
    //     // }

    //     console.log('Applied Filters:', filters);

    //     // Dispatch the filter action
    //     dispatch(applyFilter({
    //         filters: {
    //             vanilla: 'property',
    //             ...filters, // Correct use of spread syntax
    //         }
    //     }));


    //     // Navigate to results page
    //     navigate('/main');
    // };

    // Handle show results with direct filters
    const handleShowResults = async () => {
        // Create new filters object without merging
        const filters = {
            vanilla: 'property' // Identifier for property filters
        };

        // Add property types if selected
        if (selectedOptions && selectedOptions.length > 0) {
            filters.propertyType = selectedOptions;
        }

        // Add purpose if selected
        if (selectedPurpose) {
            filters.purpose = selectedPurpose.toLowerCase();
        }

        // Add price range if specified
        if (maxPrice) {
            filters.price = {
                min: 0,
                max: parseInt(maxPrice)
            };
        }

        console.log("filters", filters)
        // Dispatch new filters directly
        dispatch(applyFilter({ ...filters }));
        navigate('/main');
    };




    // Toggle selection of an option
    const toggleOption = (option) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option) // Remove if already selected
                : [...prevSelected, option] // Add if not selected
        );
    };



    // Format selected options for display
    const displayText = selectedOptions.length > 0
        ? selectedOptions.join(", ") // Show selected items
        : "Explore Filters"; // Default text


    const services = [
        { id: 1, title: 'Find Apartments', count: '782', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/4396ddc22fcd275632c522c910167b73.png', "type_name": "apartment" },
        { id: 2, title: 'Find New buildings', count: '136 695', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/1a94f43121fc8899c8a95327c26fc0ac.png', "type_name": "building" },
        { id: 3, title: 'Project', count: '16 309', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/634a00148bb1c6ed32c05713974b46b6.png', "type_name": "project" },
        { id: 4, title: "Explore Properties Nearby", count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/7410e105dea0ba239fd7f8974a7c4c95.png', "type_name": "property" },
        { id: 5, title: 'We will help to pass', count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/1d3ebf3ab1e13ceb46696a83f711461b.png', "type_name": "post_property" },
        { id: 6, title: 'EMI Calculator', count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/228dd13e77a8223bb042b59546f36646.png' },
        { id: 7, title: 'Services', count: '', icon: 'https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/e69cded9c33e3274c1f2576ebf1d06bd.png', "type_name": "services" },
    ];



    const mainLinks = [
        {

            id: 1,
            text: 'Apartments',
            href: 'apartment',
            // deepLinks: [
            //     {
            //         column1: [
            //             { text: 'Residential complexes', href: '#' },
            //             { text: 'Apartments', href: '#' },
            //             { text: 'Cottage villages', href: '#' },
            //             { text: 'Houses and cottages', href: '#' },
            //         ],
            //         column2: [
            //             { text: 'Developers directory', href: '#' },
            //             { text: 'Catalog of residential complex reviews', href: '#' },
            //             { text: 'Catalog of layouts', href: '#' },
            //             { text: 'Catalog of discounts and promotions', href: '#' },
            //         ],
            //         column3: [
            //             { text: 'Selection of new buildings', href: '#' },
            //             { text: 'Selection of LCD with YaGPT', href: '#' },
            //             { text: 'Real Estate Magazine', href: '#' },
            //             { text: 'Sample documents', href: '#' },
            //         ],
            //         promo: {
            //             title: 'NEW BUILDINGS\nFOR YOUR BUDGET',
            //             description: 'You provide your wishes, we provide suitable options',
            //             cta: 'Leave a request',
            //             bgColor: 'bg-gray-100'
            //         }
            //     }
            // ]
        },
        {
            id: 2,
            text: 'Rent',
            href: 'Rent',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id: 3,
            text: 'Buy',
            href: 'Buy',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id: 4,
            text: 'Office',
            href: 'Office',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id: 5,
            text: 'Flats',
            href: 'flats',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id: 6,
            text: 'Warehouses',
            href: 'warehouses',

        },
        {
            id: 7,
            text: 'Lands',
            href: 'lands',

        },
        {
            id: 8,
            text: 'Kheti Jameen',
            href: 'khetijameen',

        },
        {
            id: 9,
            text: 'Services',
            href: 'services',
            // deepLinks: [{
            //     column1: [
            //         { text: 'EMI Calculator', href: '#' },
            //         { text: 'Loan Offers', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Upload Property', href: '#' },
            //     ]
            // }]
        },
    ];


    // const handleFilter = (type_name, id) => {
    //     setSelectedId(id)
    //     console.log(type_name)
    //     if (!navigator.geolocation) {
    //         alert("Geolocation is not supported by your browser");
    //         return;
    //     }

    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             const { latitude, longitude } = position.coords;

    //             if (type_name === "project") {
    //                 dispatch(getAllProjects())
    //                 navigate('/main')
    //             }
    //             else if (type_name === "buildings") {
    //                 dispatch(getAllBuildings())
    //                 navigate('/main')

    //             }
    //             else if (type_name === "properties") {
    //                 dispatch(getAllProperties())
    //                 navigate('/main')
    //             }
    //             else if (type_name === 'getMapFeed') {
    //                 dispatch(getMapFeed({
    //                     latitude,
    //                     longitude,
    //                     radius: 1000
    //                 }))
    //                 navigate('/main')
    //             }
    //             else if (type_name === 'rent') {
    //                 dispatch(getFilterProperties({ latitude, longitude, purpose: type_name }));
    //                 navigate('/main')


    //             }
    //             else if (type_name === 'buy') {
    //                 dispatch(getFilterProperties({ latitude, longitude, purpose: type_name }));
    //                 navigate('/main')


    //             }
    //             else if (type_name === 'services') {
    //                 navigate('/services')
    //             }
    //             else if (type_name === 'post_property') {
    //                 navigate('/post-property-for-free')
    //             }
    //             else {
    //                 // Dispatch action with the location and type_name
    //                 dispatch(getFilterProperties({ latitude, longitude, type_name }));
    //                 navigate('/main')
    //             }


    //         },
    //         (error) => {
    //             console.error("Error retrieving location:", error);
    //             alert("Unable to retrieve your location. Please try again.");
    //         }
    //     );
    // };


    // City location fetch

    // Handle filter with direct dispatch
    const handleFilter = (type_name, id) => {
        setSelectedId(id);

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                switch (type_name) {
                    case 'project':
                    case 'building':
                    case 'property':
                        // dispatch(applyFilter({ vanilla: type_name }));
                        navigate('/main')
                        break;
                    case 'getMapFeed':
                        dispatch(applyFilter({}));
                        navigate('/main')
                        break;
                    case 'rent':
                    case 'buy':
                    case 'Buy':
                    case 'Rent':
                        dispatch(applyFilter({
                            purpose: type_name
                        }));
                        // dispatch(applyFilter({
                        //     vanilla: 'property',
                        //     purpose: type_name
                        // }));
                        break;
                    case 'services':
                        navigate('/services');
                        return;
                    case 'post_property':
                        navigate('/post-property-for-free');
                        return;
                    case 'apartment':
                        // For property type filters
                        dispatch(applyFilter({ propertyType: 'apartment' }));
                        // dispatch(applyFilter({ vanilla: 'property', propertyType: 'apartment' }));
                        navigate('/main')
                        return;
                    case 'Office':
                        // For property type filters
                        dispatch(applyFilter({ propertyType: 'Office' }));
                        // dispatch(applyFilter({ vanilla: 'property', propertyType: 'Office' }));
                        return;
                    case 'lands':
                        // For property type filters
                        dispatch(applyFilter());
                        return;
                    default:
                        dispatch(applyFilter({}))
                        navigate('/main')
                }


            },
            (error) => {
                console.error("Error retrieving location:", error);
                alert("Unable to retrieve your location. Please try again.");
            }
        );
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setIsCityLoading(true);
                // Dispatch map feed action
                // dispatch(getMapFeed({ latitude, longitude, radius: 10000 }));

                try {
                    // Use Google Maps Geocoding API to get city and state
                    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Assuming the key is stored here
                    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

                    const response = await axios.get(geocodeUrl);
                    const results = response.data.results;

                    if (results.length > 0) {
                        const addressComponents = results[0].address_components;

                        const city = addressComponents.find((component) =>
                            component.types.includes('locality')
                        )?.long_name;

                        const state = addressComponents.find((component) =>
                            component.types.includes('administrative_area_level_1')
                        )?.long_name;

                        // console.log("City:", city);
                        // console.log("State:", state);
                        setCity(city)

                        // You can dispatch another action or update the state with city and state here
                    } else {
                        console.warn("No address components found");
                    }
                } catch (error) {
                    console.error("Error fetching city and state:", error);
                } finally {
                    setIsCityLoading(false);
                }
            },
            (error) => {
                console.error("Error retrieving location:", error);
                alert("Unable to retrieve your location. Please try again.");
            }
        );
    }, [dispatch]);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (navbarRef.current) {
    //             const navbarHeight = navbarRef.current.offsetHeight;
    //             const scrollThreshold = navbarHeight * 0.5;

    //             if (window.scrollY >= scrollThreshold) {
    //                 setIsSticky(true);
    //             } else {
    //                 setIsSticky(false);
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    return (
        <>
            {/* <header
                className={`w-full navbar ${isHomePage
                    ? "bg-[url('https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242')]"
                    : "bg-white"
                    }`}
            > */}
            {/* <header
                ref={navbarRef}
                className={`w-full relative navbar ${isHomePage ? "bg-[url('https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242')] h-[90vh] " : "bg-white"}`}
            >

                <div className="absolute top-28 left-12 flex justify-center items-center">
                    <h1 className="text-[4.2rem] uppercase text-center font-extrabold bg-gradient-to-b from-white to-transparent text-transparent bg-clip-text">
                        profo{' '}
                        <span className="px-4 rounded-xl">
                            {!isCityLoading ? city : "loading..."}
                        </span>{' '}
                        City
                    </h1>
                </div> */}
            {/* <header
                ref={navbarRef}
                className={`w-full relative navbar ${isHomePage
                    ? "bg-[url('https://passionroyalcottage.com/images/banner.jpg')] bg-cover bg-center h-[100vh] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[15vh] after:bg-gradient-to-t after:from-white/100 after:via-white/30 after:to-transparent after:pointer-events-none"
                        : "bg-white"
                    }`}
                style={{
                    backgroundBlendMode: isHomePage ? 'normal' : 'unset',
                }}
            > */}
            {/* <header
                ref={navbarRef}
                className={`w-full relative navbar ${isHomePage
                        ? "bg-[url('https://passionroyalcottage.com/images/banner.jpg')] bg-cover bg-center h-[100vh] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[20vh] after:bg-gradient-to-t after:from-[rgba(0,0,0,0.7)] after:via-[rgba(0,0,0,0.3)] after:to-transparent after:backdrop-blur-sm after:pointer-events-none"
                        : "bg-white"
                    }`}
                style={{
                    backgroundBlendMode: isHomePage ? 'normal' : 'unset',
                }}
            > */}
            {/* <header
                ref={navbarRef}
                className={`w-full relative navbar ${isHomePage
                        ? "bg-[url('https://passionroyalcottage.com/images/banner.jpg')] bg-cover bg-center h-[65vh] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[20vh] after:bg-gradient-to-t after:from-[rgba(0,0,0,0.5)] after:via-[rgba(0,0,0,0.3)] after:via-[rgba(0,0,0,0.15)] after:to-transparent after:backdrop-blur-[2px] after:pointer-events-none"
                        : "bg-white"
                    }`}
                style={{
                    backgroundBlendMode: isHomePage ? 'normal' : 'unset',
                }}
            > */}

            {/* Rest of your header content remains the same */}
            {/* <div className="absolute top-12 left-0 flex justify-center items-center">
                    <h1 className="text-[5rem] uppercase text-center font-extrabold bg-gradient-to-b from-black to-transparent text-transparent bg-clip-text apply-text-shadow">
                        <span className="px-4 rounded-xl">
                            {!isCityLoading ? city : "loading..."}
                        </span>{' '}
                        City
                        
                    </h1>
                </div> */}
            {/* <header
                ref={navbarRef}
                className={`w-full navbar ${isHomePage ? "bg-[url('https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242')] h-[78vh] " : "bg-white"}`}
            > */}
            {/* Top Navigation Bar */}
            {/* <div className="max-w-7xl mx-auto px-4  "> */}
            <div
                ref={topNavRef}
                className={`max-w-7xl mx-auto px-4 ${isSticky ? 'fixed top-0 left-0 right-0 bg-white transition-all duration-300 ease-in-out z-50' : ''}`}
            >

                <div className="flex items-center justify-between h-16">
                    {/* Logo and Region Selector */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                            <img src='/assets/logo.png' className='w-10 h-10' alt="Logo" />
                            <span className="font-semibold hidden sm:inline text-2xl">PROFO</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <button className="p-2">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm flex items-center gap-2" onClick={() => navigate('/post-property-for-free')}>
                            Post property <span className='text-[10px] px-2 rounded-sm font-semibold bg-green-800 text-white'>FREE</span>
                        </button>
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm">
                            About the house
                        </button>
                        <button className="text-sm" onClick={() => navigate('/signup')}>
                            Register
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Search Bar Section */}
                <div className="w-full max-w-7xl my-2 mx-auto bg-transparent">
                    <div className="flex justify-center flex-wrap items-center gap-2">
                        {/* dropdown */}
                        <div className="relative inline-block w-64">
                            <button
                                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span className="truncate w-[85%] overflow-hidden whitespace-nowrap text-ellipsis">
                                    {displayText}
                                </span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="z-50 absolute left-0 mt-2 w-full  border border-gray-200 rounded-md shadow-lg">
                                    {options.map((option) => (
                                        <div
                                            key={option}
                                            className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 ${selectedOptions.includes(option)
                                                ? "bg-gray-200"
                                                : ""
                                                }`}
                                            onClick={() => toggleOption(option)}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedOptions.includes(option)}
                                                readOnly
                                                className="w-4 h-4"
                                            />
                                            <span>{option}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Buy / Rent Button filters */}
                        {/* <div className="flex flex-wrap gap-2">
                                    <button className="px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300">
                                        Buy
                                    </button>
                                    <button className="px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300">
                                        Rent
                                    </button>

                                </div> */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                className={`px-4 py-2 rounded-md border border-gray-300 ${selectedPurpose === 'buy' ? 'bg-black text-white' : 'text-gray-700 bg-gray-50'}`}
                                onClick={() => handlePurposeSelect('buy')}
                            >
                                Buy
                            </button>
                            <button
                                className={`px-4 py-2 rounded-md border border-gray-300 ${selectedPurpose === 'rent' ? 'bg-black text-white' : 'text-gray-700 bg-gray-50'}`}
                                onClick={() => handlePurposeSelect('rent')}
                            >
                                Rent
                            </button>
                        </div>

                        {/* Price input */}
                        {/* <div className="flex-grow">
                                    <input
                                        type="text"
                                        placeholder="Price up to, ₱"
                                        className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div> */}
                        {/* <div className="flex-grow">
                                    <input
                                        type="number"
                                        placeholder="Price up to, ₱"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div> */}

                        {/* Metro filter */}
                        {/* <button className="px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300">
                                    Metro
                                </button> */}


                        {/* Show results button */}
                        <button onClick={handleShowResults} className="px-6 py-2 bg-[#F5CA20] hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition-colors">
                            Show Results
                        </button>
                        {/* Map toggle */}
                        <button className="px-4 py-2 text-white bg-[#2E7D32] rounded-md " onClick={() => handleFilter('getMapFeed')} >
                            On the map
                        </button>
                    </div>
                </div>

                <div className='w-full h-full px-16 mt-6'>
                    <img src='https://avatars.mds.yandex.net/get-verba/216201/2a00000193abde37fd3f35e4c7b04d9b6efe/realty_large_1242' className='w-[100vw] max-h-[50vh]   object-[25% 85%]  rounded-3xl' />
                </div>

                {/* Main Navigation with Dropdowns - Hidden on Homepage */}
                {!isHomePage && (
                    <nav className="hidden lg:block py-2">
                        <ul className="flex space-x-8">
                            {mainLinks.map((link, index) => (
                                <li key={index} className="relative group">
                                    <p
                                        onClick={() => handleFilter(link.href, link?.id)}
                                        className={`text-sm ${link?.id == selectedId ? 'text-red-500 border-b-2 border-red-500' : 'text-black'} hover:text-red-500 pb-1 cursor-pointer`}
                                    >
                                        {link.text}
                                    </p>
                                    {link.deepLinks?.length > 0 && (
                                        <div className="absolute left-0 top-full mt-1 w-[900px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="flex p-6">
                                                <div className="flex-1 grid grid-cols-3 gap-8">
                                                    {link.deepLinks[0].column1 && (
                                                        <div className="space-y-4">
                                                            {link.deepLinks[0].column1.map((item, idx) => (
                                                                <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
                                                                    {item.text}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {link.deepLinks[0].column2 && (
                                                        <div className="space-y-4">
                                                            {link.deepLinks[0].column2.map((item, idx) => (
                                                                <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
                                                                    {item.text}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {link.deepLinks[0].column3 && (
                                                        <div className="space-y-4">
                                                            {link.deepLinks[0].column3.map((item, idx) => (
                                                                <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
                                                                    {item.text}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                {link.deepLinks[0].promo && (
                                                    <div className={`w-72 ${link.deepLinks[0].promo.bgColor} rounded-lg p-6 ml-6`}>
                                                        <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
                                                            {link.deepLinks[0].promo.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mb-4">
                                                            {link.deepLinks[0].promo.description}
                                                        </p>
                                                        <button className="text-sm font-medium hover:underline">
                                                            {link.deepLinks[0].promo.cta}
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                            <li>
                                <span className='text-blue-600 font-bold text-md cursor-pointer' onClick={() => handleFilter('project')}>New Projects</span>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20 overflow-y-auto">
                        <div className="px-4 py-2">
                            {!isHomePage && (
                                <ul className="space-y-4">
                                    {mainLinks.map((link, index) => (
                                        <li key={index} className="relative group">
                                            <p
                                                onClick={() => handleFilter(link.href, link?.id)}
                                                className={`text-sm cursor-pointer ${link?.id === selectedId ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'} hover:text-red-500 pb-1`}
                                            >
                                                {link.text}
                                            </p>
                                            {link.deepLinks?.[0].column1 && (
                                                <ul className="ml-4 space-y-2">
                                                    {[
                                                        ...(link.deepLinks[0].column1 || []),
                                                        ...(link.deepLinks[0].column2 || []),
                                                        ...(link.deepLinks[0].column3 || [])
                                                    ].map((item, idx) => (
                                                        <li key={idx}>
                                                            <a href={item.href} className="text-sm text-gray-600">
                                                                {item.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                    <li>
                                        <span className='text-blue-600 font-bold text-lg'>New Projects</span>
                                    </li>
                                </ul>
                            )}

                            <div className="mt-8 space-y-4">
                                <button className="w-full px-4 py-2 bg-gray-100 rounded-lg">
                                    Place an ad
                                </button>
                                <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg">
                                    About the house
                                </button>
                                <button className="w-full px-4 py-2 text-center" onClick={() => navigate('/signup')}>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            {/* Main Section */}
            {/* {
                isHomePage && <div className='shadow-[4px_4px_3px_rgba(1,1,1,0.1)] left-[20%] bg-white rounded-full max-w-7xl mx-auto p-5 px-16 z-50'> */}
            {/* <h1 className="text-5xl font-bold my-1 text-center uppercase ">REAL ESTATE IN {!isCityLoading ? city + ' CITY' : "loading..."} </h1> */}
            {/* <div className="relative flex justify-center items-center mb-6 ">
                            <h1 className="text-4xl text-center text-black">
                                Real estate in <span className='bg-[#FF9B86] px-4 rounded-xl'>{!isCityLoading ? city : "loading..."}</span> City
                            </h1>
                        </div> */}



            {/* </div>
            } */}

            {/* </header> */}
            {/* Top Section having direct filters  */}
            <div className={`max-w-7xl mx-auto ${isHomePage && 'pt-2 mt-12'}`}>
                {/* Services Section */}
                {
                    isHomePage && <div className="mb-8">
                        {/* <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-xl px-9">Frequently searched</h2> */}
                        {/* <div className="flex items-center gap-2">
                          <span>Services</span>
                          <span className="border border-black rounded px-2 py-1 text-sm">ПОД КЛЮЧ</span>
                      </div>
                      <span className="ml-auto">About the house</span>
                      <span>Partner</span> */}
                        {/* </div> */}

                        {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7"> */}
                        <div className="flex justify-evenly">
                            {services?.map((service) => (
                                <div key={service.id}>
                                    <div

                                        className="bg-[#F3F3F6] rounded-xl shadow-sm cursor-pointer w-32 h-auto overflow-hidden "
                                        onClick={() => handleFilter(service?.type_name)}
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
                }
            </div>
        </>
    );
};

export default Header;