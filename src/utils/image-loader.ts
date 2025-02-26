import type { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // If the src is an external URL, return it as is
  if (src.startsWith('http')) {
    return src;
  }

  // Remove any leading slashes from src and basePath
  const cleanSrc = src.replace(/^\/+/, '');
  const cleanBasePath = basePath.replace(/^\/+/, '').replace(/\/+$/, '');

  // If the src already includes the base path, return it as is
  if (src.startsWith(cleanBasePath)) {
    return src;
  }

  // If the src starts with "images/", ensure it's prefixed with the base path
  if (cleanSrc.startsWith('images/')) {
    return cleanBasePath ? `/${cleanBasePath}/${cleanSrc}` : `/${cleanSrc}`;
  }

  // For other paths, just combine them with a single slash
  return cleanBasePath ? `/${cleanBasePath}/${cleanSrc}` : `/${cleanSrc}`;
}