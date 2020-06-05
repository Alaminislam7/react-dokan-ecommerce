import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from "../context";


function Footer(props) {
    return (
        <ProductConsumer>
            {value => {
                return(
                    <FooterWrapper>
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="text-capitalize">
                                        copyright &copy; dokan ecommerce {new Date().getFullYear()}.all right reserve{" "}
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex justify-content-around">
                                    {value.socialIcons.map(item => 
                                        <a href={item.path} key={item.id}>
                                            {item.icon}
                                        </a>
                                        )}
                                </div>
                            </div>
                        </div>
                    </FooterWrapper>
                )
            }}
        </ProductConsumer>
    );
}
const FooterWrapper = styled.footer`
    background: var(--darkGrey);
    color: var(--mainWhite);
    .icon {
        font-size: 1.5rem;
        color: var(--mainWhite);
        transition: var(--mainTranstion);
    }
    .icon:hover {
        color: var(--primaryColor);
        cursor: pointer;
    }
`

export default Footer;