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
    var state = location.state;
    console.log({state});
    var goal = state.goal;

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
                <nav style={{marginTop: '60px'}}>
                    <Link to="/main" className={classes.navLink}>Back to the main page</Link>
                </nav>
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
