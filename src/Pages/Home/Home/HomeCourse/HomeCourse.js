import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeCourse.css";

const HomeCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Container className="home-course-part">
      <h3>We Do What We Love To Do</h3>
      <h3>
        Find the Best Courses
        <span style={{ color: "coral" }}> To Fit Your Needs</span>
      </h3>
      <Container>
        <Row>
          {courses.slice(0, 3).map((course) => (
            <Col xs={12} md={4}>
              <div className="course-card">
                <img src={course.img} alt="course" />
                <br />
                <h2>{course.name}</h2>
                <p>{course.description.substring(0, 150)}</p>
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
    </Container>
  );
};

export default HomeCourse;
