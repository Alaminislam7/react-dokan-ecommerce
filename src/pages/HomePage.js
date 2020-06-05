import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Services from '../components/Homepage/Services';
import Featured from '../components/Homepage/Featured';

function HomePage(props) {
    return (
        <div>
            <Hero title="Awsome gadgets" max={true}>
                <Link to='/products' className='main-link'>Our Product</Link>
            </Hero>
            <Services/>
            <Featured/>
        </div>
    );
}

export default HomePage;