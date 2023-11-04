import React from "react";
import classes from "./Table.module.css"

const ActivityItem = (props) => {
    return(
        <div className={classes.item}>
            <h3>{props.data.label}</h3>
            <p>{props.data.description}</p>
            <p>Start: {props.data.startTime}</p>
            <p>End: {props.data.endTime}</p>
            <p>Associated goal: {props.data.goal}</p>
        </div>
    )
}

export default ActivityItem;