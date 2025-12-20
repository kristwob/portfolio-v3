import type { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  // Sort projects with featured first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
  
  return (
    <section id='projects' className='mt-[8em] mb-[8em] container'>
      <h2 className='text-center mb-20'>projects</h2>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-10 md:gap-4 lg:gap-6'>
        {sortedProjects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            title={project.title} 
            image={project.image} 
            skills={project.skills} 
            slug={project.slug}
            featured={project.featured}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
