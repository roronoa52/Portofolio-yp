import React from "react";
import pdf from "../assets/resume-yp.pdf";

import Yp from "../assets/img/yp.png";

function Hero() {
  return (
    <section
      id="home"
      className="lg:h-[90vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">
              Hey, I'm Farhan Yudha Pratama
            </p>
            <h1 className="text-4xl text-center leading-[44px] md:text-5xl md:leading-tight lg:text-left lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
            I'm a Full-Stack Web Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
            I Fresh Graduated from Telkom Institute of Technology Purwokerto 
            and I am a MERN Stack Developer.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              <a href={pdf} download="FileName.pdf">
                Download CV
              </a>
            </button>
          </div>
          {/* Right */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={Yp} className="w-[25rem]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
