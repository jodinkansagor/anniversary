import { makeStyles } from "@material-ui/core";
import { colors } from "../../style/MuiTheme";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: '1',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    filter: "drop-shadow(1px 1px 2px #897b65)",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      padding: "0px 60px",
    },
  },
  text: {
    color: colors.secondary,
    textAlign: "center",
    padding: "0px 40px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(0),
    },
  },
  logo: {
    height: "175px",
    width: "175px",
    padding: "16px 40px",
  },
}));

export default useStyles;
