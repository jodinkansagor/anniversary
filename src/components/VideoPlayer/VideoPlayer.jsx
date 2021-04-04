import React from "react";
import ReactPlayer from "react-player";
import Video from "../../assets/BknCTwDHd.mp4";
import { useTheme, useMediaQuery, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  video: {
    marginBottom: theme.spacing(4),
  },
}));

const VideoPlayer = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  const width = mdUp ? 640 : smUp ? 600 : 320;

  return (
    <ReactPlayer url={Video} controls width={width} className={classes.video} />
  );
};

export default VideoPlayer;
