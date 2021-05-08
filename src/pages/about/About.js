import React from "react";
import { Title, MobileTitle } from "./Title";
import { Paper, useMediaQuery } from "@material-ui/core";

const About = () => {
  const isMobile = useMediaQuery("(max-width:375px)");
  return (
    <>
      {isMobile ? <MobileTitle /> : <Title />}
      <div>
        <Paper style={{ height: "100vh" }} elevation={10}>
          hello
        </Paper>
      </div>
    </>
  );
};

export default About;
