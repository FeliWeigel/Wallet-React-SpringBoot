
export default function Cryptos({crypto}){
    return(
        <tr className="crypto">
            <div className="crypto-left">    
                <th><img className="crypto-img" src={crypto.image} alt="error" /></th>
                <th className="crypto-symbol">{crypto.symbol}</th>
                <th className="crypto-name">{crypto.id}</th>
            </div>
            <div className="crypto-right">
                <th className="crypto-price">$ {crypto.current_price}</th> 
                    {crypto.price_change_percentage_24h > 0 ? 
                <th className="crypto-24hs green"><i class="ri-arrow-right-up-line arrow-logo green"></i>{crypto.price_change_percentage_24h}<span>(%)</span></th>
                    : <th className="crypto-24hs red"><i class="ri-arrow-left-down-line arrow-logo red"></i>{crypto.price_change_percentage_24h}<span>(%)</span></th>}
            </div>
        </tr>        
    )
}