import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: '0px'
    }
  },
}));

export default useStyles;
