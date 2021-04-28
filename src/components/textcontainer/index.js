import React from "react";
import { Typography } from "@material-ui/core";
import { headingStyles } from "./styles";

export const Heading = (props) => {
  const classes = headingStyles();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          color="secondary"
          className={classes.headingStyle}
          variant="h4"
        >
          {props.text}
        </Typography>
        <div className={classes.underlineStyle} />
      </div>
    </>
  );
};
