import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import { MenuContext } from '../App';

const Login = () => {

  const { state, dispatch } = useContext(MenuContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getData = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch('/blogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })

      const data = await res.json();

      if (res.status === 200) {
        // alert("Login Successful")
        dispatch({ type: "USER", payload: true });
        navigate('/uhome');

      } else {
        alert("Login Failed")
      }

    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  return (
    <>
      <div className='container-fluid'>
        <div id='login-img' className="row">
          <div className='container p-1 mx-auto my-auto' id='home-center-div'>
            <h4 className='' id='login-head-font'>
              Login
            </h4>
            <form method='get'>
              <div className="text-center">

                <div className='container reg-card mx-auto'>
                  <div className="row reg-row">
                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                      <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                        <i className="fas fa-user reg-icon"></i>
                      </div>

                      <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                        <input autoFocus value={email} onChange={(e) => { setEmail(e.target.value) }} className='reg-inp' type="text" name='name' required placeholder='User Name' />
                      </div>
                    </div>
                  </div>

                </div>

                <div className='container mt-3 reg-card mx-auto'>
                  <div className="row reg-row">
                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                      <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                        <i className="fas fa-lock reg-icon"></i>
                      </div>

                      <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                        <input className='reg-inp' value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name='password' required placeholder='User Password' />
                      </div>
                    </div>
                  </div>

                </div>

                <div className='my-4 mx-auto'>
                  <div className="row mx-auto">
                    <div className="mx-auto row col-xl-6 col-md-6 col-sm-6 col-6">
                      <button type='submit' onClick={getData} className='btn mx-auto home-center-btn'>Login</button>
                    </div>
                  </div>
                </div>

                {/* <NavLink to='/register' className='btn home-center-btn' id=''>Register</NavLink> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default Login