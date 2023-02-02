import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <p className="text-3xl">kristian</p>
      <nav className="font-mono">
        <ul className="flex items-center">
          <li className="mr-10">
            <Link href="#about" className="li">about</Link>
          </li>
          <li className="mr-10">
            <Link href="#experience">experience</Link>
          </li>
          <li className="mr-10">
            <Link href="#projects">projects</Link>
          </li>
          <li className="ml-7">
            <Link href="#contact"><Button title="contact" variant="primary"/></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
