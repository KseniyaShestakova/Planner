import React from "react";
import classes from './Style.module.css'


function YearItem(props) {
    var localHeight = props.height.toString() + 'px';
    return (
        <div style={{marginLeft: '15px',
                     marginBottom: '10px',
                     height: localHeight,
                     width: '50px',
                     backgroundColor: 'rgb(235, 193, 145)',
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

function Year() {
    var monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    // we are supposed to pull this dictionary from the backend somehow
    var heights = { 'Jan': 30, 'Feb': 40, 'Mar': 80, 'Apr': 150, 'May': 160,
                    'Jun': 20, 'Jul': 40, 'Aug': 15, 'Sept': 120, 'Oct': 160, 'Nov': 200, 'Dec': 180};

    return(
        <div className={classes.panel}>
            
            { monthes.map((month) => 
            <YearItem id={month} label={month} height={heights[month]}/>) }
        
            
        </div>
    );

}

export default Year;