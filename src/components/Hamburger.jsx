"use client";

import { useState } from "react";
import Link from "next/link";

import "./Hamburger.css";

const Hamburger = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setNavOpen((prev) => !prev);
    setHamburger((prev) => !prev);
  };

  return (
    <>
      <button className={`hamburger hamburger--slider ${hamburger ? "is-active" : ""} z-20 md:hidden`} onClick={handleClick} type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        <span class="sr-only">Menu</span>
      </button>

      <div className={`nav ${navOpen ? "nav-open" : ""} bg-black z-10`}>
        <ul className="nav-list text-lg font-semibold">
          <li>
            <Link onClick={handleClick} href="#about">
              about
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href="#projects">
              projects
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href="#experiences">
              experience
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} href="#contact">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
