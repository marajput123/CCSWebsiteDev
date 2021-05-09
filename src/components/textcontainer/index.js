import React from "react";
import { Typography } from "@material-ui/core";
import { headingStyles } from "./styles";

export const Heading = (props) => {
  const classes = headingStyles();

  return (
    <>
      <div className={classes.textContainer}>
        <Typography className={classes.headingStyle} variant="h4">
          {props.heading}
        </Typography>
        <div className={classes.underlineStyle} />
      </div>
    </>
  );
};

export const SubHeading = (props) => {
  const classes = headingStyles();
  return (
    <>
      <div className={classes.textContainer}>
        <Typography
          className={classes.headingStyle}
          style={{
            paddingBottom: "0px",
            fontWeight: `${props.weight ? props.weight : null}`,
          }}
          variant="h4"
        >
          {props.heading}
        </Typography>
        <Typography
          style={{ fontWeight: `${props.subWeight ? props.subWeight : null}` }}
          className={classes.subheadingStyle}
        >
          {props.subheading}
        </Typography>
        <div className={classes.underlineStyle} />
      </div>
    </>
  );
};
