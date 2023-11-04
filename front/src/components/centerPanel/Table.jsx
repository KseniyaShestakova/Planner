import React, { useState } from "react";
import classes from "./Table.module.css"
import ActivityItem from "./ActivityItem";

const Table = (datas) => {
    const [lastId, setId] = useState(0)
    const [actDatas, setActDatas] = useState([{'id' : '0xx', 
                                                label: 'Test activity',
                                                description: 'It is for testing purpose',
                                                startTime: '09:00',
                                                endTime: '9:10',
                                                goal: 'Studies'}]);

    // input fields
    const [label, setLabel] = useState('')
    const [description, setDescription] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [goal, setGoal] = useState('')
 
    const addActivity = (event) => {
        event.preventDefault();
        let tmp_id = lastId.toString() + 'xxx';
        console.log(tmp_id)
        const newActivity = {
            label, description, startTime, endTime, goal,
            id: tmp_id,
            key: tmp_id 
        }

        setActDatas([...actDatas, newActivity]);
        setId(lastId + 1);
    }
    

    return(
        <div className={classes.global}>
            <div className={classes.table}>
                { actDatas.map((data) => 
                <ActivityItem data={data} key={data.id}/>) }
            
            </div>
            <form className={classes.form}>
                <div className={classes.bigText}>Add more activities!</div>
                <input placeholder=' Activity'
                type='text'
                onChange={e => setLabel(e.target.value)}
                ></input>
                <input placeholder=' Description'
                type='text'
                onChange={e => setDescription(e.target.value)}
                ></input>
                <input placeholder=' Start time'
                type='text'
                onChange={e => setStartTime(e.target.value)}></input>
                <input placeholder=' End time'
                onChange={e => setEndTime(e.target.value)}
                ></input>
                <input placeholder=' Goal'
                onChange={e => setGoal(e.target.value)}
                ></input>
                <button onClick={addActivity} className={classes.addButton}
                >Add activity</button>
            </form>
            
            
        </div>
        )
}

export default Table;