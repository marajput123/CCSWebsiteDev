import { makeStyles } from "@material-ui/core";

export const titleStyles = makeStyles((theme) => ({
  titleContainer: {
    position: "relative",
    display: "flex",
    maxHeight: "900px",
    height: "90vh",
  },
  titleTextContainer: (isMobile) => ({
    padding: isMobile ? "2.5rem 0rem 0rem 1rem" : "7rem 0rem 0rem 7rem",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "fit-content",
    "& h2": {
      fontSize: isMobile ? "3rem" : "3.75rem",
      fontWeight: "300",
    },
    "& h5": {
      padding: "15px 0px 0px 0px",
    },
  }),
  titleImg: {
    position: "absolute",
    top: "75px",
    right: "-20px",
    [theme.breakpoints.up("lg")]: {
      height: "500px",
    },
    [theme.breakpoints.down("md")]: {
      height: "350px",
      top: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      top: "100px",
    },
  },
  titleButton: {
    width: "175px",
    marginTop: "45px",
  },
}));

export const homeStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
