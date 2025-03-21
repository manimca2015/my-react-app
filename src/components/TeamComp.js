import React from 'react';
import team1 from '../img/team-1.jpg';
import team2 from '../img/team-2.jpg';
import team3 from '../img/team-3.jpg';
import team4 from '../img/team-4.jpg';


function TeamComp() {
    return (
        <>
    {/*Team Start*/}
        <div className="container-fluid team pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">Our Team</p>
                    <h2 className="display-4 text-capitalize mb-3">Expert team members.</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item border border-primary p-1">
                            <div className="team-border-style-1"></div>
                            <div className="team-border-style-2"></div>
                            <div className="team-border-style-3"></div>
                            <div className="team-border-style-4"></div>
                            <div className="team-img">
                                <img src={team1} className="img-fluid w-100" alt="" />
                                <div className="team-icon d-flex justify-content-around">
                                    <a className="btn btn-secondary btn-md-square text-white mx-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center border border-top-0 bg-white py-3">
                                <h4 className="mb-0">Masud Maria</h4>
                                <p className="mb-0">Foreman</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item border border-primary p-1">
                            <div className="team-border-style-1"></div>
                            <div className="team-border-style-2"></div>
                            <div className="team-border-style-3"></div>
                            <div className="team-border-style-4"></div>
                            <div className="team-img">
                                <img src={team2} className="img-fluid w-100" alt="" />
                                <div className="team-icon d-flex justify-content-around">
                                    <a className="btn btn-secondary btn-md-square text-white mx-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center border border-top-0 bg-white py-3">
                                <h4 className="mb-0">Masud Maria</h4>
                                <p className="mb-0">Foreman</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item border border-primary p-1">
                            <div className="team-border-style-1"></div>
                            <div className="team-border-style-2"></div>
                            <div className="team-border-style-3"></div>
                            <div className="team-border-style-4"></div>
                            <div className="team-img">
                                <img src={team3} className="img-fluid w-100" alt="" />
                                <div className="team-icon d-flex justify-content-around">
                                    <a className="btn btn-secondary btn-md-square text-white mx-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center border border-top-0 bg-white py-3">
                                <h4 className="mb-0">Masud Maria</h4>
                                <p className="mb-0">Foreman</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="team-item border border-primary p-1">
                            <div className="team-border-style-1"></div>
                            <div className="team-border-style-2"></div>
                            <div className="team-border-style-3"></div>
                            <div className="team-border-style-4"></div>
                            <div className="team-img">
                                <img src={team4} className="img-fluid w-100" alt="" />
                                <div className="team-icon d-flex justify-content-around">
                                    <a className="btn btn-secondary btn-md-square text-white mx-3" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-secondary btn-md-square text-white me-3" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center border border-top-0 bg-white py-3">
                                <h4 className="mb-0">Masud Maria</h4>
                                <p className="mb-0">Foreman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/*Team End*/}
    </>
    );
}

export default TeamComp;
