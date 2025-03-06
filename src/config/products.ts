import { CategoryData } from '@/types';
import { getBasePath } from './site';

const basePath = getBasePath();

export const productCategories: Record<string, CategoryData> = {
  'pcd-pdc': {
    title: 'PCD/PDC Tools',
    description: 'High-performance Polycrystalline Diamond tools for precision cutting and drilling applications.',
    imageSrc: `${basePath}/images/pcd-pdc/domed-pcd.jpg`,
    products: [
      {
        name: 'Domed PCD',
        description: 'Advanced domed PCD inserts designed for high impact resistant applications in percussive drilling.',
        href: '/products/pcd-pdc/domed',
        imageSrc: `${basePath}/images/pcd-pdc/domed-pcd.jpg`,
        category: 'PCD Tools',
        features: [
          'Two-layered engineered structure',
          'Single piece construction (no brazing)',
          'Superior impact resistance',
          'Homogeneous and well-bonded layers',
          'Available in multiple sizes',
        ],
        applications: [
          'Oil and gas drilling',
          'Three cone rock bits',
          'Percussive drilling',
          'High-impact applications',
        ],
        specifications: {
          'Construction': 'Single piece without brazing',
          'Sizes': '3/4 inch and 1 inch dome inserts available',
          'Testing': 'Metallurgical evaluation through microscopic examination',
          'Quality Control': 'Layer integrity and bonding verification',
        },
      },
      {
        name: 'Flat PCD',
        description: 'Precision flat PCD tools for high-performance cutting applications.',
        href: '/products/pcd-pdc/flat',
        imageSrc: `${basePath}/images/pcd-pdc/flat-pcd.jpg`,
        category: 'PCD Tools',
        features: [
          'Superior wear resistance',
          'Excellent thermal conductivity',
          'High precision cutting edges',
          'Long tool life',
          'Reduced machining costs',
        ],
        applications: [
          'Automotive parts machining',
          'Aerospace components',
          'Wood and composite processing',
          'Non-ferrous metal cutting',
        ],
      },
      {
        name: 'Conical PCD',
        description: 'Advanced conical PCD tools for specialized drilling applications.',
        href: '/products/pcd-pdc/conical',
        imageSrc: `${basePath}/images/pcd-pdc/conical-pcd.jpg`,
        category: 'PCD Tools',
        features: [
          'Optimized geometry',
          'Enhanced drilling performance',
          'Superior wear resistance',
          'Excellent heat dissipation',
        ],
        applications: [
          'Deep hole drilling',
          'Oil and gas exploration',
          'Mining operations',
          'Construction drilling',
        ],
      },
      {
        name: 'Road Milling / Mining',
        description: 'Heavy-duty PCD tools specifically designed for road construction and mining applications.',
        href: '/products/pcd-pdc/road-milling',
        imageSrc: `${basePath}/images/pcd-pdc/road-milling.jpg`,
        category: 'PCD Tools',
        features: [
          'Extreme durability',
          'Optimized for heavy-duty use',
          'Enhanced wear resistance',
          'Cost-effective operation',
        ],
        applications: [
          'Road surface milling',
          'Mining excavation',
          'Construction projects',
          'Infrastructure development',
        ],
      },
    ],
  },
  'powders': {
    title: 'Diamond Powders',
    description: 'High-quality diamond powders and industrial powders for various applications.',
    imageSrc: `${basePath}/images/powders/diamond-powder.jpg`,
    products: [
      {
        name: 'Synthetic Diamond Powder',
        description: 'Premium synthetic diamond powder for industrial applications.',
        href: '/products/powders/synthetic',
        imageSrc: `${basePath}/images/diamonds/synthetic-diamond.jpg`,
        category: 'Powders',
        features: [
          'Consistent particle size',
          'High purity',
          'Superior performance',
          'Cost-effective',
        ],
        applications: [
          'Polishing',
          'Grinding',
          'Lapping',
          'Surface finishing',
        ],
      },
      {
        name: 'Natural Diamond Powder',
        description: 'High-quality natural diamond powder for specialized applications.',
        href: '/products/powders/natural',
        imageSrc: `${basePath}/images/diamonds/natural-diamond.jpg`,
        category: 'Powders',
        features: [
          'Exceptional hardness',
          'Natural crystal structure',
          'Premium quality',
          'Specialized applications',
        ],
        applications: [
          'Precision polishing',
          'High-end finishing',
          'Scientific research',
          'Specialized manufacturing',
        ],
      },
      {
        name: 'Cobalt Powder',
        description: 'High-quality cobalt powder for industrial applications.',
        href: '/products/powders/cobalt',
        imageSrc: `${basePath}/images/powders/cobalt-powder.jpg`,
        category: 'Powders',
        features: [
          'High purity',
          'Consistent quality',
          'Excellent performance',
          'Versatile applications',
        ],
        applications: [
          'Diamond tools',
          'Cemented carbide tools',
          'Hard metals',
          'Glass industries',
          'Diamond polishing scaives',
        ],
        specifications: {
          'Packing (Small)': '1 kg packing in cardboard box with inner LDPE bags sealed in inert atmosphere',
          'Packing (Bulk)': '25 kg & 50 kg packing in metal drum with inner LDPE bags sealed in inert atmosphere',
        },
      },
      {
        name: 'Tungsten Carbide Powder',
        description: 'High-performance tungsten carbide powder for industrial use.',
        href: '/products/powders/tungsten-carbide',
        imageSrc: `${basePath}/images/powders/tungsten-carbide-powder.jpg`,
        category: 'Powders',
        features: [
          'High hardness',
          'Excellent wear resistance',
          'Thermal stability',
          'Versatile applications',
        ],
        applications: [
          'Cutting tools',
          'Wear parts',
          'Mining tools',
          'Industrial components',
        ],
      },
    ],
  },
  'diamonds': {
    title: 'Diamonds',
    description: 'High-quality natural and synthetic diamonds for industrial and specialized applications.',
    imageSrc: `${basePath}/images/diamonds/natural-diamond.jpg`,
    products: [
      {
        name: 'Natural Diamond',
        description: 'Premium quality natural diamonds for specialized industrial applications.',
        href: '/products/diamonds/natural',
        imageSrc: `${basePath}/images/diamonds/natural-diamond.jpg`,
        category: 'Diamonds',
        features: [
          'Superior hardness',
          'Natural crystal structure',
          'Premium quality',
          'Exceptional durability',
        ],
        applications: [
          'High-precision cutting tools',
          'Specialized industrial applications',
          'Scientific instruments',
          'High-end manufacturing',
        ],
        specifications: {
          'Experience': '40+ years in diamond processing',
          'Quality': 'Premium grade natural diamonds',
          'Processing': 'Advanced processing techniques',
        },
      },
      {
        name: 'Synthetic Diamond',
        description: 'High-quality synthetic diamonds manufactured using advanced technology.',
        href: '/products/diamonds/synthetic',
        imageSrc: `${basePath}/images/diamonds/synthetic-diamond.jpg`,
        category: 'Diamonds',
        features: [
          'Controlled properties',
          'Consistent quality',
          'Cost-effective',
          'Customizable specifications',
        ],
        applications: [
          'Industrial cutting tools',
          'Abrasive applications',
          'Electronic components',
          'Heat dissipation',
        ],
      },
    ],
  },
  'carbide': {
    title: 'Carbide Products',
    description: 'Premium carbide materials and tools for industrial applications.',
    imageSrc: `${basePath}/images/carbide/carbide.jpg`,
    products: [
      {
        name: 'Carbide',
        description: 'Premium carbide materials for industrial use.',
        href: '/products/carbide',
        imageSrc: `${basePath}/images/carbide/carbide.jpg`,
        category: 'Carbide',
        features: [
          'High hardness',
          'Excellent wear resistance',
          'Superior durability',
          'Thermal stability',
        ],
        applications: [
          'Cutting tools',
          'Mining equipment',
          'Wear parts',
          'Industrial components',
        ],
      },
    ],
  },
  'hpht-products': {
    title: 'HPHT Products',
    description: 'Specialized products for High Pressure High Temperature (HPHT) applications.',
    imageSrc: `${basePath}/images/hpht_products/cube.jpg`,
    products: [
      {
        name: 'Cube for HPHT',
        description: 'Specialized cubes designed for HPHT applications.',
        href: '/products/hpht-products/cube',
        imageSrc: `${basePath}/images/hpht_products/cube.jpg`,
        category: 'HPHT Products',
        features: [
          'Precision engineered',
          'High pressure resistance',
          'Temperature stability',
          'Long service life',
        ],
        applications: [
          'Diamond synthesis',
          'Material processing',
          'Research applications',
          'Industrial HPHT processes',
        ],
      },
      {
        name: 'Anvil',
        description: 'High-performance anvils for HPHT applications.',
        href: '/products/hpht-products/anvil',
        imageSrc: `${basePath}/images/hpht_products/anvil.jpg`,
        category: 'HPHT Products',
        features: [
          'Superior strength',
          'Pressure resistance',
          'Precise engineering',
          'Durable construction',
        ],
        applications: [
          'High pressure experiments',
          'Diamond synthesis',
          'Material compression',
          'Research facilities',
        ],
      },
    ],
  },
  'industrial-materials': {
    title: 'Industrial Materials',
    description: 'Advanced industrial materials for specialized applications.',
    imageSrc: `${basePath}/images/industrial-materials/materials.jpg`,
    products: [
      {
        name: 'Niobiomcan',
        description: 'Advanced niobium-based material for specialized applications.',
        href: '/products/industrial-materials/niobiomcan',
        imageSrc: `${basePath}/images/hpht_products/process.png`,
        category: 'Industrial Materials',
        features: [
          'High performance',
          'Unique properties',
          'Specialized applications',
          'Quality controlled',
        ],
        applications: [
          'Industrial processes',
          'Specialized manufacturing',
          'Research and development',
          'Advanced materials',
        ],
      },
    ],
  },
  'equipment': {
    title: 'Equipment',
    description: 'High-quality equipment and machinery for industrial applications.',
    imageSrc: `${basePath}/images/equipment/machinery.jpg`,
    products: [
      // ... existing code ...
    ],
  },
  // Add more categories as needed
}; 