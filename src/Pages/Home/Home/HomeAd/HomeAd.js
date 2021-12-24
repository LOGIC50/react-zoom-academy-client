import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeAd.css";

const HomeAd = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div
      style={{
        backgroundColor: "rgb(237, 244, 252)",
        margin: "20px 5px",
      }}
    >
      <Container>
        <Row className="homead-container">
          <Col xs={12} md={7} data-aos="fade-right" data-aos-duration="3000">
            <div className="home-container-text">
              <h4>
                We Have Experienced Professionals & We Do Our Best To Achieve
                Your Goal. Your Happiness Is Our First Priority.
              </h4>
              <p>
                university, institution of higher education, usually comprising
                a college of liberal arts and sciences.university, institution
                of higher education, usually comprising a college of liberal
                arts and sciences.
              </p>
              <ul className="text-start">
                <li>
                  <h5>Best Quality Courses</h5>
                  <p>
                    Quality management issues are responsible for an
                    unfathomable amount of lost very revenue.Too many companies
                    invest in software, consultants
                  </p>
                </li>
                <li>
                  <h5>Best Teachers</h5>
                  <p>
                    Too many companies invest in software, consultants, or
                    systems — but fail to invest their resource, their
                    people.Quality management issues are
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={5} data-aos="fade-left" data-aos-duration="3000">
            <img
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
              src="https://i.ibb.co/q7XmftL/e2.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeAd;
