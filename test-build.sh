#!/bin/bash

# Exit on error
set -e

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean

# Build with GitHub Pages base path
echo "🏗️ Building static site with GitHub Pages base path..."
NEXT_PUBLIC_BASE_PATH=/pcd-pdc-site npm run build:static

# Create .nojekyll file
echo "📄 Creating .nojekyll file..."
touch out/.nojekyll

# Preview the site
echo "🚀 Starting preview server..."
echo "📱 Preview your site at http://localhost:3000"
echo "⚠️ Note: Asset paths will be broken in local preview. This is expected for GitHub Pages deployment."
npx serve out 