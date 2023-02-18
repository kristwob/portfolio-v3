"use client";

import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/sanity.client";

const Project = ({ title, skills, image, slug }) => {
  const imageProps = useNextSanityImage(client, image);
  return (
    <div>
      <Image {...imageProps} alt={title} />
      <h3 className="font-sans text-xl">{title}</h3>
      <div className="flex gap-4 font-mono mb-6">
        {skills.map((skill, index) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
      <Link href={`/projects/${slug}`} className="text-orange_400">See project</Link>
    </div>
  );
};

export default Project;
