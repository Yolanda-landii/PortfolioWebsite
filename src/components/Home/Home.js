import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";
import resumePDF from "../../Assets/Yolanda Mabotja - 20250129.pdf"; 

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'M
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> YOLANDA MABOTJA</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>

              {/* View Resume Button */}
              {/* <Button
                variant="primary"
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                download="Yolanda_Mabotja_CV.pdf"
                className="resume-btn"
              >
                📄 View Resume
              </Button> */}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
