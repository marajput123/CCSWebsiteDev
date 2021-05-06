import { makeStyles } from "@material-ui/core";

export const snackbarStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSnackbarContent-root": {
      minWidth: "250px",
      backgroundColor: "#9fbc95",
    },
    "& .MuiSnackbarContent-message": {
      display: "flex",
      alignItems: "center",
    },
  },
  iconStyles: {
    paddingRight: "10px",
  },
}));
