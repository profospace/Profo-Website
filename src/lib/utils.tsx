export const formatPrice = (price: number | undefined): string => {
  if (!price || isNaN(price)) return "N/A";

  if (price >= 1_00_00_000) {
    return (price / 1_00_00_000).toFixed(2) + " Cr"; // Crore
  } else if (price >= 1_00_000) {
    return (price / 1_00_000).toFixed(2) + " Lac"; // Lakh
  }

  return "₹" + price.toLocaleString("en-IN") ; // Default formatting
};

export const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};


/**
 * Formats a numeric value as currency
 * @param {number} value - The value to format
 * @param {string} currency - The currency code (default: 'INR')
 * @param {string} locale - The locale to use for formatting (default: 'en-IN')
 * @returns {string} - The formatted currency string
 */
export const formatCurrency = (value, currency = 'INR', locale = 'en-IN') => {
  if (value === undefined || value === null) return '';

  // Handle string numbers
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  // Check if valid number
  if (isNaN(numericValue)) return '';

  try {
    // For INR, use Indian formatting (lakhs, crores)
    if (currency === 'INR') {
      if (numericValue >= 10000000) { // 1 crore or more
        return `₹ ${(numericValue / 10000000).toFixed(2)} Cr`;
      } else if (numericValue >= 100000) { // 1 lakh or more
        return `₹ ${(numericValue / 100000).toFixed(2)} L`;
      } else {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency,
          maximumFractionDigits: 0
        }).format(numericValue);
      }
    }

    // For other currencies use standard formatting
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0
    }).format(numericValue);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return `${currency} ${numericValue}`;
  }
};

/**
 * Formats an area value with appropriate unit
 * @param {number} value - The area value to format
 * @param {string} unit - The area unit (default: 'sqft')
 * @param {boolean} compact - Whether to use compact format (default: false)
 * @returns {string} - The formatted area string
 */
export const formatArea = (value, unit = 'sqft', compact = false) => {
  if (value === undefined || value === null) return '';

  // Handle string numbers
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  // Check if valid number
  if (isNaN(numericValue)) return '';

  // Format the number with commas
  const formattedNumber = new Intl.NumberFormat().format(numericValue);

  // Standardize unit display
  let displayUnit = unit.toLowerCase();

  // Common unit conversions and formatting
  switch (displayUnit) {
    case 'sqft':
    case 'sq ft':
    case 'sq.ft':
    case 'sq. ft.':
      displayUnit = compact ? 'sq.ft' : 'sq. ft.';
      break;
    case 'sqm':
    case 'sq m':
    case 'sq.m':
    case 'sq. m.':
      displayUnit = compact ? 'sq.m' : 'sq. meters';
      break;
    case 'acre':
    case 'acres':
      displayUnit = numericValue === 1 ? 'acre' : 'acres';
      break;
    default:
      // Keep as is
      break;
  }

  return `${formattedNumber} ${displayUnit}`;
};

/**
 * Formats a date string to a readable format
 * @param {string|Date} dateString - The date string or Date object to format
 * @param {string} format - The format to use (short, medium, long, full)
 * @returns {string} - The formatted date string
 */
export const formatDate = (dateString, format = 'medium') => {
  if (!dateString) return '';

  try {
    const date = new Date(dateString);

    // Check if valid date
    if (isNaN(date.getTime())) return '';

    const options = {
      year: 'numeric',
      month: format === 'short' ? 'short' : 'long',
      day: 'numeric'
    };

    if (format === 'full' || format === 'long') {
      options.weekday = format === 'full' ? 'long' : 'short';
    }

    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};