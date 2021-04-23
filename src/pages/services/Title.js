import React from "react";
import serviceBackground from "../../static/svg/services_background.svg";
import { Typography, useMediaQuery } from "@material-ui/core";
import { titleStyles } from "./style";

const Title = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const classes = titleStyles(isMobile);

  return (
    <div className={classes.titleContainer}>
      <div className={classes.navBarContainer}>{/* Logo Imgafe */}</div>
      <div className={classes.title_Container}>
        <div className={classes.textContainer}>
          <Typography variant="h4" className={classes.textStyles}>
            What we
            <br />
            provide for
            <br />
            our community.
          </Typography>
        </div>
        <div className={classes.backgroundContainer}>
          <img className={classes.backgroundImage} src={serviceBackground} />
        </div>
      </div>
    </div>
  );
};

export default Title;
