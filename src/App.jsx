//import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer></Footer>
    </div>
    
  );
};

export default App;
