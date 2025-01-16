import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectsService from "./projectsService";

const initialState = {
  projects: [],
  projectDetail: null,
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

// get all projects
export const getAllProjects = createAsyncThunk(
  "projects/getAllProjects",
  async (_, thunkAPI) => {
    try {
      return await projectsService.getAllProjects();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// filter
// export const getAllFilteredProperties = createAsyncThunk(
//   "properties/getAllFilteredProperties",
//   async (filters, thunkAPI) => {
//     try {
//       return await propertiesService.getAllFilteredProperties(filters);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// get single project
export const getSingleProject = createAsyncThunk(
  "projects/getSingleProject",
  async (projectId, thunkAPI) => {
    try {
      return await projectsService.getSingleProject(projectId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
        // state.properties = [...state.properties, ...action.payload.properties];
        // state.currentPage = action.payload.currentPage;
        // state.totalCount = action.payload.totalCount;
        // state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      // .addCase(getAllFilteredProperties.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getAllFilteredProperties.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.filteredProperties = action.payload;
      // })
      // .addCase(getAllFilteredProperties.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload.message;
      // })
      .addCase(getSingleProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.projectDetail = action.payload;
      })
      .addCase(getSingleProject.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload.message;
      })
  },
});

export default projectSlice.reducer;
