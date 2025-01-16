import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { MdCrueltyFree } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function ProjectCard({ name, ownerName, type, gallery, developmentStatus, freeProperties, totalFloors, totalProperties,
    availabilityStatus, overview, status, floorPlans, location, projectId }) {

    const uniqueTypes = [...new Set(floorPlans.map(property => property.type))];
    const navigate = useNavigate()

    function truncateText(text, maxLength = 100) {
        if (!text) return '';
        const words = text.split(' ');
        let truncated = words[0];
        for (let i = 1; i < words.length; i++) {
            if (truncated.length + words[i].length + 1 > maxLength) {
                return `${truncated}...`;
            }
            truncated += ` ${words[i]}`;
        }
        return truncated;
    }

    const handleCardClick = () => {
        navigate(`/api/details/project/${projectId}`); // Navigate to the route with the post ID
    };

    <div className="text-sm">{truncateText(location.address, 100)}</div>

    return (
        <div className="relative w-full max-w-[280px] md:max-w-[240px] lg:max-w-[280px] cursor-pointer group" onClick={handleCardClick}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <img
                    src={gallery?.[0]?.images?.[0] || 'assets/testing.avif'}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white px-2 py-0 rounded-md shadow-sm">
                    <span className="text-blue-500 font-medium text-xs">{status}</span>
                </div>
                <button className="absolute top-3 right-3 w-7 h-7rounded-full flex items-center justify-center  transition-colors">
                    <CiHeart color='white' />
                </button>
            </div>

            <div className="my-4">
                <div className='flex justify-between'>
                    {/* <div className="font-md text-xl font-semibold text-gray-900">
                        {overview?.priceRange?.min}
                    </div> */}
                    <div className="font-md text-xl font-semibold text-gray-900">
                        {overview?.priceRange?.min &&
                            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(overview.priceRange.min)
                        }
                    </div>

                    <div className="bg-white px-2 py-0 rounded-md shadow-sm">
                        <span className="text-blue-500 font-medium text-xs uppercase">{type}</span>
                    </div>
                </div>

                <div className="text-lg font-medium text-gray-800 truncate capitalize">{name}</div>
                {/* <div className='flex justify-between items-center'>
                  <div className="text-lg font-medium text-gray-800 truncate capitalize">{name}</div>
                  <div className="bg-white px-2 py-0 rounded-md shadow-sm mt-2">
                      <span className="text-grren-500 font-medium text-xs uppercase">{type}</span>
                  </div>
              </div> */}
                {/* <div className="text-xs font-medium text-gray-800 truncate capitalize">{overview?.possessionDate}</div> */}
                <div className="text-xs font-medium text-blue-800 truncate capitalize">
                    {new Date(overview?.possessionDate).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                </div>

                <div className="text-sm py-2">{truncateText(location.address, 75)}</div>


                <div className='flex gap-1 mt-2'>
                    {
                        uniqueTypes?.map((type, index) => <div key={index} className='text-xs bg-gray-300 px-6 py-[5px] rounded-md ' >{type}</div>)
                    }

                </div>

            </div>

        </div>
    )
}

export default ProjectCard
