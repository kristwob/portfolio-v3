import Link from "next/link";
import Button from "./Button";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/" className="flex items-end">
        <span className="text-3xl font-display tracking-wider">kristian</span>
        <span className="w-4 h-4 bg-orange_400 transition block rounded-full ml-1.5 -translate-y-1/4"></span>
      </Link>
      <nav className="font-mono">
        <ul className="items-center hidden md:flex">
          <li className="mr-10">
            <Link href="#about">about</Link>
          </li>
          <li className="mr-10">
            <Link href="#experience">experience</Link>
          </li>
          <li className="mr-10">
            <Link href="#projects">projects</Link>
          </li>
          <li>
            <Link href="#contact">
              <Button title="contact" variant="primary" />
            </Link>
          </li>
        </ul>

        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
