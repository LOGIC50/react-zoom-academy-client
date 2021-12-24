import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Courses.css";

const Courses = () => {
  React.useEffect(() => {
    AOS.init();
  });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="course-page">
      <h1
        style={{
          fontSize: "3rem",
          margin: "30px auto",
          fontWeight: "700",
          color: "#23d5ab",
          fontFamily: '"Merriweather", serif',
        }}
      >
        Available Courses
      </h1>
      <Container>
        <Row>
          {courses.map((course) => (
            <Col
              xs={12}
              md={12}
              style={{ marginBottom: "40px" }}
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              <div className="course-card">
                <Row>
                  <Col xs={12} md={6}>
                    <img src={course.img} alt="course" />
                  </Col>

                  <Col xs={12} md={6} className="course-card-details">
                    <h2 style={{ fontFamily: '"Merriweather", serif' }}>
                      {course.name}
                    </h2>
                    <p style={{ fontFamily: '"Merriweather", serif' }}>
                      {course.description}
                    </p>
                    <h6 style={{ fontFamily: '"Merriweather", serif' }}>
                      Course Duration: {course.duration}
                    </h6>
                    <h6 style={{ fontFamily: '"Merriweather", serif' }}>
                      Class Day: {course.classDay}
                    </h6>
                    <h6 style={{ fontFamily: '"Merriweather", serif' }}>
                      Class Time: {course.time}
                    </h6>
                    <h6 style={{ fontFamily: '"Merriweather", serif' }}>
                      Course Instructor: {course.instructor}
                    </h6>
                    <h6 style={{ fontFamily: '"Merriweather", serif' }}>
                      Course Cost: {course.price}
                    </h6>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/purchase"
                    >
                      <button className="button-33">Purchase</button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
