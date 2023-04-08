import type { Project } from '@/types/Project';
import ProjectCard from './ProjectCard';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  
  return (
    <section id='projects' className='mt-[8em] mb-[8em] container'>
      <h2 className='text-center mb-20'>projects</h2>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-10 md:gap-4 lg:gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.slug} title={project.title} image={project.image} skills={project.skills} slug={project.slug} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
