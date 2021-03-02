import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageSliderAndLabel: {
    width: "500px",
    margin: "50px"
  },

  mySlider: {
    width: "450px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "30px",
    "& .slick-slide": {
      width: "auto",
    },
    "& .slick-active": {
      width: "auto",
    },
  },
}));

export default useStyles;
