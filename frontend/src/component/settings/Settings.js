import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Settings() {

    const [member, setMember] = useState({address:{}})

    useEffect(() => {
        const params = {
            email: localStorage.getItem("loggedInMember")
        }
        axios.get('http://localhost:8080/findMemberByEmail', {params})
        .then(response => {
            // Spring returns a Member object hence we save in the
            // state variable called Member
            setMember(response.data);
        }).catch(error => {

        });
        }, [] // This argument allows a render when this variable
              // updates. Since we only want to call this function once
              // when the component loads, no need to add a tracking
              // variable
    );

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const tempMember = {...member};
        if (tempMember[name] != null) {
            tempMember[name] = value;       
        } else {
            tempMember.address[name] = value;
        }   
        setMember(tempMember);
    }

    const updateSubmitHandler = () => {
        axios.post('http://localhost:8080/save', member).then(response => {
        }).catch(error => {
            console.log("in the future add logic to navigate to an error page")});
    }

    return (
        <div className="container layout">
    <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
                <div className="card-body">
                    <div className="account-settings">
                        <div className="user-profile">
                            <div className="user-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" height="350" width="250"/>
                            </div>
                            <br />
                            <h5 className="user-name">{member.firstName} {member.lastName}</h5>
                            <h6 className="user-email">{member.email}</h6>
                        </div>
                        <div className="about">
                            <h4 className="mb-2 text-primary">About</h4>
                            <p className="about-font">I'm {member.firstName}. A retail salesman, financial minded individual, and a hobby investor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
                <div className="card-body">
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 className="mb-3 text-primary">Personal Details</h2>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="firstName" className="input">First Name</label>
                                <input name="firstName" value={member.firstName} onChange={changeHandler} type="text" className="form-control" id="firstName" placeholder="Enter full name" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="lastName" className="input">Last Name</label>
                                <input name="lastName" value={member.lastName} onChange={changeHandler} type="text" className="form-control" id="lastName" placeholder="Enter full name" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="email" className="input">Email</label>
                                <input name="email" value={member.email} type="email" className="form-control" id="email" placeholder="Enter email ID" readonly />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="password" className="input">Password</label>
                                <input name="password" value={member.password} onChange={changeHandler}  type="password" className="form-control" id="password" placeholder="Enter password" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 className="mb-3 text-primary">Address</h2>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="Street" className="input">Street</label>
                                <input name="street" value={member.address.street} onChange={changeHandler} type="name" className="form-control" id="Street" placeholder="Enter Street" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="city" className="input">City</label>
                                <input name="city" value={member.address.city} onChange={changeHandler} type="name" className="form-control" id="city" placeholder="Enter City" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="state" className="input">State</label>
                                <input name="state" value={member.address.state} onChange={changeHandler} type="text" className="form-control" id="state" placeholder="Enter State" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="zip" className="input">Zip Code</label>
                                <input name="zip" value={member.address.zip} onChange={changeHandler} type="text" className="form-control" id="zip" placeholder="Zip Code" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="text-right">
                                <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                <button type="button" onClick={updateSubmitHandler} id="submit" name="submit" className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Settings;