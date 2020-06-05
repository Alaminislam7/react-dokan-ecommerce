import React from 'react';
import Hero from '../components/Hero';
import ContactBcg from '../images/page-images/contactBcg.jpeg'
import Contact from '../components/contactPage/Contact';

function ContactPage(props) {
    return (
        <>
          <Hero img={ContactBcg}/>
            <Contact/>
        </>
    );
}

export default ContactPage;