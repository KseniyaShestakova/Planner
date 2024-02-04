import React from "react";
import classes from "./NameSurname.module.css"
import {
    BrowserRouter as Router,
    useNavigate,
    Link
  } from "react-router-dom";
  import { useLocation } from "react-router-dom";

const NameSurname = () => {
    const location = useLocation();
    var state = location.state;
    var username = state.username;

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/', {replace : true});
    };
    return(
        <div className={classes.nameSurname}>
            <div className={classes.textDiv}>
                {username}
            </div>
            <button className={classes.logOutButton} onClick={navigateHome}>
                Log Out
            </button>
        </div>
    )
}

export default NameSurname;