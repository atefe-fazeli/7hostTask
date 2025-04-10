import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import Topbar from "@/components/templates/currencies/topbar";

// دریافت داده‌ها از API در سمت سرور (Server-Side Rendering)
export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const data = await res.json();

  return {
    props: {
      initialData: data,
    },
  };
}

const Currencies = ({ initialData }) => {
  const [data, setData] = useState(initialData || []);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // برای نمایش خطاها

  // تابع برای دریافت داده‌ها با مدیریت خطا
  const fetchMoreData = async (pageToFetch) => {
    setLoading(true);
    setError(null); // ریست کردن خطا

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageToFetch}&sparkline=false`
      );

      // بررسی وضعیت پاسخ
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }

      const newData = await res.json();

      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...newData]);
      }
    } catch (error) {
      console.error("Error fetching more data:", error.message);
      setError("Failed to load more data. Please try again later.");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // تابع برای Infinite Scroll (تا صفحه 4)
  const loadMore = () => {
    if (page < 4) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMoreData(nextPage);
    }
  };

  // تابع برای دکمه "نمایش بیشتر" با تأخیر
  const handleShowMore = async () => {
    if (loading) return; // جلوگیری از کلیک سریع

    const nextPage = page + 1;
    setPage(nextPage);
    await fetchMoreData(nextPage);

    // تأخیر مصنوعی برای جلوگیری از درخواست سریع (اختیاری)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <>
      <div className="bg-lightpurple py-4 px-32 px-md-96 py-md-48">
        <Topbar />
      </div>
      <div className="py-0 px-0 px-md-96 py-md-48">
        <div className="bg-tableContainer rounded-4  px-md-56 py-md-40 p-5">
          {data.length > 0 ? (
            <InfiniteScroll
              dataLength={data.length}
              next={loadMore}
              hasMore={page < 4 && hasMore}
              loader={<h4 className="text-center">Loading...</h4>}
              endMessage={
                page < 4 && !hasMore ? (
                  <p className="text-center text-muted">
                    No more data to load.
                  </p>
                ) : null
              }
            >
              <Table
                responsive
                className="table-borderless bg-tableContainer custom-table"
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
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Image
                          src={item.image}
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
            </InfiniteScroll>
          ) : (
            <p className="text-center text-muted">
              Unable to load data. Please try again later.
            </p>
          )}

          {/* نمایش خطا */}
          {error && (
            <p className="text-center text-danger mt-4">{error}</p>
          )}

          {/* دکمه "نمایش بیشتر" */}
          {page >= 4 && hasMore && (
            <div className="text-center mt-4">
              <Button
                variant="primary"
                onClick={handleShowMore}
                disabled={loading}
              >
                {loading ? "Loading..." : "Show More"}
              </Button>
            </div>
          )}

          {/* پیام اگه دیگه داده‌ای نباشه */}
          {page >= 4 && !hasMore && !error && (
            <p className="text-center text-muted mt-4">
              No more data to load.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Currencies;