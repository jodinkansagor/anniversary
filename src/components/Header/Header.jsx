import { Typography, useTheme, useMediaQuery } from "@material-ui/core";
import React from "react";
import artAndToby from "../../assets/artAndToby.gif";
import useStyles from "./Header.styles";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.headerContainer}>
      <img src={artAndToby} alt="Toby and Art Logo" className={classes.logo} />

      <Typography className={classes.text} variant={mdUp ? "h3" : "h5"}>
        Mazel Tov Art & Toby!
      </Typography>
    </div>
  );
};

export default Header;
