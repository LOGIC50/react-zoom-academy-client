import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h1
        style={{
          fontSize: "4rem",
          margin: "30px auto",
          fontWeight: "700",
          color: "#23d5ab",
        }}
      >
        Available Courses
      </h1>
      <Container>
        <Row>
          {courses.map((course) => (
            <Col xs={12} md={6}>
              <div className="course-card">
                <img src={course.img} alt="course" />
                <br />
                <h2>{course.name}</h2>
                <p>{course.description}</p>
                <h6>Course Duration: {course.duration}</h6>
                <h6>Class Day: {course.classDay}</h6>
                <h6>Class Time: {course.time}</h6>
                <h6>Course Instructor: {course.instructor}</h6>
                <h4>Cost: {course.price}</h4>
                <Link style={{ textDecoration: "none" }}>
                  <button className="button-33">Purchase</button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
