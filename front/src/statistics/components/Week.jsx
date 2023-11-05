import React from "react";
import classes from './Style.module.css'


function WeekItem(props) {
    var localHeight = props.height.toString() + 'px';
    return (
        <div style={{marginLeft: '30px',
                     marginBottom: '10px',
                     height: localHeight,
                     width: '80px',
                     backgroundColor: 'rgb(148, 228, 148)',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'end',
                     alignItems: 'center'
                    }}>
            <div>{props.label}</div>
            <div>{props.height}</div>
        </div>
    );
}

function Week() {
    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    // we are supposed to pull this dictionary from the backend somehow
    var heights = { 'Mon': 100, 'Tue': 200, 'Wed': 120, 'Thu': 110, 
                    'Fri': 40, 'Sat': 50, 'Sun': 30};

    return(
        <div className={classes.panel}>
            
            { days.map((day) => 
            <WeekItem id={day} label={day} height={heights[day]}/>) }
        
            
        </div>
    );

}

export default Week;