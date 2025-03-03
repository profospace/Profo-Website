import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import LoadingPage from './LoadingPage'
import HeaderTesting from '../Testing/HeaderTesting'
import Footer from '../bolt/components/Footer'


function Layout() {
    return (

        <>
            <Navbar />
            {/* <HeaderTesting /> */}
            <Suspense fallback={<LoadingPage />}>
                <Outlet />
                <Footer />
            </Suspense>
        </>

    )
}

export default Layout