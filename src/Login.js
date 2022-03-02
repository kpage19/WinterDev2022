import React, {useState} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './App.css';
import Profilepage from './Profilepage';
import App from './App';



export default function Login() {

    const clientId = "754018186930-p4a5rumvi4su0bdsv6old3rsb5pb6g3v.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [ showLogoutButton, setShowLogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
      console.log('Login Success',res.profileObj);
      setShowLoginButton(false);
      setShowLogoutButton(true);
    }

    const onFailureSuccess=(res) => {
    console.log('Login Failed:',res);
    }

    const onSignoutSuccess = () => {
    alert("You have been signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
    }

  return (
    <div className='signupBig'>

        {showLoginButton ?
        <GoogleLogin
            clientId={clientId}
            render={renderProps => (
            <button id="signupBig" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign up</button>
            )}
            buttonText="Login"
            onSuccess={onLoginSuccess} 
            onFailure={onFailureSuccess}
            cookiePolicy={'single_host_origin'}
        /> :null
        }
      
        {showLogoutButton ?
        <GoogleLogout
                clientId={clientId}
                render={renderProps => (
                  <button id="logout" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                  )}
                buttonText="Logout"
                onLogoutSuccess={onSignoutSuccess}
                
            onFailure={onFailureSuccess}
        /> :null
        }


    </div>
  )
}