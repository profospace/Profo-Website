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

// const applyFilter = async (filters) => {
//   console.log("filters commming" , filters)
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

//   const response = await axios.get(`${filter_base_url}?${queryParts}`);
//   console.log("filtered response" , response)
//   return response.data.properties;
// };

// const applyFilter = async (filters) => {
//   console.log("Applying filters:", filters);
//   const {
//     // Property filters
//     bedrooms, bathrooms, priceMin, priceMax, type_name,
//     furnishing, area, construction_status, carpetArea,
//     superBuiltupArea, available, category, region,
//     possession, broker_status, purpose, floor,
//     emiAmount, loanTenureYears, propertyAmenities,

//     // Building filters
//     buildingName, buildingType, developmentStatus,
//     frontRoad, parkingArea, storey, buildingAge,
//     luda, buildingAmenities, constructionTime,
//     lifts, totalProperties, numberOfFlatsAvailable,
//     totalFloors,

//     // Project filters
//     projectName, projectType, projectStatus,
//     totalUnits, totalTowers, projectTotalFloors,
//     launchDate, possessionDate, projectAmenities,
//     availabilityStatus,

//     // Common filters
//     latitude, longitude, radius,
//     sort, city, state, pincode, locality,
//     builder
//   } = filters;

//   // Helper function to build query parameters
//   const buildQuery = (key, values) => {
//     if (!values && values !== 0) return '';
//     if (Array.isArray(values)) {
//       return values.map(value => `${key}=${encodeURIComponent(value)}`).join('&');
//     }
//     return `${key}=${encodeURIComponent(values)}`;
//   };

//   // Build query parts for each filter category
//   const propertyQueryParts = [
//     buildQuery('bedrooms', bedrooms),
//     buildQuery('bathrooms', bathrooms),
//     buildQuery('priceMin', priceMin),
//     buildQuery('priceMax', priceMax),
//     buildQuery('type_name', type_name),
//     buildQuery('furnishing', furnishing),
//     buildQuery('area', area),
//     buildQuery('construction_status', construction_status),
//     buildQuery('carpetArea', carpetArea),
//     buildQuery('superBuiltupArea', superBuiltupArea),
//     buildQuery('available', available),
//     buildQuery('category', category),
//     buildQuery('region', region),
//     buildQuery('possession', possession),
//     buildQuery('broker_status', broker_status),
//     buildQuery('purpose', purpose),
//     buildQuery('floor', floor),
//     buildQuery('propertyAmenities', propertyAmenities)
//   ];

//   const buildingQueryParts = [
//     buildQuery('buildingName', buildingName),
//     buildQuery('buildingType', buildingType),
//     buildQuery('developmentStatus', developmentStatus),
//     buildQuery('frontRoad', frontRoad),
//     buildQuery('parkingArea', parkingArea),
//     buildQuery('storey', storey),
//     buildQuery('buildingAge', buildingAge),
//     buildQuery('luda', luda),
//     buildQuery('buildingAmenities', buildingAmenities),
//     buildQuery('constructionTime', constructionTime),
//     buildQuery('lifts', lifts),
//     buildQuery('totalProperties', totalProperties),
//     buildQuery('numberOfFlatsAvailable', numberOfFlatsAvailable),
//     buildQuery('totalFloors', totalFloors)
//   ];

//   const projectQueryParts = [
//     buildQuery('projectName', projectName),
//     buildQuery('projectType', projectType),
//     buildQuery('projectStatus', projectStatus),
//     buildQuery('totalUnits', totalUnits),
//     buildQuery('totalTowers', totalTowers),
//     buildQuery('projectTotalFloors', projectTotalFloors),
//     buildQuery('launchDate', launchDate),
//     buildQuery('possessionDate', possessionDate),
//     buildQuery('projectAmenities', projectAmenities),
//     buildQuery('availabilityStatus', availabilityStatus)
//   ];

//   const commonQueryParts = [
//     buildQuery('latitude', latitude),
//     buildQuery('longitude', longitude),
//     buildQuery('radius', radius),
//     buildQuery('sort', sort),
//     buildQuery('city', city),
//     buildQuery('state', state),
//     buildQuery('pincode', pincode),
//     buildQuery('locality', locality),
//     buildQuery('builder', builder)
//   ];

//   // Combine all query parts and filter out empty strings
//   const queryString = [
//     ...propertyQueryParts,
//     ...buildingQueryParts,
//     ...projectQueryParts,
//     ...commonQueryParts
//   ].filter(Boolean).join('&');

//   console.log("queryString", queryString)
//   try {
//     const response = await axios.get(`${filter_base_url}?${queryString}`);
//     console.log("Filtered response:", response);
//     return {
//       properties: response.data.properties,
//       totalProperties: response.data.totalProperties,
//       filters: response.data.filters,
//       appliedFilters: response?.data?.appliedFilters
//     };
//   } catch (error) {
//     console.error("Error applying filters:", error);
//     throw error;
//   }
// };

// const applyFilter = async (filters) => {
//   console.log("Applying filters:", filters);

//   // Destructure filters from the FilterComponent state
//   const {
//     numeric: {
//       bedrooms,
//       bathrooms,
//       price: [priceMin, priceMax],
//       area: [areaMin, areaMax],
//       carpetArea: [carpetAreaMin, carpetAreaMax],
//       superBuiltupArea: [superBuiltupAreaMin, superBuiltupAreaMax],
//       floor: [floorMin, floorMax]
//     },
//     selects: {
//       type_name,
//       furnishing,
//       construction_status,
//       category,
//       region,
//       possession,
//       broker_status,
//       purpose
//     },
//     available,
//     propertyAmenities
//   } = filters;

//   // Helper function to build query parameters
//   const buildQuery = (key, values) => {
//     if (!values && values !== 0) return '';
//     if (Array.isArray(values)) {
//       return values.map(value => `${key}=${encodeURIComponent(value)}`).join('&');
//     }
//     return `${key}=${encodeURIComponent(values)}`;
//   };

//   // Build query parts for each filter category
//   const propertyQueryParts = [
//     buildQuery('bedrooms', bedrooms),
//     buildQuery('bathrooms', bathrooms),
//     buildQuery('priceMin', priceMin),
//     buildQuery('priceMax', priceMax),
//     buildQuery('type_name', type_name),
//     buildQuery('furnishing', furnishing),
//     buildQuery('areaMin', areaMin),
//     buildQuery('areaMax', areaMax),
//     buildQuery('carpetAreaMin', carpetAreaMin),
//     buildQuery('carpetAreaMax', carpetAreaMax),
//     buildQuery('superBuiltupAreaMin', superBuiltupAreaMin),
//     buildQuery('superBuiltupAreaMax', superBuiltupAreaMax),
//     buildQuery('floorMin', floorMin),
//     buildQuery('floorMax', floorMax),
//     buildQuery('available', available),
//     buildQuery('category', category),
//     buildQuery('region', region),
//     buildQuery('possession', possession),
//     buildQuery('broker_status', broker_status),
//     buildQuery('purpose', purpose),
//     buildQuery('propertyAmenities', propertyAmenities)
//   ];

//   // Combine all query parts and filter out empty strings
//   const queryString = propertyQueryParts.filter(Boolean).join('&');

//   console.log("queryString", queryString);

//   try {
//     const response = await axios.get(`${filter_base_url}?${queryString}`);
//     console.log("Filtered response:", response);
//     return {
//       properties: response.data.properties,
//       totalProperties: response.data.totalProperties,
//       filters: response.data.filters,
//       appliedFilters: response?.data?.appliedFilters
//     };
//   } catch (error) {
//     console.error("Error applying filters:", error);
//     throw error;
//   }
// };

const applyFilter = async (changedFilters) => {
  console.log("Applying filters:", changedFilters);
  

  // Initialize empty query parts array
  const propertyQueryParts = [];

  // Helper function to build query parameters
  const buildQuery = (key, values) => {
    if (values === null || values === undefined) return '';
    if (Array.isArray(values)) {
      return values.map(value => `${key}=${encodeURIComponent(value)}`).join('&');
    }
    return `${key}=${encodeURIComponent(values)}`;
  };

  // Handle numeric filters - prooperty
  if (changedFilters.numeric) {
    const numericFilters = changedFilters.numeric;

    // Handle individual numeric values (bedrooms, bathrooms)
    if (numericFilters.bedrooms) {
      propertyQueryParts.push(buildQuery('bedrooms', numericFilters.bedrooms));
    }
    if (numericFilters.bathrooms) {
      propertyQueryParts.push(buildQuery('bathrooms', numericFilters.bathrooms));
    }

    // Handle range values
    if (numericFilters.price) {
      propertyQueryParts.push(buildQuery('priceMin', numericFilters.price[0]));
      propertyQueryParts.push(buildQuery('priceMax', numericFilters.price[1]));
    }
    if (numericFilters.area) {
      propertyQueryParts.push(buildQuery('areaMin', numericFilters.area[0]));
      propertyQueryParts.push(buildQuery('areaMax', numericFilters.area[1]));
    }
    if (numericFilters.carpetArea) {
      propertyQueryParts.push(buildQuery('carpetAreaMin', numericFilters.carpetArea[0]));
      propertyQueryParts.push(buildQuery('carpetAreaMax', numericFilters.carpetArea[1]));
    }
    if (numericFilters.superBuiltupArea) {
      propertyQueryParts.push(buildQuery('superBuiltupAreaMin', numericFilters.superBuiltupArea[0]));
      propertyQueryParts.push(buildQuery('superBuiltupAreaMax', numericFilters.superBuiltupArea[1]));
    }
    if (numericFilters.floor) {
      propertyQueryParts.push(buildQuery('floorMin', numericFilters.floor[0]));
      propertyQueryParts.push(buildQuery('floorMax', numericFilters.floor[1]));
    }
  }

  // Handle select filters
  if (changedFilters.selects) {
    const selectFilters = changedFilters.selects;
    Object.entries(selectFilters).forEach(([key, value]) => {
      if (value && value.length > 0) {
        propertyQueryParts.push(buildQuery(key, value));
      }
    });
  }

  // Handle availability
  if (changedFilters.available !== null && changedFilters.available !== undefined) {
    propertyQueryParts.push(buildQuery('available', changedFilters.available));
  }

  // Handle amenities
  if (changedFilters.propertyAmenities && changedFilters.propertyAmenities.length > 0) {
    propertyQueryParts.push(buildQuery('propertyAmenities', changedFilters.propertyAmenities));
  }


  // project filter ***********************
  // Handle project-specific filters
  if (changedFilters.projectName) {
    propertyQueryParts.push(buildQuery('projectName', changedFilters.projectName));
  }
  if (changedFilters.projectType) {
    propertyQueryParts.push(buildQuery('projectType', changedFilters.projectType));
  }
  if (changedFilters.projectStatus) {
    propertyQueryParts.push(buildQuery('projectStatus', changedFilters.projectStatus));
  }
  if (changedFilters.availabilityStatus) {
    propertyQueryParts.push(buildQuery('availabilityStatus', changedFilters.availabilityStatus));
  }

  // Handle project numeric filters
  if (changedFilters.totalUnits) {
    propertyQueryParts.push(buildQuery('totalUnits', changedFilters.totalUnits));
  }
  if (changedFilters.totalTowers) {
    propertyQueryParts.push(buildQuery('totalTowers', changedFilters.totalTowers));
  }
  if (changedFilters.projectTotalFloors) {
    propertyQueryParts.push(buildQuery('projectTotalFloors', changedFilters.projectTotalFloors));
  }

  // Handle price range
  if (changedFilters.priceMin || changedFilters.priceMax) {
    if (changedFilters.priceMin) {
      propertyQueryParts.push(buildQuery('priceMin', changedFilters.priceMin));
    }
    if (changedFilters.priceMax) {
      propertyQueryParts.push(buildQuery('priceMax', changedFilters.priceMax));
    }
  }

  // Handle location filters
  if (changedFilters.city) {
    propertyQueryParts.push(buildQuery('city', changedFilters.city));
  }
  if (changedFilters.state) {
    propertyQueryParts.push(buildQuery('state', changedFilters.state));
  }

  // Handle project amenities
  if (changedFilters.projectAmenities) {
    propertyQueryParts.push(buildQuery('projectAmenities', changedFilters.projectAmenities));
  }

  // Combine all query parts and filter out empty strings
  const queryString = propertyQueryParts.filter(Boolean).join('&');

  console.log("queryString", queryString);

  try {
    const response = await axios.get(`${filter_base_url}?${queryString}`);
    console.log("Filtered response:", response);
    return {
      properties: response.data.properties,
      totalProperties: response.data.totalProperties,
      filters: response.data.filters,
      appliedFilters: response?.data?.appliedFilters
    };
  } catch (error) {
    console.error("Error applying filters:", error);
    throw error;
  }
};

const mapService = {
  getMapFeed, getFilterProperties, getAllProperties, getAllProjects, getAllBuildings, applyFilter
};

export default mapService;
