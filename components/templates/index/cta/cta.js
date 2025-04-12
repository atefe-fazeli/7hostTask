// components/CTASection.js
import React from "react";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./cta.module.css";
const CTASection = () => {
  return (
    <>
      <div className={`${styles.ctaCustomContainer} mx-0 mx-md-96 `}>
        <div className=" py-4  py-md-48 px-32 px-md-56 d-flex flex-column  flex-md-row ">
          <div className="w-100 w-md-70 mb-4 mb-md-0 mt-3 mt-md-5">
            <span className="fw-bolder fs-x-large fs-md-xx-large lh-1  d-flex justify-content-center justify-content-md-start align-items-center gap-1 flex-wrap text-primary mb-4">
              Risk-free 30 day trial to
              <span className="fw-bolder fs-x-large fs-md-xx-large lh-1 text-secondary">
                level up
              </span>
              your team's productivity.
            </span>
            <p className="fw-normal fs-med fs-md-large text-primary text-center text-md-start mb-3 mb-md-5">
              Get started now and take advantage of our 30 day free trial today.
              No credit card required.
            </p>
          </div>
          <div className="ms-md-5 w-100 w-md-30 d-flex justify-content-center justify-content-md-end align-items-end  mb-md-5">
            <Button
              variant="secondary"
              className="px-32 py-3 rounded-5 d-flex align-items-center gap-5 justify-content-md-between"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;
