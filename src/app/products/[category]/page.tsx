import { productCategories } from '@/config/products';
import CategoryPageClient from '@/components/products/CategoryPageClient';
import { Metadata } from 'next';

export function generateStaticParams() {
  return Object.keys(productCategories).map((category) => ({
    category,
  }));
}

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductCategoryPage({
  params,
  searchParams,
}: Props) {
  const { category } = await params;
  const categoryData = productCategories[category];

  if (!categoryData) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Category Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          The product category you're looking for doesn't exist.
          Please select a category from the sidebar.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <CategoryPageClient categoryData={categoryData} categoryTitle={categoryData.title} />
    </div>
  );
} 