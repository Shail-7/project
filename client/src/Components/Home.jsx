import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div id='blah'>
                    <div className="row home-bg">
                        <div className='container p-3 mx-auto my-auto' id='home-center-div'>
                            <h3 className='home-head-font'>
                                All your Projects at one Place.
                            </h3>
                            <div className="text-center">
                                <NavLink to='/register' className='btn home-center-btn' id=''>Register</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home