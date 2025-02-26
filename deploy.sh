#!/bin/bash

# Build the static site
echo "🏗️ Building static site..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📦 Static site is ready in the 'out' directory"
    echo "🚀 To preview the site locally, run: npm run preview"
    echo "💡 To deploy, copy the contents of the 'out' directory to your web server"
else
    echo "❌ Build failed"
    exit 1
fi 