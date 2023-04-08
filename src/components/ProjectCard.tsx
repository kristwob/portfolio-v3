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
      <SanityImage image={image} alt={title} />
      <h3 className={headingVariants({ size: 'sm' })}>{title}</h3>
      <div className='flex gap-4 font-mono mb-6'>
        {skills.map((skill) => (
          <Paragraph key={skill}>{skill}</Paragraph>
        ))}
      </div>
      <Link href={`/projects/${slug}`} className={cn(buttonVariants({ variant: 'link', size: 'none' }), 'dark:text-orange_400')}>
        See project
      </Link>
    </div>
  )
}

export default ProjectCard
