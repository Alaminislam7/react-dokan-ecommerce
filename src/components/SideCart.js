import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

function SideCart() {
    return (
        <ProductConsumer>
            {value => {
                const {cartOpen, closeCart, cart, cartTotal} = value;
                return(
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <ul>
                            {cart.map(item => {
                                console.log(item.image)
                                return(
                                    <li key={item.id} className='cart-item mb-4'>
                                        <img src={`../${item.image}`} alt="cart item" width='35'/>
                                        <div className="mt-3">
                                            <h6 className="text-uppercase">
                                                {item.title}
                                            </h6>
                                            <h6 className="text-title text-capitalize">
                                                amount : {item.count}
                                            </h6>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <h4 className="text-capitalize text-main">
                            cart total : ${cartTotal}
                        </h4>
                        <div className="text-center my-5">
                            <Link 
                                className='main-link'
                                to='/cart'
                            >
                                cart page
                            </Link>
                        </div>
                    </CartWrapper>
                )
            }}
        </ProductConsumer>
    );
}

const CartWrapper = styled.nav`
    position: fixed;
    top: 61px;
    right: 0px;
    list-style: none;
    width:100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-left: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform: ${props => (props.show? "translateX(0)" : "translateX(100%)" ) };
    @media(min-width: 576px){
        width: 20rem;
    }
    overflow: scroll;
    padding: 2rem;
    ul{
        padding: 0 !important;
    }
    .cart-item{
        list-style: none;
    }
`   

export default SideCart;