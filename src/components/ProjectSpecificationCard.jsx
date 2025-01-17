// import React, { useState, useEffect } from 'react';
// import { Percent, Home, Key, Heart, ChevronRight, X } from 'lucide-react';

// // Custom Modal Component
// const Modal = ({ isOpen, onClose, children }) => {
//     useEffect(() => {
//         const handleEscape = (e) => {
//             if (e.key === 'Escape') onClose();
//         };

//         if (isOpen) {
//             document.addEventListener('keydown', handleEscape);
//             document.body.style.overflow = 'hidden';
//         }

//         return () => {
//             document.removeEventListener('keydown', handleEscape);
//             document.body.style.overflow = 'unset';
//         };
//     }, [isOpen, onClose]);

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             <div
//                 className="absolute inset-0 bg-black bg-opacity-50"
//                 onClick={onClose}
//             />
//             <div className="relative bg-white rounded-lg w-full max-w-md mx-4 p-6 shadow-xl">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
//                 >
//                     <X className="w-5 h-5" />
//                 </button>
//                 {children}
//             </div>
//         </div>
//     );
// };

// // Custom Card Component
// const Card = ({ children, className = '', ...props }) => (
//     <div
//         className={`rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
//         {...props}
//     >
//         {children}
//     </div>
// );

// const ProjectSpecificationCard = () => {
//     const [showAll, setShowAll] = useState(false);
//     const [selectedSpec, setSelectedSpec] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const initialSpecs = [
//         {
//             title: "25% discount",
//             description: "25% discount on a limited list of apartments for non-subsidized...",
//             icon: <Percent className="w-8 h-8" />,
//             bgColor: "bg-[#027BFB]",
//             textColor: "text-white"
//         },
//         {
//             title: "10% discount",
//             description: "An additional discount of 10% for 100% payment of the purchase....",
//             icon: <Home className="w-8 h-8 text-blue-500" />,
//             bgColor: "bg-gray-100"
//         },
//         {
//             title: "Family mortgage from 3.5%",
//             description: "The total cost of the loan is — from 3.987% to...",
//             icon: <Key className="w-8 h-8 text-blue-500" />,
//             bgColor: "bg-gray-100"
//         },
//         {
//             title: "Bonus up to 100 000 rub.",
//             description: "Cash reward for expanding the list of...",
//             icon: <Heart className="w-8 h-8 text-blue-500" />,
//             bgColor: "bg-gray-100"
//         }
//     ];

//     const handleCardClick = (spec) => {
//         setSelectedSpec(spec);
//         setIsModalOpen(true);
//     };

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-gray-900">
//                 Discounts and promotions
//             </h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {initialSpecs.slice(0, showAll ? initialSpecs.length : 4).map((spec, index) => (
//                     <Card
//                         key={index}
//                         className={`cursor-pointer ${spec.bgColor}`}
//                         onClick={() => handleCardClick(spec)}
//                     >
//                         <div className={`p-6 h-full flex flex-col justify-between min-h-[200px] ${spec.textColor || 'text-gray-900'}`}>
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
//                                 <p className={`text-sm ${spec.textColor || 'text-gray-600'}`}>
//                                     {spec.description}
//                                 </p>
//                             </div>
//                             <div className="mt-4">
//                                 {spec.icon}
//                             </div>
//                         </div>
//                     </Card>
//                 ))}
//             </div>

//             {!showAll && (
//                 <button
//                     className="mt-6 flex items-center text-blue-500 hover:text-blue-600 font-medium px-4 py-2 rounded-md transition-colors"
//                     onClick={() => setShowAll(true)}
//                 >
//                     Show all promotions
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                 </button>
//             )}

//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//             >
//                 <div className="flex items-center gap-3 mb-4">
//                     <div className={`${selectedSpec?.bgColor} p-2 rounded-lg`}>
//                         {selectedSpec?.icon}
//                     </div>
//                     <h2 className="text-xl font-semibold text-gray-900">
//                         {selectedSpec?.title}
//                     </h2>
//                 </div>

//                 <div className="space-y-6">
//                     <p className="text-gray-600">
//                         {selectedSpec?.description}
//                     </p>

//                     <div className="space-y-4">
//                         <h4 className="font-semibold text-gray-900">Terms and Conditions:</h4>
//                         <ul className="list-disc pl-5 space-y-2 text-gray-600">
//                             <li>Valid until December 31, 2025</li>
//                             <li>Cannot be combined with other offers</li>
//                             <li>Subject to availability</li>
//                             <li>Terms and conditions apply</li>
//                         </ul>
//                     </div>

//                     <button
//                         onClick={() => setIsModalOpen(false)}
//                         className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// export default ProjectSpecificationCard;

import React, { useState } from 'react';
import { ChevronRight, X, Building2 } from 'lucide-react';

// Custom Modal Component
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
            <div className="relative bg-white rounded-lg w-full max-w-md mx-4 p-6 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                >
                    <X className="w-5 h-5" />
                </button>
                {children}
            </div>
        </div>
    );
};

// Custom Card Component
const Card = ({ children, className = '', ...props }) => (
    <div
        className={`rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
        {...props}
    >
        {children}
    </div>
);

const ProjectSpecificationCard = ({ specifications }) => {
    const [showAll, setShowAll] = useState(false);
    const [selectedSpec, setSelectedSpec] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (spec) => {
        setSelectedSpec(spec);
        setIsModalOpen(true);
    };

    const visibleSpecs = showAll ? specifications : specifications?.slice(0, 4);
    

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">
                Project Specifications
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {visibleSpecs?.map((spec, index) => (
                    <Card
                        key={spec._id || index}
                        className="cursor-pointer bg-white hover:bg-gray-50"
                        onClick={() => handleCardClick(spec)}
                    >
                        <div className="p-6 h-full flex flex-col justify-between min-h-[200px]">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    {spec.category}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {spec.details[0]}
                                    {spec.details.length > 1 && '...'}
                                </p>
                            </div>
                            <div className="mt-4">
                                <Building2 className="w-8 h-8 text-blue-500" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {!showAll && specifications?.length > 4 && (
                <button
                    className="mt-6 flex items-center text-blue-500 hover:text-blue-600 font-medium px-4 py-2 rounded-md transition-colors"
                    onClick={() => setShowAll(true)}
                >
                    Show all specifications
                    <ChevronRight className="ml-2 h-4 w-4" />
                </button>
            )}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                        <Building2 className="w-8 h-8 text-blue-500" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                        {selectedSpec?.category}
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Specifications:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            {selectedSpec?.details?.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="w-full mt-4 bg-[#027BFB] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ProjectSpecificationCard;