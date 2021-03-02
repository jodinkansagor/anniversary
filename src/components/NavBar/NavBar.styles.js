import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    display: "flex",
    flexDirection: "row",
  },

  navLink: {
    margin: "10px",
    color: "#8ac5fa",
    textDecoration: "none",
    fontSize: "24px",
  },
}));

// @media (min-width: 800px) {
//   .navContainer {
//     margin-right: 30px;
//   }
//   .navLink {
//     font-size: 32px;
//   }
// }

export default useStyles
