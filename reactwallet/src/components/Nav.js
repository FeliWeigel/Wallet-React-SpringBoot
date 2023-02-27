import { Link } from "react-router-dom"
import "../index.css"
import "./Nav.css"

export default function Nav() {

    const logOut = () => {
        localStorage.removeItem("auth")
    }

    return(
        <nav className="nav">
            <div className="user-info">
                <span className="user-logo">FW</span>
                <h3 className="user-name">Felipe Weigel</h3>
            </div>
            <ul>
                <Link to="/"><li className="list-link"><i className='bx link-logo bx-history'></i>History</li></Link>
                <Link to="/"><li className="list-link"><i className='bx link-logo bxs-bar-chart-alt-2'></i>Investments</li></Link>
                <Link to="/convert"><li className="list-link"><i className='bx link-logo bx-transfer'></i>Convert</li></Link>
            </ul>
            <ul>
                <li className="list-link"><i className='bx link-logo bxs-cog'></i>Settings</li>
                <li className="list-link"><i className='bx link-logo bx-help-circle'></i>Help</li>
                <li><button className="list-link" onClick={logOut}><i className='bx link-logo bx-log-out-circle'></i>Log Out</button></li>
            </ul>
        </nav>
    )
}