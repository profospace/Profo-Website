import React, { useState } from 'react';
import { MapPin, Clock, Heart } from 'lucide-react';

const RealEstateListing = ({ handleButtonClick }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm py-4 px-6">
            <div className="flex justify-between items-start mb-2">
                <span className="text-gray-500 text-sm">2 hours ago, 1,028 views</span>
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="text-gray-400 hover:text-red-500"
                >
                    <Heart
                        className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
                    />
                </button>
            </div>

            <h2 className="text-lg font-normal mb-2">85 m², 3-room apartment</h2>

            <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold">14 500 000 ₽</span>
                <span className="text-gray-400">170 588 ₽ per m²</span>
            </div>

            <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                    good price
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    mortgage
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    free sale
                </span>
            </div>

            <button onClick={handleButtonClick} className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg mb-6">
                Show phone +7 (xxx) xxx-xx-xx
            </button>

            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                <div>
                    <p className="font-medium">Mikhailova Ekaterina</p>
                    <p className="text-blue-500">Agency "Samolet Plus MSK Sever"</p>
                </div>
            </div>

            <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <div>
                    <p className="mb-1">Moscow, Marshal Fedorenko street, 14k2</p>
                    <div className="flex items-center gap-2">
                        <span className="text-red-500">M</span>
                        <span className="font-medium">Khovrino</span>
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">11 min.</span>
                    </div>
                    <p className="text-gray-400 mt-1">2 more stations</p>
                </div>
            </div>

            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Add a note"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 placeholder-gray-400"
                />
            </div>
        </div>
    );
};

export default RealEstateListing;