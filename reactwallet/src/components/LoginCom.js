import "../index.css"
import "./Register.css"
import "./Login.css"
import logo from "../assets/logo.png"
import React from "react"
import { apiUrl } from "../services/urlBase"
import axios from "axios"
import { Navigate } from "react-router-dom"


export default class LoginCom extends React.Component{

    state = {
        form: {
            "email": "",
            "password": ""
        },
        isLogged: false,
        error: false,
        errorMsg: ""
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

        console.log(e.target.value)
    }

    handleButton = async ({credentials}) => {
        const url = apiUrl + "users/login";
        credentials = this.state.form
        await axios.post(url, credentials)
        .then(res => {
            if(res.data !== "login fail"){
                let token = res.data;
                localStorage.setItem("auth", JSON.stringify(token))
                this.setState({
                    isLogged: true,
                    error: false,
                    errorMsg: "You have successfully logged!"
                })
                console.log(res)
            }else{
                this.setState({
                    error: true,
                    errorMsg: "Invalid Email or Password"
                })
                console.log(res)
                return;
            }
        })
    }

    render(){
        return(
            <div className="register container">

                <form onSubmit={this.handleSubmit} className="register-form">
                    <img src={logo} alt="error" className="register-logo" />

                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange} className="login-input input-email"/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="login-input input-password"/>
                    <button onClick={this.handleButton} className="register-button">Log in</button>
                    {this.state.error === true ? <span className="invalid-alert alert"><i className='bx bx-error-circle classname invalid-logo'></i>{this.state.errorMsg}</span> : null}
                    {this.state.isLogged === true ? <Navigate to="/"/> : false}
                </form>
            </div>
        )
    }
    
}