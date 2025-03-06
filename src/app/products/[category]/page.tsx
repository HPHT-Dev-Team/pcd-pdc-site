import { productCategories } from '@/config/products';
import ProductPageClient from '@/components/products/ProductPageClient';

export function generateStaticParams() {
  return Object.keys(productCategories).map((category) => ({
    category,
  }));
}

interface Props {
  params: { category: string };
}

export default function CategoryPage({ params }: Props) {
  const { category } = params;
  const categoryData = productCategories[category];

  if (!categoryData) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
        <p className="mt-4 text-gray-500">The requested category does not exist.</p>
      </div>
    );
  }

  return <ProductPageClient product={categoryData} />;
} 