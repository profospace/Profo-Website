// import { useDispatch, useSelector } from 'react-redux';
// import { toggleWishlistItem, updateLocalWishlist } from '../redux/features/Wishlist/wishlistSlice';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { getAuthToken } from '../utils/config';

// /**
//  * Custom hook for handling wishlist operations across the application
//  */
// export const useWishlist = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { likedProperties } = useSelector(state => state.wishlist);

//     /**
//      * Check if an entity is in the wishlist
//      * @param {string} entityId - ID of the entity to check
//      * @param {string} entityType - Type of entity ('property', 'project', or 'building')
//      * @returns {boolean} True if entity is in wishlist
//      */
//     const isInWishlist = (entityId, entityType = 'property') => {
//         // Handle the case where likedProperties might not be loaded yet
//         if (!likedProperties || !Array.isArray(likedProperties)) return false;

//         // Get the property key based on entity type
//         const propertyKey =
//             entityType === 'property' ? 'post_id' :
//                 entityType === 'project' ? 'projectId' : 'buildingId';

//         // Check if the entity exists in liked properties
//         return likedProperties.some(item => {
//             // Check if propertyId exists and has the expected property
//             const propertyId = item?.propertyId;
//             if (!propertyId) return false;

//             return (
//                 propertyId[propertyKey] === entityId &&
//                 (item.entityType || 'property') === entityType
//             );
//         });
//     };

//     /**
//      * Handle adding/removing an item to/from wishlist
//      * @param {Event} e - Event object (to prevent propagation)
//      * @param {Object} entityData - Entity data ({ entityId, entityType })
//      * @returns {Promise<void>}
//      */
//     const handleToggleWishlist = async (e, { entityId, entityType = 'property' }) => {
//         if (e) e.stopPropagation(); // Prevent navigating to details page

//         // Check if user is authenticated
//         if (getAuthToken() === null) {
//             navigate('/signup');
//             toast.error("SignIn Required", {
//                 style: {
//                     borderRadius: '10px',
//                     background: '#333',
//                     color: '#fff',
//                 },
//             });
//             return;
//         }

//         // Check current wishlist status
//         const isCurrentlyInWishlist = isInWishlist(entityId, entityType);

//         // Show toast message with appropriate message and icon
//         toast(isCurrentlyInWishlist ? 'Removed from Wishlist' : 'Added to Wishlist', {
//             icon: isCurrentlyInWishlist ? '💔' : '❤️',
//             style: {
//                 borderRadius: '10px',
//                 background: '#333',
//                 color: '#fff',
//             },
//         });

//         // Update local state immediately for better UX
//         dispatch(updateLocalWishlist({
//             entityId,
//             entityType,
//             isAdding: !isCurrentlyInWishlist
//         }));

//         // Make API call to update server
//         try {
//             await dispatch(toggleWishlistItem({ entityId, entityType })).unwrap();
//         } catch (error) {
//             console.error('Error updating wishlist:', error);
//             // State will be reverted automatically if the API call fails due to thunk rejection
//         }
//     };

//     // Return the hook utilities
//     return {
//         isInWishlist,
//         handleToggleWishlist
//     };
// };

// export default useWishlist;


import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlistItem, updateLocalWishlist } from '../redux/features/Wishlist/wishlistSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getAuthToken } from '../utils/config';

/**
 * Custom hook for handling wishlist operations across the application
 */
export const useWishlist = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { likedProperties } = useSelector(state => state.wishlist);

    /**
     * Check if an entity is in the wishlist
     * @param {string} entityId - ID of the entity to check
     * @param {string} entityType - Type of entity ('property', 'project', or 'building')
     * @returns {boolean} True if entity is in wishlist
     */
    const isInWishlist = (entityId, entityType = 'property') => {
        // Handle the case where likedProperties might not be loaded yet
        if (!likedProperties || !Array.isArray(likedProperties)) return false;

        // Check if the entity exists in liked properties
        return likedProperties.some(item => {
            // Early return if propertyId doesn't exist
            if (!item.propertyId) return false;

            const propertyId = item.propertyId;
            const itemEntityType = item.entityType || 'property';

            // Skip if entity types don't match
            if (itemEntityType !== entityType) return false;

            // Handle different data formats from different API endpoints
            if (typeof propertyId === 'object') {
                // Complex object format from GET wishlist API
                if (entityType === 'property') return propertyId.post_id === entityId;
                if (entityType === 'project') return propertyId.projectId === entityId;
                if (entityType === 'building') return propertyId.buildingId === entityId;
            } else {
                // Simple string format from POST like/toggle API
                return propertyId === entityId;
            }

            return false;
        });
    };

    /**
     * Handle adding/removing an item to/from wishlist
     * @param {Event} e - Event object (to prevent propagation)
     * @param {Object} entityData - Entity data ({ entityId, entityType })
     * @returns {Promise<void>}
     */
    const handleToggleWishlist = async (e, { entityId, entityType = 'property' }) => {
        if (e) e.stopPropagation(); // Prevent navigating to details page

        // Check if user is authenticated
        if (getAuthToken() === null) {
            navigate('/signup');
            toast.error("SignIn Required", {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            return;
        }

        // Check current wishlist status
        const isCurrentlyInWishlist = isInWishlist(entityId, entityType);

        // Show toast message with appropriate message and icon
        toast(isCurrentlyInWishlist ? 'Removed from Wishlist' : 'Added to Wishlist', {
            icon: isCurrentlyInWishlist ? '💔' : '❤️',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });

        // Update local state immediately for better UX
        dispatch(updateLocalWishlist({
            entityId,
            entityType,
            isAdding: !isCurrentlyInWishlist
        }));

        // Make API call to update server
        try {
            await dispatch(toggleWishlistItem({ entityId, entityType })).unwrap();
        } catch (error) {
            console.error('Error updating wishlist:', error);
            // State will be reverted automatically if the API call fails due to thunk rejection
        }
    };

    /**
     * Get entity ID from property object based on entity type
     * @param {Object} entity - Entity object
     * @param {string} entityType - Type of entity
     * @returns {string|null} Entity ID
     */
    const getEntityId = (entity, entityType = 'property') => {
        if (!entity) return null;

        switch (entityType) {
            case 'property':
                return entity.post_id;
            case 'project':
                return entity.projectId;
            case 'building':
                return entity.buildingId;
            default:
                return null;
        }
    };

    // Return the hook utilities
    return {
        isInWishlist,
        handleToggleWishlist,
        getEntityId
    };
};

export default useWishlist;