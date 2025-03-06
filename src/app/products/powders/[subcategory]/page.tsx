import { productCategories } from '@/config/products';
import ProductPageClient from '@/components/products/ProductPageClient';

export function generateStaticParams() {
  const powderProducts = productCategories['powders'].products;
  return powderProducts.map((product) => ({
    subcategory: product.href.split('/').pop(),
  }));
}

interface Props {
  params: { subcategory: string };
}

export default function SubcategoryPage({ params }: Props) {
  const { subcategory } = params;
  const product = productCategories['powders'].products.find(
    (p) => p.href.endsWith(`/${subcategory}`)
  );

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-4 text-gray-500">The requested product does not exist.</p>
      </div>
    );
  }

  return <ProductPageClient product={product} />;
}