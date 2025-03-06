'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import ProductDetail from './ProductDetail';
import { CategoryData, Product } from '@/types';

interface ProductPageClientProps {
  product: Product | CategoryData;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductDetail product={product} />
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
} 