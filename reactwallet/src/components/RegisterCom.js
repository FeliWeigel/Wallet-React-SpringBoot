import "./Register.css"
import "../index.css"
import logo from "../assets/logo.png"
import React from "react"
import { apiUrl } from "../services/urlBase"
import axios from "axios"
import { Link } from "react-router-dom"

export default class RegisterComponent extends React.Component{

    state = {
        form: {
            "name": "",
            "lastname": "",
            "age": "",
            "email": "",
            "password": ""
        },
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

    handleButton = async () => {
        const url = apiUrl + "users/register";

        await axios.post(url, this.state.form)
        .then(res => {
            if(res.data === "ok"){
                this.setState({
                    error: false,
                    errorMsg: "You have successfully registered!"
                })
            }else {
                this.setState({
                    error: true,
                    errorMsg: "Invalid email or password"
                })
                return;
            }
        }).catch(error => {
            console.log(error)
            this.setState({
                error: true,
                errorMsg: "Invalid email or password"
            })
            return;
        })
    }


    render(){
        return(
            <div className="register container">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <img src={logo} alt="error" className="register-logo" />

                    <div>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} className="register-input input-name"/>
                        <input type="text" name="lastname" placeholder="Lastname" onChange={this.handleChange} className="register-input input-lastname"/>
                        <input type="text" name="age" placeholder="Age" onChange={this.handleChange} className="register-input input-age"/>
                    </div>
    
                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange} className="register-input input-email"/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="register-input input-password"/>
                    <button onClick={this.handleButton} className="register-button">Register</button>
                    
                    {this.state.error === true ? <span className="invalid-alert alert"><i className='bx bx-error-circle classname invalid-logo'></i>{this.state.errorMsg}</span>: null} 
                    {
                        this.state.errorMsg === "You have successfully registered!" ? 
                        <div className="valid-cont">
                            <span className="valid-alert alert"><i className='bx bx-error-circle classname invalid-logo'></i>{this.state.errorMsg}</span>
                            <Link to="/login"><button className="tologin-button">Log in here <i className='bx bx-chevrons-right arrow-logo'></i></button></Link>
                        </div>  
                        : null
                    }
                </form>
            </div>
        )
    }
    
}