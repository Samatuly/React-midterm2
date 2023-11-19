import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignIn/SignUp";
import Chats from "./Sidebar/Chats";
import Chat from "./Home/ChatBefore";
import './App.css';
import ChatBefore from "./Home/ChatBefore";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("isSignedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  return ( 
    <BrowserRouter>
      <div className="app-wrapper">
        {isSignedIn ? <Chats /> : null}
        <Routes>
          <Route path="/" element={<SignIn onSignIn={() => setIsSignedIn(true)} />}/>
          <Route path="/signin" element={<SignIn onSignIn={() => setIsSignedIn(true)} />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/chat-before" element={<ChatBefore/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
