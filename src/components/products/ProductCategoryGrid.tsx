'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import imageLoader from '@/utils/image-loader';
import type { ProductData } from '@/types';

interface Category {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  category: string;
  products: ProductData[];
}

interface ProductCategoryGridProps {
  categories: Category[];
}

const ProductCategoryGrid = ({ categories }: ProductCategoryGridProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={category.imageSrc}
              alt={category.name}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={500}
              height={500}
              loader={imageLoader}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-500">{category.category}</span>
            <h3 className="text-lg font-medium text-gray-900">
              <Link href={category.href} className="hover:text-blue-600">
                <span aria-hidden="true" className="absolute inset-0" />
                {category.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{category.description}</p>
            <div className="mt-4 space-y-1">
              {category.products.slice(0, 3).map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block text-sm text-gray-600 hover:text-blue-600"
                >
                  • {product.name}
                </Link>
              ))}
              {category.products.length > 3 && (
                <Link
                  href={category.href}
                  className="block text-sm text-blue-600 hover:text-blue-500"
                >
                  View all {category.products.length} products →
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCategoryGrid; 