# Pizza Dough Calculator

A beautiful, interactive web application for calculating the perfect pizza dough recipe with customizable parameters. Built with Next.js, React, and Tailwind CSS.

## Prerequisites

This project requires Node.js version 24 or higher. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions.

### Installing nvm (if not already installed)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Then restart your terminal or run:
```bash
source ~/.bashrc
```

## Getting Started

1. **Switch to the correct Node.js version:**
   ```bash
   nvm use
   ```
   This will automatically use Node.js 24 as specified in the `.nvmrc` file.

2. **Install dependencies:**
   ```bash
   npm install
   ```
   Or use the setup script:
   ```bash
   npm run setup
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Features

- **Interactive Sliders**: Adjust dough parameters with smooth, responsive sliders
- **Real-time Calculations**: See recipe changes instantly as you adjust parameters
- **Multiple Yeast Types**: Support for Active Dry Yeast (ADY), Instant Dry Yeast (IDY), and Compressed Yeast (CY)
- **Fermentation Guidelines**: Get recommended fermentation times based on temperature
- **Beautiful UI**: Modern, responsive design with Tailwind CSS and Radix UI components

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React
- **Node Version**: 24.x (managed via nvm)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run setup` - Use correct Node version and install dependencies

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable UI components
│   ├── lib/           # Utility functions
│   ├── globals.css    # Global styles and Tailwind
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Main application page
├── data.ts            # Fermentation data
├── fermentation.ts    # Fermentation calculations
└── recipe_generator.ts # Recipe generation logic
```

## Configuration Files

- `.nvmrc` - Specifies Node.js version 24
- `.npmrc` - npm configuration for nvm compatibility
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Troubleshooting

If you encounter Node.js version issues:

1. Ensure you're using the correct version:
   ```bash
   nvm use
   ```

2. If the version isn't installed:
   ```bash
   nvm install 24
   nvm use 24
   ```

3. Verify the installation:
   ```bash
   node --version
   npm --version
   ```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [nvm Documentation](https://github.com/nvm-sh/nvm)
