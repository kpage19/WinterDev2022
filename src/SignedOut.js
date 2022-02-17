import React from "react";
import { Link } from "react-router-dom"; 

const SignedOut = () => {
    return (
        <div className="App">
          <iframe id="topbar"></iframe>
          <h1 id="StudyBuddies">Study Buddies</h1>
          <button id="login">Login</button>
          <button id="signupSmall">Sign up</button>
          <p id="center">We need some kind of tagline here like
              Where students can find study buddies</p>
            
          {/*<button id="signupBig">Sign up</button> */}
          <br /> 
      
        </div>
      );
}

export default SignedOut;