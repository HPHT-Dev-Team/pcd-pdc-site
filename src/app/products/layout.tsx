'use client';

import Sidebar from '@/components/layout/Sidebar';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <Sidebar />
            </div>
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 