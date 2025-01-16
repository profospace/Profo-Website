import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BuildingCard from '../components/BuildingCard'
import { getAllBuildings } from '../redux/features/Buildings/buildingsSlice'

function  BuildingPage() {
    const { buildings } = useSelector(state => state.buildings)
    const dispatch = useDispatch()
    useEffect(
        ()=>{
            dispatch(getAllBuildings())
        }
    )
    
    return (
        <div>

            <div className="w-full bg-white py-2">
                <div className="max-w-7xl mx-auto px-4">
                    <div className=" mb-6">
                        <h2 className="text-4xl font-bold">Buildings</h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        {buildings.map((building) => (
                            <BuildingCard
                                key={building._id}
                                {...building}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default  BuildingPage