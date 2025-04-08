// components/CTASection.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CTASection = () => {
  return (
    <section className="cta-section py-5 bg-primary text-white">
      <Container className="text-center">
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <h2 className="display-5 fw-bold mb-4">
            Risk-free 30 day trial to level up your team's productivity.
          </h2>
          <p className="lead mb-4">
            Get started now and take advantage of our 30 day free trial today. No credit card required.
          </p>
          <Button 
            variant="light" 
            size="lg" 
            className="px-4 py-2 fw-bold text-primary"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;