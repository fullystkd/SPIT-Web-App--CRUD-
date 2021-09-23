import React from 'react';
import Header from '../header/Header';
import SignUp from './../signup/SignUp';
import AboutUs from '../aboutus/AboutUs';
import {Route, withRouter} from 'react-router-dom';
import ThankYou from '../thankyou/ThankYou';
import Home from '../home/Home';
import ContactUs from '../contactus/ContactUs';
import Settings from '../settings/Settings';

function Layout() {
    return (
        <div className="mb-5">
           <Header />
           <Route path="/sign-up" component={SignUp}/>
           <Route exact path="/" component={SignUp}/>
           <Route path="/about-us" component={AboutUs}/>
           <Route path="/thank-you" component={ThankYou}/>
           <Route path="/home" component={Home}/>
           <Route path="/settings" component={Settings}/>
           <Route path="/contact-us" component={ContactUs}/>  
        </div>
    );
}

export default withRouter(Layout);