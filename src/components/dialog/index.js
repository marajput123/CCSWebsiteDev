import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { smallDialogStyles } from "./style";

export const SmallDialog = (props) => {
  const classes = smallDialogStyles();

  return (
    <div>
      <Dialog
        className={classes.dialogRoot}
        open={props.isOpen}
        onClose={props.handleClose}
      >
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialogContent}>
            {props.children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
