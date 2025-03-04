// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const PropertyValuationForm = () => {
//     // Form state
//     const [formData, setFormData] = useState({
//         firstName: '',
//         city: '',
//         phoneNumber: '',
//         question: '',
//     });

//     // Select dropdowns state
//     const [cityOpen, setCityOpen] = useState(false);
//     const [cities] = useState(['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune']);
//     const [selectedCity, setSelectedCity] = useState('');

//     // Form validation state
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitSuccess, setSubmitSuccess] = useState(false);

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });

//         // Clear error when user types
//         if (errors[name]) {
//             setErrors({
//                 ...errors,
//                 [name]: ''
//             });
//         }
//     };

//     // Handle city selection
//     const handleCitySelect = (city) => {
//         setSelectedCity(city);
//         setFormData({
//             ...formData,
//             city: city
//         });
//         setCityOpen(false);

//         // Clear error when user selects
//         if (errors.city) {
//             setErrors({
//                 ...errors,
//                 city: ''
//             });
//         }
//     };

//     // Validate form
//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.firstName.trim()) {
//             newErrors.firstName = 'Name is required';
//         }

//         if (!formData.city) {
//             newErrors.city = 'City is required';
//         }

//         if (!formData.phoneNumber.trim()) {
//             newErrors.phoneNumber = 'Phone number is required';
//         } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
//             newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             setIsSubmitting(true);

//             try {
//                 // Simulating API call to backend
//                 console.log('Sending form data to backend:', formData);

//                 // In a real application, you would use something like:
//                 // const response = await fetch('/api/property-valuation', {
//                 //   method: 'POST',
//                 //   headers: {
//                 //     'Content-Type': 'application/json',
//                 //   },
//                 //   body: JSON.stringify(formData),
//                 // });

//                 // if (!response.ok) {
//                 //   throw new Error('Network response was not ok');
//                 // }

//                 // Simulate successful submission after 1 second
//                 await new Promise(resolve => setTimeout(resolve, 1000));

//                 setSubmitSuccess(true);
//                 // Reset form after successful submission
//                 setTimeout(() => {
//                     setFormData({
//                         firstName: '',
//                         city: '',
//                         phoneNumber: '',
//                         question: ''
//                     });
//                     setSelectedCity('');
//                     setSubmitSuccess(false);
//                 }, 3000);
//             } catch (error) {
//                 console.error('Error submitting form:', error);
//             } finally {
//                 setIsSubmitting(false);
//             }
//         }
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-7xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm"
//         >
//             <div className="flex flex-col items-start gap-6">
//                 {/* Logo and heading section */}
//                 <motion.div
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="md:w-full"
//                 >
//                     <div className="flex items-center gap-4 md:flex-col md:items-start lg:flex-row">
//                         <img src="/assets/profoAdvice/hireValuer-banner-image.svg" alt="Property logo" className="h-24 w-auto" />
//                         <div>
//                             <h2 className="text-2xl font-semibold text-gray-800">
//                                 Get <span className="text-teal-500">Free Advice</span> on your Property Valuation requirement
//                             </h2>
//                             <p className="text-gray-600 mt-2">
//                                 Send your query now & let us respond within 24 hrs.
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Form section */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     className="md:w-2/3 lg:w-3/4 w-full"
//                 >
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                             {/* First Name Field */}
//                             <div>
//                                 <motion.input
//                                     whileFocus={{ scale: 1.01 }}
//                                     transition={{ type: "spring", stiffness: 300 }}
//                                     type="text"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                     placeholder="First Name"
//                                     className={`w-full py-3 px-4 bg-white border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
//                                 />
//                                 {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
//                             </div>

//                             {/* City Dropdown */}
//                             <div className="relative">
//                                 <div
//                                     onClick={() => setCityOpen(!cityOpen)}
//                                     className={`w-full py-3 px-4 bg-white border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md cursor-pointer flex items-center justify-between`}
//                                 >
//                                     <div className="flex items-center">
//                                         <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                         </svg>
//                                         <span className={selectedCity ? 'text-gray-900' : 'text-gray-500'}>
//                                             {selectedCity || 'City'}
//                                         </span>
//                                     </div>
//                                     <svg className={`h-5 w-5 text-gray-500 transition-transform ${cityOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </div>

//                                 {cityOpen && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: -10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.2 }}
//                                         className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
//                                     >
//                                         {cities.map((city) => (
//                                             <div
//                                                 key={city}
//                                                 onClick={() => handleCitySelect(city)}
//                                                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                             >
//                                                 {city}
//                                             </div>
//                                         ))}
//                                     </motion.div>
//                                 )}
//                                 {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
//                             </div>

//                             {/* Phone Number Field */}
//                             <div className="flex">
//                                 <div className="bg-white border border-gray-300 rounded-l-md py-3 px-3 flex items-center">
//                                     <span className="text-gray-600 flex items-center">
//                                         IND +91
//                                         <svg className="h-5 w-5 text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </span>
//                                 </div>
//                                 <motion.input
//                                     whileFocus={{ scale: 1.01 }}
//                                     transition={{ type: "spring", stiffness: 300 }}
//                                     type="tel"
//                                     name="phoneNumber"
//                                     value={formData.phoneNumber}
//                                     onChange={handleChange}
//                                     placeholder="Your mobile number"
//                                     className={`flex-1 py-3 px-4 bg-white border-t border-r border-b ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-r-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
//                                 />
//                             </div>
//                             {errors.phoneNumber && <p className="mt-1 text-xs text-red-500 md:col-start-3">{errors.phoneNumber}</p>}

//                             {/* Question Field */}
//                             <div className="md:col-span-3">
//                                 <motion.textarea
//                                     whileFocus={{ scale: 1.01 }}
//                                     transition={{ type: "spring", stiffness: 300 }}
//                                     name="question"
//                                     value={formData.question}
//                                     onChange={handleChange}
//                                     placeholder="Write your FREE question"
//                                     rows="2"
//                                     className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
//                                 ></motion.textarea>
//                             </div>
//                         </div>

//                         {/* Terms and Submit button */}
//                         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//                             <p className="text-sm text-gray-600">
//                                 By Continuing, I agree to Magicbricks
//                                 <a href="#" className="text-gray-800 font-medium mx-1">T&C</a>,
//                                 <a href="#" className="text-gray-800 font-medium mx-1">Privacy Policy</a>, &
//                                 <a href="#" className="text-gray-800 font-medium mx-1">Cookie Policy</a>
//                             </p>

//                             <motion.button
//                                 whileHover={{ scale: 1.03 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center min-w-[220px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//                             >
//                                 {isSubmitting ? (
//                                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                 ) : submitSuccess ? (
//                                     <>
//                                         <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                         </svg>
//                                         Question Sent!
//                                     </>
//                                 ) : (
//                                     "Ask a FREE Question"
//                                 )}
//                             </motion.button>
//                         </div>
//                     </form>
//                 </motion.div>
//             </div>
//         </motion.div>
//     );
// };

// export default PropertyValuationForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PropertyValuationForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        city: '',
        phoneNumber: '',
        question: '',
    });

    // Select dropdowns state
    const [cityOpen, setCityOpen] = useState(false);
    const [cities] = useState(['Kanpur', 'Prayagraj', 'Mathura', 'Vrindavan' ,'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune']);
    const [selectedCity, setSelectedCity] = useState('');

    // Form validation state
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Handle city selection
    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setFormData({
            ...formData,
            city: city
        });
        setCityOpen(false);

        // Clear error when user selects
        if (errors.city) {
            setErrors({
                ...errors,
                city: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Please Enter Name';
        }

        if (!formData.city) {
            newErrors.city = 'City is required';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Please Enter Mobile Number';
        } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
            newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                // Simulating API call to backend
                console.log('Sending form data to backend:', formData);

                // Simulate successful submission after 1 second
                await new Promise(resolve => setTimeout(resolve, 1000));

                setSubmitSuccess(true);
                // Reset form after successful submission
                setTimeout(() => {
                    setFormData({
                        firstName: '',
                        city: '',
                        phoneNumber: '',
                        question: ''
                    });
                    setSelectedCity('');
                    setSubmitSuccess(false);
                }, 3000);
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col items-start gap-6">
                {/* Logo and heading section */}
                <div className="md:w-full">
                    <div className="flex items-center gap-4 md:flex-col md:items-start lg:flex-row">
                        <img src="/assets/profoAdvice/hireValuer-banner-image.svg" alt="Property logo" className="h-24 w-auto" />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Get <span className="text-teal-500">Free Advice</span> on your Property Valuation requirement
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Send your query now & let us respond within 24 hrs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form section */}
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            {/* First Name Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className={`w-full py-3 px-4 bg-white border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
                                />
                                {errors.firstName && (
                                    <p className="absolute text-xs text-red-500 mt-1">{errors.firstName}</p>
                                )}
                            </div>

                            {/* City Dropdown */}
                            <div className="relative">
                                <div
                                    onClick={() => setCityOpen(!cityOpen)}
                                    className={`w-full py-3 px-4 bg-white border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md cursor-pointer flex items-center justify-between`}
                                >
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className={selectedCity ? 'text-gray-900' : 'text-gray-500'}>
                                            {selectedCity || 'City'}
                                        </span>
                                    </div>
                                    <svg className={`h-5 w-5 text-gray-500 transition-transform ${cityOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {cityOpen && (
                                    <div
                                        className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
                                    >
                                        {cities.map((city) => (
                                            <div
                                                key={city}
                                                onClick={() => handleCitySelect(city)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {city}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Phone Number Field */}
                            <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
                                <div className="flex">
                                    <div className="bg-white border border-gray-300 rounded-l-md py-3 px- flex items-center">
                                        <span className="text-gray-600 flex items-center text-xs px-2">
                                            IND +91
                                            <svg className="h-2 w-2 text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Your mobile number"
                                        className={`flex-1 py-3 px-4 bg-white border-t border-r border-b ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-r-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
                                    />
                                </div>
                                {errors.phoneNumber && (
                                    <p className="absolute text-xs text-red-500 mt-1">{errors.phoneNumber}</p>
                                )}
                            </div>

                            {/* Question Field */}
                            <div className="col-span-1 md:col-span-2 lg:col-span-1 text-sm">
                                <textarea
                                    name="question"
                                    value={formData.question}
                                    onChange={handleChange}
                                    placeholder="Write your FREE question"
                                    rows="1"
                                    className="w-full py-2 px-2 h-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                                ></textarea>
                            </div>
                        </div>

                        {/* Terms and Submit button */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <p className="text-sm text-gray-600">
                                By Continuing, I agree to Magicbricks
                                <a href="#" className="text-gray-800 font-medium mx-1">T&C</a>,
                                <a href="#" className="text-gray-800 font-medium mx-1">Privacy Policy</a>, &
                                <a href="#" className="text-gray-800 font-medium mx-1">Cookie Policy</a>
                            </p>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center min-w-[220px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : submitSuccess ? (
                                    <>
                                        <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Question Sent!
                                    </>
                                ) : (
                                    "Ask a FREE Question"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PropertyValuationForm;