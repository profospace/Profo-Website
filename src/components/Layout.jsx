import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import LoadingPage from './LoadingPage'


function Layout() {
    return (

        <>
            <Navbar />
            <Suspense fallback={<LoadingPage />}>
                <Outlet />
            <Footer />
            </Suspense>
        </>

    )
}

export default Layout