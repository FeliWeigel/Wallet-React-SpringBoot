import Register from "./routes/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import CryptoTable from "./routes/CryptoTable";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/cryptos/all" element={<CryptoTable/>}/>
      </Routes>
    </div>
  );
}

export default App;
