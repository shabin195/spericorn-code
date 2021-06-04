import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
                <h1>Profile</h1>
                <div>
                    <div>
                        <label>User Name : {this.state.username}</label>
                    </div>
                    <div>
                        <label>Phone No : {this.state.phone}</label>
                    </div>
                    <div>
                        <label>Email : {this.state.email}</label>
                    </div>
                    <br />
                    <br />
                    <div>                        
                        <button onClick={()=>this.logOut()}>Logout</button>                                               
                    </div>
                </div>
            </div>
        )
    }
}