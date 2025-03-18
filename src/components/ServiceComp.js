import React from 'react';
import service1 from '../img/service-1.jpg';
import service2 from '../img/service-2.jpg';
import service3 from '../img/service-3.jpg';
import service4 from '../img/service-4.jpg';
import service5 from '../img/service-5.jpg';
import service6 from '../img/service-6.jpg';


function ServiceComp() {
    return (
        <>
        {/* Services section */}
        <div className="container-fluid service bg-light pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">Our Services</p>
                    <h2 className="display-4 text-capitalize mb-3">our service is creative, & decent</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src={service1} className="img-fluid w-100" alt="Image" />
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{width: '120px',height: '120px'}}>
                                    <i className="fas fa-home text-primary fa-4x"></i>
                                </div>
                                <a href="#" className="d-block fs-4 my-4">General Construction</a>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, minima!</p>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center ps-4 w-100">
                                    <h4>General Construction</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{width: '80px', height: '80px'}}>
                                    <i className="fas fa-home text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src={service2} className="img-fluid w-100" alt="Image" />
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{width: '120px', height: '120px'}}>
                                    <i className="fas fa-users-cog text-primary fa-4x"></i>
                                </div>
                                <a href="#" className="d-block fs-4 my-4">Property Maintenance</a>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, minima!</p>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Property Maintenance</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{width: '80px', height: '80px'}}>
                                    <i className="fas fa-users-cog text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src={service3} className="img-fluid w-100" alt="Image" />
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{width: '120px', height: '120px'}}>
                                    <i className="fas fa-hospital-user text-primary fa-4x"></i>
                                </div>
                                <a href="#" className="d-block fs-4 my-4">Project managment</a>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, minima!</p>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Project managment</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{width: '80px', height: '80px'}}>
                                    <i className="fas fa-hospital-user text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src={service4} className="img-fluid w-100" alt="Image" />
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{width: '100px', height: '100px'}}>
                                    <i className="fas fa-file-invoice-dollar text-primary fa-4x"></i>
                                </div>
                                <a href="#" className="d-block fs-4 my-4">Virtual Design & Build</a>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, minima!</p>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Virtual Design & Build</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{width: '80px', height: '80px'}}>
                                    <i className="fas fa-file-invoice-dollar text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src={service5} className="img-fluid w-100" alt="Image" />
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{width: '100px', height: '100px'}}>
                                    <i className="fas fa-cogs text-primary fa-4x"></i>
                                </div>
                                <a href="#" className="d-block fs-4 my-4">Preconstruction</a>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, minima!</p>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Preconstruction</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{width: '80px', height: '80px'}}>
                                    <i className="fas fa-cogs text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src={service6} className="img-fluid w-100" alt="Image" />
                            </div>
                            <div className="service-content text-center p-4">
                                <div className="bg-secondary btn-xl-square mx-auto" style={{width: '100px', height: '100px'}}>
                                    <i className="fas fa-sitemap text-primary fa-4x"></i>
                                </div>
                                <a href="#" className="d-block fs-4 my-4">Design Build</a>
                                <p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, minima!</p>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                            <div className="service-tytle">
                                <div className="d-flex align-items-center justify-content-start ps-4 w-100">
                                    <h4>Design Build</h4>
                                </div>
                                <div className="btn-xl-square bg-secondary p-4" style={{width: '80px', height: '80px'}}>
                                    <i className="fas fa-sitemap text-primary fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                        <a className="btn btn-secondary py-3 px-5 mt-4" href="#">More Services</a>
                    </div>
                </div>
            </div>
        </div>
        {/*Services section*/}
    </>
    );
}

export default ServiceComp;
