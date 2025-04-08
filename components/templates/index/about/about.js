import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  const features = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees, clear pricing structure for all users.",
    },
    {
      title: "Easy Integrations",
      description: "Seamlessly connect with your favorite tools and services.",
    },
    {
      title: "Superb Efficiency",
      description: "Optimized workflows to maximize your productivity.",
    },
  ];

  return (
    <section className="about-app py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h3 className="display-5 fw-bold mb-3">
              Get more done in less time
            </h3>
            <p className="lead text-muted">Simple, fast, effortlessly.</p>
          </Col>
        </Row>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-3">{feature.title}</h4>
                  <p className="text-muted mb-0">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
