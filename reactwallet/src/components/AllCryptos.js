import axios from "axios";
import React from "react";
import Cryptos from "../elements/Cryptos";
import "../index.css"
import "./AllCryptos.css"
export default class AllCryptos extends React.Component {
    state={
        cryptos: []
    }
    componentDidMount(){
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24hs";
        axios.get(url)
        .then(res => {
            this.setState({
                cryptos: res.data
            })
        })
    }

    render(){
        return(
            <div className="cryptos container">
                
                <h2>Crypto Table</h2>

                <table className="crypto-table">
                    {this.state.cryptos.map(crypto => {
                        return (
                            <Cryptos crypto={crypto}/>
                        )
                    })}
                </table>
            </div>
        )
    }
}