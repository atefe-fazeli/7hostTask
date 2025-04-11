import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import { useTheme } from "@/context/themeContext";
const Hero = () => {
  const { theme } = useTheme();
  return (
    <section className="d-flex flex-column flex-md-row align-content-center py-4 px-32 px-md-96 py-md-48  ">
      <div className="w-100 w-md-50 d-flex flex-column justify-content-between me-0 me-md-5">
        <h1 className="display-3 lh-5 fs-xx-large text-primary text-center text-md-start" style={{fontWeight:900}}> 
          Manage your daily tasks better without all the stress.
        </h1>
        <p className={` font-public-sans fw-normal fs-5 lh-base  ls-n1  text-center text-md-start ${
          theme === 'dark' ? 'text-darkBody' : 'text-darkText'
        }`}>
          Change the way you manage your tasks with our revolutionary project
          management technology.
        </p>

        <div className="d-flex flex-column flex-sm-row gap-4 px-32 py-3 ">
          <Button
            variant="secondary"
            className="px-32 py-3 rounded-5 d-flex align-items-center gap-5 justify-content-between"
          >
            <span className="text-white fw-bold fs-6 lh-24px ls-0 leading-trim ">
              Get Started
            </span>
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              height={14}
              width={8}
              style={{ objectFit: "contain" }}
            />
          </Button>
          <Button className="px-32 py-3 bg-white rounded-5 border-btBorder">
            <span className="text-primary fw-bold fs-6 lh-24px ls-0 leading-trim">
              Schedule a Demo
            </span>
          </Button>
        </div>
      </div>
      <div className="w-100 w-md-50 d-flex justify-content-center justify-content-md-end align-content-center ms-md-5">
        <Image
          src="/images/hero.svg"
          alt="hero"
          height={340}
          width={460}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default Hero;
