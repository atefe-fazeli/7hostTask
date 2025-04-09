import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
const About = () => {
  const features = [
    {
      title: "Transparent Pricing",
      src: "/images/transparent.svg",
    },
    {
      title: "Easy Integrations",
      src: "/images/integration.svg",
    },
    {
      title: "Superb Efficiency",
      src: "/images/superb.svg",
    },
  ];

  return (
    <section className="d-flex flex-column  gap-2 py-4 px-32 px-md-96 py-md-48 ">
      <div className="d-flex flex-column">
        <h3 className="display-5 fw-bold text-center fs-xx-large lh-1">
          Get more done in
          <span className="display-5 fw-bold text-center text-secondary fs-1 lh-1">
            {" "}
            less time
          </span>{" "}
        </h3>
        <p className="fs-x-large fw-normal lh-base text-center text-text">
          Simple, fast, effortlessly.
        </p>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center  justify-content-md-center gap-3 gap-md-96">
        {features.map((feature, index) => (
          <div className="d-flex align-items-center gap-3" key={index}>
            <Image
              src={`${feature.src}`}
              alt="icon"
              height={64}
              width={64}
            />
            <h4 className="fs-normal fw-bold lh-base text-darkBlue">{feature.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
