import React from 'react';
import { Heart } from 'lucide-react';

const HomePageCard = ({ info }) => (
    <div className="relative overflow-hidden bg-white transition-shadow">
        <div className="relative h-48 w-full">
            <img
                src={info?.image}
                alt={info?.name}
                className="w-full h-full object-cover rounded-xl"
            />
            {info?.label && (
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
                    {info?.label}
                </div>
            )}
            <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-white">
                <Heart className="w-5 h-5 text-gray-600" />
            </button>
        </div>

        <div className="mt-2">
            <div className="text-xl font-semibold mb-1">
                from {info?.price.toLocaleString()} ₽
            </div>

            <h3 className="text-sm font-medium">{info?.name}</h3>

            <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                    <div className={`w-4 h-4 rounded-full ${info?.metroLineColor}`} />
                    {info?.metro}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-5 5-5-5" />
                    </svg>
                    {info?.walkTime} min.
                </div>
            </div>
        </div>
    </div>
);

export default HomePageCard