// import React, { useState, useEffect } from 'react';
// import { Heart, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
// import { getConfig } from '../utils/config';
// import { base_url } from '../utils/base_url';
// import { getWishlist } from '../redux/features/wishlist/wishlistSlice';
// import { useSelector } from 'react-redux';

// const Wishlist = () => {
//   const [error, setError] = useState(null);

//   const {wishlist} = useSelector(state => state.wishlist)

//   useEffect(() => {
//     getWishlist()
//   }, []);


//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0
//     }).format(price);
//   };


//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-red-500 text-center">
//           <h3 className="text-lg font-semibold">Error</h3>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

 

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
//             <p className="text-gray-600 mt-2">{wishlist.length} saved properties</p>
//           </div>
//         </div>

//         <div className="flex flex-col space-y-6">
//           {wishlist.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row"
//             >
//               {/* Image Section */}
//               <div className="relative w-full sm:w-72 h-48 sm:h-auto flex-shrink-0">
//                 <img
//                   src={item.propertyId.post_images?.[0]?.url || item.propertyId.galleryList?.[0] || "/api/placeholder/400/300"}
//                   alt={item.propertyId.post_title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <button
//                     onClick={() => removeFromWishlist(item.propertyId.post_id)}
//                     className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors duration-200"
//                   >
//                     <Trash2 className="w-5 h-5 text-red-500" />
//                   </button>
//                 </div>
//                 <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
//                   {item.propertyId.status}
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="flex-1 p-5 flex flex-col justify-between">
//                 <div>
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
//                       {item.propertyId.post_title}
//                     </h3>
//                     <p className="text-lg font-bold text-blue-600 ml-4">
//                       {formatPrice(item.propertyId.price)}
//                     </p>
//                   </div>

//                   <div className="flex items-center text-gray-600 mb-3">
//                     <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
//                     <p className="text-sm line-clamp-1">
//                       {item.propertyId.locality}, {item.propertyId.city}
//                     </p>
//                   </div>

//                   <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                     {item.propertyId.post_description}
//                   </p>
//                 </div>

//                 <div className="mt-auto">
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <div className="flex items-center space-x-6">
//                       <div className="flex items-center text-gray-700">
//                         <Bed className="w-4 h-4 mr-1" />
//                         <span className="text-sm">{item.propertyId.bedrooms} Beds</span>
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <Bath className="w-4 h-4 mr-1" />
//                         <span className="text-sm">{item.propertyId.bathrooms} Baths</span>
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <Square className="w-4 h-4 mr-1" />
//                         <span className="text-sm">{item.propertyId.area}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-4 text-xs text-gray-500">
//                     Saved on {new Date(item.savedAt).toLocaleDateString()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {wishlist.length === 0 && (
//           <div className="text-center py-16">
//             <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
//             <p className="text-gray-500">Start saving properties you like and they will appear here</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );


// };

// export default Wishlist;

import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Trash2 } from 'lucide-react';
import { getConfig } from '../utils/config';
import { base_url } from '../utils/base_url';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getWishlist } from '../redux/features/Wishlist/wishlistSlice';

const Wishlist = () => {
  const [error, setError] = useState(null);
  const { wishlist } = useSelector(state => state.wishlist);
  const [localWishlist, setLocalWishlist] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(localWishlist)
  useEffect(() => {
    dispatch(getWishlist())
  }, []);

  useEffect(() => {
    setLocalWishlist(wishlist);
  }, [wishlist]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const removeFromWishlist = async (e,post_id) => {
    e.stopPropagation()
    // Update local state immediately for instant UI feedback
    setLocalWishlist(prev => prev.filter(item => item?.propertyId?.post_id !== post_id));

    // Show toast notification
    toast('Removed from Wishlist', {
      icon: '💔',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });

    try {
      const response = await axios.post('http://localhost:5053/api/users/history/like', {
        propertyId: post_id
      }, getConfig());
      console.log(response);
    } catch (error) {
      // Revert local state if API call fails
      setLocalWishlist(wishlist);
      toast.error('Failed to remove from wishlist', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      console.log(error);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h3 className="text-lg font-semibold">Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // Sort wishlist items by savedAt timestamp in descending order (newest first)
    const sortedWishlist = [...wishlist].sort((a, b) =>
      new Date(b.savedAt) - new Date(a.savedAt)
    );
    setLocalWishlist(sortedWishlist);
  }, [wishlist]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-2">{localWishlist?.length} saved properties</p>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {localWishlist?.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row"
              onClick={() => navigate(`/api/details/${item ?.propertyId?.post_id}`)}
            >
              {/* Image Section */}
              <div className="relative w-full sm:w-72 h-48 sm:h-auto flex-shrink-0">
                <img
                  src={item?.propertyId?.post_images?.[0]?.url || item?.propertyId?.galleryList?.[0] || item.propertyId.galleryList?.[1] || "/api/placeholder/400/300"}
                  alt={item?.propertyId?.post_title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button
                    onClick={(e) => removeFromWishlist(e,item?.propertyId?.post_id)}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors duration-200"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item?.propertyId?.status}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                      {item?.propertyId?.post_title}
                    </h3>
                    <p className="text-lg font-bold text-blue-600 ml-4">
                      {formatPrice(item?.propertyId?.price)}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <p className="text-sm line-clamp-1">
                      {item?.propertyId?.locality}, {item?.propertyId?.city}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item?.propertyId?.post_description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-gray-700">
                        <Bed className="w-4 h-4 mr-1" />
                        <span className="text-sm">{item?.propertyId?.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Bath className="w-4 h-4 mr-1" />
                        <span className="text-sm">{item?.propertyId?.bathrooms} Baths</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Square className="w-4 h-4 mr-1" />
                        <span className="text-sm">{item?.propertyId?.area}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-gray-500">
                    Saved on {new Date(item?.savedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {localWishlist.length === 0 && (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500">Start saving properties you like and they will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;