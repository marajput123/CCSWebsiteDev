import React from "react";
import { Button, Typography, useMediaQuery } from "@material-ui/core";
import { titleStyles } from "./styles";
import homeBackground from "../../static/svg/home_background.svg";

const Title = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
  const classes = titleStyles(isMobile);

  return (
    <div className={classes.titleContainer}>
      <div className={classes.titleTextContainer}>
        <Typography
          variant="h2"
          style={{
            textAlign: `${isMobile ? "center" : "initial"}`,
            fontWeight: "400",
          }}
        >
          Carolina Clinical Services
        </Typography>
        <Typography
          variant="h5"
          style={{ textAlign: `${isMobile ? "center" : "initial"}` }}
        >
          <span
            style={{
              fontStyle: "italic",
              display: `${isMobile ? "block" : "inline"}`,
            }}
          >
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
        <img className={classes.titleImg} src={homeBackground} />
      )}
    </div>
  );
};

export default Title;
