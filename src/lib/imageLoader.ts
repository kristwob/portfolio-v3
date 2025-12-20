const HOST = process.env.NEXT_PUBLIC_FRONTEND_HOST

export default function imageLoader({ src, width }: { src: string; width: number }) {
  return `${HOST}/${src}?w=${width}&q=${100}`
}
