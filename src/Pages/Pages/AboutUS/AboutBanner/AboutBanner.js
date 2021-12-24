import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutBanner.css";

const AboutBanner = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <Container className="aboutus-container" style={{ marginBottom: "100px" }}>
      <Row data-aos="zoom-in" data-aos-duration="3000">
        <Col xs={12} md={6}>
          <div>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src="https://i.ibb.co/hZgdTrK/Laughing-mexican-student-with-tablet-computer-and-friends-in-background-in-front-of-university-build.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="aboutBanner-text">
            <h3>
              We have Experienced Professionals & We Do Our Best to Achieve Your
              Goal. Your Happiness Is Our First Priority
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              nobis ad vero aliquam architecto? Facilis error expedita
              perspiciatis consequatur officia commodi, fugiat fuga laudantium
              aliquam nihil. Quo similique necessitatibus voluptates.
            </p>
            <div>
              <Row>
                <Col xs={4} md={4}>
                  <h2 style={{ color: "coral" }}>1000+</h2>
                  <h6>Happy Students</h6>
                </Col>
                <Col xs={4} md={4}>
                  <h2 style={{ color: "blueViolet" }}>55+</h2>
                  <h6>Teachers</h6>
                </Col>
                <Col xs={4} md={4}>
                  <h2 style={{ color: "blue" }}>15+</h2>
                  <h6>Courses</h6>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutBanner;
