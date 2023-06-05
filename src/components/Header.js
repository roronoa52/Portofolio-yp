import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';

// Import Component
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <Fade bottom cascade>
    <header
      className={` ${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="/">
          <h1 className="text-4xl">Farhan</h1>
        </a>
        {/* nav */}
        <div className="lg:block hidden">
          <Nav />
        </div>
        {/* socials */}
        <div className="lg:block hidden">
          <Socials />
        </div>
        {/* NavMobile */}
        <div className="lg:hidden ">
          <NavMobile />
        </div>
      </div>
    </header>
    </Fade>
  );
};

export default Header;
