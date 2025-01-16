import React, { useState } from "react";
import LocationAccessPopup from "../components/LocationAccessPopup";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import FloatButtonShowMap from '../components/FloatButtonShowMap'
import FiltersSection from "../components/FiltersSection";
import PropertyCard from "../components/PropertyCard";
import { getAllProperties } from "../redux/features/Properties/propertiesSlice";

function PropertiesPage() {
    const dispatch = useDispatch()
    const { properties } = useSelector((state) => state.properties);
    const { filteredProperties, currentPage, totalCount, totalPages } = useSelector((state) => state.properties);
    // Determine which list to render
    const propertiesToDisplay = filteredProperties?.length > 0 ? filteredProperties : properties;
    const [show , setShow] = useState(true) // if map open properties will be hidden and vice-verse
    console.log(propertiesToDisplay)


    const handleLoadMore = () => {
        dispatch(getAllProperties(currentPage + 1))

    }

    return (
        <div className="w-full h-full bg-white">
            <FiltersSection />
            <div><FloatButtonShowMap setShow={setShow}/></div>
            {/* <LocationAccessPopup /> */}
            {/* <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"> */}
            {show &&  <div className="grid property-grid gap-6 px-4 py-4">
                {propertiesToDisplay?.length > 0 ? (
                    propertiesToDisplay?.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No properties available to display.
                    </div>
                )}
            </div>}

            {currentPage <= totalPages - 1 && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-3 bg-[#CB0A01] text-white rounded-lg shadow-md hover:bg-[#080808] transition-all duration-200 focus:outline-none"
                    >
                        Load More
                    </button>
                </div>
            )}

        </div>
    );
}

export default PropertiesPage;
