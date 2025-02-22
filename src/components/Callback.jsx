import { useState, useEffect } from "react";
import { X, ChevronDown, Check } from 'lucide-react';

export const Callback = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState('As soon as possible');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Add useEffect to handle body scroll
    useEffect(() => {
        if (isOpen) {
            // Disable scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scroll
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to ensure scroll is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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
        <div className="">
            {/* Trigger Button */}
            <button
                onClick={toggleModal}
                className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-white hover:text-black hover:ring-2 hover:ring-yellow-[#FFEE58] transition-colors"
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
                    className={` fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 w-full max-w-md transition-all duration-300 ${isOpen
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

export default Callback;