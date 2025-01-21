import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import HomePageCard from './HomePageCard';
import { useDispatch } from 'react-redux';
import { getAllBuildings, getAllProjects, getAllProperties, getFilterProperties } from '../redux/features/Map/mapSlice';
import { useNavigate } from 'react-router-dom';

const FlexibleLayout = ({ 
  headingText = "New buildings",
  details = [],
  type ,
  type_name,
  salesAdsPosition = "right", // can be "right" or "left"
  salesAdsTitle = "START OF SALES",
  salesAdsDescription = "Sales of properties in these buildings have just begun. Apartments at favorable prices and discounts for the first buyers"
}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFilter = (type_name) => {
          if (!navigator.geolocation) {
              alert("Geolocation is not supported by your browser");
              return;
          }
  
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  const { latitude, longitude } = position.coords;
  
                  if (type_name === "project"){
                      dispatch(getAllProjects())
  
                  }
                  else if (type_name === "buildings"){
                      dispatch(getAllBuildings())
                      
                  }
                  else if (type_name === "properties"){
                      dispatch(getAllProperties())
                  }
                  else if (type_name === 'getMapFeed'){
                      dispatch(getMapFeed({
                          latitude,
                          longitude ,
                          radius : 1
                      }))
                  }
                  else{
                      // Dispatch action with the location and type_name
                      dispatch(getFilterProperties({ latitude, longitude, type_name }));
                  }
                  navigate('/main')
                  
              },
              (error) => {
                  console.error("Error retrieving location:", error);
                  alert("Unable to retrieve your location. Please try again.");
              }
          );
      };


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

  // const PropertyGrid = () => (
  //   <div className="lg:w-full">
  //     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
  //       {details?.map((info, index) => (
  //         <HomePageCard key={index} info={info} image={info?.galleryList?.[0]} price={info?.price} label={info?.post_title} type={info?.type_name} />
  //       ))}
  //     </div>
  //   </div>
  // );

  const PropertyGrid = () => {
    if (type === 'property') {
      return (
        <div className="lg:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {details
              ?.slice(-6) // Get the last 6 items
              .map((info, index) => (
                <HomePageCard
                  key={index}
                  info={info}
                  image={info?.galleryList?.[0]}
                  price={info?.price}
                  label={info?.post_title}
                  type={info?.type_name}
                />
              ))}
          </div>
        </div>
      );
    }
    else if (type === 'project'){
      return (
        <div className="lg:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {details?.map((info, index) => (
                <HomePageCard
                  key={index}
                  // info={info}
                image={info?.gallery?.[0]?.images?.[0]}
                  // price={info?.price}
                  // label={info?.post_title}
                  // type={info?.type}
                />
              ))}
          </div>
        </div>
      );
    }
    else if (type === 'building'){
      return (
        <div className="lg:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {details?.map((info, index) => (
                <HomePageCard
                  key={index}
                  // info={info}
                image="https://avatars.mds.yandex.net/get-verba/1540742/2a000001938ce76f87578a9a7f0caa9e70e6/realty_special_photo_3840"
                  // price={info?.price}
                  // label={info?.post_title}
                  // type={info?.type}
                />
              ))}
          </div>
        </div>
      );
    }

    
  };


  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex items-center mb-6 gap-2">
        <h2 className="text-2xl font-bold" onClick={() => handleFilter(type_name)}>{headingText}</h2>
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