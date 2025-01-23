// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { SearchComponent } from './SearchComponent'
// import { useNavigate } from 'react-router-dom'

// const navigation = [
//     { name: 'Home', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//     const navigate = useNavigate()
//     return (
//         <Disclosure as="nav" className="navbar py-4">
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                         {/* Mobile menu button*/}
//                         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                             <span className="absolute -inset-0.5" />
//                             <span className="sr-only">Open main menu</span>
//                             <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
//                             <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
//                         </DisclosureButton>
//                     </div>
//                     <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
//                         <div className="flex shrink-0 items-center cursor-pointer " onClick={()=>navigate('/')}>
//                             <div className='flex items-center'>
//                                 <img
//                                     alt="Your Company"
//                                     src="/assets/logo.png"
//                                     className="h-10 w-auto"
//                                 />
//                                 <h1 className='text-3xl font-bold tracking-tighter'>PROFO</h1>
//                             </div>
//                              {/* helliex */}
//                         </div>
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div className="flex space-x-4">
//                                 {navigation.map((item) => (
//                                     <a
//                                         key={item.name}
//                                         href={item.href}
//                                         aria-current={item.current ? 'page' : undefined}
//                                         className={classNames(
//                                             item.current ? 'underline underline-offset-4' : 'text-black hover:bg-gray-700 hover:text-white',
//                                             'rounded-md px-3 py-1 text-xl font-medium',
//                                         )}
//                                         // className={classNames(
//                                         //     item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
//                                         //     'rounded-md px-3 py-2 text-sm font-medium',
//                                         // )}
//                                     >
//                                         {item.name}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     {/* Input search component */}
//                     {/* <div>
//                         <SearchComponent />
//                     </div> */}
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                         {/* <button
//                             type="button"
//                             className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                         >
//                             <span className="absolute -inset-1.5" />
//                             <span className="sr-only">View notifications</span>
//                             <BellIcon aria-hidden="true" className="size-6" />
//                         </button> */}

//                         {/* Profile dropdown */}
//                         <Menu as="div" className="relative ml-3">
//                             {/* <div>
//                                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                                     <span className="absolute -inset-1.5" />
//                                     <span className="sr-only">Open user menu</span>
//                                     <img
//                                         alt=""
//                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                                         className="size-8 rounded-full"
//                                     />
//                                 </MenuButton>
//                             </div> */}
//                             <MenuItems
//                                 transition
//                                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                             >
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                                     >
//                                         Your Profile
//                                     </a>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                                     >
//                                         Settings
//                                     </a>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                                     >
//                                         Sign out
//                                     </a>
//                                 </MenuItem>
//                             </MenuItems>
//                         </Menu>
//                     </div>
//                 </div>
//             </div>

//             <DisclosurePanel className="sm:hidden">
//                 <div className="space-y-1 px-2 pb-3 pt-2">
//                     {navigation.map((item) => (
//                         <DisclosureButton
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             aria-current={item.current ? 'page' : undefined}
//                             className={classNames(
//                                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                 'block rounded-md px-3 py-2 text-base font-medium',
//                             )}
//                         >
//                             {item.name}
//                         </DisclosureButton>
//                     ))}
//                 </div>
//             </DisclosurePanel>
//         </Disclosure>
//     )
// }


// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { SearchComponent } from './SearchComponent'
// import { useNavigate } from 'react-router-dom'

// const navigation = [
//     { name: 'Home', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//     const navigate = useNavigate()
//     return (
//         <Disclosure as="nav" className="navbar py-2">
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     {/* Logo section - always on left */}
//                     <div className="flex flex-1 items-center justify-between sm:items-stretch">
//                         <div className="flex shrink-0 items-center cursor-pointer" onClick={() => navigate('/')}>
//                             <div className='flex items-center'>
//                                 <img
//                                     alt="Your Company"
//                                     src="/assets/logo.png"
//                                     className="h-10 w-auto"
//                                 />
//                                 <h1 className='text-3xl font-bold tracking-tighter'>PROFO</h1>
//                             </div>
//                         </div>

//                         {/* Desktop navigation - hidden on mobile */}
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div className="flex space-x-4">
//                                 {navigation.map((item) => (
//                                     <a
//                                         key={item.name}
//                                         href={item.href}
//                                         aria-current={item.current ? 'page' : undefined}
//                                         className={classNames(
//                                             item.current ? 'underline underline-offset-4' : 'text-black hover:bg-gray-700 hover:text-white',
//                                             'rounded-md px-3 py-1 text-xl font-medium',
//                                         )}
//                                     >
//                                         {item.name}
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right side section with mobile menu button and profile menu */}
//                     <div className="flex items-center">
//                         {/* Mobile menu button moved to right */}
//                         <div className="flex items-center sm:hidden">
//                             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                                 <span className="absolute -inset-0.5" />
//                                 <span className="sr-only">Open main menu</span>
//                                 <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
//                                 <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
//                             </DisclosureButton>
//                         </div>

//                         {/* Profile dropdown */}
//                         <Menu as="div" className="relative ml-3">
//                             <MenuItems
//                                 transition
//                                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                             >
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                                     >
//                                         Your Profile
//                                     </a>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                                     >
//                                         Settings
//                                     </a>
//                                 </MenuItem>
//                                 <MenuItem>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
//                                     >
//                                         Sign out
//                                     </a>
//                                 </MenuItem>
//                             </MenuItems>
//                         </Menu>
//                     </div>
//                 </div>
//             </div>

//             <DisclosurePanel className="sm:hidden ">
//                 <div className="space-y-1 px-2 pb-3 pt-2">
//                     {navigation.map((item) => (
//                         <DisclosureButton
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             aria-current={item.current ? 'page' : undefined}
//                             className={classNames(
//                                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                                 'block rounded-md px-3 py-2 text-base font-medium',
//                             )}
//                         >
//                             {item.name}
//                         </DisclosureButton>
//                     ))}
//                 </div>
//             </DisclosurePanel>
//         </Disclosure>
//     )
// }


// import React, { useState } from 'react';
// import { Menu, Heart, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();

//     const mainLinks = [
//         {
//             text: 'New buildings',
//             href: '#',
//             active: true,
//             deepLinks: [
//                 { text: 'Residential complexes', href: '#' },
//                 { text: 'Apartments', href: '#' },
//                 { text: 'Cottage villages', href: '#' },
//                 { text: 'Houses and cottages', href: '#' },
//                 { text: 'Developers directory', href: '#' },
//                 { text: 'Catalog of residential complex reviews', href: '#' },
//                 { text: 'Catalog of layouts', href: '#' },
//                 { text: 'Catalog of discounts and promotions', href: '#' },
//                 { text: 'Selection of new buildings', href: '#' },
//                 { text: 'Selection of LCD with YaGPT', href: '#' },
//                 { text: 'Real Estate Magazine', href: '#' },
//                 { text: 'Sample documents', href: '#' }
//             ]
//         },
//         {
//             text: 'Buy',
//             href: '#',
//             deepLinks: [
//                 { text: 'Apartments for sale', href: '#' },
//                 { text: 'Houses for sale', href: '#' },
//                 { text: 'Land plots', href: '#' }
//             ]
//         },
//         {
//             text: 'Take off',
//             href: '#',
//             deepLinks: [
//                 { text: 'Rent apartments', href: '#' },
//                 { text: 'Rent houses', href: '#' },
//                 { text: 'Commercial rent', href: '#' }
//             ]
//         },
//         {
//             text: 'Commercial',
//             href: '#',
//             deepLinks: [
//                 { text: 'Buy commercial', href: '#' },
//                 { text: 'Rent commercial', href: '#' },
//                 { text: 'Business for sale', href: '#' }
//             ]
//         },
//         { text: 'Mortgage', href: '#', deepLinks: [] },
//         { text: 'Magazine', href: '#', deepLinks: [] },
//         { text: 'For business', href: '#', deepLinks: [] },
//         { text: 'Abroad', href: '#', deepLinks: [] }
//     ];

//     return (
//         <header className="w-full border-b border-gray-200">
//             <div className="max-w-7xl mx-auto px-4">
//                 {/* Top Navigation Bar */}
//                 <div className="flex items-center justify-between h-20">
//                     {/* Logo and Region Selector */}
//                     <div className="flex items-center space-x-4">
//                         <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
//                             <img src='/assets/logo.png' className='w-10 h-10' alt="Logo" />
//                             <span className="font-semibold hidden sm:inline text-2xl">PROFO</span>
//                         </div>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden lg:flex items-center space-x-8">
//                         <button className="p-2">
//                             <Heart className="w-5 h-5" />
//                         </button>
//                         <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
//                             Place an ad
//                         </button>
//                         <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm">
//                             About the house
//                         </button>
//                         <button className="text-sm">
//                             Login
//                         </button>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="lg:hidden p-2"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>

//                 {/* Main Navigation with Dropdowns */}
//                 <nav className="hidden lg:block py-4">
//                     <ul className="flex space-x-8">
//                         {mainLinks.map((link, index) => (
//                             <li key={index} className="relative group">
//                                 <a
//                                     href={link.href}
//                                     className={`text-sm ${link.active ? 'text-black border-b-2 border-black pb-4' : 'text-gray-600'} hover:text-black`}
//                                 >
//                                     {link.text}
//                                 </a>
//                                 {link.deepLinks.length > 0 && (
//                                     <div className="absolute left-0 top-full mt-1 w-max bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                                         <div className="grid grid-cols-3 gap-4 p-6">
//                                             {link.deepLinks.map((deepLink, idx) => (
//                                                 <a
//                                                     key={idx}
//                                                     href={deepLink.href}
//                                                     className="text-sm text-gray-600 hover:text-black whitespace-nowrap"
//                                                 >
//                                                     {deepLink.text}
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                         <li className="flex items-center">
//                             <img src="/api/placeholder/24/24" alt="Icon 1" className="w-6 h-6 rounded-full" />
//                             <img src="/api/placeholder/24/24" alt="Icon 2" className="w-6 h-6 rounded-full -ml-2" />
//                             <span className="ml-2 text-sm">Аренда</span>
//                         </li>
//                         <li>
//                             <h1 className='text-blue-600 font-bold text-lg'>New Projects</h1>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Mobile Menu */}
//                 {isOpen && (
//                     <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20 overflow-y-auto">
//                         <div className="px-4 py-2">
//                             <ul className="space-y-4">
//                                 {mainLinks.map((link, index) => (
//                                     <li key={index}>
//                                         <a
//                                             href={link.href}
//                                             className={`text-lg ${link.active ? 'text-black font-semibold' : 'text-gray-600'}`}
//                                         >
//                                             {link.text}
//                                         </a>
//                                         {link.deepLinks.length > 0 && (
//                                             <ul className="ml-4 mt-2 space-y-2">
//                                                 {link.deepLinks.map((deepLink, idx) => (
//                                                     <li key={idx}>
//                                                         <a
//                                                             href={deepLink.href}
//                                                             className="text-sm text-gray-600"
//                                                         >
//                                                             {deepLink.text}
//                                                         </a>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </li>
//                                 ))}
//                                 <li className="flex items-center py-2">
//                                     <img src="/api/placeholder/24/24" alt="Icon 1" className="w-6 h-6 rounded-full" />
//                                     <img src="/api/placeholder/24/24" alt="Icon 2" className="w-6 h-6 rounded-full -ml-2" />
//                                     <span className="ml-2">Аренда</span>
//                                 </li>
//                                 <li>
//                                     <h1 className='text-blue-600 font-bold text-lg'>New Projects</h1>
//                                 </li>
//                             </ul>

//                             <div className="mt-8 space-y-4">
//                                 <button className="w-full px-4 py-2 bg-gray-100 rounded-lg">
//                                     Place an ad
//                                 </button>
//                                 <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg">
//                                     About the house
//                                 </button>
//                                 <button className="w-full px-4 py-2 text-center">
//                                     Login
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Menu, Heart, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();

//     const mainLinks = [
//         {
//             text: 'New buildings',
//             href: '#',
//             active: true,
//             deepLinks: [
//                 {
//                     column1: [
//                         { text: 'Residential complexes', href: '#' },
//                         { text: 'Apartments', href: '#' },
//                         { text: 'Cottage villages', href: '#' },
//                         { text: 'Houses and cottages', href: '#' },
//                     ],
//                     column2: [
//                         { text: 'Developers directory', href: '#' },
//                         { text: 'Catalog of residential complex reviews', href: '#' },
//                         { text: 'Catalog of layouts', href: '#' },
//                         { text: 'Catalog of discounts and promotions', href: '#' },
//                     ],
//                     column3: [
//                         { text: 'Selection of new buildings', href: '#' },
//                         { text: 'Selection of LCD with YaGPT', href: '#' },
//                         { text: 'Real Estate Magazine', href: '#' },
//                         { text: 'Sample documents', href: '#' },
//                     ],
//                     promo: {
//                         title: 'NEW BUILDINGS\nFOR YOUR BUDGET',
//                         description: 'You provide your wishes, we provide suitable options',
//                         cta: 'Leave a request',
//                         bgColor: 'bg-gray-100'
//                     }
//                 }
//             ]
//         },
//         {
//             text: 'Buy',
//             href: '#',
//             deepLinks: [{
//                 column1: [
//                     { text: 'Apartments for sale', href: '#' },
//                     { text: 'Secondary housing', href: '#' },
//                 ],
//                 column2: [
//                     { text: 'Houses and cottages', href: '#' },
//                     { text: 'Land plots', href: '#' },
//                 ],
//                 promo: {
//                     title: 'FIND YOUR\nPERFECT HOME',
//                     description: 'Browse through our curated selection',
//                     cta: 'Start searching',
//                     bgColor: 'bg-blue-50'
//                 }
//             }]
//         },
//         // ... other mainLinks with similar structure
//     ];

//     return (
//         <header className="w-full border-b border-gray-200">
//             <div className="max-w-7xl mx-auto px-4">
//                 {/* Top Navigation Bar */}
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo and Region Selector */}
//                     <div className="flex items-center space-x-4">
//                         <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
//                             <img src='/assets/logo.png' className='w-10 h-10' alt="Logo" />
//                             <span className="font-semibold hidden sm:inline text-2xl">PROFO</span>
//                         </div>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden lg:flex items-center space-x-8">
//                         <button className="p-2">
//                             <Heart className="w-5 h-5" />
//                         </button>
//                         <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
//                             Place an ad
//                         </button>
//                         <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm">
//                             About the house
//                         </button>
//                         <button className="text-sm">
//                             Login
//                         </button>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="lg:hidden p-2"
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>

//                 {/* Main Navigation with Dropdowns */}
//                 <nav className="hidden lg:block py-4">
//                     <ul className="flex space-x-8">
//                         {mainLinks.map((link, index) => (
//                             <li key={index} className="relative group">
//                                 <a
//                                     href={link.href}
//                                     className={`text-sm ${link.active ? 'text-red-500 border-b-2 border-red-500 pb-4' : 'text-gray-600'} hover:text-red-500`}
//                                 >
//                                     {link.text}
//                                 </a>
//                                 {link.deepLinks?.length > 0 && (
//                                     <div className="absolute left-0 top-full mt-1 w-[900px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                                         <div className="flex p-6">
//                                             <div className="flex-1 grid grid-cols-3 gap-8">
//                                                 {link.deepLinks[0].column1 && (
//                                                     <div className="space-y-4">
//                                                         {link.deepLinks[0].column1.map((item, idx) => (
//                                                             <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
//                                                                 {item.text}
//                                                             </a>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                                 {link.deepLinks[0].column2 && (
//                                                     <div className="space-y-4">
//                                                         {link.deepLinks[0].column2.map((item, idx) => (
//                                                             <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
//                                                                 {item.text}
//                                                             </a>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                                 {link.deepLinks[0].column3 && (
//                                                     <div className="space-y-4">
//                                                         {link.deepLinks[0].column3.map((item, idx) => (
//                                                             <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
//                                                                 {item.text}
//                                                             </a>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                             </div>
//                                             {link.deepLinks[0].promo && (
//                                                 <div className={`w-72 ${link.deepLinks[0].promo.bgColor} rounded-lg p-6 ml-6`}>
//                                                     <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
//                                                         {link.deepLinks[0].promo.title}
//                                                     </h3>
//                                                     <p className="text-sm text-gray-600 mb-4">
//                                                         {link.deepLinks[0].promo.description}
//                                                     </p>
//                                                     <button className="text-sm font-medium hover:underline">
//                                                         {link.deepLinks[0].promo.cta}
//                                                     </button>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                         {/* <li className="flex items-center">
//                             <img src="/api/placeholder/24/24" alt="Icon 1" className="w-6 h-6 rounded-full" />
//                             <img src="/api/placeholder/24/24" alt="Icon 2" className="w-6 h-6 rounded-full -ml-2" />
//                             <span className="ml-2 text-sm">Аренда</span>
//                         </li> */}
//                         <li>
//                             <span className='text-blue-600 font-bold text-md'>New Projects</span>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Mobile Menu */}
//                 {isOpen && (
//                     <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20 overflow-y-auto">
//                         <div className="px-4 py-2">
//                             <ul className="space-y-4">
//                                 {mainLinks.map((link, index) => (
//                                     <li key={index} className="space-y-2">
//                                         <a
//                                             href={link.href}
//                                             className={`text-lg ${link.active ? 'text-red-500 font-semibold' : 'text-gray-600'}`}
//                                         >
//                                             {link.text}
//                                         </a>
//                                         {link.deepLinks?.[0].column1 && (
//                                             <ul className="ml-4 space-y-2">
//                                                 {[
//                                                     ...(link.deepLinks[0].column1 || []),
//                                                     ...(link.deepLinks[0].column2 || []),
//                                                     ...(link.deepLinks[0].column3 || [])
//                                                 ].map((item, idx) => (
//                                                     <li key={idx}>
//                                                         <a href={item.href} className="text-sm text-gray-600">
//                                                             {item.text}
//                                                         </a>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         )}
//                                     </li>
//                                 ))}
//                                 <li className="flex items-center py-2">
//                                     <img src="/api/placeholder/24/24" alt="Icon 1" className="w-6 h-6 rounded-full" />
//                                     <img src="/api/placeholder/24/24" alt="Icon 2" className="w-6 h-6 rounded-full -ml-2" />
//                                     <span className="ml-2">Аренда</span>
//                                 </li>
//                                 <li>
//                                     <span className='text-blue-600 font-bold text-lg'>самолет</span>
//                                 </li>
//                             </ul>

//                             <div className="mt-8 space-y-4">
//                                 <button className="w-full px-4 py-2 bg-gray-100 rounded-lg">
//                                     Place an ad
//                                 </button>
//                                 <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg">
//                                     About the house
//                                 </button>
//                                 <button className="w-full px-4 py-2 text-center">
//                                     Login
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import { Menu, Heart, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllBuildings, getAllProjects, getAllProperties, getFilterProperties, getMapFeed } from '../redux/features/Map/mapSlice';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    const isHomePage = location.pathname === '/';
    const [selectedId, setSelectedId] = useState(null);
    console.log(selectedId)

    const mainLinks = [
        {

            id:1,
            text: 'Apartments',
            href: 'apartment',
            // deepLinks: [
            //     {
            //         column1: [
            //             { text: 'Residential complexes', href: '#' },
            //             { text: 'Apartments', href: '#' },
            //             { text: 'Cottage villages', href: '#' },
            //             { text: 'Houses and cottages', href: '#' },
            //         ],
            //         column2: [
            //             { text: 'Developers directory', href: '#' },
            //             { text: 'Catalog of residential complex reviews', href: '#' },
            //             { text: 'Catalog of layouts', href: '#' },
            //             { text: 'Catalog of discounts and promotions', href: '#' },
            //         ],
            //         column3: [
            //             { text: 'Selection of new buildings', href: '#' },
            //             { text: 'Selection of LCD with YaGPT', href: '#' },
            //             { text: 'Real Estate Magazine', href: '#' },
            //             { text: 'Sample documents', href: '#' },
            //         ],
            //         promo: {
            //             title: 'NEW BUILDINGS\nFOR YOUR BUDGET',
            //             description: 'You provide your wishes, we provide suitable options',
            //             cta: 'Leave a request',
            //             bgColor: 'bg-gray-100'
            //         }
            //     }
            // ]
        },
        {
            id:2,
            text: 'Rent',
            href: 'rent',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id:3,
            text: 'Buy',
            href: 'buy',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id:4,
            text: 'Office',
            href: 'office',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id:5,
            text: 'Flats',
            href: '#',
            // deepLinks: [{
            //     column1: [
            //         { text: 'Apartments for sale', href: '#' },
            //         { text: 'Secondary housing', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Houses and cottages', href: '#' },
            //         { text: 'Land plots', href: '#' },
            //     ],
            //     promo: {
            //         title: 'FIND YOUR\nPERFECT HOME',
            //         description: 'Browse through our curated selection',
            //         cta: 'Start searching',
            //         bgColor: 'bg-blue-50'
            //     }
            // }]
        },
        {
            id:6,
            text: 'Warehouses',
            href: '#',
            
        },
        {
            id:7,
            text: 'Lands',
            href: '#',
            
        },
        {
            id:8,
            text: 'Kheti Jameen',
            href: '#',
            
        },
        {
            id:9,
            text: 'Services',
            href: '#',
            // deepLinks: [{
            //     column1: [
            //         { text: 'EMI Calculator', href: '#' },
            //         { text: 'Loan Offers', href: '#' },
            //     ],
            //     column2: [
            //         { text: 'Upload Property', href: '#' },
            //     ]
            // }]
        },
    ];


     const handleFilter = (type_name , id) => {
         setSelectedId(id)
        console.log(type_name)
            if (!navigator.geolocation) {
                alert("Geolocation is not supported by your browser");
                return;
            }
    
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
    
                    if (type_name === "project"){
                        dispatch(getAllProjects())
                    }
                    else if (type_name === "buildings"){
                        dispatch(getAllBuildings())
                        
                    }
                    else if (type_name === "properties"){
                        dispatch(getAllProperties())
                    }
                    else if (type_name === 'getMapFeed'){
                        dispatch(getMapFeed({
                            latitude,
                            longitude ,
                            radius : 1
                        }))
                    }
                    else if (type_name === 'rent'){
                        dispatch(getFilterProperties({ latitude, longitude, purpose : type_name }));


                    }
                    else if (type_name === 'buy'){
                        dispatch(getFilterProperties({ latitude, longitude, purpose : type_name }));


                    }
                    else{
                        // Dispatch action with the location and type_name
                        dispatch(getFilterProperties({ latitude, longitude, type_name }));
                    }
                    navigate('/main')
                    
                },
                (error) => {
                    console.error("Error retrieving location:", error);
                    alert("Unable to retrieve your location. Please try again.");
                }
            );
        };

    return (
        <header className="w-full border-b border-gray-200 navbar">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Navigation Bar */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Region Selector */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                            <img src='/assets/logo.png' className='w-10 h-10' alt="Logo" />
                            <span className="font-semibold hidden sm:inline text-2xl">PROFO</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <button className="p-2">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
                            Place an ad
                        </button>
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm">
                            About the house
                        </button>
                        <button className="text-sm">
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Main Navigation with Dropdowns - Hidden on Homepage */}
                {!isHomePage && (
                    <nav className="hidden lg:block py-2">
                        <ul className="flex space-x-8">
                            {mainLinks.map((link, index) => (
                                <li key={index} className="relative group">
                                    <p
                                        onClick={() => handleFilter(link.href , link?.id)}
                                        className={`text-sm ${link?.id == selectedId ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'} hover:text-red-500 pb-1 cursor-pointer`}
                                    >
                                        {link.text}
                                    </p>
                                    {link.deepLinks?.length > 0 && (
                                        <div className="absolute left-0 top-full mt-1 w-[900px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="flex p-6">
                                                <div className="flex-1 grid grid-cols-3 gap-8">
                                                    {link.deepLinks[0].column1 && (
                                                        <div className="space-y-4">
                                                            {link.deepLinks[0].column1.map((item, idx) => (
                                                                <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
                                                                    {item.text}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {link.deepLinks[0].column2 && (
                                                        <div className="space-y-4">
                                                            {link.deepLinks[0].column2.map((item, idx) => (
                                                                <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
                                                                    {item.text}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {link.deepLinks[0].column3 && (
                                                        <div className="space-y-4">
                                                            {link.deepLinks[0].column3.map((item, idx) => (
                                                                <a key={idx} href={item.href} className="block text-sm text-gray-600 hover:text-black">
                                                                    {item.text}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                {link.deepLinks[0].promo && (
                                                    <div className={`w-72 ${link.deepLinks[0].promo.bgColor} rounded-lg p-6 ml-6`}>
                                                        <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">
                                                            {link.deepLinks[0].promo.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mb-4">
                                                            {link.deepLinks[0].promo.description}
                                                        </p>
                                                        <button className="text-sm font-medium hover:underline">
                                                            {link.deepLinks[0].promo.cta}
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                            <li>
                                <span className='text-blue-600 font-bold text-md cursor-pointer' onClick={() => handleFilter('project')}>New Projects</span>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20 overflow-y-auto">
                        <div className="px-4 py-2">
                            {!isHomePage && (
                                <ul className="space-y-4">
                                    {mainLinks.map((link, index) => (
                                        <li key={index} className="relative group">
                                            <p
                                                onClick={() => handleFilter(link.href, link?.id)}
                                                className={`text-sm cursor-pointer ${link?.id === selectedId ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'} hover:text-red-500 pb-1`}
                                            >
                                                {link.text}
                                            </p>
                                            {link.deepLinks?.[0].column1 && (
                                                <ul className="ml-4 space-y-2">
                                                    {[
                                                        ...(link.deepLinks[0].column1 || []),
                                                        ...(link.deepLinks[0].column2 || []),
                                                        ...(link.deepLinks[0].column3 || [])
                                                    ].map((item, idx) => (
                                                        <li key={idx}>
                                                            <a href={item.href} className="text-sm text-gray-600">
                                                                {item.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                    <li>
                                        <span className='text-blue-600 font-bold text-lg'>New Projects</span>
                                    </li>
                                </ul>
                            )}

                            <div className="mt-8 space-y-4">
                                <button className="w-full px-4 py-2 bg-gray-100 rounded-lg">
                                    Place an ad
                                </button>
                                <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg">
                                    About the house
                                </button>
                                <button className="w-full px-4 py-2 text-center">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;