import React from "react";
import { Typography } from "@material-ui/core";
import { headingStyles } from "./styles";

export const Heading = (props) => {
  const classes = headingStyles();

  return (
    <>
      <Typography
        color="secondary"
        className={classes.headingStyle}
        variant="h4"
      >
        {props.text}
        <div className={classes.underlineStyle} />
      </Typography>
    </>
  );
};
