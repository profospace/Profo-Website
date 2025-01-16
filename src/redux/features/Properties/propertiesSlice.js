import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import propertiesService from "./propertiesService";

const initialState = {
  properties: [],
  currentPage : null,
  totalCount: null,
  totalPages : null,
  filteredProperties : null ,
  propertyDetail : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// get all properties
export const getAllProperties = createAsyncThunk(
  "properties/getAllProperties",
  async (page, thunkAPI) => {
    try {
      return await propertiesService.getAllProperties(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// filter
export const getAllFilteredProperties = createAsyncThunk(
  "properties/getAllFilteredProperties",
  async (filters, thunkAPI) => {
    try {
      return await propertiesService.getAllFilteredProperties(filters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// get single property
export const getSingleProperty = createAsyncThunk(
  "properties/getSingleProperty",
  async (post_id, thunkAPI) => {
    try {
      return await propertiesService.getSingleProperty(post_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.properties = action.payload.properties;
        state.properties = [...state.properties, ...action.payload.properties];
        state.currentPage = action.payload.currentPage;
        state.totalCount = action.payload.totalCount;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(getAllFilteredProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFilteredProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredProperties = action.payload;
      })
      .addCase(getAllFilteredProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(getSingleProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.propertyDetail = action.payload;
      })
      .addCase(getSingleProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
  },
});

export default propertiesSlice.reducer;
