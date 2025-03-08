// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import wishlistService from './wishlistService';


// const initialState = {
//   viewedProperties: [],
//   likedProperties: [],
//   contactedProperties: [],
//   // isLoading: false,
//   // isError: false,
//   // isSuccess: false,
//   // message: ""
// };


// export const getWishlist = createAsyncThunk('wishlist/getWishlist', async (_, thunkAPI) => {
//   try {
//     return await wishlistService.getWishlist()
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error)
//   }
// })



// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getWishlist.pending, (state) => {
//         // state.isLoading = true
//       })
//       .addCase(getWishlist.fulfilled, (state, action) => {
//         console.log("payload" , action.payload)
//         state.likedProperties = action?.payload?.likedProperties
//         state.viewedProperties = action?.payload?.viewedProperties
//         // state.isLoading = false
//         // state.isSuccess = true
//         // state.message = action.payload.message
//       })
//       .addCase(getWishlist.rejected, (state, action) => {
//         // state.wishlist = []
//         // state.isLoading = false
//         // state.isError = true
//         // state.isSuccess = false
//         // state.message = action.payload.message
//       })

//   }
// });

// export default wishlistSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import wishlistService from './wishlistService';
// import { toast } from 'react-hot-toast';

// const initialState = {
//   viewedProperties: [],
//   likedProperties: [],
//   contactedProperties: [],
//   isLoading: false,
//   isError: false,
//   isSuccess: false,
//   message: ""
// };

// // Get user's wishlist
// export const getWishlist = createAsyncThunk(
//   'wishlist/getWishlist',
//   async (_, thunkAPI) => {
//     try {
//       return await wishlistService.getWishlist();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// // Toggle wishlist item (add/remove)
// export const toggleWishlistItem = createAsyncThunk(
//   'wishlist/toggleItem',
//   async (entityData, thunkAPI) => {
//     try {
//       const response = await wishlistService.toggleWishlistItem(entityData);
//       return response;
//     } catch (error) {
//       // Show error toast
//       toast.error('Failed to update wishlist', {
//         style: {
//           borderRadius: '10px',
//           background: '#333',
//           color: '#fff',
//         },
//       });
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     // Local update without API call (optimistic UI updates)
//     updateLocalWishlist: (state, action) => {
//       const { entityId, entityType, isAdding } = action.payload;

//       if (isAdding) {
//         // Check if item already exists to prevent duplicates
//         const itemExists = state.likedProperties.some(
//           item => item.propertyId[entityType === 'property' ? 'post_id' :
//             entityType === 'project' ? 'projectId' : 'buildingId'] === entityId
//             && (item.entityType || 'property') === entityType
//         );

//         if (!itemExists) {
//           // Add item to liked properties
//           state.likedProperties.push({
//             propertyId: {
//               [entityType === 'property' ? 'post_id' :
//                 entityType === 'project' ? 'projectId' : 'buildingId']: entityId
//             },
//             entityType,
//             _id: Date.now().toString(), // Temporary ID
//             savedAt: new Date().toISOString()
//           });
//         }
//       } else {
//         // Remove item from liked properties
//         state.likedProperties = state.likedProperties.filter(
//           item => !(item.propertyId[entityType === 'property' ? 'post_id' :
//             entityType === 'project' ? 'projectId' : 'buildingId'] === entityId
//             && (item.entityType || 'property') === entityType)
//         );
//       }
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getWishlist.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getWishlist.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.likedProperties = action.payload?.likedProperties || [];
//         state.viewedProperties = action.payload?.viewedProperties || [];
//         state.contactedProperties = action.payload?.contactedProperties || [];
//       })
//       .addCase(getWishlist.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.payload?.message || "Failed to fetch wishlist";
//       })
//       .addCase(toggleWishlistItem.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(toggleWishlistItem.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         // Server response should include updated likedProperties
//         if (action.payload?.likedProperties) {
//           state.likedProperties = action.payload.likedProperties;
//         }
//       })
//       .addCase(toggleWishlistItem.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload?.message || "Failed to update wishlist";
//       });
//   }
// });

// export const { updateLocalWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import wishlistService from './wishlistService';
import { toast } from 'react-hot-toast';

const initialState = {
  viewedProperties: [],
  likedProperties: [],
  contactedProperties: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};

// Get user's wishlist
export const getWishlist = createAsyncThunk(
  'wishlist/getWishlist',
  async (_, thunkAPI) => {
    try {
      return await wishlistService.getWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Toggle wishlist item (add/remove)
export const toggleWishlistItem = createAsyncThunk(
  'wishlist/toggleItem',
  async (entityData, thunkAPI) => {
    try {
      const response = await wishlistService.toggleWishlistItem(entityData);

      // Get current state to merge with response
      const state = thunkAPI.getState();

      return {
        responseData: response,
        currentLikedProperties: state.wishlist.likedProperties
      };
    } catch (error) {
      // Show error toast
      toast.error('Failed to update wishlist', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Utility function to normalize wishlist data from toggle API response
const normalizeToggleResponse = (responseData, currentLikedProperties) => {
  // If there's no liked properties array in the response, return current state
  if (!responseData?.likedProperties || !Array.isArray(responseData.likedProperties)) {
    return currentLikedProperties;
  }

  // The toggle API returns a simplified format - we need to reconstruct the full objects
  const currentMap = new Map();

  // Create a map of existing full objects by ID for quick lookup
  currentLikedProperties.forEach(item => {
    let entityId;
    if (item.propertyId) {
      if (typeof item.propertyId === 'object') {
        entityId = item.entityType === 'property' ? item.propertyId.post_id :
          item.entityType === 'project' ? item.propertyId.projectId :
            item.entityType === 'building' ? item.propertyId.buildingId : null;
      } else {
        entityId = item.propertyId;
      }

      if (entityId) {
        currentMap.set(`${entityId}-${item.entityType || 'property'}`, item);
      }
    }
  });

  // Process the simplified data from the response
  const updatedLikedProperties = responseData.likedProperties.map(item => {
    const entityType = item.entityType || 'property';
    const entityId = item.propertyId;
    const mapKey = `${entityId}-${entityType}`;

    // If we already have a full object for this entity, keep it
    if (currentMap.has(mapKey)) {
      return currentMap.get(mapKey);
    }

    // Otherwise create a placeholder object that will be replaced on next fetch
    return {
      propertyId: {
        [entityType === 'property' ? 'post_id' :
          entityType === 'project' ? 'projectId' : 'buildingId']: entityId,
      },
      entityType: entityType,
      _id: item._id,
      savedAt: item.savedAt
    };
  });

  return updatedLikedProperties;
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Local update without API call (optimistic UI updates)
    updateLocalWishlist: (state, action) => {
      const { entityId, entityType, isAdding } = action.payload;

      if (isAdding) {
        // Check if item already exists to prevent duplicates
        const itemExists = state.likedProperties.some(
          item => {
            if (!item.propertyId) return false;

            const propertyId = item.propertyId;
            const itemEntityType = item.entityType || 'property';

            if (typeof propertyId === 'object') {
              // Object format from GET API
              return (itemEntityType === entityType) &&
                ((entityType === 'property' && propertyId.post_id === entityId) ||
                  (entityType === 'project' && propertyId.projectId === entityId) ||
                  (entityType === 'building' && propertyId.buildingId === entityId));
            } else {
              // String format from POST API response
              return propertyId === entityId && itemEntityType === entityType;
            }
          }
        );

        if (!itemExists) {
          // Add item to liked properties
          state.likedProperties.push({
            propertyId: {
              [entityType === 'property' ? 'post_id' :
                entityType === 'project' ? 'projectId' : 'buildingId']: entityId
            },
            entityType,
            _id: Date.now().toString(), // Temporary ID
            savedAt: new Date().toISOString()
          });
        }
      } else {
        // Remove item from liked properties
        state.likedProperties = state.likedProperties.filter(
          item => {
            if (!item.propertyId) return true;

            const propertyId = item.propertyId;
            const itemEntityType = item.entityType || 'property';

            if (typeof propertyId === 'object') {
              // Complex object format
              return !(itemEntityType === entityType &&
                ((entityType === 'property' && propertyId.post_id === entityId) ||
                  (entityType === 'project' && propertyId.projectId === entityId) ||
                  (entityType === 'building' && propertyId.buildingId === entityId)));
            } else {
              // Simple string format
              return !(propertyId === entityId && itemEntityType === entityType);
            }
          }
        );
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.likedProperties = action.payload?.likedProperties || [];
        state.viewedProperties = action.payload?.viewedProperties || [];
        state.contactedProperties = action.payload?.contactedProperties || [];
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload?.message || "Failed to fetch wishlist";
      })
      .addCase(toggleWishlistItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleWishlistItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        // Normalize the response data with existing state data
        if (action.payload?.responseData) {
          state.likedProperties = normalizeToggleResponse(
            action.payload.responseData,
            action.payload.currentLikedProperties
          );
        }
      })
      .addCase(toggleWishlistItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || "Failed to update wishlist";
      });
  }
});

export const { updateLocalWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
