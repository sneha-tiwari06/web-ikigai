import React from 'react'
import Navbar from './navbar'
import { SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import Swiper from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Home() {
    return (
        <main>
            <Navbar />
            <div class="bg-gradient-primary">
                <div class="enquiryBtn"><i class="fa fa-envelope"></i></div>
                <div class="stickyForm">
                    <div class="form-close">×</div>
                    <form>
                        <h6>Achieve smooth, hair-free skin permanently!</h6>
                        <div class="form-group"><input type="text" class="form-control" placeholder="Name*" /></div>
                        <div class="form-group"><input type="email" class="form-control" placeholder="Email*" /></div>
                        <div class="form-group"><input type="tel" class="form-control" placeholder="Mobile*" /></div>
                        <div class="form-group"><textarea class="form-control" rows="4" placeholder="Message" ></textarea></div>
                        <div class="readmore mt-0"><button type="submit" class="button">Book Appointment</button></div>
                    </form>
                </div>

                <div className="w-100 padding pb-100 position-relative overflow-hidden hm-services-wrapper animate-section3">
      <div className="container-lg">
        <div className="heading mx-auto text-center">
          <h2 className="h1 mb-0 text-serif text-secondary">Our Services</h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
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
          <SwiperSlide className="box-item">
            <a href="#" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon">
                    <img src="../assets/images/icons/beauty.svg" alt="Beauty" />
                  </div>
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
            <a href="#" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon">
                    <img src="../assets/images/icons/slim.svg" alt="Slimming" />
                  </div>
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
            <a href="#" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon">
                    <img src="../assets/images/icons/hair-removal.svg" alt="Hair Removal" />
                  </div>
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
            <a href="#" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon">
                    <img src="../assets/images/icons/hair-transplant.svg" alt="Hair Transplant" />
                  </div>
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
            <a href="#" className="flip-box">
              <div className="flip-box-front text-center">
                <div className="inner color-white">
                  <div className="ikon">
                    <img src="../assets/images/icons/wellness.svg" alt="Wellness" />
                  </div>
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
            </div>

            <div class="w-100 padding position-relative overflow-hidden hm-specialities-wrapper bg-pattern rounded-100 mt-n100 animate-section3">
                <div class="container-lg">
                    <div class="heading mx-auto text-center">
                        <h2 class="h1 mb-0 text-serif text-primary">Our Specialities</h2>
                    </div>
                    <div class="row special-row align-items-center g-0">
                        <div class="col-lg-6 specialImg"><img src="../assets/images/healthy-environment.jpg" class="h-100 object-cover" alt="" /></div>
                        <div class="col-lg-6 specialBox">
                            <div class="inner">
                                <div class="heading">
                                    <h4 class="mb-0 text-serif text-primary">Healthy Environment</h4>
                                </div>
                                <p>Step into a serene atmosphere designed to enhance your wellness journey, where tranquility meets comfort.</p>
                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                            </div>
                        </div>
                    </div>
                    <div class="row special-row flex-row-reverse align-items-center g-0">
                        <div class="col-lg-6 specialImg"><img src="../assets/images/experienced-staff.jpg" class="h-100 object-cover" alt="" /></div>
                        <div class="col-lg-6 specialBox">
                            <div class="inner">
                                <div class="heading">
                                    <h4 class="mb-0 text-serif text-primary">Experienced Staff</h4>
                                </div>
                                <p>Trust in the expertise of our seasoned professionals who bring years of knowledge and skill to provide you with exceptional service.</p>
                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                            </div>
                        </div>
                    </div>
                    <div class="row special-row align-items-center g-0">
                        <div class="col-lg-6 specialImg"><img src="../assets/images/latest-machines.jpg" class="h-100 object-cover" alt="" /></div>
                        <div class="col-lg-6 specialBox">
                            <div class="inner">
                                <div class="heading">
                                    <h4 class="mb-0 text-serif text-primary">Latest Machines</h4>
                                </div>
                                <p>Harness the power of advanced machinery designed to deliver effective solutions tailored to your unique needs and desires.</p>
                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                            </div>
                        </div>
                    </div>
                    <div class="row special-row flex-row-reverse align-items-center g-0">
                        <div class="col-lg-6 specialImg"><img src="../assets/images/tailored-solutions.jpg" class="h-100 object-cover" alt="" /></div>
                        <div class="col-lg-6 specialBox">
                            <div class="inner">
                                <div class="heading">
                                    <h4 class="mb-0 text-serif text-primary">Tailored Solutions</h4>
                                </div>
                                <p>Our commitment to tailored solutions means your experience is customized to address your individual preferences and concerns.</p>
                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100 padding pb-100 position-relative overflow-hidden hm-testimonial-wrapper animate-section3">
                <div class="container-lg">
                    <div class="heading mx-auto text-center">
                        <h2 class="h1 mb-0 text-serif text-primary">What Our Customers Say About Us</h2>
                    </div>
                    <div class="row gap-row justify-content-center">
                        <div class="col-xl-9">
                            <div thumbsSlider="" class="swiper testimonialThumb-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide testimThumb"><img src="../assets/images/avatar-1.avif" alt="" /></div>
                                    <div class="swiper-slide testimThumb"><img src="../assets/images/avatar-2.avif" alt="" /></div>
                                    <div class="swiper-slide testimThumb"><img src="../assets/images/avatar-3.avif" alt="" /></div>
                                    <div class="swiper-slide testimThumb"><img src="../assets/images/avatar-4.avif" alt="" /></div>
                                    <div class="swiper-slide testimThumb"><img src="../assets/images/avatar-5.avif" alt="" /></div>
                                </div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="swiper testimonial-slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide testimSlide">
                                        <div class="inner">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                                            <span class="testim-name">Mr. K.L. Khanna</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide testimSlide">
                                        <div class="inner">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                                            <span class="testim-name">Ms. Neetu Singh</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide testimSlide">
                                        <div class="inner">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                                            <span class="testim-name">Ms. Manisha Jain</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide testimSlide">
                                        <div class="inner">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                                            <span class="testim-name">Mrs. Behl</span>
                                        </div>
                                    </div>
                                    <div class="swiper-slide testimSlide">
                                        <div class="inner">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint veritatis blanditiis delectus consequuntur provident...</p>
                                            <span class="testim-name">Ms. Ritika Sood</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- <div class="w-100 padding position-relative overflow-hidden hm-insta-wrapper animate-section5">
                    <div class="container-lg">
                        <div class="heading mx-auto text-center">
                            <h6 class="text-primary"><a href="#" class="text-decoration-underline">#jaincolimited</a></h6>
                            <h2 class="h1 mb-0">We Are On Instagram</h2>
                        </div>
                        <div class="instabox">
                            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                            <div class="elfsight-app-1b431463-e1c1-4ce8-9b8b-7f1746283b9a" data-elfsight-app-lazy></div>
                        </div>
                    </div>
                </div> --> */}

            <footer class="footer-area overflow-hidden bg-gradient-primary mt-n100 w-100">
                <div class="container-lg">
                    <div class="footer-links">
                        <div class="row gap-row justify-content-between">
                            <div class="col-lg-4 col-sm-12 foot-About">
                                <div class="insideBox mb-4">
                                    <h6>IKIGAI Wellness</h6>
                                    <p class="mb-0">At Ikigai Wellness, we offer a range of specialised services to enhance your physical well-being and beauty.</p>
                                </div>
                                <div class="follow-us insideBox d-flex flex-wrap align-items-center">
                                    <ul class="list-inline d-flex">
                                        <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Facebook"><i class="fab fa-facebook-f icon-circular"></i></a></li>
                                        <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Instagram"><i class="fab fa-instagram icon-circular"></i></a></li>
                                        <li><a href="https://api.whatsapp.com/send?phone=00" target="_blank" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="WhatsApp"><i class="fab fa-whatsapp icon-circular"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 foot-About">
                                <div class="row gap-row">
                                    <div class="col-lg-6 col-sm-6 foot-menu">
                                        <div class="insideBox">
                                            <h5 class="smallHeading text-uppercase mb-2"><a href="about-us.php">About us</a></h5>
                                            <h5 class="smallHeading text-uppercase mb-2"><a href="services.php">Our Services</a></h5>
                                            <h5 class="smallHeading text-uppercase mb-0"><a href="our-team.php">Our Team</a></h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 foot-menu">
                                        <div class="insideBox">
                                            <h5 class="smallHeading text-uppercase mb-2"><a href="blogs.php">Blogs</a></h5>
                                            <h5 class="smallHeading text-uppercase mb-0"><a href="faqs.php">FAQs</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 foot-contact">
                                <div class="insideBox">
                                    <h6>Contact Us</h6>
                                    <ul class="list-inline">
                                        <li class="d-flex align-items-baseline"><i class="fa fa-map-marker-alt"></i><a href="#">HS-11, Kailash Colony Market, Greater Kailash-1, Kailash Colony, Greater Kailash, New Delhi-110048</a></li>
                                        <li class="d-flex align-items-baseline"><i class="fa fa-phone"></i> <a href="tel:+917678483376">+91 7678483376,</a> <a href="tel:+91 7678483376">+91 9625089470</a></li>
                                        <li class="d-flex align-items-baseline"><i class="fa fa-envelope"></i> <a href="mailto:">info@ikigaiwellness.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom w-100">
                    <div class="container-lg">
                        <div class="d-flex flex-wrap justify-content-between">
                            <div class="footer-logo"><img src="../assets/images/logo.png" alt="" /></div>
                            <div class="d-flex align-items-center justify-content-center">
                                <p>© 2024 IKIGAI Wellness</p>
                                <p>Designed &amp; Developed By: <b>The Perfectionist</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="button-top"><i class="fa fa-chevron-up"></i></div>

            <div class="modal fade bd-example-modal-lg" id="formModal">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <button type="button" class="close icon-circular" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-body">
                            <div class="modal-logo"><img src="../assets/images/logo.png" alt="IKIGAI Wellness" /></div>
                            <h6 class="modal-title">Achieve smooth, hair-free skin permanently!</h6>
                            <div class="formContainer">
                                <form class="form-container" id="modal_form" method="post">
                                    <p class="statusm mb-0" style={{ color: "#ff392d" }}></p>
                                    <div class="row g-2">
                                        <div class="col-md-12">
                                            <label for="name">Name<sup class="text-danger">*</sup></label>
                                            <input type="text" class="form-control" id="mname" name="mname" />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="mobile">Mobile<sup class="text-danger">*</sup></label>
                                            <input type="tel" class="form-control" name="mmobile" id="mmobile" />
                                        </div>
                                        <div class="col-md-12">
                                            <label for="email">Email<sup class="text-danger">*</sup></label>
                                            <input type="email" class="form-control" name="memail" id="memail" />
                                        </div>
                                        <div class="col-md-12 formFooter readmore mt-3">
                                            <input type="hidden" name="modal_action" value="active" />
                                            <button type="submit" class="button" id="mbtnpopup">Book Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    </main>
    )
}

export default Home