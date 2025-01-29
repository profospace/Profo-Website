import React from 'react';
import { Heart } from 'lucide-react';
import { base_url } from '../utils/base_url';
import { useNavigate } from 'react-router-dom';

const HomePageCard = ({ info, image, price, label, type, navigation }) => {
    const navigate = useNavigate()
    // console.log(info)
    return (

        <div className="relative overflow-hidden bg-white transition-shadow" onClick={() => navigate(navigation)}>
            <div className="relative h-48 w-full">
                <img
                    src={image}
                    alt={info?.name}
                    className="w-full h-full object-cover rounded-xl"
                />
                {type && (
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
                        {type}
                    </div>
                )}
                <button className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="mt-2">
                <div className="text-xl font-semibold">
                    {price}$
                </div>

                <h3 className="text-sm font-medium">{label}</h3>


            </div>

        </div>
    );
}

export default HomePageCard