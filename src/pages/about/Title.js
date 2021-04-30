import { Typography } from "@material-ui/core";
import React from "react";
import aboutBackground from "../../static/svg/about_background.svg";
import { titleStyles, mobileTestStyles } from "./styles";

export const Title = () => {
  const classes = titleStyles();

  return (
    <div className={classes.titleContainer}>
      <div className={classes.titleText}>
        <Typography variant="h2" style={{ fontWeight: "400" }}>
          About us.
        </Typography>
        <div>
          <Typography variant="h5">Our History.</Typography>
          <Typography variant="h5">Our Mission.</Typography>
          <Typography variant="h5">Our Team.</Typography>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <img src={aboutBackground} className={classes.titleImg} />
      </div>
    </div>
  );
};

export const MobileTitle = () => {
  const classes = mobileTestStyles();
  return (
    <div className={classes.titleContainer}>
      <div className={classes.titleText}>
        <Typography variant="h2" style={{ fontWeight: "400" }}>
          About us.
        </Typography>
        <div>
          <Typography variant="h5">Our History.</Typography>
          <Typography variant="h5">Our Mission.</Typography>
          <Typography variant="h5">Our Team.</Typography>
        </div>
      </div>
      <div>
        <img
          style={{ width: "100vw", minWidth: "360px" }}
          src={aboutBackground}
        />
      </div>
    </div>
  );
};
