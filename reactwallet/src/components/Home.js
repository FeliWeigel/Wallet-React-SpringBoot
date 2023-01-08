import { Link } from "react-router-dom"
import "../index.css"
import "./Home.css"
import Nav from "./Nav"
export default function HomeCom(){
    return (
        <div className="home">
            <Nav/>
            <div className="balance-card">
                <h2>Total Balance: $65.000</h2>
                <div className="button-list">
                    <Link to="/"><button className="balance-action">Deposit</button></Link>
                    <Link to="/"><button className="balance-action">Subtract</button></Link>
                    <Link to="/"><button className="balance-action">Convert</button></Link>
                </div>
                <Link to="/"><button className="invert-button">Invest your money and earn up to 20% APY!</button></Link>
            </div>
        </div>
    )
}