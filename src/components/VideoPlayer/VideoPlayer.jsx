import React from "react";
import ReactPlayer from "react-player";
import Video from "../../assets/SyiBOvUBu.mp4";
import { useTheme, useMediaQuery } from "@material-ui/core";

const VideoPlayer = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const width = mdUp ? 640 : smUp ? 600 : 320;

  return <ReactPlayer url={Video} controls width={width} />;
};

export default VideoPlayer;
