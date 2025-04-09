import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="border-bottom border-gray py-12 px-32 px-lg-96 d-flex align-items-center"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid className="p-0 m-0 ">
        <Image
          src="/images/logo.svg"
          alt="logo"
          height={32}
          width={149}
          style={{ objectFit: "contain", marginBottom: "3px" }}
        />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 focus:shadow-none focus:outline-none rounded-circle bg-primary p-0 m-0"
        >
          <span className="navbar-toggler-icon-custom">
            <span className="toggler-bar bar1"></span>
            <span className="toggler-bar bar2"></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center d-flex justify-content-between w-100">
            <div className="d-flex gap-5 ms-5">
              <Nav.Link
                as={Link}
                href="/pricing"
                className=" text-darkText fw-bold text-center lh-base"
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/how-it-works"
                className=" text-darkText fw-bold text-center lh-base"
              >
                How It Works
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/faq"
                className=" text-darkText fw-bold text-center lh-base"
              >
                FAQ
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/currencies"
                className=" text-secondary fw-bold text-center lh-base"
              >
                Currencies
              </Nav.Link>
            </div>
            <div className="d-flex align-items-center gap-5">
              <Nav.Link
                as={Link}
                href="/sign-in"
                className="text-darkText fw-bold text-center lh-base"
              >
                Sign In
              </Nav.Link>
              <Button variant="primary" className="rounded-5 px-32 py-3 ">
                <span className=" fw-bold fs-6 lh-base text-center">
                  Get Started
                </span>
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .navbar-toggler-icon-custom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 100%;
        }
        .toggler-bar {
          display: block;
          width: 50%;
          height: 2px;
          background-color: #ffff;
          transition: all 0.3s ease;
        }
        .bar1 {
          margin-bottom: 8px;
        }
        .navbar-toggler[aria-expanded="true"] .bar1 {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar-toggler[aria-expanded="true"] .bar2 {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      `}</style>
    </Navbar>
  );
};

export default Header;
