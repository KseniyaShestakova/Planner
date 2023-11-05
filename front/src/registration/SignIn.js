import React, { useState } from "react";
import classes from "./registration.module.css"
import Banner from "./components/Banner";
import { useNavigate } from "react-router-dom";


function SignIn() {
    // monitor values, later they will be used in backend
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register', {replace : true});
    };

    const navigateMain = () => {
        navigate('/main');
    };

    return(
      <div className={classes.signIn}>
        <Banner/>
        <div className={classes.text1}>Sign In</div>
        <form className={classes.form}>
            
            <p>Email</p>
            <input placeholder=' Email'
             type='text'
             onChange={e => setEmail(e.target.value)}></input>
            <p>Password</p>
            <input placeholder=' Password'
             type='text'
             onChange={e => setPassword(e.target.value)}></input>

            <button onClick={navigateMain}>Sign In</button>
            
        </form>
        <div className={classes.text2}>OR</div>
        <form className={classes.form}>
            <button onClick={navigateRegister}>Sign Up</button>
        </form>
        
      </div>
    );
    
  }

  export default SignIn;
