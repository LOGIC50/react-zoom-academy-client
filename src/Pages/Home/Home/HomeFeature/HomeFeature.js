import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faBook,
  faChalkboardTeacher,
  faGlobe,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeFeature.css";

const HomeFeature = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div
        style={{ marginTop: "70px", marginBottom: "50px", fontWeight: "600" }}
      >
        <h3 style={{ fontWeight: "600", color: "rgb(11, 11, 119)" }}>
          Checkout Our Feature To Know Why We
        </h3>
        <h3 style={{ fontWeight: "600", color: "rgb(11, 11, 119)" }}>
          Are Best In This Platform
        </h3>
      </div>
      <Container>
        <Row className="home-feature-row">
          <Col
            xs={12}
            md={3}
            className="home-feature-portion"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="feature-icon">
              <p>
                <FontAwesomeIcon icon={faThumbsUp}> </FontAwesomeIcon>
              </p>
            </div>
            <div className="feature-text">
              <h6>POPULAR COURSES</h6>
              <p>
                We provide the most popular courses to enhance your skillset
              </p>
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
            data-aos="zoom-in"
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
          <Col
            xs={12}
            md={3}
            className="home-feature-portion"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="feature-icon">
              <p>
                <FontAwesomeIcon icon={faDiscourse}> </FontAwesomeIcon>
              </p>
            </div>
            <div className="feature-text">
              <h6>UNLIMITED COURSES</h6>
              <p>A great resources is available here for you leraning way.</p>
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
                <FontAwesomeIcon icon={faGlobe}> </FontAwesomeIcon>
              </p>
            </div>
            <div className="feature-text">
              <h6>MANY LOCATIONS</h6>
              <p>We have a few campus in many location all over the world</p>
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
                <FontAwesomeIcon icon={faQuestionCircle}> </FontAwesomeIcon>
              </p>
            </div>
            <div className="feature-text">
              <h6>ONLINE SUPPORT</h6>
              <p>When you are not at campust, We have online support</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeFeature;
