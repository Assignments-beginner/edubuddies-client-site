import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Admins/Admins.css";
import { EffectCoverflow, Pagination } from "swiper";

const Admins = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl uppercase">Our Admins</h1>
      <div className="adminSlide">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              height="250"
              width="250"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              height="250"
              width="250"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              height="250"
              width="250"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Admins;
