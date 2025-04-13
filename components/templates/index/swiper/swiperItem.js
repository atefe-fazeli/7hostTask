import React from "react";
import styles from "./swiper.module.css";
export default function SwiperItem({ src, title, desc }) {
  return (
    <div className="d-flex flex-column ">
      <div className="mt-3 mt-md-5  w-100 px-3 d-block d-md-none ">
        <h2 className="display-4 fw-bold lh-3 fs-larger   text-md-start mb-3 mb-md-5">
          {title}
        </h2>

        <p
          className={` font-public-sans fw-normal fs-5 lh-base   ls-n1   my-3 my-md-5 text-md-start `}
        >
          {desc}
        </p>
      </div>
      <div
        className={`p-3 p-md-5 ${styles.customSliderImg} w-100 `}
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <div className="mt-3 mt-md-5  w-75  d-none d-md-block">
          <h2 className="display-4 fw-bold lh-3 fs-larger text-white text-center text-md-start mb-3 mb-md-5">
            {title}
          </h2>

          <p
            className={` font-public-sans fw-normal fs-5 lh-base text-white  ls-n1  text-center my-3 my-md-5 text-md-start `}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
