import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from "react-router-dom";

const MyProjects = () => {

    const navigate = useNavigate();
    const [myProjects, setMyProjects] = useState([]);
    let [showNoData, setShowNoData] = useState(false);
    let [showProjects, setShowProjects] = useState(false);

    const [updateProjectData, setUpdateProjectData] = useState({});
    let [showProjectUpdate, setShowProjectUpdate] = useState(false);

    // let [description, setDescription] = useState('');


    const updateProject = (project) => {
        try {
            setUpdateProjectData(project);
            setShowProjectUpdate(true);
            setShowProjects(false);

        } catch (err) {
            throw err;
        }
    }

    const getUpdateProjectData = async (e) => {

        try {
            e.preventDefault();
            const { _id, name, description, url, user_id, __v, color } = updateProjectData;
            // alert(_id);
            const res = await fetch('/project', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id, name, description, url, user_id, __v, color
                })
            })
            // alert(res.status);
            // const data = await res.json();
            if (res.status === 205) {
                // alert("Updated");
                window.location.reload(false);
                // navigate('/myprojects')
            } else {
                alert("Updation Failed");
            }

        } catch (err) {
            console.log(err);
            throw err;
        }
    }


    const modifyData = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setUpdateProjectData((prevVal) => {
            return {
                ...prevVal,
                [name]: val
            }
        })
    }

    const SingleProjectUpdate = () => {
        // setDescription(updateProjectData.description);
        // return (<>
        //     <form method='patch'>
        //         <div className="my-auto mx-auto">
        //             <h4 className='text-center mb-3 mx-auto head'>Update Project</h4>
        //             <div className="row mx-auto">
        //                 <div className="container mx-auto my-auto text-center">
        //                     <div className='container reg-card mx-auto'>
        //                         <div className="row reg-row">
        //                             <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
        //                                 <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
        //                                     <i className="fas fa-user reg-icon"></i>
        //                                 </div>

        //                                 <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
        //                                     <input autoFocus value={updateProjectData.name} onChange={modifyData} className='reg-inp' type="text" name='name' required placeholder='User Name' />
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>

        //                     <div className='container my-4 reg-card mx-auto'>
        //                         <div className="row reg-row">
        //                             <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
        //                                 <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
        //                                     <i className="fas fa-envelope reg-icon"></i>
        //                                 </div>

        //                                 <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
        //                                     <textarea className='reg-inp'
        //                                         value={description} name='description' onChange={modifyData} required placeholder='Project Description' ></textarea>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>

        //                     <div className='container my-4 reg-card mx-auto'>
        //                         <div className="row reg-row">
        //                             <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
        //                                 <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
        //                                     <i className="fas fa-lock reg-icon"></i>
        //                                 </div>

        //                                 <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
        //                                     <input className='reg-inp' type="text" value={updateProjectData.url} onChange={modifyData} name='url' placeholder='Project url' />
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>


        //                     <div className='my-4 mx-auto'>
        //                         <div className="row mx-auto">
        //                             <div className="mx-auto row col-xl-6 col-md-6 col-sm-6 col-6">
        //                                 <button type='submit' onClick={getUpdateProjectData} className='btn mx-auto home-center-btn'>Save</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </form>
        //     {/* <p>{updateProjectData.name}</p> */}
        // </>)
    }

    const RenderProjects = () => {
        return (<>
            <div className="container bootstrap snippets bootdeys">
                <div className="row">
                    {myProjects.map((elem) => {
                        return (
                            <div className="col-md-4 col-sm-6 content-card">
                                <div className="card-big-shadow">
                                    <div className="card-style card-just-text" data-background="color" data-color={elem.color} data-radius="none">
                                        <div className="content">
                                            {/* <h6 className="category h6">User Name</h6> */}
                                            <h4 className="title h4">{elem.name}  <span className='text-center'><NavLink to="/"><i className="fas fa-link" style={{ "color": "green" }}></i>
                                            </NavLink> </span></h4>
                                            <p className="description">{elem.description} </p>

                                        </div>
                                        <div className="container">
                                            <button onClick={() => { updateProject(elem) }} className='btn text-success float-left' href=""><i className="fas fa-edit"></i></button>

                                            <button className='btn text-danger float-right' href=""><i className="fas fa-trash-alt"></i></button>
                                        </div>
                                    </div> {/*  end card  */}
                                </div>
                            </div>
                        );

                    })}
                </div>
            </div>
        </>)
    }


    const NoData = () => {
        return (<>
            <h1>No Data Found</h1>
        </>)
    }

    const getProjects = async () => {
        try {
            // alert(showNoData);
            const res = await fetch('/project', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            setMyProjects(data);

            // setMyProjects(async () => {
            //     await data;
            // });

            // console.log(`data ${data}`);
            // console.log(`res status ${res.status}`)

            if (res.status === 200) {
                console.log(myProjects);
                setShowProjects(true);
                setShowNoData(false);
                setShowProjectUpdate(false);

            } else if (res.status === 404) {
                console.log("No data Found");
                setShowNoData(true);
                setShowProjects(false);
                setShowProjectUpdate(false);
            } else if (res.status === 401) {
                alert("Unauthorized User")
            }
            else {
                console.log("Some error occurred");
            }
        } catch (err) {
            console.log(err);
            throw err;
        }

    }
    useEffect(() => {
        getProjects();
    }, []);



    return (<>

        {showProjects && <RenderProjects />}
        {showNoData && <NoData />}
        {/* <SingleProjectUpdate /> */}
        {showProjectUpdate && <>
            <div>

                <form method='patch'>
                    {/* {setDescription(updateProjectData.description)} */}

                    <div className="my-auto mx-auto">
                        <h4 className='text-center mb-3 mx-auto head'>Update Project</h4>
                        <div className="row mx-auto">
                            <div className="container mx-auto my-auto text-center">
                                <div className='container reg-card mx-auto'>
                                    <div className="row reg-row">
                                        <div className="container row col-xl-6 col-md-6 col-sm-6 col-6">
                                            <div className='col-xl-1 col-md-1 col-sm-1 col-1 mx-auto'>
                                                <i className="fas fa-user reg-icon"></i>
                                            </div>

                                            <div className='col-xl-4 col-md-4 col-sm-4 col-4'>
                                                <input autoFocus value={updateProjectData.name} onChange={modifyData} className='reg-inp' type="text" name='name' required placeholder='User Name' />
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
                                                <textarea className='reg-inp'
                                                    value={updateProjectData.description} name='description' onChange={modifyData} required placeholder='Project Description' ></textarea>
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
                                                <input className='reg-inp' type="text" value={updateProjectData.url} onChange={modifyData} name='url' placeholder='Project url' />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className='my-4 mx-auto'>
                                    <div className="row mx-auto">
                                        <div className="mx-auto row col-xl-6 col-md-6 col-sm-6 col-6">
                                            <button type='submit' onClick={getUpdateProjectData} className='btn mx-auto home-center-btn'>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                </form>
            </div>


        </>}

    </>
    )
}

export default MyProjects