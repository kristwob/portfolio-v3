// Components
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact";

// Sanity
import { cvQuery, projectQuery } from "../../lib/sanity.queries";
import { client } from "../../lib/sanity.client";

const Home = async () => {
  const cv = await client.fetch(cvQuery);
  const projects = await client.fetch(projectQuery);

  return (
    <>
      <Hero />
      <About />
      <Experience cv={cv.display} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
};

export default Home;
