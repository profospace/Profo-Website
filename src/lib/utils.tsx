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
