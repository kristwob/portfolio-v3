"use client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../lib/sanity.client";

const SanityImage = ({ image, alt }) => {
  const imageProps = useNextSanityImage(client, image);
  return <Image {...imageProps} alt={alt} priority />;
};

export default SanityImage;
