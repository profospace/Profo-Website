// import React from 'react';
// import { MdNavigateNext } from "react-icons/md";
// import HomePageCard from './HomePageCard';
// import { useDispatch } from 'react-redux';
// import { applyFilter, getAllBuildings, getAllProjects, getAllProperties, getFilterProperties } from '../redux/features/Map/mapSlice';
// import { useNavigate } from 'react-router-dom';

// const FlexibleLayout = ({
//   headingText = "New buildings",
//   details = [],
//   type,
//   type_name,
//   salesAdsPosition = "right", // can be "right" or "left"
//   salesAdsTitle = "START OF SALES",
//   salesAdsDescription = "Sales of properties in these buildings have just begun. Apartments at favorable prices and discounts for the first buyers"
// }) => {

//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleFilter = (type_name)=> {
//     console.log("type_name", type_name)
//     dispatch(applyFilter( {
//       vanilla : type_name
//     }))
//     navigate('/main')

//   }

//   // const handleFilter = (type_name) => {
//   //   if (!navigator.geolocation) {
//   //     alert("Geolocation is not supported by your browser");
//   //     return;
//   //   }

//   //   navigator.geolocation.getCurrentPosition(
//   //     (position) => {
//   //       const { latitude, longitude } = position.coords;

//   //       if (type_name === "project") {
//   //         dispatch(getAllProjects())

//   //       }
//   //       else if (type_name === "buildings") {
//   //         dispatch(getAllBuildings())

//   //       }
//   //       else if (type_name === "properties") {
//   //         dispatch(getAllProperties())
//   //       }
//   //       else if (type_name === 'getMapFeed') {
//   //         dispatch(getMapFeed({
//   //           latitude,
//   //           longitude,
//   //           radius: 1
//   //         }))
//   //       }
//   //       else {
//   //         // Dispatch action with the location and type_name
//   //         dispatch(getFilterProperties({ latitude, longitude, type_name }));
//   //       }
//   //       navigate('/main')

//   //     },
//   //     (error) => {
//   //       console.error("Error retrieving location:", error);
//   //       alert("Unable to retrieve your location. Please try again.");
//   //     }
//   //   );
//   // };


//   const SalesAdsCard = () => (
//     <div className="lg:w-full">
//       <div className="bg-[#F3F3F6] rounded-lg p-6 sticky top-24">
//         <h3 className="text-2xl font-bold mb-2">{salesAdsTitle}</h3>
//         <p className="text-gray-700 text-md">
//           {salesAdsDescription}
//         </p>
//         <button className="w-full bg-gray-900 text-white rounded-lg py-3 mt-64 hover:bg-gray-800 transition-colors">
//           Read more
//         </button>
//       </div>
//     </div>
//   );

 
//   const PropertyGrid = () => {
//     if (type === 'property') {
//       return (
//         <div className="lg:w-full">
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//             {details
//               ?.slice(0, 6) // Get the last 6 items
//               .map((info, index) => (
//                 <HomePageCard
//                   key={index}
//                   info={info}
//                   image={info?.galleryList?.[0] || "https://wityysaver.s3.ap-south-1.amazonaws.com/gallery_images/b8639f5d-7225-415d-b83e-be0a5967a71b_674e8894ab43d8216f491623_674e81fb4c683aec86c96464_DSC09774-HDR.avif"}
//                   price={info?.price}
//                   label={info?.post_title}
//                   type={info?.type_name}
//                   contactList = {info?.contactList}
//                   navigation={`/api/details/${info?.post_id}`}
//                 />
//               ))}
//           </div>
//         </div>
//       );
//     }
//     else if (type === 'project') {
//       return (
//         <div className="lg:w-full">
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//             {details?.map((info, index) => (
//               <HomePageCard
//                 key={index}
//                 // info={info}
//                 image={info?.gallery?.[0]?.images?.[0] || 'https://avatars.mds.yandex.net/get-realty-offers/14535939/1710ec57-6a73-4d64-8b64-56c5ae4a4994/large'}
//                 price={info?.price || 50000}
//                 label={info?.name}
//                 type={info?.type}
//                 navigation={`/api/details/project/${info?.projectId}`}

//               />
//             ))}
//           </div>
//         </div>
//       );
//     }
//     else if (type === 'building') {
//       return (
//         <div className="lg:w-full">
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//             {details?.slice(-6).map((info, index) => (
//               <HomePageCard
//                 key={index}
//                 info={info}
//                 image={info?.galleryList?.[0] || 'https://avatars.mds.yandex.net/get-realty-offers/14535939/1710ec57-6a73-4d64-8b64-56c5ae4a4994/large'}
//                 price={info?.price || 560000}
//                 label={info?.name || 'Not Available'}
//                 type={info?.type}
//                 navigation={`/api/details/building/${info?.buildingId}`}

//               />
//             ))}
//           </div>
//         </div>
//       );
//     }


//   };


//   return (
//     <div className="max-w-7xl mx-auto py-8">
//       <div className="flex items-center mb-6 gap-2 cursor-pointer " onClick={() => handleFilter(type_name)}>
//         <h2 className="text-2xl font-bold" >{headingText}</h2>
//         <div><MdNavigateNext size={32} /></div>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-4">
//         {salesAdsPosition === "left" && (
//           <div className="lg:w-1/4">
//             <SalesAdsCard />
//           </div>
//         )}

//         <div className={`lg:w-${salesAdsPosition === "none" ? "full" : "3/4"}`}>
//           <PropertyGrid />
//         </div>

//         {salesAdsPosition === "right" && (
//           <div className="lg:w-1/4">
//             <SalesAdsCard />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FlexibleLayout;


import React, { useRef, useEffect, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import HomePageCard from './HomePageCard';
import { useDispatch } from 'react-redux';
import { applyFilter } from '../redux/features/Map/mapSlice';
import { useNavigate } from 'react-router-dom';

const FlexibleLayout = ({
  headingText = "New buildings",
  details = [],
  type,
  type_name,
  salesAdsPosition = "right",
  salesAdsTitle = "START OF SALES",
  salesAdsDescription = "Sales of properties in these buildings have just begun. Apartments at favorable prices and discounts for the first buyers"
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const propertyGridRef = useRef(null);
  const [gridHeight, setGridHeight] = useState(0);

  const handleFilter = (type_name) => {
    console.log("type_name", type_name);
    dispatch(applyFilter({
      vanilla: type_name
    }));
    navigate('/main');
  };

  useEffect(() => {
    const updateHeight = () => {
      if (propertyGridRef.current) {
        setGridHeight(propertyGridRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    updateHeight();

    // Set up resize observer to handle dynamic content changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (propertyGridRef.current) {
      resizeObserver.observe(propertyGridRef.current);
    }

    // Clean up
    return () => {
      if (propertyGridRef.current) {
        resizeObserver.unobserve(propertyGridRef.current);
      }
    };
  }, [details]); // Re-run when details change

  const SalesAdsCard = () => (
    <div className="lg:w-full">
      <div
        className="bg-[#F3F3F6] rounded-lg p-6 sticky top-24"
        style={{ height: gridHeight > 0 ? `${gridHeight}px` : 'auto' }}
      >
        <h3 className="text-2xl font-bold mb-2">{salesAdsTitle}</h3>
        <p className="text-gray-700 text-md">
          {salesAdsDescription}
        </p>
        <button className="w-full bg-gray-900 text-white rounded-lg py-3 hover:bg-gray-800 transition-colors absolute bottom-0 left-0 right-0  ">
          Read more
        </button>
      </div>
    </div>
  );

  const PropertyGrid = () => {
    if (type === 'property') {
      return (
        <div className="lg:w-full" ref={propertyGridRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {details
              ?.slice(0, 6)
              .map((info, index) => (
                <HomePageCard
                  key={index}
                  info={info}
                  image={info?.galleryList?.[0] || "https://wityysaver.s3.ap-south-1.amazonaws.com/gallery_images/b8639f5d-7225-415d-b83e-be0a5967a71b_674e8894ab43d8216f491623_674e81fb4c683aec86c96464_DSC09774-HDR.avif"}
                  price={info?.price}
                  label={info?.post_title}
                  type={info?.type_name}
                  contactList={info?.contactList}
                  navigation={`/api/details/${info?.post_id}`}
                  bedrooms={info?.bedrooms}
                  address={info?.address}
                  amenities={info?.amenities?.length}
                  gallery={info?.galleryList}
                />
              ))}
          </div>
        </div>
      );
    } else if (type === 'project') {
      return (
        <div className="lg:w-full" ref={propertyGridRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {details?.map((info, index) => (
              <HomePageCard
                key={index}
                image={info?.gallery?.[0]?.images?.[0] || 'https://avatars.mds.yandex.net/get-realty-offers/14535939/1710ec57-6a73-4d64-8b64-56c5ae4a4994/large'}
                price={info?.price || 50000}
                label={info?.name}
                type={info?.type}
                navigation={`/api/details/project/${info?.projectId}`}
              />
            ))}
          </div>
        </div>
      );
    } else if (type === 'building') {
      return (
        <div className="lg:w-full" ref={propertyGridRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {details?.slice(-6).map((info, index) => (
              <HomePageCard
                key={index}
                info={info}
                image={info?.galleryList?.[0] || 'https://avatars.mds.yandex.net/get-realty-offers/14535939/1710ec57-6a73-4d64-8b64-56c5ae4a4994/large'}
                price={info?.price || 560000}
                label={info?.name || 'Not Available'}
                type={info?.type}
                navigation={`/api/details/building/${info?.buildingId}`}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex items-center mb-6 gap-2 cursor-pointer" onClick={() => handleFilter(type_name)}>
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