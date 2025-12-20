import { groq } from "next-sanity";

// Get only project slugs for generateStaticParams (minimal data)
export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;

// Optimized query for project cards (limited fields for performance)
export const projectCardsQuery = groq`
*[_type == "project"] | order(featured desc, _createdAt desc)
{
    _id,
    title,
    "image": coverImage.asset->{
      _id,
      url,
      metadata {
        lqip
      }
    },
    skills,
    "slug": slug.current,
    featured,
    githubUrl,
    liveUrl
}
`;

// Optimized project query - only fetch needed fields
export const projectQuery = groq`
*[_type == "project"] | order(featured desc, _createdAt desc)
{
    _id,
    title,
    "image": coverImage.asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    "text": pt::text(content),
    skills,
    "slug": slug.current,
    featured,
    githubUrl,
    liveUrl
}
`;

export const projectWithSlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] 
{
    _id,
    title,
    "image": coverImage.asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    content,
    "text": pt::text(content),
    skills,
    "slug": slug.current,
    featured,
    githubUrl,
    liveUrl
}
`;

// Optimized CV query - only fetch needed fields
export const cvQuery = groq`
*[_type == "cv"][0] {
  _id,
  personalia,
  experiences,
  education,
  courses,
  languages,
  display
}
`;

// Optimized about query - only fetch needed fields
export const aboutQuery = groq`
*[_type == "about"][0]
{
    _id,
    heading,
    "image": image.asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    "imageAlt": image.alt,
    paragraphs,
    buttonText,
    buttonLink
}
`;
