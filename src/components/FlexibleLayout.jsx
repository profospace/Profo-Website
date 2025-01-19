import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import HomePageCard from './HomePageCard';

const FlexibleLayout = ({ 
  headingText = "New buildings",
  details = [],
  salesAdsPosition = "right", // can be "right" or "left"
  salesAdsTitle = "START OF SALES",
  salesAdsDescription = "Sales of properties in these buildings have just begun. Apartments at favorable prices and discounts for the first buyers"
}) => {
  const SalesAdsCard = () => (
    <div className="lg:w-full">
      <div className="bg-[#F3F3F6] rounded-lg p-6 sticky top-24">
        <h3 className="text-2xl font-bold mb-2">{salesAdsTitle}</h3>
        <p className="text-gray-700 text-md">
          {salesAdsDescription}
        </p>
        <button className="w-full bg-gray-900 text-white rounded-lg py-3 mt-64 hover:bg-gray-800 transition-colors">
          Read more
        </button>
      </div>
    </div>
  );

  const PropertyGrid = () => (
    <div className="lg:w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {details?.map((info, index) => (
          <HomePageCard key={index} info={info} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex items-center mb-6 gap-2">
        <h2 className="text-2xl font-bold">{headingText}</h2>
        <div><MdNavigateNext size={32} /></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {salesAdsPosition === "left" && (
          <div className="lg:w-1/4">
            <SalesAdsCard />
          </div>
        )}
        
        <div className={`lg:w-${salesAdsPosition === "none" ? "full" : "3/4"}`}>
          <PropertyGrid />
        </div>

        {salesAdsPosition === "right" && (
          <div className="lg:w-1/4">
            <SalesAdsCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default FlexibleLayout;