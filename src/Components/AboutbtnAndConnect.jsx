import React from "react";
import "/github_connect.svg";
import "/linkedin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import CV from "../assets/CV/CV 08 August 2025 edited.pdf";
export default function AboutBtnConnect() {
  function handleDownload() {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Ahmad_Herkal_Taqyudin.pdf";
    link.click();
  }
  return (
    <div className="about-btn-connect">
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-offset="10"
        className="button-desc-about"
      >
        <button onClick={handleDownload}>CV</button>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-offset="10"
        className="connect-icon"
      >
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
