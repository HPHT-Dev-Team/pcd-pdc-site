#!/bin/bash

# Exit on error
set -e

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "❌ Error: Please provide a commit message"
  echo "Usage: ./push-to-github.sh \"Your commit message\""
  exit 1
fi

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit changes with the provided message
echo "💾 Committing changes: $1"
git commit -m "$1"

# Push to the main branch
echo "🚀 Pushing to main branch..."
git push origin main

echo "✅ Changes pushed successfully!"
echo "🔍 GitHub Actions will now deploy your site to GitHub Pages."
echo ""
echo "⚠️ IMPORTANT: If the GitHub Pages deployment fails with a 403 error, you need to:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Settings > Actions > General"
echo "3. Scroll down to 'Workflow permissions'"
echo "4. Select 'Read and write permissions'"
echo "5. Save the changes"
echo ""
echo "📱 Your site will be available at: https://yourusername.github.io/pcd-pdc-site/" 