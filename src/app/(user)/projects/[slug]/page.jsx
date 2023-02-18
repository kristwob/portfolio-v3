import { projectQuery, projectWithSlugQuery } from "../../../../lib/sanity.queries";
import { client } from "../../../../lib/sanity.client";

export async function generateStaticParams() {
  const projects = await client.fetch(projectQuery);

  return projects.map((item) => ({
    slug: `${item.slug}`,
  }));
}
// TODO: fetch the correct project, and check if the project exists(call notFound())
const ProjectPage = ({ params }) => {
  const { slug } = params;

  return <div>{slug}</div>;
};

export default ProjectPage;
