import React, { lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

/* Pages */
import Home from './pages/Home';
// const Home = lazy(() => import('./pages/Home'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const About = lazy(() => import('./pages/About'));
const SinglePage = lazy(() => import('./pages/PropertyDetailPage'));
// const Gallery = lazy(() => import('./pages/Gallery'));

const MainPropertyPage = lazy(() => import('./pages/MainPropertyPage'));

/* Layout Component */
import Layout from './components/Layout';
import FloatButtonShowMap from './components/FloatButtonShowMap'

/* redux */
import { useDispatch } from 'react-redux';
import { getAllProperties } from './redux/features/Properties/propertiesSlice';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AllInOnePage from './pages/AllInOnePage';
import ProjectPage from './pages/ProjectPage';
import BuildingPage from './pages/BuildingPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BuildingDetailPage from './pages/BuildingDetailPage';
import BackToTop from './components/BackToTop';
import { getAllBuildings } from './redux/features/Buildings/buildingsSlice';
import MapPage from './pages/MapPage';
import PostProperty from './pages/PostProperty';
import Services from './pages/Services';
import TermsAndConditions from './pages/TermsAndConditions';
import BuildingManager from './components/BuildingManager';
import PrivacyAndPolicy from './pages/PrivacyAndPolicy';
import { getHomeFeed } from './redux/features/HomeFeed/homeFeedSlice';
import Error from './pages/Error';
import { Button } from 'antd';
import Contact from './pages/Contact';

// import MainPropertyPage from './pages/MainPropertyPage';

function App() {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [imageSrc, setImageSrc] = useState(null);

  const checkNetworkStatus = () => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);


    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);


  }

  useEffect(() => {
    checkNetworkStatus()
  }, []);


  useEffect(
    () => {
      const savedImage = localStorage.getItem("offline-image");
      if (savedImage) {
        setImageSrc(savedImage);
      }

    }
    , [isOnline]
  )

  // set offline image
  const offlineImageSetup = async () => {
    // set offline image
    const response = await fetch('https://raw.githubusercontent.com/anurag-sonkar/Ecommerce_MERN_Shopkart_admin_panel/main/public/assets/offline.png')

    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64Image = reader.result;
      localStorage.setItem("offline-image", base64Image);
    };

    reader.readAsDataURL(blob);
  }

  useEffect(
    () => {
      console.log("HI")
      dispatch(getHomeFeed());

      if (isOnline) {
        offlineImageSetup()
      }


    }, [dispatch]
  )

  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, [pathname]
  )



  if (isOnline) {
    return (
      <div className=''>
        {/* Custom Floating Button */}
        <BackToTop />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/all-in-one-page' element={<AllInOnePage />} />
            <Route path='/properties' element={<PropertiesPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/buildings' element={<BuildingPage />} />
            <Route path='/main' element={<MainPropertyPage />} />
            <Route path='/post-property-for-free' element={<PostProperty />} />


            <Route path='/api/details/project/:post_id' element={<ProjectDetailPage />} />{ /* projects detail page */}
            <Route path='/api/details/building/:buildingId' element={<BuildingDetailPage />} /> {/* buildings detail page */}
            <Route path='/api/details/:post_id' element={<SinglePage />} /> {/* properties */}
            {/* <Route path='/gallery' element={<Gallery />} /> */}


            <Route path='/terms-conditions' element={<TermsAndConditions />} />
            <Route path='/privacy-policy' element={<PrivacyAndPolicy />} />
            <Route path='/project-3d' element={<BuildingManager />} /> {/* testing */}
            <Route path='/contact-us' element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={imageSrc} className="object-contain w-64 h-auto" />
          <p className="text-lg font-medium">You appear to be offline</p>
          <p className="text-xs text-gray-500">You can't use service until you're connected to the internet</p>
          <Button type="primary" onClick={checkNetworkStatus} className="min-w-24">Retry</Button>
        </div>
      </div>
    )
  }
}

export default App;
