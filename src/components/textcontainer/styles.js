import { makeStyles } from "@material-ui/core";

export const headingStyles = makeStyles(() => ({
  underlineStyle: {
    width: "50%",
    position: "absolute",
    height: "100%",
    top: ".5rem",
    border: "0px 0px 1px 0px solid black",
    borderBottom: "2px solid #9fbc95",
  },
  headingStyle: {
    fontWeight: "300",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
}));
