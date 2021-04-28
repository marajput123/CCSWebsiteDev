import { makeStyles } from "@material-ui/core/styles";

export const titleStyles = makeStyles((theme) => ({
  titleContainer: {
    height: "fit-content",
  },
  title_Container: {
    display: "flex",
    minHeight: "400px",
    height: "90vh",
    maxHeight: "1000px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "normal",
      maxHeight: "800px",
    },
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 0px 30px 20px",
    maxWidth: "fit-content",
    minWidth: "fit-content",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  textStyles: {
    paddingTop: "35px",
    fontSize: "40px",
  },
  backgroundContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 5px 10px 100px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 2px 10px 5px",
      height: "100vw",
    },
  },
  backgroundImage: {
    width: "100%",
  },
  logoStyle: {
    height: "50px",
  },
  navBarContainer: {
    padding: "15px 0px 15px 20px",
    height: "50px",
  },
}));

export const serviceStyles = makeStyles(() => ({
  serviceTitle: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8rem",
    marginTop: "4rem",
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "100px",
  },
  gridRoot: {
    width: "100%",
    margin: "0px",
  },
  gridStyles: {
    display: "flex",
    justifyContent: "center",
    padding: "12px 12px 30px 12px",
  },
}));
