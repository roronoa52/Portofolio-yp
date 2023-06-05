import React from "react";
import { social } from "../data";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return <Link className="text-accent text-base">{icon}</Link>;
            })}
          </div>

          <div>
            <h1 className="text-4xl">Farhan</h1>
          </div>

          <p>&copy; 2023 Farhan Yudha Pratama</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
