import React from "react";
import serviceBackground from "../../static/svg/services_background.svg";
import ccsLogo from "../../static/svg/CCSLogo.svg";
import { Typography, useMediaQuery } from "@material-ui/core";
import { titleStyles } from "./style";

const Title = () => {
  const isMobile = useMediaQuery("(max-width:400px)");
  const classes = titleStyles(isMobile);

  return (
    <div className={classes.titleContainer}>
      <div className={classes.navBarContainer}>
        <img
          src={ccsLogo}
          className={classes.logoStyle}
          alt="Could not load image :("
        />
      </div>
      <div className={classes.title_Container}>
        <div className={classes.textContainer}>
          <Typography
            variant="h4"
            color="secondary"
            className={classes.textStyles}
          >
            What we
            <br />
            provide for
            <br />
            our community.
          </Typography>
        </div>
        <div className={classes.backgroundContainer}>
          <img
            className={classes.backgroundImage}
            src={serviceBackground}
            alt="Could not load image :("
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
