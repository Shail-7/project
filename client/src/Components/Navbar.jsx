import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../App'
import "../App.css"

const Navbar = () => {

    const { state, dispatch } = useContext(MenuContext);
    console.log(state);


    const RenderMenu = () => {
        if (state === true) {
            return (<>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink exact className="nav-link nav-link-style" to="/uhome">Home <span className="sr-only"></span></NavLink>
                        </li>

                        <li className="nav-item active">
                            <NavLink exact className="nav-link nav-link-style" to="/createproject">Create Project <span className="sr-only"></span></NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink exact className="nav-link nav-link-style" to="/myprojects">My Projects</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact className="nav-link nav-link-style" to="/logout">Logout</NavLink>
                        </li>

                    </ul>

                </div>
            </>)

        } else {

            return (<>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink exact className="nav-link nav-link-style" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link nav-link-style" to="/register">Register</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact className="nav-link nav-link-style" to="/login">Login</NavLink>
                        </li>

                    </ul>

                </div>
            </>);

        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav-style">
                <NavLink exact className="navbar-brand nav-link-style" to="#">The Project App</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <RenderMenu />

            </nav>
        </>

    )
}

export default Navbar