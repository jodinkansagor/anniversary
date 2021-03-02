import React from "react";
import useStyles from "./NavBar.styles.js";

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navContainer}>
      <a className={classes.navLink} href="#photos">
        Photos
      </a>
      <a className={classes.navLink} href="#video">
        Video
      </a>
      <a className={classes.navLink} href="testimonials">
        Testimonials
      </a>
    </nav>
  );
};

export default NavBar;
