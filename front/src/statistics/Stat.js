import React from "react";
import {
    BrowserRouter as Router,
    useNavigate,
    Link
} from "react-router-dom";
import classes from './Stat.module.css'
import Week from "./components/Week";
import Year from "./components/Year";
import Share from "./components/Share";
import Planner from "./components/Icon";
import { useLocation } from "react-router-dom";


function Stat() {
    const location = useLocation();
    var up_state = location.state;
    console.log({up_state});
    // at this point we know goal name and username and can send delete request
    var goal = up_state.goal;
    var user = up_state.id;
    // create auth string
    var auth = 'Token';
    var token = up_state.token;
    auth = auth.concat(' ', token);

    console.log(user);
    

    const navigate = useNavigate();

    const navigateMain = () => {
        navigate('/main', {state: {token: up_state.token,
                                   username: up_state.username, id: up_state.id}
                                });
    };

    const deleteAndNavigate = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
                'Authorization': auth},
                body: JSON.stringify({ 
                    'user': user,
                    'title': goal,
                })};

        console.log(requestOptions);
        
        fetch('http://127.0.0.1:8000/planner/api/goal/list', requestOptions)
        .then(response => {
            if (response.status < 200 || response.status > 299) {
                console.log('invalid response!');
            } else {
                navigateMain();
            }  
        });

    }

    return(
        <div className={classes.statMain}>
            <div className={classes.leftPanel}>
                <div className={classes.text}>
                    <p marginTop='40px'>Goal statistics: {goal}</p>
                    <div className={classes.line}></div>
                </div>
                <div className={classes.weekText}>Week statistics</div>
                <Week/>
                <div className={classes.yearText}>Year statistics</div>
                <Year/>
                <button  onClick={navigateMain}>
                        <p>Back to the main page</p>
                </button>
                <button  onClick={deleteAndNavigate}>
                        <p>Delete this goal</p>
                </button>

            </div>
            <div className={classes.sharePanel}>
                <Share label='Share with others!' button='Share' goal={goal}/>
                <Share label='Compare with others!' button='Compare' goal={goal}/>
            </div>
            <div className={classes.iconPanel}>
                <Planner/>
            </div>
            
        </div>
    );
}

export default Stat;
