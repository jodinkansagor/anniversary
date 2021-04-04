import { makeStyles } from "@material-ui/core";
import { colors } from "../../style/MuiTheme";

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: "250px",
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
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
  footer: {
    color: colors.primary,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default useStyles;
