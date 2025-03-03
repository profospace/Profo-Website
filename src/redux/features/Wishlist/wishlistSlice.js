import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import wishlistService from './wishlistService';


const initialState = {
  viewedProperties: [],
  likedProperties: [],
  // isLoading: false,
  // isError: false,
  // isSuccess: false,
  // message: ""
};


export const getWishlist = createAsyncThunk('wishlist/getWishlist', async (_, thunkAPI) => {
  try {
    return await wishlistService.getWishlist()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})



const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        // state.isLoading = true
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        console.log("payload" , action.payload)
        state.likedProperties = action?.payload?.likedProperties
        state.viewedProperties = action?.payload?.viewedProperties
        // state.isLoading = false
        // state.isSuccess = true
        // state.message = action.payload.message
      })
      .addCase(getWishlist.rejected, (state, action) => {
        // state.wishlist = []
        // state.isLoading = false
        // state.isError = true
        // state.isSuccess = false
        // state.message = action.payload.message
      })

  }
});

export default wishlistSlice.reducer;
