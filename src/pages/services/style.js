import { makeStyles } from "@material-ui/core/styles";

export const titleStyles = makeStyles((theme) => ({
  titleContainer: {
    height: "fit-content",
    // maxHeight: "100vh",
  },
  navBarContainer: {
    height: "50px",
  },
  title_Container: {
    display: "flex",
    minHeight: "calc(100vh - 50px)",
    height: "fit-content",
    maxHeight: "900px",
    // minHeight: "100vh",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "normal",
    },
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    maxWidth: "fit-content",
    minWidth: "fit-content",
    [theme.breakpoints.down("sm")]: {
      flex: "1",
    },
  },
  textStyles: {
    fontSize: "40px",
  },
  backgroundContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 5px 10px 50px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 2px 10px 5px",
    },
  },
  backgroundImage: {
    width: "100%",
  },
  logoStyle: {
    height: "50px",
    padding: "15px 0px 0px 20px",
  },
}));

export const serviceStyles = makeStyles(() => ({
  serviceContainer: {},
}));
