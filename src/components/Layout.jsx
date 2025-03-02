import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingPage from './LoadingPage'
import HeaderTesting from '../Testing/HeaderTesting'


function Layout() {
    return (

        <>
            <Navbar />
            {/* <HeaderTesting /> */}
            <Suspense fallback={<LoadingPage />}>
            <div className=''>
                <Outlet />

            </div>
            <Footer />
            </Suspense>
        </>

    )
}

export default Layout