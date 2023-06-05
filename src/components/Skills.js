import React from "react";
import Fade from 'react-reveal/Fade';
import { skills } from "../data";

function Skills() {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-7 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <Fade bottom cascade delay={index*100}>
              <div className="flex items-center justify-center" key={index}>
                <img src={skill.image} alt="" />
              </div>
          </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
