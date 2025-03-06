'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import imageLoader from '@/utils/image-loader';
import { getBasePath } from '@/config/site';

const basePath = getBasePath();

const products = [
  {
    name: 'PCD/PDC Tools',
    description: 'High-performance Polycrystalline Diamond tools for precision cutting and drilling.',
    href: '/products/pcd-pdc',
    imageSrc: `${basePath}/images/pcd-pdc/domed-pcd.jpg`,
  },
  {
    name: 'Diamond Products',
    description: 'Premium quality natural and synthetic diamonds for industrial applications.',
    href: '/products/diamonds',
    imageSrc: `${basePath}/images/diamonds/natural-diamond.jpg`,
  },
  {
    name: 'HPHT Products',
    description: 'Specialized products for High Pressure High Temperature applications.',
    href: '/products/hpht-products',
    imageSrc: `${basePath}/images/hpht_products/cube.jpg`,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Industrial Diamond Solutions
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Leading manufacturer of high-quality industrial diamond tools, PCD, PDC, and carbide products.
                    Delivering precision and performance for your cutting-edge applications.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="/products"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      View Products
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                      Contact Us <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={`${basePath}/images/hpht_products/manufacturing_process.jpg`}
            alt="Industrial diamond manufacturing"
            width={1920}
            height={1080}
            priority
            loader={imageLoader}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1920px"
            quality={90}
          />
        </div>
      </div>

      {/* Featured products section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover our range of high-quality industrial diamond tools and equipment.
            </p>

            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {products.map((product) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      width={500}
                      height={500}
                      loader={imageLoader}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <Link
                        href={product.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        View Details
                      </Link>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        <Link href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 