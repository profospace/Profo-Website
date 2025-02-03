import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Spin, Slider, InputNumber, Checkbox, Space, Divider } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { applyFilter, clearFilters } from '../redux/slices/mapSlice';

// Utility function to build query string
const buildQueryString = (filters) => {
    const queryObj = {};

    // Process price range
    if (filters.price?.min) queryObj.priceMin = filters.price.min;
    if (filters.price?.max) queryObj.priceMax = filters.price.max;

    // Process rooms
    if (filters.bedrooms) queryObj.bedrooms = filters.bedrooms;
    if (filters.bathrooms) queryObj.bathrooms = filters.bathrooms;

    // Process property types
    if (filters.propertyType?.length) {
        queryObj.type_name = filters.propertyType;
    }

    // Process amenities
    if (filters.amenities?.length) {
        queryObj.propertyAmenities = filters.amenities;
    }

    // Process project specific filters
    if (filters.projectType?.length) {
        queryObj.projectType = filters.projectType;
    }

    if (filters.projectStatus?.length) {
        queryObj.projectStatus = filters.projectStatus;
    }

    if (filters.state?.length) {
        queryObj.state = filters.state;
    }

    return queryString.stringify(queryObj, { arrayFormat: 'bracket' });
};

// Utility function to merge filters
const mergeFilters = (existingFilters, newFilters) => {
    return {
        ...existingFilters,
        ...newFilters,
    };
};

// Property Filter Component
const PropertyFilter = ({ modalOpen, setModalOpen, activeSection, setActiveSection }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        // Initialize with existing property-related filters
        const propertyFilters = {};
        if (appliedFilters) {
            ['price', 'bedrooms', 'bathrooms', 'propertyType', 'propertyAmenities'].forEach(key => {
                if (appliedFilters[key]) propertyFilters[key] = appliedFilters[key];
            });
        }
        return propertyFilters;
    });

    useEffect(() => {
        if (modalOpen) {
            fetch('http://localhost:5053/api/web/filter/structure')
                .then(res => res.json())
                .then(data => {
                    setFilters(data.data);
                });
        }
    }, [modalOpen]);

    const handleApplyFilters = () => {
        // Merge with existing project filters if any
        const combinedFilters = mergeFilters(
            appliedFilters,
            {
                ...selectedFilters,
                filterType: 'property' // Add identifier for property filters
            }
        );
        dispatch(applyFilter(combinedFilters));
        setModalOpen(false);
    };

    const handleClearPropertyFilters = () => {
        // Only clear property-related filters
        const remainingFilters = {};
        Object.keys(appliedFilters).forEach(key => {
            if (!['price', 'bedrooms', 'bathrooms', 'propertyType', 'propertyAmenities'].includes(key)) {
                remainingFilters[key] = appliedFilters[key];
            }
        });
        dispatch(applyFilter(remainingFilters));
        setSelectedFilters({});
        setActiveSection('main');
    };

     const sections = {
            main: {
                title: 'Property Filters',
                content: () => (
                    <Space direction="vertical" className="w-full">
                        {[
                            {
                                key: 'prices',
                                title: 'Price Range',
                                subtitle: selectedFilters.price
                                    ? `₹${selectedFilters.price.min} - ₹${selectedFilters.price.max}`
                                    : 'Select price range'
                            },
                            {
                                key: 'rooms',
                                title: 'Rooms',
                                subtitle: selectedFilters.bedrooms || selectedFilters.bathrooms
                                    ? `${selectedFilters.bedrooms || 0} Bed, ${selectedFilters.bathrooms || 0} Bath`
                                    : 'Select rooms'
                            },
                            {
                                key: 'propertyType',
                                title: 'Property Type',
                                subtitle: selectedFilters.propertyType?.length
                                    ? `${selectedFilters.propertyType.length} selected`
                                    : 'Select property types'
                            },
                            {
                                key: 'amenities',
                                title: 'Amenities',
                                subtitle: selectedFilters.amenities?.length
                                    ? `${selectedFilters.amenities.length} selected`
                                    : 'Select amenities'
                            }
                        ].map(section => (
                            <Button
                                key={section.key}
                                onClick={() => setActiveSection(section.key)}
                                className="w-full text-left"
                                style={{ height: 'auto', padding: '12px' }}
                            >
                                <div>
                                    <div className="font-medium">{section.title}</div>
                                    <div className="text-sm text-gray-500">{section.subtitle}</div>
                                </div>
                            </Button>
                        ))}
                    </Space>
                )
            },
                     prices: {
                         title: 'Price Range',
                         content: () => (
                             <div>
                                 <Slider
                                     range
                                     min={filters?.price.min}
                                     max={filters?.price.max}
                                     value={[selectedFilters.price?.min || filters?.price.min, selectedFilters.price?.max || filters?.price.max]}
                                     onChange={(values) => setSelectedFilters(prev => ({ ...prev, price: { min: values[0], max: values[1] } }))}
                                 />
                                 <div className="flex justify-between mt-4">
                                     <InputNumber
                                         value={selectedFilters.price?.min}
                                         onChange={(value) => setSelectedFilters(prev => ({
                                             ...prev,
                                             price: { ...prev.price, min: value }
                                         }))}
                                         min={filters?.price.min}
                                         max={filters?.price.max}
                                     />
                                     <InputNumber
                                         value={selectedFilters.price?.max}
                                         onChange={(value) => setSelectedFilters(prev => ({
                                             ...prev,
                                             price: { ...prev.price, max: value }
                                         }))}
                                         min={filters?.price.min}
                                         max={filters?.price.max}
                                     />
                                 </div>
                             </div>
                         )
                     },
                     rooms: {
                         title: 'Rooms',
                         content: () => (
                             <Space direction="vertical" className="w-full">
                                 {['bedrooms', 'bathrooms'].map(type => (
                                     <div key={type}>
                                         <div className="mb-2">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
                                         <Space>
                                             {[1, 2, 3, 4, 5].map(num => (
                                                 <Button
                                                     key={num}
                                                     type={selectedFilters[type] === num ? 'primary' : 'default'}
                                                     onClick={() => setSelectedFilters(prev => ({ ...prev, [type]: num }))}
                                                 >
                                                     {num}
                                                 </Button>
                                             ))}
                                         </Space>
                                     </div>
                                 ))}
                             </Space>
                         )
                     },
                     propertyType: {
                         title: 'Property Type',
                         content: () => (
                             <Checkbox.Group
                                 options={filters?.propertyType.values.map(value => ({ label: value, value }))}
                                 value={selectedFilters.propertyType}
                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, propertyType: values }))}
                                 className="flex flex-col gap-2"
                             />
                         )
                     },
                     amenities: {
                         title: 'Amenities',
                         content: () => (
                             <Checkbox.Group
                                 options={filters?.amenities.values.map(value => ({ label: value, value }))}
                                 value={selectedFilters.amenities}
                                 onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
                                 className="flex flex-col gap-2"
                             />
                         )
                     }
        };
    
        const currentSection = sections[activeSection || 'main'];
    
        return (
            <Modal
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                title={
                    <div className="flex items-center gap-3">
                        {activeSection !== 'main' && (
                            <Button
                                icon={<LeftOutlined />}
                                type="text"
                                onClick={() => setActiveSection('main')}
                            />
                        )}
                        {currentSection.title}
                    </div>
                }
                footer={[
                    <Button key="clear" onClick={handleClearFilters}>
                        Clear All
                    </Button>,
                    <Button key="apply" type="primary" onClick={handleApplyFilters}>
                        Apply Filters
                    </Button>
                ]}
                width={600}
            >
                {!filters ? (
                    <div className="flex justify-center items-center h-40">
                        <Spin size="large" />
                    </div>
                ) : currentSection.content()}
            </Modal>
        );

    // ... rest of the PropertyFilter component remains same ...
};

// Project Filter Component
const ProjectFilter = ({ modalOpen, setModalOpen }) => {
    const dispatch = useDispatch();
    const { appliedFilters } = useSelector((state) => state.map);
    const [filters, setFilters] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(() => {
        // Initialize with existing project-related filters
        const projectFilters = {};
        if (appliedFilters) {
            ['projectType', 'projectStatus', 'projectAmenities', 'state'].forEach(key => {
                if (appliedFilters[key]) projectFilters[key] = appliedFilters[key];
            });
        }
        return projectFilters;
    });

    useEffect(() => {
        if (modalOpen) {
            fetch('http://localhost:5053/api/web/projects/filter-options')
                .then(res => res.json())
                .then(data => {
                    setFilters(data.data);
                });
        }
    }, [modalOpen]);

    const handleApplyFilters = () => {
        // Merge with existing property filters if any
        const combinedFilters = mergeFilters(
            appliedFilters,
            {
                ...selectedFilters,
                filterType: 'project' // Add identifier for project filters
            }
        );
        dispatch(applyFilter(combinedFilters));
        setModalOpen(false);
    };

    const handleClearProjectFilters = () => {
        // Only clear project-related filters
        const remainingFilters = {};
        Object.keys(appliedFilters).forEach(key => {
            if (!['projectType', 'projectStatus', 'projectAmenities', 'state'].includes(key)) {
                remainingFilters[key] = appliedFilters[key];
            }
        });
        dispatch(applyFilter(remainingFilters));
        setSelectedFilters({});
    };

     return (
            <Modal
                open={modalOpen}
                onCancel={() => setModalOpen(false)}
                title="Project Filters"
                footer={[
                    <Button key="clear" onClick={handleClearFilters}>
                        Clear All
                    </Button>,
                    <Button key="apply" type="primary" onClick={handleApplyFilters}>
                        Apply Filters
                    </Button>
                ]}
                width={800}
            >
                {!filters ? (
                    <div className="flex justify-center items-center h-40">
                        <Spin size="large" />
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="mb-2">Project Type</div>
                                <Checkbox.Group
                                    options={filters.projectType.values.map(value => ({ label: value, value }))}
                                    value={selectedFilters.projectType}
                                    onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectType: values }))}
                                    className="flex flex-col gap-2"
                                />
                            </div>
                            <div>
                                <div className="mb-2">Project Status</div>
                                <Checkbox.Group
                                    options={filters.projectStatus.values.map(value => ({ label: value, value }))}
                                    value={selectedFilters.projectStatus}
                                    onChange={(values) => setSelectedFilters(prev => ({ ...prev, projectStatus: values }))}
                                    className="flex flex-col gap-2"
                                />
                            </div>
                        </div>
    
                        <Divider />
    
                        <div>
                            <div className="mb-2">Price Range</div>
                            <Slider
                                range
                                min={filters.priceRange.min}
                                max={filters.priceRange.max}
                                value={[selectedFilters.priceRange?.min || filters.priceRange.min, selectedFilters.priceRange?.max || filters.priceRange.max]}
                                onChange={(values) => setSelectedFilters(prev => ({
                                    ...prev,
                                    priceRange: { min: values[0], max: values[1] }
                                }))}
                            />
                            <div className="flex justify-between mt-4">
                                <InputNumber
                                    value={selectedFilters.priceRange?.min}
                                    onChange={(value) => setSelectedFilters(prev => ({
                                        ...prev,
                                        priceRange: { ...prev.priceRange, min: value }
                                    }))}
                                    min={filters.priceRange.min}
                                    max={filters.priceRange.max}
                                />
                                <InputNumber
                                    value={selectedFilters.priceRange?.max}
                                    onChange={(value) => setSelectedFilters(prev => ({
                                        ...prev,
                                        priceRange: { ...prev.priceRange, max: value }
                                    }))}
                                    min={filters.priceRange.min}
                                    max={filters.priceRange.max}
                                />
                            </div>
                        </div>
    
                        <Divider />
    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="mb-2">Project Amenities</div>
                                <Checkbox.Group
                                    options={filters.amenities.values.map(value => ({ label: value, value }))}
                                    value={selectedFilters.amenities}
                                    onChange={(values) => setSelectedFilters(prev => ({ ...prev, amenities: values }))}
                                    className="flex flex-col gap-2"
                                />
                            </div>
                            <div>
                                <div className="mb-2">State</div>
                                <Checkbox.Group
                                    options={filters.state.values.map(value => ({ label: value, value }))}
                                    value={selectedFilters.state}
                                    onChange={(values) => setSelectedFilters(prev => ({ ...prev, state: values }))}
                                    className="flex flex-col gap-2"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        );
    // ... rest of the ProjectFilter component remains same ...
};

export { PropertyFilter, ProjectFilter };