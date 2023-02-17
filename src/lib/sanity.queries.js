import { groq } from "next-sanity";

export const projectQuery = groq`
*[_type == "project"] 
{
    title,
    "imageUrl": coverImage.asset->{..., metaData},
    "text": pt::text(content),
    skills,
    "slug": slug.current
}
`;

export const projectWithSlugQuery = groq`
    *[_type == "project" && slug.current == $slug][0]
    `


export const cvQuery = groq`
*[_type == "cv"][0]
`;
