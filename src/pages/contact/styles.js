import { makeStyles } from "@material-ui/core";
import contactBackground from "../../static/svg/contact_background.svg";

export const contactStyles = makeStyles(() => ({
  rootContainer: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh - 64px)",
    background: `url(${contactBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "bottom",
    backgroundSize: "contain",
  },
  contactContainer: {
    paddingTop: "40px",
    height: "100%",
    paddingBottom: "80px",
  },
  contactElement: {
    display: "flex",
    alignItems: "center",
    padding: "15px 0px",
    "& >p": {
      fontWeight: "400",
    },
    "& >svg": {
      color: "#9fbc95",
      paddingRight: "10px",
    },
  },
  socialContainer: {
    display: "flex",
    paddingTop: "20px",
    justifyContent: "center",
    height: "50px",
    alignItems: "center",
  },
  socialIcon: {
    cursor: "pointer",
    color: "#9fbc95",
    margin: "0px 20px",
    fontSize: "30px",
    transition: "font-size .3s",
    "&:hover": {
      fontSize: "45px",
    },
  },
  messageContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& >p": {
      fontSize: "20px",
      fontWeight: "400",
      padding: "20px 0px",
    },
  },
  buttonStyle: {
    backgroundColor: "#9fbc95",
    color: "white",
    "&.MuiButton-root:hover": {
      backgroundColor: "#9fbc95",
    },
  },
}));
