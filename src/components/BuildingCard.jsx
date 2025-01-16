// import React from 'react'

// const AllInOneCard = ({
//     image,
//     price,
//     name,
//     location,
//     metroLine,
//     duration,
//     isSamolet
// }) => (
//     <div className="relative w-full max-w-md cursor-pointer group">
//         <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
//             <img
//                 src={image}
//                 alt={name}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             {isSamolet && (
//                 <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg">
//                     <span className="text-blue-500 font-medium text-sm">самолет</span>
//                 </div>
//             )}
//             <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//                 </svg>
//             </button>
//         </div>

//         <div className="mt-4 space-y-2">
//             <div className="font-medium text-xl text-gray-900">
//                 from {new Intl.NumberFormat('ru-RU').format(price)} ₽
//             </div>

//             <div className="text-lg font-medium text-gray-900">{name}</div>

//             <div className="flex items-center space-x-2">
//                 <div className={`w-5 h-5 rounded-full flex-shrink-0 ${metroLine === 'red' ? 'bg-red-500' :
//                     metroLine === 'purple' ? 'bg-purple-500' :
//                         'bg-emerald-500'
//                     }`} />
//                 <span className="text-gray-900">{location}</span>
//                 <div className="flex items-center space-x-1 text-gray-500">
//                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                         <path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>{duration} min.</span>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// export default AllInOneCard

import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { MdCrueltyFree } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function BuildingCard({
    name, ownerName, type, galleryList, developmentStatus, freeProperties, totalFloors, totalProperties
    , buildingId
}) {
    const navigate = useNavigate()

    const handleCardClick = () => {
        navigate(`/api/details/building/${buildingId}`); // Navigate to the route with the post ID
    };
    

  return (
      <div className="relative w-full max-w-[280px] md:max-w-[240px] lg:max-w-[280px] cursor-pointer group" onClick={handleCardClick}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img
                  src={galleryList?.[0] || 'assets/testing.avif'}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-white px-2 py-0 rounded-md shadow-sm">
                  <span className="text-blue-500 font-medium text-xs">{type}</span>
              </div>
              <button className="absolute top-3 right-3 w-7 h-7rounded-full flex items-center justify-center  transition-colors">
                  <CiHeart color='white' />
              </button>
          </div>

          <div className="my-2">
              <div className='flex justify-between'>
                  <div className="font-md text-xl font-semibold text-gray-900 capitalize">
                      {ownerName}
                  </div>
                  <div className="bg-white px-2 py-0 rounded-md shadow-sm">
                      <span className="text-blue-500 font-medium text-xs capitalize">{developmentStatus}</span>
                  </div>
              </div>

              <div className="text-sm font-medium text-gray-800 truncate">{name}</div>

              <div className="flex items-center space-x-2">
                  <div className='flex gap-4 mt-2'>
                      <div className='text-center'>
                          <div className='text-xs font-semibold'>{freeProperties || 0}</div>
                          <div className='text-[10px] '>Free Properties</div>
                      </div>
                      <div className='text-center'>
                          <div className='text-xs font-semibold'>{totalFloors || 0}</div>
                          <div className='text-[10px] '>Total Floors</div>
                      </div>
                      <div className='text-center'>
                          <div className='text-xs font-semibold'>{totalProperties || 0}</div>
                          <div className='text-[10px] '>Total Properties</div>
                      </div>
                  </div>
                  {/* <div
                    className={`w-4 h-4 rounded-full flex-shrink-0 ${metroLine === 'red'
                            ? 'bg-red-500'
                            : metroLine === 'purple'
                                ? 'bg-purple-500'
                                : 'bg-emerald-500'
                        }`}
                /> */}
                  {/* <span className="text-gray-800 text-sm">{location}</span> */}
              </div>
          </div>
      </div>
  )
}

export default BuildingCard



