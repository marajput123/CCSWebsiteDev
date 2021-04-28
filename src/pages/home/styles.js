import { makeStyles } from "@material-ui/core";

export const titleStyles = makeStyles((theme) => ({
  titleContainer: (isMobile) => ({
    position: "relative",
    display: "flex",
    maxHeight: "900px",
    height: "90vh",
    minHeight: "500px",
    overflow: " hidden",
    justifyContent: isMobile ? "center" : null,
  }),
  titleTextContainer: (isMobile) => ({
    padding: isMobile ? "5.5rem 0rem 0rem 0rem" : "7rem 0rem 0rem 7rem",
    alignItems: isMobile ? "center" : null,
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
    right: "0px",
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
  bodyContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  paperContainer: {
    width: "98%",
    marginBottom: "3rem",
    paddingBottom: "3rem",
    borderRadius: "14px",
  },
}));

export const introductionStyles = makeStyles((theme) => ({
  introContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "8rem",
  },
  paragraphStyle: {
    padding: "2rem 2rem 0rem 2rem",
    textAlign: "center",
  },
}));
