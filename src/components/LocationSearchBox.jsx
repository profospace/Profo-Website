import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

const LocationSearchBox = ({ onLocationSelect }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const autocompleteService = useRef(null);
    const sessionToken = useRef(null);

    useEffect(() => {
        if (window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
            sessionToken.current = new window.google.maps.places.AutocompleteSessionToken();
        }
    }, []);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!searchQuery.trim() || !autocompleteService.current) return;

            setIsLoading(true);
            try {
                const response = await new Promise((resolve, reject) => {
                    autocompleteService.current.getPlacePredictions({
                        input: searchQuery,
                        componentRestrictions: { country: 'in' },
                        sessionToken: sessionToken.current,
                    }, (predictions, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                            resolve(predictions);
                        } else {
                            reject(status);
                        }
                    });
                });
                setSuggestions(response);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
                setSuggestions([]);
            } finally {
                setIsLoading(false);
            }
        };

        const debounceTimer = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(debounceTimer);
    }, [searchQuery]);

    const handleSuggestionClick = async (placeId) => {
        const geocoder = new window.google.maps.Geocoder();
        try {
            const response = await new Promise((resolve, reject) => {
                geocoder.geocode(
                    { placeId, sessionToken: sessionToken.current },
                    (results, status) => {
                        if (status === 'OK' && results?.[0]) {
                            resolve(results[0]);
                        } else {
                            reject(status);
                        }
                    }
                );
            });

            const location = {
                lat: response.geometry.location.lat(),
                lng: response.geometry.location.lng(),
            };

            setSearchQuery(response.formatted_address);
            setSuggestions([]);
            onLocationSelect(location);

            // Reset session token after selection
            sessionToken.current = new window.google.maps.places.AutocompleteSessionToken();
        } catch (error) {
            console.error('Error getting location details:', error);
        }
    };

    return (
        <div className="relative">
            <div className="flex items-center bg-gray-100 rounded-lg">
                <input
                    type="text"
                    placeholder="Search location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 bg-transparent focus:outline-none"
                />
                {searchQuery && (
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            setSuggestions([]);
                        }}
                        className="p-2 hover:text-gray-700"
                    >
                        <X size={16} />
                    </button>
                )}
                <button className="p-2 hover:text-blue-600">
                    <Search size={20} />
                </button>
            </div>

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
                <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                    {suggestions.map((suggestion) => (
                        <button
                            key={suggestion.place_id}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
                            onClick={() => handleSuggestionClick(suggestion.place_id)}
                        >
                            <p className="text-sm">{suggestion.description}</p>
                            <p className="text-xs text-gray-500">
                                {suggestion.structured_formatting.secondary_text}
                            </p>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationSearchBox;