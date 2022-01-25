import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Component/Home/Shared/Header/Header';
import Navber from './Component/Home/Shared/Navber/Navber';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Navber></Navber>
    </div>
  );
}

export default App;
