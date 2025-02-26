'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CategoryData } from '@/types';
import imageLoader from '@/utils/image-loader';

export default function CategoryPageClient({
  categoryData,
  categoryTitle,
}: {
  categoryData: CategoryData;
  categoryTitle: string;
}) {
  return (
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
            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </li>
          <li>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
          </li>
          <li>
            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </li>
          <li>
            <span className="text-gray-900">{categoryTitle}</span>
          </li>
        </ol>
      </nav>

      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {categoryTitle}
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          {categoryData.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {categoryData.products.map((product, index) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-2xl bg-gray-200">
              <Image
                src={product.imageSrc}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
                width={500}
                height={500}
                loader={imageLoader}
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                <Link href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-3 text-base text-gray-500 line-clamp-3">
                {product.description}
              </p>
              {product.features && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Key Features</h4>
                  <ul className="mt-2 space-y-1">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  {product.features.length > 3 && (
                    <p className="mt-2 text-sm text-blue-600">
                      +{product.features.length - 3} more features
                    </p>
                  )}
                </div>
              )}
              <div className="mt-6 flex items-center gap-x-3">
                <Link
                  href={product.href}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                >
                  View Details
                  <span className="absolute inset-0" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 