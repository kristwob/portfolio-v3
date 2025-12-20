'use client';

import Image from 'next/image';
import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image';
import { client } from '@/lib/sanity.client';
import { SanityClientLike } from '@sanity/image-url';
import { useState } from 'react';

type Props = {
  image: any;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

const SanityImage = ({ image, alt, priority = false, sizes }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const sanityClientLike: SanityClientLike = {
    clientConfig: {
      dataset: client.config().dataset,
      projectId: client.config().projectId,
    },
  };

  const imageProps: UseNextSanityImageProps | any = useNextSanityImage(sanityClientLike, image);

  return (
    <Image
      {...imageProps}
      alt={alt}
      priority={priority}
      sizes={sizes || imageProps.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      loading={priority ? undefined : 'lazy'}
      quality={85}
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default SanityImage;
