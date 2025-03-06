import { getBasePath } from '@/config/site';
import type { ImageLoaderProps } from 'next/image';

const imageLoader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
  const basePath = getBasePath();
  
  // If src already includes the base path, don't add it again
  const url = src.startsWith(basePath) ? src : `${basePath}${src}`;
  
  // For static export, we don't need to add query parameters
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_BASE_PATH) {
    return url;
  }
  
  // For development, add width and quality parameters
  const params = new URLSearchParams();
  
  if (width) {
    params.append('w', width.toString());
  }
  if (quality) {
    params.append('q', quality.toString());
  }

  const queryString = params.toString();
  return queryString ? `${url}?${queryString}` : url;
};

export default imageLoader;