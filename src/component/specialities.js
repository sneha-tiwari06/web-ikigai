import React from 'react'

function Specialities() {
  return (
    <div className="w-100 padding position-relative overflow-hidden hm-specialities-wrapper bg-pattern rounded-100 mt-n100 animate-section3">
    <div className="container-lg">
        <div className="heading mx-auto text-center">
            <h2 className="h1 mb-0 text-serif text-primary">Our Specialities</h2>
        </div>
        <div className="row special-row align-items-center g-0">
            <div className="col-lg-6 specialImg"><img src="../assets/images/healthy-environment.jpg" className="h-100 object-cover" alt="" /></div>
            <div className="col-lg-6 specialBox">
                <div className="inner">
                    <div className="heading">
                        <h4 className="mb-0 text-serif text-primary">Healthy Environment</h4>
                    </div>
                    <p>Step into a serene atmosphere designed to enhance your wellness journey, where tranquility meets comfort.</p>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                </div>
            </div>
        </div>
        <div className="row special-row flex-row-reverse align-items-center g-0">
            <div className="col-lg-6 specialImg"><img src="../assets/images/experienced-staff.jpg" className="h-100 object-cover" alt="" /></div>
            <div className="col-lg-6 specialBox">
                <div className="inner">
                    <div className="heading">
                        <h4 className="mb-0 text-serif text-primary">Experienced Staff</h4>
                    </div>
                    <p>Trust in the expertise of our seasoned professionals who bring years of knowledge and skill to provide you with exceptional service.</p>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                </div>
            </div>
        </div>
        <div className="row special-row align-items-center g-0">
            <div className="col-lg-6 specialImg"><img src="../assets/images/latest-machines.jpg" className="h-100 object-cover" alt="" /></div>
            <div className="col-lg-6 specialBox">
                <div className="inner">
                    <div className="heading">
                        <h4 className="mb-0 text-serif text-primary">Latest Machines</h4>
                    </div>
                    <p>Harness the power of advanced machinery designed to deliver effective solutions tailored to your unique needs and desires.</p>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                </div>
            </div>
        </div>
        <div className="row special-row flex-row-reverse align-items-center g-0">
            <div className="col-lg-6 specialImg"><img src="../assets/images/tailored-solutions.jpg" className="h-100 object-cover" alt="" /></div>
            <div className="col-lg-6 specialBox">
                <div className="inner">
                    <div className="heading">
                        <h4 className="mb-0 text-serif text-primary">Tailored Solutions</h4>
                    </div>
                    <p>Our commitment to tailored solutions means your experience is customized to address your individual preferences and concerns.</p>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos deserunt vitae asperiores voluptate itaque?</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Specialities