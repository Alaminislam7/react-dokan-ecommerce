import React from 'react';
import defaultBcg from '../images/page-images/defaultBcg.jpeg';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Default() {
    return (
        <Hero img={defaultBcg} max={true} title='404'>
            <h2 className="text-uppercase">page Not found</h2>
            <Link to='/products' className='main-link' style={{marginTop: '2rem'}}>Our products</Link>
        </Hero>
    );
}

export default Default;