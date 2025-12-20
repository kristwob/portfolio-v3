[![Netlify Status](https://api.netlify.com/api/v1/badges/77111ebf-431b-4f29-a936-4d7191717f4e/deploy-status)](https://app.netlify.com/projects/kristianwobbes/deploys)
# Portfolio v3

A modern, performant portfolio website built with Next.js 16, Sanity CMS, and TailwindCSS.

## Features

- ⚡ **Next.js 16** with App Router and Turbopack
- 📝 **Sanity CMS** for content management
- 🎨 **TailwindCSS** for styling with custom theme
- 🌓 **Dark Mode** with next-themes
- 📱 **Responsive Design** optimized for all devices
- 🖼️ **Optimized Images** with next-sanity-image
- 📧 **Contact Form** with email integration
- 🎯 **TypeScript** for type safety
- ♿ **Accessible** UI components with Radix UI

## Tech Stack

- **Framework:** Next.js 16.1.0
- **CMS:** Sanity
- **Styling:** TailwindCSS, CVA (Class Variance Authority)
- **UI Components:** Radix UI
- **Forms:** React Hook Form
- **Email:** Nodemailer
- **Fonts:** Inter, JetBrains Mono, Bebas Neue
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Sanity account and project

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Installation

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
portfolio-v3/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (admin)/      # Sanity Studio route
│   │   ├── (user)/       # Public-facing pages
│   │   └── api/          # API routes
│   ├── components/       # React components
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utility functions
│   ├── schemas/          # Sanity schemas
│   ├── styles/           # Global styles
│   └── types.ts          # TypeScript types
├── public/               # Static assets
└── sanity.config.js      # Sanity configuration
```

## Content Management

The portfolio uses Sanity CMS for content management with the following schemas:

- **About** - About section content
- **Projects** - Portfolio projects with images, skills, and links
- **CV/Resume** - Work experience and education
- **Date Range** - Custom date range object
- **Language** - Language proficiency

## Features & Sections

- **Hero** - Landing section with introduction
- **About** - Personal information with image
- **Experience** - Work history and education
- **Projects** - Portfolio showcase with filtering
- **Contact** - Contact form with email integration
- **Resume** - Detailed CV page

## Performance Optimizations

- ISR (Incremental Static Regeneration) with 1-hour revalidation
- Optimized image loading with lazy loading and fade-in effects
- Font optimization with next/font
- Turbopack for faster builds
- Component code splitting

## License

This project is open source and available under the MIT License.

## Author

**Kristian Wobbes**

- GitHub: [@kristwob](https://github.com/kristwob)
- Portfolio: [https://kristianwobbes.netlify.app](https://kristianwobbes.netlify.app)
