import Link from 'next/link'
import SanityImage from './SanityImage'
import type { Project } from '@/types/Project'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/ui/Button'
import Paragraph from '@/ui/Paragraph'
import { headingVariants } from './ui/Heading'

const ProjectCard = ({ title, skills, image, slug }: Project) => {
  return (
    <div>
      <Link href={`/projects/${slug}`} tabIndex={-1}>
        <SanityImage image={image} alt={title} />
      </Link>
      <h3 className={cn(headingVariants({ size: 'sm' }), 'mt-2')}>{title}</h3>
      <div className='flex gap-4 mb-6'>
        {skills.map((skill) => (
          <Paragraph key={skill} className='font-mono' size='sm'>
            {skill}
          </Paragraph>
        ))}
      </div>
      <Link href={`/projects/${slug}`} className={cn(buttonVariants({ variant: 'link', size: 'none' }), 'dark:text-orange_400')}>
        See project
      </Link>
    </div>
  )
}

export default ProjectCard
