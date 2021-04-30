import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import {
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Phone,
  LocationOn,
} from "@material-ui/icons";

const Contact = () => {
  return (
    <div>
      {/* <Title />
      <Paper elevation={5}>
        <SubHeading
          heading={"Contact us"}
          subheading={"We would love to hear from you"}
        />
      </Paper> */}
      <div>
        <Typography
          style={{
            padding: "15px 0px 10px 0px",
            fontWeight: "500",
            fontSize: "2.5rem",
          }}
          variant="h4"
        >
          Get in touch
        </Typography>

        <Grid container justify={"center"}>
          <Grid item style={{ minWidth: "330px" }}>
            <Typography style={{ fontWeight: "400" }} variant="h6">
              We would love to hear from you
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", paddingTop: "25px" }}>
                <Email style={{ paddingRight: "15px" }} />
                <Typography style={{ fontWeight: "500" }}>
                  Email@email.com
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: "25px" }}>
                <Phone style={{ paddingRight: "15px" }} />
                <Typography style={{ fontWeight: "500" }}>
                  919-999-9999
                </Typography>
              </div>
              <div style={{ display: "flex", paddingTop: "25px" }}>
                <LocationOn style={{ paddingRight: "15px" }} />
                <Typography style={{ fontWeight: "500" }}>
                  1127 Kildaire Farm Rd, Cary, NC 27511
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item style={{ minWidth: "330px" }}>
            <Typography style={{ fontWeight: "400" }} variant="h6">
              Connect with us
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
