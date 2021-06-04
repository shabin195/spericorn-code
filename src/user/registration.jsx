import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postData } from '../services';
import { validateSave } from './validations'
export default class Registration extends Component {    
    componentDidMount() {
        let userData = localStorage.getItem("userData")
        if(userData)
            window.location.href = '/profile'
    }   
    save() {
        var isValid = validateSave()
        if (isValid === true) {
            const userInput = {
                "email": document.getElementById("txtEmail").value,
                "password": document.getElementById("txtPassword").value,
                "username": document.getElementById("txtUserName").value,
                "phone": document.getElementById("txtPhoneNo").value
            }
            postData(userInput, "register").then((data) => {                
                if (data.data.success === true) {                    
                    localStorage.setItem("userData", data.data.data.token);
                    alert("Thanks for registering with us.")
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
            <div>
                <h1>Registration</h1>
                <div>
                    <div>
                        <label>User Name<sup>*</sup></label>
                        <input type="text" tabindex='1' id="txtUserName" name="txtUserName" autoComplete="off" placeholder="User Name" autoFocus />
                    </div>
                    <div>
                        <label>Phone No<sup>*</sup></label>
                        <input type="text" tabindex='2' maxLength="10" id="txtPhoneNo" autoComplete="off" name="txtPhoneNo" placeholder="Phone No" />
                    </div>
                    <div>
                        <label>Email<sup>*</sup></label>
                        <input type="text" tabindex='3' id="txtEmail" name="txtEmail" autoComplete="off" placeholder="Email" />
                    </div>
                    <div>
                        <label>Password<sup>*</sup></label>
                        <input type="password" tabindex='4' minLength="8" id="txtPassword" autoComplete="off" name="txtPassword" placeholder="Password" />
                    </div>
                    <div>
                        <label>Confirm Password<sup>*</sup></label>
                        <input type="password" tabindex='4' id="txtConfirmPassword" autoComplete="off" name="txtonfirmPassword" placeholder="Password" />
                    </div>
                    <br />
                    <br />
                    <div>
                        <button onClick={() => this.save()}>Register</button>                        
                        <Link to={{ pathname: "/" }} >
                            <button>Go to Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}