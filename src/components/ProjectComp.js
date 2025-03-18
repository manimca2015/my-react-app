import React from 'react';
import project1 from '../img/project-1.jpg';
import project2 from '../img/project-2.jpg';
import project3 from '../img/project-3.jpg';
import project4 from '../img/project-4.jpg';



function ProjectComp() {
    return (
        <>
    {/* Project start */}
        <div className="container-fluid project py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">Our Projects</p>
                    <h2 className="display-4 text-capitalize mb-3">Recent Completed Projects</h2>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="project-item">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="project-img">
                                        <img src={project1} className="img-fluid w-100 pt-3 ps-3" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="project-content mb-4">
                                        <p className="fs-5 text-secondary mb-2">Architecture</p>
                                        <a href="#" className="h4">We Building Everything</a>
                                        <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                                    </div>
                                    <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="project-item">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="project-img">
                                        <img src={project2} className="img-fluid w-100 pt-3 ps-3" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="project-content mb-4">
                                        <p className="fs-5 text-secondary mb-2">Interior Design</p>
                                        <a href="#" className="h4">We Building Everything</a>
                                        <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                                    </div>
                                    <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="project-item">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="project-img">
                                        <img src={project3} className="img-fluid w-100 pt-3 ps-3" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="project-content mb-4">
                                        <p className="fs-5 text-secondary mb-2">House & Exterior</p>
                                        <a href="#" className="h4">We Building Everything</a>
                                        <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                                    </div>
                                    <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="project-item">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="project-img">
                                        <img src={project4} className="img-fluid w-100 pt-3 ps-3" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="project-content mb-4">
                                        <p className="fs-5 text-secondary mb-2">Interior Design</p>
                                        <a href="#" className="h4">We Building Everything</a>
                                        <p className="mb-0 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore perferendis velit minus, perspiciatis eveniet adipisci tempora voluptatem quis dolores.</p>
                                    </div>
                                    <a className="btn btn-primary py-2 px-4" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                        <a className="btn btn-secondary py-3 px-5" href="#">More Projects</a>
                    </div>
                </div>
            </div>
        </div>
    {/* Project end */}
    </>
    );
}

export default ProjectComp;
