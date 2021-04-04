import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#efe7db",
    height: "100vh",
  },
  bodyContainer: {
    backgroundColor: "#efe7db",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  introAndImages: {
    backgroundColor: "#efe7db",
    display: "flex",
    paddingTop: theme.spacing(4),
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    marginBottom: theme.spacing(4),
  },
  carouselContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  videoContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      justifyContent: "space-around"
    },
  }
}));

export default useStyles;
