import { makeStyles } from "@material-ui/core/styles";

export const titleStyles = makeStyles((theme) => ({
  titleContainer: {
    height: "fit-content",
  },
  navBarContainer: {
    height: "50px",
  },
  title_Container: {
    display: "flex",
    height: "-webkit-calc(100vh - 85px)",
    height: "-moz-calc(100vh - 85px)",
    height: "calc(100vh - 85px)",
    maxHeight: "1000px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
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
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: "20px",
    // },
  },
  backgroundContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 5px 10px 100px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 2px 10px 5px",
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
    width: "fit-content",
  },
}));

export const serviceStyles = makeStyles(() => ({
  serviceContainer: {},
}));
