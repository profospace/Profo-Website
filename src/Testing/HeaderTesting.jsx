import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeaderTesting() {
  const navigate = useNavigate()
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="testing mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <div className="h-11 w-11 rounded-md flex items-center justify-center text-xs text-gray-500"><img src='/assets/logo.png' className='w-full h-full' alt="Logo" /></div>
          <div className="text-2xl font-bold">PROFO</div>
        </div>
        <div className="flex gap-4">
          <button onClick={()=>navigate('/wishlist')} className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md text-sm transition hover:bg-gray-100">
            <i className="text-gray-600">♡</i>
            Favorites
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md text-sm transition hover:bg-red-700" onClick={() => navigate('/post-property-for-free')}>
            <i>+</i>
            Post Property
          </button>
          <button className="px-4 py-2 border border-gray-600 rounded-md text-sm transition hover:bg-gray-100" onClick={() => navigate('/signup')}>
            Register
          </button>
        </div>
      </div>
    </header>
    
  )
}

export default HeaderTesting


{/*
  import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeaderTesting() {
  const navigate = useNavigate()
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="testing mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="h-11 w-11 rounded-md flex items-center justify-center text-xs text-gray-500"><img src='/assets/logo.png' className='w-full h-full' alt="Logo" /></div>
            <div className="text-2xl font-bold">PROFO</div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => navigate('/wishlist')} className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md text-sm transition hover:bg-gray-100">
              <i className="text-gray-600">♡</i>
              Favorites
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md text-sm transition hover:bg-red-700" onClick={() => navigate('/post-property-for-free')}>
              <i>+</i>
              Post Property
            </button>
            <button className="px-4 py-2 border border-gray-600 rounded-md text-sm transition hover:bg-gray-100" onClick={() => navigate('/signup')}>
              Register
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-100">
        <div className="testing mx-auto px-4 overflow-x-auto">
          <ul className="flex space-x-6 h-12 items-center">
            <li><a href="#" className="text-red-600 font-medium">Apartments</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Rent</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Buy</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Office</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Flats</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Warehouses</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Lands</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Kheti Jameen</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">Services</a></li>
            <li><a href="#" className="font-medium hover:text-red-600 transition">New Projects</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default HeaderTesting
  
  */}