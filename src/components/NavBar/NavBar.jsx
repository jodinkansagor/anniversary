import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <a className="navLink" href="#photos">
        Photos
      </a>
      <a className="navLink" href="#video">
        Video
      </a>
      <a className="navLink" href="testimonials">
        Testimonials
      </a>
    </nav>
  );
};

export default NavBar;
