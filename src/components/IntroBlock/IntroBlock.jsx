import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./IntroBlock.styles";

const IntroBlock = () => {
  const classes = useStyles();

  return (
    <div className={classes.textContainer}>
      <Typography variant="h4">Art & Toby</Typography>
      <Typography>1971... It was a good year for weddings. </Typography>
      <Typography>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</Typography>
    </div>
  );
};

export default IntroBlock;
