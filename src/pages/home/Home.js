import React from "react";
import Title from "./Title";
import { homeStyles } from "./styles";
import Introduction from "./Introduction";
import { Paper } from "@material-ui/core";

const Home = () => {
  const classes = homeStyles();
  return (
    <>
      <Title />
      <div className={classes.bodyContainer}>
        <Paper elevation={24} className={classes.paperContainer}>
          <Introduction />
        </Paper>
      </div>
    </>
  );
};

export default Home;
