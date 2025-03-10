import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown icon if using lucide-react

const CustomSelect = ({ activeTab, sortBy, setSortBy }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        { value: "", label: "Relevance" },
        { value: "price-low-high", label: "Price: Low to High" },
        { value: "price-high-low", label: "Price: High to Low" },
        { value: "newest", label: "Newest First" },
        { value: "oldest", label: "Oldest First" },
        { value: "most-viewed", label: "Most Viewed" },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle option selection
    const handleSelect = (value) => {
        setSortBy(value);
        setIsOpen(false);
    };

    // Get current selected option label
    const getCurrentLabel = () => {
        const option = options.find(opt => opt.value === (sortBy || ''));
        return option ? option.label : 'Relevance';
    };

    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
                {activeTab === 'properties' && 'Properties'}
                {activeTab === 'projects' && 'Projects'}
                {activeTab === 'buildings' && 'Buildings'}
            </h2>
            <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                    Sort by:
                </label>
                <div className="relative" ref={dropdownRef}>
                    {/* Custom select trigger button */}
                    <button
                        id="sort"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="py-1 px-2 w-48 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white flex justify-between items-center"
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                    >
                        <span>{getCurrentLabel()}</span>
                        <ChevronDown
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            size={16}
                        />
                    </button>

                    {/* Dropdown menu with transition */}
                    <div
                        className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden transition-all duration-300 origin-top ${isOpen
                                ? 'opacity-100 scale-y-100 max-h-60'
                                : 'opacity-0 scale-y-0 max-h-0 pointer-events-none'
                            }`}
                    >
                        <ul className="py-1" role="listbox">
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleSelect(option.value)}
                                    className={`px-3 py-2 cursor-pointer hover:bg-blue-50 transition-colors ${option.value === (sortBy || '') ? 'bg-blue-50 text-blue-600 font-medium' : ''
                                        }`}
                                    role="option"
                                    aria-selected={option.value === (sortBy || '')}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;