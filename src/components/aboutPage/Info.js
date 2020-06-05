import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/page-images/aboutBcg.jpeg';

function Info(props) {
    return (
        <div>
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={aboutBcg} alt="about image" className='img-fluid img-thumbnail'
                            style={{ background: "var(--darkGrey)" }}
                            />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <Title title='About us' center/>
                            <p className="text-lead text-muted my-3">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus vel hic nihil iure at repellendus dolorum consequatur. Rem.
                            </p>
                            <p className="text-lead text-muted my-3">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus vel hic nihil iure at repellendus dolorum consequatur. Rem.
                            </p>
                            <button 
                                className='main-link'
                                type= "button"
                                style={{marginTop:"2rem"}}
                            >
                                More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;