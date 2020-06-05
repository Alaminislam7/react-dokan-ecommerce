import React from 'react';
import { ProductConsumer } from '../../context/context';
import Title from '../Title';
import Product from '../Product'
import ProductFilter from './ProductFilter';

const Products = () => {
    return (
        <ProductConsumer>
            {value => {
                const {filterProduct} = value;
                console.log(filterProduct);
                return(
                    <section className="py-5">
                        <div className="container">
                            {/* title */}
                            <Title center title="our products" />
                            {/* Product filter */}
                            <ProductFilter/>
                            {/* new Product filter */}
                            {/* total count */}
                            <div className="row">
                                <h6 className="text-title">
                                    total products: {filterProduct.length}
                                </h6>
                            </div>
                            {/* end total count */}
                            {/* products */}
                            <div className="row py-5">
                                {filterProduct.length === 0 ? (
                                <div className="col text-title text-center">
                                    sorry, no items matched your search
                                </div>
                                ) : (
                                    filterProduct.map(product => {
                                    return <Product key={product.id} product={product} />;
                                })
                                )}
                            </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    );
};



export default Products;