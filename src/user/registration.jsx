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
    async validateEmail(){
        const userInput = {
            "email":document.getElementById("txtEmail").value
        }
        return new Promise((resolve) => {
            postData(userInput, "checkMail").then((data) => {                 
                if(data.data.success === false){                    
                    alert(data.data.message)
                    document.getElementById("txtEmail").focus();
                }                    
                resolve(data.data.success)
            })
        })
        
    }   
    async save() {
        var isValid = validateSave()    
        if (isValid === true) {
            var validateEmailId = await this.validateEmail();                 
            if(validateEmailId === true){
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
    }
    render() {
        return (
            <div className="mainDiv">
                <h1>Registration</h1>
                <div>
                    <div>
                        <label>User Name<sup className="mandatory">*</sup></label>
                        <input type="text" className="formField" tabindex='1' id="txtUserName" name="txtUserName" autoComplete="off" placeholder="User Name" autoFocus />
                    </div>
                    <div>
                        <label>Phone Number<sup className="mandatory">*</sup></label>
                        <input type="text" className="formField" tabindex='2' maxLength="10" id="txtPhoneNo" autoComplete="off" name="txtPhoneNo" placeholder="Phone Number" />
                    </div>
                    <div>
                        <label>Email<sup className="mandatory">*</sup></label>
                        <input type="text" className="formField" tabindex='3' id="txtEmail" name="txtEmail" autoComplete="off" placeholder="Email ID" />
                    </div>
                    <div>
                        <label>Password<sup className="mandatory">*</sup></label>
                        <input type="password" className="formField" tabindex='4' id="txtPassword" autoComplete="off" name="txtPassword" placeholder="Password" />
                    </div>
                    <div>
                        <label>Confirm Password<sup className="mandatory">*</sup></label>
                        <input type="password" className="formField" tabindex='4' id="txtConfirmPassword" autoComplete="off" name="txtonfirmPassword" placeholder="Confirm Password" />
                    </div>
                    <br />
                    <br />
                    <div>
                        <button className="leftBtn" onClick={() => this.save()}>Register</button>                        
                        <Link to={{ pathname: "/" }} >
                            <button className="rightBtn">Go to Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}