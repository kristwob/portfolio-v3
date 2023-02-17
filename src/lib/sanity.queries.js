import { groq } from "next-sanity";

export const projectQuery = groq`
*[_type == "project"]
`;

export const cvQuery = groq`
*[_type == "cv"][0]
`;
