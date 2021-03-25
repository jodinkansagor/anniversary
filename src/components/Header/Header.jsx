import { Typography } from "@material-ui/core";
import React from "react";
import artAndToby from "../../assets/artAndToby.gif";
import NavBar from "../NavBar";
import useStyles from "./Header.styles"
const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.headerContainer}>
      <img src={artAndToby} alt="Toby and Art Logo" className={classes.logo} />
      {/* <Typography className={classes.text} variant='h3'>Mazel Tov Art & Toby!</Typography> */}
      <NavBar />
    </div>
  );
};

export default Header;
