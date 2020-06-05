import React, { Component } from 'react';
import { ProductConsumer } from '../../context/context';
import Title from '../../components/Title';
import Product from '../Product';


class Featured extends Component {
    render() {
        return (
            <section className='py-5'>
                <div className="container">
                    <Title title='Featured product' ></Title>
                    <div className="row">
                    <ProductConsumer>
                        {value => {
                        const { featuredProducts } = value;

                        return featuredProducts.map(product => (
                            <Product key={product.id} product={product} />
                        ));
                        }}
                    </ProductConsumer>
                    </div>
                </div>
            </section>
        );
    }
}

export default Featured;