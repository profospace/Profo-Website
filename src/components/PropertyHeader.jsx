import React, { useState, useRef, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from 'antd/es/locale';
import { useDispatch } from 'react-redux';

const PropertyHeader = () => {
    const [isTitleSticky, setIsTitleSticky] = useState(false);
    const [isTabsSticky, setTabsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('Overview');
    const imagePreviewRef = useRef();

    // Dummy data
    const details = {
        type: "Apartment",
        name: "Luxury Sky Villa",
        developmentStatus: "Ready to Move",
        galleryList: [
            "https://wityysaver.s3.ap-south-1.amazonaws.com/gallery_images/bb981916-4132-45f7-af50-8aa709ee702f_8a9f0d87880b970201880be07b6919a9_84580_163684_large.jpg",
            // Add more dummy images if needed
        ],
    };

    const navigationTabs = [
        'Overview',
        'Location',
        'Amenities',
        'Floor Plans',
        'Payment Plan',
        'Similar Properties'
    ];

    const hasBackground = details?.galleryList?.length > 0;

    const scrollToSection = (section) => {
        setActiveSection(section);
    };

    // Dummy components for demonstration
    const ContactButton = () => (
        <button className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
            Contact Now
        </button>
    );

    const ConsultationModal = () => (
        <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
            Book Consultation
        </button>
    );

    const ImagePreview = React.forwardRef((props, ref) => (
        <div ref={ref}></div>
    ));

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

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                // Dispatch map feed action
                // dispatch(getHomeFeed({ latitude, longitude, radius: 10000 }));
                // dispatch(getHomeFeed());

            }
        );
    }, [dispatch]);

    return (
        <header className="relative w-full h-[580px] text-white">
            {/* Background Image & Overlay */}
            <div
                className={`absolute inset-0 transition-all duration-300 ${hasBackground ? '' : ''}`}
                style={{
                    backgroundImage: `url(${details.galleryList[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* <div
                    className={`absolute inset-0 transition-opacity duration-300 
            ${hasBackground
                            ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100'
                            : 'bg-gradient-to-b from-transparent to-black opacity-50'
                        }`}
                /> */}
            </div>

            {/* Sticky Title */}
            {isTitleSticky && (
                <div className="fixed top-0 left-0 right-0 z-40 bg-blue-600 py-2 text-white">
                    <div className="max-w-7xl mx-auto px-6 py-3">
                        <h1 className="text-2xl font-semibold capitalize">
                            {details.name}
                        </h1>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className={`relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''}`}>
                <div className={`flex items-center gap-2 mb-3 flex-wrap transition-opacity duration-300 
          ${isTitleSticky ? 'opacity-0' : 'opacity-100'}`}>
                    <h1 className="capitalize text-6xl font-bold">
                        {details.type} '{details.name}'
                    </h1>
                </div>

                <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
                        {details.developmentStatus}
                    </span>
                </div>

                <div className="flex gap-4 mb-6 flex-wrap items-center">
                    <ContactButton />
                    <ConsultationModal />
                </div>

                <button
                    className="flex items-center gap-2 px-4 py-2 mb-20 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit"
                    onClick={() => { }}
                >
                    <Camera className="w-5 h-5" />
                    <span>
                        {details.galleryList.length} photos
                    </span>
                </button>

                {/* <div
                    className={`${isTabsSticky
                        ? 'fixed top-[70px] left-0 z-30 bg-white/40 backdrop-blur-xl shadow-sm'
                        : 'absolute bottom-0 left-0 bg-transparent bg-black/40 backdrop-blur-xl'} 
          w-full transition-all duration-300`}
                >
                    <div className="max-w-7xl mx-auto text-sm">
                        <div className={`flex gap-6 px-6 py-4 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'}`}>
                            {navigationTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => scrollToSection(tab)}
                                    className={`whitespace-nowrap transition-colors relative 
                    ${isTabsSticky ? 'hover:text-red-800' : 'hover:text-red-400'} 
                    ${activeSection === tab ? 'text-red-600 font-semibold' : ''}`}
                                >
                                    {tab}
                                    {activeSection === tab && (
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div> */}
                <div className="w-full max-w-7xl my-2 mx-auto mt-10  ">
                <div className="flex justify-start flex-wrap items-center gap-2">
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
                            <div className="z-50 absolute left-0 mt-2 w-full  border bg-black/10 backdrop-blur-sm border-gray-200 rounded-md shadow-lg">
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


                    <button onClick={handleShowResults} className="px-6 py-2 bg-[#F5CA20] hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition-colors">
                        Show Results
                    </button>
                    <button className="px-4 py-2 text-white bg-[#2E7D32] rounded-md " onClick={() => handleFilter('getMapFeed')} >
                        On the map
                    </button>
                </div>
            </div>
            </div>
        </header>
    );
};

export default PropertyHeader;