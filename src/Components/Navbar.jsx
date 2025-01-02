import React, { useState } from "react";
import { NavData } from "../assets/Data/NavbarData";
export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  function toggleNav() {
    setNavActive(!navActive);
  }
  return (
    <section className="navbar" id="Navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <h4>Portfolio</h4>
        </div>
        <ul className={`nav-links ${navActive ? "nav-active" : ""}`}>
          {NavData.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div
          className={`burger ${navActive ? "toggle" : ""}`}
          onClick={toggleNav}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </section>
  );
}
