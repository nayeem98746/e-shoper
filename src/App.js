import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";


import Header from './Component/Home/Shared/Header/Header';
import Navber from './Component/Home/Shared/Navber/Navber';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
       
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
