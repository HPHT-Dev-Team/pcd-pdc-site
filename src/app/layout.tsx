import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

const FooterLoading = () => (
  <footer className="bg-gray-900 animate-pulse">
    <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="h-8 bg-gray-800 rounded w-1/4" />
      <div className="h-8 bg-gray-800 rounded w-1/3" />
    </div>
  </footer>
);

// Lazy load the footer since it's always below the fold
const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: FooterLoading,
});

export const metadata: Metadata = {
  title: 'Industrial Diamond Tools & Equipment',
  description: 'High-quality industrial diamond tools, PCD, PDC, and carbide products for various applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>{children}</main>
          <Suspense fallback={<FooterLoading />}>
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  );
} 