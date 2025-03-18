import React from 'react';

function Footer() {
    return (
        <>
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Newsletter</h4>
                                <p className="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                                <div className="position-relative mx-auto">
                                    <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-secondary position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Explore</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Home</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Services</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Latest Projects</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> testimonial</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Our Team</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Our Services</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> General Construction</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Property Maintenance</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Project Managment</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Virtual Design & Build</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Residential Construction</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Preconstruction</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Design Build</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href=""><i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                            <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href=""><i className="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a>
                            <div className="footer-btn d-flex align-items-center">
                                <a className="btn btn-secondary btn-md-square me-2" href=""><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square me-2" href=""><i className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square me-2" href=""><i className="fab fa-instagram text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square me-0" href=""><i className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-body">
                        Designed By <a className="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" className="btn btn-secondary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>
        </>
    );
}

export default Footer;
