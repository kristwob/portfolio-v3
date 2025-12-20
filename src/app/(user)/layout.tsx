import '@/styles/global.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/ui/toast';
import Providers from '@/components/Providers';
import { inter, squada_one, source_code_pro } from '@/lib/fonts';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Kristian Wobbes | Full-Stack Developer',
    template: '%s | Kristian Wobbes'
  },
  description: 'Full-stack developer portfolio showcasing web development projects and experience',
  keywords: ['Kristian Wobbes', 'developer', 'portfolio', 'web development', 'full-stack'],
  authors: [{ name: 'Kristian Wobbes' }],
  creator: 'Kristian Wobbes',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Kristian Wobbes | Full-Stack Developer',
    description: 'Full-stack developer portfolio showcasing web development projects and experience',
    siteName: 'Kristian Wobbes Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kristian Wobbes | Full-Stack Developer',
    description: 'Full-stack developer portfolio showcasing web development projects and experience',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [{ rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#0f172a' }],
  },
  manifest: '/favicon/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Kristian Wobbes',
  },
  other: {
    'msapplication-TileColor': '#603cba',
    'msapplication-config': '/favicon/browserconfig.xml',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${source_code_pro.variable} ${squada_one.variable}`} suppressHydrationWarning>
      <head>
        <link rel='dns-prefetch' href='https://cdn.sanity.io' />
        <link rel='preconnect' href='https://cdn.sanity.io' crossOrigin='anonymous' />
      </head>
      <body className={cn('bg-slate-50 dark:bg-slate-900 antialiased relative font-sans mx-auto')} suppressHydrationWarning>
        <Providers>
          <Toaster position='bottom-right' />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
