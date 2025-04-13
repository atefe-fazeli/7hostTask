import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { useTheme } from "@/setup/appContextManager/themeContext";
const Footer = () => {
  const {  toggleTheme } = useTheme();
  return (
    <footer className="py-4 px-32 px-md-96 py-md-48 ">
      <Container className="">
        <Row className="justify-content-between">
          <Col
            sm={12}
            md={2}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <Image src="/images/logo.svg" alt="logo" height={32} width={77} />
          </Col>

          <Col sm={12} md={5}>
            <Row className="w-100  mb-3 mb-md-0">
              <Col xs={12} md={6} className="">
                {" "}
                <Nav.Link
                  as={Link}
                  href="/pricing"
                  className=" fs-normal fw-bold text-darkText mb-3"
                >
                  Pricing
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/how-it-works"
                  className=" fs-normal fw-bold text-darkText mb-3"
                >
                  How It Works
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/faq"
                  className=" fs-normal fw-bold text-darkText mb-3"
                >
                  FAQ
                </Nav.Link>
              </Col>{" "}
              <Col xs={12} md={6} className="">
                <Nav.Link
                  as={Link}
                  href="/TermsService"
                  className=" fs-normal fw-bold text-darkText mb-3"
                >
                  Terms of Service
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/TermsService"
                  className=" fs-normal fw-bold text-darkText mb-3"
                >
                  Privacy Policy
                </Nav.Link>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={3} className="text-center">
            <Row className="w-100 mb-3 mb-md-0">
              <Col xs={4} className="">
                <Image
                  src="/images/insta.svg"
                  alt="logo"
                  height={48}
                  width={48}
                />
              </Col>
              <Col xs={4} className="">
                <Image
                  src="/images/tueter.svg"
                  alt="logo"
                  height={48}
                  width={48}
                />
              </Col>
              <Col xs={4} className="">
                <Image
                  src="/images/facebook.svg"
                  alt="logo"
                  height={48}
                  width={48}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start mt-2">
          <Image src="/images/theme.svg" alt="logo" height={32} width={32} />
          <Form.Check type="switch" id="custom-switch" onClick={toggleTheme} />
        </div>
        <div className="text-center mt-4 text-text fs-normal fw-bold">
          Made with ❤ by
          <Link href="/" className=" ms-1">
            7ho.st
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
