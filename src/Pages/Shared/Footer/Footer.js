import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="bg-primary"
      style={{ padding: "30px 50px" }}
      className="footer-container"
    >
      <Row>
        <Col xs={12} md={3}>
          <h3>ZOOM ACADEMY</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            laboriosam blanditiis sequi facere. Reprehenderit quos dignissimos
            dolore magni quam ex. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Cum, inventore.
          </p>
        </Col>
        <Col xs={12} md={3}>
          <h5>Usefull Links</h5>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <h5>Usefull Links</h5>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
          <h5>Usefull Links</h5>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
