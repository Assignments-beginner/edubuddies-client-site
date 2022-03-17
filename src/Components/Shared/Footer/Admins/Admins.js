import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Admins/Admins.css";
import { EffectCoverflow, Pagination } from "swiper";
import Admin1 from "../../../../Images/Admins/admins (1).jpg";
import Admin2 from "../../../../Images/Admins/admins (1).png";
import Admin3 from "../../../../Images/Admins/admins (2).jpg";

const Admins = () => {
  return (
    <div className="py-8">
      <h1 className="font-bold text-3xl text-slate-900 uppercase">
        Our <span className="text-red-500">Admins</span>
      </h1>
      <div className="adminSlide">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            initialSlide: 2,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="bg-white p-10 rounded-lg">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-5">
                  <img src={Admin1} alt="" />
                </div>
              </div>
              <div>
                <h2 class="tracking-wide">Nizam Uddin</h2>
                <h2 class="tracking-wide">Full Stack Developer</h2>
                <h2 class="tracking-wide">nizamcse.seu.bd@gmail.com</h2>
                <h2 class="tracking-wide">+8801609292828</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="bg-white p-10 rounded-lg">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-5">
                  <img src={Admin3} alt="" />
                </div>
              </div>
              <div>
                <h2 class="tracking-wide">Ashraful Islam</h2>
                <h2 class="tracking-wide">MERN Stack Developer</h2>
                <h2 class="tracking-wide">ashrafulislam2880@gmail.com</h2>
                <h2 class="tracking-wide">+8801974238487</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="bg-white p-10 rounded-lg">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-5">
                  <img src={Admin2} alt="" />
                </div>
              </div>
              <div>
                <h2 class="tracking-wide">Mohammad Suny</h2>
                <h2 class="tracking-wide">Full Stack Developer</h2>
                <h2 class="tracking-wide">suny.w68@gmail.com</h2>
                <h2 class="tracking-wide">+8801861917938</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Admins;
