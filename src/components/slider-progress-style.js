import { Swiper, SwiperSlide } from "swiper/react";
import "../style/swiper.css"
import {
    Pagination,
    Autoplay,
    Navigation,
  } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ProgressBarSlider = () => {
    const listArray = ["", "", ""];
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '">' +
            "<em>" +
            listArray[index] +
            "</em>" +
            "<i></i>" +
            "<b></b>" +
            "</span>"
          );
        },
      };
    return(
        <div className="swiper-container">
            <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            className="progress-swiper"
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={pagination}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                  <div className="swiper-image1"></div>
                    {/* <img src="/images/banner1.jpg" alt="bg1" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src="/images/banner2.jpg" alt="bg1" /> */}
                    <div className="swiper-image2"></div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <img src="/images/banner3.jpg" alt="bg1" /> */}
                    <div className="swiper-image3"></div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default ProgressBarSlider;