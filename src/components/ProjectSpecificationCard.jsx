// import React, { useState } from 'react';
// import { ChevronRight, X, Building2 } from 'lucide-react';

// // Custom Modal Component
// const Modal = ({ isOpen, onClose, children }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
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

// const ProjectSpecificationCard = ({ specifications }) => {
//     const [showAll, setShowAll] = useState(false);
//     const [selectedSpec, setSelectedSpec] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleCardClick = (spec) => {
//         setSelectedSpec(spec);
//         setIsModalOpen(true);
//     };

//     const visibleSpecs = showAll ? specifications : specifications?.slice(0, 4);
    

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-gray-900">
//                 Project Specifications
//             </h1>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {visibleSpecs?.map((spec, index) => (
//                     <Card
//                         key={spec._id || index}
//                         className="cursor-pointer bg-white hover:bg-gray-50"
//                         onClick={() => handleCardClick(spec)}
//                     >
//                         <div className="p-6 h-full flex flex-col justify-between min-h-[200px]">
//                             <div>
//                                 <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                                     {spec.category}
//                                 </h3>
//                                 <p className="text-sm text-gray-600">
//                                     {spec.details[0]}
//                                     {spec.details.length > 1 && '...'}
//                                 </p>
//                             </div>
//                             <div className="mt-4">
//                                 <Building2 className="w-8 h-8 text-blue-500" />
//                             </div>
//                         </div>
//                     </Card>
//                 ))}
//             </div>

//             {!showAll && specifications?.length > 4 && (
//                 <button
//                     className="mt-6 flex items-center text-blue-500 hover:text-blue-600 font-medium px-4 py-2 rounded-md transition-colors"
//                     onClick={() => setShowAll(true)}
//                 >
//                     Show all specifications
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                 </button>
//             )}

//             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//                 <div className="flex items-center gap-3 mb-4">
//                     <div className="bg-blue-50 p-2 rounded-lg">
//                         <Building2 className="w-8 h-8 text-blue-500" />
//                     </div>
//                     <h2 className="text-xl font-semibold text-gray-900">
//                         {selectedSpec?.category}
//                     </h2>
//                 </div>

//                 <div className="space-y-6">
//                     <div className="space-y-4">
//                         <h4 className="font-semibold text-gray-900">Specifications:</h4>
//                         <ul className="list-disc pl-5 space-y-2 text-gray-600">
//                             {selectedSpec?.details?.map((detail, index) => (
//                                 <li key={index}>{detail}</li>
//                             ))}
//                         </ul>
//                     </div>

//                     <button
//                         onClick={() => setIsModalOpen(false)}
//                         className="w-full mt-4 bg-[#027BFB] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
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
import { ChevronRight, X } from 'lucide-react';

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
const Card = ({ children, className = '', isBlue = false, ...props }) => (
    <div
        className={`rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 ${isBlue ? 'bg-[#0066FF] text-white' : 'bg-gray-100'
            } ${className}`}
        {...props}
    >
        {children}
    </div>
);

// Custom Icon Component
const PercentageIcon = ({ className = '' }) => (
    <svg
        className={`w-8 h-8 ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const KeyIcon = ({ className = '' }) => (
    <svg
        className={`w-8 h-8 ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21 2L19 4M11.5 11.5L19 4M7.5 11.5C9.433 11.5 11 9.933 11 8C11 6.067 9.433 4.5 7.5 4.5C5.567 4.5 4 6.067 4 8C4 9.933 5.567 11.5 7.5 11.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Specification
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {visibleSpecs?.map((spec, index) => (
                    <Card
                        key={spec._id || index}
                        className="cursor-pointer"
                        isBlue={index === 0}
                        onClick={() => handleCardClick(spec)}
                    >
                        <div className="p-4 h-full flex flex-col justify-between min-h-[180px]">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">
                                    {spec.category}
                                </h3>
                                <p className="text-sm opacity-90">
                                    {spec.details[0]}
                                    {spec.details.length > 1 && '...'}
                                </p>
                            </div>
                            <div className="mt-4">
                                {index % 2 === 0 ?
                                    <KeyIcon className={index === 0 ? 'text-white' : 'text-[#0066FF]'} /> :
                                    <PercentageIcon className={index === 0 ? 'text-white' : 'text-[#0066FF]'} />
                                }
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {!showAll && specifications?.length > 4 && (
                <button
                    className=" mt-6 py-2 px-6 text-center text-white bg-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-md"
                    onClick={() => setShowAll(true)}
                >
                    Show all specifications
                </button>
            )}

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                        {selectedSpec && (selectedSpec._id % 2 === 0 ?
                            <KeyIcon className="text-[#0066FF]" /> :
                            <PercentageIcon className="text-[#0066FF]" />
                        )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                        {selectedSpec?.category}
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Details:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            {selectedSpec?.details?.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="w-full mt-4 bg-[#0066FF] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ProjectSpecificationCard;