import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#897b65",
    filter: "drop-shadow(1px 1px 2px #897b65)",
    // width: "100vw",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px",
    },
  },

  logo: {
    height: "175px",
    width: "175px",
    padding: "15px",
  },
}));

export default useStyles;
