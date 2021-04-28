import React from "react";
import { Paper } from "@material-ui/core";
import Card from "../../components/card/Card";
import teamImg from "../../static/svg/team.svg";
import { Heading, SubHeading } from "../../components/textcontainer";
import { Typography, Grid } from "@material-ui/core";
import { introductionStyles } from "./styles";

const Introduction = () => {
  const classes = introductionStyles();
  return (
    <>
      <div className={classes.introContainer} style={{ marginTop: "4rem" }}>
        <Heading heading={"Our Mission"} />
        <Grid container justify="center">
          <Grid item xs={false} sm={2} md={3} />
          <Grid item xs={12} sm={8} md={6}>
            <Typography
              className={classes.paragraphStyle}
              style={{ padding: "2rem 10px 0px 10px" }}
            >
              We are dedicated to providing unique healthcare solutions,
              staffing, and opportunities for the communities we serve.
            </Typography>
          </Grid>
          <Grid item xs={false} sm={2} md={3} />
        </Grid>
      </div>
      <div className={classes.introContainer}>
        <Heading heading={"Our Services"} />
        <div style={{ padding: "2rem 10px 0px 10px" }}>
          <Grid container justify="center" spacing={2}>
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "1rem",
              }}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Paper style={{ height: "300px", width: "300px" }}></Paper>
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Paper style={{ height: "300px", width: "300px" }}></Paper>
            </Grid>
            <Grid
              style={{ display: "flex", justifyContent: "center" }}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Paper style={{ height: "300px", width: "300px" }}></Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.introContainer}>
        {/* <div></div> */}
        <img src={teamImg} />
        <div>
          <SubHeading
            subheading={"Meet the hard workers behind the scenes"}
            heading={"Meet our team"}
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
