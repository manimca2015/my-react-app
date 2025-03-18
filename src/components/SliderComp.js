import React from 'react';
import { Link } from 'react-router-dom';

import carousel1 from '../img/carousel-1.jpg';
import carousel2 from '../img/carousel-2.jpg';
import carousel3 from '../img/carousel-3.jpg';


function SliderComp() {
    return (
        <>
       <div className="container-fluid overflow-hidden px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators fadeInUp animate__animated" data-animation="fadeInUp" data-delay="1s" style={{animationDelay: '1s'}}>
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src={carousel1} className="img-fluid w-100" alt="First slide" />
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-4 mb-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay="1s" style={{animationDelay: '1s'}}>Construction Business</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp" data-delay="1.3s" style={{animationDelay: '1.3s'}}>We build somethings new and consistent.</h1>
                            <p className="mb-5 fs-5 fadeInUp animate__animated" data-animation="fadeInUp" data-delay="1.5s" style={{animationDelay: '1.5s'}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <div className="d-flex justify-content-center">
                                <Link to="#" className="btn btn-primary d-flex py-3 px-5 me-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay="1.5s" style={{animationDelay: '1.7s'}}>Apply Now</Link>
                                <Link to="#" className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay="1.5s" style={{animationDelay: '1.7s'}}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    {/* Add the rest of your carousel items here */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon btn-lg-square fadeInLeft animate__animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{animationDelay: '1.3s'}}><i className="fas fa-chevron-left fa-2x"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon btn-lg-square fadeInRight animate__animated" aria-hidden="true" data-animation="fadeInRight" data-delay="1.1s" style={{ animationDelay: '1.3s' }}><i className="fas fa-chevron-right fa-2x"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* slider section */}

    </>
    );
}

export default SliderComp;
