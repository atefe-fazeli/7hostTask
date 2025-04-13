import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { useTheme } from "@/pages/setup/appContextManager/themeContext/index";
const TemplateLibrary = () => {
   const { theme } = useTheme();
  return (
    <section className="py-48 d-flex flex-column flex-column-reverse flex-md-row align-content-center py-4 px-32 px-md-96 py-md-48 " id="how-it-works">
      <div className="w-60 w-md-60 d-flex ps-md-5 d-flex flex-column justify-content-center">
        <h2 className="fw-bold  fs-x-large fs-md-xx-large lh-1 text-orange mb-3 mb-md-5">
          Free template library included
        </h2>
        <p className={`fw-normal fs-large fs-md-x-large lh-sm text-text ${
            theme === "dark" ? "text-darkBody" : "text-darkText"
          }`}>
          We have got quite a few ready made templates for better project
          management that you can use now.
        </p>
        <div className="d-flex justify-content-end mt-4">
          <Link
            href="/dashboard"
            className="text-decoration-none d-flex gap-3 align-items-center "
          >
            <span className="fs-normal lh-sm fw-bold">Learn More</span>
            <Image
              src="/images/arrowleft.svg"
              alt="arrow"
              height={14}
              width={8}
            />
          </Link>
        </div>
      </div>
      <div className="w-60 w-md-40 d-flex justify-content-center align-items-center">
        <Image
          src={`${
            theme === "dark" ? "/images/darklibrary.svg" : "/images/library.svg"
          }`}
          alt="library"
          className="w-100 h-100"
        />
      </div>
    </section>
  );
};

export default TemplateLibrary;
