// Sanity
import { projectQuery, projectWithSlugQuery } from '@/lib/sanity.queries';
import { client } from '@/lib/sanity.client';

// Next
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Components
import SanityImage from '@/components/SanityImage';

import type { Project } from '@/types/Project';
import BackButton from '@/components/BackButton';
import Heading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';

type PageParams = {
  params: {
    slug: string;
  };
};

// Get the slug param from the page
export async function generateStaticParams() {
  const projects: Project[] = await client.fetch(projectQuery);

  return projects.map((item) => ({
    slug: `${item.slug}`,
  }));
}

const ProjectPage = async ({ params }: PageParams) => {
  const { slug } = params;
  const project = await client.fetch(projectWithSlugQuery, { slug });
  if (!project) {
    return notFound();
  }

  const content: string[] = project.text.split('\n\n');

  return (
    <div className='grid place-items-center container pt-28'>
      <Link className='justify-self-start mb-5 hover:no-underline' href='/#projects' tabIndex={0}>
        <BackButton />
      </Link>
      <SanityImage image={project.image} alt={project.title} />
      <div className='mt-5'>
        <Heading>{project.title}</Heading>
        {content.map((item, index) => (
          <Paragraph key={index} className='mt-2 w-full'>
            {item}
          </Paragraph>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
