import React, { useState } from 'react';
import { BsAndroid2, BsLightningCharge } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoNotificationsOutline } from 'react-icons/io5';

const AppDownload = () => {
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle SMS link sending logic here
    };

    return (
        <div className="bg-pink-400 flex items-center justify-center lg:mt-32 mt-6 py-6 appdownload">
            <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 p-4">
                {/* Left side with phone illustration */}
                <div className="absolute left-0 w-full md:w-1/2 lg:flex md:flex hidden justify-center ">
                    <div className="w-80">
                        <img
                            src="assets/uilogo.png"
                            // src="assets/appdownload.png"
                            alt="Makaan App Download"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Right side with content */}
                <div className="w-full md:w-1/2 text-white ml-auto">
                    <h1 className="text-3xl md:text-4xl font-light mb-12">
                        Download <span className="font-normal"> PROFO App</span>
                    </h1>

                    <div className="grid grid-cols-3 gap-8 mb-12">
                        <div className="flex flex-col items-center cursor-pointer">
                            <div className="w-12 h-12 border-2 border-dashed border-white rounded-full flex items-center justify-center mb-2">
                                {/* <img
                                    src="/assets/alert-icon.png"
                                    alt="Property Alert"
                                    className="w-6 h-6"
                                /> */}
                                <IoNotificationsOutline size={25} />

                            </div>
                            <span className="text-sm text-center">Property alert</span>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer">
                            <div className="w-12 h-12 border-2 border-dashed border-white rounded-full flex items-center justify-center mb-2">
                                {/* <img
                                    src="/assets/connect-icon.png"
                                    alt="Instant Connect"
                                    className="w-6 h-6"
                                /> */}
                                <BsLightningCharge size={25} />
                            </div>
                            <span className="text-sm text-center">Instant connect</span>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer">
                            <div className="w-12 h-12 border-2 border-dashed border-white rounded-full flex items-center justify-center mb-2">
                                {/* <img
                                    src="/assets/favorite-icon.png"
                                    alt="Mark Favorite"
                                    className="w-6 h-6"
                                /> */}
                                <IoMdHeartEmpty size={25} />
                            </div>
                            <span className="text-sm text-center">Mark Favorite</span>
                        </div>
                    </div>

                    {/* <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="flex gap-2">
                            <div className="flex-1 bg-white rounded-lg overflow-hidden flex items-center">
                                <span className="px-3 text-gray-500">+91</span>
                                <input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    className="flex-1 p-3 outline-none text-gray-700"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-3 bg-red-500 text-white rounded-lg whitespace-nowrap"
                            >
                                Get link in sms
                            </button>
                        </div>
                    </form> */}

                    <div className="flex gap-4 mt-8 items-center justify-center">
                        <button className="bg-white/10 px-6 py-2 rounded-lg flex items-center gap-2">
                            {/* <img
                                src="/assets/playstore-icon.png"
                                alt="Play Store"
                                className="w-6 h-6"
                            /> */}
                            <BsAndroid2 />
                            Play Store
                        </button>
                        <button className="bg-white/10 px-6 py-2 rounded-lg flex items-center gap-2">
                            {/* <img
                                src="/assets/appstore-icon.png"
                                alt="App Store"
                                className="w-6 h-6"
                            /> */}
                            <FaApple />
                            App Store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDownload;