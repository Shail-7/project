import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router';
import { MenuContext } from '../App';

const Logout = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useContext(MenuContext);

    const destroySession = async () => {
        try {
            const res = await fetch("/blogout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            if (res.status === 200 || res.status === 401) {
                dispatch({ type: "USER", payload: false });
                navigate("/");
            }
            else {
                alert("Logout Failed");
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    useEffect(() => {
        destroySession();
    }, []);


    return (
        <div>Logout</div>
    )
}

export default Logout