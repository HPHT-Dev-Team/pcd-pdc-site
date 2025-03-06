'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import imageLoader from '@/utils/image-loader';
import { getBasePath } from '@/config/site';

const basePath = getBasePath();

export default function AboutPage() {
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
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Leading manufacturer of industrial diamond tools and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over four decades of experience in diamond processing and tool manufacturing,
                  we have established ourselves as a leading provider of high-quality industrial
                  diamond solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our commitment to innovation and quality has made us a trusted partner for
                  industries ranging from oil & gas to construction and manufacturing.
                </p>
              </motion.div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src={`${basePath}/images/hpht_products/manufacturing_process.jpg`}
                alt="Manufacturing facility"
                fill
                className="object-cover rounded-lg"
                loader={imageLoader}
              />
            </div>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Expertise</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Quality Manufacturing',
                    description: 'State-of-the-art facilities and rigorous quality control processes.',
                    image: `${basePath}/images/hpht_products/quality_control.jpg`,
                  },
                  {
                    title: 'Research & Development',
                    description: 'Continuous innovation in diamond tool technology and applications.',
                    image: `${basePath}/images/hpht_products/RnD.jpg`,
                  },
                  {
                    title: 'Technical Support',
                    description: 'Expert technical support and customized solutions for your needs.',
                    image: `${basePath}/images/hpht_products/technical_support.jpg`,
                  },
                ].map((item) => (
                  <div key={item.title} className="relative">
                    <div className="h-48 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                        loader={imageLoader}
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 