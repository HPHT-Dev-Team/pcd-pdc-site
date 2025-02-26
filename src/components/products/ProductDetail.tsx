'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product } from '@/types';
import imageLoader from '@/utils/image-loader';

interface ProductDetailProps {
  product: Product;
  showBackLink?: boolean;
}

export default function ProductDetail({ product, showBackLink = true }: ProductDetailProps) {
  return (
    <div className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image */}
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc}
                alt={product.name}
                className="h-full w-full object-cover object-center"
                width={800}
                height={800}
                priority
                loader={imageLoader}
              />
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              <div className="mt-3">
                <p className="text-lg text-gray-500">{product.description}</p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Features</h3>
                  <div className="mt-4">
                    <ul className="list-disc space-y-2 pl-4 text-sm">
                      {product.features.map((feature) => (
                        <li key={feature} className="text-gray-500">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {product.applications && product.applications.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Applications</h3>
                  <div className="mt-4">
                    <ul className="list-disc space-y-2 pl-4 text-sm">
                      {product.applications.map((application) => (
                        <li key={application} className="text-gray-500">
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
                  <div className="mt-4">
                    <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="border-t border-gray-200 pt-4">
                          <dt className="font-medium text-gray-900">{key}</dt>
                          <dd className="mt-2 text-sm text-gray-500">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}

              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Request Quote
                </Link>
                {showBackLink && (
                  <Link
                    href="/products"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Back to Products
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 