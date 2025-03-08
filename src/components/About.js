import React from "react";
import Image from "../assets/img/ilustration.jpg";
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <section id="about" className="section bg-secondary">
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-24">
        <Fade left cascade>
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          </Fade>
          <Fade right cascade>
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Farhan Yudha Pratama
              </h2>
              <p className="mb-4 text-accent">Backend Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              I’m Farhan Yudha Pratama, a MERN Stack Developer passionate about building modern web applications. With 3 years of experience in backend development, I specialize in Golang, Node.js, and Laravel. I thrive on solving complex problems and creating efficient, scalable solutions. Continuously learning and adapting to new technologies is at the core of my work ethic. I enjoy turning ideas into functional, user-friendly digital experiences. Let’s connect and create something impactful together!
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button>
          </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
