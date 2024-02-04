import React, { useState } from "react";
import classes from "./Table.module.css"
import ActivityItem from "./ActivityItem";
import { useLocation } from "react-router-dom";

const Table = (datas) => {
    const location = useLocation();
    var state = location.state;
    // console.log('Received state:')
    var auth = 'Token';
    var token = state.token;
    auth = auth.concat(' ', token);

    const [user, setUser] = useState(state.id);
    const [firstRequest, setFirst] = useState(0);

    const [lastId, setId] = useState(0)
    const [actDatas, setActDatas] = useState([]);
    
    const [bigData, setBigData] = useState({});
    const [goals, setGoals] = useState([]);

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }};
    if (firstRequest == 0) {
            fetch('http://localhost:8000/planner/api/activity/list', requestOptions)
            .then(response => response.json())
            .then(data => {
                setBigData(data['get']);
                setFirst(1);
            });
    }

    if (firstRequest == 1) {
            fetch('http://localhost:8000/planner/api/goal/list', requestOptions)
            .then(response => response.json())
            .then(data => {
                setGoals(data['get']);
                setFirst(2);
            });
    }

    if (firstRequest == 2) {
        console.log(goals);
        setActDatas([]);
        var localDatas = []
        var currId = lastId;
        for (const num in bigData) {
            var item = bigData[num];
            if (item['user'] == user) {
                console.log(item)
                console.log(item['goal_index'])
                var currGoal = 'Not found'
                for (const num in goals) {
                    if (goals[num]['id'] == item['goal_index']) {
                        currGoal = goals[num]['title']
                    }
                }
                console.log(currGoal)
                localDatas = [...localDatas, {
                 id: currId,
                 label: item['title'],
                 description: item['description'],
                 startTime: item['start'],
                 endTime: item['end'],
                 goal: currGoal
                 }];
                currId += 1;          
            }
        }
        setActDatas(localDatas);
        setId(currId);   
        setFirst(3);
    }

    if (firstRequest == 3) {
        console.log(actDatas);
        setFirst(4);
    }

    // input fields
    const [label, setLabel] = useState('')
    const [description, setDescription] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [goal, setGoal] = useState('')
 
    const addActivity = (event) => {
        event.preventDefault();
        let tmp_id = lastId;
        console.log(tmp_id)
        const newActivity = {
            label, description, startTime, endTime, goal,
            id: tmp_id,
            key: tmp_id 
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': auth,
                    'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                'id': tmp_id,
                'user': user,
                'title': label,
                'description': description,
                'start': startTime,
                'end': endTime,
                'goal': goal
            })};
        
        var responseStatus = 0;
        fetch('http://127.0.0.1:8000/planner/api/activity/list', requestOptions)
                .then(response => {
                    responseStatus = response.status;
                    return response.json()
                })
                .then(data => {
                    if (responseStatus >= 200 && responseStatus <= 299) {
                        setActDatas([...actDatas, newActivity]);
                        setId(lastId + 1);
                    } else {
                        console.log('invalid response!');
                    }
                    
                })
                .catch(error => console.log(error));

        
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