import Link from "next/link";
import SanityImage from "../SanityImage";

const Project = ({ title, skills, image, slug }) => {
  return (
    <div>
      <SanityImage image={image} alt={title} />
      <h3 className="font-sans text-xl">{title}</h3>
      <div className="flex gap-4 font-mono mb-6">
        {skills.map((skill, index) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
      <Link href={`/projects/${slug}`} className="text-orange_400">
        See project
      </Link>
    </div>
  );
};

export default Project;
