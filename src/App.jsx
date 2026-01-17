
import React from 'react'
import Navbar from './components/Layout/Topbar'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App