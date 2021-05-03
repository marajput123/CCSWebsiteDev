import React from "react";
import { Snackbar, IconButton, Typography } from "@material-ui/core";
import { Close, Done } from "@material-ui/icons";
import { snackbarStyles } from "./styles";

export const SuccessSnackbar = (props) => {
  const classes = snackbarStyles();
  return (
    <div>
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={props.open}
        autoHideDuration={3000}
        onClose={props.handleClose}
        message={
          <>
            <Done className={classes.iconStyles} />
            <Typography>Email Sent</Typography>
          </>
        }
        action={
          <React.Fragment>
            <IconButton
              onClick={props.handleClose}
              size="small"
              aria-label="close"
              color="inherit"
            >
              <Close fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};
