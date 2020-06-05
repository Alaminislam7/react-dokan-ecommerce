import React from 'react';
import Info from '../components/aboutPage/Info';
import aboutBcg from '../images/page-images/aboutBcg.jpeg';
import Hero from '../components/Hero';


function AboutPage(props) {
    return (
        <>
            <Hero img={aboutBcg}/>
            <Info/>
        </>
    );
}

export default AboutPage;