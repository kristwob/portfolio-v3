import Image from "next/image";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="mt-[8em] mb-[8em]">
      <h2 className="text-center mb-20">about</h2>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:gap-3 md:place-items-stretch">
        <Image
          alt="Picture of Kristian in a traditional Norwegian sweater"
          src="/about.jpg"
          width={350}
          height={350}
          className="block"
          style={{ width: "auto" }}
          priority
        />
        <div className="mt-5 md:mt-0 grid">
          <h3 className="mb-2">Here is a background</h3>
          <p className="mb-3">
            I am currently working on my Bachelor’s degree in Web Development, which will make me a Full Stack Developer, on the Norwegian University
            of Science and Technology located in Gjøvik, Norway.
          </p>
          <p className="mb-3">
            I spend most of my time either coding a side-project and working on different web-applications in languages such as React, CSS, Node.js. I
            am currently learning about carbon footprint and its impact on the web.
          </p>
          <p className="mb-3">
            During my spare-time I play football and walk my girlfriend’s dogs. I also have spent a year in His Majesty the King’s Guard of Norway, in
            the Drill Platoon.
          </p>
          <a href="#projects" className="md:place-self-end">
            <Button type="button" variant="secondary" title="my projects" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
