import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import buildingsService from "./buildingsService";

const initialState = {
  buildings: [],
  buildingDetail: null,
  // currentPage : null,
  // totalCount: null,
  // totalPages : null,
  // filteredProperties : null ,
  // propertyDetail : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// get all buildings
export const getAllBuildings = createAsyncThunk(
  "buildings/getAllBuildings",
  async (_, thunkAPI) => {
    try {
      return await buildingsService.getAllBuildings();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// get single building
export const getSingleBuilding = createAsyncThunk(
  "buildings/getSingleBuilding",
  async (buildingId, thunkAPI) => {
    try {
      return await buildingsService.getSingleBuilding(buildingId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBuildings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBuildings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.buildings = action.payload;
        // state.properties = [...state.properties, ...action.payload.properties];
        // state.currentPage = action.payload.currentPage;
        // state.totalCount = action.payload.totalCount;
        // state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllBuildings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload.message;
      })
      .addCase(getSingleBuilding.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBuilding.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.buildingDetail = action.payload;
      })
      .addCase(getSingleBuilding.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload.message;
      })
  },
});

export default buildingsSlice.reducer;
