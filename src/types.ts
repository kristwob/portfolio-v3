import { SanityImageSource } from "@sanity/image-url";

export interface Project {
  _id?: string;
  title: string;
  slug: string;
  text?: string;
  content?: any[]; // Portable Text content
  skills?: string[];
  image: SanityImageSource;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
};

export interface Resume {
  courses: Course[];
  display: Display[];
  education: Education[];
  experiences: Experience[];
  personalia: Personalia;
  languages: Language[];
};

export interface Course {
  _key: string;
  date: string;
  title: string;
  issuer?: string;
  credentialUrl?: string;
};

export interface Experience {
  _key: string;
  from: string;
  title: string;
  to?: string;
  current?: boolean;
};

export interface Language {
  _key: string;
  language: string;
  oral: string;
  written: string;
};

export interface Personalia {
  DOB: string;
  email: string;
  name: string;
  nationality: string;
};

export interface Display {
  _key: string;
  description: string;
  heading: string;
  location: string;
}

export interface About {
  heading: string;
  image: SanityImageSource;
  imageAlt: string;
  paragraphs: string[];
  buttonText: string;
  buttonLink: string;
}

export interface Education {
  _key: string;
  from: string;
  title: string;
  to?: string;
  current?: boolean;
};
