import React, { useRef, useState } from "react";
import styles from "./swiper.module.css"
export default function SwiperItem({ src, title, desc }) {
  return (
    <div
      className={`p-3 p-md-5 ${styles.customSliderImg}`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="mt-3 mt-md-5 w-75">
       
          <h2 className="display-4 fw-bold lh-1 fs-xx-large text-white text-center text-md-start mb-3 mb-md-5">
            {title}
          </h2>
       
        <p
          className={` font-public-sans fw-normal fs-5 lh-base text-white  ls-n1  text-center my-3 my-md-5 text-md-start `}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
