import React from "react";
import { Container, Table, Button, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const CurrencyItem = ({name,price,lastUpdated}) => {
  return (
    <tr >
      <td>{index + 1}</td>
      <td>
        <Image
          src="/crypto-icon.png" // جایگزین با آیکون واقعی
          alt="Crypto Icon"
          width={20}
          height={20}
          className="me-2"
        />
        {name}
      </td>
      <td>${price.toFixed(2)}</td>
      <td>{lastUpdated}</td>
    </tr>
  );
};

export default CurrencyItem;
