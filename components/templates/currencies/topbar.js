import React from "react";
import { Container, Table, Button, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <div>
      {" "}
      <h1 className="text-center mb-2">Today’s Cryptocurrency prices</h1>
      <p className="text-center text-muted mb-5">
        The global crypto market cap is $1.86T
      </p>
    </div>
  );
};

export default Topbar;
