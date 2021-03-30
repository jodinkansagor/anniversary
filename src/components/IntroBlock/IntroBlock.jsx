import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./IntroBlock.styles";

const IntroBlock = () => {
  const classes = useStyles();

  return (
    <div className={classes.textContainer}>
      <div>
        <Typography variant="h3" className={classes.fiftyYears}>
          50 Years!
        </Typography>
        <Typography variant="h6" className={classes.congrats}>
          Congratulations to Toby & Art (aka Mom & Dad, Safta & Grandpa and Aunt
          Toby & Uncle Arthur) on 50 years of marriage!
        </Typography>
        <Typography variant="h6" className={classes.inspire}>
          Your everlasting love is an inspiration to all of us. You have taught
          us so much about what it means to not only be in love but to be a good
          partner in life.
        </Typography>
      </div>
      <div>
        <Typography variant="h4" className={classes.quote}>
          <em>In life, it's not where you go, it's who you travel with."</em>
        </Typography>
        <Typography className={classes.charles}>– Charles Schulz</Typography>
      </div>
    </div>
  );
};

export default IntroBlock;
