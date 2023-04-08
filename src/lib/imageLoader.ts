const HOST = process.env.NEXT_PUBLIC_FRONTEND_HOST /* || 'http://localhost:3000' */

export default function myImageLoader({ src, width }: { src: string; width: number }) {
  return `${HOST}/${src}?w=${width}&q=${100}`
}
