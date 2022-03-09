import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Profilepage from './Profilepage';
import App from './App';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";



const Routing = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profilepage}/>
        {/*<Route exact path="/homepage" component={App}/>*/}
        {/*<Redirect from="/homepage" to="/profile" />*/}
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
    <App/>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
