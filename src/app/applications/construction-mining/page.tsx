'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ConstructionMiningPage() {
  const applications = [
    {
      title: 'Road Milling',
      description: 'High-performance PCD tools for road construction and maintenance.',
      image: '/images/pcd-pdc/road-milling.jpg',
      productLink: '/products/pcd-pdc/road-milling',
    },
    {
      title: 'Mining Operations',
      description: 'Durable PCD and PDC tools for mining and excavation.',
      image: '/images/hpht_products/minning.jpg',
      productLink: '/products/pcd-pdc/domed',
    },
    {
      title: 'Construction',
      description: 'Specialized tools for construction and infrastructure development.',
      image: '/images/hpht_products/diamond_drilling.jpg',
      productLink: '/products/pcd-pdc/conical',
    },
  ];

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
              Construction & Mining Applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our range of high-performance tools for construction and mining applications
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{app.title}</h3>
                  <p className="mt-2 text-gray-600">{app.description}</p>
                  <Link
                    href={app.productLink}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-500"
                  >
                    View Products →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Enhanced Durability',
                  description: 'Tools designed to withstand extreme conditions and heavy use.',
                },
                {
                  title: 'Improved Efficiency',
                  description: 'Optimized cutting and drilling performance for faster operation.',
                },
                {
                  title: 'Cost-Effective',
                  description: 'Long tool life and reduced maintenance requirements.',
                },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 