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
    domains: ['localhost'],
  },
};

module.exports = nextConfig;