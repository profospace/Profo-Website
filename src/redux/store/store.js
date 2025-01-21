import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "../features/Properties/propertiesSlice";
import buildingsReducer from "../features/Buildings/buildingsSlice";
import projectsReducer from "../features/Projects/projectsSlice";
import mapReducer from "../features/Map/mapSlice"

export const store = configureStore({
    reducer:{
        properties : propertiesReducer,
        buildings : buildingsReducer,
        projects : projectsReducer,
        map: mapReducer
    }
})