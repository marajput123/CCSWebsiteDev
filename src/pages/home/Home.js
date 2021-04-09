import React from "react";
import Title from "./Title";
import { homeStyles } from "./styles";
import "./home.css";

const Home = () => {
  const classes = homeStyles();
  return (
    <>
      <Title />
    </>
  );
};

export default Home;
