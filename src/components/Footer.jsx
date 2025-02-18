import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigationLinks = [
    { title: 'All properties', href: '/' },
    { title: 'Post Property', href: '/post-property-for-free' },
    { title: 'Become a part of the team', href: '/team' },
    { title: 'Terms and Conditions', href: '/terms-conditions' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Help', href: '/help' }
  ];

  return (
    <div className="w-full mt-12">
      {/* Third Footer - With Horizontal Lines */}
      <footer className="bg-[#171717] text-gray-400 py-6 ">
        <div className="max-w-[1200px] mx-auto px-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 my-8">
            {navigationLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-400 hover:text-gray-300 text-sm"
              >
                {link.title}
              </a>
            ))}
          </nav>


          {/* First Footer - PROFO */}
          <footer className="w-full py-8 bg-[#171717]">
            <div className="max-w-7xl mx-auto">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-32 md:gap-4 overflow-x-hidden">
                {/* Left Section */}
                <div className="lg:col-span-6">
                  {/* Logo */}
                  <div className="mb-6 flex items-center gap-2">
                    <img src='/assets/logo.png' className='h-12 w-12' />
                    <h1 className="text-5xl font-bold tracking-tighter text-white">PROFO</h1>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-8 max-w-lg leading-6">
                    We're India's first full-stack renting brand, offering fully furnished, designer homes with unmatched freedom and flexibility—for those who demand more and settle for nothing less.
                  </p>

                  {/* Social Icons */}
                  <div className="flex space-x-4">
                    {[
                      { Icon: Instagram, href: "#" },
                      { Icon: Twitter, href: "#" },
                      { Icon: Linkedin, href: "#" },
                      { Icon: Youtube, href: "#" }
                    ].map(({ Icon, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Icon size={20} className="text-gray-700" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Section - Navigation Links */}
                <div className="lg:col-span-6 pt-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:pl-24">
                    {/* Quick Links Column 1 */}
                    <div className="space-y-4">
                      <p className="font-medium">Porfo</p>
                      <nav className="flex flex-col space-y-3">
                        <Link to="/" className="text-gray-600 hover:text-white">Homes</Link>
                        <Link to="/careers" className="text-gray-600 hover:text-white">Careers</Link>
                        <Link to="/contact-us" className="text-gray-600 hover:text-white">Contact Us</Link>
                      </nav>
                    </div>

                    {/* Quick Links Column 2 */}
                    <div className="space-y-4">
                      <p className="font-medium">About Us</p>
                      <nav className="flex flex-col space-y-3">
                        <a href="#" className="text-gray-600 hover:text-white">For Landlords</a>
                        <a href="#" className="text-gray-600 hover:text-white">Reserve</a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </footer>


          {/* Description Section */}
          <div className="my-8 text-sm space-y-4">
            <p className="text-gray-400">
              Profo.Real Estate — rent and sell real estate in Moscow and the Moscow region: we will help you rent, lease, sell or buy an apartment or other housing.
            </p>
            <p className="text-gray-400">
              Project declarations at{' '}
              <a href="https://наш.дом.рф" className="text-gray-400">
                https://наш.дом.рф
              </a>
            </p>
            <p className="text-gray-400">
              Legal support on legal issues:{' '}
              <a href="mailto:help@realty.profo.ru" className="text-blue-400">
                help@realty.profo.ru
              </a>
            </p>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                ©2025 Profo All Rights Reserved
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-700">Onboarding Guide</a>
                <a href="#" className="hover:text-gray-700">Refund Policy</a>
                <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                <a href="#" className="hover:text-gray-700">Terms Of Use</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;