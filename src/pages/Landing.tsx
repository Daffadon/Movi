import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../components/Layout/Layout.tsx";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/autoplay";

import film1 from "../assets/film1.png";
import film2 from "../assets/film2.png";
import film3 from "../assets/film3.png";
import film4 from "../assets/film4.png";

const Landing = () => {
  return (
    <Layout>
      <div className="">
        <Swiper
          modules={[A11y, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          // spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-h-[100vh] -mt-[3.3em] relative"
        >
          <SwiperSlide>
            <img src={film1} alt="" className="blur-sm" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={film2} alt="" className="blur-sm" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={film3} alt="" className=" blur-sm" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={film4} alt="" className=" blur-sm" />
          </SwiperSlide>
          <p className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white absolute z-10">
            DAFFA ASDASDNJASID ASHDASDI
          </p>
        </Swiper>
      </div>
      <p>asdasd</p>
    </Layout>
  );
};

export default Landing;
