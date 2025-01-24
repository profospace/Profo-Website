import React from 'react';

const PropertyDetailBuildingInfo = ({data}) => {
    return (
        <div className=" bg-white rounded-xl shadow-lg overflow-hidden flex ">
            <div className="relative">
                <img
                    src="https://avatars.mds.yandex.net/get-verba/1030388/2a00000193779235bef56c22477f7c18dd10/realty_app_large"
                    // src={data?.galleryList?.[0]}
                    alt="Nova Residential Towers"
                    className="w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-full">
                    <span className="text-sm font-medium">25% discount</span>
                </div>
            </div>
            <div className="bg-[#0E1317] text-white min-w-96 px-6 py-8">
                <h2 className="text-3xl font-bold mb-2">{data?.name}</h2>
                <p className="mb-4">22,797,118 - 107,384,992 RUR</p>
                <div className="flex items-center mb-4">
                    <svg
                        className="w-5 h-5 mr-2 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">{data?.frontRoad}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{data?.description}</p>
                <div className="flex items-center mb-4">
                    <svg
                        className="w-5 h-5 mr-2 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-sm">500 m to Pokionnaya Hill</span>
                </div>
                <div className="flex items-center mb-4">
                    <svg
                        className="w-5 h-5 mr-2 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-sm">Landscaped area of 5 hectares</span>
                </div>
                <div className="flex items-center mb-4">
                    <svg
                        className="w-5 h-5 mr-2 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">Unique planning solutions</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg w-full">
                    {data?.contactNumber}
                </button>
                <button className="text-blue-500 bg-[#1F2A36] font-medium py-3 px-6 rounded-lg w-full mt-4">
                    Call me
                </button>
            </div>
        </div>
    );
};

export default PropertyDetailBuildingInfo;