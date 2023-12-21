import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../components/Layout/Layout.tsx";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/autoplay";

import film1 from "../assets/film1.png";
import film2 from "../assets/film2.png";
import film3 from "../assets/film3.png";
import film4 from "../assets/film4.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Layout>
      <div className="">
        <Swiper
          modules={[A11y, Autoplay]}
          loop={true}
          autoplay={{ delay: 2000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-h-[100vh] -mt-[3.35em] relative w-screen"
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
          <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white absolute z-10 text-xl font-bold pt-32">
            <p className="text-center px-5">
              Welcome to <span className="text-yellow-500">Movi</span> , where
              your movie journey begins! Discover, explore, and save your
              favorite movies all in one place. Whether you're a cinephile or
              just looking for the perfect film for your next movie night, we've
              got you covered.
            </p>
            <div className="flex justify-center">
              <Link to={"/login"}>
                <p className="mt-10 bg-white w-max px-5 py-2 rounded-md text-lg text-black  hover:bg-black hover:text-yellow-500 duration-200 cursor-pointer">
                  Get Started
                </p>
              </Link>
            </div>
            <div className="pt-16 flex justify-center gap-4">
              {Array.from({ length: 11 }, (_, i) => {
                if (i % 2 != 0) {
                  return (
                    <div
                      key={i}
                      className="h-5 w-5 bg-gray-300 rounded-full animate-bounce"
                    ></div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="h-5 w-5 bg-yellow-500 rounded-full animate-pulse"
                  ></div>
                );
              })}
            </div>
          </div>
        </Swiper>
      </div>
    </Layout>
  );
};

export default Landing;
