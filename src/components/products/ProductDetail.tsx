'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product, CategoryData } from '@/types';
import imageLoader from '@/utils/image-loader';

interface ProductDetailProps {
  product: Product | CategoryData;
  showBackLink?: boolean;
}

function isProduct(item: Product | CategoryData): item is Product {
  return (
    'name' in item &&
    Array.isArray((item as Product).features) &&
    Array.isArray((item as Product).applications)
  );
}

export default function ProductDetail({ product, showBackLink = true }: ProductDetailProps) {
  const title = isProduct(product) ? product.name : product.title;
  const productFeatures = isProduct(product) && product.features ? product.features : [];
  const productApplications = isProduct(product) && product.applications ? product.applications : [];
  const specifications = isProduct(product) ? product.specifications : undefined;

  return (
    <div className="bg-white">
      {showBackLink && (
        <div className="mb-8">
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <span>← Back to Products</span>
          </Link>
        </div>
      )}

      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image */}
          <div className="aspect-h-1 aspect-w-1 w-full">
            <Image
              src={product.imageSrc}
              alt={title}
              className="h-full w-full object-cover object-center sm:rounded-lg"
              width={600}
              height={600}
              loader={imageLoader}
              priority
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            <div className="mt-3">
              <p className="text-lg text-gray-500">{product.description}</p>
            </div>

            {productFeatures.length > 0 && (
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Features</h2>
                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {productFeatures.map((feature, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {productApplications.length > 0 && (
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Applications</h2>
                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {productApplications.map((application, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {specifications && Object.keys(specifications).length > 0 && (
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Specifications</h2>
                <div className="mt-4">
                  <dl className="grid grid-cols-1 gap-4">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="border-t border-gray-200 pt-4">
                        <dt className="font-medium text-gray-900">{key}</dt>
                        <dd className="mt-2 text-sm text-gray-500">{value as string}</dd>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 