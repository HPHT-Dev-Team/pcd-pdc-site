import { NavigationItem } from '@/types';

export const mainNavigation: NavigationItem[] = [
  {
    name: 'Products',
    href: '/products',
    items: [
      {
        name: 'PCD/PDC Tools',
        href: '/products/pcd-pdc',
        items: [
          { name: 'Flat PCD', href: '/products/pcd-pdc/flat' },
          { name: 'Domed PCD', href: '/products/pcd-pdc/domed' },
          { name: 'Conical PCD', href: '/products/pcd-pdc/conical' },
          { name: 'Road Milling / Mining', href: '/products/pcd-pdc/road-milling' },
        ],
      },
      {
        name: 'Diamonds',
        href: '/products/diamonds',
        items: [
          { name: 'Natural Diamond', href: '/products/diamonds/natural' },
          { name: 'Synthetic Diamond', href: '/products/diamonds/synthetic' },
        ],
      },
      {
        name: 'Powders',
        href: '/products/powders',
        items: [
          { name: 'Synthetic Diamond Powder', href: '/products/powders/synthetic' },
          { name: 'Natural Diamond Powder', href: '/products/powders/natural' },
          { name: 'Tungsten Carbide Powder', href: '/products/powders/tungsten-carbide' },
          { name: 'Cobalt Powder', href: '/products/powders/cobalt' },
        ],
      },
      {
        name: 'Carbide',
        href: '/products/carbide',
        items: [
          { name: 'Carbide Products', href: '/products/carbide' },
        ],
      },
      {
        name: 'HPHT Products',
        href: '/products/hpht-products',
        items: [
          { name: 'Cube for HPHT', href: '/products/hpht-products/cube' },
          { name: 'Anvil', href: '/products/hpht-products/anvil' },
        ],
      },
      {
        name: 'Industrial Materials',
        href: '/products/industrial-materials',
        items: [
          { name: 'Niobiomcan', href: '/products/industrial-materials/niobiomcan' },
        ],
      },
    ],
  },
  {
    name: 'Applications',
    href: '/applications',
    items: [
      { name: 'Construction & Mining', href: '/applications/construction-mining' },
      { name: 'EBL', href: '/applications/ebl' },
    ],
  },
  {
    name: 'Technology',
    href: '/technology',
    items: [
      { name: 'Manufacturing Process', href: '/technology/manufacturing-process' },
      { name: 'Research & Development', href: '/technology/research-development' },
      { name: 'Quality Control', href: '/technology/quality-control' },
    ],
  },
  {
    name: 'Company',
    href: '/company',
    items: [
      { name: 'About Us', href: '/company/about' },
      { name: 'Contact', href: '/company/contact' },
      { name: 'Privacy Policy', href: '/company/privacy' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]; 