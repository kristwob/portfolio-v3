'use client';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../lib/sanity.client';

type Props = { image: any; alt: string };

const SanityImage = ({ image, alt }: Props) => {
  const imageProps: any = useNextSanityImage(client, image);
  return <Image {...imageProps} alt={alt} priority />;
};

export default SanityImage;
