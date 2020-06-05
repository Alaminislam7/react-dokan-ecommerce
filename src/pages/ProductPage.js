import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import ProductBcg from '../images/page-images/productsBcg.jpeg';

function ProductPage(props) {
    return (
        <div>
            <Hero img={ProductBcg}/>
            <Products/>
        </div>
    );
}

export default ProductPage;