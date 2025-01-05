import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <section className="footer" id="Footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <a href="" className="email">
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            <a href="">a.haikal.t@gmail.com</a>
          </a>
        </div>
        <div className="footer-content-mid">
          <span>Copyright</span>
          <span>© 2024</span>
          <span>Ahmad Herkal Taqyudin.</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </section>
  );
}
