import React from 'react'
import './App.css';
function Footer() {
  return (
    <div>
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
                            <p class="statusm mb-0" style={{color: "#ff392d"}}></p>
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
</div>
</div>
  )
}

export default Footer