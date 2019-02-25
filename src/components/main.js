import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./login";
import forgot from "./forgot"
import welcome from "./welcome"
import emailSent from "./emailsent";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Welcome to Laura's Site</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/Register">Register</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/Register" component={Register} />
                        <Route path="/Login" component={Login} />
                        <Route path="/forgot" component={forgot} />
                        <Route path="/welcome" component={welcome}/>
                        <Route path="/emailsent" component={emailSent}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;