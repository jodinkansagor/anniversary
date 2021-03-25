import { makeStyles } from "@material-ui/core";
import { colors } from "../../style/MuiTheme";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    filter: "drop-shadow(1px 1px 2px #897b65)",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px",
    },
  },
  text: {
    color: colors.secondary,
    textAlign: "center",
  },
  logo: {
    height: "175px",
    width: "175px",
    padding: "16px 8px",
  },
}));

export default useStyles;
