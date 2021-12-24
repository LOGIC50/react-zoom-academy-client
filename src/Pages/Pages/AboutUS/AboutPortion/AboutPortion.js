import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faBook,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutPortion.css";

const AboutPortion = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <Container>
      <Row className="home-feature-row">
        <Col
          xs={12}
          md={3}
          className="home-feature-portion"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="feature-icon">
            <p>
              <FontAwesomeIcon icon={faThumbsUp}> </FontAwesomeIcon>
            </p>
          </div>
          <div className="feature-text">
            <h6>POPULAR COURSES</h6>
            <p>We provide the most popular courses to enhance your skillset</p>
          </div>
        </Col>
        <Col
          xs={12}
          md={3}
          className="home-feature-portion"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="feature-icon">
            <p>
              <FontAwesomeIcon icon={faBook}> </FontAwesomeIcon>
            </p>
          </div>
          <div className="feature-text">
            <h6>MODERN LIBRARY</h6>
            <p>We have a great collection of books which you need to read.</p>
          </div>
        </Col>
        <Col
          xs={12}
          md={3}
          className="home-feature-portion"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="feature-icon">
            <p>
              <FontAwesomeIcon icon={faChalkboardTeacher}> </FontAwesomeIcon>
            </p>
          </div>
          <div className="feature-text">
            <h6>QUALIFIED TEACHER</h6>
            <p>Almost 50+ qualified teacher are here to support you</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPortion;
