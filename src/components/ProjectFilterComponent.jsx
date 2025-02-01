// import React, { useState, useEffect } from 'react';
// import { Slider, Checkbox, Select, InputNumber, Modal, Radio, Space, Collapse } from 'antd';
// import { FiSettings } from 'react-icons/fi';

// const { Panel } = Collapse;
// const { Option } = Select;

// function ProjectFilterComponent({ modalOpen, setModalOpen }) {
//     const [filterOptions, setFilterOptions] = useState(null);
//     const [filters, setFilters] = useState({
//         type: [],
//         status: [],
//         availabilityStatus: [],
//         priceRange: [0, 0],
//         totalUnits: [0, 0],
//         totalTowers: [0, 0],
//         totalFloors: [0, 0],
//         propertyTypes: [],
//         amenities: [],
//         city: [],
//         state: []
//     });

//     useEffect(() => {
//         fetchFilterOptions();
//     }, []);

//     const fetchFilterOptions = async () => {
//         try {
//             const response = await fetch('http://localhost:5053/api/web/projects/filter-options');
//             const data = await response.json();
//             if (data.success) {
//                 setFilterOptions(data.filterOptions);
//                 // Initialize filters with default ranges
//                 setFilters(prev => ({
//                     ...prev,
//                     priceRange: [data.filterOptions.priceRange.min, data.filterOptions.priceRange.max],
//                     totalUnits: [data.filterOptions.unitRange.min, data.filterOptions.unitRange.max],
//                     totalTowers: [data.filterOptions.towersRange.min, data.filterOptions.towersRange.max],
//                     totalFloors: [data.filterOptions.floorsRange.min, data.filterOptions.floorsRange.max],
//                 }));
//             }
//         } catch (error) {
//             console.error('Error fetching filter options:', error);
//         }
//     };

//     const handleApplyFilters = () => {
//         // onFiltersApply(filters);
//         console.log(filters)


//         setModalOpen(false);
//     };

//     const handleResetFilters = () => {
//         if (filterOptions) {
//             setFilters({
//                 type: [],
//                 status: [],
//                 availabilityStatus: [],
//                 priceRange: [filterOptions.priceRange.min, filterOptions.priceRange.max],
//                 totalUnits: [filterOptions.unitRange.min, filterOptions.unitRange.max],
//                 totalTowers: [filterOptions.towersRange.min, filterOptions.towersRange.max],
//                 totalFloors: [filterOptions.floorsRange.min, filterOptions.floorsRange.max],
//                 propertyTypes: [],
//                 amenities: [],
//                 city: [],
//                 state: []
//             });
//         }
//     };

//     if (!filterOptions) return null;

//     return (
//         <Modal
//             title={
//                 <div className="flex items-center gap-2">
//                     <FiSettings className="text-gray-600" size={20} />
//                     <span className="text-lg font-semibold">Filters</span>
//                 </div>
//             }
//             open={modalOpen}
//             onCancel={() => setModalOpen(false)}
//             width={800}
//             footer={[
//                 <button
//                     key="reset"
//                     onClick={handleResetFilters}
//                     className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//                 >
//                     Reset
//                 </button>,
//                 <button
//                     key="apply"
//                     onClick={handleApplyFilters}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                     Apply Filters
//                 </button>
//             ]}
//         >
//             <div className="max-h-[60vh] overflow-y-auto">
//                 <Collapse defaultActiveKey={['1', '2', '3', '4']} className="bg-white">
//                     <Panel header="Project Type & Status" key="1">
//                         <Space direction="vertical" className="w-full">
//                             <div>
//                                 <div className="mb-2 font-medium">Project Type</div>
//                                 <Select
//                                     mode="multiple"
//                                     style={{ width: '100%' }}
//                                     placeholder="Select project types"
//                                     value={filters.type}
//                                     onChange={value => setFilters(prev => ({ ...prev, type: value }))}
//                                 >
//                                     {filterOptions.projectTypes.map((type,index) => (
//                                         <Option key={index} value={type}>
//                                             {type.replace('_', ' ')}
//                                         </Option>
//                                     ))}
//                                 </Select>
//                             </div>
//                             <div>
//                                 <div className="mb-2 font-medium">Project Status</div>
//                                 <Select
//                                     mode="multiple"
//                                     style={{ width: '100%' }}
//                                     placeholder="Select project status"
//                                     value={filters.status}
//                                     onChange={value => setFilters(prev => ({ ...prev, status: value }))}
//                                 >
//                                     {filterOptions.projectStatus.map(status => (
//                                         <Option key={status} value={status}>
//                                             {status.replace('_', ' ')}
//                                         </Option>
//                                     ))}
//                                 </Select>
//                             </div>
//                         </Space>
//                     </Panel>

//                     <Panel header="Price & Units" key="2">
//                         <Space direction="vertical" className="w-full">
//                             <div>
//                                 <div className="mb-2 font-medium">Price Range (in ₹)</div>
//                                 <Slider
//                                     range
//                                     min={filterOptions.priceRange.min}
//                                     max={filterOptions.priceRange.max}
//                                     value={filters.priceRange}
//                                     onChange={value => setFilters(prev => ({ ...prev, priceRange: value }))}
//                                 />
//                             </div>
//                             <div>
//                                 <div className="mb-2 font-medium">Total Units</div>
//                                 <Slider
//                                     range
//                                     min={filterOptions.unitRange.min}
//                                     max={filterOptions.unitRange.max}
//                                     value={filters.totalUnits}
//                                     onChange={value => setFilters(prev => ({ ...prev, totalUnits: value }))}
//                                 />
//                             </div>
//                         </Space>
//                     </Panel>

//                     <Panel header="Amenities" key="3">
//                         <div className="grid grid-cols-2 gap-4">
//                             {filterOptions.amenityCategories.map(({ category, items }) => (
//                                 <div key={category}>
//                                     <div className="mb-2 font-medium">{category}</div>
//                                     <Checkbox.Group
//                                         options={items.map(item => ({ label: item, value: item }))}
//                                         value={filters.amenities.filter(a => items.includes(a))}
//                                         onChange={checkedValues => {
//                                             const otherAmenities = filters.amenities.filter(a => !items.includes(a));
//                                             setFilters(prev => ({
//                                                 ...prev,
//                                                 amenities: [...otherAmenities, ...checkedValues]
//                                             }));
//                                         }}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </Panel>

//                     <Panel header="Location" key="4">
//                         <Space direction="vertical" className="w-full">
//                             <div>
//                                 <div className="mb-2 font-medium">City</div>
//                                 <Select
//                                     mode="multiple"
//                                     style={{ width: '100%' }}
//                                     placeholder="Select cities"
//                                     value={filters.city}
//                                     onChange={value => setFilters(prev => ({ ...prev, city: value }))}
//                                 >
//                                     {filterOptions.cities.map(city => (
//                                         <Option key={city} value={city}>{city}</Option>
//                                     ))}
//                                 </Select>
//                             </div>
//                             <div>
//                                 <div className="mb-2 font-medium">State</div>
//                                 <Select
//                                     mode="multiple"
//                                     style={{ width: '100%' }}
//                                     placeholder="Select states"
//                                     value={filters.state}
//                                     onChange={value => setFilters(prev => ({ ...prev, state: value }))}
//                                 >
//                                     {filterOptions.states.map(state => (
//                                         <Option key={state} value={state}>{state}</Option>
//                                     ))}
//                                 </Select>
//                             </div>
//                         </Space>
//                     </Panel>
//                 </Collapse>
//             </div>
//         </Modal>
//     );
// }

// export default ProjectFilterComponent;


import React, { useState, useEffect } from 'react';
import { Slider, Checkbox, Select, Modal, Space, Collapse } from 'antd';
import { FiSettings } from 'react-icons/fi';
import { applyFilter } from '../redux/features/Map/mapSlice';
import { useDispatch } from 'react-redux';

const { Panel } = Collapse;
const { Option } = Select;

function ProjectFilterComponent({ modalOpen, setModalOpen }) {
    const dispatch = useDispatch()
    const [filterOptions, setFilterOptions] = useState(null);
    const [filters, setFilters] = useState({
        type: [],
        status: [],
        availabilityStatus: [],
        priceRange: [0, 0],
        totalUnits: [0, 0],
        totalTowers: [0, 0],
        totalFloors: [0, 0],
        propertyTypes: [],
        amenities: [],
        city: [],
        state: []
    });

    // Track initial values to compare against changes
    const [initialFilters, setInitialFilters] = useState(null);

    useEffect(() => {
        fetchFilterOptions();
    }, []);

    const fetchFilterOptions = async () => {
        try {
            const response = await fetch('http://localhost:5053/api/web/projects/filter-options');
            const data = await response.json();
            if (data.success) {
                setFilterOptions(data.filterOptions);
                const initialFilterState = {
                    type: [],
                    status: [],
                    availabilityStatus: [],
                    priceRange: [data.filterOptions.priceRange.min, data.filterOptions.priceRange.max],
                    totalUnits: [data.filterOptions.unitRange.min, data.filterOptions.unitRange.max],
                    totalTowers: [data.filterOptions.towersRange.min, data.filterOptions.towersRange.max],
                    totalFloors: [data.filterOptions.floorsRange.min, data.filterOptions.floorsRange.max],
                    propertyTypes: [],
                    amenities: [],
                    city: [],
                    state: []
                };
                setFilters(initialFilterState);
                setInitialFilters(initialFilterState);
            }
        } catch (error) {
            console.error('Error fetching filter options:', error);
        }
    };

    // Helper function to check if arrays are different
    const areArraysDifferent = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return true;
        return arr1.some((item, index) => item !== arr2[index]);
    };

    // Helper function to check if ranges are different
    const isRangeDifferent = (range1, range2) => {
        return range1[0] !== range2[0] || range1[1] !== range2[1];
    };

    const getChangedFilters = () => {
        if (!initialFilters) return {};

        const changedFilters = {};

        // Compare each filter value with initial state
        Object.entries(filters).forEach(([key, value]) => {
            const initialValue = initialFilters[key];

            // Handle array values (type, status, amenities, city, state)
            if (Array.isArray(value) && !key.includes('Range') && !key.includes('total')) {
                if (areArraysDifferent(value, initialValue)) {
                    changedFilters[key] = value;
                }
            }
            // Handle range values (priceRange, totalUnits, totalTowers, totalFloors)
            else if (Array.isArray(value)) {
                if (isRangeDifferent(value, initialValue)) {
                    changedFilters[key] = value;
                }
            }
        });

        return changedFilters;
    };

    const handleApplyFilters = () => {
        const changedFilters = getChangedFilters();
        console.log('Changed filters:', changedFilters);
        dispatch(applyFilter(changedFilters))
        setModalOpen(false);
    };

    const handleResetFilters = () => {
        if (filterOptions) {
            const resetState = {
                type: [],
                status: [],
                availabilityStatus: [],
                priceRange: [filterOptions.priceRange.min, filterOptions.priceRange.max],
                totalUnits: [filterOptions.unitRange.min, filterOptions.unitRange.max],
                totalTowers: [filterOptions.towersRange.min, filterOptions.towersRange.max],
                totalFloors: [filterOptions.floorsRange.min, filterOptions.floorsRange.max],
                propertyTypes: [],
                amenities: [],
                city: [],
                state: []
            };
            setFilters(resetState);
            setInitialFilters(resetState);
        }
    };

    if (!filterOptions) return null;

    return (
        <Modal
            title={
                <div className="flex items-center gap-2">
                    <FiSettings className="text-gray-600" size={20} />
                    <span className="text-lg font-semibold">Filters</span>
                </div>
            }
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            width={1000}
            footer={[
                <button
                    key="reset"
                    onClick={handleResetFilters}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                    Reset
                </button>,
                <button
                    key="apply"
                    onClick={handleApplyFilters}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Apply Filters
                </button>
            ]}
        >
            {/* Rest of the JSX remains the same */}
            <div className="max-h-[70vh] overflow-y-auto">
                <Collapse defaultActiveKey={['1', '2', '3', '4']} className="bg-white">
                    <Panel header="Project Type & Status" key="1">
                        <Space direction="vertical" className="w-full">
                            <div>
                                <div className="mb-2 font-medium">Project Type</div>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Select project types"
                                    value={filters.type}
                                    onChange={value => setFilters(prev => ({ ...prev, type: value }))}
                                >
                                    {filterOptions.projectTypes.map((type, index) => (
                                        <Option key={index} value={type}>
                                            {type.replace('_', ' ')}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <div className="mb-2 font-medium">Project Status</div>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Select project status"
                                    value={filters.status}
                                    onChange={value => setFilters(prev => ({ ...prev, status: value }))}
                                >
                                    {filterOptions.projectStatus.map(status => (
                                        <Option key={status} value={status}>
                                            {status.replace('_', ' ')}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </Space>
                    </Panel>

                    <Panel header="Price & Units" key="2">
                        <Space direction="vertical" className="w-full">
                            <div>
                                <div className="mb-2 font-medium">Price Range (in ₹)</div>
                                <Slider
                                    range
                                    min={filterOptions.priceRange.min}
                                    max={filterOptions.priceRange.max}
                                    value={filters.priceRange}
                                    onChange={value => setFilters(prev => ({ ...prev, priceRange: value }))}
                                />
                            </div>
                            <div>
                                <div className="mb-2 font-medium">Total Units</div>
                                <Slider
                                    range
                                    min={filterOptions.unitRange.min}
                                    max={filterOptions.unitRange.max}
                                    value={filters.totalUnits}
                                    onChange={value => setFilters(prev => ({ ...prev, totalUnits: value }))}
                                />
                            </div>
                        </Space>
                    </Panel>

                    <Panel header="Amenities" key="3">
                        <div className="grid grid-cols-2 gap-4">
                            {filterOptions.amenityCategories.map(({ category, items }) => (
                                <div key={category}>
                                    <div className="mb-2 font-medium">{category}</div>
                                    <Checkbox.Group
                                        options={items.map(item => ({ label: item, value: item }))}
                                        value={filters.amenities.filter(a => items.includes(a))}
                                        onChange={checkedValues => {
                                            const otherAmenities = filters.amenities.filter(a => !items.includes(a));
                                            setFilters(prev => ({
                                                ...prev,
                                                amenities: [...otherAmenities, ...checkedValues]
                                            }));
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </Panel>

                    <Panel header="Location" key="4">
                        <Space direction="vertical" className="w-full">
                            <div>
                                <div className="mb-2 font-medium">City</div>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Select cities"
                                    value={filters.city}
                                    onChange={value => setFilters(prev => ({ ...prev, city: value }))}
                                >
                                    {filterOptions.cities.map(city => (
                                        <Option key={city} value={city}>{city}</Option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <div className="mb-2 font-medium">State</div>
                                <Select
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Select states"
                                    value={filters.state}
                                    onChange={value => setFilters(prev => ({ ...prev, state: value }))}
                                >
                                    {filterOptions.states.map(state => (
                                        <Option key={state} value={state}>{state}</Option>
                                    ))}
                                </Select>
                            </div>
                        </Space>
                    </Panel>
                </Collapse>
            </div>
        </Modal>
    );
}

export default ProjectFilterComponent;