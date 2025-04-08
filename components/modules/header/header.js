import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="border-bottom border-gray"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Image
          src="/logo.svg"
          alt="logo"
          height={30}
          width={100}
          style={{ objectFit: "contain" }}
        />

        {/* منوی همبرگری برای موبایل */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="d-lg-none position-absolute top-0 bottom-0 end-0 bg-primary text-white rounded-5 p-2"
        >
            <div><span className="w-20 "></span></div>
        </Navbar.Toggle>

        {/* لینک‌ها */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* لینک‌ها در دسکتاپ */}
            <Nav.Link as={Link} href="/pricing" className="mx-2">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} href="/how-it-works" className="mx-2">
              How It Works
            </Nav.Link>
            <Nav.Link as={Link} href="/faq" className="mx-2">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} href="/currencies" className="mx-2">
              Currencies
            </Nav.Link>
            <Nav.Link as={Link} href="/sign-in" className="mx-2">
              Sign In
            </Nav.Link>

            {/* دکمه Get Started */}
            <Button
              variant="primary"
              as={Link}
              href="/get-started"
              className="ms-2 "
            >
              Get Started
      
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
