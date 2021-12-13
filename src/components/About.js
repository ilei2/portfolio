import React from "react";
import "./style.css";

export default function About() {
  return (
    <section id="about" className="main-background-color">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Ivy!
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I currently work full time as a software engineer in the Seattle area. 
            In my free time, I like to draw, crochet, and spoil my pet cat.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white contact-btn border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white past-work-btn border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="profile-img"
            alt="hero"
            src="./profile.jpg"
          />
        </div>
      </div>
    </section>
  );
}