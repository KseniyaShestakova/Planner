import React from "react";
import { useState } from "react";
import classes from "./GoalItem.module.css"
import {Routes, Route, useNavigate} from "react-router-dom";

function Empty() {
  return (<div>Empty</div>);
}

// props можно было назвать по-другому, в целом, это просто свойства
const GoalItem = (props) => {
    // не получилось разобраться с тем, как перейти на пустую страницу, надо спросить на семинары
    const navigate = useNavigate();

    const navigateEmpty = () => {
        navigate('/empty', {replace : true});
    };
    return(

        <div>
          <button className={classes.goalItem}>
            <p>{props.data.label}</p>
          </button>
        </div>
    )
}

export default GoalItem;

// data, description, label - это какие-то кастомные названия, их можно было бы переназвать
// data={{description: "React is a package", label: "React", id: 1}}