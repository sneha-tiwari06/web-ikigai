import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination} from 'swiper/modules';

function Services() {
  return (
    <div className="w-100 padding pb-100 position-relative overflow-hidden hm-services-wrapper animate-section3">
      <div className="container-lg">
        <div className="heading mx-auto text-center">
          <h2 className="h1 mb-0 text-serif text-secondary">Our Services</h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="services-slider pt-3"
        >
          <SwiperSlide className="box-item ">
            <a href="/" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon"><img src="../assets/images/beauty.svg" alt="" /></div>
                  <h6 className="flip-box-header">Beauty</h6>
                  <p className="mb-0">Experience the finest beauty treatments tailored to enhance your natural glow.</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: "url(../assets/images/beauty-th.jpg)" }}>
                <div className="inner">
                  <h6 className="flip-box-header mb-0 text-secondary">Beauty</h6>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="box-item">
            <a href="/" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon"><img src="../assets/images/slim.svg" alt="" /></div>
                  <h6 className="flip-box-header">Slimming</h6>
                  <p className="mb-0">Achieve your ideal body shape with our advanced slimming solutions.</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: "url(../assets/images/slim-th.jpg)" }}>
                <div className="inner">
                  <h6 className="flip-box-header mb-0 text-secondary">Slimming</h6>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="box-item">
            <a href="/" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon"><img src="../assets/images/hair-removal.svg" alt="" /></div>
                  <h6 className="flip-box-header">Hair Removal</h6>
                  <p className="mb-0">Enjoy smooth, hair-free skin with our state-of-the-art laser hair removal treatments.</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: "url(../assets/images/hair-removal-th.jpg)" }}>
                <div className="inner">
                  <h6 className="flip-box-header mb-0 text-secondary">Hair Removal</h6>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="box-item">
            <a href="/" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon"><img src="../assets/images/hair-transplant.svg" alt="" /></div>
                  <h6 className="flip-box-header">Hair Transplant</h6>
                  <p className="mb-0">Restore your confidence with our natural-looking hair transplant procedures.</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: "url(../assets/images/hair-transplant-th.jpg)" }}>
                <div className="inner">
                  <h6 className="flip-box-header mb-0 text-secondary">Hair Transplant</h6>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="box-item">
            <a href="/" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon"><img src="../assets/images/wellness.svg" alt="" /></div>
                  <h6 className="flip-box-header">Wellness</h6>
                  <p className="mb-0">Discover holistic wellness with our comprehensive wellness programs.</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: "url(../assets/images/wellness-th.jpg)" }}>
                <div className="inner">
                  <h6 className="flip-box-header mb-0 text-secondary">Wellness</h6>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-button-prev text-secondary"></div>
          <div className="swiper-button-next text-secondary"></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
