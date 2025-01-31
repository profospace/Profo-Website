import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mapService from "./mapService";

const initialState = {
  properties: [],
  projects: [],
  buildings: [],
  filters: {},
  appliedFilters : {},
  totalProperties: null ,
  searchParams: {},
  isSuccess: false,
  isError: false,
  message: "",
};

// get map feed
export const getMapFeed = createAsyncThunk(
  "map/getMapFeed",
  async (info, thunkAPI) => {
    try {
      return await mapService.getMapFeed(info);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// filter
export const getFilterProperties = createAsyncThunk(
  "map/getFilterProperties",
  async (filters, thunkAPI) => {
    try {
      return await mapService.getFilterProperties(filters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  })

// get all properties
export const getAllProperties = createAsyncThunk(
  "map/getAllProperties",
  async (_, thunkAPI) => {
    try {
      return await mapService.getAllProperties();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


// get all projects
export const getAllProjects = createAsyncThunk(
  "map/getAllProjects",
  async (_, thunkAPI) => {
    try {
      return await mapService.getAllProjects();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// get all buildings
export const getAllBuildings = createAsyncThunk(
  "map/getAllBuildings",
  async (_, thunkAPI) => {
    try {
      return await mapService.getAllBuildings();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// filter
export const applyFilter = createAsyncThunk(
  "map/applyFilter",
  async (filters, thunkAPI) => {
    try {
      return await mapService.applyFilter(filters);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.appliedFilters = {}; // Reset appliedFilters to an empty object
    },    

  },
  extraReducers: (builder) => {
    builder
      .addCase(getMapFeed.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMapFeed.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        const { results, searchParams } = action.payload || {}; // Safely extract results from action.payload
        state.properties = results?.properties?.items || []; // Default to an empty array if undefined
        state.projects = results?.projects?.items || [];
        state.buildings = results?.buildings?.items || [];
        state.searchParams = searchParams || {};


      })
      .addCase(getMapFeed.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(getFilterProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilterProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.properties = action.payload;
        state.projects = [];
        state.buildings = [];
      })
      .addCase(getFilterProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(getAllProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
        state.buildings = [];
        state.properties = [];
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      .addCase(getAllBuildings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBuildings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.buildings = action.payload;
        state.projects = [];
        state.properties = [];

      })
      .addCase(getAllBuildings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload.message;
      })
      .addCase(getAllProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.properties = action.payload;
        state.buildings = [];
        state.projects = [];

      })
      .addCase(getAllProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(applyFilter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applyFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action?.payload)
        state.properties = action.payload.properties;
        state.filters = action.payload.filters;
        state.appliedFilters = action.payload.appliedFilters
        state.totalProperties = action.payload.totalProperties
        // state.totalProperties = action.payload.totalProperties;
      })
      .addCase(applyFilter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload.message;
      })
  },
});

export const { clearFilters } = mapSlice.actions;
export default mapSlice.reducer;
