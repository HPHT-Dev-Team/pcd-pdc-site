'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { productCategories } from '@/config/products';
import imageLoader from '@/utils/image-loader';
import { getBasePath } from '@/config/site';

const basePath = getBasePath();

const categories = Object.entries(productCategories).map(([key, category]) => ({
  name: category.title,
  description: category.description,
  href: `/products/${key}`,
  imageSrc: category.imageSrc,
  category: 'Industrial Products',
  products: category.products,
}));

const LoadingGrid = () => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200" />
        <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />
        <div className="mt-2 h-4 bg-gray-200 rounded w-1/2" />
      </div>
    ))}
  </div>
);

// Lazy load the category grid
const ProductCategoryGrid = dynamic(() => import('@/components/products/ProductCategoryGrid'), {
  loading: LoadingGrid,
});

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900">Products</span>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our comprehensive range of diamond products and tools
            </p>
          </div>

          <Suspense fallback={<LoadingGrid />}>
            <ProductCategoryGrid categories={categories} />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
} 