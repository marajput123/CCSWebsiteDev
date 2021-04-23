import { makeStyles } from "@material-ui/core/styles";

export const titleStyles = makeStyles((theme) => ({
  titleContainer: {
    height: "100vh",
    maxHeight: "1000px",
  },
  navBarContainer: {
    height: "50px",
  },
  title_Container: {
    display: "flex",
    height: "calc(100vh - 50px)",
    maxHeight: "900px",
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
}));

export const serviceStyles = makeStyles(() => ({
  serviceContainer: {},
}));
