import React from 'react';
import { QRCode } from 'antd';
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const AppDownloadBanner = () => {
    const ratings = [
        { platform: 'App Store', rating: '4.8★', icon: <FaApple /> },
        { platform: 'Play Store', rating: '4.6★', icon: <IoLogoGooglePlaystore /> },
        // { platform: 'Huawei', rating: '4.8★', icon: '🔄' },
        // { platform: 'Other', rating: '4.3★', icon: '📱' }
    ];

    return (
        <div className="w-full bg-[#2E2F33] p-4 md:p-6 rounded-2xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                <div className="">
                    <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                        IT'S EASIER TO SEARCH FOR AN APARTMENT IN THE APP
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-white p-2 rounded-md">
                        <QRCode
                            value="https://play.google.com/store/apps/details?id=com.yourapp.package"
                            size={100}
                            style={{ margin: 0 }}
                            bordered={false}
                        />
                    </div>

                    <div className="text-white">
                        <p className="text-md mb-3">Point your smartphone camera to download the app</p>
                        <div className="flex flex-wrap gap-4">
                            {ratings.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-xl ">{item.icon}</span>
                                    <span className="text-sm font-medium">{item.rating}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDownloadBanner;