import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#efe7db",
    height: "100vh",
  },
  bodyContainer: {
    backgroundColor: "#efe7db",
    display: "flex",
    paddingTop: theme.spacing(4),
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
  carouselContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
}));

export default useStyles;
