import { projectSlugsQuery, projectWithSlugQuery } from '@/lib/sanity.queries';
import { client, revalidateTime } from '@/lib/sanity.client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SanityImage from '@/components/SanityImage';
import type { Project } from '@/types';
import type { Metadata } from 'next';
import BackButton from '@/components/BackButton';
import Heading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';
import { buttonVariants } from '@/ui/Button';
import { cn } from '@/lib/utils';

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};

// Revalidate every hour in production, on every request in development
export const revalidate = revalidateTime;

// Generate metadata for SEO
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch<Project>(projectWithSlugQuery, { slug });

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.text?.substring(0, 160) || `Project: ${project.title}`,
    openGraph: {
      title: project.title,
      description: project.text?.substring(0, 160) || `Project: ${project.title}`,
      type: 'article',
    },
  };
}

// Get the slug param from the page - only fetch slugs for efficiency
export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(projectSlugsQuery, {}, { next: { revalidate: revalidateTime } });

  return slugs.map((slug) => ({
    slug,
  }));
}

const ProjectPage = async ({ params }: PageParams) => {
  const { slug } = await params;
  const project = await client.fetch(projectWithSlugQuery, { slug }, { next: { revalidate: revalidateTime } });
  if (!project) {
    return notFound();
  }

  const content: string[] = project.text.split('\n\n');

  return (
    <div className='container pt-28'>
      <Link className='mb-5 hover:no-underline inline-block' href='/#projects' tabIndex={0}>
        <BackButton />
      </Link>

      <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
        {/* Image - shown first on mobile */}
        <div className='w-full lg:order-2'>
          <SanityImage image={project.image} alt={project.title} priority sizes='(max-width: 1024px) 100vw, 50vw' />
        </div>

        {/* Content */}
        <div className='w-full lg:order-1'>
          <Heading>{project.title}</Heading>

          {/* Skills */}
          {project.skills && project.skills.length > 0 && (
            <div className='flex gap-3 mt-4 flex-wrap'>
              {project.skills.map((skill: string) => (
                <span key={skill} className='font-mono text-sm bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50 px-3 py-1 rounded'>
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className='flex gap-4 mt-6'>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'default' }), 'inline-flex items-center gap-2')}
                >
                  View on GitHub →
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(buttonVariants({ variant: 'default' }), 'inline-flex items-center gap-2')}
                >
                  Visit Live Site →
                </a>
              )}
            </div>
          )}

          {/* Content */}
          <div className='mt-6'>
            {content.map((item, index) => (
              <Paragraph key={index} className='mt-2 w-full'>
                {item}
              </Paragraph>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
