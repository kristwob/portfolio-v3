import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { cvQuery, projectCardsQuery, aboutQuery } from '@/lib/sanity.queries';
import { client } from '@/lib/sanity.client';
import type { Resume, Project, About as AboutType } from '@/types';

// Revalidate every hour
export const revalidate = 3600;

const Home = async () => {
  const [resume, projects, about] = await Promise.all([
    client.fetch<Resume>(cvQuery, {}, { next: { revalidate: 3600 } }),
    client.fetch<Project[]>(projectCardsQuery, {}, { next: { revalidate: 3600 } }),
    client.fetch<AboutType>(aboutQuery, {}, { next: { revalidate: 3600 } }),
  ]);

  return (
    <>
      <Hero />
      <About about={about} />
      <Experience resume={resume} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
};

export default Home;
