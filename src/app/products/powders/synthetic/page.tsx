import { productCategories } from '@/config/products';
import ProductDetailClient from '@/components/products/ProductDetailClient';

// Add generateStaticParams function for static path generation
export function generateStaticParams() {
  return productCategories['powders'].products
    .filter(p => p.href.startsWith('/products/powders/'))
    .map(product => ({
      slug: product.href.split('/').pop(),
    }));
}

export default function SyntheticDiamondPowderPage() {
  const product = productCategories['powders'].products.find(p => p.href === '/products/powders/synthetic');

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
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
} 