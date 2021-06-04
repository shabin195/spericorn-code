import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postData } from '../services';
import { loginValidateSave } from './validations'
import './style.css'
export default class Login extends Component {    
    componentDidMount() {
        let userData = localStorage.getItem("userData")
        if(userData)
            window.location.href = '/profile'
    }    
    save() {
        var isValid = loginValidateSave()
        if (isValid === true) {
            const userInput = {
                "email": document.getElementById("txtEmail").value,
                "password": document.getElementById("txtPassword").value
            }
            postData(userInput, "login").then((data) => {                
                if (data.data.success === true) {                   
                    localStorage.setItem("userData", data.data.data.token);                                       
                    window.location.href = '/profile'
                }
                else {
                    alert(data.data.message)
                }
            })
        }
    }
    render() {
        return (
            <div className="mainDiv">
                <h1>Login</h1>
                <div>
                    <div>
                        <p>Email:</p>
                        <input type="text" className="formField" tabindex='1' autoComplete="off" name="txtEmail" id="txtEmail" placeholder="Email" autoFocus />
                    </div>
                    <div>
                        <p>Password:</p>
                        <input type="password" className="formField" tabindex='2' autoComplete="off" name="txtPassword" id="txtPassword" placeholder="Password" />
                    </div>
                    <br />
                    <br />
                    <div>
                        <button className="leftBtn" onClick={() => this.save()}>Login</button>
                        <Link to={{ pathname: "/registration" }} >
                            <button className="rightBtn">Go to Registration</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}