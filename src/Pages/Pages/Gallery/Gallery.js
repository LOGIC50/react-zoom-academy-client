import React from "react";
import Classroom from "./Classroom/Classroom";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div style={{ margin: "50px auto" }} className="gallery">
      <h1
        style={{
          fontFamily: "'Moon Dance', cursive",
          fontSize: "4rem",
          color: "brown",
        }}
      >
        Things end but memories last forever
      </h1>
      <Classroom></Classroom>
    </div>
  );
};

export default Gallery;
