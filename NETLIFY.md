# Deploying to Netlify

This guide explains how to deploy your Next.js site to Netlify.

## Option 1: Using the Netlify CLI (Recommended for first deployment)

1. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Run the deployment script:
   ```bash
   ./deploy-to-netlify.sh
   ```

3. Follow the prompts to:
   - Log in to your Netlify account
   - Create a new site or select an existing one
   - Deploy a preview version

4. If you're happy with the preview, deploy to production:
   ```bash
   netlify deploy --dir=out --prod
   ```

## Option 2: Connect to GitHub Repository (Recommended for continuous deployment)

1. Push your code to GitHub:
   ```bash
   git push origin main
   ```

2. Log in to [Netlify](https://app.netlify.com/)

3. Click "New site from Git"

4. Select GitHub and authorize Netlify

5. Select your repository

6. Configure build settings:
   - Build command: `NEXT_PUBLIC_BASE_PATH='' npx next build`
   - Publish directory: `out`

7. Click "Deploy site"

## Testing Locally

To test your Netlify build locally before deploying:

1. Run the test script:
   ```bash
   ./test-netlify-build.sh
   ```

2. Open your browser to http://localhost:8888

3. Verify that all pages and assets load correctly

## Environment Variables

Make sure to set the following environment variables in Netlify:

- `NEXT_PUBLIC_BASE_PATH`: Leave empty for Netlify deployment

## Custom Domain

To set up a custom domain:

1. Go to your site settings in Netlify
2. Navigate to "Domain management"
3. Click "Add custom domain"
4. Follow the instructions to configure your DNS settings

## Troubleshooting

If you encounter issues with routing or assets not loading:

1. Check that `NEXT_PUBLIC_BASE_PATH` is empty for Netlify deployments
2. Verify that the `netlify.toml` file is in the root of your project
3. Make sure the redirects are properly configured in `netlify.toml` 