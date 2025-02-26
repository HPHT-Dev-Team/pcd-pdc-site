'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import imageLoader from '@/utils/image-loader';

export default function ManufacturingProcessPage() {
  const processes = [
    {
      title: 'Diamond Synthesis',
      description: 'State-of-the-art HPHT technology for synthetic diamond production.',
      image: '/images/hpht_products/manufacturing_process.jpg',
    },
    {
      title: 'Tool Manufacturing',
      description: 'Advanced manufacturing processes for high-precision diamond tools.',
      image: '/images/hpht_products/process.png',
    },
    {
      title: 'Quality Testing',
      description: 'Rigorous testing and inspection at every stage of production.',
      image: '/images/hpht_products/quality_control.jpg',
    },
  ];

  const features = [
    {
      title: 'Advanced Technology',
      description: 'Using the latest HPHT technology and manufacturing equipment.',
    },
    {
      title: 'Quality Control',
      description: 'Comprehensive quality control measures throughout the process.',
    },
    {
      title: 'Efficiency',
      description: 'Optimized processes for consistent, high-quality production.',
    },
    {
      title: 'Customization',
      description: 'Flexible manufacturing capabilities for custom requirements.',
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
              Manufacturing Process
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our advanced manufacturing processes ensure the highest quality diamond products
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-16">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={process.image}
                    alt={process.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loader={imageLoader}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                  <p className="mt-2 text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Manufacturing Capabilities
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Manufacturing Excellence
            </h2>
            <p className="text-gray-600 mb-4">
              Our manufacturing facility is equipped with state-of-the-art technology and operated by
              highly skilled professionals. We maintain strict quality control measures throughout
              the entire manufacturing process to ensure consistent, high-quality products.
            </p>
            <p className="text-gray-600 mb-4">
              From raw material selection to final product inspection, every step is carefully
              monitored and documented. Our advanced HPHT technology allows us to produce synthetic
              diamonds with precise specifications, while our tool manufacturing processes ensure
              optimal performance and durability.
            </p>
            <p className="text-gray-600">
              We continuously invest in research and development to improve our manufacturing
              processes and develop innovative solutions for our customers' needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 