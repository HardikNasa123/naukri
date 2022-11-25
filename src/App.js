import logo from './logo.svg';
import React from 'react';

import './App.css';
import Jobposting from "./components/Jobposting";
import Login_code from "./components/Login_code";
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => 
{
  
  return (

<BrowserRouter>
<Navbar/>

<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/login" element={<Login_code/>}/>
<Route path="/jobposts" element={<Jobposting/>}/>
</Routes>
</BrowserRouter>

   
    
  )
}

export default App;



