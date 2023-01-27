import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Desing from './components/Desing';
import Developer from './components/Developer';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/desing" element={<Desing />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
