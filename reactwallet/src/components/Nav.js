import "../index.css"
import "./Nav.css"

export default function Nav() {
    return(
        <nav className="nav">
            <div className="user-info">
                <span className="user-logo">FW</span>
                <h3 className="user-name">Felipe Weigel</h3>
            </div>
            <ul>
                <li className="list-link"><i className='bx link-logo bx-history'></i>History</li>
                <li className="list-link"><i className='bx link-logo bxs-bar-chart-alt-2'></i>Investments</li>
                <li className="list-link"><i className='bx link-logo bx-transfer'></i>Converter</li>
            </ul>
            <ul>
                <li className="list-link"><i className='bx link-logo bxs-cog'></i>Settings</li>
                <li className="list-link"><i className='bx link-logo bx-help-circle'></i>Help</li>
                <li className="list-link"><i className='bx link-logo bx-log-out-circle'></i>Log Out</li>
            </ul>
        </nav>
    )
}