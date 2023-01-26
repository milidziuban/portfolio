import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Landing/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
