// // // import axios from 'axios';
// // // import React, { useState } from 'react'

// // // function Signup() {
// // //     const [phoneNo , setPhoneNo] = useState('')
// // //     const [otp , setOtp] = useState('')
// // //     const [showOtp , setShowOtp] = useState(false)
// // //     const [email , setEmail] = useState('')

// // //     const handleSignup = async(e)=>{
// // //         e.preventDefault();
// // //         const response = await axios.post(`http://localhost:5053/api/send-otp` , {
// // //             phoneNumber : phoneNo
// // //         })


// // //         console.log(response)

// // //         if(response?.data?.success === "true"){
// // //             setShowOtp(true)
// // //         }

// // //     }


// // //     const handleVerifyOtp = async(e)=>{
// // //         e.preventDefault();
// // //         const response = await axios.post(`http://localhost:5053/api/verify-otp`, {
// // //             phoneNumber: phoneNo,
// // //             email : email,
// // //             otp : otp
// // //         })


// // //         console.log(response)
// // //     }
// // //   return (
// // //     <div>
// // //           <form >
// // //               <h1>Signup</h1>
// // //               <div>
// // //                 <label>Phone No.</label>
// // //                   <input type='number' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
// // //               </div>
// // //               <div>
// // //                 <label>Email</label>
// // //                   <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
// // //               </div>
// // //               {
// // //                   showOtp && <div>
// // //                   <label>Otp:</label>
// // //                       <input type='number' value={otp} onChange={(e) => setOtp(e.target.value)} />
// // //                   </div>
// // //               }
// // //               {
// // //                   !showOtp ? <button onClick={(e) => handleSignup(e)} >Send OTP</button> : <button onClick={handleVerifyOtp} >Verify OTP</button>
// // //               }
// // //           </form>
// // //     </div>
// // //   )
// // // }

// // // export default Signup


// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Signup() {
// //     const [phoneNo, setPhoneNo] = useState('');
// //     const [otp, setOtp] = useState('');
// //     const [showOtp, setShowOtp] = useState(false);
// //     const [email, setEmail] = useState('');

// //     const handleSignup = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:5053/api/send-otp', {
// //                 phoneNumber: phoneNo,
// //             });

// //             if (response?.data?.success === 'true') {
// //                 setShowOtp(true);
// //             }
// //         } catch (error) {
// //             console.error('Error sending OTP:', error);
// //         }
// //     };

// //     const handleVerifyOtp = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:5053/api/verify-otp', {
// //                 phoneNumber: phoneNo,
// //                 email: email,
// //                 otp: otp,
// //             });

// //             console.log('OTP Verification Response:', response);
// //         } catch (error) {
// //             console.error('Error verifying OTP:', error);
// //         }
// //     };

// //     return (
// //         <div className="flex items-center justify-center min-h-screen bg-gray-50">
// //             <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
// //                 <h1 className="text-3xl font-semibold text-center mb-6">Create your Realtor.com PRO account</h1>

// //                 <form>
// //                     <div className="mb-4">
// //                         <label className="block text-gray-700 text-sm font-medium mb-2">Phone No.</label>
// //                         <input
// //                             type="number"
// //                             value={phoneNo}
// //                             onChange={(e) => setPhoneNo(e.target.value)}
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         />
// //                     </div>

// //                     <div className="mb-4">
// //                         <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
// //                         <input
// //                             type="email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         />
// //                     </div>

// //                     {showOtp && (
// //                         <div className="mb-4">
// //                             <label className="block text-gray-700 text-sm font-medium mb-2">OTP</label>
// //                             <input
// //                                 type="number"
// //                                 value={otp}
// //                                 onChange={(e) => setOtp(e.target.value)}
// //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                             />
// //                         </div>
// //                     )}

// //                     <div className="flex justify-center">
// //                         {!showOtp ? (
// //                             <button
// //                                 onClick={handleSignup}
// //                                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                             >
// //                                 Send OTP
// //                             </button>
// //                         ) : (
// //                             <button
// //                                 onClick={handleVerifyOtp}
// //                                 className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //                             >
// //                                 Verify OTP
// //                             </button>
// //                         )}
// //                     </div>
// //                 </form>

// //                 <p className="text-center text-sm text-gray-600 mt-6">
// //                     Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Signup;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Eye } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [phoneNo, setPhoneNo] = useState('');
//     const [otp, setOtp] = useState('');
//     const [showOtp, setShowOtp] = useState(false);
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate()

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://propertify.onrender.com/api/send-otp', {
//                 phoneNumber: phoneNo,
//             });

//             console.log("response", response)

//             if (response?.data?.success === 'true') {
//                 setShowOtp(true);
//             }
//         } catch (error) {
//             console.error('Error sending OTP:', error);
//         }
//     };

//     const handleVerifyOtp = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://propertify.onrender.com/api/verify-otp', {
//                 phoneNumber: phoneNo,
//                 email: email,
//                 otp: otp,
//             });
//             console.log(response)
//             if (response?.data?.status_code === '200'){
//                 localStorage.setItem('profo-auth-token' , response?.data?.data?.token)
//                 navigate('/')

//             }else{
//                 // will show notification

//             }

//         } catch (error) {
//             console.error('Error verifying OTP:', error);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="px-4 py-7 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                     {/* Left Column - Features */}
//                     <div className="bg-white p-8 rounded-lg shadow-sm lg:block md:hidden hidden ">
//                         <div className="mb-8">
//                             <div className='flex items-center mb-4'>
//                                 <img src="assets/logo.png" alt="Realtor.com PRO" className="w-14" />
//                                 <span className='font-bold text-5xl'>PROFO </span>
//                             </div>
//                             <h2 className="text-2xl font-bold mb-4">Your PROFO account allows you to:</h2>
//                         </div>

//                         <div className="space-y-6">
//                             <div className="flex gap-4">
//                                 <div className="flex-shrink-0 w-8 h-8">
//                                     <img src="assets/spot-agent.svg" alt="Profile icon" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold mb-1">Claim your FREE agent profile</h3>
//                                     <p className="text-gray-600">Create an account to show up when local buyers and sellers are looking for an agent</p>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4">
//                                 <div className="flex-shrink-0 w-8 h-8">
//                                     <img src="assets/spot-monitor-data.svg" alt="Leads icon" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold mb-1">Generate and manage leads</h3>
//                                     <p className="text-gray-600">Connect with motivated buyers and sellers who visit Realtor.com looking for an agent</p>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4">
//                                 <div className="flex-shrink-0 w-8 h-8">
//                                     <img src="assets/spot-message.svg" alt="Brand icon" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold mb-1">Build your brand</h3>
//                                     <p className="text-gray-600">Increase your visibility on Realtor.com and across social media with paid promotions</p>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4">
//                                 <div className="flex-shrink-0 w-8 h-8">
//                                     <img src="assets/spot-agent.svg" alt="Listings icon" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold mb-1">Win and sell listings</h3>
//                                     <p className="text-gray-600">Access free data about your listings' performance, connect with local sellers, ace listing presentations, and run listing promotions</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Sign Up Form */}
//                     <div className="bg-white p-8 rounded-lg shadow-sm  ">
//                         <h1 className="text-3xl font-bold mb-6">Create your PROFO account</h1>

//                         <form className="space-y-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Email address*</label>
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     required
//                                 />
//                             </div>

//                             <div className="relative">
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone No.*</label>
//                                 <div className="relative">
//                                     <input
//                                         type="number"
//                                         value={phoneNo}
//                                         onChange={(e)=>setPhoneNo(e.target.value)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                         required
//                                     />
//                                     {/* <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" /> */}
//                                 </div>
//                             </div>

//                             {
//                                 showOtp && <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-1">OTP*</label>
//                                     <input
//                                         type="numer"
//                                         value={otp}
//                                         onChange={(e) => setOtp(e.target.value)}
//                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//                             }

//                            {
//                                 !showOtp ? <button
//                                     onClick={handleSignup}
//                                     className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
//                                 >
//                                     Create account
//                                 </button> : <button
//                                         onClick={handleVerifyOtp}
//                                     className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
//                                 >
//                                     Verify OTP
//                                 </button>
//                            }

//                             <p className="text-center text-sm text-gray-600">
//                                 Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
//                             </p>
//                         </form>
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 {/* <div className="mt-8 text-center text-sm text-gray-600">
//                     <div className="space-x-4">
//                         <a href="#" className="hover:underline">Support</a>
//                         <a href="#" className="hover:underline">Ad Choices</a>
//                         <a href="#" className="hover:underline">Privacy / Website terms of use</a>
//                         <a href="#" className="hover:underline">Do not sell my personal information</a>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     );
// };

// export default Signup;

// import React, { useEffect, useRef } from 'react';

// const Signup = () => {
//     const images1 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];
//     const images2 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];
//     const images3 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];
//     const images4 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];

//     useEffect(() => {
//         const carousels = document.querySelectorAll('.carousel');

//         carousels.forEach((carousel, index) => {
//             const isEven = index % 2 === 0;
//             carousel.style.animation = `scroll${isEven ? 'Down' : 'Up'} 20s linear infinite`;
//         });
//     }, []);

//     return (
//         <div className="flex h-screen w-full overflow-hidden">
//             {/* Left Section - Image Carousels */}
//             <div className="relative flex-1 flex gap-4 p-4">
//                 {[images1, images2, images3, images4].map((images, index) => (
//                     <div
//                         key={index}
//                         className="carousel relative flex-1 overflow-hidden"
//                     >
//                         <div className="flex flex-col gap-4">
//                             {[...images, ...images].map((src, imgIndex) => (
//                                 <div
//                                     key={imgIndex}
//                                     className="w-full h-64 rounded-lg overflow-hidden"
//                                 >
//                                     <img
//                                         src={src}
//                                         alt={`carousel-${index}-${imgIndex}`}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white pointer-events-none" />

//             {/* Right Section - Form */}
//             <div className="relative flex-1 flex items-center justify-center p-12 bg-white">
//                 <div className="w-full max-w-md">
//                     <div className="mb-8">
//                         <div className="flex items-center gap-2 mb-2">
//                             <span className="text-red-500 text-2xl">shoppin'</span>
//                             <span className="text-lg text-gray-400">curations</span>
//                         </div>
//                         <h1 className="text-4xl font-bold mb-2">
//                             join the <span className="text-red-500">waitlist</span>
//                         </h1>
//                         <p className="text-gray-600">
//                             skip the queue and get access to your personal shopper
//                         </p>
//                     </div>

//                     <div className="relative mb-8">
//                         <input
//                             type="email"
//                             placeholder="email"
//                             className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
//                         />
//                         <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-red-500 transition-colors">
//                             →
//                         </button>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-gray-600">join</span>
//                         <span className="font-semibold">24895+</span>
//                         <span className="text-gray-600">members who are already in the waitlist</span>
//                     </div>

//                     <div className="flex -space-x-2 mt-4">
//                         {[1, 2, 3, 4].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//         @keyframes scrollDown {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-50%); }
//         }

//         @keyframes scrollUp {
//           0% { transform: translateY(-50%); }
//           100% { transform: translateY(0); }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default Signup;


// import React, { useEffect, useRef } from 'react';

// const Signup = () => {
//     const images1 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];
//     const images2 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];
//     const images3 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];
//     const images4 = [
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//         'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//     ];

//     useEffect(() => {
//         const carousels = document.querySelectorAll('.carousel');

//         carousels.forEach((carousel, index) => {
//             const isEven = index % 2 === 0;
//             carousel.style.animation = `scroll${isEven ? 'Down' : 'Up'} 20s linear infinite`;
//         });
//     }, []);

//     return (
//         <div className="flex h-screen w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-white">
//             {/* Left Section - Image Carousels */}
//             <div className="relative flex-1 flex gap-4 p-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
//                 {[images1, images2, images3, images4].map((images, index) => (
//                     <div
//                         key={index}
//                         className="carousel relative flex-1 overflow-hidden"
//                     >
//                         <div className="flex flex-col gap-4">
//                             {[...images, ...images].map((src, imgIndex) => (
//                                 <div
//                                     key={imgIndex}
//                                     className="w-full h-64 rounded-lg overflow-hidden"
//                                 >
//                                     <img
//                                         src={src}
//                                         alt={`carousel-${index}-${imgIndex}`}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}

//                 {/* Multiple gradient overlays for sophisticated effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/80" />
//                 {/* <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/80" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" /> */}
//                 <div className="absolute right-0 inset-y-0 w-1/3 bg-gradient-to-r from-transparent to-white" />
//             </div>

//             {/* Right Section - Form */}
//             <div className="relative flex-1 flex items-center justify-center p-12 bg-white">
//                 <div className="w-full max-w-md">
//                     <div className="mb-8">
//                         <div className="flex items-center gap-2 mb-2">
//                             <span className="text-red-500 text-2xl">shoppin'</span>
//                             <span className="text-lg text-gray-400">curations</span>
//                         </div>
//                         <h1 className="text-4xl font-bold mb-2">
//                             join the <span className="text-red-500">waitlist</span>
//                         </h1>
//                         <p className="text-gray-600">
//                             skip the queue and get access to your personal shopper
//                         </p>
//                     </div>

//                     <div className="relative mb-8">
//                         <input
//                             type="email"
//                             placeholder="email"
//                             className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
//                         />
//                         <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
//                             →
//                         </button>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-gray-600">join</span>
//                         <span className="font-semibold">24895+</span>
//                         <span className="text-gray-600">members who are already in the waitlist</span>
//                     </div>

//                     <div className="flex -space-x-2 mt-4">
//                         {[1, 2, 3, 4].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//         @keyframes scrollDown {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-50%); }
//         }

//         @keyframes scrollUp {
//           0% { transform: translateY(-50%); }
//           100% { transform: translateY(0); }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default Signup;

// import React, { useEffect } from 'react';

// const Signup = () => {
//     // Replace external image URLs with placeholder images for the demo
//     const images1 = Array(3).fill('https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F5.png&w=640&q=75');
//     const images2 = Array(3).fill('https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F2.png&w=1920&q=75');
//     const images3 = Array(3).fill('https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75');
//     const images4 = Array(3).fill('https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F3.png&w=1920&q=75');

//     useEffect(() => {
//         const carousels = document.querySelectorAll('.carousel');

//         carousels.forEach((carousel, index) => {
//             const isEven = index % 2 === 0;
//             carousel.style.animation = `scroll${isEven ? 'Down' : 'Up'} 15s linear infinite`;
//         });
//     }, []);

//     return (
//         <div className="flex h-screen w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-white">
//             {/* Left Section - Image Carousels */}
//             <div className="min-w-[64vw] relative flex-1 flex gap-1 p-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
//                 {[images1, images2, images3, images4].map((images, index) => (
//                     <div
//                         key={index}
//                         className="carousel relative flex-1 overflow-hidden"
//                         style={{ minHeight: '200%' }} // Ensure enough space for animation
//                     >
//                         <div className="flex flex-col gap-1">
//                             {/* Double the images for seamless loop */}
//                             {[...images, ...images, ...images].map((src, imgIndex) => (
//                                 <div
//                                     key={imgIndex}
//                                     className="w-full h-72 aspect-square rounded-lg overflow-hidden"
//                                 >
//                                     <img
//                                         src={src}
//                                         alt={`carousel-${index}-${imgIndex}`}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}

//                 {/* Gradient overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/80" />
//                 <div className="absolute right-0 inset-y-0 w-1/3 bg-gradient-to-r from-transparent to-white" />
//             </div>

//             {/* Right Section - Form */}
//             <div className="relative flex-1 flex items-center justify-center p-12 bg-white">
//                 <div className="w-full max-w-md">
//                     <div className="mb-8">
//                         <div className="flex items-center gap-2 mb-2">
//                             <span className="text-[#F9464C] text-2xl">shoppin'</span>
//                             <span className="text-lg text-gray-400">curations</span>
//                         </div>
//                         <h1 className="text-4xl font-bold mb-2">
//                             join the <span className="text-[#F9464C]">waitlist</span>
//                         </h1>
//                         <p className="text-gray-600">
//                             skip the queue and get access to your personal shopper
//                         </p>
//                     </div>

//                     <div className="relative mb-8">
//                         <input
//                             type="email"
//                             placeholder="email"
//                             className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
//                         />
//                         <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
//                             →
//                         </button>
//                     </div>

//                     <div className="flex items-center gap-2">
//                         <span className="text-gray-600">join</span>
//                         <span className="font-semibold">24895+</span>
//                         <span className="text-gray-600">members who are already in the waitlist</span>
//                     </div>

//                     <div className="flex -space-x-2 mt-4">
//                         {[1, 2, 3, 4].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//                 @keyframes scrollDown {
//                     0% { transform: translateY(0); }
//                     100% { transform: translateY(-33.33%); }
//                 }
                
//                 @keyframes scrollUp {
//                     0% { transform: translateY(-33.33%); }
//                     100% { transform: translateY(0); }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Signup;


/* working and singup implemented code */
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const navigate = useNavigate()
//     const [phoneNo, setPhoneNo] = useState('');
//     const [email, setEmail] = useState('');
//     const [otp, setOtp] = useState('');
//     const [showOtp, setShowOtp] = useState(false);

//     // Image arrays for carousel
//         const images1 = [
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//         ];
//         const images2 = [
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//         ];
//         const images3 = [
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//         ];
//         const images4 = [
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75',
//             'https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Fhero-section-images%2Fwaitlist%2F11.png&w=640&q=75'
//         ];

//     useEffect(() => {
//         const carousels = document.querySelectorAll('.carousel');
//         carousels.forEach((carousel, index) => {
//             const isEven = index % 2 === 0;
//             carousel.style.animation = `scroll${isEven ? 'Down' : 'Up'} 15s linear infinite`;
//         });
//     }, []);

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5053/api/send-otp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ phoneNumber: phoneNo }),
//             });
//             const data = await response.json();
//             if (data?.success === "true") {
//                 setShowOtp(true);
//             }
//         } catch (error) {
//             console.error('Error sending OTP:', error);
//         }
//     };

//     const handleVerifyOtp = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5053/api/verify-otp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     phoneNumber: phoneNo,
//                     email: email,
//                     otp: otp
//                 }),
//             });
//             const data = await response.json();
//             if (data?.status_code == '200' && data?.token){
//                 localStorage.setItem("profo-auth-token", data?.token )
//                 navigate('/')
//             }else{
//                 alert(data?.msg)
//             }
//             console.log(data);
//         } catch (error) {
//             console.error('Error verifying OTP:', error);
//         }
//     };

//     return (
//         <div className="flex h-screen w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-white">
//             {/* Left Section - Image Carousels */}
//             <div className="min-w-[64vw] relative flex-1 flex gap-1 p-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
//                 {[images1, images2, images3, images4].map((images, index) => (
//                     <div
//                         key={index}
//                         className="carousel relative flex-1 overflow-hidden"
//                         style={{ minHeight: '200%' }}
//                     >
//                         <div className="flex flex-col gap-1">
//                             {[...images, ...images, ...images].map((src, imgIndex) => (
//                                 <div
//                                     key={imgIndex}
//                                     className="w-full h-72 aspect-square rounded-lg overflow-hidden"
//                                 >
//                                     <img
//                                         src={src}
//                                         alt={`carousel-${index}-${imgIndex}`}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}

//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/80" />
//                 <div className="absolute right-0 inset-y-0 w-1/3 bg-gradient-to-r from-transparent to-white" />
//             </div>

//             {/* Right Section - Enhanced Form */}
//             <div className="relative flex-1 flex items-center justify-center p-12 bg-white">
//                 <div className="w-full max-w-md">
//                     <div className="mb-8">
//                         <div className="flex items-center gap-2 mb-2">
//                             <span className="text-[#F9464C] text-7xl font-bold">PROFO</span>
//                             {/* <span className="text-lg text-gray-400">curations</span> */}
//                         </div>
//                         <h1 className="text-4xl font-bold mb-2">
//                             join the <span className="text-[#F9464C]">waitlist</span>
//                         </h1>
//                         <p className="text-gray-600">
//                             skip the queue and get access to your personal shopper
//                         </p>
//                     </div>

//                     <form className="space-y-4 mb-8">
//                         <div className="relative">
//                             <input
//                                 type="tel"
//                                 value={phoneNo}
//                                 onChange={(e) => setPhoneNo(e.target.value)}
//                                 placeholder="phone number"
//                                 className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
//                             />
//                         </div>

//                         <div className="relative">
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="email"
//                                 className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
//                             />
//                         </div>

//                         {showOtp && (
//                             <div className="relative">
//                                 <input
//                                     type="number"
//                                     value={otp}
//                                     onChange={(e) => setOtp(e.target.value)}
//                                     placeholder="enter OTP"
//                                     className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 />
//                             </div>
//                         )}

//                         <button
//                             onClick={showOtp ? handleVerifyOtp : handleSignup}
//                             className="w-full p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                         >
//                             {showOtp ? 'Verify OTP' : 'Send OTP'}
//                         </button>
//                     </form>

//                     <div className="flex items-center gap-2">
//                         <span className="text-gray-600">join</span>
//                         <span className="font-semibold">24895+</span>
//                         <span className="text-gray-600">members who are already in the waitlist</span>
//                     </div>

//                     <div className="flex -space-x-2 mt-4">
//                         {[1, 2, 3, 4].map((_, i) => (
//                             <div
//                                 key={i}
//                                 className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//                 @keyframes scrollDown {
//                     0% { transform: translateY(0); }
//                     100% { transform: translateY(-33.33%); }
//                 }
                
//                 @keyframes scrollUp {
//                     0% { transform: translateY(-33.33%); }
//                     100% { transform: translateY(0); }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Signup;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { base_url } from '../utils/base_url';

const Signup = () => {
    const navigate = useNavigate();
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false);

    // Image arrays for carousel
    const images1 = [
        'https://avatars.mds.yandex.net/get-vertis-journal/4220003/DSC02013.JPG_1739263425314/1428x1428',
        'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b10886372eeff1e30b738e75/realty_large_1242',
        'https://avatars.mds.yandex.net/get-verba/1672712/2a0000019353719d01da0a727ab4edacdc14/realty_large_1242'
    ];
    const images2 = [
        'https://avatars.mds.yandex.net/get-verba/1672712/2a0000019353719d01da0a727ab4edacdc14/realty_large_1242',
        'https://avatars.mds.yandex.net/get-verba/1540742/2a000001938ce76f87578a9a7f0caa9e70e6/realty_special_photo_3840',
        'https://avatars.mds.yandex.net/get-vertis-journal/4465444/orig.webp_1739273748206/1098x1098'
    ];
    const images3 = [
        'https://avatars.mds.yandex.net/get-vertis-journal/4220003/DSC02013.JPG_1739263425314/1428x1428',
        'https://avatars.mds.yandex.net/get-vertis-journal/4465444/orig.webp_1739273748206/1098x1098',
        'https://avatars.mds.yandex.net/get-verba/216201/2a0000018e98b10886372eeff1e30b738e75/realty_large_1242'
    ];
    const images4 = [
        'https://avatars.mds.yandex.net/get-verba/1672712/2a0000019353719d01da0a727ab4edacdc14/realty_large_1242',
        'https://avatars.mds.yandex.net/get-vertis-journal/4465444/orig.webp_1739273748206/1098x1098',
        'https://avatars.mds.yandex.net/get-verba/1540742/2a000001938ce76f87578a9a7f0caa9e70e6/realty_special_photo_3840'
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const carouselVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.2
            }
        }
    };

        const handleSignup = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch(`${base_url}/api/send-otp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ phoneNumber: phoneNo }),
                });
                const data = await response.json();
                if (data?.success === "true") {
                    setShowOtp(true);
                }
            } catch (error) {
                console.error('Error sending OTP:', error);
            }
        };

        const handleVerifyOtp = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch(`${base_url}/api/verify-otp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phoneNumber: phoneNo,
                        email: email,
                        otp: otp
                    }),
                });
                const data = await response.json();
                if (data?.status_code == '200' && data?.data?.token){
                    localStorage.setItem("profo-auth-token", data?.data?.token )
                    navigate('/')
                }else{
                    alert(data?.msg)
                }
                console.log(data);
            } catch (error) {
                console.error('Error verifying OTP:', error);
            }
        };

        useEffect(() => {
            const carousels = document.querySelectorAll('.carousel');

            carousels.forEach((carousel, index) => {
                const isEven = index % 2 === 0;
                carousel.style.animation = `scroll${isEven ? 'Down' : 'Up'} 15s linear infinite`;
            });
        }, []);
    // Your existing useEffect and handler functions...

    useEffect(() => {
        const carousels = document.querySelectorAll('.carousel-container');

        const startAnimation = (element, direction) => {
            element.style.animation = 'none';
            element.offsetHeight; // Trigger reflow
            element.style.animation = `scroll${direction} 15s linear infinite`;
        };

        carousels.forEach((carousel, index) => {
            const direction = index % 2 === 0 ? 'Down' : 'Up';
            startAnimation(carousel, direction);

            // Reset animation when it reaches the end
            carousel.addEventListener('animationend', () => {
                startAnimation(carousel, direction);
            });
        });

        return () => {
            carousels.forEach(carousel => {
                carousel.style.animation = 'none';
            });
        };
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex h-screen w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-white"
        >
            {/* Left Section - Animated Image Carousels */}
            <motion.div
                variants={carouselVariants}
                className="min-w-[52vw] relative flex-1 flex gap-1 bg-gradient-to-b from-gray-50 via-white to-gray-50"
            >
                {[images1, images2, images3, images4].map((images, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative flex-1 overflow-hidden"
                        style={{ height: '100%' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="carousel-container absolute w-full" style={{ willChange: 'transform' }}>
                            {/* Duplicate the images array three times for smooth infinite scroll */}
                            {[...images, ...images, ...images, ...images].map((src, imgIndex) => (
                                <motion.div
                                    key={imgIndex}
                                    className="w-full h-auto bg-black aspect-square rounded-lg overflow-hidden mb-1"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img
                                        src={src}
                                        alt={`carousel-${index}-${imgIndex}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/80" />
                <div className="absolute right-0 inset-y-0 w-1/3 bg-gradient-to-r from-transparent to-white" />
            </motion.div>
            {/* Right Section - Enhanced Animated Form */}
            <motion.div
                variants={itemVariants}
                className="relative text-center flex-1 flex items-center justify-center p-12 bg-white"
            >
                <motion.div
                    variants={containerVariants}
                    className="w-full max-w-md"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-8"
                    >
                        <motion.div
                            className="flex items-center gap-2 mb-2"
                            whileHover={{ scale: 1 }}
                        >
                            <motion.span
                                className="text-[#F9464C] text-7xl flex justify-center font-bold w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {/* PROFO */}
                                <div className='bg-red text-center'>
                                    <img src='assets/output-onlinegiftool.gif' alt="PROFO" className='w-auto h-20' />
                                    {/* <img src='assets/profo-black-2.gif' alt="PROFO" className='w-auto h-16' /> */}
                                </div>
                                {/* <div className='bg-yellow-500'>
                                    <img src='assets/profo-black.gif' alt="PROFO" className='w-auto h-28' />
                                </div> */}
                            </motion.span>
                        </motion.div>
                        <motion.h1
                            className="text-4xl font-bold mb-2"
                            variants={itemVariants}
                        >
                            join the <span className="text-[#F9464C]">waitlist</span>
                        </motion.h1>
                        <motion.p
                            className="text-gray-600"
                            variants={itemVariants}
                        >
                            skip the queue and get access to your personal shopper
                        </motion.p>
                    </motion.div>

                    <motion.form
                        className="space-y-4 mb-8"
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="tel"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                placeholder="phone number"
                                className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                                className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </motion.div>

                        {showOtp && (
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative"
                            >
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="number"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="enter OTP"
                                    className="w-full p-4 pr-12 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </motion.div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={showOtp ? handleVerifyOtp : handleSignup}
                            className="w-full p-4 rounded-full bg-transparent text-black border-2  hover:bg-[crimson] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            {showOtp ? 'Verify OTP' : 'Send OTP'}
                        </motion.button>
                    </motion.form>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-2"
                    >
                        <span className="text-gray-600">join</span>
                        <motion.span
                            className="font-semibold"
                            whileHover={{ scale: 1.1 }}
                        >
                            24895+
                        </motion.span>
                        <span className="text-gray-600">members who are already in the waitlist</span>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="flex -space-x-2 mt-4"
                    >
                        {[1, 2, 3, 4].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ scale: 1.2, zIndex: 1 }}
                                className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                @keyframes scrollDown {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-33.33%); }
                }
                
                @keyframes scrollUp {
                    0% { transform: translateY(-33.33%); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </motion.div>
    );
};

export default Signup;