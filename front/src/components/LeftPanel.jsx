import React from "react";
import { useState } from "react";
import MyGoals from "./icons/MyGoals";
import GoalItem from "./GoalItem";
import ItemList from "./ItemList";
import classes from "./UI/button/forms/GoalInputForm.module.css"
import { useLocation } from "react-router-dom";

// props можно было назвать по-другому, в целом, это просто свойства
const LeftPanel = (props) => {
    // we have state that shows username, user_id and token
    const location = useLocation();
    var state = location.state;
    var auth = 'Token';
    var token = state.token;
    auth = auth.concat(' ', token);
    
    const [user, setUser] = useState(state.id);
    

    const [label, setLabel] = useState('');

    const [datas, setDatas] = useState([]);

    const [bigData, setBigData] = useState({});

    const [firstRequest, setFirst] = useState(0);

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }};
    if (firstRequest == 0) {
            fetch('http://127.0.0.1:8000/planner/api/goal/list', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data['get'].length)
                console.log(data['get'])
                setBigData(data['get']);
                setFirst(1);
            });
    }
    

    if (firstRequest == 1) {
        setDatas([]);
        var localDatas = [];
        
        for (const num in bigData) {
            var item = bigData[num];
            if (item['user'] == user) {
                localDatas = [...localDatas,  {'id': item['id'], 'label': item['title']}];
            }
        }
        setDatas(localDatas);
        
        setFirst(2);
    }
    
    

    const addNewGoal = (event) => {
        event.preventDefault();
        var id = bigData.length + 10;
        console.log(label);
        console.log(id);
        const newGoal = {
            label, id
        }    
        // a new post request should be created here and sent to the server
        
        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': auth,
                    'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                'id': id,
                'user': user,
                'title': label,
            })};

        console.log(requestOptions);
        
        var responseStatus = 0;
        fetch('http://127.0.0.1:8000/planner/api/goal/list', requestOptions)
                .then(response => {
                    responseStatus = response.status;
                    return response.json()
                })
                .then(data => {
                    if (responseStatus >= 200 && responseStatus <= 299) {
                        setDatas([...datas, newGoal]);
                    } else {
                        console.log('invalid response!');
                    }
                    
                })
                .catch(error => console.log(error));

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