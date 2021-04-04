import { makeStyles } from "@material-ui/core";
import { colors } from "../../style/MuiTheme";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    maxWidth: "600px",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: "0px",
    },
  },
  fiftyYears: {
    color: colors.primary,
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  congrats: {
    marginBottom: theme.spacing(2),
  },
  inspire: {
    marginBottom: theme.spacing(2),
  },
  quote: {
    color: colors.primary,
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing(10),
    },
  },
  charles: {
    color: colors.primary,
    textAlign: "right",
  },
}));

export default useStyles;
