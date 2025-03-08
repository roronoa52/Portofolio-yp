import React from "react";
import Projects from "../components/Projects";
import Fade from 'react-reveal/Fade';

function Portfolio() {
  return (
    <Fade bottom cascade>
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle">
          Here are some personal projects I've worked on using MERN technology and API integrations.
          </p>
        </div>
        <Projects />
      </div>
    </section>
    </Fade>
  );
}

export default Portfolio;
