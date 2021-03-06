import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Instructor from "../../Instructor/Instructor";

import "./HomeInstructors.css";

const HomeInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <Container style={{ margin: "100px auto" }}>
      <h3 style={{ fontWeight: "600" }}>
        We Have{" "}
        <span style={{ color: "coral" }}>Fantastic Instructor Team</span>
      </h3>
      <h3 style={{ fontWeight: "600" }}>
        To Help Student And They Are Always Ready
      </h3>
      <br />
      <Row>
        {instructors.slice(0, 4).map((instructor) => (
          <Instructor instructor={instructor}></Instructor>
        ))}
      </Row>
      <div style={{ margin: "30px" }}>
        <Link style={{ textDecoration: "none" }} to="/instructors">
          <button className="button-33">
            Explore Our All Instructors Detail
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default HomeInstructors;
