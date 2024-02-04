import React, { useState } from "react";
import classes from "./registration.module.css"
import Banner from "./components/Banner";
import { useNavigate } from "react-router-dom";


function SignIn() {
    // monitor values, later they will be used in backend
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register', {replace : true});
    };

    const Login = (event) => {
      event.preventDefault();
      // replace password and username with user input
      // you can use password '5CHhV35U@4tVDj2' and username 'xxeniashestakova' for testing
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            password: password,
            username: username
        })};

    var responseStatus = 0;
    fetch('http://127.0.0.1:8000/planner/api/v1/token/login', requestOptions)
            .then(response => {
                responseStatus = response.status;
                return response.json()
            })
            .then(data => {
                if (responseStatus >= 200 && responseStatus <= 299) {
                    // login went fine, we need to acquire token and proceed to main
                    // token is acquired, we need to get user id now
                    const requestOptions = {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' }};

                    fetch('http://127.0.0.1:8000/planner/api/user_id_map/list', requestOptions)
                    .then(response => {
                        console.log('here');
                        return response.json();
                    })
                    .then(user_data => {
                        console.log(user_data);
                        user_data = user_data['get'];
                        var id = -1;
                        for (const num in user_data) {
                            var item = user_data[num];
                            console.log(item);
                            if (item['username'] == username) {
                                id = item['id'];
                            }
                        }
                        console.log(id);

                        console.log(data['auth_token']);
                        navigate('/main', {state: {token: data['auth_token'], username: username, id: id}, replace : true});
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

    };

    return(
      <div className={classes.signIn}>
        <Banner/>
        <div className={classes.text1}>Sign In</div>
        <form className={classes.form}>

            <p>Username</p>
            <input placeholder=' Username'
             type='text'
             onChange={e => setUsername(e.target.value)}></input>
            <p>Password</p>
            <input placeholder=' Password'
             type='text'
             onChange={e => setPassword(e.target.value)}></input>

            <button onClick={Login}>Sign In</button>

        </form>
        <div className={classes.text2}>OR</div>
        <form className={classes.form}>
            <button onClick={navigateRegister}>Sign Up</button>
        </form>

      </div>
    );

  }

  export default SignIn;
