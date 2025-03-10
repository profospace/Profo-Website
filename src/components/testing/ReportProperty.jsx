import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import { base_url } from '../../utils/base_url';
import { getConfig } from '../../utils/config';
import toast from 'react-hot-toast'; // Make sure this is imported

const ReportProperty = ({ onClose, propertyId }) => {
    const [formData, setFormData] = useState({
        description: '',
        problem: ''
    });

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            problem: e.target.value
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate if a problem is selected
        if (!formData.problem) {
            setError('Please select a problem.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post(`${base_url}/api/report`, {
                propertyId,
                problem: formData.problem,
                description: formData.description
            }, getConfig());

            // The success flag is inside response.data, not directly in response
            if (!response.data.success) {
                setError(response.data.message || 'Failed to submit report');
                setIsSubmitting(false);
                return;
            }

            // Show success notification
            toast.success('Report submitted successfully');

            // Close the modal after submission
            onClose();
        } catch (error) {
            console.error('Error submitting report:', error);
            // Get the error message from the API response if available
            const errorMessage = error.response?.data?.message || 'Something went wrong. Please try again.';
            setError(errorMessage);
            toast.error(errorMessage);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Report this property</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="mb-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-3 flex items-center">
                            <X size={16} className="mr-2" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="mb-4">
                        <select
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                            value={formData.problem}
                            onChange={handleSelectChange}
                            name="problem"
                            disabled={isSubmitting}
                        >
                            <option value="">Select a problem</option>
                            <option value="incorrect_info">Incorrect information</option>
                            <option value="scam">Potential scam</option>
                            <option value="unavailable">Property not available</option>
                            <option value="duplicate">Duplicate listing</option>
                            <option value="other">Other issue</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <textarea
                            name="description"
                            placeholder="Write a short description of the problem"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[100px]"
                            disabled={isSubmitting}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-4 rounded-md transition-colors"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'SENDING...' : 'SEND REPORT'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReportProperty;