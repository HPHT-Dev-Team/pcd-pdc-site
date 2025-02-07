'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function QualityControlPage() {
  const processes = [
    {
      title: 'Material Testing',
      description: 'Comprehensive testing of raw materials and finished products.',
      image: '/images/hpht_products/quality_control.jpg',
    },
    {
      title: 'Process Monitoring',
      description: 'Continuous monitoring and control of manufacturing processes.',
      image: '/images/hpht_products/process.png',
    },
    {
      title: 'Final Inspection',
      description: 'Thorough inspection and testing of finished products.',
      image: '/images/hpht_products/manufacturing_process.jpg',
    },
  ];

  const standards = [
    {
      title: 'ISO Certification',
      description: 'Adherence to international quality management standards.',
    },
    {
      title: 'Quality Metrics',
      description: 'Regular monitoring and reporting of quality metrics.',
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation of quality control processes.',
    },
    {
      title: 'Training',
      description: 'Continuous training of quality control personnel.',
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
              Quality Control
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ensuring the highest standards of quality in every product
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
              Quality Standards
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {standards.map((standard, index) => (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{standard.title}</h3>
                  <p className="mt-2 text-gray-600">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Quality Commitment
            </h2>
            <p className="text-gray-600 mb-4">
              Quality is at the core of everything we do. Our comprehensive quality control system
              ensures that every product meets our rigorous standards before reaching our customers.
              From raw material inspection to final product testing, we maintain strict quality
              control at every step.
            </p>
            <p className="text-gray-600 mb-4">
              Our quality control team uses advanced testing equipment and follows standardized
              procedures to verify product specifications, performance, and reliability. We maintain
              detailed documentation of all quality control processes and regularly review and
              update our procedures to ensure continuous improvement.
            </p>
            <p className="text-gray-600">
              We are committed to maintaining international quality standards and continuously
              invest in training our quality control personnel to stay current with the latest
              quality assurance techniques and technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 