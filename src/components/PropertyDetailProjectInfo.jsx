// import React from 'react';

// const PropertyDetailProjectInfo = ({data}) => {
//     // const [showPhoneNo, ]
//     console.log(data)
//     return (
//         <div className=" bg-white rounded-xl shadow-lg overflow-hidden flex ">
//             <div className="relative">
//                 <img
//                     // src="https://avatars.mds.yandex.net/get-verba/1030388/2a00000193779235bef56c22477f7c18dd10/realty_app_large"
//                     src={data?.galleryList?.[0]}
//                     alt="Nova Residential Towers"
//                     className="w-full object-cover"
//                 />
//                 <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-full">
//                     <span className="text-sm font-medium">25% discount</span>
//                 </div>
//             </div>
//             <div className="bg-[#0E1317] text-white min-w-96 px-6 py-8">
//                 <h2 className="text-3xl font-bold mb-2">{data?.name}</h2>
//                 <p className="mb-4">22,797,118 - 107,384,992 RUR</p>
//                 <div className="flex items-center mb-4">
//                     <svg
//                         className="w-5 h-5 mr-2 text-yellow-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                     <span className="text-sm">{data?.frontRoad}</span>
//                 </div>
//                 <p className="text-sm text-gray-500 mb-4">{data?.description}</p>
//                 <div className="flex items-center mb-4">
//                     <svg
//                         className="w-5 h-5 mr-2 text-gray-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                     <span className="text-sm">{data?.location?.address}</span>
//                 </div>
//                 <div className="flex items-center mb-4">
//                     <svg
//                         className="w-5 h-5 mr-2 text-gray-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                         <path
//                             fillRule="evenodd"
//                             d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
//                             clipRule="evenodd"
//                         />
//                     </svg>
//                     <span className="text-sm">Landscaped area of 5 hectares</span>
//                 </div>
//                 <div className="flex items-center mb-4">
//                     <svg
//                         className="w-5 h-5 mr-2 text-gray-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                     <span className="text-sm">Unique planning solutions</span>
//                 </div>
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg w-full">
//                     {data?.contactNumber}
//                 </button>
//                 <button className="text-blue-500 bg-[#1F2A36] font-medium py-3 px-6 rounded-lg w-full mt-4">
//                     Call me
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PropertyDetailProjectInfo;

import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertyDetailProjectInfo = ({ data , contactNumber }) => {
    const navigate = useNavigate()
    console.log('data' , data)
    const formatPrice = (min, max) => {
        return `${(min / 1000000).toFixed(1)} — ${(max / 1000000).toFixed(1)} ₹`;
    };

    const truncateAddress = (address, maxLength = 50) => {
        if (!address) return '';
        return address.length > maxLength
            ? address.substring(0, maxLength) + '...'
            : address;
    };

    return (
        <div className="relative flex h-[500px] w-full overflow-hidden rounded-xl bg-white shadow-lg" onClick={() => navigate(`/api/details/project/${data?.projectId}`)}>
            {/* Left side - Image */}
            <div className="relative w-2/3">
                <img
                    src={data?.gallery?.[0]?.images?.[0] || '/api/placeholder/800/500'}
                    alt={data?.name}
                    className="h-full w-full object-cover"
                />
                {/* Tags at top */}
                <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-white px-4 py-1 text-sm">5% discount</span>
                    <span className="rounded-full bg-white px-4 py-1 text-sm">+6 shares</span>
                    <span className="rounded-full bg-white px-4 py-1 text-sm">elite</span>
                </div>
            </div>

            {/* Right side - Info */}
            <div className="flex w-1/3 flex-col bg-[#0E1317] p-8 text-white">
                {/* Header section */}
                <div className="mb-6">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{data?.name || 'NOVA'}</h2>
                        <Heart className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-lg">
                        {formatPrice(data?.overview?.priceRange?.min, data?.overview?.priceRange?.max)}
                    </p>

                    <div className="mt-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">{data?.location?.landmark}</span>
                            <span className="text-sm text-gray-400">21 minutes</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-400">
                            {truncateAddress(data?.location?.address)}
                        </p>
                    </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-white/10 p-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p className="text-sm">{data?.highlights?.[0]?.title}</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-white/10 p-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <p className="text-sm">{data?.amenities?.[0]?.category}</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-white/10 p-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-sm">{data?.specification?.[0]?.category}</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-white/10 p-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="text-sm">{ data?.nearbyLocations?.[0]?.type}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto space-y-4 pt-6">
                    <button className="w-full rounded-lg bg-blue-600 py-3 text-center font-medium">
                        {contactNumber || "+7 xxx xxx xx xx"}
                    </button>
                    <button className="w-full rounded-lg bg-[#1F2A36] py-3 text-center font-medium text-blue-500">
                        Call me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailProjectInfo;