// import React, { useState, useEffect } from 'react';
// import { X, ChevronDown, Check, ArrowLeft } from 'lucide-react';


// // RangeSlider Component
// const RangeSlider = ({ min, max, value, onChange, label }) => {
//     const [localValue, setLocalValue] = useState({ min: min, max: max });

//     const handleChange = (type, val) => {
//         const newValue = { ...localValue, [type]: Number(val) };
//         setLocalValue(newValue);
//         onChange?.(newValue);
//     };

//     return (
//         <div className="w-full">
//             <div className="flex justify-between mb-2">
//                 <span className="text-sm text-gray-600">{label}</span>
//                 <div className="flex gap-2">
//                     <input
//                         type="number"
//                         value={localValue.min}
//                         onChange={(e) => handleChange('min', e.target.value)}
//                         className="w-20 px-2 py-1 text-sm border rounded"
//                     />
//                     <span className="text-gray-400">-</span>
//                     <input
//                         type="number"
//                         value={localValue.max}
//                         onChange={(e) => handleChange('max', e.target.value)}
//                         className="w-20 px-2 py-1 text-sm border rounded"
//                     />
//                 </div>
//             </div>
//             <div className="relative h-2 bg-gray-200 rounded-full">
//                 <div
//                     className="absolute h-full bg-blue-500 rounded-full"
//                     style={{
//                         left: `${((localValue.min - min) / (max - min)) * 100}%`,
//                         right: `${100 - ((localValue.max - min) / (max - min)) * 100}%`
//                     }}
//                 />
//             </div>
//         </div>
//     );
// };

// // Increment Component
// const IncrementFilter = ({ max, value = 0, onChange, label }) => {
//     return (
//         <div className="w-full">
//             <span className="text-sm text-gray-600 mb-2 block">{label}</span>
//             <div className="flex items-center gap-2">
//                 {[...Array(max + 1)].map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => onChange?.(i)}
//                         className={`w-8 h-8 rounded-full text-sm flex items-center justify-center transition-all
//               ${value === i
//                                 ? 'bg-blue-500 text-white'
//                                 : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
//                     >
//                         {i}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// // Toggle Component
// const ToggleFilter = ({ values, value, onChange, label }) => {
//     return (
//         <div className="w-full">
//             <span className="text-sm text-gray-600 mb-2 block">{label}</span>
//             <div className="flex flex-wrap gap-2">
//                 {values.map((option) => (
//                     <button
//                         key={option}
//                         onClick={() => onChange?.(option)}
//                         className={`px-4 py-2 rounded-full text-sm transition-all
//               ${value === option
//                                 ? 'bg-blue-500 text-white'
//                                 : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
//                     >
//                         {option}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// // MultiSelect Component
// const MultiSelectFilter = ({ values, selected = [], onChange, label }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative w-full">
//             <span className="text-sm text-gray-600 mb-2 block">{label}</span>
//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="w-full p-2 border rounded-lg flex items-center justify-between cursor-pointer bg-white"
//             >
//                 <div className="flex flex-wrap gap-1">
//                     {selected.length > 0 ? (
//                         selected.map((item) => (
//                             <span
//                                 key={item}
//                                 className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
//                             >
//                                 {item}
//                             </span>
//                         ))
//                     ) : (
//                         <span className="text-gray-400 text-sm">Select options</span>
//                     )}
//                 </div>
//                 <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
//             </div>
//             {isOpen && (
//                 <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
//                     {values.map((option) => (
//                         <div
//                             key={option}
//                             onClick={() => {
//                                 const newSelected = selected.includes(option)
//                                     ? selected.filter(item => item !== option)
//                                     : [...selected, option];
//                                 onChange?.(newSelected);
//                             }}
//                             className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer"
//                         >
//                             <div className={`w-4 h-4 border rounded flex items-center justify-center
//                 ${selected.includes(option) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
//                                 {selected.includes(option) && <Check className="w-3 h-3 text-white" />}
//                             </div>
//                             <span className="text-sm">{option}</span>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };


// // Previous filter subcomponents (RangeSlider, IncrementFilter, ToggleFilter, MultiSelectFilter) remain the same...

// const Modal = ({ isOpen, onClose, children }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//             {/* Backdrop */}
//             <div
//                 className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
//                 onClick={onClose}
//             />

//             {/* Modal */}
//             <div className="relative min-h-screen md:flex md:items-center md:justify-center p-4">
//                 <div className="relative bg-white w-full max-w-3xl rounded-lg shadow-xl">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Property Filter Component
// const PropertyFilter = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState({});

//     useEffect(() => {
//         if (modalOpen) {
//             fetch('`/api/web/filter/structure')
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     const sections = {
//         main: {
//             title: 'Property Filters',
//             content: () => (
//                 <div className="space-y-4">
//                     <button
//                         onClick={() => setActiveSection('prices')}
//                         className="w-full p-4 text-left border rounded-lg flex justify-between items-center hover:bg-gray-50"
//                     >
//                         <div>
//                             <p className="font-medium">Price Range</p>
//                             <p className="text-sm text-gray-500">
//                                 {selectedFilters.price
//                                     ? `₹${selectedFilters.price.min} - ₹${selectedFilters.price.max}`
//                                     : 'Select price range'}
//                             </p>
//                         </div>
//                         <ChevronDown className="w-5 h-5 text-gray-400" />
//                     </button>

//                     <button
//                         onClick={() => setActiveSection('rooms')}
//                         className="w-full p-4 text-left border rounded-lg flex justify-between items-center hover:bg-gray-50"
//                     >
//                         <div>
//                             <p className="font-medium">Rooms</p>
//                             <p className="text-sm text-gray-500">
//                                 {selectedFilters.bedrooms || selectedFilters.bathrooms
//                                     ? `${selectedFilters.bedrooms || 0} Bed, ${selectedFilters.bathrooms || 0} Bath`
//                                     : 'Select rooms'}
//                             </p>
//                         </div>
//                         <ChevronDown className="w-5 h-5 text-gray-400" />
//                     </button>

//                     <button
//                         onClick={() => setActiveSection('propertyType')}
//                         className="w-full p-4 text-left border rounded-lg flex justify-between items-center hover:bg-gray-50"
//                     >
//                         <div>
//                             <p className="font-medium">Property Type</p>
//                             <p className="text-sm text-gray-500">
//                                 {selectedFilters.propertyType?.length
//                                     ? `${selectedFilters.propertyType.length} selected`
//                                     : 'Select property types'}
//                             </p>
//                         </div>
//                         <ChevronDown className="w-5 h-5 text-gray-400" />
//                     </button>

//                     <button
//                         onClick={() => setActiveSection('amenities')}
//                         className="w-full p-4 text-left border rounded-lg flex justify-between items-center hover:bg-gray-50"
//                     >
//                         <div>
//                             <p className="font-medium">Amenities</p>
//                             <p className="text-sm text-gray-500">
//                                 {selectedFilters.amenities?.length
//                                     ? `${selectedFilters.amenities.length} selected`
//                                     : 'Select amenities'}
//                             </p>
//                         </div>
//                         <ChevronDown className="w-5 h-5 text-gray-400" />
//                     </button>
//                 </div>
//             )
//         },
//         prices: {
//             title: 'Price Range',
//             content: () => (
//                 <RangeSlider
//                     min={filters?.price.min}
//                     max={filters?.price.max}
//                     value={selectedFilters.price}
//                     onChange={(val) => setSelectedFilters(prev => ({ ...prev, price: val }))}
//                     label="Select Price Range"
//                 />
//             )
//         },
//         rooms: {
//             title: 'Rooms',
//             content: () => (
//                 <div className="space-y-6">
//                     <IncrementFilter
//                         max={filters?.bedrooms.max}
//                         value={selectedFilters.bedrooms}
//                         onChange={(val) => setSelectedFilters(prev => ({ ...prev, bedrooms: val }))}
//                         label="Bedrooms"
//                     />
//                     <IncrementFilter
//                         max={filters?.bathrooms.max}
//                         value={selectedFilters.bathrooms}
//                         onChange={(val) => setSelectedFilters(prev => ({ ...prev, bathrooms: val }))}
//                         label="Bathrooms"
//                     />
//                 </div>
//             )
//         },
//         propertyType: {
//             title: 'Property Type',
//             content: () => (
//                 <MultiSelectFilter
//                     values={filters?.propertyType.values || []}
//                     selected={selectedFilters.propertyType || []}
//                     onChange={(val) => setSelectedFilters(prev => ({ ...prev, propertyType: val }))}
//                     label="Select Property Types"
//                 />
//             )
//         },
//         amenities: {
//             title: 'Amenities',
//             content: () => (
//                 <MultiSelectFilter
//                     values={filters?.amenities.values || []}
//                     selected={selectedFilters.amenities || []}
//                     onChange={(val) => setSelectedFilters(prev => ({ ...prev, amenities: val }))}
//                     label="Select Amenities"
//                 />
//             )
//         }
//     };

//     const currentSection = sections[activeSection || 'main'];

//     return (
//         <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b">
//                 <div className="flex items-center gap-3">
//                     {activeSection !== 'main' && (
//                         <button
//                             onClick={() => setActiveSection('main')}
//                             className="p-1 hover:bg-gray-100 rounded-full"
//                         >
//                             <ArrowLeft className="w-5 h-5" />
//                         </button>
//                     )}
//                     <h2 className="text-lg font-semibold">{currentSection.title}</h2>
//                 </div>
//                 <button
//                     onClick={() => setModalOpen(false)}
//                     className="p-1 hover:bg-gray-100 rounded-full"
//                 >
//                     <X className="w-5 h-5" />
//                 </button>
//             </div>

//             {/* Content */}
//             <div className="p-4 max-h-[70vh] overflow-y-auto">
//                 {!filters ? (
//                     <div className="flex justify-center items-center h-40">
//                         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
//                     </div>
//                 ) : currentSection.content()}
//             </div>

//             {/* Footer */}
//             <div className="p-4 border-t flex justify-between items-center">
//                 <button
//                     onClick={() => {
//                         setSelectedFilters({});
//                         setActiveSection('main');
//                     }}
//                     className="text-blue-500 hover:text-blue-600 font-medium"
//                 >
//                     Clear All
//                 </button>
//                 <button
//                     onClick={() => setModalOpen(false)}
//                     className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                     Apply Filters
//                 </button>
//             </div>
//         </Modal>
//     );
// };

// // Project Filter Component
// const ProjectFilter = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState({});

//     useEffect(() => {
//         // Fetch project filter structure
//         fetch('`/api/web/projects/filter-options')
//             .then(res => res.json())
//             .then(data => {
//                 setFilters(data.data);
//             });
//     }, []);

//     if (!filters) return <div>Loading...</div>;

//     return (
//         <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
//         <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
//             <h2 className="text-xl font-semibold mb-6">Project Filters</h2>

//             {/* Project Type & Status */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <MultiSelectFilter
//                     values={filters.projectType.values}
//                     selected={selectedFilters.projectType || []}
//                     onChange={(val) => setSelectedFilters(prev => ({ ...prev, projectType: val }))}
//                     label="Project Type"
//                 />
//                 <MultiSelectFilter
//                     values={filters.projectStatus.values}
//                     selected={selectedFilters.projectStatus || []}
//                     onChange={(val) => setSelectedFilters(prev => ({ ...prev, projectStatus: val }))}
//                     label="Project Status"
//                 />
//             </div>

//             {/* Price Range */}
//             <RangeSlider
//                 min={filters.priceRange.min}
//                 max={filters.priceRange.max}
//                 value={selectedFilters.priceRange}
//                 onChange={(val) => setSelectedFilters(prev => ({ ...prev, priceRange: val }))}
//                 label="Price Range"
//             />

//             {/* Amenities & State */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <MultiSelectFilter
//                     values={filters.amenities.values}
//                     selected={selectedFilters.amenities || []}
//                     onChange={(val) => setSelectedFilters(prev => ({ ...prev, amenities: val }))}
//                     label="Project Amenities"
//                 />
//                 <MultiSelectFilter
//                     values={filters.state.values}
//                     selected={selectedFilters.state || []}
//                     onChange={(val) => setSelectedFilters(prev => ({ ...prev, state: val }))}
//                     label="State"
//                 />
//             </div>
//         </div>
//         </Modal>
//     );
// };

// // Export both components
// const DynamicFilterComponent = {
//     PropertyFilter,
//     ProjectFilter
// };

// export default DynamicFilterComponent;


// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Spin, Slider, InputNumber, Checkbox, Space, Divider } from 'antd';
// import { LeftOutlined } from '@ant-design/icons';

// // Property Filter Component
// const PropertyFilter = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState({});

//     useEffect(() => {
//         if (modalOpen) {
//             fetch('http://localhost:5053/api/web/filter/structure')
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     const sections = {
//         main: {
//             title: 'Property Filters',
//             content: () => (
//                 <Space direction="vertical" className="w-full">
//                     {[
//                         {
//                             key: 'prices',
//                             title: 'Price Range',
//                             subtitle: selectedFilters.price
//                                 ? `₹${selectedFilters.price.min} - ₹${selectedFilters.price.max}`
//                                 : 'Select price range'
//                         },
//                         {
//                             key: 'rooms',
//                             title: 'Rooms',
//                             subtitle: selectedFilters.bedrooms || selectedFilters.bathrooms
//                                 ? `${selectedFilters.bedrooms || 0} Bed, ${selectedFilters.bathrooms || 0} Bath`
//                                 : 'Select rooms'
//                         },
//                         {
//                             key: 'propertyType',
//                             title: 'Property Type',
//                             subtitle: selectedFilters.propertyType?.length
//                                 ? `${selectedFilters.propertyType.length} selected`
//                                 : 'Select property types'
//                         },
//                         {
//                             key: 'amenities',
//                             title: 'Amenities',
//                             subtitle: selectedFilters.amenities?.length
//                                 ? `${selectedFilters.amenities.length} selected`
//                                 : 'Select amenities'
//                         }
//                     ].map(section => (
//                         <Button
//                             key={section.key}
//                             onClick={() => setActiveSection(section.key)}
//                             className="w-full text-left"
//                             style={{ height: 'auto', padding: '12px' }}
//                         >
//                             <div>
//                                 <div className="font-medium">{section.title}</div>
//                                 <div className="text-sm text-gray-500">{section.subtitle}</div>
//                             </div>
//                         </Button>
//                     ))}
//                 </Space>
//             )
//         },
//         prices: {
//             title: 'Price Range',
//             content: () => (
//                 <div>
//                     <Slider
//                         range
//                         min={filters?.price.min}
//                         max={filters?.price.max}
//                         value={[selectedFilters.price?.min || filters?.price.min, selectedFilters.price?.max || filters?.price.max]}
//                         onChange={(values) => setSelectedFilters(prev => ({ ...prev, price: { min: values[0], max: values[1] } }))}
//                     />
//                     <div className="flex justify-between mt-4">
//                         <InputNumber
//                             value={selectedFilters.price?.min}
//                             onChange={(value) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 price: { ...prev.price, min: value }
//                             }))}
//                             min={filters?.price.min}
//                             max={filters?.price.max}
//                         />
//                         <InputNumber
//                             value={selectedFilters.price?.max}
//                             onChange={(value) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 price: { ...prev.price, max: value }
//                             }))}
//                             min={filters?.price.min}
//                             max={filters?.price.max}
//                         />
//                     </div>
//                 </div>
//             )
//         },
//         rooms: {
//             title: 'Rooms',
//             content: () => (
//                 <Space direction="vertical" className="w-full">
//                     {['bedrooms', 'bathrooms'].map(type => (
//                         <div key={type}>
//                             <div className="mb-2">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
//                             <Space>
//                                 {[1, 2, 3, 4, 5].map(num => (
//                                     <Button
//                                         key={num}
//                                         type={selectedFilters[type] === num ? 'primary' : 'default'}
//                                         onClick={() => setSelectedFilters(prev => ({ ...prev, [type]: num }))}
//                                     >
//                                         {num}
//                                     </Button>
//                                 ))}
//                             </Space>
//                         </div>
//                     ))}
//                 </Space>
//             )
//         },
//         propertyType: {
//             title: 'Property Type',
//             content: () => (
//                 <Checkbox.Group
//                     options={filters?.propertyType.values.map(value => ({ label: value, value }))}
//                     value={selectedFilters.propertyType}
//                     onChange={(values) => setSelectedFilters(prev => ({ ...prev, propertyType: values }))}
//                     className="flex flex-col gap-2"
//                 />
//             )
//         },
//         amenities: {
//             title: 'Amenities',
//             content: () => (
//                 <Checkbox.Group
//                     options={filters?.amenities.values.map(value => ({ label: value, value }))}
//                     value={selectedFilters.amenities}
//                     onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
//                     className="flex flex-col gap-2"
//                 />
//             )
//         }
//     };

//     const currentSection = sections[activeSection || 'main'];

//     return (
//         <Modal
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             title={
//                 <div className="flex items-center gap-3">
//                     {activeSection !== 'main' && (
//                         <Button
//                             icon={<LeftOutlined />}
//                             type="text"
//                             onClick={() => setActiveSection('main')}
//                         />
//                     )}
//                     {currentSection.title}
//                 </div>
//             }
//             footer={[
//                 <Button key="clear" onClick={() => {
//                     setSelectedFilters({});
//                     setActiveSection('main');
//                 }}>
//                     Clear All
//                 </Button>,
//                 <Button key="apply" type="primary" onClick={() => setModalOpen(false)}>
//                     Apply Filters
//                 </Button>
//             ]}
//             width={600}
//         >
//             {!filters ? (
//                 <div className="flex justify-center items-center h-40">
//                     <Spin size="large" />
//                 </div>
//             ) : currentSection.content()}
//         </Modal>
//     );
// };

// // Project Filter Component
// const ProjectFilter = ({ modalOpen, setModalOpen }) => {
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState({});

//     useEffect(() => {
//         if (modalOpen) {
//             fetch('http://localhost:5053/api/web/projects/filter-options')
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     return (
//         <Modal
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             title="Project Filters"
//             footer={[
//                 <Button key="clear" onClick={() => setSelectedFilters({})}>
//                     Clear All
//                 </Button>,
//                 <Button key="apply" type="primary" onClick={() => setModalOpen(false)}>
//                     Apply Filters
//                 </Button>
//             ]}
//             width={800}
//         >
//             {!filters ? (
//                 <div className="flex justify-center items-center h-40">
//                     <Spin size="large" />
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="mb-2">Project Type</div>
//                             <Checkbox.Group
//                                 options={filters.projectType.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.projectType}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectType: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                         <div>
//                             <div className="mb-2">Project Status</div>
//                             <Checkbox.Group
//                                 options={filters.projectStatus.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.projectStatus}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectStatus: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                     </div>

//                     <Divider />

//                     <div>
//                         <div className="mb-2">Price Range</div>
//                         <Slider
//                             range
//                             min={filters.priceRange.min}
//                             max={filters.priceRange.max}
//                             value={[selectedFilters.priceRange?.min || filters.priceRange.min, selectedFilters.priceRange?.max || filters.priceRange.max]}
//                             onChange={(values) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 priceRange: { min: values[0], max: values[1] }
//                             }))}
//                         />
//                         <div className="flex justify-between mt-4">
//                             <InputNumber
//                                 value={selectedFilters.priceRange?.min}
//                                 onChange={(value) => setSelectedFilters(prev => ({
//                                     ...prev,
//                                     priceRange: { ...prev.priceRange, min: value }
//                                 }))}
//                                 min={filters.priceRange.min}
//                                 max={filters.priceRange.max}
//                             />
//                             <InputNumber
//                                 value={selectedFilters.priceRange?.max}
//                                 onChange={(value) => setSelectedFilters(prev => ({
//                                     ...prev,
//                                     priceRange: { ...prev.priceRange, max: value }
//                                 }))}
//                                 min={filters.priceRange.min}
//                                 max={filters.priceRange.max}
//                             />
//                         </div>
//                     </div>

//                     <Divider />

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="mb-2">Project Amenities</div>
//                             <Checkbox.Group
//                                 options={filters.amenities.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.amenities}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                         <div>
//                             <div className="mb-2">State</div>
//                             <Checkbox.Group
//                                 options={filters.state.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.state}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, state: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Modal>
//     );
// };

// export { PropertyFilter, ProjectFilter };


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Modal, Button, Spin, Slider, InputNumber, Checkbox, Space, Divider } from 'antd';
// import { LeftOutlined } from '@ant-design/icons';
// import queryString from 'query-string';
// import { applyFilter, clearFilters } from '../redux/features/Map/mapSlice';

// // Utility function to build query string
// const buildQueryString = (filters) => {
//     const queryObj = {};

//     // Process price range
//     if (filters.price?.min) queryObj.priceMin = filters.price.min;
//     if (filters.price?.max) queryObj.priceMax = filters.price.max;

//     // Process rooms
//     if (filters.bedrooms) queryObj.bedrooms = filters.bedrooms;
//     if (filters.bathrooms) queryObj.bathrooms = filters.bathrooms;

//     // Process property types
//     if (filters.propertyType?.length) {
//         queryObj.type_name = filters.propertyType;
//     }

//     // Process amenities
//     if (filters.amenities?.length) {
//         queryObj.propertyAmenities = filters.amenities;
//     }

//     // Process project specific filters
//     if (filters.projectType?.length) {
//         queryObj.projectType = filters.projectType;
//     }

//     if (filters.projectStatus?.length) {
//         queryObj.projectStatus = filters.projectStatus;
//     }

//     if (filters.state?.length) {
//         queryObj.state = filters.state;
//     }

//     return queryString.stringify(queryObj, { arrayFormat: 'bracket' });
// };

// // Property Filter Component
// const PropertyFilter = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(appliedFilters || {});

//     useEffect(() => {
//         if (modalOpen) {
//             fetch('http://localhost:5053/api/web/filter/structure')
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     const handleApplyFilters = () => {
//         const queryStr = buildQueryString(selectedFilters);
//         dispatch(applyFilter(queryStr));
//         setModalOpen(false);
//     };

//     const handleClearFilters = () => {
//         setSelectedFilters({});
//         dispatch(clearFilters());
//         setActiveSection('main');
//     };

//     // Rest of the sections object remains the same as in your original code
//     const sections = {
//         main: {
//             title: 'Property Filters',
//             content: () => (
//                 <Space direction="vertical" className="w-full">
//                     {[
//                         {
//                             key: 'prices',
//                             title: 'Price Range',
//                             subtitle: selectedFilters.price
//                                 ? `₹${selectedFilters.price.min} - ₹${selectedFilters.price.max}`
//                                 : 'Select price range'
//                         },
//                         {
//                             key: 'rooms',
//                             title: 'Rooms',
//                             subtitle: selectedFilters.bedrooms || selectedFilters.bathrooms
//                                 ? `${selectedFilters.bedrooms || 0} Bed, ${selectedFilters.bathrooms || 0} Bath`
//                                 : 'Select rooms'
//                         },
//                         {
//                             key: 'propertyType',
//                             title: 'Property Type',
//                             subtitle: selectedFilters.propertyType?.length
//                                 ? `${selectedFilters.propertyType.length} selected`
//                                 : 'Select property types'
//                         },
//                         {
//                             key: 'amenities',
//                             title: 'Amenities',
//                             subtitle: selectedFilters.amenities?.length
//                                 ? `${selectedFilters.amenities.length} selected`
//                                 : 'Select amenities'
//                         }
//                     ].map(section => (
//                         <Button
//                             key={section.key}
//                             onClick={() => setActiveSection(section.key)}
//                             className="w-full text-left"
//                             style={{ height: 'auto', padding: '12px' }}
//                         >
//                             <div>
//                                 <div className="font-medium">{section.title}</div>
//                                 <div className="text-sm text-gray-500">{section.subtitle}</div>
//                             </div>
//                         </Button>
//                     ))}
//                 </Space>
//             )
//         },
//                  prices: {
//                      title: 'Price Range',
//                      content: () => (
//                          <div>
//                              <Slider
//                                  range
//                                  min={filters?.price.min}
//                                  max={filters?.price.max}
//                                  value={[selectedFilters.price?.min || filters?.price.min, selectedFilters.price?.max || filters?.price.max]}
//                                  onChange={(values) => setSelectedFilters(prev => ({ ...prev, price: { min: values[0], max: values[1] } }))}
//                              />
//                              <div className="flex justify-between mt-4">
//                                  <InputNumber
//                                      value={selectedFilters.price?.min}
//                                      onChange={(value) => setSelectedFilters(prev => ({
//                                          ...prev,
//                                          price: { ...prev.price, min: value }
//                                      }))}
//                                      min={filters?.price.min}
//                                      max={filters?.price.max}
//                                  />
//                                  <InputNumber
//                                      value={selectedFilters.price?.max}
//                                      onChange={(value) => setSelectedFilters(prev => ({
//                                          ...prev,
//                                          price: { ...prev.price, max: value }
//                                      }))}
//                                      min={filters?.price.min}
//                                      max={filters?.price.max}
//                                  />
//                              </div>
//                          </div>
//                      )
//                  },
//                  rooms: {
//                      title: 'Rooms',
//                      content: () => (
//                          <Space direction="vertical" className="w-full">
//                              {['bedrooms', 'bathrooms'].map(type => (
//                                  <div key={type}>
//                                      <div className="mb-2">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
//                                      <Space>
//                                          {[1, 2, 3, 4, 5].map(num => (
//                                              <Button
//                                                  key={num}
//                                                  type={selectedFilters[type] === num ? 'primary' : 'default'}
//                                                  onClick={() => setSelectedFilters(prev => ({ ...prev, [type]: num }))}
//                                              >
//                                                  {num}
//                                              </Button>
//                                          ))}
//                                      </Space>
//                                  </div>
//                              ))}
//                          </Space>
//                      )
//                  },
//                  propertyType: {
//                      title: 'Property Type',
//                      content: () => (
//                          <Checkbox.Group
//                              options={filters?.propertyType.values.map(value => ({ label: value, value }))}
//                              value={selectedFilters.propertyType}
//                              onChange={(values) => setSelectedFilters(prev => ({ ...prev, propertyType: values }))}
//                              className="flex flex-col gap-2"
//                          />
//                      )
//                  },
//                  amenities: {
//                      title: 'Amenities',
//                      content: () => (
//                          <Checkbox.Group
//                              options={filters?.amenities.values.map(value => ({ label: value, value }))}
//                              value={selectedFilters.amenities}
//                              onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
//                              className="flex flex-col gap-2"
//                          />
//                      )
//                  }
//     };

//     const currentSection = sections[activeSection || 'main'];

//     return (
//         <Modal
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             title={
//                 <div className="flex items-center gap-3">
//                     {activeSection !== 'main' && (
//                         <Button
//                             icon={<LeftOutlined />}
//                             type="text"
//                             onClick={() => setActiveSection('main')}
//                         />
//                     )}
//                     {currentSection.title}
//                 </div>
//             }
//             footer={[
//                 <Button key="clear" onClick={handleClearFilters}>
//                     Clear All
//                 </Button>,
//                 <Button key="apply" type="primary" onClick={handleApplyFilters}>
//                     Apply Filters
//                 </Button>
//             ]}
//             width={600}
//         >
//             {!filters ? (
//                 <div className="flex justify-center items-center h-40">
//                     <Spin size="large" />
//                 </div>
//             ) : currentSection.content()}
//         </Modal>
//     );
// };

// // Project Filter Component
// const ProjectFilter = ({ modalOpen, setModalOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(appliedFilters || {});

//     useEffect(() => {
//         if (modalOpen) {
//             fetch('http://localhost:5053/api/web/projects/filter-options')
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     const handleApplyFilters = () => {
//         const queryStr = buildQueryString(selectedFilters);
//         dispatch(applyFilter(queryStr));
//         setModalOpen(false);
//     };

//     const handleClearFilters = () => {
//         setSelectedFilters({});
//         dispatch(clearFilters());
//     };

//     return (
//         <Modal
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             title="Project Filters"
//             footer={[
//                 <Button key="clear" onClick={handleClearFilters}>
//                     Clear All
//                 </Button>,
//                 <Button key="apply" type="primary" onClick={handleApplyFilters}>
//                     Apply Filters
//                 </Button>
//             ]}
//             width={800}
//         >
//             {!filters ? (
//                 <div className="flex justify-center items-center h-40">
//                     <Spin size="large" />
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="mb-2">Project Type</div>
//                             <Checkbox.Group
//                                 options={filters.projectType.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.projectType}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectType: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                         <div>
//                             <div className="mb-2">Project Status</div>
//                             <Checkbox.Group
//                                 options={filters.projectStatus.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.projectStatus}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectStatus: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                     </div>

//                     <Divider />

//                     <div>
//                         <div className="mb-2">Price Range</div>
//                         <Slider
//                             range
//                             min={filters.priceRange.min}
//                             max={filters.priceRange.max}
//                             value={[selectedFilters.priceRange?.min || filters.priceRange.min, selectedFilters.priceRange?.max || filters.priceRange.max]}
//                             onChange={(values) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 priceRange: { min: values[0], max: values[1] }
//                             }))}
//                         />
//                         <div className="flex justify-between mt-4">
//                             <InputNumber
//                                 value={selectedFilters.priceRange?.min}
//                                 onChange={(value) => setSelectedFilters(prev => ({
//                                     ...prev,
//                                     priceRange: { ...prev.priceRange, min: value }
//                                 }))}
//                                 min={filters.priceRange.min}
//                                 max={filters.priceRange.max}
//                             />
//                             <InputNumber
//                                 value={selectedFilters.priceRange?.max}
//                                 onChange={(value) => setSelectedFilters(prev => ({
//                                     ...prev,
//                                     priceRange: { ...prev.priceRange, max: value }
//                                 }))}
//                                 min={filters.priceRange.min}
//                                 max={filters.priceRange.max}
//                             />
//                         </div>
//                     </div>

//                     <Divider />

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="mb-2">Project Amenities</div>
//                             <Checkbox.Group
//                                 options={filters.amenities.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.amenities}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                         <div>
//                             <div className="mb-2">State</div>
//                             <Checkbox.Group
//                                 options={filters.state.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.state}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, state: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Modal>
//     );
// };

// export { PropertyFilter, ProjectFilter };

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Modal, Button, Spin, Slider, InputNumber, Checkbox, Radio, Space, Divider } from 'antd';
// import { LeftOutlined } from '@ant-design/icons';
// import { applyFilter } from '../redux/features/Map/mapSlice';
// import { base_url } from '../utils/base_url';


// // Utility function to merge filters
// const mergeFilters = (existingFilters, newFilters) => {
//     return {
//         ...existingFilters,
//         ...newFilters,
//     };
// };

// // Property Filter Component
// const PropertyFilter = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         // Initialize with existing property-related filters
//         const propertyFilters = {};
//         if (appliedFilters) {
//             ['price', 'bedrooms', 'bathrooms', 'propertyType', 'propertyAmenities', 'purpose'].forEach(key => {
//                 if (appliedFilters[key]) propertyFilters[key] = appliedFilters[key];
//             });
//         }
//         return propertyFilters;
//     });

//     useEffect(() => {
//         if (modalOpen) {
//             fetch(`${base_url}/api/web/filter/structure`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     const handleApplyFilters = () => {
//         // Merge with existing project filters if any
//         const combinedFilters = mergeFilters(
//             appliedFilters,
//             {
//                 ...selectedFilters,
//                 filterType: 'property' // Add identifier for property filters
//             }
//         );
//         dispatch(applyFilter(combinedFilters));
//         setModalOpen(false);
//     };

//     const handleClearPropertyFilters = () => {
//         // Only clear property-related filters
//         const remainingFilters = {};
//         Object.keys(appliedFilters).forEach(key => {
//             if (!['price', 'bedrooms', 'bathrooms', 'propertyType', 'propertyAmenities', 'purpose'].includes(key)) {
//                 remainingFilters[key] = appliedFilters[key];
//             }
//         });
//         dispatch(applyFilter(remainingFilters));
//         setSelectedFilters({});
//         setActiveSection('main');
//     };

//     const sections = {
//         main: {
//             title: 'Property Filters',
//             content: () => (
//                 <Space direction="vertical" className="w-full">
//                     {[
//                         {
//                             key: 'purpose',
//                             title: 'Purpose',
//                             subtitle: selectedFilters.purpose
//                                 ? selectedFilters.purpose
//                                 : 'Select purpose'
//                         },
//                         {
//                             key: 'prices',
//                             title: 'Price Range',
//                             subtitle: selectedFilters.price
//                                 ? `₹${selectedFilters.price.min} - ₹${selectedFilters.price.max}`
//                                 : 'Select price range'
//                         },
//                         {
//                             key: 'rooms',
//                             title: 'Rooms',
//                             subtitle: selectedFilters.bedrooms || selectedFilters.bathrooms
//                                 ? `${selectedFilters.bedrooms || 0} Bed, ${selectedFilters.bathrooms || 0} Bath`
//                                 : 'Select rooms'
//                         },
//                         {
//                             key: 'propertyType',
//                             title: 'Property Type',
//                             subtitle: selectedFilters.propertyType?.length
//                                 ? `${selectedFilters.propertyType.length} selected`
//                                 : 'Select property types'
//                         },
//                         {
//                             key: 'amenities',
//                             title: 'Amenities',
//                             subtitle: selectedFilters.amenities?.length
//                                 ? `${selectedFilters.amenities.length} selected`
//                                 : 'Select amenities'
//                         }
//                     ].map(section => (
//                         <Button
//                             key={section.key}
//                             onClick={() => setActiveSection(section.key)}
//                             className="w-full text-left"
//                             style={{ height: 'auto', padding: '12px' }}
//                         >
//                             <div>
//                                 <div className="font-medium">{section.title}</div>
//                                 <div className="text-sm text-gray-500">{section.subtitle}</div>
//                             </div>
//                         </Button>
//                     ))}
//                 </Space>
//             )
//         },
//         purpose: {
//             title: 'Purpose',
//             content: () => (
//                 <Space direction="vertical" className="w-full">
//                     <Radio.Group
//                         value={selectedFilters.purpose}
//                         onChange={(e) => setSelectedFilters(prev => ({ ...prev, purpose: e.target.value }))}
//                         className="flex flex-col gap-2"
//                     >
//                         {filters?.purpose.values.map(value => (
//                             <Radio key={value} value={value}>
//                                 {value}
//                             </Radio>
//                         ))}
//                     </Radio.Group>
//                 </Space>
//             )
//         },
//         prices: {
//             title: 'Price Range',
//             content: () => (
//                 <div>
//                     <Slider
//                         range
//                         min={filters?.price.min}
//                         max={filters?.price.max}
//                         value={[selectedFilters.price?.min || filters?.price.min, selectedFilters.price?.max || filters?.price.max]}
//                         onChange={(values) => setSelectedFilters(prev => ({ ...prev, price: { min: values[0], max: values[1] } }))}
//                     />
//                     <div className="flex justify-between mt-4">
//                         <InputNumber
//                             value={selectedFilters.price?.min}
//                             onChange={(value) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 price: { ...prev.price, min: value }
//                             }))}
//                             min={filters?.price.min}
//                             max={filters?.price.max}
//                         />
//                         <InputNumber
//                             value={selectedFilters.price?.max}
//                             onChange={(value) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 price: { ...prev.price, max: value }
//                             }))}
//                             min={filters?.price.min}
//                             max={filters?.price.max}
//                         />
//                     </div>
//                 </div>
//             )
//         },
//         rooms: {
//             title: 'Rooms',
//             content: () => (
//                 <Space direction="vertical" className="w-full">
//                     {['bedrooms', 'bathrooms'].map(type => (
//                         <div key={type}>
//                             <div className="mb-2">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
//                             <Space>
//                                 {[1, 2, 3, 4, 5].map(num => (
//                                     <Button
//                                         key={num}
//                                         type={selectedFilters[type] === num ? 'primary' : 'default'}
//                                         onClick={() => setSelectedFilters(prev => ({ ...prev, [type]: num }))}
//                                     >
//                                         {num}
//                                     </Button>
//                                 ))}
//                             </Space>
//                         </div>
//                     ))}
//                 </Space>
//             )
//         },
//         propertyType: {
//             title: 'Property Type',
//             content: () => (
//                 <Checkbox.Group
//                     options={filters?.propertyType.values.map(value => ({ label: value, value }))}
//                     value={selectedFilters.propertyType}
//                     onChange={(values) => setSelectedFilters(prev => ({ ...prev, propertyType: values }))}
//                     className="flex flex-col gap-2"
//                 />
//             )
//         },
//         amenities: {
//             title: 'Amenities',
//             content: () => (
//                 <Checkbox.Group
//                     options={filters?.amenities.values.map(value => ({ label: value, value }))}
//                     value={selectedFilters.amenities}
//                     onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
//                     className="flex flex-col gap-2"
//                 />
//             )
//         }
//     };

//     const currentSection = sections[activeSection || 'main'];

//     return (
//         <Modal
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             title={
//                 <div className="flex items-center gap-3">
//                     {activeSection !== 'main' && (
//                         <Button
//                             icon={<LeftOutlined />}
//                             type="text"
//                             onClick={() => setActiveSection('main')}
//                         />
//                     )}
//                     {currentSection.title}
//                 </div>
//             }
//             footer={[
//                 <Button key="clear" onClick={handleClearPropertyFilters}>
//                     Clear All
//                 </Button>,
//                 <Button key="apply" type="primary" onClick={handleApplyFilters}>
//                     Apply Filters
//                 </Button>
//             ]}
//             width={600}
//         >
//             {!filters ? (
//                 <div className="flex justify-center items-center h-40">
//                     <Spin size="large" />
//                 </div>
//             ) : currentSection.content()}
//         </Modal>
//     );

//     // ... rest of the PropertyFilter component remains same ...
// };

// // Project Filter Component
// const ProjectFilter = ({ modalOpen, setModalOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         // Initialize with existing project-related filters
//         const projectFilters = {};
//         if (appliedFilters) {
//             ['projectType', 'projectStatus', 'projectAmenities', 'state'].forEach(key => {
//                 if (appliedFilters[key]) projectFilters[key] = appliedFilters[key];
//             });
//         }
//         return projectFilters;
//     });

//     useEffect(() => {
//         if (modalOpen) {
//             fetch(`${base_url}/api/web/projects/filter-options`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     const handleApplyFilters = () => {
//         // Merge with existing property filters if any
//         const combinedFilters = mergeFilters(
//             appliedFilters,
//             {
//                 ...selectedFilters,
//                 filterType: 'project' // Add identifier for project filters
//             }
//         );
//         dispatch(applyFilter(combinedFilters));
//         setModalOpen(false);
//     };

//     const handleClearProjectFilters = () => {
//         // Only clear project-related filters
//         const remainingFilters = {};
//         Object.keys(appliedFilters).forEach(key => {
//             if (!['projectType', 'projectStatus', 'projectAmenities', 'state'].includes(key)) {
//                 remainingFilters[key] = appliedFilters[key];
//             }
//         });
//         dispatch(applyFilter(remainingFilters));
//         setSelectedFilters({});
//     };

//     return (
//         <Modal
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             title="Project Filters"
//             footer={[
//                 <Button key="clear" onClick={handleClearProjectFilters}>
//                     Clear All
//                 </Button>,
//                 <Button key="apply" type="primary" onClick={handleApplyFilters}>
//                     Apply Filters
//                 </Button>
//             ]}
//             width={800}
//         >
//             {!filters ? (
//                 <div className="flex justify-center items-center h-40">
//                     <Spin size="large" />
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="mb-2">Project Type</div>
//                             <Checkbox.Group
//                                 options={filters.projectType.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.projectType}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectType: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                         <div>
//                             <div className="mb-2">Project Status</div>
//                             <Checkbox.Group
//                                 options={filters.projectStatus.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.projectStatus}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectStatus: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                     </div>

//                     <Divider />

//                     <div>
//                         <div className="mb-2">Price Range</div>
//                         <Slider
//                             range
//                             min={filters.priceRange.min}
//                             max={filters.priceRange.max}
//                             value={[selectedFilters.priceRange?.min || filters.priceRange.min, selectedFilters.priceRange?.max || filters.priceRange.max]}
//                             onChange={(values) => setSelectedFilters(prev => ({
//                                 ...prev,
//                                 priceRange: { min: values[0], max: values[1] }
//                             }))}
//                         />
//                         <div className="flex justify-between mt-4">
//                             <InputNumber
//                                 value={selectedFilters.priceRange?.min}
//                                 onChange={(value) => setSelectedFilters(prev => ({
//                                     ...prev,
//                                     priceRange: { ...prev.priceRange, min: value }
//                                 }))}
//                                 min={filters.priceRange.min}
//                                 max={filters.priceRange.max}
//                             />
//                             <InputNumber
//                                 value={selectedFilters.priceRange?.max}
//                                 onChange={(value) => setSelectedFilters(prev => ({
//                                     ...prev,
//                                     priceRange: { ...prev.priceRange, max: value }
//                                 }))}
//                                 min={filters.priceRange.min}
//                                 max={filters.priceRange.max}
//                             />
//                         </div>
//                     </div>

//                     <Divider />

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <div className="mb-2">Project Amenities</div>
//                             <Checkbox.Group
//                                 options={filters.amenities.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.amenities}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                         <div>
//                             <div className="mb-2">State</div>
//                             <Checkbox.Group
//                                 options={filters.state.values.map(value => ({ label: value, value }))}
//                                 value={selectedFilters.state}
//                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, state: values }))}
//                                 className="flex flex-col gap-2"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Modal>
//     );
//     // ... rest of the ProjectFilter component remains same ...
// };


// const BuildingFilter = ({ modalOpen, setModalOpen }) => {
//     const dispatch = useDispatch();
//     const { appliedFilters } = useSelector((state) => state.map);
//     const [filters, setFilters] = useState(null);
//     const [selectedFilters, setSelectedFilters] = useState(() => {
//         const buildingFilters = {};
//         if (appliedFilters) {
//             ['buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
//                 'age', 'luda', 'amenities', 'totalFloors', 'numberOfFlatsAvailable'].forEach(key => {
//                     if (appliedFilters[key]) buildingFilters[key] = appliedFilters[key];
//                 });
//         }
//         return buildingFilters;
//     });

//     useEffect(() => {
//         if (modalOpen) {
//             fetch(`${base_url}/api/web/building/structure`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setFilters(data.data);
//                 });
//         }
//     }, [modalOpen]);

//     const handleApplyFilters = () => {
//         const combinedFilters = {
//             ...appliedFilters,
//             ...selectedFilters,
//             filterType: 'building'
//         };
//         dispatch(applyFilter(combinedFilters));
//         setModalOpen(false);
//     };

//     const handleClearBuildingFilters = () => {
//         const remainingFilters = {};
//         Object.keys(appliedFilters).forEach(key => {
//             if (!['buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
//                 'age', 'luda', 'amenities', 'totalFloors', 'numberOfFlatsAvailable'].includes(key)) {
//                 remainingFilters[key] = appliedFilters[key];
//             }
//         });
//         dispatch(applyFilter(remainingFilters));
//         setSelectedFilters({});
//     };

//     const renderIncrementFilter = (key, label, max) => (
//         <div className="space-y-2">
//             <div className="mb-2">{label}</div>
//             <InputNumber
//                 min={0}
//                 max={max}
//                 value={selectedFilters[key] || 0}
//                 onChange={(value) => setSelectedFilters(prev => ({ ...prev, [key]: value }))}
//                 className="w-full"
//             />
//         </div>
//     );

//     const renderMultiselectFilter = (key, label, values) => (
//         <div>
//             <div className="mb-2">{label}</div>
//             <Checkbox.Group
//                 options={values.map(value => ({ label: value, value }))}
//                 value={selectedFilters[key]}
//                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, [key]: values }))}
//                 className="flex flex-col gap-2"
//             />
//         </div>
//     );

//     return (
//         <Modal
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             title="Building Filters"
//             footer={[
//                 <Button key="clear" onClick={handleClearBuildingFilters}>
//                     Clear All
//                 </Button>,
//                 <Button key="apply" type="primary" onClick={handleApplyFilters}>
//                     Apply Filters
//                 </Button>
//             ]}
//             width={800}
//         >
//             {!filters ? (
//                 <div className="flex justify-center items-center h-40">
//                     <Spin size="large" />
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     {/* Increment Filters */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {renderIncrementFilter('totalFloors', filters.totalFloors.label, filters.totalFloors.max)}
//                         {renderIncrementFilter('numberOfFlatsAvailable', filters.numberOfFlatsAvailable.label, filters.numberOfFlatsAvailable.max)}
//                     </div>

//                     <Divider />

//                     {/* Building Type and Development Status */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {renderMultiselectFilter('buildingType', filters.buildingType.label, filters.buildingType.values)}
//                         {renderMultiselectFilter('developmentStatus', filters.developmentStatus.label, filters.developmentStatus.values)}
//                     </div>

//                     <Divider />

//                     {/* Other Filters */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-4">
//                             {renderMultiselectFilter('amenities', filters.amenities.label, filters.amenities.values)}
//                             {renderMultiselectFilter('frontRoad', filters.frontRoad.label, filters.frontRoad.values)}
//                         </div>
//                         <div className="space-y-4">
//                             {renderMultiselectFilter('parkingArea', filters.parkingArea.label, filters.parkingArea.values)}
//                             {renderMultiselectFilter('storey', filters.storey.label, filters.storey.values)}
//                             {renderMultiselectFilter('age', filters.age.label, filters.age.values)}
//                             {renderMultiselectFilter('luda', filters.luda.label, filters.luda.values)}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Modal>
//     );
// };
// export { PropertyFilter, ProjectFilter, BuildingFilter };


// import React, { useState } from 'react';

// // Common FilterSection component for reusability
// const FilterSection = ({ title, children, className = '' }) => (
//     <div className={`p-4 rounded-lg ${className}`}>
//         <h3 className="text-gray-700 font-semibold mb-4">{title}</h3>
//         {children}
//     </div>
// );

// // Common Checkbox component
// const CheckboxGroup = ({ options, name }) => (
//     <div className="space-y-3">
//         {options.map((option) => (
//             <label key={option} className="flex items-center gap-3 cursor-pointer group">
//                 <input
//                     type="checkbox"
//                     name={name}
//                     value={option}
//                     className="form-checkbox h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
//                 />
//                 <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
//                     {option}
//                 </span>
//             </label>
//         ))}
//     </div>
// );

// // Common RadioGroup component
// const RadioGroup = ({ options, name }) => (
//     <div className="space-y-3">
//         {options.map((option) => (
//             <label key={option} className="flex items-center gap-3 cursor-pointer group">
//                 <input
//                     type="radio"
//                     name={name}
//                     value={option}
//                     className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
//                 />
//                 <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
//                     {option}
//                 </span>
//             </label>
//         ))}
//     </div>
// );

// // Common RangeSlider component
// const RangeSlider = ({ min, max, value, label, onChange, formatValue }) => (
//     <div className="space-y-6">
//         <input
//             type="range"
//             min={min}
//             max={max}
//             value={value}
//             onChange={onChange}
//             className="w-full accent-red-500 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//         />
//         <div className="flex items-center justify-between text-sm">
//             <span className="text-red-500 font-medium">{formatValue(min)}</span>
//             <span className="text-gray-500">to</span>
//             <span className="text-red-500 font-medium">{formatValue(max)}</span>
//         </div>
//     </div>
// );

// export const PropertyFilter = () => {
//     const [priceRange, setPriceRange] = useState([1000000, 50000000]);
//     const [areaRange, setAreaRange] = useState([500, 10000]);

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 px-6">
//             <FilterSection title="Property Type">
//                 <CheckboxGroup
//                     options={['Apartment', 'House', 'Villa', 'Commercial', 'Land']}
//                     name="propertyType"
//                 />
//             </FilterSection>

//             <div>
//                 <FilterSection title="Transaction Type">
//                     <RadioGroup
//                         options={['Buy', 'Rent', 'Lease']}
//                         name="transactionType"
//                     />
//                 </FilterSection>

//                 <FilterSection title="Furnishing Status">
//                     <CheckboxGroup
//                         options={['Fully Furnished', 'Semi Furnished', 'Unfurnished']}
//                         name="furnishingStatus"
//                     />
//                 </FilterSection>
//             </div>

//             <FilterSection title="Bedrooms">
//                 <CheckboxGroup
//                     options={['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']}
//                     name="bedrooms"
//                 />
//             </FilterSection>

//             <FilterSection title="Price Range (INR)">
//                 <RangeSlider
//                     min={1000000}
//                     max={50000000}
//                     value={priceRange[0]}
//                     onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
//                     formatValue={(value) => value >= 10000000 ? `${value / 10000000} Crore` : `${value / 100000} Lakh`}
//                 />
//             </FilterSection>

//             <FilterSection title="Amenities">
//                 <CheckboxGroup
//                     options={['Parking', 'Gym', 'Swimming Pool', 'Garden', '24x7 Security']}
//                     name="amenities"
//                 />
//             </FilterSection>

//             <FilterSection title="Area (sq. ft.)" className="col-span-full">
//                 <RangeSlider
//                     min={500}
//                     max={10000}
//                     value={areaRange[0]}
//                     onChange={(e) => setAreaRange([e.target.value, areaRange[1]])}
//                     formatValue={(value) => value.toString()}
//                 />
//             </FilterSection>
//         </div>
//     );
// };

// export const ProjectFilter = () => {
//     const [priceRange, setPriceRange] = useState([1000000, 50000000]);

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 px-6">
//             <FilterSection title="Project Type">
//                 <CheckboxGroup
//                     options={['Residential', 'Commercial', 'Mixed Use', 'Township']}
//                     name="projectType"
//                 />
//             </FilterSection>

//             <FilterSection title="Project Status">
//                 <CheckboxGroup
//                     options={['Under Construction', 'Ready to Move', 'Upcoming']}
//                     name="projectStatus"
//                 />
//             </FilterSection>

//             <FilterSection title="Price Range (INR)">
//                 <RangeSlider
//                     min={1000000}
//                     max={50000000}
//                     value={priceRange[0]}
//                     onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
//                     formatValue={(value) => value >= 10000000 ? `${value / 10000000} Crore` : `${value / 100000} Lakh`}
//                 />
//             </FilterSection>

//             <FilterSection title="Project Amenities">
//                 <CheckboxGroup
//                     options={['Club House', 'Sports Facility', 'Park', 'Power Backup', 'Rain Water Harvesting']}
//                     name="projectAmenities"
//                 />
//             </FilterSection>

//             <FilterSection title="Location">
//                 <CheckboxGroup
//                     options={['Gujarat', 'Maharashtra', 'Karnataka', 'Tamil Nadu']}
//                     name="state"
//                 />
//             </FilterSection>
//         </div>
//     );
// };

// export const BuildingFilter = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 px-6">
//             <FilterSection title="Building Type">
//                 <CheckboxGroup
//                     options={['Residential', 'Commercial', 'Mixed Use']}
//                     name="buildingType"
//                 />
//             </FilterSection>

//             <FilterSection title="Development Status">
//                 <CheckboxGroup
//                     options={['New Construction', 'Ready to Move', 'Under Renovation']}
//                     name="developmentStatus"
//                 />
//             </FilterSection>

//             <FilterSection title="Specifications">
//                 <CheckboxGroup
//                     options={['Front Road', 'Parking Area', 'Multiple Storeys']}
//                     name="specifications"
//                 />
//             </FilterSection>

//             <FilterSection title="Age of Building">
//                 <RadioGroup
//                     options={['0-2 years', '2-5 years', '5-10 years', '10+ years']}
//                     name="buildingAge"
//                 />
//             </FilterSection>

//             <FilterSection title="Building Amenities">
//                 <CheckboxGroup
//                     options={['Elevator', 'Security', 'Fire Safety', 'Power Backup', 'Water Storage']}
//                     name="buildingAmenities"
//                 />
//             </FilterSection>
//         </div>
//     );
// };



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter } from '../redux/features/Map/mapSlice';
import { base_url } from '../utils/base_url';

// Common FilterSection component
const FilterSection = ({ title, children, className = '' }) => (
    <div className={`p-4 rounded-lg ${className}`}>
        <h3 className="text-gray-700 font-semibold mb-4">{title}</h3>
        {children}
    </div>
);

// Common CheckboxGroup component
const CheckboxGroup = ({ options = [], value = [], onChange, name }) => (
    <div className="space-y-3">
        {options.map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                    type="checkbox"
                    name={name}
                    value={option}
                    checked={value.includes(option)}
                    onChange={(e) => {
                        const newValue = e.target.checked
                            ? [...value, option]
                            : value.filter(v => v !== option);
                        onChange(newValue);
                    }}
                    className="form-checkbox h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
                />
                <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
                    {option}
                </span>
            </label>
        ))}
    </div>
);

// Common RadioGroup component
const RadioGroup = ({ options = [], value, onChange, name }) => (
    <div className="space-y-3">
        {options.map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                    type="radio"
                    name={name}
                    value={option}
                    checked={value === option}
                    onChange={(e) => onChange(e.target.value)}
                    className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
                />
                <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
                    {option}
                </span>
            </label>
        ))}
    </div>
);

// Common RangeSlider component
// const RangeSlider = ({ min, max, value, onChange, formatValue }) => (
//     <div className="space-y-6">
//         <input
//             type="range"
//             min={min}
//             max={max}
//             value={value}
//             onChange={onChange}
//             className="w-full accent-red-500 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//         />
//         <div className="flex items-center justify-between text-sm">
//             <span className="text-red-500 font-medium">{formatValue(min)}</span>
//             <span className="text-gray-500">to</span>
//             <span className="text-red-500 font-medium">{formatValue(max)}</span>
//         </div>
//     </div>
// );

// const RangeSlider = ({ min, max, value, onChange, formatValue }) => {
//     // Ensure we have both min and max values
//     const currentMin = value?.min ?? min;
//     const currentMax = value?.max ?? max;

//     return (
//         <div className="space-y-6">
//             <div className="relative pt-6">
//                 {/* Minimum value slider */}
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={currentMin}
//                     onChange={(e) => {
//                         const newMin = Math.min(parseInt(e.target.value), currentMax);
//                         onChange({ min: newMin, max: currentMax });
//                     }}
//                     className="absolute w-full accent-red-500 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                 />
//                 {/* Maximum value slider */}
//                 <input
//                     type="range"
//                     min={min}
//                     max={max}
//                     value={currentMax}
//                     onChange={(e) => {
//                         const newMax = Math.max(parseInt(e.target.value), currentMin);
//                         onChange({ min: currentMin, max: newMax });
//                     }}
//                     className="absolute w-full accent-red-500 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                 />
//             </div>

//             {/* Current values display */}
//             <div className="flex items-center justify-between text-sm">
//                 <span className="text-red-500 font-medium">{formatValue(currentMin)}</span>
//                 <span className="text-gray-500">to</span>
//                 <span className="text-red-500 font-medium">{formatValue(currentMax)}</span>
//             </div>
//         </div>
//     );
// };

const RangeSlider = ({ min, max, value, onChange, formatValue }) => {
    const currentMin = value?.min ?? min;
    const currentMax = value?.max ?? max;

    return (
        <div className="space-y-6 min-w-96">
            <div className="relative pt-6">
                <div className="relative">
                    {/* Track background */}
                    <div className="absolute w-full h-1 bg-gray-200 rounded-lg" />

                    {/* Minimum value slider */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={currentMin}
                        onChange={(e) => {
                            const newMin = Math.min(parseInt(e.target.value), currentMax);
                            onChange({ min: newMin, max: currentMax });
                        }}
                        className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
                        style={{
                            height: '20px',
                            WebkitAppearance: 'none',
                        }}
                    />

                    {/* Maximum value slider */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={currentMax}
                        onChange={(e) => {
                            const newMax = Math.max(parseInt(e.target.value), currentMin);
                            onChange({ min: currentMin, max: newMax });
                        }}
                        className="absolute w-full appearance-none pointer-events-none bg-transparent z-20"
                        style={{
                            height: '20px',
                            WebkitAppearance: 'none',
                        }}
                    />

                    {/* Custom styling for the thumbs */}
                    <style jsx>{`
                        input[type='range']::-webkit-slider-thumb {
                            height: 16px;
                            width: 16px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            -webkit-appearance: none;
                            pointer-events: auto;
                            margin-top: -15px;
                        }

                        input[type='range']::-moz-range-thumb {
                            height: 20px;
                            width: 20px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            border: none;
                            pointer-events: auto;
                        }

                        input[type='range']::-ms-thumb {
                            height: 20px;
                            width: 20px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            pointer-events: auto;
                        }

                        input[type='range']::-webkit-slider-runnable-track {
                            background: transparent;
                            height: 1px;
                        }

                        input[type='range']::-moz-range-track {
                            background: transparent;
                            height: 1px;
                        }

                        input[type='range']::-ms-track {
                            background: transparent;
                            height: 1px;
                        }
                    `}</style>
                </div>
            </div>

            {/* Value display */}
            <div className="flex items-center justify-between text-sm">
                <span className="text-red-500 font-medium">{formatValue(currentMin)}</span>
                <span className="text-gray-500">to</span>
                <span className="text-red-500 font-medium">{formatValue(currentMax)}</span>
            </div>
        </div>
    );
};

// Property Filter Component
export const PropertyFilter = ({ setAdvancedFilterOpen }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        const propertyFilters = {};
        if (appliedFilters) {
            ['price', 'bedrooms', 'bathrooms', 'propertyType', 'amenities', 'purpose'].forEach(key => {
                if (appliedFilters[key]) propertyFilters[key] = appliedFilters[key];
            });
        }
        return propertyFilters;
    });

    useEffect(() => {
        fetch(`${base_url}/api/web/filter/structure`)
            .then(res => res.json())
            .then(data => {
                setFilters(data.data);
            });
    }, []);

    const handleApplyFilters = () => {
        dispatch(applyFilter({
            ...appliedFilters,
            ...selectedFilters,
            filterType: 'property'
        }));
        setAdvancedFilterOpen(false)

        // Scroll to the top after the modal is closed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!filters) {
        return <div className="flex justify-center items-center h-40">Loading...</div>;
    }

    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 px-6">
        //     <FilterSection title={filters.propertyType.label}>
        //         <CheckboxGroup
        //             options={filters.propertyType.values}
        //             value={selectedFilters.propertyType || []}
        //             onChange={(value) => setSelectedFilters(prev => ({ ...prev, propertyType: value }))}
        //             name="propertyType"
        //         />
        //     </FilterSection>

        //     <FilterSection title={filters.purpose.label}>
        //         <RadioGroup
        //             options={filters.purpose.values}
        //             value={selectedFilters.purpose}
        //             onChange={(value) => setSelectedFilters(prev => ({ ...prev, purpose: value }))}
        //             name="purpose"
        //         />
        //     </FilterSection>

        //     <FilterSection title={filters.bedrooms.label}>
        //         <div className="space-y-4">
        //             {[...Array(filters.bedrooms.max)].map((_, i) => (
        //                 <label key={i + 1} className="flex items-center gap-3 cursor-pointer group">
        //                     <input
        //                         type="radio"
        //                         name="bedrooms"
        //                         value={i + 1}
        //                         checked={selectedFilters.bedrooms === (i + 1)}
        //                         onChange={(e) => setSelectedFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))}
        //                         className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
        //                     />
        //                     <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
        //                         {i + 1} BHK
        //                     </span>
        //                 </label>
        //             ))}
        //         </div>
        //     </FilterSection>

        //     {/* <FilterSection title={filters?.price?.label}>
        //         <RangeSlider
        //             min={filters?.price?.min}
        //             max={filters?.price?.max}
        //             value={selectedFilters?.price?.min || filters?.price?.min}
        //             onChange={(e) => setSelectedFilters(prev => ({
        //                 ...prev,
        //                 price: { min: parseInt(e.target.value), max: prev.price?.max || filters?.price?.max }
        //             }))}
        //             formatValue={(value) => value >= 10000000 ? `${value / 10000000} Cr` : `${value / 100000} L`}
        //         />
        //     </FilterSection> */}

        //     <FilterSection title={filters?.price?.label}>
        //         <RangeSlider
        //             min={filters?.price?.min}
        //             max={filters?.price?.max}
        //             value={selectedFilters?.price || {
        //                 min: filters?.price?.min,
        //                 max: filters?.price?.max
        //             }}
        //             onChange={(value) => {
        //                 setSelectedFilters(prev => ({
        //                     ...prev,
        //                     price: value
        //                 }));
        //             }}
        //             formatValue={(value) => value >= 10000000
        //                 ? `${(value / 10000000).toFixed(1)} Cr`
        //                 : `${(value / 100000).toFixed(1)} L`
        //             }
        //         />
        //     </FilterSection>

        //     <FilterSection title={filters?.amenities?.label}>
        //         <CheckboxGroup
        //             options={filters?.amenities?.values}
        //             value={selectedFilters?.amenities || []}
        //             onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
        //             name="amenities"
        //         />
        //     </FilterSection>

        //     <div className="col-span-full flex justify-end gap-4 mt-4">

        //         <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
        //             <button onClick={() => setSelectedFilters({})} className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
        //                 Reset Filters
        //             </button>
        //             <button onClick={handleApplyFilters} className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
        //                 Apply Filters
        //             </button>
        //         </div>
        //     </div>
        // </div>

        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-4 gap-4">
                {/* Left section - takes up 3 columns */}
                <div className="col-span-3 grid grid-rows-2 gap-4">
                    {/* Top box */}
                    <div className="w-full  flex gap-12">
                        {/* Content for top box */}
                        <FilterSection title={filters?.propertyType?.label}>
                            <CheckboxGroup
                                options={filters?.propertyType?.values}
                                value={selectedFilters.propertyType || []}
                                onChange={(value) => setSelectedFilters(prev => ({ ...prev, propertyType: value }))}
                                name="propertyType"
                            />
                        </FilterSection>

                        <FilterSection title={filters?.purpose?.label}>
                            <RadioGroup
                                options={filters?.purpose?.values}
                                value={selectedFilters?.purpose}
                                onChange={(value) => setSelectedFilters(prev => ({ ...prev, purpose: value }))}
                                name="purpose"
                            />
                        </FilterSection>

                        <FilterSection title={filters?.bedrooms?.label}>
                            <div className="space-y-4">
                                {[...Array(filters?.bedrooms?.max)].map((_, i) => (
                                    <label key={i + 1} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="bedrooms"
                                            value={i + 1}
                                            checked={selectedFilters?.bedrooms === (i + 1)}
                                            onChange={(e) => setSelectedFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))}
                                            className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
                                        />
                                        <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
                                            {i + 1} BHK
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </FilterSection>

                        <FilterSection title={filters?.furnishing?.label}>
                            <CheckboxGroup
                                options={filters?.furnishing?.values}
                                value={selectedFilters?.furnishing || []}
                                onChange={(value) => setSelectedFilters(prev => ({ ...prev, furnishing: value }))}
                                name="furnishing"
                            />
                        </FilterSection>
                        
                    </div>

                    {/* Bottom box */}
                    <div className="w-full flex items-start justify-between">
                        {/* Content for bottom box */}
                        <FilterSection title={filters?.price?.label}>
                            <RangeSlider
                                min={filters?.price?.min}
                                max={filters?.price?.max}
                                value={selectedFilters?.price || {
                                    min: filters?.price?.min,
                                    max: filters?.price?.max
                                }}
                                onChange={(value) => {
                                    setSelectedFilters(prev => ({
                                        ...prev,
                                        price: value
                                    }));
                                }}
                                formatValue={(value) => value >= 10000000
                                    ? `${(value / 10000000).toFixed(1)} Cr`
                                    : `${(value / 100000).toFixed(1)} L`
                                }
                            />
                        </FilterSection>
                        <FilterSection title={filters?.area?.label}>
                            <RangeSlider
                                min={filters?.area?.min}
                                max={filters?.area?.max}
                                value={selectedFilters?.area || {
                                    min: filters?.area?.min,
                                    max: filters?.area?.max
                                }}
                                onChange={(value) => {
                                    setSelectedFilters(prev => ({
                                        ...prev,
                                        area: value
                                    }));
                                }}
                                formatValue={(value) => `${value} sq ft`}
                            />
                        </FilterSection>
                    </div>
                </div>

                {/* Right section - takes up 1 column, full height */}
                <div className="col-span-1 h-full">
                    <div className="">
                        {/* Content for right box */}
                        <FilterSection title={filters?.amenities?.label}>
                            <CheckboxGroup
                                options={filters?.amenities?.values}
                                value={selectedFilters?.amenities || []}
                                onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
                                name="amenities"
                            />
                        </FilterSection>
                        
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="col-span-full flex justify-end gap-4 mt-4">
                <button onClick={() => setSelectedFilters({})} className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
                    Reset Filters
                </button>
                <button onClick={handleApplyFilters} className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

// Project Filter Component
export const ProjectFilter = ({ setAdvancedFilterOpen }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        const projectFilters = {};
        if (appliedFilters) {
            ['projectType', 'projectStatus', 'projectAmenities', 'state'].forEach(key => {
                if (appliedFilters[key]) projectFilters[key] = appliedFilters[key];
            });
        }
        return projectFilters;
    });

    useEffect(() => {
        fetch(`${base_url}/api/web/projects/filter-options`)
            .then(res => res.json())
            .then(data => {
                setFilters(data.data);
            });
    }, []);

    const handleApplyFilters = () => {
        dispatch(applyFilter({
            ...appliedFilters,
            ...selectedFilters,
            filterType: 'project'
        }));
        setAdvancedFilterOpen(false)

        // Scroll to the top after the modal is closed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!filters) {
        return <div className="flex justify-center items-center h-40">Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 px-6">
            <FilterSection title={filters?.projectType?.label}>
                <CheckboxGroup
                    options={filters?.projectType?.values}
                    value={selectedFilters?.projectType || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectType: value }))}
                    name="projectType"
                />
            </FilterSection>

            <FilterSection title={filters?.projectStatus?.label}>
                <CheckboxGroup
                    options={filters?.projectStatus?.values}
                    value={selectedFilters?.projectStatus || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, projectStatus: value }))}
                    name="projectStatus"
                />
            </FilterSection>

            <FilterSection title={filters?.amenities?.label}>
                <CheckboxGroup
                    options={filters?.amenities?.values}
                    value={selectedFilters?.amenities || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
                    name="projectAmenities"
                />
            </FilterSection>

            <FilterSection title={filters?.state?.label}>
                <CheckboxGroup
                    options={filters?.state?.values}
                    value={selectedFilters?.state || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, state: value }))}
                    name="state"
                />
            </FilterSection>

            <div className="col-span-full flex justify-end gap-4 mt-4">

                <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
                    <button onClick={() => setSelectedFilters({})} className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
                        Reset Filters
                    </button>
                    <button onClick={handleApplyFilters} className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

// Building Filter Component
export const BuildingFilter = ({ setAdvancedFilterOpen }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        const buildingFilters = {};
        if (appliedFilters) {
            ['buildingType', 'developmentStatus', 'frontRoad', 'parkingArea', 'storey',
                'age', 'luda', 'amenities', 'totalFloors', 'numberOfFlatsAvailable'].forEach(key => {
                    if (appliedFilters[key]) buildingFilters[key] = appliedFilters[key];
                });
        }
        return buildingFilters;
    });

    useEffect(() => {
        fetch(`${base_url}/api/web/building/structure`)
            .then(res => res.json())
            .then(data => {
                setFilters(data.data);
            });
    }, []);

    const handleApplyFilters = () => {
        dispatch(applyFilter({
            ...appliedFilters,
            ...selectedFilters,
            filterType: 'building'
        }));
        setAdvancedFilterOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!filters) {
        return <div className="flex justify-center items-center h-40">Loading...</div>;
    }

    // Helper function for increment filters
    const renderIncrementFilter = (key, filterData) => (
        <FilterSection title={filterData?.label}>
            <div className="space-y-4">
                {[...Array(parseInt(filterData?.max))].map((_, i) => (
                    <label key={i + 1} className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="radio"
                            name={key}
                            value={i + 1}
                            checked={selectedFilters[key] === (i + 1)}
                            onChange={(e) => setSelectedFilters(prev => ({
                                ...prev,
                                [key]: parseInt(e.target.value)
                            }))}
                            className="form-radio h-4 w-4 border-gray-300 text-red-500 focus:ring-red-500/20 transition-all"
                        />
                        <span className="text-red-500 group-hover:text-red-600 transition-colors text-sm">
                            {i + 1}
                        </span>
                    </label>
                ))}
            </div>
        </FilterSection>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 px-6">
            {/* Building Type */}
            <FilterSection title={filters?.buildingType?.label}>
                <CheckboxGroup
                    options={filters?.buildingType?.values}
                    value={selectedFilters?.buildingType || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, buildingType: value }))}
                    name="buildingType"
                />
            </FilterSection>

            {/* Development Status */}
            <FilterSection title={filters?.developmentStatus?.label}>
                <CheckboxGroup
                    options={filters?.developmentStatus?.values}
                    value={selectedFilters?.developmentStatus || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, developmentStatus: value }))}
                    name="developmentStatus"
                />
            </FilterSection>

            {/* Front Road */}
            <FilterSection title={filters?.frontRoad?.label}>
                <CheckboxGroup
                    options={filters?.frontRoad?.values}
                    value={selectedFilters?.frontRoad || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, frontRoad: value }))}
                    name="frontRoad"
                />
            </FilterSection>

            {/* Parking Area */}
            <FilterSection title={filters?.parkingArea?.label}>
                <CheckboxGroup
                    options={filters?.parkingArea?.values}
                    value={selectedFilters?.parkingArea || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, parkingArea: value }))}
                    name="parkingArea"
                />
            </FilterSection>

            {/* Storey */}
            <FilterSection title={filters?.storey?.label}>
                <CheckboxGroup
                    options={filters?.storey?.values}
                    value={selectedFilters?.storey || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, storey: value }))}
                    name="storey"
                />
            </FilterSection>

            {/* Age */}
            <FilterSection title={filters?.age?.label}>
                <CheckboxGroup
                    options={filters?.age?.values}
                    value={selectedFilters?.age || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, age: value }))}
                    name="age"
                />
            </FilterSection>

            {/* LUDA */}
            <FilterSection title={filters?.luda?.label}>
                <CheckboxGroup
                    options={filters?.luda?.values}
                    value={selectedFilters?.luda || []}
                    onChange={(value) => setSelectedFilters(prev => ({ ...prev, luda: value }))}
                    name="luda"
                />
            </FilterSection>

            {/* Total Floors */}
            {filters?.totalFloors && renderIncrementFilter('totalFloors', filters?.totalFloors)}

            {/* Number of Flats Available */}
            {filters?.numberOfFlatsAvailable && renderIncrementFilter('numberOfFlatsAvailable', filters?.numberOfFlatsAvailable)}

            {/* Amenities */}
            {filters?.amenities && filters?.amenities?.values?.length > 0 && (
                <FilterSection title={filters?.amenities?.label}>
                    <CheckboxGroup
                        options={filters?.amenities?.values}
                        value={selectedFilters?.amenities || []}
                        onChange={(value) => setSelectedFilters(prev => ({ ...prev, amenities: value }))}
                        name="amenities"
                    />
                </FilterSection>
            )}

            <div className="col-span-full flex justify-end gap-4 mt-4">
                <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
                    <button onClick={() => setSelectedFilters({})} className="px-4 py-2 border border-gray-600 rounded font-medium transition hover:bg-gray-100">
                        Reset Filters
                    </button>
                    <button onClick={handleApplyFilters} className="px-4 py-2 bg-red-600 text-white rounded font-medium transition hover:bg-red-700">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};