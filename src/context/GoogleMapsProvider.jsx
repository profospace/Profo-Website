import { createContext, useContext } from "react";
import { useLoadScript } from "@react-google-maps/api";

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    });

    return (
        <GoogleMapsContext.Provider value={{ isLoaded }}>
            {children}
        </GoogleMapsContext.Provider>
    );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);
