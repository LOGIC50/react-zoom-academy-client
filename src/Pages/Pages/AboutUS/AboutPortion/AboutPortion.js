import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faBook,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import "./AboutPortion.css";

const AboutPortion = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-around">
        <Col xs={11} md={3} className="about-portion-div mb-4 mx-3">
          <Row>
            <Col xs={4} md={4} className="about-portion-icon">
              <p>
                <FontAwesomeIcon icon={faThumbsUp}> </FontAwesomeIcon>
              </p>
            </Col>
            <Col xs={8} md={8}>
              <h5>Popular Courses</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
        </Col>
        <Col xs={11} md={3} className="about-portion-div mb-4 mx-3">
          <Row>
            <Col xs={4} md={4} className="about-portion-icon">
              <p>
                <FontAwesomeIcon icon={faBook}> </FontAwesomeIcon>
              </p>
            </Col>
            <Col xs={8} md={8}>
              <h5>Popular Courses</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
        </Col>
        <Col xs={11} md={3} className="about-portion-div mb-4 mx-3">
          <Row>
            <Col xs={4} md={4} className="about-portion-icon">
              <p>
                <FontAwesomeIcon icon={faChalkboardTeacher}> </FontAwesomeIcon>
              </p>
            </Col>
            <Col xs={8} md={8}>
              <h5>Popular Courses</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPortion;
