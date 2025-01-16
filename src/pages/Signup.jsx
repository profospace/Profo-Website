// // import axios from 'axios';
// // import React, { useState } from 'react'

// // function Signup() {
// //     const [phoneNo , setPhoneNo] = useState('')
// //     const [otp , setOtp] = useState('')
// //     const [showOtp , setShowOtp] = useState(false)
// //     const [email , setEmail] = useState('')

// //     const handleSignup = async(e)=>{
// //         e.preventDefault();
// //         const response = await axios.post(`http://localhost:5053/api/send-otp` , {
// //             phoneNumber : phoneNo
// //         })


// //         console.log(response)

// //         if(response?.data?.success === "true"){
// //             setShowOtp(true)
// //         }

// //     }


// //     const handleVerifyOtp = async(e)=>{
// //         e.preventDefault();
// //         const response = await axios.post(`http://localhost:5053/api/verify-otp`, {
// //             phoneNumber: phoneNo,
// //             email : email,
// //             otp : otp
// //         })


// //         console.log(response)
// //     }
// //   return (
// //     <div>
// //           <form >
// //               <h1>Signup</h1>
// //               <div>
// //                 <label>Phone No.</label>
// //                   <input type='number' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
// //               </div>
// //               <div>
// //                 <label>Email</label>
// //                   <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
// //               </div>
// //               {
// //                   showOtp && <div>
// //                   <label>Otp:</label>
// //                       <input type='number' value={otp} onChange={(e) => setOtp(e.target.value)} />
// //                   </div>
// //               }
// //               {
// //                   !showOtp ? <button onClick={(e) => handleSignup(e)} >Send OTP</button> : <button onClick={handleVerifyOtp} >Verify OTP</button>
// //               }
// //           </form>
// //     </div>
// //   )
// // }

// // export default Signup


// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//     const [phoneNo, setPhoneNo] = useState('');
//     const [otp, setOtp] = useState('');
//     const [showOtp, setShowOtp] = useState(false);
//     const [email, setEmail] = useState('');

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5053/api/send-otp', {
//                 phoneNumber: phoneNo,
//             });

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
//             const response = await axios.post('http://localhost:5053/api/verify-otp', {
//                 phoneNumber: phoneNo,
//                 email: email,
//                 otp: otp,
//             });

//             console.log('OTP Verification Response:', response);
//         } catch (error) {
//             console.error('Error verifying OTP:', error);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-50">
//             <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//                 <h1 className="text-3xl font-semibold text-center mb-6">Create your Realtor.com PRO account</h1>

//                 <form>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Phone No.</label>
//                         <input
//                             type="number"
//                             value={phoneNo}
//                             onChange={(e) => setPhoneNo(e.target.value)}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {showOtp && (
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-medium mb-2">OTP</label>
//                             <input
//                                 type="number"
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                     )}

//                     <div className="flex justify-center">
//                         {!showOtp ? (
//                             <button
//                                 onClick={handleSignup}
//                                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             >
//                                 Send OTP
//                             </button>
//                         ) : (
//                             <button
//                                 onClick={handleVerifyOtp}
//                                 className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                             >
//                                 Verify OTP
//                             </button>
//                         )}
//                     </div>
//                 </form>

//                 <p className="text-center text-sm text-gray-600 mt-6">
//                     Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Signup;



import React, { useState } from 'react';
import axios from 'axios';
import { Eye } from 'lucide-react';

const Signup = () => {
    const [phoneNo, setPhoneNo] = useState('8318706210');
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const [email, setEmail] = useState('anuragsonkar053@gmail.com');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://propertify.onrender.com/api/send-otp', {
                phoneNumber: phoneNo,
            });

            if (response?.data?.success === 'true') {
                setShowOtp(true);
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://propertify.onrender.com/api/verify-otp', {
                phoneNumber: phoneNo,
                email: email,
                otp: otp,
            });
            console.log(response)
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="px-4 py-7 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Features */}
                    <div className="bg-white p-8 rounded-lg shadow-sm lg:block md:hidden hidden ">
                        <div className="mb-8">
                            <div className='flex items-center mb-4'>
                                <img src="assets/logo.png" alt="Realtor.com PRO" className="w-14" />
                                <span className='font-bold text-5xl'>PROFO </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Your PROFO account allows you to:</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <img src="assets/spot-agent.svg" alt="Profile icon" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Claim your FREE agent profile</h3>
                                    <p className="text-gray-600">Create an account to show up when local buyers and sellers are looking for an agent</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <img src="assets/spot-monitor-data.svg" alt="Leads icon" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Generate and manage leads</h3>
                                    <p className="text-gray-600">Connect with motivated buyers and sellers who visit Realtor.com looking for an agent</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <img src="assets/spot-message.svg" alt="Brand icon" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Build your brand</h3>
                                    <p className="text-gray-600">Increase your visibility on Realtor.com and across social media with paid promotions</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <img src="assets/spot-agent.svg" alt="Listings icon" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Win and sell listings</h3>
                                    <p className="text-gray-600">Access free data about your listings' performance, connect with local sellers, ace listing presentations, and run listing promotions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sign Up Form */}
                    <div className="bg-white p-8 rounded-lg shadow-sm  ">
                        <h1 className="text-3xl font-bold mb-6">Create your PROFO account</h1>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email address*</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone No.*</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={phoneNo}
                                        onChange={(e)=>setPhoneNo(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                    {/* <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" /> */}
                                </div>
                            </div>

                            {
                                showOtp && <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">OTP*</label>
                                    <input
                                        type="numer"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            }

                           {
                                !showOtp ? <button
                                    onClick={handleSignup}
                                    className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                >
                                    Create account
                                </button> : <button
                                        onClick={handleVerifyOtp}
                                    className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                >
                                    Verify OTP
                                </button>
                           }

                            <p className="text-center text-sm text-gray-600">
                                Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                {/* <div className="mt-8 text-center text-sm text-gray-600">
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Support</a>
                        <a href="#" className="hover:underline">Ad Choices</a>
                        <a href="#" className="hover:underline">Privacy / Website terms of use</a>
                        <a href="#" className="hover:underline">Do not sell my personal information</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Signup;