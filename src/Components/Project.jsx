import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectData } from "../assets/Data/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Project() {
  return (
    <section className="project" id="Project">
      <div className="project-wrapper">
        <h4>Projects</h4>
        <div className="project-list">
          {projectData.map((item) => (
            <div
              className={item.name}
              id="project-item"
              key={item.id}
              style={{ backgroundColor: item.bg }}
            >
              <div className="project-icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <span>{item.name}</span>
              <div className="run-wrapper">
                {/* <a href="">
                  <button className="run-btn">Run</button>
                </a> */}
                <a href={item.src}>
                  <button className="run-btn">
                    <FontAwesomeIcon icon={faGithub} />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
