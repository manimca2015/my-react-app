import React from 'react';


import AboutComp from './components/AboutComp';
import ChooseComp from './components/ChooseComp';
import ServiceComp from './components/ServiceComp';
import CounterComp from './components/CounterComp';
import ProjectComp from './components/ProjectComp';
import TeamComp from './components/TeamComp';
import BlogComp from './components/BlogComp';
import SliderComp from './components/SliderComp';

function HomePage() {
    return (
        <>
        <SliderComp />
        <AboutComp />
        <ChooseComp />
        <ServiceComp />
        <CounterComp />    
        <ProjectComp />
        <TeamComp />
        <BlogComp />
    </>
    );
}

export default HomePage;
