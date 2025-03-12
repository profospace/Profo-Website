import axios from "axios";
import { buildings_base_url, filter_base_url, map_base_url, projects_base_url, properties_base_url_map, properties_filter_base_url } from "../../../utils/base_url";

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

  const { type_name , purpose, radius, latitude, longitude } = filters;

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
    buildQuery('purpose', purpose),
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


const buildQueryString = (filters) => {
  console.log("filters coming", filters)
  const queryParams = new URLSearchParams();

  // Add vanilla parameter if present
  if (filters.vanilla) queryParams.append('vanilla', filters.vanilla);
  // Property Filters
  if (filters.price?.min) queryParams.append('priceMin', filters.price.min);
  if (filters.price?.max) queryParams.append('priceMax', filters.price.max);
  if (filters.bedrooms) queryParams.append('bedrooms', filters.bedrooms);
  if (filters.bathrooms) queryParams.append('bathrooms', filters.bathrooms);
  if (filters.purpose) queryParams.append('purpose', filters.purpose);
  if (filters.verified) queryParams.append('verified', filters.verified);
  if (filters.propertyType) {
    if (Array.isArray(filters.propertyType)) {
      filters.propertyType.forEach(type => queryParams.append('type_name[]', type));
    } else {
      queryParams.append('type_name', filters.propertyType);
    }
  }
  if (filters.amenities) {
    if (Array.isArray(filters.amenities)) {
      filters.amenities.forEach(amenity =>
        queryParams.append('propertyAmenities[]', amenity)
      );
    }
  }

  // Project Filters
  if (filters.projectType) {
    if (Array.isArray(filters.projectType)) {
      filters.projectType.forEach(type =>
        queryParams.append('projectType[]', type)
      );
    }
  }
  if (filters.projectStatus) queryParams.append('projectStatus', filters.projectStatus);
  if (filters.projectAmenities) {
    if (Array.isArray(filters.projectAmenities)) {
      filters.projectAmenities.forEach(amenity =>
        queryParams.append('projectAmenities[]', amenity)
      );
    }
  }

  // Building Filters
  // if (filters.buildingType) queryParams.append('buildingType', filters.buildingType);
  // if (filters.developmentStatus) queryParams.append('developmentStatus', filters.developmentStatus);
  // if (filters.frontRoad) queryParams.append('frontRoad', filters.frontRoad);
  // if (filters.parkingArea) queryParams.append('parkingArea', filters.parkingArea);
  // if (filters.storey) queryParams.append('storey', filters.storey);
  // if (filters.age) queryParams.append('age', filters.age);
  // if (filters.luda) queryParams.append('luda', filters.luda);
  // if (filters.buildingAmenities) {
  //   if (Array.isArray(filters.buildingAmenities)) {
  //     filters.buildingAmenities.forEach(amenity =>
  //       queryParams.append('buildingAmenities[]', amenity)
  //     );
  //   }
  // }
  // if (filters.totalFloors) queryParams.append('totalFloors', filters.totalFloors);
  // if (filters.numberOfFlatsAvailable) queryParams.append('numberOfFlatsAvailable', filters.numberOfFlatsAvailable);

  // if (filters.state) queryParams.append('state', filters.state);

  // return queryParams.toString();
  if (filters.buildingType) {
    if (Array.isArray(filters.buildingType)) {
      filters.buildingType.forEach(type =>
        queryParams.append('buildingType[]', type)
      );
    }
  }
  if (filters.developmentStatus) {
    if (Array.isArray(filters.developmentStatus)) {
      filters.developmentStatus.forEach(status =>
        queryParams.append('developmentStatus[]', status)
      );
    }
  }
  if (filters.frontRoad) {
    if (Array.isArray(filters.frontRoad)) {
      filters.frontRoad.forEach(road =>
        queryParams.append('frontRoad[]', road)
      );
    }
  }
  if (filters.parkingArea) {
    if (Array.isArray(filters.parkingArea)) {
      filters.parkingArea.forEach(area =>
        queryParams.append('parkingArea[]', area)
      );
    }
  }
  if (filters.storey) {
    if (Array.isArray(filters.storey)) {
      filters.storey.forEach(s =>
        queryParams.append('storey[]', s)
      );
    }
  }
  if (filters.age) {
    if (Array.isArray(filters.age)) {
      filters.age.forEach(a =>
        queryParams.append('age[]', a)
      );
    }
  }
  if (filters.luda) {
    if (Array.isArray(filters.luda)) {
      filters.luda.forEach(l =>
        queryParams.append('luda[]', l)
      );
    }
  }
  if (filters.amenities) {
    if (Array.isArray(filters.amenities)) {
      filters.amenities.forEach(amenity =>
        queryParams.append('buildingAmenities[]', amenity)
      );
    }
  }

  // Handle increment type filters
  if (filters.totalFloors) queryParams.append('totalFloors', filters.totalFloors);
  if (filters.numberOfFlatsAvailable) queryParams.append('numberOfFlatsAvailable', filters.numberOfFlatsAvailable);

  if (filters.state) queryParams.append('state', filters.state);

  return queryParams.toString();
};

const applyFilter = async (filters) => {
  console.log('🔍 Applying combined filters:', filters);

  try {
    const queryString = buildQueryString(filters);
    console.log("queryString", queryString)
    const url = `${filter_base_url}?${queryString}`;
    console.log("url", url)

    console.log('📡 Making API request with combined filters to:', url);

    const response = await axios.get(url);

    console.log("response", response)

    // If vanilla parameter is present, return only relevant data
    if (filters.vanilla) {
      switch (filters.vanilla.toLowerCase()) {
        case 'property':
          return {
            properties: response.data.properties || [],
            totalProperties: response.data.totalProperties || 0,
            filters: response.data.filters || {},
            appliedFilters: filters
          };
        case 'building':
          return {
            buildings: response.data.buildings || [],
            totalBuildings: response.data.totalBuildings || 0,
            filters: response.data.filters || {},
            appliedFilters: filters
          };
        case 'project':
          return {
            projects: response.data.projects || [],
            totalProjects: response.data.totalProjects || 0,
            filters: response.data.filters || {},
            appliedFilters: filters
          };
      }
    }

    // If no vanilla parameter or invalid value, return all data (original behavior)
    return {
      properties: response.data.properties || [],
      projects: response.data.projects || [],
      buildings: response.data.buildings || [],
      totalProperties: response.data.totalProperties || 0,
      filters: response.data.filters || {},
      appliedFilters: filters
    };

  } catch (error) {
    console.error('❌ Filter API Error:', error);
    throw error;
  }
};

const mapService = {
  getMapFeed, getFilterProperties, getAllProperties, getAllProjects, getAllBuildings, applyFilter
};

export default mapService;
