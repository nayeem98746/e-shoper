import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";

import Navber from './Component/Home/Shared/Navber/Navber';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Cart from './Component/Cart/Cart';
import Checkout from './Component/Checkout/Checkout';
import AuthProvider from './context/authProvider';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  return (
    <AuthProvider>
     <Router>
       <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />       
        <Route path="/cart" element={<Cart></Cart>} />       
        <Route path="/checkout" element={<PrivateRoute> <Checkout></Checkout> </PrivateRoute>} />       
       
      </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
