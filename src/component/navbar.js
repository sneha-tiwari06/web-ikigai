import React, { useEffect } from 'react';
function Navbar() {
    useEffect(() => {
        // Load custom.js after the component mounts
        const script = document.createElement('script');
        script.src = '../assets/static/custom.js'; // Adjust the path if needed
        script.async = true;
        document.body.appendChild(script);
    
        // Clean up the script when the component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    return (
        <div> <div className="header">
            <div className="container-lg d-grid">
                <div className="header__grid-item logo"><a href="https://ecis.in/ikigai-wellnes"><img src="../assets/images/logo.png" alt="IKIGAI Wellness" /></a></div>
                <div className="header__grid-item navi">
                    <ul className="list-inline">
                        <li><a href="https://ecis.in/ikigai-wellnes">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Our Services</a></li>
                        <li><a href="/">Our Team</a></li>
                        <li><a href="/">Blogs</a></li>
                        <li><a href="/">FAQs</a></li>
                    </ul>
                    <div className="readmore mt-0 w-auto d-flex">
                        <a href="#formModal" data-bs-toggle="modal" className="button bg-golden-gradient">Book an appointment</a>
                        <a href="tel:+917678483376" className="button inverse mw-auto"><i className="fa fa-phone"></i></a>
                    </div>
                    <button role="button" className="menuBtn d-flex d-lg-none"><span></span></button>
                </div>
            </div>
        </div>        <div className="bg-gradient-primary">
                <div id="banner" className="w-100 banner carousel slide caropusel-fade" carousel-bs-pause="false" carousel-bs-ride="carousel">
                    <div className="carousel-inner h-100">
                        <div className="carousel-item active h-100">
                            <picture>
                                <img src="../assets/images/banner1.jpg" className="h-100 object-cover" alt="" />
                            </picture>
                            <div className="bannerText">
                                <div className="container-lg">
                                    <div className="row gap-row flex-column">
                                        <div className="col-xl-5 col-lg-5">
                                            <span className="h4 mb-0">Achieve smooth, hair-free skin permanently!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="enquiryBtn"><i className="fa fa-envelope"></i></div>
            <div className="stickyForm">
                <div className="form-close">×</div>
                <form>
                    <h6>Achieve smooth, hair-free skin permanently!</h6>
                    <div className="form-group"><input type="text" className="form-control" placeholder="Name*" /></div>
                    <div className="form-group"><input type="email" className="form-control" placeholder="Email*" /></div>
                    <div className="form-group"><input type="tel" className="form-control" placeholder="Mobile*" /></div>
                    <div className="form-group"><textarea className="form-control" rows="4" placeholder="Message" /></div>
                    <div className="readmore mt-0"><button type="submit" className="button">Book Appointment</button></div>
                </form>
            </div>
        </div>
    )
}

export default Navbar