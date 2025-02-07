'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const productCategories = [
  {
    name: 'All Products',
    href: '/products',
  },
  {
    name: 'PCD/PDC Tools',
    href: '/products/pcd-pdc',
    subcategories: [
      { name: 'Domed PCD', href: '/products/pcd-pdc/domed' },
      { name: 'Flat PCD', href: '/products/pcd-pdc/flat' },
      { name: 'Conical PCD', href: '/products/pcd-pdc/conical' },
      { name: 'Road Milling / Mining', href: '/products/pcd-pdc/road-milling' },
    ],
  },
  {
    name: 'Diamond Products',
    href: '/products/diamonds',
    subcategories: [
      { name: 'Natural Diamond', href: '/products/diamonds/natural' },
      { name: 'Synthetic Diamond', href: '/products/diamonds/synthetic' },
    ],
  },
  {
    name: 'Diamond Powders',
    href: '/products/powders',
    subcategories: [
      { name: 'Synthetic Diamond Powder', href: '/products/powders/synthetic' },
      { name: 'Natural Diamond Powder', href: '/products/powders/natural' },
      { name: 'Tungsten Carbide Powder', href: '/products/powders/tungsten-carbide' },
      { name: 'Cobalt Powder', href: '/products/powders/cobalt' },
    ],
  },
  {
    name: 'Carbide Products',
    href: '/products/carbide',
  },
  {
    name: 'HPHT Products',
    href: '/products/hpht-products',
    subcategories: [
      { name: 'Cube for HPHT', href: '/products/hpht-products/cube' },
      { name: 'Anvil', href: '/products/hpht-products/anvil' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white shadow-sm rounded-lg overflow-hidden"
    >
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Product Categories</h2>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {productCategories.map((category) => {
            const isActive = pathname === category.href || pathname.startsWith(`${category.href}/`);
            const hasSubcategories = category.subcategories && category.subcategories.length > 0;
            
            return (
              <li key={category.name} className="relative">
                <Link
                  href={category.href}
                  className={`flex items-center justify-between px-4 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span>{category.name}</span>
                  {hasSubcategories && (
                    <ChevronRightIcon 
                      className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90' : ''}`}
                    />
                  )}
                </Link>
                
                {/* Subcategories */}
                {hasSubcategories && isActive && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100"
                  >
                    {category.subcategories.map((subcategory) => {
                      const isSubActive = pathname === subcategory.href;
                      return (
                        <li key={subcategory.name}>
                          <Link
                            href={subcategory.href}
                            className={`block pl-4 pr-2 py-1.5 text-sm transition-colors relative ${
                              isSubActive
                                ? 'text-blue-700 font-medium bg-blue-50/50 rounded-r-md'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50 rounded-r-md'
                            }`}
                          >
                            {isSubActive && (
                              <motion.div
                                layoutId="activeSubIndicator"
                                className="absolute left-[-2px] w-0.5 h-full bg-blue-600"
                                initial={false}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30
                                }}
                              />
                            )}
                            {subcategory.name}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
} 