import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicePage from './ServicePage';
import ContactComp from './ContactComp';

function App() {
    return (
                <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/contact" element={<ContactComp />} />
            </Routes>
            <Footer />
                    </Router>
    );
}

export default App;
