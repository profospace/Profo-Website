import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DummyTestCard = () => {
    // const navigate = useNavigate()
    // console.log('data', data)
    // const formatPrice = (min, max) => {
    //     return `${(min / 1000000).toFixed(1)} — ${(max / 1000000).toFixed(1)} ₹`;
    // };

    // const truncateAddress = (address, maxLength = 50) => {
    //     if (!address) return '';
    //     return address.length > maxLength
    //         ? address.substring(0, maxLength) + '...'
    //         : address;
    // };

    return (
        <div className="relative flex h-[300px] w-full overflow-hidden rounded-xl bg-white shadow-lg" >
            {/* Left side - Image */}
            <div className="relative w-2/3">
                <img
                    src='https://wityysaver.s3.ap-south-1.amazonaws.com/projects/Aquafina%20project%20/gallery/a71d9fe2-c8bc-4b4f-b8d9-fa84d5d16199674e8894ab43d8216f491623_674e81fb4c683aec86c96464_DSC09774-HDR.avif'
                    // alt={data?.name}
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
            <div className="flex w-[90%] flex-col bg-[#0E1317] px-8 py-4 text-white">
                {/* Header section */}
                <div className="mb-">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">NOVA</h2>
                        <Heart className="h-6 w-6" />
                    </div>
                    <p className="mt-2 text-lg">
                        {/* {formatPrice(data?.overview?.priceRange?.min, data?.overview?.priceRange?.max)} */}
                        $78000 - $52000
                    </p>

                    <div className="mt-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Landmark</span>
                            <span className="text-sm text-gray-400">21 minutes</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-400">
                            {/* {truncateAddress(data?.location?.address)} */}
                            '442H/2 Shyam Nagar Rawatpur'
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
                        <p className="text-sm">Sample title</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-white/10 p-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <p className="text-sm">Cateogty</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-white/10 p-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-sm">category</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-white/10 p-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="text-sm">Office</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto space-y-4 pt-6">
                    <button className="w-full rounded-lg bg-blue-600 py-3 text-center font-medium">
                        +7 xxx xxx xx xx
                    </button>
                    <button className="w-full rounded-lg bg-[#1F2A36] py-3 text-center font-medium text-blue-500">
                        Call me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DummyTestCard;