import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./HomeAchive.css";

const HomeAchive = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("./galleries.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div>
      <Row>
        {images.slice(0, 4).map((image) => (
          <Col xs={12} md={3} className="achive-image">
            <img src={image.img} alt="" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeAchive;
