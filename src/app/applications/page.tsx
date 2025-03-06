'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

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

// Lazy load the applications grid
const ApplicationsGrid = dynamic(() => import('@/components/applications/ApplicationsGrid'), {
  loading: LoadingGrid,
});

export default function ApplicationsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how our diamond products are used across various industries
            </p>
          </div>

          <Suspense fallback={<LoadingGrid />}>
            <ApplicationsGrid />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
} 