'use client'

import Image from 'next/image'
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import { client } from '@/lib/sanity.client'
import { SanityClientLike } from '@sanity/image-url/lib/types/types'

type Props = {
  image: any
  alt: string
}

const SanityImage = ({ image, alt }: Props) => {
  const sanityClientLike: SanityClientLike = {
    clientConfig: {
      dataset: client.config().dataset,
      projectId: client.config().projectId,
    },
  }

  const imageProps: UseNextSanityImageProps | any = useNextSanityImage(sanityClientLike, image)

  return <Image {...imageProps} alt={alt} priority />
}

export default SanityImage
