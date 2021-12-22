import React from "react";
import { Col, Container } from "react-bootstrap";
import "./Instructor.css";

const Instructor = (props) => {
  const { name, img, position } = props.instructor;
  return (
    <Col xs={12} md={3}>
      <Container className="instractor-card">
        <div style={{ width: "100%" }}>
          <div className="instractor-image">
            <img
              style={{ width: "100%", marginTop: "24px" }}
              src={img}
              alt=""
            />
          </div>
          <h3
            style={{ textAlign: "center", margin: "5px auto", color: "brown" }}
          >
            {name}
          </h3>
          <p style={{ textAlign: "center", margin: "5px auto" }}>{position}</p>
        </div>
      </Container>
    </Col>
  );
};

export default Instructor;
