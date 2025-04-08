import React from "react";
import { Container, Table, Button, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/templates/currencies/topbar";

export async function getServerSideProps() {
  const res = await fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false  ");
  const data = await res.json();
  console.log(data, "data is here");

  return {
    props: {
      data,
    },
  };
}

const Currencies = ({ data }) => {
  return (
    <>
      <div className="py-5" style={{ background: "rgba(138, 43, 226, 0.1)" }}>
        <Container>
          <Topbar />

          <div className="bg-white rounded-4 p-4">
            {data.length > 0 ? (
              <Table responsive className="table-borderless">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price (USD)</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Image
                          src={`/${item.image}`} 
                          alt="Crypto Icon"
                          width={20}
                          height={20}
                          className="me-2"
                        />
                        {item.name}
                      </td>
                      <td>${item.current_price}</td>
                      <td>{item.last_updated}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-center text-muted">
                Unable to load data. Please try again later.
              </p>
            )}
            <div className="text-center">
              <Button variant="primary">Show More</Button>
            </div>
          </div>
        </Container>
      </div>

 
    </>
  );
};

export default Currencies;
