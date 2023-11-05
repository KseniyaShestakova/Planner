import React from "react";
import { useState } from "react";
import classes from "./GoalItem.module.css"
import {Routes, Route, useNavigate} from "react-router-dom";


// props можно было назвать по-другому, в целом, это просто свойства
const GoalItem = (props) => {
  const navigate = useNavigate();

  const navigateStat = () => {
      console.log(props);
      navigate('/stat', {state: {goal: props.data.label}, replace : true});
  };
    return(
        <div>
          <button className={classes.goalItem} onClick={navigateStat}>
            <p>{props.data.label}</p>
          </button>
        </div>
    )
}

export default GoalItem;

