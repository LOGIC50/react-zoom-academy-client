import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutDetails from "./AboutDetails/AboutDetails";
import AboutPortion from "./AboutPortion/AboutPortion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div style={{ margin: "50px 0px" }} className="about-us-container">
      <AboutBanner></AboutBanner>
      <AboutPortion></AboutPortion>
      <AboutDetails></AboutDetails>
    </div>
  );
};

export default AboutUs;
