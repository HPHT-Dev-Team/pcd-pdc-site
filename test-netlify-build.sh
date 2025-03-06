#!/bin/bash

# Exit on error
set -e

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean

# Build the site with Netlify configuration (empty base path)
echo "🏗️ Building static site with Netlify configuration..."
# Override the environment variable directly in the build command
NEXT_PUBLIC_BASE_PATH="" npx next build

# Create .nojekyll file
echo "📄 Creating .nojekyll file..."
touch out/.nojekyll

# Preview the site
echo "🚀 Starting preview server..."
echo "📱 Preview your site at http://localhost:8888"
npx serve -s out -l 8888 