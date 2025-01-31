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

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Use localStorage
// import propertiesReducer from "../features/Properties/propertiesSlice";
// import buildingsReducer from "../features/Buildings/buildingsSlice";
// import projectsReducer from "../features/Projects/projectsSlice";
// import mapReducer from "../features/Map/mapSlice";
// import { combineReducers } from "redux";

// // Combine all reducers
// const rootReducer = combineReducers({
//     properties: propertiesReducer,
//     buildings: buildingsReducer,
//     projects: projectsReducer,
//     map: mapReducer,
// });

// // Redux Persist configuration
// const persistConfig = {
//     key: "root", // Key to store the persisted state
//     storage,     // Storage engine
//     whitelist: ["map"], // Specify which slices to persist
// };

// // Create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure store with persisted reducer
// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false, // Disable checks for non-serializable data
//         }),
// });

// // Create persistor
// export const persistor = persistStore(store);
