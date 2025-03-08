// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { HiOutlineDotsVertical } from 'react-icons/hi';

// const DropdownMenu = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const handleEmailClick = () => {
//         setIsOpen(!isOpen);
//     };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const options = [
//         { id: 1, label: 'Edit' },
//         { id: 2, label: 'Share' },
//         { id: 3, label: 'Delete' },
//         { id: 4, label: 'Download' }
//     ];

//     const handleOptionClick = (option) => {
//         console.log(`Selected option: ${option.label}`);
//         setIsOpen(false);
//     };

//     return (
//         <div className="relative inline-block" ref={dropdownRef}>
//             <motion.button
//                 onClick={handleEmailClick}
//                 className="flex items-center justify-center bg-transparent hover:bg-gray-200 text-black py-2 px-2 rounded-md transition-colors "
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//             >
//                 <HiOutlineDotsVertical size={20} />
//             </motion.button>

//             {isOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 py-1 overflow-hidden"
//                 >
//                     {options.map((option) => (
//                         <motion.div
//                             key={option.id}
//                             className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                             whileHover={{ backgroundColor: '#f3f4f6' }}
//                             onClick={() => handleOptionClick(option)}
//                         >
//                             {option.label}
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// export default DropdownMenu;

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    const handleButtonClick = (e) => {
        // Get button position
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                x: rect.x + rect.width / 2, // Center of button
                y: 0                  // Top of button
            });
        }
        setIsOpen(!isOpen);
    };


    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current &&
                !popupRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const options = [
        { id: 1, label: 'Edit' },
        { id: 2, label: 'Share' },
        { id: 3, label: 'Delete' },
        { id: 4, label: 'Download' }
    ];

    const handleOptionClick = (option) => {
        console.log(`Selected option: ${option.label}`);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <motion.button
                ref={buttonRef}
                onClick={handleButtonClick}
                className="flex items-center justify-center bg-transparent hover:bg-gray-200 text-black py-2 px-2 rounded-md transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
            >
                <HiOutlineDotsVertical size={20} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={popupRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        className="fixed w-48 bg-white rounded-md shadow-lg z-50 py-1 overflow-hidden border border-gray-200"
                        style={{
                            top: `${position.y - 10}px`,
                            left: `${position.x}px`,
                            transform: 'translate(-50%, -100%)', // Center horizontally and position above
                            transformOrigin: 'bottom center'
                        }}
                    >
                        {options.map((option) => (
                            <motion.div
                                key={option.id}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                whileHover={{ backgroundColor: '#f3f4f6' }}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.label}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownMenu;