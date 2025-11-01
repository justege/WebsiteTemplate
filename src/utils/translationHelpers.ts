/**
 * Safely retrieves an array from translation with fallback to empty array
 * Prevents "t(...).map is not a function" errors
 */
export const getSafeTranslationArray = (translationResult: any): any[] => {
  return Array.isArray(translationResult) ? translationResult : [];
};

/**
 * Type-safe wrapper for translation arrays
 */
export const getTranslationArray = <T = string>(translationResult: any): T[] => {
  return Array.isArray(translationResult) ? translationResult : [];
}; 