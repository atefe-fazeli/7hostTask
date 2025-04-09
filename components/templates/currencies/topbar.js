import React from "react";
import { Container, Table, Button, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import { useTheme } from "@/context/themeContext";

const Topbar = () => {
  const { theme } = useTheme();
  return (
    <div className="d-flex flex-column flex-md-row align-content-center ">
      <div className="w-100 w-md-50 d-flex flex-column justify-content-center gap-3 me-0 me-md-5">
        <h2 className="fw-bold lh-1 fs-xx-large fs-md-1 text-darkBlue text-center text-md-start ">
          Today’s Cryptocurrency prices
        </h2>
        <p
          className={` font-public-sans fw-normal fs-5 lh-base  ls-n1  text-center text-md-start text-text`}
        >
          The global crypto market cap is <span className="fw-bold lh-1 fs-xx-large fs-md-1 text-darkBlue"></span>$1.86T
        </p>
      </div>
      <div className="w-100 w-md-50 d-flex justify-content-center justify-content-md-end  ms-md-5">
        <Image
          src="/images/currency.svg"
          alt="hero"
          height={384}
          width={384}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Topbar;
