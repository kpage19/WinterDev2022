import React from 'react';
import {auth, provider} from '../firebase-config';
import {signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/profile");
    });
  };

  return (
    <div className="loginPage">
      <div>
        <h1>Study Buddies</h1>
        <h2>Insert some tagline or something.</h2>
      </div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login;