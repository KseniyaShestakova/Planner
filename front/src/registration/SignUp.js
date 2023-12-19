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

    const [token, setToken] = useState('');

    const register = (event) => {
        event.preventDefault();
        if (password == repeat) {
            console.log(password);
            console.log(email);
            var username = firstName.concat('_', secondName);
            console.log(username);
            
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    'email': email,
                    'password': password,
                    'username': username
                })};
            
            var responseStatus = 0;
            fetch('http://127.0.0.1:8000/planner/api/v1/users/', requestOptions)
                    .then(response => {
                        responseStatus = response.status;
                        console.log(responseStatus);
                        if (responseStatus < 200 || responseStatus > 299) {
                            console.log('invalid response!');
                            navigate('/register');
                        }
                        return response.json()
                    })
                    .then(data => {
                        // if the registration is succesfull, one will be redirected to the main page
                        // but bfore this we should make a new row in a UserIDMap table
                        // and acquire some token
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ 
                                password: password,
                                username: username
                            })
                        };
                        // try to login with same password and token
                        var responseStatus = 0;
                        fetch('http://127.0.0.1:8000/planner/api/v1/token/login', requestOptions)
                            .then(response => {
                                responseStatus = response.status;
                                return response.json()
                            })
                        .then(data => {
                            if (responseStatus >= 200 && responseStatus <= 299) {
                                // login went fine, we need to acquire token and proceed to main
                                // token is acquired, we need to set user id now


                                // make authorisation header
                                var auth = 'Token';
                                setToken(data['auth_token']);
                                auth = auth.concat(' ', data['auth_token']);
                                var outer_token = data['auth_token'];

                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Authorization': auth,
                                    'Content-Type': 'application/json' },
                                    body: JSON.stringify({ 
                                        'username': username
                                    })};
                                // send post request to make a new row
                                fetch('http://127.0.0.1:8000/planner/api/user_id_map/list', requestOptions)
                                .then(response => {
                                    // response is received, we can proceed to the main page
                                    return response.json();
                                })
                                .then(data => {
            
                                    console.log(data['post']);
                                    var id = data['post']['id'];
                                    navigate('/main', {state: {token: outer_token, username: username, id: id}, replace : true});
                                });
            
                                // now in data we have info about all users, but we need to extract correct user id somehow
                            } else {
                                console.log('invalid response!');
                                navigate('/');
                            }
                            
                        })
                        .catch(error => {
                            console.log(error);
                            navigate('/');
                        });
                    
                })
                .catch(error => {
                    console.log(error);
                    navigate('/register');
                });
           
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

                <button onClick={register}>Continue</button>
                <div style={{color: color}}>{status}</div>
                
                
            </form>
            <Planner></Planner>
        </div>
    );
}

export default SignUp;

