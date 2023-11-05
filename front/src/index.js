import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from  './registration/SignIn.js'
import SignUp from './registration/SignUp';
import Stat from './statistics/Stat';
import { useState } from 'react';

function Global() {
  return(<div>
    <Router>
    <div>
      <Routes>
        <Route path="/main" element={<App />}></Route>
        <Route path="/stat" element ={<Stat />}></Route>
        <Route path="/" element={<SignIn />}></Route>   
        <Route path="/register" element={<SignUp />}></Route>   
      </Routes>
    </div>
  </Router>
    
  </div>);
}

function Display(props) {
  return(<div>
    {props.title}
    </div>
    );
}

function Exp() {
  const [st, setSt] = useState(1)
  return(
    <div>
    <Router>
    <div>
      <Routes>
        <Route path="/main" element={<Display title={st}/>}></Route>
         
      </Routes>
    </div>
  </Router>
    
  </div>

  );

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Global></Global>
);