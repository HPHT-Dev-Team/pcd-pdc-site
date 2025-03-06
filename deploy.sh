#!/bin/bash

# Exit on error
set -e

# Clean previous builds
echo "🧹 Cleaning previous builds..."
npm run clean

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the static site
echo "🏗️ Building static site for GitHub Pages..."
NEXT_PUBLIC_BASE_PATH=/pcd-pdc-site npm run build:static

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Ensure out directory exists
    if [ -d "out" ]; then
        echo "📦 Static site is ready in the 'out' directory"
        
        # Create .nojekyll file for GitHub Pages
        touch out/.nojekyll
        
        echo "🚀 To preview the site locally, run: npm run preview"
        echo "💡 To deploy to GitHub Pages:"
        echo "1. Push your changes to the main branch"
        echo "2. GitHub Actions will automatically deploy to gh-pages branch"
        echo "3. Your site will be available at https://yourusername.github.io/pcd-pdc-site/"
    else
        echo "❌ 'out' directory not found"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi