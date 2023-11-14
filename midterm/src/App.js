import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import HomeDetail from "./Home/HomeDetail";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HomeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
