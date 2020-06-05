import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

function Sidebar() {
    return (
        <ProductConsumer>
            {value => {
                const { Links, sidebarOpen, handleSidebar } = value;
                return(
                    <SideWrapper  show={sidebarOpen}>
                        <ul>
                            {Links.map(link=> {
                                return(
                                    <li key={link.id}>
                                        <Link 
                                            to={link.path}
                                            className="sidebar-links"
                                            onClick={handleSidebar}
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    );
}

const SideWrapper = styled.nav`
    position: fixed;
    top: 61px;
    left: 0px;
    list-style: none;
    width:100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-right: 4px solid var(--primaryColor);
    transition: var(--mainTransition);
    transform: ${props => (props.show? "translateX(0)" : "translateX(-100%)" ) };
    ul{
        list-style-type: none;
        padding: 0!important;
    }
    .sidebar-links{
        display: block;
        font-size: 1.5 rem;
        text-transform: uppercase;
        padding: 0.5rem 1.5rem;
        color: var(--mainBlack)
        background: transparent;
        transition: var(--mainTransition);
    }
    .sidebar-links:hover{
        background: var(--primaryColor);
        color: var(--mainWhite);
        padding: .5rem 1.5rem .5rem 2.5rem;
        text-decoration: none;
    }
    @media(min-width: 576px){
        width: 20rem;
    }

`

export default Sidebar;