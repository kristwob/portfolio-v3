// Components
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

// Sanity
import { cvQuery, projectQuery } from '@/lib/sanity.queries';
import { client } from '@/lib/sanity.client';
import type { CV } from '@/types/Cv';
import type { Project } from '@/types/Project';

const Home = async () => {
  const cv: CV = await client.fetch(cvQuery);
  const projects: Project[] = await client.fetch(projectQuery);

  return (
    <>
      <Hero />
      <About />
      <Experience cv={cv} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
};

export default Home;
