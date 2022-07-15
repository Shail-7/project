import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Register = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: 0,
        password: ''
    });

    const getUserData = async (e) => {
        try {
            e.preventDefault();

            const { name, email, phone, password } = userData;
            const res = await fetch("/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, phone, password })
            })
            const data = await res.json();
            if (res.status === 201) {
                // alert("Registraton Success");
                navigate("/login");
            } else {
                alert("Registration Failed")

            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }


    const setStateData = (e) => {

        const name = e.target.name;
        const val = e.target.value;

        setUserData((prevVal) => {
            return {
                ...prevVal,
                [name]: val
            }
        })

    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-12" id='reg-img' style={{ "height": "100vh" }}>
                        {/* <img src="./" alt="reg img" /> */}
                    </div>
                    <div className='container mx-auto col-xl-6 col-md-6 col-sm-12 col-12'>
                        <form method='post'>

                            <div className="row" style={{ "height": "100vh" }}>

                                <div className="my-auto mx-auto">
                                    <h4 className='text-center mb-3 mx-auto head'>Register</h4>
                                    <div className="row mx-auto">
                                        <div className="container mx-auto my-auto text-center">
                                            <div className='container reg-card mx-auto'>
                                                <div className="row reg-row">
                                                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                                                            <i className="fas fa-user reg-icon"></i>
                                                        </div>

                                                        <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                                                            <input autoFocus value={userData.name} onChange={setStateData} className='reg-inp' type="text" name='name' required placeholder='User Name' />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='container my-4 reg-card mx-auto'>
                                                <div className="row reg-row">
                                                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                                                            <i className="fas fa-envelope reg-icon"></i>
                                                        </div>

                                                        <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                                                            <input className='reg-inp'
                                                                value={userData.email} onChange={setStateData} type="email" name='email' required placeholder='User Email' />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='container my-4 reg-card mx-auto'>
                                                <div className="row reg-row">
                                                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                                                            <i className="fas fa-lock reg-icon"></i>
                                                        </div>

                                                        <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                                                            <input className='reg-inp' type="password" value={userData.password} onChange={setStateData} name='password' required placeholder='User Password' />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='container my-4 reg-card mx-auto'>
                                                <div className="row reg-row">
                                                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                                                            <i className="fas fa-phone reg-icon"></i>
                                                        </div>

                                                        <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                                                            <input className='reg-inp' type="number" name='phone' value={userData.phone} onChange={setStateData} required placeholder='User Phone' style={{}} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='my-4 mx-auto'>
                                                <div className="row mx-auto">
                                                    <div className="mx-auto row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        <button type='submit' onClick={getUserData} className='btn mx-auto home-center-btn'>Register</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>

                    </div>
                    {/* </div> */}
                </div>
                {/* <div className='container text-center'>
                    <h4 className='text-center my-4 head'>Register</h4>
                    <div className='card reg-card mx-auto'>
                        <div className="row">
                            <input className='reg-inp' type="text" name='name' required placeholder='User Name' />
                        </div>
                    </div>

                </div> */}
            </div>
        </>
    )
}

export default Register