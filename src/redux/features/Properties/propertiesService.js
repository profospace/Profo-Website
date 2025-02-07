import axios from "axios";
import { properties_base_url, properties_filter_base_url, single_property_base_url } from "../../../utils/base_url";
import { getConfig } from "../../../utils/config";
// import { getConfig } from "../../utils/config";
// import { config } from "../../utils/config";

const getAllProperties = async (page) => {
  const response = await axios.get(`${properties_base_url}`);
  // const response = await axios.get(`${properties_base_url}?page=${page || 1}`);
  console.log(response)
  return response.data;
};
// const getAllFilteredProperties = async (filters) => {
//   // console.log("filters", filters)
//   const { bedrooms, bathrooms, floor , priceMin, priceMax, purpose, type_name  } = filters
//   const response = await axios.get(`${properties_filter_base_url}?bedrooms=${bedrooms || ''}&bathrooms=${bathrooms || ''}&floor=${floor || ''}&priceMin=${priceMin || ''}&priceMax=${priceMax || ''}&purpose=${purpose || ''}&type_name=${type_name || ''}`);

//   // console.log("response-filter" , response)
//   return response.data.properties;
// };

const getAllFilteredProperties = async (filters) => {
  const { bedrooms, bathrooms, priceMin, priceMax, purpose, type_name } = filters;

  // Helper function to build query parameters
  const buildQuery = (key, values) => {
    if (!values) return '';
    if (Array.isArray(values)) {
      return values.map(value => `${key}=${encodeURIComponent(value)}`).join('&');
    }
    return `${key}=${encodeURIComponent(values)}`;
  };

  // Build the query string
  const queryParts = [
    bedrooms ? `bedrooms=${bedrooms}` : '',
    bathrooms ? `bathrooms=${bathrooms}` : '',
    priceMin ? `priceMin=${priceMin}` : '',
    priceMax ? `priceMax=${priceMax}` : '',
    purpose ? buildQuery('purpose', purpose) : '',
    type_name ? buildQuery('type_name', type_name) : ''
  ].filter(Boolean).join('&');

  const response = await axios.get(`${properties_filter_base_url}?${queryParts}`);
  return response.data.properties;
};

const getSingleProperty = async (post_id) => {
  const response = await axios.get(`${single_property_base_url}${post_id}`);
  console.log("getConfig")
  console.log(response)
  return response.data;
};


const propertiesService = {
  getAllProperties, getAllFilteredProperties, getSingleProperty
};

export default propertiesService;
