#!/bin/bash

# Exit on error
set -e

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo "🔧 Installing Netlify CLI..."
  npm install -g netlify-cli
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean

# Build the site for Netlify (without base path)
echo "🏗️ Building static site for Netlify..."
NEXT_PUBLIC_BASE_PATH="" npx next build

# Create .nojekyll file (just in case)
echo "📄 Creating .nojekyll file..."
touch out/.nojekyll

# Deploy to Netlify
echo "🚀 Deploying to Netlify..."
netlify deploy --dir=out

# Prompt for production deployment
echo ""
echo "✅ Preview deployment complete!"
echo "⚠️ To deploy to production, run:"
echo "netlify deploy --dir=out --prod" 