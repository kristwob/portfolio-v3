const HOST = process.env.NEXT_PUBLIC_FRONTEND_HOST; /* || 'http://localhost:3000' */

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality: number }) {
  return `${HOST}/${src}?w=${width}&q=${quality || 100}`;
}
