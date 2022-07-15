import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { getUser } from '../User/user';
const CreateProject = () => {

    const navigate = useNavigate();

    const [project, setProject] = useState({});
    const [user, setUser] = useState({});


    const getProjectData = async (e) => {
        try {
            e.preventDefault();

            // let data = await getUser();
            // alert(data.name);
            // setUser(data);

            const { name, url, description } = project;

            const res = await fetch('/project', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, url, description
                })
            });
            const data = await res.json();
            if (res.status === 201) {
                alert("Project Created Successfully");
                navigate('/myprojects');
            } else if (res.status === 401) {
                alert("Unauthorized User");
            }
            else {
                alert("Problem in creating the Project");
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    const getStateVals = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setProject((prevVal) => {
            return ({
                ...prevVal,
                [name]: val
            })
        })
    }

    // getProjectData();
    // alert(user.name);



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 col-12" id='cprj-img' style={{ "height": "100vh" }}>
                        {/* <img src="./" alt="reg img" /> */}
                    </div>
                    <div className='container mx-auto col-xl-6 col-md-6 col-sm-12 col-12'>
                        <form method='post'>

                            <div className="row" style={{ "height": "100vh" }}>

                                <div className="my-auto mx-auto">
                                    <h4 className='text-center mb-3 mx-auto head'>Create Project</h4>
                                    <div className="row mx-auto">
                                        <div className="container mx-auto my-auto text-center">
                                            <div className='container reg-card mx-auto'>
                                                <div className="row reg-row">
                                                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                                                            <i className="fas fa-user reg-icon"></i>
                                                        </div>

                                                        <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                                                            <input autoFocus value={project.name} onChange={getStateVals} className='reg-inp' type="text" name='name' required placeholder='Project Name' />
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
                                                                value={project.url} onChange={getStateVals} type="text" name='url' required placeholder='Project Url' />
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
                                                            <textarea className='reg-inp' value={project.description} onChange={getStateVals} name='description' required placeholder='Project Description' ></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='container my-4 reg-card mx-auto'>
                                                <div className="row reg-row">
                                                    <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        {/* <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                                                            <i className="fas fa-phone reg-icon"></i>
                                                        </div> */}

                                                        <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                                                            <input className='reg-inp' hidden type="text" name='user_id' required />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='my-4 mx-auto'>
                                                <div className="row mx-auto">
                                                    <div className="mx-auto row col-xl-6 col-md-6 col-sm-6 col-6">
                                                        <button type='submit' onClick={getProjectData} className='btn mx-auto home-center-btn'>Create</button>
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
            </div>

        </>
    )
}

export default CreateProject