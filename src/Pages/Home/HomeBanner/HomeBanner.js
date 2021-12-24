import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div className="home-banner">
      <h3 data-aos="zoom-in-up" data-aos-duration="3000">
        Best Learning Platform In This Region
      </h3>
      <h1 data-aos="zoom-in-up" data-aos-duration="3000">
        ZOOM <span style={{ color: "coral" }}>ACADEMY</span>
      </h1>
      <Link style={{ textDecoration: "none" }} to="/login">
        <button
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="button-29"
        >
          Join Us Today
        </button>
      </Link>
    </div>
  );
};

export default HomeBanner;
