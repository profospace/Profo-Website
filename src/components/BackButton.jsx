import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";


/**
 * BackButton - A reusable component that exactly replicates browser back button functionality
 * Note: This component requires react-router-dom to be installed in your project
 * 
 * @param {Object} props
 * @param {string} [props.label] - Optional text to display next to the arrow
 * @param {string} [props.className] - Optional additional CSS classes
 * @param {Function} [props.beforeNavigate] - Optional callback to execute before navigation
 * @param {string} [props.fallbackPath] - Optional fallback path if no history exists
 * @param {number} [props.iconSize] - Size of the chevron icon (default: 20)
 * @param {string} [props.variant] - Visual style variant ('default', 'outlined', 'minimal')
 * @returns {JSX.Element}
 */
const BackButton = ({
    label = 'Back',
    className = '',
    beforeNavigate,
    fallbackPath = '/',
    iconSize = 20,
    variant = 'default',
}) => {
    // Use React Router's navigate function
    const navigate = useNavigate();

    // Handle button click
    const handleClick = () => {
        // Execute any additional beforeNavigate handler if provided
        if (beforeNavigate) {
            beforeNavigate();
        }

        // Use React Router's navigate(-1) to go back exactly like browser's back button
        // This properly respects the browser history stack
        navigate(-1);
    };

    // Determine which classes to apply based on the variant
    const getVariantClasses = () => {
        switch (variant) {
            case 'outlined':
                return 'border border-gray-300 hover:bg-gray-100 text-gray-700';
            case 'minimal':
                return 'text-gray-700';
            case 'default':
            default:
                return 'bg-gray-200 hover:bg-gray-300 text-gray-800';
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center px- py-2 rounded-md transition-colors duration-200 ${getVariantClasses()} ${className}`}
            aria-label="Go back"
        >
            <FaArrowLeft size={iconSize} className="mr-1" />
            {label && <span>{label}</span>}
        </button>
    );
};

export default BackButton;