import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div style={{ padding: "30px 50px" }} className="footer-container">
        <Row>
          <Col xs={12} md={4} className="footer-first">
            <h3>ZOOM ACADEMY</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              laboriosam blanditiis sequi facere. Reprehenderit quos dignissimos
              dolore magni quam ex.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <h5>Programs</h5>
            <hr />
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/courses"
              >
                Web Development
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/courses"
              >
                Web Design
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/courses"
              >
                Digital Marketing
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/courses"
              >
                Web Security
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/courses"
              >
                Python Development
              </Link>
            </p>
          </Col>
          <Col xs={12} md={2}>
            <h5>Our Board</h5>
            <hr />
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/aboutus"
              >
                About Us
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Careers
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Membership
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Research
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Board Foundation
              </Link>
            </p>
          </Col>
          <Col xs={12} md={3}>
            <h5>If Necessary</h5>
            <hr />
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Help
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contactus"
              >
                Contact Us
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Doing Business
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Privacy Center
              </Link>
            </p>
            <p>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/extraroute"
              >
                Privacy Setting
              </Link>
            </p>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom">
        <p>2021 Zoom Academy Board</p>
        <p>
          PSAT/NMSQT is a registered trademark of the board and National Merit
          Scholarship Corporation
        </p>
      </div>
    </>
  );
};

export default Footer;
