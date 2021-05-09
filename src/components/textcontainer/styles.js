import { makeStyles } from "@material-ui/core";

export const headingStyles = makeStyles(() => ({
  textContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  underlineStyle: {
    width: "50px",
    position: "absolute",
    height: "100%",
    borderBottom: "2px solid #9fbc95",
  },
  headingStyle: {
    fontWeight: "300",
    padding: "10px",
  },
  subheadingStyle: {
    padding: "5px 10px 10px 10px",
    textAlign: "center",
  },
}));
