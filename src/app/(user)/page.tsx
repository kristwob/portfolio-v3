import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { cvQuery, projectCardsQuery, aboutQuery } from '@/lib/sanity.queries';
import { client, revalidateTime } from '@/lib/sanity.client';
import type { Resume, Project, About as AboutType } from '@/types';

// Revalidate every hour in production, on every request in development
export const revalidate = revalidateTime;

const Home = async () => {
  const [resume, projects, about] = await Promise.all([
    client.fetch<Resume>(cvQuery, {}, { next: { revalidate: revalidateTime } }),
    client.fetch<Project[]>(projectCardsQuery, {}, { next: { revalidate: revalidateTime } }),
    client.fetch<AboutType>(aboutQuery, {}, { next: { revalidate: revalidateTime } }),
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
