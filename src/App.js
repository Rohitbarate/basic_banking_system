import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import CustomeersScreen from './components/CustomersScreen/CustomersScreen'
import { Routes, Route } from "react-router-dom";
import TransactionScreen from "./components/TransactionScreen/TransactionScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/customers' element={<CustomeersScreen/>}/>
        <Route path='/transactions' element={<TransactionScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
