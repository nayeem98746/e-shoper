import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";

import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Cart from './Component/Cart/Cart';
import Success from './Component/Success/Success';
import AuthProvider from './context/authProvider';
import PrivateRoute from './Component/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Contact from './Component/Contact/Contact';
import Review from './Component/Dashboard/User/Review/Review';
import AddAdmin from './Component/Dashboard/Admin/AddAdmin/AddAdmin';
import AddProduct from './Component/Dashboard/AddProduct/AddProduct';
import AdminRoute from './Component/Login/AdminRoute/AdminRoute';
import AllProducts from './Component/AllProducts/AllProducts';

function App() {
  return (
    <AuthProvider>
     <Router>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />       
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/success" element={<PrivateRoute> <Success></Success> </PrivateRoute>} />       
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>} />       
        <Route path="/allproducts" element={<AllProducts></AllProducts>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}> 

          <Route path={`/dashboard`} element={<Review></Review>} />
          <Route path={`/dashboard/review`} element={<Review></Review>} />
          <Route path={`/dashboard/addadmin`} element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>} />
          <Route path={`/dashboard/addproduct`} element={<AdminRoute><AddProduct></AddProduct></AdminRoute>} />

        </Route>
      </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
