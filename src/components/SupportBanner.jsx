import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const images = [
  { image: require("../assets/support1.JPG") },
  { image: require("../assets/support2.JPG") },
  { image: require("../assets/support3.png") },
  { image: require("../assets/support4.JPG") },
  { image: require("../assets/support5.jpg") },
  { image: require("../assets/support6.PNG") },
  { image: require("../assets/support7.png") },
  { image: require("../assets/support8.png") },
  { image: require("../assets/support9.png") },
  { image: require("../assets/support10.JPG") },
  { image: require("../assets/support11.JPG") },
];

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        // navigation={true}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 900px
          1100: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // when window width is >= 400px
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 100px
          100: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
        }}
      >
        <SwiperSlide>
          <img src={images[0].image} alt="support1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1].image} alt="support2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2].image} alt="support3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3].image} alt="support4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[4].image} alt="support5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[5].image} alt="support6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[6].image} alt="support7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[7].image} alt="support8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[8].image} alt="support9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[9].image} alt="support9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[10].image} alt="support10" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
