import React, { useReducer, useState, useEffect } from "react"
import './User.css';
import axios from "axios";


const ProfileEditAdmin = () => {

    const id = '60f0c0b0c8b4c30015b9b0d0'
    const [Registers, addPost] = useState({

        Name: "",
        Email: "",
        Password: "",
        Num: ""

    });
    const { Name, Email, Password, Num } = Registers;

    const onInputChange = e => {
        // addPost({ ...Registers, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        // e.preventDefault();
        // await axios.put(`https://travelmanagement.onrender.com/user/update/${id}`, Registers);

        // // history.push("/user-account");
        // alert("  Successful")
    }

    const loadPackage = async () => {
        const res = await axios.get
            (`https://travelmanagement.onrender.com/user/details/${id}`)

        addPost(res.data.BackendData)
    }
    // useEffect(() => {
    //     loadPackage();
    // }, []);

    return (
        <div>
            <div >
                <div className="info">





                <div className='userAccountcss'>
                    <div >
                        <div class="padding">
                            <div class="row container d-flex justify-content-center">
                                <div class="col-xl-6 col-md-12">
                                    <div class="card user-card-full">
                                        <div class="row m-l-0 m-r-0">
                                            <div class="col-sm-4 bg-c-lite-green user-profile">
                                                <div class="card-block text-center text-white" style={{marginTop:'35%'}}>
                                                    <div class="m-b-25">
                                                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                                                    </div>
                                                    <h6 class="f-w-600">{Name}</h6>
                                                    <p>{Email}</p>
                                                   
                                                </div>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="card-block">
                                                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Update Your Information</h6>
                                                    <form onSubmit={e => onSubmit(e)} >
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Name</p>
                                                           
                                                            <input class="text-muted mb-4" style={{width:'150px'}} type="text" name="Name" value={Name} onChange={e => onInputChange(e)} />
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Email</p>
                                                            <input class="text-muted mb-4" style={{width:'150px'}} type="text"  />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Mobile Number</p>
                                                            <input class="text-muted mb-4" style={{width:'150px'}} type="text"  name="Email" value={Email} onChange={e => onInputChange(e)} />
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">User Type</p>
                                                            <input class="text-muted mb-4" style={{width:'150px'}} type="text" name="Num" value={"Num"} onChange={e => onInputChange(e)} disabled />
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Password</p>
                                                            <input class="text-muted mb-4" style={{width:'150px'}} type="text"  Name="Password" value={Password} onChange={e => onInputChange(e)} />
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <p class="m-b-10 f-w-600">Confirm Password</p>
                                                            <input class="text-muted mb-4" style={{width:'150px'}} type="text"  />
                                                        </div>
                                                    </div>

                                                    <center>
                                                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="fa fa-facebook-square feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="fa fa-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="fa fa-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </center>

                                                    <button className="btn btn-info a123 me-5 text-white" type="button" name="submit" style={{width :'40%'}} >Cancel</button>

                                                    <button className="btn btn-danger a123 text-white" type="submit" name="submit" style={{width :'40%'}} >Update</button>
                                                  
                                                  </form>
        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   
                </div>
            </div>
        </div>


    )



}



export default ProfileEditAdmin