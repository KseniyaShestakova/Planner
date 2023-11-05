import React from "react";
import classes from './Style.module.css'
import { useNavigate } from "react-router-dom";

function Share(props) {
    const navigate = useNavigate();
    const navigateSt = () => {
        console.log(props);
        navigate('/stat', {state: {goal: props.goal}});
    };

    return(
        <div>
        <div className={classes.label}>
            {props.label}
        </div>
        <form>
            <input placeholder=' Username' type='text'></input>
            <button onClick={navigateSt}>{props.button}</button>
        </form>
        </div>

    );
}

export default Share;