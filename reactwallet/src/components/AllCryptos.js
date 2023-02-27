import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
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
            <div className="cryptos">
                <Link to="/"><i class='bx bx-left-arrow-circle back-logo'></i></Link>
                <div>
                    <h2>Crypto Table</h2>
                    <table className="crypto-table">
                            <thead className="crypto-cols">
                                <tr>
                                    <div className="cols-left">
                                        <th className="col-logo">Logo</th>
                                        <th className="col-symbol">Symbol</th>
                                        <th className="col-name">Name</th>
                                    </div>
                                    <div className="cols-right">
                                        <th className="col-price">Price</th>                               
                                        <th className="col-24hs">Change 24hs</th>
                                        <th className="col-mcap">Cap Rank</th>
                                    </div>
                                </tr>
                            </thead>
                        
                            <tbody className="crypto-stats">
                                {this.state.cryptos.map(crypto => {
                                    return (
                                        <tr className="allcrypto">
                                            <div className="allcrypto-left">    
                                                <th><img className="allcrypto-img" src={crypto.image} alt="error" /></th>
                                                <th className="allcrypto-symbol">{crypto.symbol}</th>
                                                <th className="allcrypto-name">{crypto.id}</th>
                                            </div>
                                            <div className="allcrypto-right">
                                                <th className="allcrypto-price">$ {crypto.current_price}</th> 
                                                    {crypto.price_change_percentage_24h > 0 ? 
                                                <th className="crypto-24hs green"><i className="ri-arrow-right-up-line arrow-logo green"></i>{crypto.price_change_percentage_24h}<span>(%)</span></th>
                                                    : <th className="crypto-24hs red"><i className="ri-arrow-left-down-line arrow-logo red"></i>{crypto.price_change_percentage_24h}<span>(%)</span></th>}
                                                <th className="allcrypto-rank">{crypto.market_cap_rank}</th>
                                            </div>
                                        </tr>        
                                        
                                    )
                                })}
                            </tbody>
                        
                    </table>
                </div>
            </div>
        )
    }
}