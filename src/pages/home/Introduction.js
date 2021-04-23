import React from "react";
import Card from "../../components/card/Card";
import { Typography, Grid } from "@material-ui/core";
import { introductionStyles } from "./styles";

const Introduction = () => {
  const classes = introductionStyles();
  return (
    <>
      {/* Mission statement starts here */}
      <div className={classes.textContainer}>
        <Typography
          color="secondary"
          className={classes.headingStyle}
          variant="h4"
        >
          Our Mission
          <div className={classes.underlineStyle} />
        </Typography>
        <Grid container justify="center">
          <Grid item xs={0} sm={2} md={3} />
          <Grid item xs={12} sm={8} md={6}>
            <Typography
              className={classes.paragraphStyle}
              style={{ padding: "2rem 10px 0px 10px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </Typography>
          </Grid>
          <Grid item xs={0} sm={2} md={3} />
        </Grid>
      </div>
      {/* Mission statment ends here */}
      {/* Services start here*/}
      <div className={classes.textContainer}>
        <Typography
          color="secondary"
          className={classes.headingStyle}
          variant="h4"
        >
          Services
        </Typography>
        <Typography className={classes.subheadingStyle}>
          What we provide for our commuinty
          <div className={classes.underlineStyle} />
        </Typography>
      </div>
      {/* Services Cards */}
      <div style={{ marginTop: "50px", padding: "0px 10px 0px 10px" }}>
        <Grid container justify="center" spacing={2}>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={4}
          ></Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={4}
          ></Grid>
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={4}
          ></Grid>
        </Grid>
      </div>

      {/* Services end here */}
    </>
  );
};

export default Introduction;
