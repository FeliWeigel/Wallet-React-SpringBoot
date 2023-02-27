import "../index.css"
import "./CardRegister.css"
import Nav from "./Nav"
import cardLogo from "../assets/logo.png"
import React from "react"
import { apiUrl } from "../services/urlBase"
import axios from "axios"
export default class CardRegister extends React.Component{
    
    state = {
        form:{
            "number": "",
            "date": "",
            "code": "",
            "holder": ""
        },
        error: false,
        errorMsg: ""
    }

    handleSumbit = e => {
        e.preventDefault();
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

    handleButton = () => {
        const url = apiUrl + "cards/register";
        axios.post(url, this.state.form)
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
        .catch(error => {
            this.setState({
                error: true,
                errorMsg: "Error not found"
            })
            console.log(error)
        })
    }
    
    render(){
        return(
            <div className="card-register">
                <Nav/>
                <div className="card">
                    <h2>Enter the details of the card associated with your bank account <i className='bx bxs-bank h2-logo'></i></h2>
                    <form onSubmit={this.handleSumbit} className="card-form">
                        <img src={cardLogo} className="card-logo" alt="error" />
                        <input type="text" name="number" placeholder="NUMBER" onChange={this.handleChange} className="card-input input-number" />
                        <div>
                            <input type="date" name="dueDate"  onChange={this.handleChange} className="card-input input-date" />
                            <input type="text" name="segurityCode" placeholder="SEG. CODE" onChange={this.handleChange} className="card-input input-segcode" />
                        </div>
                        <input type="text" name="holder" placeholder="HOLDER NAME" onChange={this.handleChange} className="card-input input-holder" />
    
                    </form>
                    <button onClick={this.handleButton} className="card-button">Use Card <i className='bx bx-credit-card card-btn-logo'></i></button>
                </div>
            </div>
        )
    }
}