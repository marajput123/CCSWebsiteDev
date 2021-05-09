import { makeStyles } from "@material-ui/core";

export const titleStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: "40px 0px 30px 0px",
    display: "flex",
    height: "90vh",
    maxHeight: "900px",
    minHeight: "300px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
  },
  titleText: {
    color: "white",
    marginBottom: "7rem",
    minWidth: "fit-content",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  titleImg: {
    width: "100%",
    right: "0px",
    top: "20px",
    height: "100%",
  },
}));

export const mobileTestStyles = makeStyles((theme) => ({
  titleContainer: {
    display: "flex",
    width: "100%",
    height: "90vh",
    maxHeight: "900px",
    minHeight: "300px",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
    paddingTop: "20px",
    justifyContent: "center",
  },
  titleText: {
    color: "white",
    padding: "15px",
  },
}));
