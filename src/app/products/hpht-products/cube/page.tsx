'use client';

import { productCategories } from '@/config/products';
import ProductDetail from '@/components/products/ProductDetail';
import { motion } from 'framer-motion';

export default function HPHTCubePage() {
  const product = productCategories['hpht-products'].products.find(p => p.href === '/products/hpht-products/cube');

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-4 text-gray-500">The requested product does not exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProductDetail product={product} />
        </motion.div>
      </div>
    </div>
  );
} 