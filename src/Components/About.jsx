import React from "react";
import { AboutData } from "../assets/Data/AboutData";
import AboutBtnConnect from "./AboutbtnAndConnect";
export default function About() {
  return (
    <section className="about" id="About">
      <div className="about-wrapper">
        <div className="about-description">
          <h4 data-aos="fade-right">About Me</h4>
          <p data-aos="fade-right" data-aos-delay="200">
            A Computer Science student passionate about full-stack web
            development, with hands-on experience building responsive and
            user-friendly web applications. Comfortable working with
            technologies like Next.js, React, Express.js, PostgreSQL, and
            MongoDB — from frontend interfaces to backend services. I enjoy
            turning complex problems into clean, maintainable code and
            continuously strive to grow as a developer through real-world
            practice and collaboration. Let’s connect and build great things
            together.
          </p>
          <AboutBtnConnect />
        </div>
        <div className="about-myskill">
          <h4 data-aos="fade-left">Tech Stack</h4>
          <div className="skill-list">
            {AboutData.map((item, index) => {
              const delay = 50 + Math.floor(index / 3) * 50;
              return (
                <span data-aos="fade-left" data-aos-delay={delay} key={item.id}>
                  <img src={item.src} alt={item.name} className={item.name} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
