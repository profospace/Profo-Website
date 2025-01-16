// import React from "react";
// import { Button } from "@material-tailwind/react";
// import { FaTwitter } from "react-icons/fa";
// import { FaMeta } from "react-icons/fa6";
// import { ImPinterest2 } from "react-icons/im";
// import { SiInstagram } from "react-icons/si";
// import { FiYoutube } from "react-icons/fi";


// function Footer() {
//     return (
//         <footer className="bg-blue-gray-900">
//             {/* section-1 */}
//             <div className="grid grid-cols-1 md:grid-cols-3 text-white text-center place-items-center py-10 gap-5">
//                 <div className="flex items-center gap-5 justify-center col-span-1 md:col-span-1">
//                     <img src="/assets/newsletter.png" alt="Newsletter" />
//                     <p className="capitalize lg:text-xl text-2xl">
//                         sign up for newsletter
//                     </p>
//                 </div>

//                 <div className="bg-white col-span-1 md:col-span-2 lg:w-3/4 md:w-1/4 w-11/12 flex justify-between rounded-sm overflow-hidden px-1 py-1">
//                     <input
//                         type="text"
//                         placeholder="Your Email"
//                         className="text-xl w-full outline-none border-none text-black px-6"
//                     />
//                     <Button size="" color="black" className="rounded lg:w-1/4 uppercase">
//                         subscribe
//                     </Button>
//                 </div>
//             </div>
//             <hr className="w-full bg-blue-gray-900" />

//             {/* section-2 */}
//             <main className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 text-white md:gap-20 gap-10 px-10 py-10 place-items-center">
//                 <div className="flex flex-col gap-4 text-sm">
//                     <h1 className="text-xl capitalize font-bold">contact us</h1>
//                     <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
//                     <p>+91 8965623100</p>
//                     <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

//                     <div className="flex gap-2">
//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaTwitter size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaMeta size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <ImPinterest2 size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <SiInstagram size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FiYoutube size={16} />
//                         </div>



//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-4 text-sm">
//                     <h1 className="text-xl capitalize font-bold">information</h1>
//                     <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
//                     <p>+91 8965623100</p>
//                     <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

//                     <div className="flex gap-2">
//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaTwitter size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaMeta size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <ImPinterest2 size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <SiInstagram size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FiYoutube size={16} />
//                         </div>



//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-4 text-sm">
//                     <h1 className="text-xl capitalize font-bold">contact us</h1>
//                     <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
//                     <p>+91 8965623100</p>
//                     <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

//                     <div className="flex gap-2">
//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaTwitter size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaMeta size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <ImPinterest2 size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <SiInstagram size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FiYoutube size={16} />
//                         </div>



//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-4 text-sm">
//                     <h1 className="text-xl capitalize font-bold">contact us</h1>
//                     <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
//                     <p>+91 8965623100</p>
//                     <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

//                     <div className="flex gap-2">
//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaTwitter size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaMeta size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <ImPinterest2 size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <SiInstagram size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FiYoutube size={16} />
//                         </div>



//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-4 text-sm">
//                     <h1 className="text-xl capitalize font-bold">contact us</h1>
//                     <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
//                     <p>+91 8965623100</p>
//                     <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

//                     <div className="flex gap-2">
//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaTwitter size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FaMeta size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <ImPinterest2 size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <SiInstagram size={16} />
//                         </div>

//                         <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
//                             <FiYoutube size={16} />
//                         </div>



//                     </div>
//                 </div>


//             </main>
//         </footer>
//     );
// }

// export default Footer;

// import React from 'react';
// import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

// const Footer = () => {
//     return (
//         <footer className="w-full px-6 md:px-8 lg:px-12 py-16 bg-white">
//             <div className="max-w-7xl mx-auto">
//                 {/* Main Footer Content */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
//                     {/* Left Section */}
//                     <div className="lg:col-span-5">
//                         {/* Logo */}
//                         <div className="mb-6">
//                             <h1 className="text-4xl font-bold tracking-tighter">PROFO</h1>
//                         </div>

//                         {/* Description */}
//                         <p className="text-gray-600 text-lg mb-8 max-w-lg">
//                             We're India's first full-stack renting brand, offering fully furnished, designer homes with unmatched freedom and flexibility—for those who demand more and settle for nothing less.
//                         </p>

//                         {/* Social Icons */}
//                         <div className="flex space-x-4">
//                             {[
//                                 { Icon: Instagram, href: "#" },
//                                 { Icon: Twitter, href: "#" },
//                                 { Icon: Linkedin, href: "#" },
//                                 { Icon: Youtube, href: "#" }
//                             ].map(({ Icon, href }, index) => (
//                                 <a
//                                     key={index}
//                                     href={href}
//                                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//                                 >
//                                     <Icon size={20} className="text-gray-700" />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right Section - Navigation Links */}
//                     <div className="lg:col-span-7">
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                             {/* Quick Links Column 1 */}
//                             <div className="space-y-4">
//                                 <p className="font-medium">Flent</p>
//                                 <nav className="flex flex-col space-y-3">
//                                     <a href="#" className="text-gray-600 hover:text-gray-900">Homes</a>
//                                     <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
//                                     <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
//                                 </nav>
//                             </div>

//                             {/* Quick Links Column 2 */}
//                             <div className="space-y-4">
//                                 <p className="font-medium">About Us</p>
//                                 <nav className="flex flex-col space-y-3">
//                                     <a href="#" className="text-gray-600 hover:text-gray-900">For Landlords</a>
//                                     <a href="#" className="text-gray-600 hover:text-gray-900">Reserve</a>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Bottom */}
//                 <div className="mt-16 pt-8 border-t border-gray-200">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
//                         <div className="text-gray-500 text-sm">
//                             ©2024 Flent All Rights Reserved
//                         </div>
//                         <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
//                             <a href="#" className="hover:text-gray-700">Onboarding Guide</a>
//                             <a href="#" className="hover:text-gray-700">Refund Policy</a>
//                             <a href="#" className="hover:text-gray-700">Privacy Policy</a>
//                             <a href="#" className="hover:text-gray-700">Terms Of Use</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-8 lg:px-12 py-8 pt-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-32 md:gap-4 overflow-x-hidden">
          {/* Left Section */}
          <div className="lg:col-span-6">
            {/* Logo */}
            <div className="mb-6">
              <h1 className="text-5xl font-bold tracking-tighter">PROFO</h1>
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
                  <a href="#" className="text-gray-600 hover:text-gray-900">Homes</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
                </nav>
              </div>

              {/* Quick Links Column 2 */}
              <div className="space-y-4">
                <p className="font-medium">About Us</p>
                <nav className="flex flex-col space-y-3">
                  <a href="#" className="text-gray-600 hover:text-gray-900">For Landlords</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Reserve</a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              ©2024 Profo All Rights Reserved
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
  );
};

export default Footer;