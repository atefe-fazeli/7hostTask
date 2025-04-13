import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import Topbar from "@/components/templates/currencies/topbar";
import CurrencyItem from "@/components/templates/currencies/currencyItem";
import styles from "./customTable.module.css";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { GetCurrencyListURL } from "@/setup/api/apiRoutes";
import { gerogrianToShamsi } from "@/setup/utils/shamsiDateHelper";
import { useApi } from "@/setup/hooks/useApi";

const Currencies = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [error, setError] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const { getPending, getApi } = useApi();

  useEffect(() => {
    getApi(
      GetCurrencyListURL(page),
      (res) => {
        setData((prevData) => [...prevData, ...res?.data]);
      },
      (err) => {
        console.warn(err);
        setError(err);
      }
    );
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleShowMore = () => {
    if (getPending || error) return;
    setPage(page + 1);
  };

  const handleShowModal = (currency) => {
    setSelectedCurrency(currency);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCurrency(null);
  };

  return (
    <>
      <div className="bg-lightpurple py-4 px-32 px-md-96 py-md-48">
        <Topbar />
      </div>
      <div className="py-0 px-0 px-md-96 py-md-48">
        <div
          className={`${styles.currencyTableConatiner} rounded-4 px-md-56 py-md-40 p-5`}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={loadMore}
            hasMore={page < 3}
            endMessage={null}
          >
            <Table
              responsive
              className={`table table-borderless ${styles.customTable}`}
            >
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
                  <CurrencyItem
                    key={index}
                    index={index}
                    data={item}
                    onClick={() => handleShowModal(item)}
                  />
                ))}
              </tbody>
            </Table>
          </InfiniteScroll>

          {!error && (
            <div className="text-center mt-4">
              <Button
                className="bg-primary rounded-5 px-5"
                onClick={handleShowMore}
              >
                {getPending ? "loading" : "Show More"}
              </Button>
            </div>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className={styles.modalBody}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Image
              src="/images/modallogo.svg"
              alt="Crypto Icon"
              width={100}
              height={20}
              className={styles.modalTitle}
            />
            <Button
              className={`${styles.closeButton} rounded-5 `}
              onClick={handleCloseModal}
            >
              ✕
            </Button>
          </div>
          {selectedCurrency && (
            <div className="d-flex  justify-content-between ">
              <div className="d-flex flex-column align-items-center ">
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={selectedCurrency.image}
                    alt={selectedCurrency.name}
                    width={40}
                    height={40}
                    className="me-2"
                  />
                  <span className="text-text">
                    {selectedCurrency.name}{" "}
                    {selectedCurrency.symbol.toUpperCase()}
                  </span>
                </div>
                <span className="fs-32 fw-bold">{selectedCurrency.current_price.toFixed(2)}<span className="text-secondary"> USD</span></span>
                
              </div>
              <div className={styles.currencyPrice}>
                <span className={styles.lastUpdated}>
                  {gerogrianToShamsi(selectedCurrency.last_updated, null, gregorian_en)}
                </span>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Currencies;
