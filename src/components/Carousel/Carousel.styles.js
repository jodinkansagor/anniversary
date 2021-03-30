import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageSliderAndLabel: {
    width: "320px",
    justifyContent: "center",
    paddingBottom: theme.spacing(3),
    flexDirection: 'column',
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: 'row',
      width: "578px",
    },
    display: "flex",
    "& .slick-slider": {
      width: "320px",
      [theme.breakpoints.up("sm")]: {
        width: "450px",
      },
    },
  },

  mySlider: {
    width: "400px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
