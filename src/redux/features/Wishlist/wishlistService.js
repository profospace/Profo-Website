// // import axios from "axios";
// // import { get_user_wishlist } from "../../../utils/base_url";
// // import { getConfig } from "../../../utils/config";

// // // get user wishlist
// // const getWishlist = async ()=>{
// //   const response = await axios.get(`${get_user_wishlist}` , getConfig())
// //   console.log(response.data?.user?.history)
// //   return response.data?.user?.history
// // }


// // // const addToWishlist = async(id)=>{
// // //   const response = await axios.put(`${products_base_url}/addtowishlist` ,{productId : id} ,getConfig())
// // //   return response.data
// // // }


// // const wishlistService = {
// //   getWishlist,
// //   // addToWishlist,

// // };

// // export default wishlistService;


// import axios from "axios";
// import { base_url, get_user_wishlist } from "../../../utils/base_url";
// import { getConfig } from "../../../utils/config";
// import { toast } from "react-hot-toast";

// // Get user wishlist
// const getWishlist = async () => {
//   const response = await axios.get(`${get_user_wishlist}`, getConfig());
//   console.log("Get All response", response)
//   return response.data?.user?.history;
// };

// // Toggle wishlist item (add/remove)
// const toggleWishlistItem = async (entityData) => {
//   try {
//     // Extract the entity ID and type from the data
//     const { entityId, entityType } = entityData;

//     // Create the appropriate request payload based on entity type
//     const payload = {};

//     switch (entityType) {
//       case 'property':
//         payload.propertyId = entityId;
//         break;
//       case 'project':
//         payload.projectId = entityId;
//         break;
//       case 'building':
//         payload.buildingId = entityId;
//         break;
//       default:
//         throw new Error('Invalid entity type');
//     }

//     const response = await axios.post(
//       `${base_url}/api/users/history/like`,
//       payload,
//       getConfig()
//     );

//     console.log("toggle response", response)

//     return response.data;
//   } catch (error) {
//     console.error('Wishlist toggle error:', error);
//     throw error;
//   }
// };

// const wishlistService = {
//   getWishlist,
//   toggleWishlistItem
// };

// export default wishlistService;

import axios from "axios";
import { base_url, get_user_wishlist } from "../../../utils/base_url";
import { getConfig } from "../../../utils/config";
import { toast } from "react-hot-toast";

/**
 * Get user wishlist
 * This fetches the user's wishlist data from the server
 * @returns {Promise<Object>} The wishlist data
 */
const getWishlist = async () => {
  try {
    const response = await axios.get(`${get_user_wishlist}`, getConfig());
    return response.data?.user?.history;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

/**
 * Toggle wishlist item (add/remove)
 * @param {Object} entityData - Object containing entity ID and type
 * @returns {Promise<Object>} Response data from API
 */
const toggleWishlistItem = async (entityData) => {
  try {
    // Extract the entity ID and type from the data
    const { entityId, entityType } = entityData;

    // Create the appropriate request payload based on entity type
    const payload = {};

    switch (entityType) {
      case 'property':
        payload.propertyId = entityId;
        break;
      case 'project':
        payload.projectId = entityId;
        break;
      case 'building':
        payload.buildingId = entityId;
        break;
      default:
        throw new Error('Invalid entity type');
    }

    const response = await axios.post(
      `${base_url}/api/users/history/like`,
      payload,
      getConfig()
    );

    // Return the response data
    return response.data;
  } catch (error) {
    console.error('Wishlist toggle error:', error);
    throw error;
  }
};

/**
 * Transform wishlist data to account for different formats
 * This handles the differences between GET and POST API responses
 * @param {Array} likedProperties - Array of liked properties from any API
 * @returns {Array} Normalized liked properties
 */
const transformWishlistData = (likedProperties) => {
  if (!likedProperties || !Array.isArray(likedProperties)) {
    return [];
  }

  return likedProperties.map(item => {
    // If item has no propertyId, skip it
    if (!item.propertyId) return item;

    const entityType = item.entityType || 'property';

    // Handle case where propertyId is already a complex object (from GET API)
    if (typeof item.propertyId === 'object') {
      return item;
    }

    // Handle case where propertyId is a string (from POST API)
    return {
      ...item,
      propertyId: {
        [entityType === 'property' ? 'post_id' :
          entityType === 'project' ? 'projectId' : 'buildingId']: item.propertyId
      }
    };
  });
};

const wishlistService = {
  getWishlist,
  toggleWishlistItem,
  transformWishlistData
};

export default wishlistService;