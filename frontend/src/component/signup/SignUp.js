import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function SignUp(props) {

    const history = useHistory();

    const [member, setMemberInfo] = useState({
        firstName: "", lastName: "", email: "", age: "", password: "",
        address: {street: "", city: "", state: "", zip: ""}
    })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const tempMember = {...member};
        if (tempMember[name] != null) {
            tempMember[name] = value;       
        } else {
            tempMember.address[name] = value;
        }   
        setMemberInfo(tempMember);
    }

    const signUpSubmitHandler = () => {
        axios.post('http://localhost:8080/save', member).then(response => {
            history.push('/thank-you')}).catch(error => {
                console.log("in the future add logic to navigate to an error page")});
    }

    return (
        <div className="sign-up-container container">
            <div className="description">
                <p>The Sustainable Passive Income Tracker (SPIT) <br />
                    is a platform that allows Members to monitor and <br />
                    track their stock information. Members can search <br />
                    for stocks individually, add stocks to a main <br />
                    repository and add specific stocks to their own <br />
                    personal stock list.</p>
            </div>
            <form class="row g-3 sup-form">
                <h2> Sign up for a SPIT account below:</h2>
                <div class="col-md-6">
                    <label for="inputFirstName" class="form-label">First Name</label>
                    <input name="firstName" value={member.firstName} onChange={changeHandler} type="text" class="form-control" id="inputFirstName" />
                </div>
                <div class="col-md-6">
                    <label for="inputLastName" class="form-label">Last Name</label>
                    <input name="lastName" value={member.lastName} onChange={changeHandler} type="text" class="form-control" id="inputLastName" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input name="email" value={member.email} onChange={changeHandler} type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Age</label>
                    <input name="age" value={member.age} onChange={changeHandler} type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input name="password" value={member.password} onChange={changeHandler} type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Street</label>
                    <input name="street" value={member.address.street} onChange={changeHandler} type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input name="city" value={member.address.city} onChange={changeHandler} type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentucky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input name="zip"  value={member.address.zip} onChange={changeHandler} type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div class="d-grid gap-2 ">
                    <button class="bg-dark btn btn-outline-success" type="button" onClick={signUpSubmitHandler}>Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;