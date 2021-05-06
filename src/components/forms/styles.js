import { makeStyles } from "@material-ui/core";

export const contactStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "25px",
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9fbc95",
    },
    "& .MuiOutlinedInput-root:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#9fbc95",
      },
    },
  },
  textPotStyle: {
    visibility: "hidden",
    width: "0px",
    height: "0px",
    position: "absolute",
    top: "0",
    left: "0",
  },
  closeIconStyle: {
    position: "absolute",
    right: "0",
    top: "0",
  },
  activeButton: {
    width: "200px",
    backgroundColor: "#9fbc95",
    color: "white",
    boxShadow:
      "rgb(159 188 149) 0px 1px 15px, rgb(65 168 20 / 13%) 0px 1px 12px",
    "&.MuiButton-root:hover": {
      backgroundColor: "#8bbd79",
    },
  },
  disabledButton: {
    width: "200px",
    backgroundColor: "#d7d7d7",
    color: "#07070742",
  },
  dialogRoot: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: "340px",
    },
  },
  dialogContent: {
    color: "#403e3e",
    display: "flex",
    marginBottom: "0px",
    fontSize: "20px",
    alignItems: "center",
    "& svg": {
      padding: "0px 10px 0px 0px",
    },
  },
}));
