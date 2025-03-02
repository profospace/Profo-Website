// import React, { useState } from 'react';
// import { MapPin, Clock, Heart, Mail, Phone } from 'lucide-react';

// const PropertyContactCard = ({ details, handleButtonClick }) => {
//     const [isLiked, setIsLiked] = useState(false);
//     const [showContacts, setShowContacts] = useState(false);
//     console.log("details", details)
//     // Calculate time since creation
//     // const getTimeSince = (createdAt) => {
//     //     const created = new Date(createdAt);
//     //     const now = new Date();
//     //     const hours = Math.floor((now - created) / (1000 * 60 * 60));
//     //     return `${hours} hours ago`;
//     // };
//     const getTimeSince = (createdAt) => {
//         const created = new Date(createdAt);
//         const now = new Date();
//         const diffMs = now - created;

//         const seconds = Math.floor(diffMs / 1000);
//         const minutes = Math.floor(seconds / 60);
//         const hours = Math.floor(minutes / 60);
//         const days = Math.floor(hours / 24);
//         const years = Math.floor(days / 365);

//         if (seconds < 60) return `${seconds} sec ago`;
//         if (minutes < 60) return `${minutes} min ago`;
//         if (hours < 24) return `${hours} hours ago`;
//         if (days < 365) return `${days} days ago`;
//         return `${years} years ago`;
//     };

//     // Comprehensive data validation function
//     const hasValidData = () => {
//         return (
//             details?.name ||
//             details?.contacts?.[1] ||
//             details?.logo ||
//             details?.experience ||
//             (details?.operatingLocations && details.operatingLocations.length > 0) ||
//             (details?.statistics?.completedProjects > 0) ||
//             (details?.statistics?.ongoingProjects > 0) ||
//             details?.contacts?.[0]
//         );
//     };
//     return (
//         hasValidData() && (
//             <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm py-4 px-6">
//                 <div className="flex justify-between items-start mb-2">
//                     <span className="text-gray-500 text-sm">
//                         <span>{getTimeSince(details?.createdAt)}</span>, {
//                             details?.statistics?.totalProperties != 0 && <span>{details?.statistics?.totalProperties} properties</span>
//                         }
//                     </span>
//                     <button
//                         onClick={() => setIsLiked(!isLiked)}
//                         className="text-gray-400 hover:text-red-500"
//                     >
//                         <Heart
//                             className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
//                         />
//                     </button>
//                 </div>

//                 <h2 className="text-lg font-semibold mb-2">{details?.name}</h2>

//                 <div className="flex items-center gap-2 mb-4">
//                     {details?.statistics?.completedProjects != 0 && <span className="text-2xl font-bold">{details?.statistics?.completedProjects} Projects</span>}
//                     {
//                         details?.experience != 0 && <span className="text-gray-400">{details?.experience} years experience</span>
//                     }

//                 </div>

//                 <div className="flex gap-2 mb-6">
//                     <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
//                         {details?.status}
//                     </span>
//                     {
//                         details?.statistics?.ongoingProjects != 0 && <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
//                             {details?.statistics?.ongoingProjects} ongoing
//                         </span>
//                     }

//                     {/* <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
//                         Est. {details?.establishedYear}
//                     </span> */}
//                 </div>


//                 {
//                     details?.contacts[0] && <button
//                         onClick={() => setShowContacts(!showContacts)}
//                         className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg mb-6"
//                     >
//                         {showContacts ? details?.contacts[0] : 'Show contact details'}
//                     </button>
//                 }


//                 <div className="flex items-center gap-3 mb-4">
//                     {/* <div className="w-10 h-10 bg-blue-100 rounded-lg"></div> */}
//                     <img src='https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/68322723ec624a9d1c49f92c279d66e2.svg' className='w-10 h-10' />
//                     <div>
//                         {
//                             details?.company && <p className="font-medium">{details?.company}</p>
//                         }
//                         {
//                             details?.website && <p className="text-blue-500">{details?.website}</p>
//                         }

//                     </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                     {details?.address && <MapPin className="w-5 h-5 text-red-500 mt-1" />}
//                     <div>
//                         <p className="mb-1">{details?.address?.street}</p>
//                         <div className="flex items-center gap-2">
//                             <span className="font-medium">{details?.address?.city}</span>
//                             <span className="text-gray-400">{details?.address?.state}</span>
//                         </div>
//                         {details?.operatingLocations?.length != 0 &&
//                             <p className="text-gray-400 mt-1">
//                                 Operating in {details?.operatingLocations?.length} locations
//                             </p>}
//                     </div>
//                 </div>

//                 {showContacts && details?.contacts?.length != 0 && (
//                     <div className="mt-4 space-y-2">
//                         <div className="flex items-center gap-2">
//                             <Mail className="w-4 h-4" />
//                             <span>{details?.contacts?.[1]}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Phone className="w-4 h-4" />
//                             <span>{details?.contacts?.[2]}</span>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         )
//     );
// };

// export default PropertyContactCard;

import React, { useState } from 'react';
import { Heart, MapPin, Mail, Phone } from 'lucide-react';
import { Callback } from './Callback';

const PropertyContactCard = ({ details, handleButtonClick }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    console.log(details)

    const getTimeSince = (createdAt) => {
        const created = new Date(createdAt);
        const now = new Date();
        const diffMs = now - created;

        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);

        if (seconds < 60) return `${seconds} sec ago`;
        if (minutes < 60) return `${minutes} min ago`;
        if (hours < 24) return `${hours} hours ago`;
        if (days < 365) return `${days} days ago`;
        return `${years} years ago`;
    };

    const hasValidData = () => {
        return (
            details?.name ||
            details?.ownerName ||
            details?.contacts?.[1] ||
            details?.contactList?.[0] ||
            details?.logo ||
            details?.experience ||
            (details?.operatingLocations && details.operatingLocations.length > 0) ||
            (details?.region && details.region.length > 0) ||
            (details?.statistics?.completedProjects > 0) ||
            (details?.statistics?.ongoingProjects > 0) ||
            details?.contacts?.[0] ||
            details?.contactList?.[0]
        );
    };

    return (
        hasValidData() && (
            <div className="max-w-xl mx-auto bg-gray-50 rounded-lg shadow-sm  py-4 px-6">
                <div className="flex justify-between items-start mb-2">
                    <div className='flex gap-2 items-center'>
                        <span className="text-gray-500 text-sm">
                            <span>{getTimeSince(details?.createdAt || new Date())}</span>
                            {details?.statistics?.totalProperties != 0 &&
                                <span> {details?.statistics?.totalProperties} {details?.statistics?.totalProperties && "properties"}</span>
                            }
                        </span>
                        {details?.region && (
                            <span className="px-4 py-[1.5px] text-sm font-medium border border-green-500 text-green-600 bg-green-50 rounded-full shadow-sm hover:bg-green-100 transition">
                                {details?.region}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className="text-gray-400 hover:text-red-500"
                    >
                        <Heart
                            className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
                        />
                    </button>
                </div>

                <div className='flex gap-5 items-center'>
                    <h2 className="text-lg font-semibold">{details?.ownerName}</h2>

                </div>

                <div className="flex items-center gap-2 mb-4">
                    {details?.statistics?.completedProjects != 0 &&
                        <span className="text-2xl font-bold">
                            {details?.statistics?.completedProjects} {details?.statistics?.completedProjects && "Projects"}
                        </span>
                    }
                    {details?.experience != 0 &&
                        <span className="text-gray-400">
                            {details?.experience} {details?.experience && "years experience"}
                        </span>
                    }
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {details?.status &&
                        <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                            {details.status}
                        </span>
                    }
                    {details?.statistics?.ongoingProjects &&
                        <span className="capitalize px-3 py-1 bg-gray-100 rounded-full text-sm">
                            {details?.statistics?.ongoingProjects} {details?.statistics?.ongoingProjects && "ongoing"}
                        </span>
                    }


                    <div className='flex flex-col items-start gap-2'>
                        {/* Tags Section */}
                        <div className='flex gap-2 flex-wrap'>
                            {details?.tags?.map((tag, index) => (
                                <span key={index} className="px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full shadow-sm bg-white hover:bg-gray-50 transition">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Ownership Section */}
                        <div className='flex items-center gap-2 pl-2'>
                            <h1 className="text-sm font-semibold text-gray-600 pr-2">Ownership:</h1>
                            {details?.ownershipTypes?.map((value, index) => (
                                <span key={index} className="px-4 py-1 text-sm font-medium capitalize border border-blue-500 text-blue-600 bg-blue-50 rounded-full shadow-sm hover:bg-blue-100 transition">
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>



                </div>






                {details?.contactList?.[0] &&
                    <button
                        onClick={() => setShowContacts(!showContacts)}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg mb-2"
                    >
                        {showContacts ? details.contactList[0] : 'Show contact details'}
                    </button>

                }
                                    {/* builderId: propertyDetail?.builder?.id */}
                    <Callback builderId={details?.id}/>

                <div className="flex items-center gap-3">
                    {details?.name && <img
                        src='https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/68322723ec624a9d1c49f92c279d66e2.svg'
                        className='w-10 h-10'
                        alt="Company logo"
                    />}
                    {details?.name && <div>
                        {details?.company &&
                            <p className="font-medium">{details.company}</p>
                        }
                        {details?.website &&
                            <p className="text-blue-500">{details.website}</p>
                        }
                    </div>}
                </div>

                <div className="flex items-start gap-3">
                    {(details?.address || details?.region) && details?.name &&
                        <MapPin className="w-5 h-5 text-red-500 mt-1" />
                    }
                    <div>
                        {details?.address && (
                            <>
                                <p className="mb-1">{details.address.street}</p>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{details.address.city}</span>
                                    <span className="text-gray-400">{details.address.state}</span>
                                </div>
                            </>
                        )}
                        {details?.region &&
                            <p className="text-gray-400 mt-1">
                                {/* Operating in {details.region.join(', ')} */}
                            </p>
                        }
                    </div>
                </div>



                {showContacts && details?.contactList?.length > 1 && (
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{details.contactList[0]}</span>
                        </div>
                        {details.contactList[1] && (
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>{details.contactList[1]}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    );
};

export default PropertyContactCard;