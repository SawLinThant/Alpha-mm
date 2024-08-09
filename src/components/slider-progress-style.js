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
                    <img src="/banner1.jpg" alt="bg1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner2.jpg" alt="bg1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/banner3.jpg" alt="bg1" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default ProgressBarSlider;