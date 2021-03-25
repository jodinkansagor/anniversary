import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageSliderAndLabel: {
    width: "448px",
    justifyContent: "center",
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
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
