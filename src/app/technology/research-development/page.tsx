'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import imageLoader from '@/utils/image-loader';

export default function ResearchDevelopmentPage() {
  const areas = [
    {
      title: 'Material Science',
      description: 'Advanced research in diamond synthesis and material properties.',
      image: '/images/hpht_products/RnD.jpg',
    },
    {
      title: 'Process Innovation',
      description: 'Developing new manufacturing processes and techniques.',
      image: '/images/hpht_products/process.png',
    },
    {
      title: 'Product Development',
      description: 'Creating new products and improving existing ones.',
      image: '/images/hpht_products/manufacturing_process.jpg',
    },
  ];

  const capabilities = [
    {
      title: 'Advanced Laboratory',
      description: 'State-of-the-art facilities for material testing and analysis.',
    },
    {
      title: 'Expert Team',
      description: 'Highly qualified researchers and engineers.',
    },
    {
      title: 'Industry Collaboration',
      description: 'Partnerships with leading research institutions and universities.',
    },
    {
      title: 'Innovation Focus',
      description: 'Continuous investment in new technologies and methods.',
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
              Research & Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Driving innovation in diamond technology and manufacturing processes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-16">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loader={imageLoader}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  <p className="mt-2 text-gray-600">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              R&D Capabilities
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{capability.title}</h3>
                  <p className="mt-2 text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Innovation Through Research
            </h2>
            <p className="text-gray-600 mb-4">
              Our R&D team is dedicated to pushing the boundaries of diamond technology and
              manufacturing processes. Through continuous research and experimentation, we develop
              new solutions that address the evolving needs of our customers and industry.
            </p>
            <p className="text-gray-600 mb-4">
              We maintain strong partnerships with leading research institutions and universities,
              allowing us to stay at the forefront of technological advancements in diamond
              synthesis and processing.
            </p>
            <p className="text-gray-600">
              Our state-of-the-art laboratory facilities enable comprehensive material testing
              and analysis, ensuring that our products meet the highest standards of quality
              and performance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 