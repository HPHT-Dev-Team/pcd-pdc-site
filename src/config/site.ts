/**
 * Site configuration utilities
 */

/**
 * Returns the base path for the application
 * This is used for handling GitHub Pages deployment path
 */
export const getBasePath = (): string => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

/**
 * Returns the full URL for a given path, including the base path
 */
export const getFullPath = (path: string): string => {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}; 