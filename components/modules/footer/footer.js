// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const links = [
    { title: "Preface", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "How It Works", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "FAQ", url: "#" }
  ];

  const socialLinks = [
    { name: "Mode", url: "#" },
    { name: "Play", url: "#" },
    { name: "Thack", url: "#" }
  ];

  return (
    <footer className="footer py-5 bg-dark text-white">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">7flow.</h3>
            <div className="d-flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a key={index} href={link.url} className="text-white text-decoration-none">
                  {link.title}
                </a>
              ))}
            </div>
          </Col>

          <Col md={4} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="text-white text-decoration-none fw-bold">
                  {social.name}
                </a>
              ))}
            </div>
            <p className="mt-3 mb-0 text-muted">
              &copy; {new Date().getFullYear()} 7flow. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;