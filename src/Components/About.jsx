import React from "react";
import { AboutData } from "../assets/Data/AboutData";
import AboutBtnConnect from "./AboutbtnAndConnect";
export default function About() {
  return (
    <section className="about" id="About">
      <div className="about-wrapper">
        <div className="about-description">
          <h4>About Me</h4>
          <p>
            A college student passionate about technology and programming. I
            have experience with various programming languages like C++, Python,
            Java, and JavaScript, and I’m currently focusing on web development.
            My goal is to create modern, responsive, and user-friendly web
            applications. Let’s Connect :
          </p>
          <AboutBtnConnect />
        </div>
        <div className="about-myskill">
          <h4>Tech Stack</h4>
          <div className="skill-list">
            {AboutData.map((item) => (
              <span key={item.id}>
                <img src={item.src} alt={item.name} className={item.name} />
                {/* {item.name} */}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
