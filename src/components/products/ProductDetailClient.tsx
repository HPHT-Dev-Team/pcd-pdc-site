'use client';

import { motion } from 'framer-motion';
import { ProductData } from '@/types';
import ProductDetail from './ProductDetail';

export default function ProductDetailClient({ product }: { product: ProductData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProductDetail product={product} />
    </motion.div>
  );
} 