import React, { useState } from 'react';
import { MapPin, Clock, Heart, Mail, Phone } from 'lucide-react';

const PropertyContactCard = ({ details, handleButtonClick }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    // Calculate time since creation
    // const getTimeSince = (createdAt) => {
    //     const created = new Date(createdAt);
    //     const now = new Date();
    //     const hours = Math.floor((now - created) / (1000 * 60 * 60));
    //     return `${hours} hours ago`;
    // };
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

    // Comprehensive data validation function
    const hasValidData = () => {
        return (
            details?.name ||
            details?.contacts?.[1] ||
            details?.logo ||
            details?.experience ||
            (details?.operatingLocations && details.operatingLocations.length > 0) ||
            (details?.statistics?.completedProjects > 0) ||
            (details?.statistics?.ongoingProjects > 0) ||
            details?.contacts?.[0]
        );
    };
    return (
        hasValidData() && (
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm py-4 px-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-gray-500 text-sm">
                        <span>{getTimeSince(details?.createdAt)}</span>, {
                            details?.statistics?.totalProperties != 0 && <span>{details?.statistics?.totalProperties} properties</span>
                        }
                    </span>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className="text-gray-400 hover:text-red-500"
                    >
                        <Heart
                            className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
                        />
                    </button>
                </div>

                <h2 className="text-lg font-semibold mb-2">{details?.name}</h2>

                <div className="flex items-center gap-2 mb-4">
                    {details?.statistics?.completedProjects != 0 && <span className="text-2xl font-bold">{details?.statistics?.completedProjects} Projects</span>}
                    {
                        details?.experience != 0 && <span className="text-gray-400">{details?.experience} years experience</span>
                    }

                </div>

                <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                        {details?.status}
                    </span>
                    {
                        details?.statistics?.ongoingProjects != 0 && <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                            {details?.statistics?.ongoingProjects} ongoing
                        </span>
                    }

                    {/* <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        Est. {details?.establishedYear}
                    </span> */}
                </div>


                {
                    details?.contacts[0] && <button
                        onClick={() => setShowContacts(!showContacts)}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg mb-6"
                    >
                        {showContacts ? details?.contacts[0] : 'Show contact details'}
                    </button>
                }


                <div className="flex items-center gap-3 mb-4">
                    {/* <div className="w-10 h-10 bg-blue-100 rounded-lg"></div> */}
                    <img src='https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/68322723ec624a9d1c49f92c279d66e2.svg' className='w-10 h-10' />
                    <div>
                        {
                            details?.company && <p className="font-medium">{details?.company}</p>
                        }
                        {
                            details?.website && <p className="text-blue-500">{details?.website}</p>
                        }

                    </div>
                </div>

                <div className="flex items-start gap-3">
                    {details?.address && <MapPin className="w-5 h-5 text-red-500 mt-1" />}
                    <div>
                        <p className="mb-1">{details?.address?.street}</p>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">{details?.address?.city}</span>
                            <span className="text-gray-400">{details?.address?.state}</span>
                        </div>
                        {details?.operatingLocations?.length != 0 &&
                            <p className="text-gray-400 mt-1">
                                Operating in {details?.operatingLocations?.length} locations
                            </p>}
                    </div>
                </div>

                {showContacts && details?.contacts?.length != 0 && (
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{details?.contacts?.[1]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>{details?.contacts?.[2]}</span>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default PropertyContactCard;