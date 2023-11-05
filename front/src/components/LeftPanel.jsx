import React from "react";
import { useState } from "react";
import MyGoals from "./icons/MyGoals";
import GoalItem from "./GoalItem";
import ItemList from "./ItemList";
import classes from "./UI/button/forms/GoalInputForm.module.css"

// props можно было назвать по-другому, в целом, это просто свойства
const LeftPanel = (props) => {
    const [label, setLabel] = useState('');

    const [datas, setDatas] = useState([
        {id: 1, label: 'Sports'},
        {id: 2, label: 'Studies'},
      ]);

    const addNewGoal = (event) => {
        event.preventDefault();
        const newGoal = {
            label, id: Date.now()
        }

        setDatas([...datas, newGoal]);
        setLabel('')
    };


    
    return(
        <div className="left_panel">
            <MyGoals/>
            <ItemList datas={datas}/>
            <form className={classes.form}>
                <input placeholder=" New goal name" 
                type="text"
                onChange={e => setLabel(e.target.value)}
                className={classes.input}></input>

                <button className={classes.addButton} onClick={addNewGoal}>Add new goal</button>
            </form>
        </div>
    )
}


export default LeftPanel;