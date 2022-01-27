import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";


import Header from './Component/Home/Shared/Header/Header';
import Navber from './Component/Home/Shared/Navber/Navber';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';

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
       
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
