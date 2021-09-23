import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import logo from '../../images/logo.png'
import logot from '../../images/logot.png'

function Header() {

    const history = useHistory();

    const [signInMember, setSignInMember] = useState({email: "", password: ""})

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = {...signInMember};
        tempSignIn[name] = value;
        setSignInMember(tempSignIn);
    }

    const signInSubmitHandler = () => {
        axios.post('http://localhost:8080/login', signInMember).then(response => {
            localStorage.setItem("loggedInMember", response.data.email);
            history.push('/home')}).catch(error => {
                console.log("in the future add logic to navigate to an error page")});
    }

    const signOutSubmitHandler = () => {
        localStorage.removeItem('loggedInMember');
        history.push('/sign-up');
    }   

    const toggleDisplay = () => {
        if(localStorage.getItem("loggedInMember")) {
            return (<div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link className="nav-link nav-text" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-text" aria-current="page" to="/settings">Settings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-text" to="/about-us">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-text" to="/contact-us">Contact us</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-success" onClick={signOutSubmitHandler} type="button">Sign Out</button>
                </form>
            </div>)
        } else {
            return (<div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link className="nav-link nav-text" aria-current="page" to="/sign-up">Sign up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link nav-text" to="/about-us">About us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link nav-text" to="/contact-us">Contact us</Link>
                </li>
            </ul>
            <form className="d-flex">
                <input name="email" value={signInMember.email}  onChange={changeHandler} class="form-control me-2" type="text" placeholder="Email" aria-label="email" />
                <input name="password" value={signInMember.password} onChange={changeHandler} class="form-control me-2" type="password" placeholder="Password" aria-label="password" />
                <button className="btn btn-outline-success" onClick={signInSubmitHandler} type="button">Sign In</button>
            </form>
        </div>)
        }
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand logo" to="#">S - P - I - T</Link>
                    <img src={logot} style={{ width:'75px', height:'60px' }} class="img-fluid" alt="Image" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {toggleDisplay()}
                </div>
            </nav>
        </header>
    );
}

export default Header;