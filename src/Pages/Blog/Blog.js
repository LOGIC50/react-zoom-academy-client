import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Container>
      <Row>
        {blogs.map((blog) => (
          <Col xs={12} md={12} className="blogs-box">
            <Row>
              <Col
                xs={12}
                md={6}
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <img src={blog.img} alt="" />
              </Col>
              <Col xs={12} md={6} className="blogs-text">
                <div>
                  <h3>{blog.name}</h3>
                  <h6>Written By: {blog.author}</h6>
                </div>
                <hr />
                <p>{blog.description}</p>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
