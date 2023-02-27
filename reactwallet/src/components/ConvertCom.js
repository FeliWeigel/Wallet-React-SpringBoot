import "../index.css"
import "./Convert.css"
import Nav from "./Nav"
import React from "react"
import axios from "axios"

export default class ConvertCom extends React.Component{
    
    state = {
        cryptos: [],
        firstCrypto: {
            symbol: "",
            logo: ""
        },
        secondCrypto: {
            symbol: "",
            logo: ""
        },
        listState: false
    }

    openList = () => {
        this.setState({
            listState: true
        })
    }

    quitList = () => {
        this.setState({
            listState: false
        })
    }
    
    componentDidMount(){
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false&price_change_percentage=24hs"
        axios.get(url)
        .then(res => {
            this.setState({
                cryptos: res.data,
                firstCrypto: {
                    symbol: res.data[0].symbol,
                    logo: res.data[0].image
                },
                secondCrypto: {
                    symbol: res.data[1].symbol,
                    logo: res.data[1].image
                }
            })
            console.log(this.state.firstCrypto)
            console.log(this.state.secondCrypto)
        })

    }

    getFirstCurrency = (currency) => {
        axios.get("https://api.coingecko.com/api/v3/coins/" + currency.name)
        .then(res => {
            this.setState({
                firstCrypto: {
                    symbol: res.data[0],
                    logo: res.data[0]
                }
            })
        }) 
    }


    render(){
        return (
            <div className="convert-main">
                <Nav/>
                {this.state.listState === false ? (
                    <div className="convert">
                    
                        <h2>Exchange from one currency to another easily</h2>
        
                        <div className="convert-tool">
                            <div className="converter">
                                <div className="currency">
                                    <button onClick={this.openList}><i className='bx bx-chevrons-down currency-i'></i></button>
                                    <img src={this.state.firstCrypto.logo} className="currency-logo" alt="error" />
                                    <h4 className="currency-symbol">BTC</h4>
                                </div>
            
                                <i className='bx link-logo bx-transfer convert-logo'></i>
            
                                <div className="currency">
                                    <button onClick={this.openList}><i className='bx bx-chevrons-down currency-i'></i></button>
                                    <img src={this.state.secondCrypto.logo} className="currency-logo" alt="error" />
                                    <h4 className="currency-symbol">{this.state.secondCrypto.symbol}</h4>
                                </div>
                            </div>
                            <div className="convert-amount">
                                <h4 className="amount">Amount: $ </h4>
                                <input type="text" name="amount" placeholder="0" className="amount-input" />
                            </div>
                        </div>
                    </div>
                    ) : 
                    (<div className="convert-list">
                        <button onClick={this.quitList}><i className='bx bx-x-circle list-quit'></i></button>
                        <ul>
                            {this.state.cryptos.map(crypto => {
                                return(
                                    <li onClick={this.getFirstCurrency(crypto)} className="list-item">
                                        <img src={crypto.image} alt="error" />
                                        <h4>{crypto.name}</h4>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>)}  
            </div>
        )
    }
}