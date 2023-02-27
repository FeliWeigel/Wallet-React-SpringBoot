import { Link } from "react-router-dom"
import "../index.css"
import "./DepositCom.css"
import Nav from "./Nav"

export default function DepositCom(){
    return(
        <div className="deposit">
            <Nav/>
            <div className="deposit-content">
                <h2>Deposit money and start earning!</h2>
                <div className="deposit-cards">
                    <Link to="/card"><button className="deposit-card"><i className='bx bx-credit-card dep-card-logo'></i>FIAT in bank account</button></Link>
                    <Link to="/"><button className="deposit-card"><i className='bx bxs-network-chart dep-card-logo'></i>Crypto through a Blockchain network</button></Link>
                    <Link to="/"><button className="deposit-card"><i className='bx bxs-user-account dep-card-logo'></i>Ask another React Wallet account</button></Link>
                </div>
            </div>
                
        </div>
    )
}