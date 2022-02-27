import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './Login';
import reportWebVitals from './reportWebVitals';
import Profilepage from './Profilepage';
import Homepage from './Homepage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



const Routing = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profilepage}/>
        <Route exact path="/homepage" component={Homepage}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
    <Homepage/>
    <Login/>
    
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
