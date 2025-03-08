import React, { useRef, useState } from 'react';
import { Search, X, Loader2 } from 'lucide-react';

const SearchInput = ({
    searchQuery = '',
    setSearchQuery,
    onSearch,
    placeholder = 'Search properties, projects...',
    className = '',
    variant = 'default', // 'default' or 'map'
    isLoading = false,
    autoFocus = false
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    // Clear search input
    const clearSearchInput = () => {
        setSearchQuery('');
        // If onClear callback provided, call it
        if (onSearch) {
            onSearch('');
        }
        inputRef.current?.focus();
    };

    // Handle key press (search on Enter)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch(searchQuery);
        }
    };

    // Get styles based on variant
    const getContainerStyles = () => {
        const baseStyles = "flex items-center";
        const focusStyles = isFocused
            ? "border-gray-400 ring-2 ring-gray-100"
            : "border-gray-200";

        if (variant === 'map') {
            return `${baseStyles} bg-white rounded-full shadow-lg`;
        }

        return `${baseStyles} bg-white border ${focusStyles} rounded-lg transition-all duration-200 ${className}`;
    };

    const getInputStyles = () => {
        const baseStyles = "flex-1 bg-transparent focus:outline-none text-sm";

        if (variant === 'map') {
            return `${baseStyles} px-4 py-2`;
        }

        return `${baseStyles} py-2.5 px-2`;
    };

    return (
        <div className={getContainerStyles()}>
            {variant === 'default' && (
                <Search className="h-5 w-5 text-gray-400 ml-3" />
            )}
            <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                className={getInputStyles()}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoFocus={autoFocus}
            />
            {isLoading ? (
                <Loader2 className="h-5 w-5 text-gray-400 mr-3 animate-spin" />
            ) : searchQuery ? (
                <button
                    type="button"
                    onClick={clearSearchInput}
                    className="h-5 w-5 text-gray-700 mr-3 hover:text-gray-900"
                >
                    <X className="h-5 w-5" />
                </button>
            ) : null}
            {variant === 'map' && searchQuery && !isLoading && (
                <button
                    onClick={() => onSearch && onSearch(searchQuery)}
                    className="p-2 hover:text-blue-600"
                >
                    <Search size={20} />
                </button>
            )}
        </div>
    );
};

export default SearchInput;