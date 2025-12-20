import { groq } from "next-sanity";

/**
 * Extended GROQ query examples for advanced use cases
 * Use these as reference for building custom queries
 */

// Get only featured projects
export const featuredProjectsQuery = groq`
*[_type == "project" && featured == true] | order(_createdAt desc)
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
    "imageAlt": coverImage.alt,
    "text": pt::text(content),
    skills,
    "slug": slug.current,
    githubUrl,
    liveUrl
}
`;

// Get projects by skill
export const projectsBySkillQuery = groq`
*[_type == "project" && $skill in skills] | order(_createdAt desc)
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
    "imageAlt": coverImage.alt,
    skills,
    "slug": slug.current
}
`;

// Get project slugs for static generation
export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;

// Get limited fields for project cards (performance optimized)
export const projectCardsQuery = groq`
*[_type == "project"] | order(featured desc, _createdAt desc) [0...$limit]
{
    _id,
    title,
    "image": coverImage.asset->{
      _id,
      url,
      "lqip": metadata.lqip
    },
    "imageAlt": coverImage.alt,
    skills[0..2],
    "slug": slug.current,
    featured
}
`;

// Get CV with formatted dates
export const cvWithFormattedDatesQuery = groq`
*[_type == "cv"][0] {
  _id,
  personalia,
  "experiences": experiences[]{
    title,
    from,
    to,
    current,
    "fromYear": string::split(from, "-")[0],
    "toYear": select(
      current => "Present",
      defined(to) => string::split(to, "-")[0],
      "Present"
    )
  },
  "education": education[]{
    title,
    from,
    to,
    "fromYear": string::split(from, "-")[0],
    "toYear": defined(to) => string::split(to, "-")[0]
  },
  courses,
  languages,
  display
}
`;

// Get about with optimized image
export const aboutWithOptimizedImageQuery = groq`
*[_type == "about"][0]
{
    _id,
    heading,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
      "lqip": image.asset->metadata.lqip,
      "dimensions": image.asset->metadata.dimensions
    },
    paragraphs,
    buttonText,
    buttonLink
}
`;

// Search projects by title or skills
export const searchProjectsQuery = groq`
*[_type == "project" && (
  title match $searchTerm + "*" ||
  $searchTerm in skills
)] | order(_score desc, featured desc)
{
    _id,
    title,
    "image": coverImage.asset->{
      _id,
      url,
      "lqip": metadata.lqip
    },
    "imageAlt": coverImage.alt,
    skills,
    "slug": slug.current,
    "excerpt": pt::text(content)[0..150] + "..."
}
`;

// Count projects by skill
export const projectCountBySkillQuery = groq`
{
  "total": count(*[_type == "project"]),
  "bySkill": *[_type == "project"].skills[] | {
    "skill": @,
    "count": count(*[_type == "project" && @ in skills])
  } | order(count desc)
}
`;

// Get related projects (by shared skills)
export const relatedProjectsQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  "related": *[_type == "project" && 
    slug.current != $slug && 
    count((skills[])[@ in ^.skills[]]) > 0
  ] | order(count((skills[])[@ in ^.skills[]]) desc) [0..2] {
    _id,
    title,
    "image": coverImage.asset->{
      _id,
      url,
      "lqip": metadata.lqip
    },
    "imageAlt": coverImage.alt,
    "slug": slug.current,
    "sharedSkills": skills[@ in ^.^.skills]
  }
}
`;

// Get all unique skills across projects
export const allSkillsQuery = groq`
array::unique(*[_type == "project"].skills[])
`;

// Get CV display experience with enhanced data
export const cvDisplayExperienceQuery = groq`
*[_type == "cv"][0].display[] {
  heading,
  location,
  description,
  "wordCount": length(pt::text(description))
}
`;
