import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Controller } from 'swiper/modules';


const Testimonials = () => {
  const thumbsRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (thumbsRef.current && sliderRef.current) {
      const thumbsSwiper = thumbsRef.current.swiper;
      const sliderSwiper = sliderRef.current.swiper;

      sliderSwiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = sliderSwiper;
    }
  }, []);

  return (
    <div className="w-100 padding pb-100 position-relative overflow-hidden hm-testimonial-wrapper animate-section3">
      <div className="container-lg">
        <div className="heading mx-auto text-center">
          <h2 className="h1 mb-0 text-serif text-primary">What Our Customers Say About Us</h2>
        </div>
        <div className="row gap-row justify-content-center">
          <div className="col-xl-9">
            <Swiper
              className="testimonialThumb-slider"
              slidesPerView={5}
              centeredSlides={true}
              loop={true}
              slideToClickedSlide={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Navigation, Thumbs, Controller]}
              onSwiper={(swiper) => (thumbsRef.current.swiper = swiper)}
              ref={thumbsRef}
            >
              <SwiperSlide className="swiper-slide testimThumb"><img src="../assets/images/avatar-1.avif" alt="" /></SwiperSlide>
              <SwiperSlide className="swiper-slide testimThumb"><img src="../assets/images/avatar-2.avif" alt="" /></SwiperSlide>
              <SwiperSlide className="swiper-slide testimThumb"><img src="../assets/images/avatar-3.avif" alt="" /></SwiperSlide>
              <SwiperSlide className="swiper-slide testimThumb"><img src="../assets/images/avatar-4.avif" alt="" /></SwiperSlide>
              <SwiperSlide className="swiper-slide testimThumb"><img src="../assets/images/avatar-5.avif" alt="" /></SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <div className="col-xl-8">
            <Swiper
              className="testimonial-slider"
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              loopedSlides={5}
              modules={[Navigation, Thumbs, Controller]}
              onSwiper={(swiper) => (sliderRef.current.swiper = swiper)}
              ref={sliderRef}
            >
              <SwiperSlide className="swiper-slide testimSlide">
                <div className="inner">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                  <span className="testim-name">Mr. K.L. Khanna</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide testimSlide">
                <div className="inner">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                  <span className="testim-name">Ms. Neetu Singh</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide testimSlide">
                <div className="inner">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                  <span className="testim-name">Ms. Manisha Jain</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide testimSlide">
                <div className="inner">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                  <span className="testim-name">Mrs. Behl</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide testimSlide">
                <div className="inner">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                  <span className="testim-name">Ms. Ritika Sood</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
