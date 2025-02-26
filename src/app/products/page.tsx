'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { productCategories } from '@/config/products';
import imageLoader from '@/utils/image-loader';

const categories = Object.entries(productCategories).map(([key, category]) => ({
  name: category.title,
  description: category.description,
  href: `/products/${key}`,
  imageSrc: category.imageSrc,
  category: 'Industrial Products',
  products: category.products,
}));

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900">Products</span>
              </li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h1>
            <p className="mt-4 text-lg text-gray-500">
              Discover our comprehensive range of industrial diamond tools and equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-12 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <div key={category.name} className="space-y-4">
                  <h3 className="font-medium text-gray-900">
                    <Link href={category.href} className="hover:text-blue-600">
                      {category.name}
                    </Link>
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {category.products.map((product) => (
                      <li key={product.href}>
                        <Link 
                          href={product.href}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Main Categories Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={category.imageSrc}
                    alt={category.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    width={500}
                    height={500}
                    loader={imageLoader}
                  />
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">{category.category}</span>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={category.href} className="hover:text-blue-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {category.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                  <div className="mt-4 space-y-1">
                    {category.products.slice(0, 3).map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                      >
                        • {product.name}
                      </Link>
                    ))}
                    {category.products.length > 3 && (
                      <Link
                        href={category.href}
                        className="block text-sm text-blue-600 hover:text-blue-500"
                      >
                        View all {category.products.length} products →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 