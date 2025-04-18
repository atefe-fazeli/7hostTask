import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { useTheme } from "@/setup/appContextManager/themeContext";

const SectionOne = () => {
  const { theme } = useTheme();
  return (
    <section className="py-48 d-flex flex-column flex-md-row align-content-center py-4 px-32 px-md-96 py-md-48 ">
      <div className="w-60 w-md-40 d-flex justify-content-center align-items-center">
        <Image
          src={`${
            theme === "dark" ? "/images/darkworkflow.svg" : "/images/workflow.svg"
          }`}
          alt="workflow"
          className="w-100 h-100"
        />
      </div>

      <div className="w-60 w-md-60 d-flex ps-md-5 d-flex flex-column justify-content-center">
        <h2 className="fw-bold  fs-x-large fs-md-xx-large lh-1 text-purple mb-3 mb-md-5">
          Revolutionize your workflow
        </h2>
        <p
          className={`fw-normal fs-large fs-md-x-large lh-sm text-text ${
            theme === "dark" ? "text-darkBody" : "text-darkText"
          }
        `}
        >
          We have designed our app for increased efficiency and it will help you
          to start getting more things done.
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
    </section>
  );
};

export default SectionOne;
