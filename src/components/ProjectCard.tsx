import Link from 'next/link'
import SanityImage from './SanityImage'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/ui/Button'
import Paragraph from '@/ui/Paragraph'
import { headingVariants } from './ui/Heading'

const ProjectCard = ({ title, skills, image, slug, featured, githubUrl, liveUrl }: Project) => {
  return (
    <div className='relative'>
      {featured && (
        <span className='absolute top-2 right-2 z-10 bg-orange-500 dark:bg-orange-400 text-white dark:text-slate-900 px-2 py-1 text-xs font-bold rounded'>
          FEATURED
        </span>
      )}
      <Link href={`/projects/${slug}`} tabIndex={-1}>
        <SanityImage image={image} alt={title} />
      </Link>
      <h3 className={cn(headingVariants({ size: 'sm' }), 'mt-2')}>{title}</h3>
      <div className='flex gap-4 mb-4'>
        {skills?.map((skill) => (
          <Paragraph key={skill} className='font-mono' size='sm'>
            {skill}
          </Paragraph>
        ))}
      </div>
      <div className='flex gap-4 flex-wrap items-center'>
        <Link href={`/projects/${slug}`} className={cn(buttonVariants({ variant: 'link', size: 'none' }), 'dark:text-orange-400')}>
          See project
        </Link>
        {githubUrl && (
          <a 
            href={githubUrl} 
            target='_blank' 
            rel='noopener noreferrer'
            className={cn(buttonVariants({ variant: 'link', size: 'none' }), 'dark:text-orange-400')}
          >
            GitHub →
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target='_blank' 
            rel='noopener noreferrer'
            className={cn(buttonVariants({ variant: 'link', size: 'none' }), 'dark:text-orange-400')}
          >
            Live Site →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
