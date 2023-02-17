import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-[70vh]">
      <div className="w-72 md:w-[35rem] h-72 md:h-[35rem] rounded-[100%] border border-purple_300 flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <Image alt="Picture of Kristian smiling" priority src="/hero.jpg" width={200} height={200} style={{ maxWidth: "100%", height: "200", borderRadius:"100%" }} className="hidden md:block mb-4" />
          <p className="font-mono">fullstack developer</p>
          <h1 className="mt-4">Hi, I am Kristian Wobbes</h1>
          <ul className="flex justify-center font-mono text-center mt-8 text-sm sm:text-base">
            <li>
              <Link className="mr-3" href="#about">
                about
              </Link>
            </li>
            <li>
              <Link className="mr-3" href="#experience">
                experience
              </Link>
            </li>
            <li>
              <Link className="mr-3" href="#projects">
                projects
              </Link>
            </li>
            <li>
              <Link href="#contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
