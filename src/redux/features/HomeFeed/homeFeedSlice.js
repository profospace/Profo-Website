import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeFeedService from "./homeFeedService";

const initialState = {
  properties: [],
  projects: [],
  buildings: [],
  isSuccess: false,
  isError: false,
  message: "",
};

// get home feed
export const getHomeFeed = createAsyncThunk(
  "map/getHomeFeed",
  async (_, thunkAPI) => {
    try {
      return await homeFeedService.getHomeFeed();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// export const getHomeFeed = createAsyncThunk(
//   "map/getHomeFeed",
//   async (info, thunkAPI) => {
//     try {
//       return await homeFeedService.getHomeFeed(info);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );



const homeFeedSlice = createSlice({
  name: "homeFeed",
  initialState,
  reducers: {
    // clearFilters: (state) => {
    //   state.appliedFilters = {}; // Reset appliedFilters to an empty object
    // },    

  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomeFeed.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHomeFeed.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.properties = action.payload.properties?.items;
        state.projects = action.payload.projects?.items;
        state.buildings = action.payload.buildings?.items;


      })
      .addCase(getHomeFeed.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
  },
});

export default homeFeedSlice.reducer;
