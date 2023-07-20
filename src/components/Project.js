import React from "react";
import Fade from 'react-reveal/Fade';

const Project = ({ item }) => {
  return (
    <Fade bottom cascade delay={item.id*100}>
      <div key={item.id} className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
        <div className="mb-8 border-2 rounded-lg border-accent p-6 flex flex-col justify-start items-center gap-5">
          <img className="rounded-2xl" src={item.image} alt="" />
          <p className="text-justify">{item.desc}</p>
          <a href={item.href} className="py-2 px-4 bg-accent text-white rounded-lg"> Go to Website</a>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
