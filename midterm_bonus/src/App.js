import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignIn/SignUp";
import './App.css';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn onSignIn={() => setIsSignedIn(true)} />}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
