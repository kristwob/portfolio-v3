import { Inter, Squada_One, Source_Code_Pro } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  preload: false,
})

export const squada_one = Squada_One({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  preload: false
})

export const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-mono',
  preload: false,
})
