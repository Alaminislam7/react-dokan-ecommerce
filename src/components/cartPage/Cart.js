import React from 'react';
import CartColumn from './CartColumn';
import CartList from './CartList';
import CartTotals from './CartTotals';
import Title from '../Title';

function Cart(props) {
    return (
        <section className='py-5' style={{overflow: "hidden"}}>
            {/* Title */}
            <Title title='Your cart items' center/>
            {/* Cart column */}
            <CartColumn/>
            {/* Cart List */}
            <CartList/>
            {/* Cart Totals */}
            <CartTotals/>
        </section>
    );
}

export default Cart;