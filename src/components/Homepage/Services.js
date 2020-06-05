import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context/context';

class Services extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {ServiceData} = value;
                    return(
                        <ServicesWrapper className='py-5'>
                            <div className="container">
                                <div className="row">
                                    {ServiceData.map(services => {
                                        return(
                                            <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-4" key={services.id}>
                                                <div className="service-icon">
                                                    {services.icon}
                                                </div>
                                                <div className="mt-3 text-capitalize">
                                                    {services.title}
                                                </div>
                                                <div className="mt-3">
                                                    {services.text}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </ServicesWrapper>
                    )
                }}
            </ProductConsumer>
        );
    }
}

const ServicesWrapper = styled.section`
    background: rgba(95,183,284,0.5);
    .service-icon{
        font-size: 2.5rem;
        color: var(--primaryColor);
    }
    p{
        color: var(--darkGrey);
    }
`

export default Services;