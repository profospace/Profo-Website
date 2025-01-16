import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ShareOptions = () => {
    const { propertyDetail } = useSelector(state => state.properties);
    const {pathname} = useLocation()
    console.log({pathname})
    const propertyInfo = {
        title: "Luxurious 2BHK Apartmen",
        description: "Spacious and well-lit apartment in the heart of the city.",
        image: propertyDetail?.galleryList?.[0],
        link: `http://localhost:5173${pathname}`,
    };

    const messageContent = `${propertyInfo.title}\n\n${propertyInfo.description}\nView more: ${propertyInfo.link}`;

    // Sharing handlers
    const shareViaWhatsApp = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(messageContent)}`;
        window.open(whatsappUrl, "_blank");
    };

    const shareViaSMS = () => {
        const smsUrl = `sms:?&body=${encodeURIComponent(messageContent)}`;
        window.open(smsUrl, "_self");
    };

    const shareViaEmail = () => {
        const emailUrl = `mailto:?subject=${encodeURIComponent(
            propertyInfo.title
        )}&body=${encodeURIComponent(messageContent)}`;
        window.open(emailUrl, "_self");
    };

    return (
        <div className="flex gap-4 mt-4">
            {/* WhatsApp */}
            <button
                onClick={shareViaWhatsApp}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
                <i className="fab fa-whatsapp"></i> WhatsApp
            </button>

            {/* SMS */}
            <button
                onClick={shareViaSMS}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                <i className="fas fa-sms"></i> SMS
            </button>

            {/* Email */}
            <button
                onClick={shareViaEmail}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
                <i className="fas fa-envelope"></i> Email
            </button>
        </div>
    );
};

export default ShareOptions;
