import React from "react";
import Image from "../assets/img/about.webp";

function About() {
  return (
    <section id="about" className="section bg-secondary">
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Farhan Yudha Pratama
              </h2>
              <p className="mb-4 text-accent">MERN Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              My name is Farhan Yudha Pratama and I am a MERN stack developer, 
          I also just graduated from the telkom purwokerto institute of technology 
          majoring in informatics engineering. 
          I have the passion to learn more about web development and also the passion to improvise myself in every situation that I am faced with.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
