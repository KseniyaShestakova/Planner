import React from "react";
import classes from "./Date.module.css"

const DateTime = () => {
    return(
        <div className={classes.date}>
            <div className={classes.textDiv}>
                Wed., Oct. 18
            </div>
            <button className={classes.changeDateBtn}>
                Change Date
            </button>
        </div>
    )
}

export default DateTime;