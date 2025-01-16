import React, { useEffect } from 'react'
import ServicesRow from '../components/ServicesRow'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuildings } from '../redux/features/Buildings/buildingsSlice';
import PromoBanner from '../components/PromoBanner';
import { getAllProjects } from '../redux/features/Projects/projectsSlice';
import BuildingCard from '../components/BuildingCard';
import ProjectCard from '../components/ProjectCard';
import BuildingSelector from '../components/BuildingSelector';
import { useNavigate } from 'react-router-dom';

function AllInOnePage() {
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const { buildings } = useSelector(state => state.buildings)
    const { projects } = useSelector(state => state.projects)
    console.log(projects)

    useEffect(
        () => {
            dispatch(getAllBuildings())
            dispatch(getAllProjects())
        }, []
    )

    console.log(buildings)
    return (
        <div className='flex flex-col gap-10'>
            {/* Buildings */}
            <div className="w-full bg-white py-2">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center mb-6">
                        <h2 className="text-2xl font-bold">New buildings</h2>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg onClick={() => naviagte('/buildings')} className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      {buildings.map((building) => (
                          <BuildingCard
                              key={building._id}
                              {...building}
                          />
                      ))}
                  </div> */}

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        {buildings.slice(0, 4).map((building) => (
                            <BuildingCard
                                key={building._id}
                                {...building}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* PromoBanner */}
            <div>
                <PromoBanner />
            </div>


            {/* Projects */}
            <div className="w-full bg-white py-2">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center mb-6">
                        <h2 className="text-2xl font-bold">New Projects</h2>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg onClick={() => naviagte('/projects')} className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        {projects.slice(0, 4).map((project) => (
                            <ProjectCard
                                key={project._id}
                                {...project}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* PromoBanner */}
            <div>
                <PromoBanner />
            </div>


            <div className="w-full bg-white py-2">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center mb-6">
                        <h2 className="text-2xl font-bold">New Properties</h2>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg onClick={() => naviagte('/properties')} className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        {projects.slice(0, 4).map((project) => (
                            <ProjectCard
                                key={project._id}
                                {...project}
                            />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AllInOnePage