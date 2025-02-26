# PCD PDC Website

This is the official website for PCD PDC, built with Next.js and deployed on GitHub Pages.

## 🌐 Live Environments

- Production: [https://hpht-dev-team.github.io/pcd-pdc-site/](https://hpht-dev-team.github.io/pcd-pdc-site/)
- Development: [https://hpht-dev-team.github.io/pcd-pdc-site/dev/](https://hpht-dev-team.github.io/pcd-pdc-site/dev/)

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or later
- npm (comes with Node.js)
- Git

### Setting Up Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/HPHT-Dev-Team/pcd-pdc-site.git
   cd pcd-pdc-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a local environment file:
   ```bash
   # For local development (no base path)
   echo "NEXT_PUBLIC_BASE_PATH=" > .env.local
   ```

### Running Locally

1. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the website at [http://localhost:3000](http://localhost:3000)

2. Preview production build:
   ```bash
   npm run build
   npm run preview
   ```
   This will create a production build and serve it locally

## 🛠️ Development Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push to the development branch:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request to merge into the `dev` branch

## 📦 Build and Deployment

### Local Build

To create a production build locally:
```bash
npm run build
```
The output will be in the `out` directory.

### Deployment

The website uses GitHub Actions for automated deployments:

- Pushing to `main` branch deploys to production
- Pushing to `dev` branch deploys to the development environment

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 📁 Project Structure

```
pcd-pdc-site/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # React components
│   ├── config/        # Site configuration
│   └── types/         # TypeScript types
├── public/            # Static assets
└── out/              # Production build output
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is proprietary and confidential. 