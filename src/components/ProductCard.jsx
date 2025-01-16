import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Badge, Tag, Card, Space } from 'antd';
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import { PiPhoneDisconnectThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ property }) => {
    const navigate = useNavigate()
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    };

    /* Redirect to the google map on location Marker Click */
    const handleLocationClick = (latitude, longitude) => {
        const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(googleMapsURL, '_blank');  // Opens the link in a new tab
    }

    useEffect(() => {
        if (swiperInstance && currentIndex !== swiperInstance.activeIndex) {
            swiperInstance.slideTo(currentIndex);
        }
    }, [currentIndex, swiperInstance]);

    const handleCardClick = () => {
        navigate(`/details/${property?.post_id}`); // Navigate to the route with the post ID
    };

    return (
        <div className="cursor-pointer mb-5 group" onClick={handleCardClick}>
            <div className="">
                {/* Conditional Badge Ribbon of antd */}
                {property?.verified && (
                    <Badge.Ribbon
                        text="Verified"
                        color="green"
                        className="z-10"
                    />
                )}

                <div className="relative">
                    {/* Tag for Property Purpose */}
                    <div className="flex items-center absolute bottom-0 right-0 z-10">
                        {/* <div>{property?.purpose && (
                            <Tag
                                color="blue"
                                className=""
                            >
                                {property?.purpose}
                            </Tag>
                        )}</div> */}


                        {/* navigation to lat long */}
                        {/* <div className="cursor-pointer"
                            onClick={() => handleLocationClick(property?.latitude, property?.longitude)}>
                            <FaLocationArrow size={24} className="text-blue-500" />
                        </div> */}
                    </div>
                    {/* Swiper Gallery */}
                    <Swiper
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={setSwiperInstance}
                        modules={[Navigation, Pagination]}
                        className="relative"
                    >
                        {property?.galleryList?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="aspect-ratio-box">
                                    <img src={image} alt={`Product ${index}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Previous button */}
                        {currentIndex > 0 && (
                            <button
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black group-hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow  group-hover:opacity-100 z-20"
                                onClick={() => swiperInstance?.slidePrev()}
                            >
                                <IoIosArrowBack />
                            </button>
                        )}
                        {/* Next button */}
                        {currentIndex < property?.galleryList?.length - 1 && (
                            <button
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black group-hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow  group-hover:opacity-100 z-20"
                                onClick={() => swiperInstance?.slideNext()}
                            >
                                <IoIosArrowForward />
                            </button>
                        )}
                    </Swiper>

                </div>
            </div>
            <div className="mt-1 py-1">
                <h3 className="text-md font-semibold capitalize">{property?.post_title}</h3>
                <p className="text-gray-600 text-xs">{property?.address}</p>
                {/* Tag for Property Purpose,area, constr_status */}
                <div className="flex gap-2 items-center py-2 mt-2">
                    <div>{property?.purpose && (
                        <Tag
                            color="black"
                            className=""
                        >
                            {property?.purpose}
                        </Tag>
                    )}</div>
                    <div>{property?.area && (
                        <Tag
                            color="black"
                            className=""
                        >
                            {property?.area + ' sq.ft.'}
                        </Tag>
                    )}</div>
                    <div>{property?.construction_status && (
                        <Tag
                            color="black"
                            className=""
                        >
                            {property?.construction_status}
                        </Tag>
                    )}</div>



                </div>
                {/* navigation to lat long & calling/connect+ */}
                <div className="flex items-center gap-6">
                    <Button variant="gradient" className="flex items-center gap-3 m-0 py-2 px-16" onClick={() => {
                        window.location.href = `tel:${property?.phone}`; // Replace with the desired phone number
                    }}>
                        Connect
                        <PiPhoneDisconnectThin size={16} />
                    </Button>
                    <div className="cursor-pointer"
                        onClick={() => handleLocationClick(property?.latitude, property?.longitude)}>
                        <FaLocationArrow size={28} color="black" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;
