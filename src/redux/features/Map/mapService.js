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

// const applyFilter = async (changedFilters) => {
//   console.log("Applying filters:", changedFilters);
  

//   // Initialize empty query parts array
//   const propertyQueryParts = [];

//   // Helper function to build query parameters
//   const buildQuery = (key, values) => {
//     if (values === null || values === undefined) return '';
//     if (Array.isArray(values)) {
//       return values.map(value => `${key}=${encodeURIComponent(value)}`).join('&');
//     }
//     return `${key}=${encodeURIComponent(values)}`;
//   };

//   // Handle numeric filters - prooperty
//   if (changedFilters.numeric) {
//     const numericFilters = changedFilters.numeric;

//     // Handle individual numeric values (bedrooms, bathrooms)
//     if (numericFilters.bedrooms) {
//       propertyQueryParts.push(buildQuery('bedrooms', numericFilters.bedrooms));
//     }
//     if (numericFilters.bathrooms) {
//       propertyQueryParts.push(buildQuery('bathrooms', numericFilters.bathrooms));
//     }

//     // Handle range values
//     if (numericFilters.price) {
//       propertyQueryParts.push(buildQuery('priceMin', numericFilters.price[0]));
//       propertyQueryParts.push(buildQuery('priceMax', numericFilters.price[1]));
//     }
//     if (numericFilters.area) {
//       propertyQueryParts.push(buildQuery('areaMin', numericFilters.area[0]));
//       propertyQueryParts.push(buildQuery('areaMax', numericFilters.area[1]));
//     }
//     if (numericFilters.carpetArea) {
//       propertyQueryParts.push(buildQuery('carpetAreaMin', numericFilters.carpetArea[0]));
//       propertyQueryParts.push(buildQuery('carpetAreaMax', numericFilters.carpetArea[1]));
//     }
//     if (numericFilters.superBuiltupArea) {
//       propertyQueryParts.push(buildQuery('superBuiltupAreaMin', numericFilters.superBuiltupArea[0]));
//       propertyQueryParts.push(buildQuery('superBuiltupAreaMax', numericFilters.superBuiltupArea[1]));
//     }
//     if (numericFilters.floor) {
//       propertyQueryParts.push(buildQuery('floorMin', numericFilters.floor[0]));
//       propertyQueryParts.push(buildQuery('floorMax', numericFilters.floor[1]));
//     }
//   }

//   // Handle select filters
//   if (changedFilters.selects) {
//     const selectFilters = changedFilters.selects;
//     Object.entries(selectFilters).forEach(([key, value]) => {
//       if (value && value.length > 0) {
//         propertyQueryParts.push(buildQuery(key, value));
//       }
//     });
//   }

//   // Handle availability
//   if (changedFilters.available !== null && changedFilters.available !== undefined) {
//     propertyQueryParts.push(buildQuery('available', changedFilters.available));
//   }

//   // Handle amenities
//   if (changedFilters.propertyAmenities && changedFilters.propertyAmenities.length > 0) {
//     propertyQueryParts.push(buildQuery('propertyAmenities', changedFilters.propertyAmenities));
//   }


//   // project filter ***********************
//   // Handle project-specific filters
//   if (changedFilters.projectName) {
//     propertyQueryParts.push(buildQuery('projectName', changedFilters.projectName));
//   }
//   if (changedFilters.projectType) {
//     propertyQueryParts.push(buildQuery('projectType', changedFilters.projectType[0]));
//   }
//   if (changedFilters.projectStatus) {
//     propertyQueryParts.push(buildQuery('projectStatus', changedFilters.projectStatus));
//   }
//   if (changedFilters.availabilityStatus) {
//     propertyQueryParts.push(buildQuery('availabilityStatus', changedFilters.availabilityStatus));
//   }

//   // Handle project numeric filters
//   if (changedFilters.totalUnits) {
//     propertyQueryParts.push(buildQuery('totalUnits', changedFilters.totalUnits));
//   }
//   if (changedFilters.totalTowers) {
//     propertyQueryParts.push(buildQuery('totalTowers', changedFilters.totalTowers));
//   }
//   if (changedFilters.projectTotalFloors) {
//     propertyQueryParts.push(buildQuery('projectTotalFloors', changedFilters.projectTotalFloors));
//   }

//   // Handle price range
//   if (changedFilters.priceMin || changedFilters.priceMax) {
//     if (changedFilters.priceMin) {
//       propertyQueryParts.push(buildQuery('priceMin', changedFilters.priceMin));
//     }
//     if (changedFilters.priceMax) {
//       propertyQueryParts.push(buildQuery('priceMax', changedFilters.priceMax));
//     }
//   }

//   // Handle location filters
//   if (changedFilters.city) {
//     propertyQueryParts.push(buildQuery('city', changedFilters.city));
//   }
//   if (changedFilters.state) {
//     propertyQueryParts.push(buildQuery('state', changedFilters.state));
//   }

//   // Handle project amenities
//   if (changedFilters.projectAmenities) {
//     propertyQueryParts.push(buildQuery('projectAmenities', changedFilters.projectAmenities));
//   }

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

// const applyFilter = async (changedFilters) => {
//   console.log("Applying filters:", changedFilters);

//   // Initialize empty query parts array
//   const queryParts = [];

//   // Helper function to build query parameters
//   const buildQuery = (key, values) => {
//     if (values === null || values === undefined) return '';
//     if (Array.isArray(values)) {
//       return values.map(value => `${key}=${encodeURIComponent(value)}`).join('&');
//     }
//     return `${key}=${encodeURIComponent(values)}`;
//   };

//   // Handle numeric filters - property
//   if (changedFilters.numeric) {
//     const numericFilters = changedFilters.numeric;

//     // Handle individual numeric values (bedrooms, bathrooms)
//     if (numericFilters.bedrooms) {
//       queryParts.push(buildQuery('bedrooms', numericFilters.bedrooms));
//     }
//     if (numericFilters.bathrooms) {
//       queryParts.push(buildQuery('bathrooms', numericFilters.bathrooms));
//     }

//     // Handle range values
//     if (numericFilters.price) {
//       queryParts.push(buildQuery('priceMin', numericFilters.price[0]));
//       queryParts.push(buildQuery('priceMax', numericFilters.price[1]));
//     }
//     if (numericFilters.area) {
//       queryParts.push(buildQuery('area', numericFilters.area[1])); // Use max value
//     }
//     if (numericFilters.carpetArea) {
//       queryParts.push(buildQuery('carpetArea', numericFilters.carpetArea[1])); // Use max value
//     }
//     if (numericFilters.superBuiltupArea) {
//       queryParts.push(buildQuery('superBuiltupArea', numericFilters.superBuiltupArea[1])); // Use max value
//     }
//     if (numericFilters.floor) {
//       queryParts.push(buildQuery('floorMin', numericFilters.floor[0]));
//       queryParts.push(buildQuery('floorMax', numericFilters.floor[1]));
//     }
//   }

//   // Handle select filters
//   if (changedFilters.selects) {
//     const filters = changedFilters.selects;

//     // Handle all types of filters
//     Object.entries(filters).forEach(([key, value]) => {
//       // Skip empty values
//       if (!value || (Array.isArray(value) && value.length === 0)) return;

//       // Handle special cases for ranges
//       if (key === 'priceMin' || key === 'priceMax') {
//         queryParts.push(buildQuery(key, value));
//       }
//       // Handle arrays
//       else if (Array.isArray(value)) {
//         // Check if it's a range array (has exactly 2 numbers)
//         if (value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number') {
//           // Handle range values based on the key
//           switch (key) {
//             case 'totalUnits':
//               queryParts.push(buildQuery('totalUnits', value[1])); // Use max value
//               break;
//             case 'totalTowers':
//               queryParts.push(buildQuery('totalTowers', value[1])); // Use max value
//               break;
//             case 'totalFloors':
//               queryParts.push(buildQuery('projectTotalFloors', value[1])); // Use max value
//               break;
//             default:
//               // For other range values, use min/max pattern
//               queryParts.push(buildQuery(`${key}Min`, value[0]));
//               queryParts.push(buildQuery(`${key}Max`, value[1]));
//           }
//         } else {
//           // Handle regular arrays (like amenities, types, etc.)
//           queryParts.push(buildQuery(key, value));
//         }
//       }
//       // Handle single values
//       else {
//         queryParts.push(buildQuery(key, value));
//       }
//     });
//   }

//   // Handle availability
//   if (changedFilters.available !== null && changedFilters.available !== undefined) {
//     queryParts.push(buildQuery('available', changedFilters.available));
//   }

//   // Handle property amenities
//   if (changedFilters.propertyAmenities && changedFilters.propertyAmenities.length > 0) {
//     queryParts.push(buildQuery('propertyAmenities', changedFilters.propertyAmenities));
//   }

//   // Handle project amenities
//   if (changedFilters.projectAmenities && changedFilters.projectAmenities.length > 0) {
//     queryParts.push(buildQuery('projectAmenities', changedFilters.projectAmenities));
//   }

//   // Additional project filters
//   if (changedFilters.projectName) {
//     queryParts.push(buildQuery('projectName', changedFilters.projectName));
//   }
//   if (changedFilters.projectType && changedFilters.projectType.length > 0) {
//     queryParts.push(buildQuery('projectType', changedFilters.projectType));
//   }
//   if (changedFilters.projectStatus && changedFilters.projectStatus.length > 0) {
//     queryParts.push(buildQuery('projectStatus', changedFilters.projectStatus));
//   }
//   if (changedFilters.availabilityStatus && changedFilters.availabilityStatus.length > 0) {
//     queryParts.push(buildQuery('availabilityStatus', changedFilters.availabilityStatus));
//   }

//   // Handle location filters
//   if (changedFilters.city && changedFilters.city.length > 0) {
//     queryParts.push(buildQuery('city', changedFilters.city));
//   }
//   if (changedFilters.state && changedFilters.state.length > 0) {
//     queryParts.push(buildQuery('state', changedFilters.state));
//   }

//   // Combine all query parts and filter out empty strings
//   const queryString = queryParts.filter(Boolean).join('&');

//   console.log("Final queryString:", queryString);

//   try {
//     const response = await axios.get(`${filter_base_url}?${queryString}`);
//     console.log("Filtered response:", response);
//     return {
//       properties: response.data.properties,
//       totalProperties: response.data.totalProperties,
//       filters: response.data.filters,
//       appliedFilters: response.data.appliedFilters
//     };
//   } catch (error) {
//     console.error("Error applying filters:", error);
//     throw error;
//   }
// };

// const applyFilter = async (queryString) => {
//   console.log('🔍 Starting filter application with query:', queryString);

//   try {
//     // Log the complete URL being called
//     const url = `${filter_base_url}?${queryString}`;
//     console.log('📡 Making API request to:', url);

//     // Make the API call
//     const response = await axios.get(url);

//     // Log successful response data
//     console.log('✅ Filter API Response:', {
//       totalProperties: response.data.totalProperties,
//       propertiesCount: response.data.properties.length,
//       filters: response.data.filters,
//       appliedFilters: response.data.appliedFilters
//     });

//     // Check if response contains expected data
//     if (!response.data) {
//       throw new Error('No data received from filter API');
//     }

//     // Format and return the response
//     return {
//       properties: response.data.properties || [],
//       totalProperties: response.data.totalProperties || 0,
//       filters: response.data.filters || {},
//       appliedFilters: response.data.appliedFilters || {}
//     };

//   } catch (error) {
//     // Enhanced error logging
//     console.error('❌ Filter API Error:', {
//       message: error.message,
//       status: error.response?.status,
//       statusText: error.response?.statusText,
//       data: error.response?.data
//     });

//     // If it's an axios error with response
//     if (error.response) {
//       console.error('📋 Detailed Error Data:', error.response.data);
//       throw {
//         message: error.response.data.message || 'Failed to apply filters',
//         status: error.response.status,
//         data: error.response.data
//       };
//     }

//     // For network errors or other issues
//     throw {
//       message: 'Failed to connect to filter service',
//       originalError: error.message
//     };
//   }
// };

// const buildQueryString = (filters) => {
//   const queryParams = new URLSearchParams();

//   // Property Filters
//   if (filters.price?.min) queryParams.append('priceMin', filters.price.min);
//   if (filters.price?.max) queryParams.append('priceMax', filters.price.max);
//   if (filters.bedrooms) queryParams.append('bedrooms', filters.bedrooms);
//   if (filters.bathrooms) queryParams.append('bathrooms', filters.bathrooms);
//   if (filters.purpose) queryParams.append('purpose', filters.purpose);
//   if (filters.propertyType) {
//     if (Array.isArray(filters.propertyType)) {
//       filters.propertyType.forEach(type => queryParams.append('type_name[]', type));
//     } else {
//       queryParams.append('type_name', filters.propertyType);
//     }
//   }
//   if (filters.amenities) {
//     if (Array.isArray(filters.amenities)) {
//       filters.amenities.forEach(amenity =>
//         queryParams.append('propertyAmenities[]', amenity)
//       );
//     }
//   }

//   // Project Filters
//   if (filters.projectType) {
//     if (Array.isArray(filters.projectType)) {
//       filters.projectType.forEach(type =>
//         queryParams.append('projectType[]', type)
//       );
//     }
//   }
//   if (filters.projectStatus) queryParams.append('projectStatus', filters.projectStatus);
//   if (filters.projectAmenities) {
//     if (Array.isArray(filters.projectAmenities)) {
//       filters.projectAmenities.forEach(amenity =>
//         queryParams.append('projectAmenities[]', amenity)
//       );
//     }
//   }
//   if (filters.state) queryParams.append('state', filters.state);

//   return queryParams.toString();
// };

const buildQueryString = (filters) => {
  const queryParams = new URLSearchParams();

  // Add vanilla parameter if present
  if (filters.vanilla) queryParams.append('vanilla', filters.vanilla);
  // Property Filters
  if (filters.price?.min) queryParams.append('priceMin', filters.price.min);
  if (filters.price?.max) queryParams.append('priceMax', filters.price.max);
  if (filters.bedrooms) queryParams.append('bedrooms', filters.bedrooms);
  if (filters.bathrooms) queryParams.append('bathrooms', filters.bathrooms);
  if (filters.purpose) queryParams.append('purpose', filters.purpose);
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
    const url = `${filter_base_url}?${queryString}`;
    console.log("url" , url)

    console.log('📡 Making API request with combined filters to:', url);

    const response = await axios.get(url);

    console.log("response", response)

    // console.log('✅ Combined Filter Response:', {
    //   totalProperties: response.data.totalProperties,
    //   propertiesCount: response.data.properties.length,
    //   appliedFilters: filters
    // });

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
