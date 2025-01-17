import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { X, ChevronDown, Check } from 'lucide-react';
import { QRCode } from 'antd';
import { Heart, Camera } from 'lucide-react';

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
        <div className="flex flex-col items-start">
            {step === 1 && (
                <button
                    onClick={handleClick}
                    className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                >
                    Developer contacts
                </button>
            )}

            {step === 2 && (
                <button
                    onClick={handleClick}
                    className="flex items-center gap-4 pl-4 pr-7 py-0 bg-black/75 text-white rounded-lg hover:bg-black/80 transition-colors"
                >
                    <QRCode
                        value={phoneNumber}
                        size={56}
                        color="white"
                        backgroundColor="transparent"
                        bordered="false"
                    />
                    <span className="font-medium">{phoneNumber}</span>
                </button>
            )}
        </div>
    );
};

export const ConsultationModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('As soon as possible');
    const [phoneNumber, setPhoneNumber] = useState('');

    // // Generate time slots for today and tomorrow
    // const generateTimeSlots = () => {
    //     const slots = ['As soon as possible'];
    //     const intervals = [];

    //     // Today's slots
    //     for (let hour = 0; hour < 24; hour++) {
    //         for (let minute = 0; minute < 60; minute += 30) {
    //             const startTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    //             const endHour = minute === 30 ? hour : hour + 1;
    //             const endMinute = minute === 30 ? '00' : '30';
    //             const endTime = `${String(endHour % 24).padStart(2, '0')}:${endMinute}`;
    //             intervals.push(`${startTime} – ${endTime}`);
    //         }
    //     }

    //     // Add today's slots
    //     const todaySlots = intervals.slice(0, 24); // First 12 hours
    //     todaySlots.forEach(slot => slots.push(slot));

    //     // Add tomorrow's slots
    //     const tomorrowSlots = intervals.slice(0, 24); // First 12 hours
    //     tomorrowSlots.forEach(slot => slots.push(`Tomorrow ${slot}`));

    //     // Add day after tomorrow slots
    //     const dayAfterSlots = intervals.slice(0, 24); // Remaining slots up to 48 hours
    //     const dayAfter = new Date();
    //     dayAfter.setDate(dayAfter.getDate() + 2);
    //     const dayAfterStr = dayAfter.toLocaleDateString('en-US', { weekday: 'long' });
    //     dayAfterSlots.forEach(slot => slots.push(`${dayAfterStr} ${slot}`));

    //     return slots;
    // };

    const generateTimeSlots = () => {
        const slots = ['As soon as possible'];
        const intervals = [];

        // Function to format time in 12-hour AM/PM format
        const formatTime = (hour, minute) => {
            const period = hour >= 12 ? 'PM' : 'AM';
            const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
            const formattedMinute = String(minute).padStart(2, '0');
            return `${formattedHour}:${formattedMinute} ${period}`;
        };

        // Generate intervals for 24 hours in 30-minute increments
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const startTime = formatTime(hour, minute);
                const endHour = minute === 30 ? hour + 1 : hour;
                const endMinute = minute === 30 ? 0 : 30;
                const endTime = formatTime(endHour % 24, endMinute);
                intervals.push(`${startTime} – ${endTime}`);
            }
        }

        // Add today's slots
        const todaySlots = intervals.slice(0, 24); // First 12 hours
        todaySlots.forEach(slot => slots.push(slot));

        // Add tomorrow's slots
        const tomorrowSlots = intervals.slice(0, 24); // First 12 hours
        tomorrowSlots.forEach(slot => slots.push(`Tomorrow ${slot}`));

        // Add day after tomorrow slots
        const dayAfterSlots = intervals.slice(0, 24); // Remaining slots up to 48 hours
        const dayAfter = new Date();
        dayAfter.setDate(dayAfter.getDate() + 2);
        const dayAfterStr = dayAfter.toLocaleDateString('en-US', { weekday: 'long' });
        dayAfterSlots.forEach(slot => slots.push(`${dayAfterStr} ${slot}`));

        return slots;
    };


    const timeSlots = generateTimeSlots();

    const toggleModal = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const selectTime = (time) => {
        setSelectedTime(time);
        setIsDropdownOpen(false);
    };

    return (
        <div className="font-sans">
            {/* Trigger Button */}
            <button
                onClick={toggleModal}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg transition-colors"
            >
                Callback
            </button>

            {/* Modal Overlay */}
            <div
                className={`text-black fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleModal}
            >
                {/* Modal Content */}
                <div
                    className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 w-full max-w-md transition-all duration-300 ${isOpen
                        ? 'opacity-100 scale-100 translate-y-[-50%]'
                        : 'opacity-0 scale-95 translate-y-[-45%]'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={toggleModal}
                        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                Consultation from the developer
                            </h2>
                            <p className="text-gray-600">
                                Company specialist «Group «Aircraft »» will talk about discounts and promotions, apartments in the presence of mortgage programs
                            </p>
                        </div>

                        {/* Form */}
                        <div className="space-y-4">
                            {/* Custom Dropdown */}
                            <div className="relative">
                                <label className="block text-sm text-gray-500 mb-1">
                                    Call time
                                </label>
                                <button
                                    type="button"
                                    onClick={toggleDropdown}
                                    className="w-full p-4 bg-gray-50 rounded-lg text-left flex items-center justify-between border border-gray-200 focus:outline-none focus:border-yellow-400"
                                >
                                    <span>{selectedTime}</span>
                                    <ChevronDown
                                        className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${isDropdownOpen
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="max-h-60 overflow-y-auto">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => selectTime(time)}
                                                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between group"
                                            >
                                                <span className="truncate">{time}</span>
                                                {selectedTime === time && (
                                                    <Check className="text-yellow-500 flex-shrink-0 ml-2" size={20} />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Phone input */}
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            {/* Submit button */}
                            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-4 rounded-lg transition-colors">
                                Call me
                            </button>

                            {/* Consent text */}
                            <p className="text-sm text-gray-500">
                                By sending an application, you give your{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    consent
                                </a>{' '}
                                for the processing of personal data
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
function HeaderSection({ details }) {
    const [isTabsSticky, setIsTabsSticky] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);
    // Mock data - in real app would come from props
    const building = {
        name: "Residential complex \"Eco Bunino\"",
        rating: 4.7,
        priceRange: {
            min: "5 654 985",
            max: "20 935 632",
        },
        pricePerMeter: {
            min: "160.54",
            max: "466.49"
        },
        location: "Alder",
        transportTime: "21",
        totalRatings: 3670,
        photos: 26
    };

    
    // Calculate min and max prices from connected properties
    const prices = details?.connectedProperties?.map(property => property.price) || [];
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
        const pricesPerSqFt = details?.connectedProperties?.map(property => {
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

    const navigationTabs = [
        'Mortgage',
        'Apartments',
        'Discounts and promotions',
        'Description',
        'Infrastructure',
        'Construction progress',
    ];
  return (
      <header className="relative w-full h-[600px] text-white">
          <div
              className={`absolute inset-0 transition-all duration-300 ${hasBackground ? 'bg-black/70' : ''
                  }`}
              style={{
                  backgroundImage: 'url(https://avatars.mds.yandex.net/get-verba/1672712/2a000001938b26cdc34fcffb74eebe7c291a/optimize)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }}
          > {/* Gradient overlay */}
              <div
                  className={`absolute inset-0 transition-opacity duration-300 ${hasBackground
                      ? 'bg-gradient-to-b from-black/50 to-black/90 opacity-100'
                      : 'bg-gradient-to-b from-transparent to-black opacity-50'
                      }`}
              />
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" /> */}
          {/* </div> */}

          {/* Header Content */}
          <div className={`relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto transition-all duration-300 ${hasBackground ? 'bg-black/20' : ''
              }`}>
              <nav className="absolute top-4 left-6 text-sm flex flex-wrap items-center gap-2 opacity-80">
                  <span>Real estate in Moscow and Moscow region</span>
                  <span>•</span>
                  <span>Buy</span>
                  <span>•</span>
                  <span>Apartment in a new building</span>
                  <span>•</span>
                  <span>{building?.name}</span>
              </nav>

              {/* Status Tags */}
              <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="capitalize px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
                      {details?.developmentStatus}
                  </span>
                  {/* <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
                                comfort
                            </span> */}
              </div>

              {/* Building Title */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <h1 className="capitalize text-7xl  font-bold">{details?.type} "{details?.name}"</h1>
                  <div className="flex items-center">
                      <span className="text-yellow-400 text-2xl">⭐</span>
                      <span className="text-2xl ml-1">{building.rating}</span>
                  </div>
              </div>

              {/* Price Range */}
              <div className="mb-10">
                  <div className="text-4xl font-bold">
                      {formatIndianPrice(minPrice)} — {formatIndianPrice(maxPrice)}
                  </div>
                  <div className="text-sm opacity-80">
                      ₹{formatPricePerSqFt(pricePerSqFt.min)} - ₹{formatPricePerSqFt(pricePerSqFt.max)} per sq.ft
                  </div>

              </div>

              {/* Location */}
              {/* <div className="flex items-center gap-2 mb-6 flex-wrap">
                            <span className="text-red-500">M</span>
                            <span>
                                {building.location}, {building.transportTime} min. by transport
                            </span>
                        </div> */}

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6 flex-wrap">
                  {/* <button className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors">
                                Developer contacts
                            </button> */}
                  <ContactButton />
                  {/* <button className="px-12 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                                Callback
                            </button> */}
                  <ConsultationModal />
                  <button className="p-3 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors">
                      <Heart className="w-6 h-6" />
                  </button>
              </div>

              {/* Photo Count */}
              <button className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit">
                  <Camera className="w-5 h-5" />
                  <span>{building.photos} photos</span>
              </button>

              {/* Developer Info */}
              <div className="flex items-center gap-4 my-8 pb-4 flex-wrap">
                  <div className="font-bold text-xl">самолет</div>
                  <div className="text-sm">developer #1</div>
                  <div className="flex items-center gap-2">
                      <span className="text-yellow-400">⭐</span>
                      <span>{building.rating}</span>
                      <span className="opacity-80">• {building.totalRatings} ratings</span>
                  </div>
              </div>

              {/* Navigation Tabs */}
              <div
                  className={`${isTabsSticky
                      ? 'fixed top-0 left-0 z-50 bg-white shadow-md'
                      : 'absolute bottom-0 left-0 backdrop-blur-lg'
                      } w-full transition-all duration-300`}
              >
                  <div className="max-w-7xl mx-auto">
                      <div
                          className={`flex gap-6 text-md p-5 overflow-x-auto ${isTabsSticky ? 'text-gray-800' : 'text-white'
                              }`}
                      >
                          {navigationTabs.map((tab) => (
                              <button
                                  key={tab}
                                  className={`whitespace-nowrap transition-colors ${isTabsSticky
                                      ? 'hover:text-red-800'
                                      : 'hover:text-red-400'
                                      }`}
                              >
                                  {tab}
                              </button>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </header>
  )
}

export default HeaderSection