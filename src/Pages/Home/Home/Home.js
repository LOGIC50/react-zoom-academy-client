import React from "react";
import HomeAchive from "../HomeAchive/HomeAchive";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeInstructors from "../HomeInstructors/HomeInstructors";
import "./Home.css";
import HomeAd from "./HomeAd/HomeAd";
import HomeCourse from "./HomeCourse/HomeCourse";
import HomeFeature from "./HomeFeature/HomeFeature";

const Home = () => {
  return (
    <div className="home-div">
      <HomeBanner></HomeBanner>
      <HomeFeature></HomeFeature>
      <HomeAd></HomeAd>
      <HomeCourse></HomeCourse>
      <HomeAchive></HomeAchive>
      <br />
      <HomeInstructors></HomeInstructors>
    </div>
  );
};

export default Home;
