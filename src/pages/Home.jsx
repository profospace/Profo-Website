import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomePageCard from '../components/HomePageCard';
import { MdNavigateNext } from 'react-icons/md';
import FlexibleLayout from '../components/FlexibleLayout';
import AppDownloadBanner from '../components/AppDownloadBanner';
import { getAllBuildings, getAllProjects, getAllProperties, getFilterProperties, getMapFeed } from '../redux/features/Map/mapSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    const {  properties , projects } = useSelector(state => state.map)
    const {  buildings } = useSelector(state => state.buildings)
    // console.log(properties)

    // console.log("buildings", buildings)

    // const buildings = [
    //     {

    //     }, {

    //     }
    // ]


    

    // const properties = [
    //     {
    //         image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
    //         name: "Eco Bunino",
    //         price: 6195246,
    //         metro: "Alder",
    //         metroLineColor: "bg-red-500",
    //         walkTime: 21,
    //         label: "самолет"
    //     },
    //     {
    //         image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
    //         name: "JOIS",
    //         price: 15745064,
    //         metro: "Khoroshevo",
    //         metroLineColor: "bg-purple-500",
    //         walkTime: 8
    //     },
    //     {
    //         image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
    //         name: "Lucky",
    //         price: 103162496,
    //         metro: "Street of 1905",
    //         metroLineColor: "bg-purple-500",
    //         walkTime: 7
    //     },
    //     {
    //         image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
    //         name: "Troparevo Park",
    //         price: 6040224,
    //         metro: "Rumyantsevo",
    //         metroLineColor: "bg-red-500",
    //         walkTime: 13,
    //         label: "самолет"
    //     },
    //     {
    //         image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
    //         name: "Ever",
    //         price: 17904912,
    //         metro: "Vorontsovskaya",
    //         metroLineColor: "bg-yellow-500",
    //         walkTime: 9
    //     },
    //     {
    //         image: "https://avatars.mds.yandex.net/get-verba/787013/2a00000193780e1d1b80be02e6e0a6575dd9/realty_app_snippet_large",
    //         name: "Lavrushinsky",
    //         price: 151450000,
    //         metro: "Tretyakovskaya",
    //         metroLineColor: "bg-yellow-500",
    //         walkTime: 6
    //     }
    // ];

   

    // useEffect(
    //     ()=>{

    //         if (!navigator.geolocation) {
    //             alert("Geolocation is not supported by your browser");
    //             return;
    //         }

    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 const { latitude, longitude } = position.coords;

    //                 dispatch(getMapFeed({
    //                     latitude, longitude  , radius : 10000000000
    //                 }))
                   

    //             },
    //             (error) => {
    //                 console.error("Error retrieving location:", error);
    //                 alert("Unable to retrieve your location. Please try again.");
    //             }
    //         )
    //     },[]
    // )

   
    return (
        <div className=' px-8'>
            {/* Top Section */}
            {/* <div className="max-w-7xl mx-auto py-4">
                <h1 className="text-4xl font-bold mb-1 text-center uppercase">REAL ESTATE IN {!isCityLoading ? city + ' CITY' : "loading..."} </h1>

                <div className="w-full max-w-7xl mx-auto mb-12">
                    <div className="flex flex-wrap items-center gap-2 py-6">
                        <div className="relative">
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span>New buildings</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                Studio
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                1
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                2
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                                3
                            </button>
                            <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-200 bg-gray-50">
                                4+
                            </button>
                        </div>

                        <div className="flex-grow">
                            <input
                                type="text"
                                placeholder="Price up to, ₱"
                                className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300">
                            Metro
                        </button>

                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300" onClick={() => handleFilter('getMapFeed')} >
                            On the map
                        </button>

                        <button className="px-6 py-2 bg-[#F5CA20] hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition-colors">
                            Show 782 new buildings
                        </button>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-xl">Frequently searched</h2>
                        </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                        {services.map((service) => (
                            <div>
                                <div
                                    key={service.id}
                                    className="bg-[#F3F3F6] rounded-xl shadow-sm cursor-pointer w-32 h-auto overflow-hidden "
                                    onClick={()=>handleFilter(service?.type_name)}
                                >
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className=" rounded scale-150 hover:scale-150 transition-all ease-in-out duration-150 cover "
                                    />
                                </div>
                                <div className="text-xs flex justify-start mt-2 ">
                                    <p className='font-semibold'>{service.title}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}


            {/* New Buildings */}
            {/* <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center mb-6 gap-2">
                    <h2 className="text-2xl font-bold">New buildings </h2>
                    <div><MdNavigateNext size={32} /></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {properties?.map((property, index) => (
                                <HomePageCard key={index} property={property} />
                            ))}
                        </div>
                    </div>


                    
                    <div className="lg:w-1/4 ">
                        <div className="bg-[#F3F3F6] rounded-lg p-6 sticky top-24">
                            <h3 className="text-2xl font-bold mb-2">START OF SALES</h3>
                            <p className="text-gray-700 text-md">
                                Sales of properties in these buildings have just begun.
                                Apartments at favorable prices and discounts for the first buyers
                            </p>
                            <button className="w-full bg-gray-900 text-white rounded-lg py-3 mt-64 hover:bg-gray-800 transition-colors">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <FlexibleLayout details={properties} type="property" /> */}
            {/* <FlexibleLayout details={properties} salesAdsPosition="left" headingText="New Properties" />
            <FlexibleLayout details={properties} /> */}

            <FlexibleLayout
                type="property"
                headingText="New Properties"
                details={properties}
                salesAdsPosition="right"
                type_name="properties" // where to navigate
            />
            <FlexibleLayout
                type="project"
                headingText="New Projects"
                details={projects}
                salesAdsPosition="left"
                type_name="project"
            />
            <FlexibleLayout
                type="building"
                headingText="New Buildings"
                details={buildings}
                salesAdsPosition="right"
                type_name="buildings"
            />



            <div className='my-12'>
                <AppDownloadBanner />
            </div>

        </div>
    )
}

export default Home