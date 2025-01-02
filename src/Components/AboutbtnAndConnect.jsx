import React from "react";
import "/github_connect.svg";
import "/linkedin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function AboutBtnConnect() {
  return (
    <div className="about-btn-connect">
      <div className="button-desc-about">
        <button>CV</button>
      </div>
      <div className="connect-icon">
        <a href="https://github.com/kumbangheracles" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="custom-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmad-herkal-taqyudin/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="custom-icon" />
        </a>
      </div>
    </div>
  );
}