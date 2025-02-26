export interface Product {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  category: string;
  features?: string[];
  applications?: string[];
  specifications?: Record<string, string>;
  technicalDetails?: Record<string, string>;
}

export interface ProductCategory {
  title: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
  products?: Product[];
  specifications?: Record<string, string>;
  technicalDetails?: Record<string, string>;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  items?: NavigationItem[];
}

export interface ProductData {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  category: string;
  features?: string[];
  applications?: string[];
  specifications?: Record<string, string>;
}

export interface CategoryData {
  title: string;
  description: string;
  imageSrc: string;
  products: ProductData[];
} 