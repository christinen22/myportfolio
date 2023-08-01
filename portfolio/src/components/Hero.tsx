import React from "react";
import HeroImg from "../assets/hero-img.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="px-5 py-32">
      <div className="hero-info pb-5 md:pb-0">
        <div className="hero-img">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">C</span>hristine <br />
            Frontend Developer
          </h1>

          <img src={HeroImg} alt="illustration" className="hero-img-img" />
        </div>
      </div>

      <p className="py-5">
        I am proficient in JavaScript, Typescript, React.js, Laravel and
        learning more...
      </p>

      <div className="flex py-5 ">
        <a
          href="https://github.com/christinen22"
          className="pr-4 inline-block text-accent hover:text-white"
        >
          {" "}
          <FaGithub size={40} />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/christine-nilsson-82536267/"
          className="pr-4 inline-block text-accent hover:text-white"
        >
          {" "}
          <FaLinkedinIn size={40} />{" "}
        </a>
      </div>

      <a
        href="/#projects"
        className=" btn bg-accent  border-2 border-[#7477FF] px-6 py-3 hover:bg-transparent"
      >
        See Projects
      </a>
    </section>
  );
};

export default Hero;
