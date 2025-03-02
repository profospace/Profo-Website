import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProjectCard from '../components/ProjectCard'
import { getAllProjects } from '../redux/features/Projects/projectsSlice'

function ProjectPage() {
    const {projects} = useSelector(state => state.projects)
    const dispatch = useDispatch()
    useEffect(
        ()=>{
            dispatch(getAllProjects())
    },[]
   )

  return (
    <div>

          <div className="w-full bg-white py-2">
              <div className="max-w-7xl mx-auto px-4">
                  <div className=" mb-6">
                      <h2 className="text-4xl font-bold">Projects</h2>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      {projects.map((project) => (
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

export default ProjectPage