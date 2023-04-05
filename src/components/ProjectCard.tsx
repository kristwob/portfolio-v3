import Link from 'next/link';
import SanityImage from './SanityImage';
import type { Project } from '@/types/Project';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/Button';

const ProjectCard = ({ title, skills, image, slug }: Project) => {
  return (
    <div>
      <SanityImage image={image} alt={title} />
      <h3 className='font-sans text-xl'>{title}</h3>
      <div className='flex gap-4 font-mono mb-6'>
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
      <Link href={`/projects/${slug}`} className={cn(buttonVariants({ variant: 'link', size: 'none' }), 'text-orange_400')}>
        See project
      </Link>
    </div>
  );
};

export default ProjectCard;
