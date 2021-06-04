import React, { Component } from 'react';
import { getData } from '../services';
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: localStorage.getItem('userData'),
            username: '',
            phone: '',
            email: ''
        };
    }
    componentDidMount() {
        if(!localStorage.getItem('userData')){
            window.location.href = '/'
        }
        else{
            getData(this.state.userData, 'user').then((data) => {           
                if (data.success === true) {                
                    this.setState({
                        username: data.data.userData.username,
                        phone: data.data.userData.phone,
                        email: data.data.userData.email,
                    })
                }           
            })
        }        
    } 
    logOut(){
        localStorage.removeItem("userData");
        window.location.href = '/'
    }
    render() {
        return (
            <div className="mainDiv">
                <h1>Profile</h1>
                <div>
                    <div>
                        <label><b>User Name :</b> {this.state.username}</label>
                    </div>
                    <div>
                        <label><b>Phone No :</b> {this.state.phone}</label>
                    </div>
                    <div>
                        <label><b>Email :</b> {this.state.email}</label>
                    </div>
                    <br />
                    <br />
                    <div>                        
                        <button className="leftBtn" onClick={()=>this.logOut()}>Logout</button>                                               
                    </div>
                </div>
            </div>
        )
    }
}