const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/image-loader.ts',
    path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);