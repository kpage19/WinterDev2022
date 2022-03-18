import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config"
import { signOut } from 'firebase/auth';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };
  
  return (
    <Router>
      <nav>
        {!isAuth ? (
          <div></div>
        ) : (
          <>
            <Link to="/home"> Home </Link>
            <Link to="/profile"> My Profile </Link>
            <button onClick={signUserOut}> Log Out </button>
          </>
        )}
      </nav>
      
      <Routes>
        <Route path="/" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/profile" element={<Profile isAuth={isAuth}/>} />
        <Route path="/home" element={<Home isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
