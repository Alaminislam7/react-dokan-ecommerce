import React from 'react';
import CartSection from '../components/cartPage';
import Hero from '../components/Hero';
import CartBcg from '../images/page-images/storeBcg.jpeg';

function CartPage() {
    return (
        <div>
            <Hero img={CartBcg}/>
            <CartSection/>
        </div>
    );
}

export default CartPage;