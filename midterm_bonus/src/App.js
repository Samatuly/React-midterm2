import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignIn/SignUp";
import Chat from "./Home/Chat";
import './App.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("isSignedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn onSignIn={() => setIsSignedIn(true)} />}/>
        <Route path="/signin" element={<SignIn onSignIn={() => setIsSignedIn(true)} />}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
