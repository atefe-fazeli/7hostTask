
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SectionOne = () => {
  return (
    <section className="stats-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Stats Cards */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex flex-column gap-4">
              {/* Task Count Card */}
              <div className="p-4 bg-white rounded-3 shadow-sm">
                <h3 className="text-muted mb-2 fs-6">Your Tasks Added</h3>
                <p className="display-4 fw-bold mb-0">1,281</p>
              </div>

              {/* User Profile Card */}
              <div className="p-4 bg-white rounded-3 shadow-sm">
                <h3 className="text-muted mb-2 fs-6">User Profile</h3>
                <p className="fw-bold mb-1">Anna Smith</p>
                <p className="text-muted mb-0">annasmith@gmail.com</p>
              </div>

              {/* Completion Rate Card */}
              <div className="p-4 bg-white rounded-3 shadow-sm">
                <h3 className="text-muted mb-2 fs-6">Completion Rate Increase</h3>
                <p className="display-4 fw-bold text-success mb-0">10.8%</p>
              </div>
            </div>
          </Col>

          {/* Right Column - Content */}
          <Col lg={8}>
            <div className="ps-lg-5">
              <h2 className="display-5 fw-bold mb-4">Revolutionize your workflow</h2>
              <p className="lead mb-4">
                We have designed our app for increased efficiency and it will help you to start getting more things done.
              </p>
              <Button variant="primary" size="lg" className="px-4">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionOne;