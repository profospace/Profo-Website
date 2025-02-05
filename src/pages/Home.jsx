import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FlexibleLayout from '../components/FlexibleLayout';
import AppDownloadBanner from '../components/AppDownloadBanner';
import { useNavigate } from 'react-router-dom';
import { getHomeFeed } from '../redux/features/HomeFeed/homeFeedSlice';

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {properties , projects , buildings} = useSelector(state => state.homeFeed)

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                // Dispatch map feed action
                dispatch(getHomeFeed({ latitude, longitude, radius: 10000 }));

            }
        );
    }, [dispatch]);

    return (
        <div className=' px-8'>

            <FlexibleLayout
                type="property"
                headingText="New Properties"
                details={properties}
                salesAdsPosition="right"
                type_name="property" // where to navigate
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
                type_name="building"
            />



            <div className='my-12'>
                <AppDownloadBanner />
            </div>

        </div>
    )
}

export default Home