// Sanity
import { projectQuery, projectWithSlugQuery } from "../../../../lib/sanity.queries";
import { client } from "../../../../lib/sanity.client";

// Next
import { notFound } from "next/navigation";
import Link from "next/link";

// Components
import SanityImage from "../../../../components/SanityImage";
import Button from "../../../../components/Button";

// Get the slug param from the page
export async function generateStaticParams() {
  const projects = await client.fetch(projectQuery);

  return projects.map((item) => ({
    slug: `${item.slug}`,
  }));
}

const ProjectPage = async ({ params }) => {
  const { slug } = params;
  const project = await client.fetch(projectWithSlugQuery, { slug });
  if (!project) {
    return notFound();
  }

  const content = project.text.split("\n\n");

  return (
    <div className="grid place-items-center mt-10">
      <Link className="justify-self-start mb-5" href="/#projects" tabIndex={0}>
        <Button title="Back" variant="back" />
      </Link>
      <SanityImage image={project.image} alt={project.title} />
      <div className="mt-5">
        <h1>{project.title}</h1>
        {content.map((item, index) => (
          <p key={index} className="mt-2">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
