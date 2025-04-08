// components/Hero.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            
            <p
              className="mb-4 text-center text-lg-start lh-1"
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 900,
                fontSize: "36px",
                letterSpacing: "-0.01em",
              }}
            >
              Manage your daily tasks better without all the stress.
            </p>
            <p className="mb-4">
              Change the way you manage your tasks with our revolutionary
              project management technology.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <Button variant="primary" size="lg" className="px-4">
                Get Started
              </Button>
              <Button variant="primary" size="lg" className="px-4">
                Schedule a Demo
              </Button>
            </div>
          </Col>

          <Col lg={6}>
            {/* Placeholder for an image - you can replace this with an actual image */}
            <div
              className="bg-secondary rounded-3 p-5 text-white d-flex align-items-center justify-content-center"
              style={{ height: "300px" }}
            >
              <span>Hero Image Placeholder</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
