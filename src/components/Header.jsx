import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/" className="flex items-end group">
        <span className="lg:text-4xl md:text-3xl font-display tracking-wider">kristian</span>
        <span className="w-4 h-4 bg-white group-hover:bg-orange_400 transition block rounded-full ml-1.5 -translate-y-1/4"></span>
      </Link>
      <nav className="font-mono">
        <ul className="flex items-center">
          <li className="mr-10">
            <Link href="#about" className="li">
              about
            </Link>
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
      </nav>
    </header>
  );
};

export default Header;
