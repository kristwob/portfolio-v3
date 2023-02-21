import Link from "next/link";
import Button from "./Button";

const Experience = ({ cv }) => {
  return (
    <section id="experience" className="md:mt-[8em]">
      <h2 className="text-center mb-20">experience</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cv.map((item) => (
          <div key={item._key}>
            <h3>{item.heading}</h3>
            <p className="text-xl">@ {item.location}</p>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
        <Link href="/cv" className="sm:col-start-1 md:col-start-2 md:place-self-center mt-10 md:mt-[10rem] lg:mt-[15rem]">
          <Button title="resume" variant="primary" tabIndex="-1" />
        </Link>
      </div>
    </section>
  );
};

export default Experience;
