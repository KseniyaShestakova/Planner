import React from "react";
import classes from "./registration.module.css"
import {
    BrowserRouter as Router,
    useNavigate,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Planner from "./components/PlannerIcon";
import { useState } from "react";


function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const navigate = useNavigate();

    const [status, setStatus] = useState('No password was entered');
    const [color, setColor] = useState('grey')

    const navigateMain = () => {
        if (password == repeat) {
            navigate('/main');
        } else {
            navigate('/register')
          }
        
    };

    const reenterPassword = (e) => {
        setRepeat(e.target.value);
        console.log(e.target.value);
        console.log(password);
        console.log(repeat);
        if (e.target.value == password) {
            setStatus('Passwords coincide!');
            setColor('green');
        } else {
            setStatus('Passwords are different!');
            setColor('red');
        }
    }

    const enterPassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
        console.log(password);
        console.log(repeat);
        if (e.target.value == repeat) {
            setStatus('Passwords coincide!');
            setColor('green');
        } else {
            setStatus('Passwords are different!');
            setColor('red');
        }
    }

    return(
        <div className={classes.signUp}>

            <form className={classes.signUpForm}>
                <div className={classes.space}></div>
                
                <p>First name</p>
                <input placeholder=' First Name' 
                type='text'
                onChange={e => setFirstName(e.target.value)}></input>

                <p>Second Name</p>
                <input placeholder=' Second Name'
                 type='text'
                 onChange={e => setSecondName(e.target.value)}></input>

                <p>Email</p>
                <input placeholder=' Email'
                 type='text'
                 onChange={e => setEmail(e.target.value)}></input>

                <p>Password</p>
                <input placeholder=' Password'
                 type='text'
                 onChange={enterPassword}></input>

                <p>Re enter password</p>
                <input placeholder=' Password'
                 type='text'
                 onChange={reenterPassword}></input>

                <button onClick={navigateMain}>Continue</button>
                <div style={{color: color}}>{status}</div>
                
                
            </form>
            <Planner></Planner>
        </div>
    );
}

export default SignUp;

