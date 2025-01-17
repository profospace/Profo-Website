import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProject } from '../redux/features/Projects/projectsSlice'
import { useParams } from 'react-router-dom'
import GalleryGrid from '../components/CategoryPreview'
import BuildingViewer from '../components/BuildingViewer'
import buildingConfig from '../files/building-config-6.json';
import BuildingManager from '../components/BuildingManager'
import { Heart, MapPin, Building2, TreePine, LayoutPanelTop } from 'lucide-react';
import ProjectFloorPlansCard from '../components/ProjectFloorPlansCard'
import ProjectSpecificationCard from '../components/ProjectSpecificationCard'
import LocationLatLngMap from '../components/LocationLatLngMap'
import AmenitiesDisplay from '../components/AmenitiesDisplay'
import PropertyCard from '../components/PropertyCard'
import AskDeveloper from '../components/AskDeveloper'
import HeaderSection from '../components/HeaderSection'
import BuildingContactCard from '../components/BuildingContactCard'


function ProjectDetailPage() {
  const { projectDetail } = useSelector(state => state.projects)
  const dispatch = useDispatch()
  const { post_id } = useParams();

  // console.log(post_id)

  console.log(projectDetail)
  useEffect(() => {
    dispatch(getSingleProject(post_id));
  }, [post_id, dispatch]);

  return (
    // <div>
    //   <div className="min-h-screen">
    //     {/* Main Layout Container */}
    //     <div className="relative">

    //       {/* header section */}
    //       <HeaderSection details={projectDetail} />
    //     </div>

        
    //   </div>
    //     <BuildingContactCard />


    //   <div>
    //     <LocationLatLngMap latitude={projectDetail?.location?.coordinates?.coordinates?.[0]} longitude={projectDetail?.location?.coordinates?.coordinates?.[1]} />
    //   </div>

    //   {/* Floor Plans */}
    //   <div>
    //     <h1>Floor Plans</h1>
    //     {
    //       projectDetail?.floorPlans?.length > 0 && <ProjectFloorPlansCard floorPlans={projectDetail?.floorPlans} />
    //     }
    //   </div>

    //   {/* Specifications */}
    //   <div>
    //     <ProjectSpecificationCard specifications={projectDetail?.specification} />
    //   </div>

    //   {/* Amenities */}
    //   <div>
    //     <AmenitiesDisplay amenities={projectDetail?.amenities} />
    //   </div>


    //   {/* Header Section */}
    //   <div className=" bg-white rounded-lg">
    //     <div className="flex flex-col md:flex-row">
    //       {/* Left side - Image */}
    //       <div className="relative md:w-2/3">
    //         <div className="absolute top-4 left-4 space-x-2 z-10">
    //           <span className="bg-white px-2 py-1 rounded-md text-sm">25% discount</span>
    //           <span className="bg-white px-2 py-1 rounded-md text-sm">+7 shares</span>
    //           <span className="bg-white px-2 py-1 rounded-md text-sm">elite</span>
    //         </div>
    //         <img
    //           src="/assets/real.webp"
    //           alt="Property"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>

    //       {/* Right side - Content */}
    //       <div className="md:w-1/3 p-6 bg-gray-900 text-white rounded-r-lg">
    //         <div className="flex justify-between items-start">
    //           <div>
    //             <h2 className="text-2xl font-bold mb-1">NOVA</h2>
    //             <div className="text-lg mb-4">
    //               <span>23 381 656</span>
    //               <span className="mx-2">—</span>
    //               <span>106 850 696 ₽</span>
    //             </div>
    //           </div>
    //           <Heart className="cursor-pointer" />
    //         </div>

    //         <div className="flex items-center gap-2 mb-4">
    //           <MapPin size={18} />
    //           <div>
    //             <div className="flex items-center gap-2">
    //               <span>Poklonnaya</span>
    //               <span className="text-gray-400">21 minutes</span>
    //               <span>🚶</span>
    //             </div>
    //             <div className="text-sm text-gray-400">Moscow, pr. General Dorokhov</div>
    //           </div>
    //         </div>

    //         <div className="space-y-4">
    //           <div className="flex items-center gap-3">
    //             <Building2 size={24} />
    //             <span>Concept from De Architekten Cie Bureau</span>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <MapPin size={24} />
    //             <span>500 m to Poklonnaya Gora</span>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <TreePine size={24} />
    //             <span>Well-maintained territory of 5 hectares</span>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <LayoutPanelTop size={24} />
    //             <span>Unique planning solutions</span>
    //           </div>
    //         </div>

    //         <div className="mt-6 space-y-3">
    //           <button className="w-full py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors">
    //             +7 xxx xxx xx xx
    //           </button>
    //           <button className="w-full py-3 bg-gray-800 rounded-lg text-white border border-gray-700 hover:bg-gray-700 transition-colors">
    //             Call me
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>


    //   {/* Gallery */}
    //   <GalleryGrid gallery={projectDetail?.gallery} />

    //   {/* Connected Properties */}
    //   <div>
    //     <h1 className='text-xl mb-2 font-semibold'>Connected Properties</h1>
    //     <div className='grid grid-cols-3 gap-3'>
    //       {
    //         projectDetail?.connectedProperties?.length > 0 && projectDetail?.connectedProperties?.map((property, index) => <PropertyCard property={property} />)
    //       }
    //     </div>
    //   </div>

    //   {/* Call to develper */}
    //   <AskDeveloper />

    //   <BuildingManager />
    //   <BuildingViewer config={buildingConfig} />
    // </div>

    <div className="min-h-screen">
      {/* Header Section */}
      <div className="relative">
        <HeaderSection details={projectDetail} />
      </div>

      {/* Main content area with grid layout */}
      <div className="mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Left content area */}
          <div className="col-span-12 lg:col-span-8">
            {/* Location Map */}
            <div className="mb-8">
              <LocationLatLngMap
                latitude={projectDetail?.location?.coordinates?.coordinates?.[0]}
                longitude={projectDetail?.location?.coordinates?.coordinates?.[1]}
              />
            </div>

            {/* Floor Plans */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-4">Floor Plans</h1>
              {projectDetail?.floorPlans?.length > 0 && (
                <ProjectFloorPlansCard floorPlans={projectDetail?.floorPlans} />
              )}
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <ProjectSpecificationCard specifications={projectDetail?.specification} />
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <AmenitiesDisplay amenities={projectDetail?.amenities} />
            </div>

            {/* Gallery */}
            <div className="mb-8">
              <GalleryGrid gallery={projectDetail?.gallery} />
            </div>

            {/* Connected Properties */}
            <div className="mb-8">
              <h1 className="text-xl font-semibold mb-4">Connected Properties</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <div className="mb-8">
              <BuildingManager />
            </div>
            <div className="mb-8">
              <BuildingViewer config={buildingConfig} />
            </div>
          </div>

          {/* Right sidebar with fixed contact card */}
          <div className="hidden lg:block col-span-4">
            <div className="sticky top-24">
              <BuildingContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage