import axios from "axios";
import { buildings_base_url, map_base_url, projects_base_url, properties_base_url_map, properties_filter_base_url } from "../../../utils/base_url";

const getMapFeed = async ({ latitude, longitude, radius }) => {
  const response = await axios.get(`${map_base_url}?latitude=${latitude}&longitude=${longitude}&radius=${radius || 1}`);
  console.log(response)
  return response.data;
};


// const getAllFilteredProperties = async (filters) => {
//   const { bedrooms, bathrooms, priceMin, priceMax, purpose, type_name } = filters;

//   // Helper function to build query parameters
//   const buildQuery = (key, values) => {
//     if (!values) return '';
//     if (Array.isArray(values)) {
//       return values.map(value => `${key}=${encodeURIComponent(value)}`).join('&');
//     }
//     return `${key}=${encodeURIComponent(values)}`;
//   };

//   // Build the query string
//   const queryParts = [
//     bedrooms ? `bedrooms=${bedrooms}` : '',
//     bathrooms ? `bathrooms=${bathrooms}` : '',
//     priceMin ? `priceMin=${priceMin}` : '',
//     priceMax ? `priceMax=${priceMax}` : '',
//     purpose ? buildQuery('purpose', purpose) : '',
//     type_name ? buildQuery('type_name', type_name) : ''
//   ].filter(Boolean).join('&');

//   const response = await axios.get(`${properties_filter_base_url}?${queryParts}`);
//   return response.data.properties;
// };


const getFilterProperties = async (filters) => {
  console.log("Filters:", filters);

  const { type_name, radius, latitude, longitude } = filters;

  // Helper function to build query parameters
  const buildQuery = (key, value) => {
    if (!value) return '';
    if (Array.isArray(value)) {
      return value.map(v => `${key}=${encodeURIComponent(v)}`).join('&');
    }
    return `${key}=${encodeURIComponent(value)}`;
  };

  // Build the query string dynamically
  const queryParts = [
    buildQuery('type_name', type_name),
    buildQuery('radius', radius),
    buildQuery('latitude', latitude),
    buildQuery('longitude', longitude),
  ].filter(Boolean).join('&'); // Filter out empty values

  try {
    // Perform the API call
    const response = await axios.get(`${properties_filter_base_url}?${queryParts}`);
    console.log("Response Data:", response.data);

    // Return the filtered properties
    return response.data.properties;
  } catch (error) {
    console.error("Error fetching filtered properties:", error);
    throw error; // Optional: Rethrow to handle errors upstream
  }
};

const getAllProperties = async () => {
  const response = await axios.get(`${properties_base_url_map}`);
  console.log(response)
  return response.data;
};


const getAllProjects = async () => {
  const response = await axios.get(`${projects_base_url}`);
  // console.log(response)
  return response.data;
};

const getAllBuildings = async () => {
  const response = await axios.get(`${buildings_base_url}`);
  // console.log(response)
  return response.data;
};



const mapService = {
  getMapFeed, getFilterProperties, getAllProperties, getAllProjects, getAllBuildings
};

export default mapService;
