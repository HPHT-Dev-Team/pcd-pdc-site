'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import imageLoader from '@/utils/image-loader';

export default function EBLPage() {
  const applications = [
    {
      title: 'Diamond Tools for EBL',
      description: 'Precision diamond tools for electronic beam lithography applications.',
      image: '/images/hpht_products/diamond_spotter_spec_1.png',
      productLink: '/products/diamonds/synthetic',
    },
    {
      title: 'Synthetic Diamond Components',
      description: 'High-quality synthetic diamonds for electronic applications.',
      image: '/images/hpht_products/diamond_spotter_spec_2.png',
      productLink: '/products/diamonds/synthetic',
    },
    {
      title: 'Diamond Powders',
      description: 'Ultra-fine diamond powders for precision applications.',
      image: '/images/hpht_products/diamond_spotter_spec_3.png',
      productLink: '/products/powders/synthetic',
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
              Electronic Beam Lithography Applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Advanced diamond solutions for electronic beam lithography and semiconductor manufacturing
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
                    loader={imageLoader}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Precision',
                  description: 'Ultra-high precision with nanometer-scale accuracy.',
                },
                {
                  title: 'Purity',
                  description: 'Exceptional purity levels suitable for semiconductor applications.',
                },
                {
                  title: 'Consistency',
                  description: 'Uniform properties and reliable performance.',
                },
              ].map((spec) => (
                <div key={spec.title} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                  <p className="mt-2 text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 