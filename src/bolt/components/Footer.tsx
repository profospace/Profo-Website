import React from 'react';
import { motion } from 'framer-motion';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { applyFilter } from '../../redux/features/Map/mapSlice';

const Footer: React.FC = () => {
  const navigate = useNavigate()
const dispatch = useDispatch()
  const propertyTypes = [
    {
      title: 'Apartment',
      params: { vanilla: 'property', propertyType: ['Apartment'] }
    },
    {
      title: 'Villa',
      params: { vanilla: 'property', propertyType: ['Villa'] }
    },
    {
      title: 'Office',
      params: { vanilla: 'property', propertyType: ['Office'] }
    },
    {
      title: 'Shop',
      params: { vanilla: 'property', propertyType: ['Shop'] }
    },
    {
      title: 'Warehouse',
      params: { vanilla: 'property', propertyType: ['Warehouse'] }
    },
    {
      title: 'House',
      params: { vanilla: 'property', propertyType: ['House'] }
    },
    {
      title: 'Land',
      params: { vanilla: 'property', propertyType: ['Land'] }
    },
  ]

   const handleMenuItemClick = (filterParams: any) => {
      // Dispatch the filter action with the provided parameters
      dispatch(applyFilter(filterParams));
  
      // Navigate to main results page
      navigate("/main");
    };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6 flex items-center gap-">
              <img src='/assets/logo.png' className='h-20 w-20' />
              <h1 className="text-5xl font-bold tracking-tighter text-white">PROFO</h1>
            </div>
            <p className="text-gray-400 mb-6">
              Providing exceptional real estate services since 2010. Your trusted partner in finding the perfect property.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="text-gray-400 hover:text-[#10B981]"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 flex flex-col">
              <Link to="/" className="text-gray-400 hover:text-[#10B981] transition-colors">Home</Link>
              <Link to="/main" className="text-gray-400 hover:text-[#10B981] transition-colors">Properties</Link>
              <Link to="/" className="text-gray-400 hover:text-[#10B981] transition-colors">Agents</Link>
              <Link to="/about-us" className="text-gray-400 hover:text-[#10B981] transition-colors">About Us</Link>
              <Link to="/blog" className="text-gray-400 hover:text-[#10B981] transition-colors">Blog</Link>
              <Link to="/contact-us" className="text-gray-400 hover:text-[#10B981] transition-colors">Contact</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Property Types</h3>
            <ul className="space-y-3 flex flex-col">
              {/* <Link to="/" className="text-gray-400 hover:text-[#10B981] transition-colors">Apartments</Link>
              <Link to="/" className="text-gray-400 hover:text-[#10B981] transition-colors">Houses</Link>
              <Link to="/" className="text-gray-400 hover:text-[#10B981] transition-colors">Villas</Link>
              <Link to="/" className="text-gray-400 hover:text-[#10B981] transition-colors">Commercial</Link>
              <Link to="/" className="text-gray-400 hover:text-[#10B981] transition-colors">Shop</Link> */}
              {
                propertyTypes?.map((key, index) => <span key={index} onClick={() => handleMenuItemClick(key?.params)}  className="text-gray-400 hover:text-[#10B981] transition-colors cursor-pointer ">{key?.title}</span>)
              }
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-3 mt-1" />
                <span className="text-gray-400">123 Real Estate Avenue, New York, NY 10001</span>
              </li> */}
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-3" />
                <span className="text-gray-400">+91 8090555050</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-3" />
                <span className="text-gray-400">admin@profospace.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PROFO. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#10B981] text-sm">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-[#10B981] text-sm">Terms of Service</Link>
            <Link to="/contact-us" className="text-gray-400 hover:text-[#10B981] text-sm">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;