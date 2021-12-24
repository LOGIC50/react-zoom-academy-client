import * as React from "react";
import { Col, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Instructor.css";

const Instructor = (props) => {
  React.useEffect(() => {
    AOS.init();
  });
  const { name, img, position } = props.instructor;
  return (
    <Col xs={12} md={3} data-aos="zoom-in" data-aos-duration="3000">
      <Container className="instractor-card">
        <div style={{ width: "100%" }}>
          <div className="instractor-image">
            <img
              style={{ width: "100%", marginTop: "24px" }}
              src={img}
              alt=""
            />
          </div>
          <h4
            style={{
              textAlign: "center",
              margin: "5px auto",
              marginTop: "20px",
              color: "brown",
              fontFamily: '"Merriweather", serif',
            }}
          >
            {name}
          </h4>
          <p style={{ textAlign: "center", margin: "5px auto" }}>{position}</p>
        </div>
      </Container>
    </Col>
  );
};

export default Instructor;
