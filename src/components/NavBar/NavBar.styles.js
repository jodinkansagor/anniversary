import { makeStyles } from "@material-ui/core";
import { colors } from "../../style/MuiTheme";
const useStyles = makeStyles((theme) => ({
  navContainer: {
    display: "flex",
    flexDirection: "row",
  },

  navLink: {
    margin: "10px",
    color: colors.secondary,
    textDecoration: "none",
    fontSize: "24px",
  },
}));

export default useStyles;
