import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProject } from '../redux/features/Projects/projectsSlice'
import { useParams } from 'react-router-dom'
import GalleryGrid from '../components/CategoryPreview'
import BuildingViewer from '../components/BuildingViewer'
import buildingConfig from '../files/building-config-6.json';
import BuildingManager from '../components/BuildingManager'
import { Heart } from 'lucide-react';
import ProjectSpecificationCard from '../components/ProjectSpecificationCard'
import LocationLatLngMap from '../components/LocationLatLngMap'
import AmenitiesDisplay from '../components/AmenitiesDisplay'
import PropertyCard from '../components/PropertyCard'
import AskDeveloper from '../components/AskDeveloper'
import HeaderSection from '../components/HeaderSection'
import BuildingContactCard from '../components/BuildingContactCard'
import ProjectFloorPlan from '../components/ProjectFloorPlan'
import { TrendingUp,  CircleDollarSign } from 'lucide-react';
import ProjectHighlights from '../components/ProjectHighlights'
import ProjectNearbyLocations from '../components/ProjectNearbyLocations'
import DownloadBrochures from '../components/DownloadBrochures'


function ProjectDetailPage() {
  const { projectDetail } = useSelector(state => state.projects)
  const dispatch = useDispatch()
  const { post_id } = useParams();

  // console.log(post_id)

  console.log(projectDetail)
  useEffect(() => {
    dispatch(getSingleProject(post_id));
  }, [post_id, dispatch]);
  
  function formatPrice(value) {
    if (typeof value !== "number" || value < 0) return value; // Ensure it's a positive number

    if (value >= 10000000) {
      // 1 crore or more
      return `₹${(value / 10000000).toFixed(1)} Cr`;
    } else if (value >= 100000) {
      // 1 lakh or more
      return `₹${(value / 100000).toFixed(1)} Lakh`;
    } else if (value >= 1000) {
      // 1 thousand or more
      return `₹${(value / 1000).toFixed(1)}K`;
    }
    return `₹${value}`; // Less than 1000, show full amount
  }



  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative">
        <HeaderSection details={projectDetail} />
      </div>

      {/* Main content area with grid layout */}
      <div className="mx-auto px-4">
        <div className="grid grid-cols-12 gap-0">
          {/* Left content area */}
          <div className="col-span-12 lg:col-span-8">
            {/* Project Info Section */}
            <div className="max-w-4xl mx-auto p-4 py-12">
              {/* Header Section */}
              <div className="mb-6">
                {/* New Launch Badge */}
                <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-2">
                  <div className="bg-yellow-500 rounded-full p-1">
                    <div className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">NEW LAUNCH</span>
                  <span>Project</span>
                  {/* <button className="ml-4 text-sm underline">Learn more</button> */}
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-1">{projectDetail?.name}</h1>
                <p className="text-gray-500">{projectDetail?.location?.address}</p>
              </div>

             

              {/* Status Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  RERA {projectDetail?.reraNumber}
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
                  No Brokerage
                </div>
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                  6 Top Facilities
                </div>
              </div>

              {/* Features */}
              <div className="bg-black text-white rounded-xl p-4 mb-2 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-yellow-500" />
                    <span>High price appreciation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="text-yellow-500" />
                    <span>Units of choice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDollarSign size={20} className="text-yellow-500" />
                    <span>Easy Payment plans</span>
                  </div>
                </div>
              </div>

              {/* Construction Status Section */}
              {/* <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-gray-700 uppercase text-sm font-medium mb-4">
                  CONSTRUCTION STATUS
                </h2>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900">{projectDetail?.status}</h3>
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </div>
              </div> */}
            </div>

            {/* Floor Plans */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold px-4">Floor Plans</h1>
              {projectDetail?.floorPlans?.length > 0 && (
                <ProjectFloorPlan floorPlans={projectDetail?.floorPlans} />
              )}
            </div>

            <div className="w-full mb-8">
              <BuildingViewer config={buildingConfig} />
            </div>

            {/* Location Map */}
            <div className="mb-8">
              <LocationLatLngMap
                latitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
                longitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
              />
            </div>

            

            {/* Specifications */}
            <div className="mb-8">
              <ProjectSpecificationCard specifications={projectDetail?.specification} />
            </div>

            {/* Amenities */}
            <div className="mb-2">
              <AmenitiesDisplay amenities={projectDetail?.amenities} />
            </div>

            {/* highlights */}
            <div className="mb-2">
              <ProjectHighlights highlights={projectDetail?.highlights}/>
            </div>
            
            {/* nearbyLocations */}
            <div className="mb-2">
              <ProjectNearbyLocations nearbyLocations={projectDetail?.nearbyLocations}/>
            </div>

            {/* Gallery */}
            <div className="mb-2">
              <GalleryGrid gallery={projectDetail?.gallery} />
            </div>

            {/* Connected Properties */}
            <div className="">
              <h1 className="text-xl font-semibold mb-4">Connected Properties</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {projectDetail?.connectedProperties?.length > 0 &&
                  projectDetail?.connectedProperties?.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                  ))
                }
              </div>
            </div>

            {/* Ask Developer Section */}
            <div className="mb-8">
              <AskDeveloper />
            </div>

            {/* Building Manager and Viewer */}
          </div>

          {/* Right sidebar with fixed contact card */}
          <div className="col-span-4">
            <div className="sticky top-32">
              <BuildingContactCard info={projectDetail?.builder}/>
              <DownloadBrochures />
            </div>
            
          </div>
        </div>
            {/* <div className="mb-8">
              <BuildingManager />
            </div>
            <div className="mb-8">
              <BuildingViewer config={buildingConfig} />
            </div> */}
      </div>
    </div>
  )
}

export default ProjectDetailPage