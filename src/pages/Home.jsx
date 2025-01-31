import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FlexibleLayout from '../components/FlexibleLayout';
import AppDownloadBanner from '../components/AppDownloadBanner';
import { useNavigate } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const { properties, projects } = useSelector(state => state.map)
    const { buildings } = useSelector(state => state.buildings)


    return (
        <div className=' px-8'>

            <FlexibleLayout
                type="property"
                headingText="New Properties"
                details={properties}
                salesAdsPosition="right"
                type_name="properties" // where to navigate
            />
            <FlexibleLayout
                type="project"
                headingText="New Projects"
                details={projects}
                salesAdsPosition="left"
                type_name="project"
            />
            <FlexibleLayout
                type="building"
                headingText="New Buildings"
                details={buildings}
                salesAdsPosition="right"
                type_name="buildings"
            />



            <div className='my-12'>
                <AppDownloadBanner />
            </div>

        </div>
    )
}

export default Home