import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
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
        <Navbar.Brand href="#" className="z-3 mb-2">
          <Image src="/images/logo.svg" alt="logo" height={32} width={149} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`border-0 focus:shadow-none focus:outline-none rounded-circle bg-primary p-0 m-0 ${styles.navbarToggler}`}
        >
          <span className="navbar-toggler-icon-custom">
            <span className="toggler-bar bar1"></span>
            <span className="toggler-bar bar2"></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.navbarCollapse}
        >
          <Nav className="align-items-start align-items-lg-center d-flex justify-content-between w-100   py-5 py-lg-0 h-100">
            <Nav className="d-flex flex-column h-100 flex-grow-1 align-items-start align-items-lg-center ms-5 pt-5 pt-lg-0  flex-lg-row gap-2 gap-lg-5">
              <Nav.Link
                as={Link}
                href="/#pricing"
                className=" text-darkText fw-bold text-center lh-base"
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/#how-it-works"
                className={`text-darkText fw-bold text-center lh-base ${styles.customNavLink}`}
              >
                How It Works
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="#faq"
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
            </Nav>
            <Nav className="d-flex flex-column-reverse   flex-lg-row justify-content-end align-items-center gap-3 m-auto m-lg-0 gap-lg-5 ">
              <Nav.Link
                as={Link}
                href="/sign-in"
                className="text-darkText fw-bold text-center lh-base "
              >
                Sign In
              </Nav.Link>
              <Nav.Link className="rounded-5 px-96 px-lg-32 py-3 bg-primary text-white">
                <span className=" fw-bold fs-6 lh-base text-center">
                  Get Started
                </span>
              </Nav.Link>
            </Nav>
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
