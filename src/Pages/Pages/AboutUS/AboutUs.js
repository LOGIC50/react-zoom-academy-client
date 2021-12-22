import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutDetails from "./AboutDetails/AboutDetails";
import AboutPortion from "./AboutPortion/AboutPortion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <AboutBanner></AboutBanner>
      <AboutPortion></AboutPortion>
      <AboutDetails></AboutDetails>
    </div>
  );
};

export default AboutUs;
