import { Inter, Squada_One, Source_Code_Pro } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const squada_one = Squada_One({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'monospace'],
})
