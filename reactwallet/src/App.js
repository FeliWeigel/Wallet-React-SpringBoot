import Register from "./routes/Register";
import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import CryptoTable from "./routes/CryptoTable";
import Deposit from "./routes/Deposit";
import Card from "./routes/Card";
import Convert from "./routes/Convert";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/deposit" element={<Deposit/>}/>
        <Route exact path="/card" element={<Card/>}/>
        <Route exact path="/cryptos/all" element={<CryptoTable/>}/>
        <Route exact path="/convert" element={<Convert/>}/>
      </Routes>
    </div>
  );
}

export default App;
