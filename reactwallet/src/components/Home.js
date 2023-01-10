import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import investImg from "../assets/invest.png"
import "../index.css"
import "./Home.css"
import Nav from "./Nav"
export default class HomeCom extends React.Component{

    state = {
        cryptos: []
    }

    componentDidMount(){
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&price_change_percentage=24hs"
        axios.get(url)
        .then(res => {
            this.setState({
                cryptos: res.data
            })
            console.log(res.data)
        })
    }

    render(){
        return (
            <div className="home">
                <Nav/>
                <div className="left">
                    <div className="balance-card">
                        <h2>Total Balance: $65.000(USD)</h2>
                        <div className="button-list">
                            <Link to="/"><button className="balance-action">Deposit</button></Link>
                            <Link to="/"><button className="balance-action">Subtract</button></Link>
                            <Link to="/"><button className="balance-action">Convert</button></Link>
                        </div>
                        <Link to="/"><button className="invert-button">Invest your money and earn up to 20% APY!</button></Link>
                    </div>
                    <div className="last-changes-card">
                        <h2 className="last-changes-title">Last changes in 24hs</h2>
                        <table className="cryptos">
                    
                            {this.state.cryptos.map(crypto => {
                                return(
                                    <tr className="crypto">
                                        <div className="crypto-left">    
                                            <th><img className="crypto-img" src={crypto.image} alt="error" /></th>
                                            <th className="crypto-symbol">{crypto.symbol}</th>
                                            <th className="crypto-name">{crypto.id}</th>
                                        </div>
                                        <div className="crypto-right">
                                            <th className="crypto-price">${crypto.current_price}</th>
                                            <th className="crypto-24hs">{crypto.price_change_percentage_24h}(%)</th>
                                        </div>
                                    </tr>
                                )
                            })} 
                        </table>
                        
                        <button className="last-changes-button">View All</button>
                    </div>
                </div>
    
                <div className="right">
                    <div className="invest-card">
                        <h2 className="invest-title">A new way to invest!</h2>
                        <img  className="invest-img" src={investImg} alt="error img" />
                        <p className="invest-info">Find here, new alternatives to the already old and well-known ways of investing your money, either in fiat or cryptocurrencies
                        with returns of up to 10% APY effortlessly and with little risk.</p>
                        <div className="invest-buttons">
                            <Link to="/"><button className="invest-type"><i className='bx bxs-bar-chart-alt-2 invest-but-logo'></i>Simple Earn</button></Link>
                            <Link to="/"><button className="invest-type"><i className='bx bx-refresh invest-but-logo'></i>Automatic Investment</button></Link>
                            <Link to="/"><button className="invest-type"><i className='bx bx-wallet invest-but-logo'></i>Flexible Savings</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}