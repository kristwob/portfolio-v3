import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Project = {
  title: string;
  slug: string;
  text?: string;
  skills: string[];
  image: SanityImageSource;
};
