import React from "react";
import { Button, Typography, useMediaQuery } from "@material-ui/core";
import { titleStyles } from "./styles";
import homeBackground from "../../static/svg/home_background.svg";

const Title = () => {
  const isTablet = useMediaQuery("(max-width:800px)");
  const isMobile = useMediaQuery("(max-width:600px)");
  const classes = titleStyles(isTablet);

  return (
    <div className={classes.titleContainer}>
      <div className={classes.titleTextContainer}>
        <Typography variant="h2">Carolina Clinical Services</Typography>
        <Typography variant="h5">
          <span style={{ fontStyle: "italic" }}>
            “The art of medicine consists of amusing the patient while nature
            cures the disease.”
          </span>
          {"  "}― Voltaire
        </Typography>
        {isMobile ? (
          <Button
            className={classes.titleButton}
            color="primary"
            variant="contained"
          >
            Our Services
          </Button>
        ) : null}
      </div>

      {isMobile ? null : (
        <img
          style={isTablet ? { height: "200px", top: "59px" } : null}
          className={classes.titleImg}
          src={homeBackground}
        />
      )}
    </div>
  );
};

export default Title;
