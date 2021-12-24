import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Classroom = () => {
  React.useEffect(() => {
    AOS.init();
  });
  const [classroom, setClassroom] = useState([]);

  useEffect(() => {
    fetch("./galleries.json")
      .then((res) => res.json())
      .then((data) => setClassroom(data));
  }, []);
  return (
    <Container>
      <h1
        style={{
          fontFamily: "'Moon Dance', cursive",
          fontSize: "3rem",
          textAlign: "left",
        }}
      >
        ClASS ROOMS
      </h1>
      <hr />
      <Row>
        {classroom.slice(0, 6).map((classimg) => (
          <Col xs={12} md={4} data-aos="zoom-in" data-aos-duration="2000">
            <img
              style={{ width: "100%", padding: "0px", marginBottom: "20px" }}
              src={classimg.img}
              alt=""
            />
          </Col>
        ))}
      </Row>
      <h2
        style={{
          fontFamily: "'Moon Dance', cursive",
          fontSize: "3rem",
          textAlign: "left",
        }}
      >
        FESTIVALS
      </h2>
      <hr />
      <Row>
        {classroom.slice(6, 11).map((classimg) => (
          <Col xs={12} md={4} data-aos="zoom-out" data-aos-duration="2000">
            <img
              style={{ width: "100%", padding: "0px", marginBottom: "20px" }}
              src={classimg.img}
              alt=""
            />
          </Col>
        ))}
      </Row>
      <h2
        style={{
          fontFamily: "'Moon Dance', cursive",
          fontSize: "3rem",
          textAlign: "left",
        }}
      >
        AUDITORIAM
      </h2>
      <hr />
      <Row>
        {classroom.slice(11, 20).map((classimg) => (
          <Col xs={12} md={4} data-aos="zoom-in" data-aos-duration="2000">
            <img
              style={{ width: "100%", padding: "0px", marginBottom: "20px" }}
              src={classimg.img}
              alt=""
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Classroom;
