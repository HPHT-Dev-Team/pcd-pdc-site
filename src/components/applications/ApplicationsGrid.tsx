'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import imageLoader from '@/utils/image-loader';
import { getBasePath } from '@/config/site';

const basePath = getBasePath();

const applications = [
  {
    title: 'Electronic Beam Lithography',
    description: 'Advanced diamond solutions for electronic beam lithography and semiconductor manufacturing.',
    href: '/applications/ebl',
    image: `${basePath}/images/applications/ebl.jpg`,
  },
  {
    title: 'Oil & Gas',
    description: 'High-performance diamond tools for drilling and exploration in the oil and gas industry.',
    href: '/applications/oil-gas',
    image: `${basePath}/images/applications/oil-gas.jpg`,
  },
  {
    title: 'Construction',
    description: 'Durable diamond tools for cutting, drilling, and grinding in construction applications.',
    href: '/applications/construction',
    image: `${basePath}/images/applications/construction.jpg`,
  },
  {
    title: 'Mining',
    description: 'Robust diamond tools for mining operations and mineral extraction.',
    href: '/applications/mining',
    image: `${basePath}/images/applications/mining.jpg`,
  },
  {
    title: 'Automotive',
    description: 'Precision diamond tools for automotive manufacturing and component processing.',
    href: '/applications/automotive',
    image: `${basePath}/images/applications/automotive.jpg`,
  },
  {
    title: 'Aerospace',
    description: 'High-precision diamond tools for aerospace component manufacturing.',
    href: '/applications/aerospace',
    image: `${basePath}/images/applications/aerospace.jpg`,
  },
];

export default function ApplicationsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {applications.map((app, index) => (
        <motion.div
          key={app.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={app.image}
              alt={app.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loader={imageLoader}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900">
              <Link href={app.href} className="hover:text-blue-600">
                <span aria-hidden="true" className="absolute inset-0" />
                {app.title}
              </Link>
            </h3>
            <p className="mt-2 text-gray-600">{app.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 