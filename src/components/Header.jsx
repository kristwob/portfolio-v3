import Link from "next/link";
import Button from "./Button";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/" className="flex items-end">
        <span className="text-3xl font-display tracking-widest">kristian</span>
        <span className="w-3 h-3 bg-orange_400 transition block rounded-full ml-1.5 -translate-y-[50%]"></span>
      </Link>
      <nav className="font-mono">
        <ul className="items-center hidden md:flex">
          <li className="mr-10">
            <a href="/#about">about</a>
          </li>
          <li className="mr-10">
            <a href="/#experience">experience</a>
          </li>
          <li className="mr-10">
            <a href="/#projects">projects</a>
          </li>
          <li>
            <a href="/#contact">
              <Button title="contact" variant="primary" tabIndex="-1" />
            </a>
          </li>
        </ul>

        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
