import React from "react";
import { Accordion } from "react-bootstrap";
import { useTheme } from "@/pages/setup/appContextManager/themeContext/index";
const FAQ = () => {
  const { theme } = useTheme();
  return (
    <div
      id="faq"
      className={` my-5 my-md-56   py-4 px-32 px-md-56 mx-md-96 py-md-48 d-flex flex-column gap-3  rounded-5 ${
        theme === "dark" ? "bg-faqdark" : "bg-faq"
      }`}
    >
      <h2
        className={`fw-bold fs-2 lh-1 text-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        FAQ
      </h2>
      <p className="fw-normal fs-med lh-sm text-center text-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi u
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className=" mb-3">
          <Accordion.Header>Lorem ipsum dolor sit amet?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className=" mb-3">
          <Accordion.Header>Consectetur adipiscing elit?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className=" ">
          <Accordion.Header>
            Sed do eiusmod tempor incididunt ut labore et dolore?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
