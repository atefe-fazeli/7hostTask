import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./swiper.module.css"
import SwiperItem from "./swiperItem";

const CustomSwiper = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const swiperParams = {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    spaceBetween: 15,
    initialSlide: 0,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },

    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    modules: [EffectCoverflow, Pagination],
  };

  return (
    <div  className={` ${styles.swiperContainer}`} id="pricing">
      <Swiper {...swiperParams} ref={swiperRef} className="my-4 my-lg-12 ">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-content ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <SwiperItem {...slide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={` ${styles.gradientOverlay}`}></div>
    </div>
  );
};

export default CustomSwiper;
