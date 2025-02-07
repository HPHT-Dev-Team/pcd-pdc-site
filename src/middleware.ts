import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Map of old URLs to new URLs
const redirects: Record<string, string> = {
  // Product redirects
  '/products/pcd-tools': '/products/pcd-pdc',
  '/products/pdc-tools': '/products/pcd-pdc',
  '/products/carbide-products': '/products/carbide',
  '/products/diamond-powder': '/products/powders',
  '/products/tungsten-carbide': '/products/powders/tungsten-carbide',
  '/products/diamond': '/products/diamonds',
  '/products/synthetic-diamond': '/products/diamonds/synthetic',
  '/products/natural-diamond': '/products/diamonds/natural',
  '/products/hpht': '/products/hpht-products',
  
  // Company page redirects
  '/company/about': '/about',
  '/company/contact': '/contact',
  '/company/privacy': '/privacy',
  
  // Application redirects
  '/applications/industrial': '/applications/construction-mining',
  '/applications/electronic': '/applications/ebl',
  
  // Technology redirects
  '/technology': '/technology/manufacturing-process',
  '/manufacturing': '/technology/manufacturing-process',
  '/research': '/technology/research-development',
  '/quality': '/technology/quality-control',
  
  // Legacy URLs
  '/products.html': '/products',
  '/about.html': '/about',
  '/contact.html': '/contact',
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the current path is in our redirects map
  if (path in redirects) {
    const newUrl = new URL(redirects[path], request.url);
    return NextResponse.redirect(newUrl);
  }

  // Handle category pages
  if (path.startsWith('/products/')) {
    const validCategories = [
      'pcd-pdc',
      'diamonds',
      'powders',
      'carbide',
      'hpht-products',
      'industrial-materials',
    ];

    const category = path.split('/')[2]; // Get the category from the URL
    
    // If it's a direct category access and not a valid category, redirect to products page
    if (category && !validCategories.includes(category) && path.split('/').length === 3) {
      const newUrl = new URL('/products', request.url);
      return NextResponse.redirect(newUrl);
    }
  }

  return NextResponse.next();
} 
