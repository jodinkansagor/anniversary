import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  videoText: {
    maxWidth: "500px",
    textAlign: "center",
    color: "#897b65",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const VideoText = () => {
  const classes = useStyles();
  return (
    <div className={classes.textContainer}>
      <Typography variant="h3" className={classes.videoText}>
        We all had some things we wanted to tell you!
      </Typography>
    </div>
  );
};

export default VideoText;
