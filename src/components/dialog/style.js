import { makeStyles } from "@material-ui/core";

export const smallDialogStyles = makeStyles((theme) => ({
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
