import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>          
        <div className="container-fluid topbar d-none d-xl-block w-100">
            <div className="row gx-0 align-items-center" style={{height: '45px'}}>
                <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                    <div className="d-flex flex-wrap">
                        <Link to="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-secondary me-2"></i>Find A Location</Link>
                        <Link to="#" className="text-muted me-4"><i className="fas fa-phone-alt text-secondary me-2"></i>+01234567890</Link>
                        <Link to="#" className="text-muted me-0"><i className="fas fa-envelope text-secondary me-2"></i>Example@gmail.com</Link>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center justify-content-end">
                        <Link to="#" className="text-muted me-3"><i className="fas fa-clock text-secondary me-2"></i>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</Link>
                        <Link to="#" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-twitter"></i></Link>
                        <Link to="#" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-instagram"></i></Link>
                        <Link to="#" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid sticky-top px-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light py-3 px-4">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-secondary display-6"><i className="fas fa-city text-primary me-3"></i>Constra</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto pt-2 pt-lg-0">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/service">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap pt-3 pt-lg-0 ms-lg-2">
                        <button className="btn btn-primary py-2 px-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                        <Link to="/quote" className="btn btn-secondary py-2 px-4 ms-3 flex-wrap flex-sm-shrink-0">Get a Quote</Link>
                    </div>
                </div>
            </nav>
        </div>
        

        <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h4 className="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
